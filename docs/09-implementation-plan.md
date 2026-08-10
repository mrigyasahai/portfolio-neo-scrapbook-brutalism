# Implementation Plan — Phase 8

Stack: **Next.js 15 (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion · MDX · Lucide React + custom SVG doodles · next/font · Next/Image · pnpm · ESLint + Prettier · Vercel**

## 1. Folder Structure

```
portfolio/
├─ docs/                         # design docs (phases 1–7)
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx              # fonts, metadata, JSON-LD, skip-link, grain
│  │  ├─ page.tsx                # server component: composes all sections
│  │  ├─ globals.css             # design tokens + Tailwind v4 @theme + base
│  │  ├─ opengraph-image.tsx     # OG PNG generated at build (ImageResponse)
│  │  ├─ icon.svg / apple-icon.tsx
│  │  ├─ sitemap.ts / robots.ts
│  │  └─ not-found.tsx
│  ├─ components/
│  │  ├─ ui/                     # primitives (from 08-component-system.md)
│  │  │  Button · Card · StatTile · HighlightBlock · StickyNote
│  │  │  SectionHeader · TagPill · Reveal (framer wrapper)
│  │  ├─ sections/               # page sections, one file each
│  │  │  Hero · Marquee · HowIWork · Work · Writing · Timeline · About · Contact · Footer
│  │  ├─ content/                # content-driven composers
│  │  │  CaseStudyCard · WritingRow · TimelineStop
│  │  ├─ decorative/             # grain, doodles, dashed path, corner blocks, tape
│  │  ├─ icons/                  # custom SVG sticker pack + doodle glyphs
│  │  └─ layout/                 # Nav (client scrollspy) · SkipLink
│  ├─ lib/
│  │  ├─ site.ts                 # site config (name, roles, links, metrics) — single source
│  │  ├─ content.ts              # MDX loaders (server-only): work + writing
│  │  ├─ cn.ts                   # class merge util
│  │  └─ seo.ts                  # JSON-LD builders (Person/ProfilePage)
│  └─ content/                   # content-driven source of truth
│     ├─ work/*.mdx              # case studies (frontmatter schema)
│     └─ writing/*.mdx           # docs samples + essays
├─ public/                       # favicon only (illustrations are inline SVG)
├─ next.config.ts · postcss.config.mjs · tsconfig.json · eslint · prettier
```

## 2. Routing

- Single page `/` (scroll narrative) with section anchors: `#work`, `#writing`, `#how-i-work`, `#contact`.
- `sitemap.ts` (single URL + metadataBase), `robots.ts`, `not-found` in the same language.
- **Extensible:** content files live in `src/content`; adding a `/work/[slug]` or `/writing/[slug]` page later is a ~20-line RSC that reuses the same loaders — no component changes.

## 3. Component Hierarchy

```
RootLayout (Server)
├─ Nav (Client — scrollspy + aria-current, flat segmented chrome)
├─ main
│  ├─ Hero (S)        → HighlightBlock · StatTile[] · Button · decorative
│  ├─ Marquee (S)     → CSS-keyframe ticker (glyph separators)
│  ├─ HowIWork (S)    → SectionHeader · Card[] (01–04) · StickyNote
│  ├─ Work (S)        → SectionHeader · CaseStudyCard[] · featured Card (energy)
│  ├─ Writing (S)     → SectionHeader · matrix (Table) · featured sample + StickyNote
│  ├─ Timeline (S)    → SectionHeader · TimelineStop[] + DashedPath
│  ├─ About (S)       → SectionHeader · Card (person) · Receipt Card · CornerBlock
│  └─ Contact (S)     → SectionHeader · Button (primary pill) · TagPill[]
├─ Footer (S)
└─ Reveal (C) wraps section bands for whileInView reveals
```

Server Components (S) render everything; the only Client components are `Nav`, `Reveal`, and the sticky note? (kept server — no mouse parallax). Buttons/cards use **CSS** hover/press — no JS.

## 4. Content Architecture

- **MDX** = narrative content: `src/content/work/*.mdx`, `src/content/writing/*.mdx`.
- **Frontmatter schema** (validated at load): `slug, title, metric, hat, problem, move, outcome, tags[], year, featured?` for work; `title, format, topic, year, readTime, excerpt` for writing.
- **Structured JSON/TS** = config data that never needs prose: `lib/site.ts` (roles, proof metrics, principles 01–04, timeline stops, toolkit, socials).
- `lib/content.ts` (server-only) reads with `fs`, parses `gray-matter`, renders with `next-mdx-remote-client/rsc`.
- **Placeholders policy:** every `[TO FILL]` value is a single obvious constant in `site.ts` or frontmatter — swappable without touching components. **No invented metrics** — placeholders look like `1.8×`, `—%` etc. and are labeled.

## 5. State Management

**None required** — fully static content site. Only local UI state: current nav section (scrollspy, `useState` in Nav) and `useReducedMotion` (Framer). No stores, no context. Future forms would use server actions; contact is link-driven.

## 6. Animation Architecture

- **CSS (default, 0-JS):** sticker-press hover/active, card straighten+lift, marquee keyframes, dashed-path draw.
- **Framer Motion (progressive enhancement):** `MotionConfig reducedMotion="user"` at root; `Reveal` primitive does `whileInView` fade + 16px rise, stagger ≤3, `viewport={{ once: true, margin: "-80px" }}`.
- **Accessibility:** all content visible without JS (`.js` gating unnecessary — Reveal uses `initial={false}` SSR-safe fallback), `prefers-reduced-motion` honored globally, marquee pauses on hover/focus and freezes under reduced motion.

## 7. Asset Organization

- **Fonts:** `next/font/google` — Archivo Black, Archivo (400/600/700), Caveat, Space Mono. Self-hosted, `display: swap`, `preload` display only.
- **Images:** no raster photography (per design language). All illustration/iconography = inline SVG React components in `components/icons` and `components/decorative` (zero network requests, crisp at any DPI). `next/image` used where any future raster appears; nothing currently.
- **OG image:** `opengraph-image.tsx` (ImageResponse) — brand-colored PNG generated at build; plus `icon.svg` + apple-icon.
- **Content assets** (if any MDX needs an image later): `public/` with a documented convention.

## 8. Design Token Strategy

- **Single source:** CSS custom properties in `globals.css` `:root` (the `04-design-tokens.md` contract).
- **Tailwind v4 `@theme`** maps tokens → utilities: `--color-*` (paper/ink/emphasis/voice/…), `--font-*` (display/body/script/mono), `--shadow-*` (hard offsets), `--radius-*`, `--ease-*`, `--duration-*`.
- Components consume only **utilities** derived from tokens — a token change re-themes the whole site; no component hardcodes a hex/px.

## Milestones (commits)

1. **Scaffold** — create-next-app, tokens in globals.css, fonts, layout, metadata, SEO plumbing.
2. **Primitives** — ui/ components + decorative + icons.
3. **Chrome** — Nav + SkipLink + Footer.
4. **Sections I** — Hero + Marquee.
5. **Sections II** — HowIWork + Work.
6. **Sections III** — Writing + Timeline + About + Contact.
7. **Content + SEO** — MDX files, loaders, JSON-LD, sitemap/robots/OG verification.
8. **Quality** — ESLint, Prettier, typecheck, build, Lighthouse pass.
