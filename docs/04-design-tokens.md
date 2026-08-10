# Phase 5 — Design Tokens

Single source of truth. Implemented as CSS custom properties on `:root`; values derive from the design-system extraction (base-8 spacing, hard shadows, locked color roles).

## Color

```css
--paper:        #F3EEE1;  /* base background + grain */
--ink:          #141414;  /* text, borders, shadows */
--white:        #FFFFFF;  /* card surfaces */
--muted:        #6B6B6B;  /* secondary copy */
--emphasis:     #F5C242;  /* yellow — "the answer" (highlight blocks, primary CTA) */
--voice:        #AACBEE;  /* blue — margin notes / asides only */
--brand:        #E07A2C;  /* orange — index numbers, dates, script accents */
--energy:       #F4A6C6;  /* pink — featured tile, high-emotion band */
--checkpoint:   #A9E0C4;  /* mint — stats, completion marks */
--deco-lav:     #C6B7E3;  /* lavender — chapters/decor */
--deco-teal:    #5CB8A6;  /* teal — chapters/decor */
```

**Roles are locked:** emphasis ≠ voice ≠ brand. One accent per screen. Black anchors every border/shadow. Text is never placed over grain/pattern.

## Typography

```css
--font-display: "Archivo Black", sans-serif;   /* 900, ALL-CAPS, tight */
--font-body:    "Archivo", sans-serif;          /* 400–700 */
--font-script:  "Caveat", cursive;              /* accent words, annotations */
--font-mono:    "Space Mono", monospace;        /* hard-fact labels */

--step--1: 12px;   --step-0: 16px;   --step-1: 20px;
--step-2:  24px;   --step-3: 32px;   --step-4: 48px;
--step-5:  64px;   --step-6: 80px;

--leading-tight: 1.05;   /* display */
--leading-body:  1.55;   /* body */
--tracking-label: 0.08em; /* uppercase labels */
```

## Spacing (base 8)

```css
--space-1: 8px;   --space-2: 16px;  --space-3: 24px;  --space-4: 32px;
--space-5: 48px;  --space-6: 64px;  --space-7: 96px;  --space-8: 120px;
--section-y: clamp(64px, 10vw, 120px);   /* vertical rhythm between bands */
--card-pad: clamp(24px, 4vw, 40px);      /* generous card padding */
--container: min(1280px, 92vw);          /* content width */
```

## Border & Shadow (the "card recipe")

```css
--border-w: 2px;
--border-w-heavy: 3px;
--border: var(--border-w) solid var(--ink);

--shadow-sm: 4px 4px 0 0 var(--ink);
--shadow-md: 6px 6px 0 0 var(--ink);
--shadow-lg: 8px 8px 0 0 var(--ink);
--shadow-xlg: 12px 12px 0 0 var(--ink);  /* hero highlight, primary CTA */

--radius: 0px;          /* informational content */
--radius-sm: 4px;
--radius-pill: 999px;   /* interactive controls only */
```

## Motion

```css
--dur-fast: 150ms;
--dur-base: 250ms;
--ease: cubic-bezier(0.22, 1, 0.36, 1);   /* snappy sticker-flip */
--ease-press: cubic-bezier(0.34, 1.56, 0.64, 1); /* press feedback */
--marquee-dur: 28s;                        /* linear infinite */
--reveal-y: 16px;                          /* scroll-in rise */
```

**Reduced motion:** `@media (prefers-reduced-motion: reduce)` → marquee frozen, reveals opacity-only, transitions `~1ms`.

## Component Recipes

| Component | Recipe |
|---|---|
| Card | white/pastel fill · `--border` · `--shadow-md` · optional `rotate(±1–3deg)` |
| Sticker button | `--border` · `--shadow-md` · hover: translate(4px,4px), shadow→`--shadow-sm` |
| Primary CTA | emphasis fill (or ink) · `--border-w-heavy` · `--shadow-xlg` · pill or block |
| Highlight block | solid `--emphasis` rect behind text · `--shadow-sm` · slight rotation |
| Margin note | `--voice` fill · `--border` · `--shadow-md` · `rotate(-2deg)` |
| Stat tile | `--border` · no fill or white · `--shadow-sm` |
| Marquee | ink background, white text, glyph separators |
| Receipt label | `--font-mono`, `--step--1`, uppercase, dashed underline divider |
| Number badge | colored 2px outline circle, `--font-display`, big numeral |

## Breakpoints

```css
--bp-md: 768px;   /* tablet: 2-col collapses to 1-col, doodles shrink */
--bp-lg: 1080px;  /* desktop: full grid */
```
Typography is fluid via `clamp()` so oversized display text scales without overflow.
