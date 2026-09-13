# dockly-capture

Static source for the **Dockly** storefront preview — a concept Mac app store
("Small apps. Big difference.") with individual listing pages for Dockly Snap,
Dockly Capture, and Murmur.

Mirrored from the hosted preview at
`macharbor-caleb.amused-pike-8012.chatgpt.site`.

## Pages

| Path | Page |
| --- | --- |
| `index.html` | Storefront home — hero, filterable app catalog, pricing, FAQ |
| `apps/index.html` | App store listing with category filters |
| `apps/dockly-capture/index.html` | Dockly Capture listing |
| `apps/dockly-snap/index.html` | Dockly Snap listing |
| `apps/murmur/index.html` | Murmur listing |
| `about/index.html` | About the store |

## Assets

- `style.css` — base stylesheet
- `refresh.css` — layered visual refresh
- `app.js` — catalog rendering, category filtering, search, detail dialog
- `motion.js` — scroll and entrance animations
- `assets/` — logo and per-app icons

## Local preview

Pages reference assets with root-absolute paths (`/style.css`, `/assets/…`), so
serve from the repository root rather than opening the files directly:

```sh
python3 -m http.server 8000
```

Then open http://localhost:8000

## Deploying

Because asset paths are root-absolute, this deploys as-is to any host serving
the repo at a domain root (Netlify, Vercel, Cloudflare Pages, or GitHub Pages
with a custom domain). Serving it from a GitHub Pages *project* subpath
(`/dockly-capture/`) requires rewriting those paths to be relative first.

## Notes

Storefront preview only — no downloads, and no payment is collected. The
Cloudflare bot-detection script present in the hosted responses has been
stripped from the mirrored HTML.
