# Nelson Mwaura — portfolio

Source for `portfolio-e16.pages.dev`. Six routes, pre-rendered to static HTML at
build time, then hydrated.

## Design system

`../design.md` is the spec and it is locked. Read it before changing anything
visual. `src/styles/tokens.css` and `src/styles/styles.css` are ports of the
files next to it and should stay in step with them.

The short version: one type family (Instrument Sans) with JetBrains Mono for
metadata only, neutral paper with a real dark mode, accent capped at roughly 5%
of any viewport, rules and rows instead of cards, and a motion vocabulary of
exactly three moves. `design.md` also carries a "Banned in this project" list —
terminal chrome, radial glows, scroll reveals, bordered metadata chips, invented
metrics, and testimonials that did not come from a real named person.

## Build

```
npm run dev      # vite dev server
npm run build    # vite-react-ssg build -> dist/
npm run lint
```

`build` is `vite-react-ssg`, not plain `vite`. Social scrapers do not execute
JavaScript, so each route is rendered to its own `index.html` with its own
`<title>`, `canonical`, and full `og:*` set already in the markup. A
client-rendered SPA would fall back to a single generic share card for the whole
site.

Routes are declared once in `src/routes.jsx`; every one of them is emitted.

## Per-route metadata

`src/components/Seo.jsx` owns it. `og:image` has to be absolute, so the domain
lives in the `SITE` constant in that file — moving to a custom domain is a
one-line change there rather than an edit in six files.

The six OG cards in `public/media/og-*.png` are PNG on purpose: several scrapers
still fail to render WebP, and a preview that silently does not appear is worse
than a slightly larger file.

## Assets

`public/media/` mirrors `../media/`, whose `README.md` is the asset manifest:
what exists, what is missing, and the capture recipe for project screenshots
(headless Chromium at 1120×700 at 2x, downsampled to 1600×1000, WebP q84).

Project imagery is only ever a real capture of real running software. A project
that cannot be photographed ships without an image, and the Work page says so.

## Motion and reduced motion

`prefers-reduced-motion: reduce` zeroes every duration, forces
`animation-iteration-count: 1` so infinite animations stop rather than strobe,
and drops both transforms to `none`. Two features are gated on it directly: the
cycling avatar on the home lede and the animated portrait on About, which swaps
to a static still via `<picture>` so only one file is ever downloaded.

## Things that will bite you

- **Nav content needs 347px.** `overflow-x: clip` on the root hides nav overflow
  from a page-level scroll check, so measure `.site-nav .wrap` scrollWidth
  against clientWidth directly.
- **The theme toggle cannot know the stored theme at pre-render.** The inline
  script in `index.html` applies `data-theme` before paint so colours never
  flash; the button label catches up on React's first client render.
- **`--measure` is `68ch`.** Container widths therefore depend on the loaded
  font, which is what makes the home route shift when Instrument Sans arrives.
