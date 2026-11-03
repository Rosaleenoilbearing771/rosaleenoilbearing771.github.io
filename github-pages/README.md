# GitHub Pages deployment

The app ships a static build for GitHub Pages — same design, same routes, no server.

## What is in this folder

`pages.yml` — the GitHub Actions workflow that builds and publishes the site. GitHub does
not let an app create files under `.github/workflows/`, so copy it by hand:

```
mkdir -p .github/workflows
cp github-pages/pages.yml .github/workflows/pages.yml
```

Then, in the repository on GitHub: **Settings → Pages → Source: GitHub Actions**.

## How the build works

- `npm run build:pages` builds `pages.html` with `vite.pages.config.js` into `dist-pages/`,
  then `scripts/pages-postbuild.mjs` renames it to `index.html`, copies it to `404.html`
  (so deep links and reloads on nested routes resolve to the client router) and adds
  `.nojekyll`.
- `PAGES_BASE` sets the base path. The workflow computes it from the repository name:
  `/` for `<user>.github.io`, `/repo/` for a project page. Assets are emitted with that prefix.
- The static build has no server: `src/pages-main.jsx` boots the router in the browser,
  reads go through `src/lib/data.static.js` straight to the Base44 API (no server functions),
  and `base44:document` is replaced by a no-op stub.

## Before data shows up

The journal reads posts from the Base44 API, which only answers once the Base44 app is
published. Until then the journal renders its empty state.