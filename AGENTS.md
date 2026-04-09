# Agents

## Project

React + Vite + TypeScript frontend for a Lisbon hostel (lisbon-hostel-frontend).

## Dev Commands

```
npm run dev      # Dev server
npm run build    # tsc && vite build
npm run preview # vite preview
```

Run from `frontend/` directory.

## Critical: Non-root deployment path

Both `vite.config.ts` and `App.tsx` hardcode the basename `/hotel-15/`. If you change one, change both. The app will be broken otherwise.

## Build

- `npm run build` runs `tsc` first, then `vite build`. TypeScript must pass before Vite builds.
- Output is GitHub Pages-compatible (`public/404.html` exists; `.nojekyll` is NOT in repo — create if needed).
- No lint/typecheck scripts — only `dev`, `build`, `preview` available.

## i18n

- `src/i18n.ts` — setup; `src/translations/en.json` and `pt.json` — content.
- Only two languages: English (fallback) and Portuguese.
- Browser language auto-detection via `i18next-browser-languagedetector`.

## Routing

- React Router v7, client-side. Two routes: `/` (Home) and `/services` (HostelAndLuggage).
- `ScrollToTop` resets scroll on every route change; `main.tsx` also forces scroll to top for ~60 frames on load.

## CSS / Styling

- Tailwind CSS with custom theme (see `tailwind.config.js`).
- Custom colors: `lisbon-yellow`, `tejo-blue`, `lisbon-blue`, `lisbon-tile`, `lisbon-sand`, `limnia-gold`.
- Fonts: Outfit (heading), Inter (body), Cormorant Garamond (serif).
- Fonts loaded via Google Fonts CDN in `index.css` — no font files in repo.

## Notable Libraries

hello

- `@react-three/fiber` + `@react-three/drei` — 3D scroll experience (`ScrollExperience.tsx`)
- `leaflet` + `react-leaflet` — maps
- `lenis` — smooth scroll
- `framer-motion` — animations
- `clsx` + `tailwind-merge` — class utility
- `emailjs/browser` — email forms

hell
node_modules