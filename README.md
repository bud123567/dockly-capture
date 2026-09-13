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

Serve from the repository root rather than opening the files directly, so that
directory URLs resolve to their `index.html`:

```sh
python3 -m http.server 8000
```

Then open http://localhost:8000

## Deploying

Asset and page references are relative, so the site works both at a domain root
and under a subpath. It is published with GitHub Pages from `main` at
<https://bud123567.github.io/dockly-capture/>, and deploys unchanged to Netlify,
Vercel, or Cloudflare Pages.

`app.js` resolves the site root at runtime from its own script URL
(`new URL('.', document.currentScript.src)`), so the generated app-card links
and icon paths follow whatever base the site is served from.

## Notes

Storefront preview only — no downloads, and no payment is collected. The
Cloudflare bot-detection script present in the hosted responses has been
stripped from the mirrored HTML.
