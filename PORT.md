# Port plan: apply the 2026-08-04 redesign to this app

This app is the source for `portfolio-e16.pages.dev`. The redesign it needs was
built and verified as static HTML in the parent directory (commit `e998c69`).
That static build is the **reference implementation**, not the deliverable.

## Read these first, in order

1. `../design.md` — the locked design system. Genre, macrostructures, theme
   table with exact OKLCH values, typography, motion vocabulary, imagery rules,
   CTA voice, and a "Banned in this project" list. **This is the spec.**
2. `../tokens.css` — every token, light and dark. Port verbatim.
3. `../styles.css` — how the tokens are used. Component classes map 1:1 to the
   components below.
4. `../media/README.md` — asset manifest, capture recipes, what exists and what
   is still missing.
5. `../index.html`, `../work.html`, `../about.html`, `../work/*.html` — final
   copy. Reuse the text; it has been fact-checked against repos and the CV.

## Component mapping

| Existing | Action |
| --- | --- |
| `TerminalModal.jsx` | **Delete.** Hand-drawn terminal chrome, banned outright. |
| `AchievementToast.jsx` | **Delete.** Celebratory toast, banned. Silent success. |
| `InteractiveEffects.jsx` | **Delete** unless it does something functional. |
| `Sidebar.jsx` | Replace with the N9 edge-aligned nav: wordmark left, two links plus theme toggle right. No avatar in the nav. |
| `Hero.jsx` | Rebuild as the Index-First lede: cycling avatar, status line, h1, two paragraphs, two CTAs. |
| `Projects.jsx` | Rebuild as `.entry` rows. No cards, no left label column, no bordered chips. |
| `TechStack.jsx` | Rebuild as the `.toolset` list: grouped, one flowing line per tool, no badges or icon tiles. |
| `Contact.jsx` | Rebuild as `.contact-list` labelled rows. |
| `Footer.jsx` | Ft2 inline single line. |
| `index.css` (1221 lines) | **Replace** with `tokens.css` + `styles.css`. Do not merge. |

## Routing and meta

Currently single-page with no router. The redesign is 6 routes:
`/`, `/work`, `/about`, `/work/mara`, `/work/document-intelligence`,
`/work/optiven-crm`.

**Meta is the hard part.** Every route needs its own `<title>`, `canonical`, and
full `og:*` set including `og:image`, `og:image:width/height/alt`, and
`twitter:card`. A client-rendered SPA cannot do this: social scrapers do not run
your JS, so every share preview would fall back to one generic card. Options, in
order of preference:

1. Pre-render at build (`vite-plugin-ssr`, `vite-react-ssg`, or similar).
2. Static per-route HTML shells with the meta baked in.
3. Accept one shared OG card for the whole site and drop the per-page cards.

The six cards already exist in `../media/og-*.png`, 1200x630 PNG. They must stay
PNG; several scrapers do not render WebP.

## Dependencies

`framer-motion` is almost certainly removable. The entire motion vocabulary is
three CSS rules: colour/opacity on hover, a 1.03 thumbnail scale on hover **and**
`:focus-visible`, and a 0.985 press scale. See `../design.md` § Motion.

## Non-negotiables

- `prefers-reduced-motion: reduce` zeroes durations, forces
  `animation-iteration-count: 1`, and drops both transforms to `none`.
- Nav content needs 347px. Below 360px something must give. `overflow-x: clip`
  on the root hides nav overflow from a page-level scroll check, so test
  `.site-nav .wrap` scrollWidth against clientWidth directly.
- No invented metrics, testimonials, or client names. Ever.
- No `href="#"`. A link goes somewhere or is not a link.
- Avatar cycling and the animated About portrait are both gated on
  `prefers-reduced-motion`.

## Verification to port too

The static build was checked on every change:

- 6 pages x 5 widths (320/375/414/768/1280): no horizontal scroll, no JS errors
- No multi-line clickable text at any mobile width
- Nav `.wrap` scrollWidth vs clientWidth
- Every referenced asset resolves, including absolute OG URLs
- Reduced-motion swap verified in both states
- CLS measured at 0.0073

## Still outstanding, not code

- **Testimonials.** Zero. The single biggest gap versus kasili.dev.
- **Mara case study claims.** The Telegram bot and backtesting details were
  written from working memory; the walk-forward RF and Markowitz details came
  from a design file. Neither is repo-sourced. Verify before shipping.
- Screenshots for VulnWatch, ClientScore, Clinical Data Warehouse. All three are
  private and two handle client and patient data, so they may stay absent. The
  Work page already says so.
