# Little Explorers

React and Vite frontend scaffold for a children's activities platform.

## Getting started

```sh
npm install
npm run dev
```

Create production assets with `npm run build` and preview them with `npm run preview`.

## Project structure

- `src/components/` contains reusable UI, layout, public-site, activity, registration, vacation, child, and dashboard components.
- `src/pages/` contains page-level views grouped by public, authentication, and parent areas.
- `src/data/` contains local demonstration content. Replace it with API-backed data when a backend is available.
- `src/context/` and `src/hooks/` provide lightweight client-side state for the prototype.
- `public/images/` and `src/assets/` are reserved for project-owned media.

Authentication and form submissions are prototype-only; no data is sent to a server. Do not put secrets in `VITE_*` variables because Vite exposes them to the browser.
