# Logo Mat Studio (hosted)

Runs the Logo Mat Proof Studio as a web service: open the link, type a sketch number, press Go.

- `matstudio.py`: the small server (Python 3, no extra packages). It serves the studio, reads order pages from the design portal and downloads the artwork.
- `logo-mat-proof-studio.html`: the studio itself. To update the studio, replace this file and push; Render redeploys.
- `render.yaml`: Render settings (free web service, start command, health check).

Set `MATSTUDIO_KEY` in Render (Environment) to a password. The browser asks for it once (any user name, that password).
