# PROJECT_STATUS.md

**Project:** Portfolio — Neo-Scrapbook Brutalism
**Owner:** Mrigya Sahai
**Last updated:** 2026-08-10
**Status:** ✅ Build complete · ⏳ Needs real content before deploy

---

## 1. Completed features

### Design system (docs/01–08)
- Full reference analysis + adaptation strategy (swiss grid × scrapbook brutalism)
- Token system in `src/app/globals.css` (`:root` + `@theme inline`, single source of truth)
- Component system: `Card` (standard/tossed/featured/receipt), `Button` (primary/secondary/dark), `SectionHeader` (white-chip index), `TagPill`, `StickyNote`, `HighlightBlock`, `StatTile`, `Reveal`, `Doodle`, `CornerBlock`, custom SVG stickers

### Sections (single-page narrative, `src/components/sections/`)
| # | Section | Band | Notes |
|---|---------|------|-------|
| 01 | Hero | paper | claim + highlight, proof strip, CTAs, corner blocks |
| — | Marquee | ink | CSS keyframe loop, pauses on hover, reduced-motion frozen |
| 02 | How I Work | pink | 4 principles as tossed cards (straighten on hover), margin note |
| 03 | Work | paper | 1 featured (energy, hat-aware sticker) + grid of case-study cards |
| 04 | Writing | mint | docs matrix table + margin note |
| 05 | Timeline | lavender | numbered stops, no fake route line |
| 06 | About | blue | person card + toolkit receipt |
| 07 | Contact | yellow | giant CTA, social tag pills |

### Content architecture
- **MDX content** (`src/content/work/*.mdx`, `src/content/writing/*.mdx`) with frontmatter → server loaders (`src/lib/content.ts`, `server-only`)
- `src/lib/site.ts` — single config file for all config-level content
- Adding a case study or writing item = drop in an MDX file. No component changes.

### SEO
- `sitemap.ts`, `robots.ts`, `opengraph-image.tsx` (build-time PNG), `icon.svg`, styled `not-found.tsx`
- JSON-LD (`Person` + `WebSite` via `@graph`) in the root layout
- Canonical link, metadataBase, OG/Twitter meta, keywords

### Accessibility
- Semantic landmarks (`header`/`nav`/`main`/`section`/`footer`), one `h1`, ordered `h2`→`h3`
- Skip link, `aria-current` scrollspy nav, table caption, decorative `aria-hidden`
- WCAG-AA audited palette (brand & muted darkened; see audit below)
- `prefers-reduced-motion` respected (marquee off, reveals = fade only)
- `jsx-a11y` plugin enabled in eslint config

### Performance
- Fully static (SSG), no server secrets, no external requests
- Fonts self-hosted via `next/font` with `display=swap`
- Client components limited to `Nav` (scrollspy) and `Reveal` (framer) — correct hydration boundaries
- Unused deps removed (`next-mdx-remote-client`, `@types/mdx`)

### Verified
- `tsc --noEmit` ✓ · `eslint .` ✓ · `pnpm build` ✓ (static) · production smoke test ✓ (200s on `/`, `robots.txt`, `sitemap.xml`, `opengraph-image`, 404 works)

---

## 2. Remaining placeholders (REQUIRED INPUT)

Search the repo: `rg -n "TO ?FILL|example\.com" src`

| Location | What's needed |
|---|---|
| `src/lib/site.ts:45` | **Real domain** (valid URL — feeds sitemap, robots, OG, canonical) |
| `src/lib/site.ts:46` | **Real email** |
| `src/lib/site.ts:146–148` | LinkedIn / GitHub / Email links |
| `src/lib/site.ts:58–59, 63–64` | Proof-strip notes (flagship build, product count) — currently `[TO FILL]` |
| `src/lib/site.ts:112` | Timeline 2021 beat (commerce builds) |
| `src/lib/site.ts:142` | Toolkit receipt footer |
| `src/content/work/*.mdx` (×6) | Real case studies: problem, move, tags, link, **verified metric** |
| `src/content/writing/*.mdx` (×4) | Real excerpt + body |
| `src/components/content/FeaturedCaseStudy.tsx:60` | "verify metric" tag → remove once metric is real |

### ⚠️ Honesty rule
The proof strip (`site.proof`) and every work `metric` (e.g. `TAT −63%`, `ROI 3.2×`, `12 SHIPPED`) are **illustrative placeholders** — approved wireframe values, not real achievements. Replace them with verified numbers before going live, or remove the stat. Never ship fabricated metrics.

---

## 3. Known limitations

- **No detail pages** — `/work/[slug]` and `/writing/[slug]` aren't built yet; case-study bodies exist in MDX but aren't rendered anywhere. The loader (`getWorkBySlug`) was removed; re-add a small MDX renderer when detail pages land.
- **No contact form** — Contact CTA is `mailto:`. No backend.
- **No analytics** — nothing is measured yet.
- **framer-motion weight** — `Reveal` pulls ~54 kB into the shared chunk (~40 kB gzipped of the 143 kB first-load JS). Fine for a portfolio; split it if you ever care about the last few Lighthouse points.
- **Placeholder metrics** — see section 2; they're visibly flagged but must not ship as-is.
- **`example.com` in sitemap/robots** until the domain is set.
- **Prettier is not enforced** — 28 files predate a `prettier --check` run (no `format` script wired up; lint/CI don't run it). Run `pnpm exec prettier --write src` once if you want a clean tree; it's cosmetic.

---

## 4. Future improvements

- Detail pages for work + writing (MDX bodies already structured for it)
- Contact form (Vercel Serverless + Resend/Formspree) replacing/augmenting `mailto:`
- Optional light/dark paper theme (tokens are centralized, cheap to add)
- Section-level share/deep links, print stylesheet
- RSS/atom for writing, once essays are real
- OG image per-work-item once detail pages exist
- `<noscript>` reveal fallback note (currently SSR renders visible, so JS isn't required)

---

## 5. Recommended next features (priority order)

1. **Fill real content** (blocker for launch) — section 2 checklist.
2. **Deploy** — follow `docs/DEPLOYMENT.md`.
3. **Lighthouse ≥95** on the production URL.
4. Add `/work/[slug]` detail pages (highest value once real case studies exist).
5. Add Vercel Analytics (optional).
6. Consider a contact form.

---

## 6. How to run / maintain

```bash
pnpm install     # first time
pnpm dev         # http://localhost:3000
pnpm lint && pnpm typecheck && pnpm build && pnpm start
```

Update content without touching components: edit `src/lib/site.ts` or drop files into `src/content/work/` and `src/content/writing/`.
