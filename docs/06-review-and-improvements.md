# Phase 7 — Wireframe Review & Improvements

Self-review of the Phase 6 wireframes against the extracted principles, the target audience, and accessibility. Weakness → fix, each applied to the wireframes.

## Review Checklist

| # | Weakness found | Fix applied |
|---|---|---|
| 1 | Nav drawn as three separate pills; the reference uses **one segmented, bordered group** (a stable chrome frame). | Nav is now a single bordered segmented unit (WORK · WRITING · CONTACT), flat, no shadow. |
| 2 | CTA position inconsistent (bottom-right in Method section). Reference keeps CTA **bottom-left, repeatable** (Jakob's Law). | All secondary CTAs pinned bottom-left of their content block; only the hero primary CTA sits in the hero flow. |
| 3 | Writing section had a matrix **and** two redundant sample cards — cognitive overlap on a skim page. | Matrix becomes the index (one factual table), plus **one** featured sample card + one blue margin note. One idea per sub-block. |
| 4 | No focus/keyboard affordance documented. Hard-edged, high-color design needs obvious focus. | Add `outline: 3px solid var(--brand)` on `:focus-visible`, inset offset. Documented in tokens. |
| 5 | Marquee could harm readability / vestibular discomfort. | Pause on hover, and `prefers-reduced-motion` → static band. |
| 6 | Hero name "MRIGYA SAHAI" is an unverified placeholder (inferred from machine username). | Explicitly flagged `[CONFIRM]` — swap-friendly, layout unaffected. |
| 7 | Proof-strip metrics feel braggy without a frame; recruiters need proof *anchored to a hat*. | Each metric gains a mono "hat" label (e.g., `PRODUCT`, `AI`, `DOCS`). |
| 8 | Timeline stops (⑩⑫⑱⑳) are decorative only; adding years makes it informative. | Kept years + one-line beats; circles stay ornamental (reference-style non-functional decoration). |
| 9 | No skip-to-content / semantic order note for a11y. | Documented: `#main` skip link, one `h1`, sequential `h2` per section, real links/buttons. |
| 10 | Mobile nav (`[≡]`) underspecified. | Sticky segmented control stays visible on mobile as horizontal scroll chips (no hamburger modal — fewer taps, Hick's Law). |
| 11 | Doodle density could compete on pink band behind cards. | Doodles low-opacity (`--ink` at 6–8%) and only in corners. |
| 12 | Highlighter used in too many sections would dilute it (reference: once or twice per screen). | Highlighter blocks limited to: hero claim, method "BUILD", contact "BUILD". Work section uses highlight on the featured tile title only. |

## Verification against goals

- **"I solve product problems and I build products."** → Hero headline + featured case studies + contact CTA all reinforce this in under 10 seconds.
- **Recruiters (90s skim):** hero proof strip → featured tile → contact. All above the fold or one scroll.
- **Founders/leaders:** method cards + outcome receipts → build credibility, not claims.
- **Design engineers:** writing/docs matrix proves craft; the site itself is a demo of the design language.
- **Not a template:** no bento, no glassmorphism, no uniform icon set; rotated margin notes + receipts + timeline path are bespoke.
- **Anti-list avoided:** no résumé dump; case studies are outcome-first, not chronological.

## Approved interaction spec (final)

- Buttons: press-to-flat (translate toward shadow, shadow shrinks), `:active` immediate, `:hover` straighten rotate.
- Cards: hover lifts (shadow-sm → shadow-md), rotate-to-0.
- Marquee: linear loop, pause on hover, disabled under reduced motion.
- Reveal: IntersectionObserver, fade + 16px rise, 250ms, stagger ≤3 items, no content hidden from non-JS (content visible by default, `.js` class gates animation).
- Scroll: native smooth (CSS `scroll-behavior`), anchor IDs match nav.
- Nav: sticky, flat, segments highlight current section via IntersectionObserver (aria-current).
