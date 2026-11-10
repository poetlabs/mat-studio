/* Buttons on the design portal: "Design in Mat Studio" on an order page, "Design all in Mat Studio" on the queue. */
(function(){
  const css="font:600 13px system-ui,sans-serif;background:#17646C;color:#fff;border:0;border-radius:5px;padding:8px 12px;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,.25)";
  const bar=document.createElement("div"); bar.style.cssText="position:fixed;right:16px;bottom:16px;z-index:99999;display:flex;gap:8px";
  const btn=(t,f)=>{ const b=document.createElement("button"); b.type="button"; b.textContent=t; b.style.cssText=css; b.onclick=f; bar.appendChild(b); return b; };
  if(/\/Design\/ViewQueue/i.test(location.pathname)){
    btn("Design all in Mat Studio",()=>chrome.runtime.sendMessage({queue:true}));
    for(const a of document.querySelectorAll('a[href*="designNumber="]')){ const m=a.getAttribute("href").match(/designNumber=(\d+)/); if(!m) continue;
      const s=document.createElement("a"); s.href="#"; s.textContent=" · Mat Studio"; s.style.cssText="color:#17646C;font-weight:600"; s.onclick=e=>{ e.preventDefault(); chrome.runtime.sendMessage({design:m[1]}); }; a.after(s); }
  } else { const m=location.search.match(/designNumber=(\d+)/); if(m && /Design Number/i.test(document.body.innerText)) btn("Design in Mat Studio",()=>chrome.runtime.sendMessage({design:m[1]})); }
  if(bar.children.length) document.body.appendChild(bar);
})();
