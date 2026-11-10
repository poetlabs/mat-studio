#!/usr/bin/env python3
"""Logo Mat Studio launcher.

Runs the Proof Studio on this computer and lets it read orders from the design portal:
type a sketch/design number, press Go, and the order, its instructions and the customer
artwork are loaded straight into the studio.

    python matstudio.py            (opens http://localhost:8765 in your browser)

Needs Python 3.8+ and nothing else. Keep logo-mat-proof-studio.html in the same folder.
On a PC only that computer can reach it (it listens on 127.0.0.1).

Hosted (Render and similar): when the PORT environment variable is set it listens on 0.0.0.0:PORT
and opens no browser. Set MATSTUDIO_KEY to a password and the browser will ask for it
(any user name, that password); /healthz stays open for the host's health check.
"""
import base64
import hmac
import html
import http.server
import json
import os
import re
import socketserver
import sys
import threading
import urllib.parse
import urllib.request
import webbrowser
from html.parser import HTMLParser

HOSTED = bool(os.environ.get("PORT"))
PORT = int(os.environ.get("PORT") or os.environ.get("MATSTUDIO_PORT", "8765"))
BIND = "0.0.0.0" if HOSTED else "127.0.0.1"
KEY = os.environ.get("MATSTUDIO_KEY", "")
PORTAL = os.environ.get("MATSTUDIO_PORTAL", "https://designupload.logomatsllc.com")
ORDER_PATH = "/Design/ViewDesignHtml?designNumber="
# artwork may only be fetched from these hosts
ALLOWED_HOSTS = ("live.mtapi.biz", "designupload.logomatsllc.com", "amazonaws.com", "localhost", "127.0.0.1")
HERE = os.path.dirname(os.path.abspath(__file__))
APP_FILE = os.path.join(HERE, "logo-mat-proof-studio.html")
UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36"
VOID = {"br", "img", "meta", "link", "input", "hr", "source", "area", "base", "col", "embed", "param", "track", "wbr"}


# ---------- a tiny DOM, enough to read the order page ----------
class Node:
    __slots__ = ("tag", "attrs", "kids", "parent")

    def __init__(self, tag, attrs, parent):
        self.tag, self.attrs, self.kids, self.parent = tag, dict(attrs), [], parent

    def cls(self):
        return (self.attrs.get("class") or "").split()

    def elements(self):
        return [k for k in self.kids if isinstance(k, Node)]

    def walk(self):
        yield self
        for k in self.kids:
            if isinstance(k, Node):
                yield from k.walk()

    def text(self):
        out = []
        for k in self.kids:
            if isinstance(k, Node):
                if k.tag in ("script", "style"):
                    continue
                if k.attrs.get("data-cfemail"):
                    out.append(cf_decode(k.attrs["data-cfemail"]))
                    continue
                t = k.text()
                out.append("\n" + t + "\n" if k.tag in ("p", "div", "br", "h1", "h2", "h3", "h4", "h5", "li", "tr") else t)
            else:
                out.append(k)
        return "".join(out)


class Builder(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.root = Node("root", [], None)
        self.cur = self.root

    def handle_starttag(self, tag, attrs):
        n = Node(tag, attrs, self.cur)
        self.cur.kids.append(n)
        if tag not in VOID:
            self.cur = n

    def handle_startendtag(self, tag, attrs):
        self.cur.kids.append(Node(tag, attrs, self.cur))

    def handle_endtag(self, tag):
        n = self.cur
        while n is not None and n.tag != tag:
            n = n.parent
        if n is not None and n.parent is not None:
            self.cur = n.parent

    def handle_data(self, data):
        self.cur.kids.append(data)


def cf_decode(hexs):
    """Cloudflare hides e-mail addresses on the page; this is their published decoding."""
    try:
        key = int(hexs[:2], 16)
        return "".join(chr(int(hexs[i:i + 2], 16) ^ key) for i in range(2, len(hexs), 2))
    except ValueError:
        return ""


def clean(t):
    return re.sub(r"[ \t\r\f\v]+", " ", re.sub(r"\s*\n\s*", "\n", t)).strip()


def parse_order(page, number):
    b = Builder()
    b.feed(page)
    root = b.root
    full = clean(root.text())
    lines = [l.strip() for l in full.split("\n") if l.strip()]
    if not re.search(r"Design Instructions|Design Number", full, re.I):
        raise ValueError("The portal returned no order for this number.")

    def after(label):
        for i, l in enumerate(lines):
            if re.fullmatch(label + r"\s*:?", l, re.I) and i + 1 < len(lines):
                return lines[i + 1]
            m = re.match(label + r"\s*:\s*(.+)$", l, re.I)
            if m:
                return m.group(1).strip()
        return ""

    # the details block: a column of labels ("Size:") beside a column of values, paired by position
    fields = []
    for n in root.walk():
        ps = [k for k in n.elements() if k.tag == "p"]
        labels = [clean(p.text()) for p in ps]
        if len(labels) >= 3 and all(l.endswith(":") for l in labels) and n.parent is not None:
            sibs = n.parent.elements()
            i = sibs.index(n)
            if i + 1 < len(sibs):
                vals = [clean(p.text()) for p in sibs[i + 1].elements() if p.tag == "p"]
                for j, l in enumerate(labels):
                    fields.append([l.rstrip(":").strip(), vals[j] if j < len(vals) else ""])
            break

    special = ""
    for n in root.walk():
        if n.tag == "p" and re.fullmatch(r"Special Instructions\s*:?", clean(n.text()), re.I) and n.parent is not None:
            special = clean(n.parent.text())
            special = re.sub(r"^Special Instructions\s*:?\s*", "", special, flags=re.I)
            break

    artwork, similar = [], []
    for n in root.walk():
        if n.tag != "a" or not n.attrs.get("href"):
            continue
        href = urllib.parse.urljoin(PORTAL + "/", n.attrs["href"])
        label = clean(n.text())
        if "/attachment/" in href:
            seg = urllib.parse.unquote(href.rstrip("/").split("/")[-2] if href.rstrip("/").endswith("download") else href.rstrip("/").split("/")[-1])
            name = re.sub(r"_[0-9a-fA-F-]{36}$", "", seg)
            artwork.append({"label": label, "name": name, "url": href})
        elif re.search(r"designNumber=\d+", href) and str(number) not in href:
            similar.append({"label": label, "url": href})

    product = next((l for l in lines if re.match(r"^\d+\s*-\s*.*(impression|colou?r\s*star|promo|scrape)", l, re.I)), "")
    order = {
        "number": after(r"NEW Design Number") or str(number),
        "name": after(r"Design Name"),
        "customer": after(r"Name"),
        "email": after(r"Email"),
        "account": after(r"Customer Account #"),
        "product": product,
        "fields": fields,
        "special": special,
        "artwork": artwork,
        "similar": similar,
        "url": PORTAL + ORDER_PATH + str(number),
    }
    # the same "Label: value" text the studio reads when an order page is pasted in
    txt = ["NEW Design Number: " + order["number"], "Design Name: " + order["name"], product]
    txt += [f"{l}: {v}" for l, v in fields]
    txt += ["Special Instructions: " + (special or "None")]
    order["text"] = "\n".join(txt)
    return order


def fetch(url, timeout=40):
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "text/html,application/xhtml+xml,image/*,*/*;q=0.8", "Accept-Language": "en"})
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return r.read(), r.headers.get("Content-Type", "application/octet-stream"), r.geturl()


class Handler(http.server.BaseHTTPRequestHandler):
    def log_message(self, fmt, *args):
        sys.stderr.write("  " + (fmt % args) + "\n")

    def send(self, code, body, ctype="application/json; charset=utf-8", extra=None):
        if isinstance(body, str):
            body = body.encode("utf-8")
        self.send_response(code)
        self.send_header("Content-Type", ctype)
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        for k, v in (extra or {}).items():
            self.send_header(k, v)
        self.end_headers()
        self.wfile.write(body)

    def err(self, code, msg):
        self.send(code, json.dumps({"error": msg}))

    def authorised(self):
        if not KEY:
            return True
        h = self.headers.get("Authorization", "")
        if h.startswith("Basic "):
            try:
                pw = base64.b64decode(h[6:]).decode("utf-8", "replace").split(":", 1)[-1]
                if hmac.compare_digest(pw, KEY):
                    return True
            except Exception:
                pass
        self.send(401, "Mat Studio: password needed", "text/plain; charset=utf-8", {"WWW-Authenticate": 'Basic realm="Mat Studio"'})
        return False

    def do_GET(self):
        u = urllib.parse.urlparse(self.path)
        q = urllib.parse.parse_qs(u.query)
        if u.path == "/healthz":
            return self.send(200, "ok", "text/plain; charset=utf-8")
        if not self.authorised():
            return
        if u.path in ("/", "/index.html"):
            try:
                with open(APP_FILE, "rb") as f:
                    return self.send(200, f.read(), "text/html; charset=utf-8")
            except OSError:
                return self.send(500, "logo-mat-proof-studio.html must be in the same folder as matstudio.py", "text/plain; charset=utf-8")
        if u.path == "/api/ping":
            return self.send(200, json.dumps({"ok": True, "portal": PORTAL}))
        if u.path == "/api/order":
            n = (q.get("n") or [""])[0].strip()
            if not re.fullmatch(r"\d{4,10}", n):
                return self.err(400, "Type a design number (digits only).")
            try:
                page, _, _ = fetch(PORTAL + ORDER_PATH + n)
                return self.send(200, json.dumps(parse_order(page.decode("utf-8", "replace"), n)))
            except ValueError as e:
                return self.err(404, str(e))
            except Exception as e:  # network trouble
                return self.err(502, "Could not reach the design portal: " + str(e))
        if u.path == "/api/page":  # the raw order page; the studio reads it
            n = (q.get("n") or [""])[0].strip()
            if not re.fullmatch(r"\d{4,10}", n):
                return self.err(400, "Type a design number (digits only).")
            try:
                page, ctype, _ = fetch(PORTAL + ORDER_PATH + n)
                return self.send(200, page, ctype)
            except Exception as e:
                return self.err(502, "Could not reach the design portal: " + str(e))
        if u.path == "/api/file":
            url = (q.get("u") or [""])[0]
            host = urllib.parse.urlparse(url).hostname or ""
            if not url.startswith(("https://", "http://")) or not any(host == h or host.endswith("." + h) for h in ALLOWED_HOSTS):
                return self.err(400, "That file is not on the design portal.")
            try:
                data, ctype, _ = fetch(url, timeout=120)
                return self.send(200, data, ctype)
            except Exception as e:
                return self.err(502, "Could not download the artwork: " + str(e))
        self.err(404, "Not found")


class Server(socketserver.ThreadingMixIn, http.server.HTTPServer):
    daemon_threads = True
    allow_reuse_address = True


def main():
    srv = Server((BIND, PORT), Handler)
    url = f"http://localhost:{PORT}/"
    if HOSTED:
        print(f"Logo Mat Studio is serving on {BIND}:{PORT}" + (" (password on)" if KEY else " (no password: set MATSTUDIO_KEY)"), flush=True)
    else:
        print(f"Logo Mat Studio is running at {url}\nLeave this window open while you work; close it to stop.")
    if not HOSTED and "--no-browser" not in sys.argv:
        threading.Timer(0.8, lambda: webbrowser.open(url)).start()
    try:
        srv.serve_forever()
    except KeyboardInterrupt:
        pass


if __name__ == "__main__":
    main()
