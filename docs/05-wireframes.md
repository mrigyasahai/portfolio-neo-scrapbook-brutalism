# Phase 6 — Wireframes

ASCII wireframes, desktop first, with mobile stacks. R = rotated element, H = highlight block, dashed = decorative path.

## 6.1 Hero (paper / cream)

```
┌───────────────────────────────────────────────────────────────────────────┐
│ [ME◡WORDMARK]              ┌ WORK | WRITING | CONTACT ┐  ← ONE segmented,   │
│                            └──────────────────────────┘    bordered unit    │
│  sticky nav, flat (no shadow — stable chrome)                              │
├───────────────────────────────────────────────────────────────────────────┤
│                                                                           │
│  margin tab:  INDEX / 01                                     ✶   +   ✶   │
│                                                                           │
│  ┌ name ────────────────────────────────────────────────┐                 │
│  │ MRIGYA SAHAI            (script)  that's me ﹏       │   [avatar]      │
│  └──────────────────────────────────────────────────────┘    (sticker)     │
│                                                                           │
│  I SOLVE PRODUCT                                           ...            │
│  PROBLEMS. I BUILD  ┌──────────────────┐                                  │
│  THE PRODUCTS THAT  │ THE PRODUCTS THAT│ ← highlight block (R, yellow)     │
│  FIX THEM.          └──────────────────┘                                  │
│                                                                           │
│  ┌──────────────────────────────┬───────────┬────────────┐                │
│  │ mono: TAT −63%               │ ROI 3.2×  │ 12 shipped │ ← proof strip │
│  │ hat: [AI]                    │ [AI agent]│ [PRODUCT]  │                │
│  │ retail returns automation    │ agents    │ products   │                │
│  └──────────────────────────────┴───────────┴────────────┘                │
│                                                                           │
│  [ ▼ SEE WORK ]                [  SAY HELLO → ]   ← primary CTA (pill,     │
│                                                    yellow, heavy shadow)   │
│       ﹏﹏﹏﹏﹏﹏ (dashed path begins →)                                     │
├───────────────────────────────────────────────────────────────────────────┤
```

## 6.2 Marquee (black band)

```
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
    ✶ PRODUCT ✶ AI ✶ DOCS ✶ SHOPIFY ✶ METRICS ✶ PRODUCT ✶ AI ✶ DOCS …
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
```

## 6.3 How I Work (pink band)

```
┌───────────────────────────────────────────────────────────────────────────┐
│ tab: METHOD / 02                            [ 01 ] [ 02 ] [ 03 ] [ 04 ]   │
│ HOW I WORK.  (highlighter on "BUILD")                                    │
│                                                                           │
│  ┌ 01 ───────────────┐  ┌ 02 ───────────────┐                            │
│  │ UNDERSTAND THE    │  │ BUILD TO LEARN    │                            │
│  │ PROBLEM           │  │                   │                            │
│  │ "the why before   │  │ "ship small,      │                            │
│  │  the what"        │  │  learn real"      │                            │
│  └───────────────────┘  └───────────────────┘                            │
│  ┌ 03 ───────────────┐  ┌ 04 ───────────────┐  (R, −2°)                 │
│  │ SHIP FAST,        │  │ DOCUMENT          │ ┌───────────────────────┐  │
│  │ MEASURE HONESTLY  │  │ EVERYTHING        │ │ margin note (blue):   │  │
│  │                   │  │                   │ │ "docs are the product │  │
│  │                   │  │                   │ │  I write them first"  │  │
│  └───────────────────┘  └───────────────────┘ └───────────────────────┘  │
│                                                                           │
│  ┌───────────────────┐  ┌───────────────────┐                            │
│  │ [ LEARN MORE ↓ ]  │  │                   │                            │
│  └───────────────────┘  └───────────────────┘                            │
├───────────────────────────────────────────────────────────────────────────┤
```

## 6.4 Work (cream band) — core section

```
┌───────────────────────────────────────────────────────────────────────────┐
│ tab: WORK / 03                                     (highlighter on:       │
│ SELECTED WORK. THE RECEIPTS FIRST.                 "SELECTED WORK")       │
│                                                                           │
│ ┌FEATURED tile (pink, icon ✈, larger, breaks grid)──────────────────┐    │
│ │ mono: TAT −63%   ·  featured: AI RETURNS AUTOMATION AGENT          │    │
│ │ problem: "returns handled by hand, 5 platforms"                    │    │
│ │ move: "built a multi-item returns agent (Amazon/Flipkart)"         │    │
│ │ tags: [AI][Python][Playwright]          [ CASE STUDY ↗ ]           │    │
│ └────────────────────────────────────────────────────────────────────┘    │
│ ┌───────────────┐ ┌───────────────┐ ┌───────────────┐ ┌───────────────┐  │
│ │ mono: ROI 3.2×│ │ mono: −40%    │ │ mono: +28%    │ │ mono: 12 docs  │  │
│ │ [AI agent]    │ │ [Shopify]     │ │ [Checkout]    │ │ [Docs sys]     │  │
│ │ problem…      │ │ problem…      │ │ problem…      │ │ problem…       │  │
│ │ move…         │ │ move…         │ │ move…         │ │ move…          │  │
│ └───────────────┘ └───────────────┘ └───────────────┘ └───────────────┘  │
│  (2×2 grid, strictly gridded — factual content stays orthogonal)         │
│ [ VIEW ALL WORK → ]                                                       │
├───────────────────────────────────────────────────────────────────────────┤
```

## 6.5 Writing / Docs (mint band)

```
┌───────────────────────────────────────────────────────────────────────────┐
│ tab: WRITING / 04                                                          │
│ DOCUMENTATION & NOTES.                                                    │
│                                                                           │
│ ┌─ matrix (color-coded columns, orthogonal) ──────────────────────────┐   │
│ │  # | title                  | format      | topic         | year   │   │
│ │ 01 | Architecture notes     | [runbook]   | AI agent      | 2026   │   │
│ │ 02 | Returns escalation map | [diagram]   | Shopify ops   | 2026   │   │
│ │ 03 | API integration guide  | [guide]     | Python/Playwright|2025  │   │
│ │ 04 | Essays on building     | [essay]     | product       | 2025   │   │
│ └──────────────────────────────────────────────────────────────────────┘   │
│ ┌ featured sample card (R, +2°, blue) ──────┐                              │
│ │ "how i document a build"                  │  mono: READ TIME 4 MIN      │
│ │ a runbook for the multi-item returns      │                             │
│ │ agent — decisions, risks, rollback        │                             │
│ └───────────────────────────────────────────┘  [ READ THE NOTES → ]       │
├───────────────────────────────────────────────────────────────────────────┤
```

## 6.6 Timeline (lavender band)

```
┌───────────────────────────────────────────────────────────────────────────┐
│ tab: PATH / 05   THE PATH. (dashed line ─────────────── with stops)       │
│                                                                           │
│  (2019)          (2021)          (2024)            (2026)                 │
│   ⑩               ⑫               ⑱                ⑳                     │
│    ↓               ↓               ↓                 ↓                    │
│ ┌──────┐ ﹏﹏﹏﹏ ┌──────┐ ﹏﹏﹏﹏ ┌────────┐ ﹏﹏﹏﹏ ┌────────┐            │
│ │ first │        │ shopify│        │ ai agent │        │ docs   │            │
│ │ build │        │ builds │        │ product  │        │ systems│            │
│ └──────┘        └──────┘        └────────┘        └────────┘            │
│   role/beat       role/beat       role/beat          role/beat            │
├───────────────────────────────────────────────────────────────────────────┤
```

## 6.7 About (blue band)

```
┌───────────────────────────────────────────────────────────────────────────┐
│ tab: ABOUT / 06                                                            │
│ ┌ person card ───────────────────────┐ ┌ toolkit receipt (mono) ───────┐  │
│ │ MRIGYA SAHAI                      │ │  PRODUCT........... PM × BUILDER│  │
│ │ product manager, product builder, │ │  AI................. AGENTS     │  │
│ │ ai builder, docs engineer,        │ │  COMMERCE.......... SHOPIFY    │  │
│ │ shopify specialist.               │ │  DOCS.............. SYSTEMS    │  │
│ │ "I solve product problems. I      │ │  STACK.. python·TS·playwright  │  │
│ │  build the products that fix      │ │  STATUS........... OPEN TO WORK │  │
│ │  them." (script:  — that's me)    │ └────────────────────────────────┘  │
│ └───────────────────────────────────┘                                     │
├───────────────────────────────────────────────────────────────────────────┤
```

## 6.8 Contact (yellow band) — finale

```
┌───────────────────────────────────────────────────────────────────────────┐
│  LET'S BUILD.  (highlighter on "BUILD")                                  │
│                                                                           │
│  ┌─────────────────────────────────────────────┐                          │
│  │          [ SAY HELLO → ]                    │  ← giant pill CTA       │
│  │      mono: hello@[you].com · 4h reply       │                          │
│  └─────────────────────────────────────────────┘                          │
│                                                                           │
│  [ linkedin ]  [ github ]  [ email ]   ← tag pills (white, bordered)     │
│                                                                           │
│  footer: © 2026 · MRIGYA SAHAI · mono: "BUILT BY HAND, NO TEMPLATES"     │
├───────────────────────────────────────────────────────────────────────────┤
```

## Mobile (≤768px) — all sections stack

```
┌──────────────────────┐
│ [wordmark]    [≡]    │  ← collapsed nav → menu (pill items stack)
│                      │
│ I SOLVE PRODUCT      │
│ PROBLEMS. I BUILD    │
│ ┌─ THE PRODUCTS ─┐   │
│ └─ THAT FIX THEM ┘   │
│ [proof strip stacks] │
│ [avatar hidden]      │
│ [primary CTA full]   │
│                      │
│ METHOD cards: 1-col  │
│ WORK: featured then  │
│  2×2 → 1-col stack   │
│ WRITING: matrix→     │
│  stacked rows        │
│ TIMELINE: vertical   │
│  dashed path         │
│ ABOUT: card→receipt  │
│ CONTACT: full-width  │
│  CTA                 │
└──────────────────────┘
```
Doodles, rotated corners, and the horizontal dashed path hide or simplify on mobile to protect legibility.

## A11y & semantics (from Phase 7 review)
- Skip link to `#main`; one `h1`; each section has a proper `h2`; nav items are real links with `aria-current`.
- Focus visible: `outline: 3px solid var(--brand)` + inset offset; keyboard-friendly sticker-press.
- All CTA/content blocks are real `<a>`/`<button>`; marquee pauses on hover/focus.
- `prefers-reduced-motion`: marquee frozen, reveals opacity-only, no sticky parallax.
- Mobile nav = horizontal scrollable segmented chips (no hamburger modal).

