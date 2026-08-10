# Portfolio — Neo-Scrapbook Brutalism

Personal portfolio for **Mrigya Sahai** — product manager & builder, AI builder, documentation engineer, Shopify specialist.

A single-page scroll narrative: **"Swiss-grid discipline wearing a torn-paper, marker-highlighted, brutalist-sticker costume."** Every component is reusable; every content surface is data-driven.

## Stack

- **Next.js 15** (App Router, RSC-first, static output) · **TypeScript**
- **Tailwind CSS v4** (design tokens → `@theme` in `src/app/globals.css`)
- **Framer Motion** — scroll reveals only (hovers/presses are pure CSS)
- **MDX** (`src/content/`) + `gray-matter` + `server-only` — case studies & writing
- **next/font** — Archivo Black / Archivo / Caveat / Space Mono (all local builds, `display=swap`)
- pnpm · ESLint · Prettier

## Commands

```bash
pnpm dev        # local dev server
pnpm build      # production build (static)
pnpm start      # serve production build
pnpm lint       # eslint
pnpm format     # prettier --write
pnpm typecheck  # tsc --noEmit
```

## Architecture

```
src/
  app/            layout, page, metadata routes (sitemap, robots, OG image, icon, not-found)
  components/
    layout/       Nav (scrollspy), SiteFooter
    sections/     Hero, Marquee, HowIWork, Work, Writing, Timeline, About, Contact
    content/      CaseStudyCard, FeaturedCaseStudy
    ui/           Card, Button, SectionHeader, TagPill, StickyNote, HighlightBlock, StatTile, Reveal
    icons/        stickers.tsx (custom SVG stickers), decorative (doodles, corner blocks)
  content/
    work/*.mdx        case studies (frontmatter-driven cards)
    writing/*.mdx     writing matrix items
  lib/
    site.ts           single source of truth for config-level content
    content.ts        MDX loaders (server-only)
    cn.ts             classname helper
```

## Adding content (no component changes needed)

**Case study** → add `src/content/work/<slug>.mdx`:

```yaml
---
slug: my-build
title: My Build
metric: "−40%"
hat: "[AI]"
year: 2026
featured: false
problem: "..."
move: "..."
tags: [AI, Python]
link: "..."
---
```

**Writing item** → add `src/content/writing/<slug>.mdx` with `title`, `format`, `topic`, `year`, `readTime`, `excerpt`.

## Content honesty

- `[TO FILL]` marks every placeholder. **Never ship invented metrics as real** — the site config and case-study frontmatter carry illustrative placeholders that must be replaced with verified numbers before going live.
- Before deploying: set `site.url` (must be a valid URL — it feeds `sitemap.xml`, `robots.txt`, and the OG image) and `site.email` in `src/lib/site.ts`, then replace the `[TO-FILL]` profile links.

## Design docs

The whole design process is captured in `docs/`: reference analysis, adaptation rules, information architecture, tokens, wireframes, review, narrative, component system, implementation plan.

## Deploy

Static output, ready for Vercel / Netlify / any host serving `out/` or via `next start`.
