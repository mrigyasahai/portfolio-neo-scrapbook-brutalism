# Phase 1–2 — Design System Analysis & Extraction

**Reference:** "Neo-Scrapbook Brutalism" (reverse-engineered from the Dhandha School landing page)
**Project:** Personal portfolio — Product Manager / Product Builder / AI Builder / Documentation Engineer / Shopify Product Specialist

---

## 1. Design Principles (extracted)

1. **Physicality over flatness** — every content block behaves like a paper cut-out: thick border + hard offset shadow + optional rotation. No gradients, no blur, no glass.
2. **Swiss grid wearing a torn-paper costume** — the *content* is perfectly gridded and left-aligned; the *decoration* (rotation, doodles, torn blocks) is free to play. Chaos belongs to narrative elements; order belongs to factual/data elements.
3. **Deliberate imperfection** — rotation (±1–3°), marker highlights, paper grain, dashed hand-drawn paths signal "made by a human."
4. **Maximum legibility despite maximal decoration** — text always sits on flat, high-contrast surfaces; black-on-pastel/white at AAA. Decoration lives in borders, corners, and backgrounds, never under text.
5. **One big idea per screen** — content is chunked into small numbered groups (3–5 max), never long lists.
6. **Emphasis via the highlighter block** — the single most important phrase per screen is emphasized by a solid color rectangle *behind* the text, not by recoloring the text itself.
7. **Consistency of the recipe** — one card recipe (border + shadow + padding) reused for every content type: stat, quote, principle, roadmap cell.
8. **Sharp = static, pill = interactive** — corner radius 0–8px for informational content; full pill radius reserved exclusively for clickable controls.
9. **Fixed color roles** — each hue has one job: emphasis / voice / brand / decorative. Never interchangeable.
10. **Honest, blunt copy** — short declarative claims; the visual system supports punch, not paragraphs.

## 2. Interaction Patterns (extracted)

| Pattern | Behavior |
|---|---|
| Sticker-press button | On hover/active, offset shadow collapses and element nudges toward its shadow — "pressed flat." |
| Marquee ticker | Full-width black band, white bold uppercase text, small glyph separators, continuous linear auto-scroll. |
| Card hover | Slight rotation-to-0 straighten or shadow-lift increase — tactile paper metaphor. |
| Scroll chapter transitions | Color-banded sections fade/slide in as the user scrolls; each band reads as a new "page." |
| Segmented nav | 2–4 pill items joined into one bordered unit; calm, flat "chrome" that anchors the wild body. |
| Decorative dashed paths | Non-functional connectors between illustrations/badges — pure wayfinding metaphor. |
| Motion language | Snappy, discrete, 150–250ms, sticker-flip feel. No physics-based elastic motion. |

## 3. Reusable Components (extracted)

1. **Nav** — wordmark (left) + segmented pill control (right, 2–4 items max).
2. **Primary CTA** — largest element on screen, pill or full-bleed, bold uppercase, hard shadow.
3. **Card** — white/pastel fill, 2–3px black border, hard offset shadow, optional ±1–3° rotation.
4. **Highlight/marker block** — color rectangle behind a key phrase.
5. **Callout / speech bubble** — pastel blue fill, rotated, informal "aside" voice.
6. **Marquee band** — black, white text, glyph separators, auto-scroll.
7. **Stat tile** — huge numeral + short label; one tile in the group breaks the grid with accent color + icon.
8. **Numbered index** — "01, 02, 03…" accent-colored index badges on principle/step cards.
9. **Numbered circle badge** — colored outline circle with a number (decorative journey markers).
10. **Monospace micro-label** — reserved for "hard fact" callouts (counts, prices, metrics).
11. **Dashed divider** — separates a main claim from a small footnote inside a card.
12. **Ambient doodles** — small asterisks, plus signs, dot clusters, colored corner blocks bleeding off-canvas.

## 4. Typography System

- **Display:** heavy (800–900) grotesque sans, ALL-CAPS, tight line-height (1.0–1.05). *Approx: Archivo Black.*
- **Script accent:** casual handwriting, reserved for one brand word / short annotations. *Approx: Caveat.*
- **Body/UI:** rounded geometric sans, 600 semibold, 18–20px, line-height 1.5–1.6. *Approx: Archivo.*
- **Monospace:** third texture for numeric/technical facts. *Approx: Space Mono.*
- Uppercase labels with ~0.5–1px letter-spacing.
- Left-aligned, ragged right, everywhere. Never centered.
- Sizes (desktop): H1 ~64–80px · H2 ~48–56px · H3 ~28–36px · body 18–20px · nav/labels 14px · micro 12–14px.

## 5. Spacing System

Base unit **8px** → `8 / 16 / 24 / 32 / 48 / 64 / 96 / 120`.
- Section padding: 64–100px+ top/bottom (each color band is its own "page").
- Card padding: 32–40px (generous even when content is short — signals confidence).
- Eyebrow→headline: 12–16px. Headline→supporting content: 32–48px.
- Content max-width ~1200–1300px, section backgrounds 100vw full-bleed.

## 6. Motion & Timing

- Duration 150–250ms, ease-out, snappy discrete states.
- Marquee: linear infinite, constant speed, no easing pause.
- Scroll reveal: fade + 8–16px rise per section band.
- Respect `prefers-reduced-motion`: freeze marquee, skip reveals, keep state changes instant.
- Depth = outline + offset shadow, never blur/gradient. Shadow grows with element importance.

## 7. Color System (roles locked)

| Role | Hex | Usage |
|---|---|---|
| Base paper | `#F3EEE1` | Page background, grain texture |
| Ink | `#141414` | Text, all borders, all shadows |
| Emphasis ("the answer") | `#F5C242` yellow | Highlighter blocks, primary CTA, one key phrase per screen |
| Voice (commentary) | `#AACBEE` blue | Speech-bubble asides only |
| Brand/number accent | `#E07A2C` orange | Index numbers, dates, script word |
| Energy | `#F4A6C6` pink | High-emotion chapters, featured tiles |
| Checkpoint | `#A9E0C4` mint | Completion/stats/checkpoint markers |
| Decorative | `#C6B7E3` lavender, `#5CB8A6` teal | Corner blocks, chapter alternation |
| Surface | `#FFFFFF` white | Cards, panels |
| Muted | `#6B6B6B` gray | Secondary copy (never below AA on its surface) |

**Rules:** one emphasis hue per screen; black anchors every border/shadow; pastels rotate per section to mark "chapters"; white surfaces isolate reading content from busy texture.

## 8. Visual Hierarchy (extracted)

- **First attention:** oversized black headline → its single highlighted phrase → supporting visual/callout → CTA (consistently bottom-left of the content block).
- **Weight:** 900 headline > 700 labels > 600 body > 400 script.
- **Color:** accent for the *most important word/number only*; blue for voice; everything else neutral.
- **Position:** CTA in a consistent, learnable location across sections (Jakob's Law).
- **Numbering** structures lists (Miller's Law): 3–5 items per group.

## 9. What We Must NOT Carry Over

- The "apply / cohort" persuasion funnel mechanics.
- Selling a paid product; there is no offer to funnel toward.
- A single linear "sale" narrative — a portfolio needs evidence depth + skimability for recruiters.
- The exact Dhandha wordmark / copy / illustrations.
