# Phase 4 — Information Architecture

**Model:** single-page scroll narrative with anchor navigation (consistent with the reference's linear scroll design) — but the *order* is portfolio evidence, not persuasion.

## Page Map (single page, 8 sections)

```
┌────────────────────────────────────────────────────────────────┐
│ NAV   [wordmark + script]         [ WORK | WRITING | CONTACT ] │  sticky, flat chrome
├────────────────────────────────────────────────────────────────┤
│ 01 HERO       claim + highlight phrase + proof strip + CTA     │  paper (cream)
├────────────────────────────────────────────────────────────────┤
│ 02 MARQUEE    skills/discipline ticker (black band)            │  black
├────────────────────────────────────────────────────────────────┤
│ 03 HOW I WORK  4 numbered principle cards + margin note        │  pink
├────────────────────────────────────────────────────────────────┤
│ 04 WORK       6 case-study cards, 1 featured tile              │  cream
│   (each: outcome receipt · problem · move · margin note)       │
├────────────────────────────────────────────────────────────────┤
│ 05 WRITING     docs + essays: matrix/table + 3 sample cards    │  mint
├────────────────────────────────────────────────────────────────┤
│ 06 TIMELINE   dashed path, numbered stops 2019→2026            │  lavender
├────────────────────────────────────────────────────────────────┤
│ 07 ABOUT      person card + "toolkit/stack" receipt            │  blue
├────────────────────────────────────────────────────────────────┤
│ 08 CONTACT    big CTA, links, footer                           │  yellow
└────────────────────────────────────────────────────────────────┘
```

## Section Specifications

### 01 — HERO
- **Content:** name + script role tag · headline claim ("I solve product problems. I build the products that fix them.") · highlighter on "solve product problems" · 3 hard-metric proof strip · primary CTA (Contact) · secondary (View work ↓)
- **Purpose:** 5-second answer for recruiters. The single most important phrase on the entire page gets the yellow highlighter.
- **Decorative:** dashed path begins here, corner doodles, torn color block bleeding off-canvas.

### 02 — MARQUEE
- **Content:** repeating disciplines — PRODUCT · AI · DOCS · SHOPIFY · METRICS · …
- **Purpose:** rhythm seam between hero and content; instant skim of domain coverage.

### 03 — HOW I WORK (4 principles)
- **Content:** numbered cards `01`–`04` (Understand the problem → Build to learn → Ship fast, measure honestly → Document everything). One rotated callout (blue) with a personal voice note.
- **Purpose:** answers "how does this person think?" for founders & product leaders.

### 04 — WORK (6 case studies, 1 featured)
- **Content:** outcome-first cards. Each card: big outcome metric (monospace receipt) + 2-line problem + 1-line "the move" + tools tags. One **featured tile** breaks the grid (accent pink, icon, larger) — the single best story.
- **Purpose:** the core evidence. Ordered strongest-first; each card opens nothing (single-page skim) — full case detail lives behind a link.
- **Reading pattern:** metric first (recruiters scan), problem → move second.

### 05 — WRITING / DOCUMENTATION
- **Content:** split into (a) documentation work — 2–3 sample cards (architecture docs, runbooks, API guides) with a "format" mono label; (b) thinking/writing — essay list. Presented as a color-coded matrix table + sample cards.
- **Purpose:** proves the Documentation Engineer hat with real artifacts.

### 06 — TIMELINE (the dashed path)
- **Content:** horizontal dashed path with numbered circle stops 2019 → 2026, each stop a short role/project beat (Shopify builds → AI agent → docs systems). Pure narrative; reinforces "product builder who ships across domains."
- **Purpose:** replaces the reference's 18→22 journey with a real career path. Non-functional decoration with real information.

### 07 — ABOUT
- **Content:** person card (short bio, 2–3 sentences), a monospace "toolkit receipt" (stack: products/domains/tools), availability note.
- **Purpose:** trust + context. Hard facts as mono receipt (a faithful adaptation of `Capital: ₹0`).

### 08 — CONTACT
- **Content:** oversized yellow-pill CTA (`SAY HELLO →`), email + social links as bordered tag pills, footer line (name, year, mono `built by hand` note).
- **Purpose:** single, unmissable action — the portfolio's equivalent of "Apply."

## Navigation
- 3 items max (Hick's Law): **WORK · WRITING · CONTACT** — anchored sections. The wordmark returns to top.
- Primary CTA position: bottom-left of each content block, consistently (Jakob's Law).

## User Journeys (recruiters)
| Visitor | Path | Section priority |
|---|---|---|
| Recruiter (90s skim) | hero → proof strip → featured work → contact | 01 → 04 → 08 |
| Product leader | hero → how I work → work → timeline | 01 → 03 → 04 → 06 |
| Founder | hero → work (outcomes) → about/toolkit → contact | 01 → 04 → 07 → 08 |
| Design engineer | hero → work → writing/docs → timeline | 01 → 04 → 05 → 06 |

## Content Requirements (placeholders to be filled)
All names, companies, metrics, and documents are **placeholders** marked with `[TO FILL]` — structured so real content can be swapped without touching layout. Confirm real content before or after build.
