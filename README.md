# Xavathon 2027

Site for the Xavathon 2027 mini marathon, St. Xavier's College (Autonomous), Kolkata.

Astro 5 + Tailwind v4. Static output, no framework runtime. The only client-side
JavaScript on the whole site is the countdown timer.

## Running it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output to ./dist
npm run preview
```

## Where things live

```
src/
  data/xavathon.ts     all copy, fees, timings, routes, FAQ, contacts
  layouts/             BaseLayout — header, footer, fonts, meta
  components/          section and UI components
  pages/               one file per route
  styles/global.css    design tokens, keyframes, animation utilities
```

**Edit content in `src/data/xavathon.ts`, not in components.** Every page reads
from it. Changing a fee, a flag-off time or a KM marker updates the page, the
navigation and — in the case of route stops — the course map, all at once.

## Pages

| Route | Source |
| --- | --- |
| `/` | `index.astro` |
| `/about` | `about.astro` |
| `/races` | `races.astro` |
| `/route` | `route.astro` |
| `/register` | `register.astro` |
| `/event-day` | `event-day.astro` |
| `/participant-guide` | `participant-guide.astro` |
| `/awards` | `awards.astro` |
| `/partners` | `partners.astro` |
| `/gallery` | `gallery.astro` |
| `/faq` | `faq.astro` |
| `/contact` | `contact.astro` |
| 404 | `404.astro` |

## Design tokens

Defined in `src/styles/global.css` under `@theme`, so Tailwind generates
utilities from them automatically (`--color-teal` gives `bg-teal`, `text-teal`,
`border-teal`).

| Token | Value | Used for |
| --- | --- | --- |
| `deep` | `#062e3a` | dark sections, body text |
| `teal` | `#0f6e78` | primary accent, links, CTAs |
| `mist` | `#bfe0dc` | tints, borders and text on dark |
| `chalk` | `#f1f5f3` | page background |
| `brass` | `#d9a43c` | medals, awards, accents on dark only |
| `slate` | `#4f6b6e` | secondary text |

Type is Source Serif 4 (`font-display`) and Source Sans 3 (`font-body`).

## Motion

All CSS, all in `global.css`, all disabled under `prefers-reduced-motion`.

- `.xv-print` — footprints that step in once and stay (hero, podium)
- `.xv-walk` — footprints looping along a road (`RouteDivider`)
- `.xv-reveal` — scroll-driven reveal via `animation-timeline: view()`.
  Progressive enhancement: without support, content is simply already visible.
- `.xv-marquee`, `.xv-shine`, `.xv-faq` — sponsor loop, medal sweep, FAQ accordion

## The course map

`CourseMap.astro` does not use hand-placed coordinates. It walks the perimeter of
a rounded rectangle and places each stop at its fraction of the race distance, so
the map is generated from the same KM figures as the list beside it. Add a stop
to `routeMaps` in the data file and it appears on both.

On a loop, one point can be several things at once. Coincident markers merge, so
the gate on the 10 KM correctly reads `0.0 · 5.0 · 10.0 km — Start & finish`, and
on a two-lap course Chowringhee reads `2.0 · 7.0 km`. SVG labels are hidden below
`sm`, where they would be too small to read; the stop list underneath carries the
same information.

---

## Before this goes live

These are placeholders. Each one is flagged in the data file.

1. **The Principal's message** (`principalMessage`) is written text, not his
   words. It renders with a visible warning banner until you set
   `placeholder: false`. Replace before publishing — do not ship invented words
   under a real person's name.

2. **The event date** (`event.date`) is set to 14 February 2027 so the countdown
   runs. Every date on the site derives from this one constant.

3. **Fees, deadlines, prize money and the refund policy** are plausible
   placeholders pending the Organising Committee. Items marked
   `provisional: true` render a "to be confirmed" tag.

4. **Registration link** (`registerUrl`) points at `#register`. Swap for the real
   gateway URL.

5. **Contact form endpoint** — `formAction` in `ContactUs.astro` is a Formspree
   placeholder.

6. **Photographs** — `gallery.astro` and `InstagramFeed.astro` render placeholder
   tiles at the correct aspect ratios. Marked with comments.

7. **Social links** — the `socials` array in `ContactUs.astro` points at bare
   domains.

## Checks run

Builds clean on Astro 5 / Tailwind 4, 13 routes. No runtime JS errors. All 191
internal links and cross-page anchors resolve. No horizontal overflow at 390px
on any page. Screenshot-reviewed at 1280px and 390px, with reduced motion both on
and off.
