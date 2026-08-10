# Component System — The Reusable Building Blocks

Every page section is composed **only** of these 12 components. No inline styling, no one-off patterns. Each spec includes purpose, anatomy, tokens, states, usage rules, and don'ts.

---

## 1. Colors

**Role-locked system.** Every hue has one job; a hue never changes meaning.

| Token | Hex | Role | Where |
|---|---|---|---|
| `--paper` | `#F3EEE1` | base surface | page background, grain |
| `--ink` | `#141414` | authority | text, every border, every shadow |
| `--white` | `#FFFFFF` | card surface | cards, nav, tag pills |
| `--muted` | `#6B6B6B` | secondary copy | footnotes, meta (AA on paper/white only) |
| `--emphasis` | `#F5C242` | the answer | highlight blocks, primary CTA fill |
| `--voice` | `#AACBEE` | commentary | sticky notes / margin notes only |
| `--brand` | `#E07A2C` | numbers & warmth | index numbers, dates, focus ring, script accent |
| `--energy` | `#F4A6C6` | emotional accent | featured tile, high-emotion band |
| `--checkpoint` | `#A9E0C4` | completion | writing/timeline markers, stat tints |
| `--deco-lav` | `#C6B7E3` | chapter decoration | alternating section bands |
| `--deco-teal` | `#5CB8A6` | chapter decoration | doodles, small accents |

**Rules**
- Black text on paper/white/pastels = AAA. Never gray-on-color, never white-on-pastel.
- One *emphasis* accent per screen (the section's single idea).
- Section bands rotate: paper → pink → paper → mint → lavender → blue → yellow.
- Doodles use `--ink` at ≤8% opacity, never full accent.

## 2. Typography

| Family | Token | Use |
|---|---|---|
| **Archivo Black** (900) | `--font-display` | ALL-CAPS headlines only, tight leading 1.05 |
| **Archivo** (400–700) | `--font-body` | body (600), labels (700), paragraphs 18–20px / 1.55 |
| **Caveat** (cursive) | `--font-script` | one role suffix / short annotations, never body |
| **Space Mono** | `--font-mono` | hard facts — metrics, counts, dates, tags, footers |

**Scale** (fluid via `clamp()`): H1 `clamp(44px, 8vw, 84px)` · H2 `clamp(34px, 6vw, 60px)` · H3 `28–36px` · body `18–20px` · labels `14px` + `0.08em` tracking · mono `12–14px`.

**Rules**
- Left-aligned, ragged right, everywhere. Never centered.
- Script accent appears at most once per screen, near the wordmark or a signature.
- Mono = facts only; if it isn't a fact, it isn't mono.
- Max measure for body ~65ch.

## 3. Shadows

Hard, zero-blur, black, offset. Depth = offset magnitude, never blur.

| Token | Offset | Used by |
|---|---|---|
| `--shadow-sm` | 4px 4px | stat tiles, tag pills, index badges |
| `--shadow-md` | 6px 6px | cards, sticky notes, buttons |
| `--shadow-lg` | 8px 8px | featured tile, primary CTA, nav unit (hover) |
| `--shadow-xlg` | 12px 12px | hero highlight block only |

**Rules**
- Never a blurred/shadow-on-shadow combo. One shadow per element.
- Press state: element translates 4px toward its shadow and shadow shrinks one step (`--shadow-md`→`--shadow-sm`).
- Nav stays flat (no shadow) so it reads as chrome, not content.

## 4. Cards

The universal recipe: **`--white`/pastel fill · 2px `--ink` border · `--shadow-md` · optional rotate(±1–3°) · 32–40px padding`.**

**Anatomy (top→bottom):** index badge (`01`) · headline (H3) · body (1–2 short lines) · dashed divider · mono footnote/tags · optional CTA.

**Variants**
| Variant | Fill | Rotation | Notes |
|---|---|---|---|
| Standard card | white | 0° | strictly gridded |
| Tossed card | white/pastel | ±1–3° | narrative beats only |
| Stat tile | white or clear | 0° | huge numeral (H3) + mono label; never rotated |
| Featured tile | `--energy` | 0° (larger) | the one story that breaks the grid, carries icon + CTA |
| Receipt card | white | 0° | mono-led, short — about/toolkit |

**States:** default → hover: straighten (rotate→0°), lift (`--shadow-md`→`--shadow-lg`), title underlines → focus-visible: `3px --brand` outline inset.

**Rules:** factual content (stats, matrix) is never rotated; only narrative cards may tilt. Card padding is generous even when content is short.

## 5. Buttons

| Variant | Anatomy | Usage |
|---|---|---|
| **Primary CTA** | `--emphasis` or `--ink` fill · 3px border · `--shadow-xlg`/`--shadow-lg` · pill or block · uppercase label | exactly one per section |
| **Secondary** | `--white` fill · 2px border · `--shadow-sm` · block | per-section bottom-left links |
| **Tag pill** | `--white` fill · 2px border · no shadow · mono/small | tool tags, social links, meta |
| **Inline link** | text + `→` · underline on hover | within cards, footers |

**Universal button behavior — the "sticker press":**
- Hover: lift (`--shadow-md`→`--shadow-lg`), slight rotate-to-0 if tilted.
- Active/press: translate 4px toward shadow, shadow shrinks one step. Immediate, tactile.
- Focus-visible: `3px --brand` outline, inset offset.
- All interactive elements are real `<a>`/`<button>`; min target 44px.

**Rules:** one primary CTA per section, always the highest-contrast element on screen. Labels uppercase, `0.08em` tracking, blunt verbs (`SAY HELLO →`).

## 6. Highlight Blocks

The marker stroke: a solid color rectangle **behind** text, slightly rotated, black text on top, `--shadow-sm`.

- Default fill: `--emphasis` (the answer). Never recolored text — the block does the emphasis.
- **Discipline:** at most two per viewport (hero claim, contact CTA). One idea per screen.
- Sizes: inline word/phrase → whole-claim sized (hero).
- Hover (if the highlighted text is a link): shadow `--shadow-sm`→`--shadow-md`.

## 7. Sticky Notes (voice)

The commentary component — the "scribbled in the margin" element.

- **Anatomy:** `--voice` (blue) fill · 2px `--ink` border · `--shadow-md` · rotation −2–3° · Caveat or body-600 text · optional "tape" strip across top edge.
- **Content:** opinions, asides, director's commentary. Never facts (facts live in cards/recipes).
- Placement: overlapping the bottom-right of a content block, slightly breaking the grid.
- Hover: straighten; pressed: sticker-press.
- Exactly one sticky note per section at most (voice is precious, like the reference's speech bubble).

## 8. Section Headers (the tab)

Every band opens with the same pattern — instant orientation while scrolling.

**Anatomy (left→right):**
```
 [04]  WRITING   ← mono index (orange) + mono section name (14px, tracked)
 DOCUMENTATION & NOTES.   ← display uppercase H2, optional highlight on key phrase
 [VIEW ALL →]             ← optional right-aligned link
```
- Index numbers run sequentially (01–06) across the whole page — a hidden through-line.
- The H2 uses the display family; one key phrase may get a highlight block (following §6 discipline).
- Section headers sit on the band's background (flat, no card).

## 9. Navigation

**Anatomy:** wordmark (display + script suffix) left · **one bordered segmented unit** right (WORK · WRITING · CONTACT), flat, 2px border, no shadow.

- State per segment: default (transparent) · current (`--ink` fill, white label, `aria-current`) · hover (white→ink tint) · focus-visible ring.
- Sticky top; the segmented unit stays fixed (flat chrome contrasting the playful body — reference's "calm chrome" idea).
- **Mobile:** the same segmented control scrolls horizontally under the wordmark (no hamburger; fewer taps, Hick's Law).
- Wordmark returns to top on click.

## 10. Motion System

| Token | Value | Used by |
|---|---|---|
| `--dur-fast` | 150ms | hovers, presses |
| `--dur-base` | 250ms | reveals, straighten |
| `--ease` | `cubic-bezier(0.22,1,0.36,1)` | snappy sticker-flip |
| `--ease-press` | `cubic-bezier(0.34,1.56,0.64,1)` | press feedback |
| `--marquee-dur` | 28s linear | ticker |
| `--reveal-y` | 16px | scroll-in rise |

**System:** scroll reveals (fade + 16px rise, staggered ≤3, gated by `.js` so content is never hidden without JS) · sticker-press on all interactive · card straighten+lift on hover · marquee linear loop (pause on hover/focus) · nav section tracking via `aria-current`.

**Reduced motion (`prefers-reduced-motion: reduce`):** marquee static, reveals opacity-only, transitions ~1ms. Motion is enhancement, never a dependency.

## 11. Icons (the sticker pack)

Intentional mix — not one uniform set (scrapbook signature). Two families:

**A. Line doodle glyphs** (2px stroke = border weight, ink color, inline SVG):
`→` arrow · `✶` sparkle · `+` plus · `*` asterisk · `✓` check · `·` dot
Used in marquee separators, doodles, small list marks.

**B. Illustrated clip-art stickers** (flat, semi-3D, colored fills, hard outline, `--shadow-sm`):
paper-plane (contact/send) · gear (build/move) · tag (docs) · box/truck (shopify/shipping) · robot/agent (AI) · avatar (the person)
Used sparingly: one per featured tile, one in hero, one per contact band. Mixed styles on purpose.

**Rules:** icons are decoration and reinforcement, never the only carrier of meaning; every icon sits beside real text. Strokes match `--border-w` so icons feel like cut-outs.

## 12. Decorative Elements

The "scrapbook dressing" — always background-level, never under text, never functional.

| Element | Rules |
|---|---|
| Paper grain | subtle SVG noise over `--paper` bands, opacity ≤4% |
| Graph grid | faint grid overlay on colored bands, `--ink` ≤5% |
| Dashed path | 2px dashed `--ink`, connects hero → timeline stops; non-functional wayfinding |
| Corner blocks | torn/rotated accent shapes bleeding off-canvas (hero, about) |
| Doodles | asterisks, plus signs, dot clusters in corners, `--ink` ≤8% |
| Numbered circles | outlined badges along the timeline path only |
| Tape strips | on sticky notes and tossed cards |

**Responsive:** grain/grid stay; corner blocks, doodles, and dashed paths hide or simplify ≤768px. Decoration is the first thing sacrificed on mobile — content never is.

---

## Composition rules (how sections are built from these 12)

1. Every section = **Section Header** + one of: **Cards** (grid) · **Highlight** (emphasis) · **Sticky Note** (voice) + at most one **Primary CTA**.
2. Order within a band: header → content → voice element → CTA (bottom-left).
3. **One emphasis per screen, one voice per screen, one primary CTA per screen.**
4. Factual blocks never rotate; narrative blocks may.
5. Any new UI must be expressed as a new variation of an existing component, not a new pattern.

This component system is the contract for implementation — the page is a composition of these 12 building blocks and nothing else.
