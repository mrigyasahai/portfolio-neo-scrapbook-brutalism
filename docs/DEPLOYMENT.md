# Deployment Checklist

Follow this in order. Each step is verifiable — don't skip ahead.

## 0. Pre-flight (required, do this first)

- [ ] **Set the real domain** — `src/lib/site.ts` → `url`. It must be a valid URL; it feeds `sitemap.xml`, `robots.txt`, `metadataBase`, and the OG image.
- [ ] **Set the real email** — `src/lib/site.ts` → `email` (also update the `[TO-FILL-EMAIL]` mailto links in `site.links` and in `Writing.tsx`).
- [ ] **Replace profile links** — `site.links` (LinkedIn/GitHub).
- [ ] **Replace or remove placeholder content** — run `rg -n "TO ?FILL|example\.com" src` and clear every hit. See `PROJECT_STATUS.md → Remaining placeholders`.
- [ ] **Replace illustrative metrics** — the proof strip (`site.proof`) and every `metric` in `src/content/work/*.mdx` are *illustrative placeholders*. Never ship fabricated numbers. Either replace with verified metrics or remove the stat.

Verify locally before any deploy:

```bash
pnpm install
pnpm lint
pnpm typecheck
pnpm build
pnpm start   # then open http://localhost:3000
```

## 1. Environment variables

There are **no runtime secrets** — the site is fully static (SSG). Nothing sensitive is read at build or runtime. If you later add analytics or a form backend, add those env vars at that point.

## 2. Domain configuration

1. Buy the domain (or use a subdomain you control).
2. In Vercel → Project → **Settings → Domains**, add the domain.
3. Update your DNS provider:
   - Apex domain → Vercel's A record / CNAME as shown in Vercel (Vercel prints the exact records).
   - `www` subdomain → CNAME to `cname.vercel-dns.com`.
4. Wait for SSL issuance (auto, a few minutes). Toggle "Redirect www → apex" (or vice versa) to your preference.
5. After DNS propagates, set `url` in `src/lib/site.ts` to the final canonical domain and rebuild so sitemap/canonical/OG match.

## 3. Vercel deployment

1. Push the repo to GitHub.
2. Vercel → **Add New → Project** → import the repo.
3. Framework preset: **Next.js** (auto-detected). Build command `pnpm build`, output `Next.js`.
4. Deploy. The production URL will be `https://<project>.vercel.app`.

## 4. Analytics (optional)

Choose one:

- **Vercel Analytics** — Settings → Analytics → Enable (needs `@vercel/analytics` + `<Analytics />` in the root layout; add it when you're ready).
- **Plausible / Umami** — add the script tag to `src/app/layout.tsx` `<head>`.

The site is a single static page, so analytics adds value mainly for tracking CTA clicks and scroll depth.

## 5. Lighthouse verification (target ≥ 95 on all four)

- [ ] Run Lighthouse on the **production URL** (not localhost): DevTools → Lighthouse → Mobile.
- [ ] Pass categories: **Performance**, **Accessibility**, **Best Practices**, **SEO** — each ≥ 95.
- [ ] If Performance < 95: the biggest lever is `framer-motion` (~54 kB chunk). Options: keep (fine for a portfolio), or later split `Reveal` to a lazy/dynamic import.

## 6. Post-deployment verification

- [ ] `https://<domain>/` returns 200 and renders all 8 sections.
- [ ] `https://<domain>/sitemap.xml` lists the canonical URL.
- [ ] `https://<domain>/robots.txt` has `Sitemap:` pointing at the canonical domain.
- [ ] `https://<domain>/opengraph-image` returns a PNG; paste `https://<domain>/` into WhatsApp/X/LinkedIn and confirm the card renders.
- [ ] A random 404 URL returns HTTP 404 with the styled page.
- [ ] Structured data validates: Google Rich Results Test for `/` (Person + WebSite).
- [ ] `curl -I` returns `200` and sensible cache headers.
- [ ] Viewport sizes: 360 / 768 / 1024 / 1440 all look right (no horizontal scroll, nav chips scroll fine).
- [ ] Tab through the page — skip link works, every focus ring visible, `aria-current` updates in the nav.
- [ ] `prefers-reduced-motion: reduce` stops the marquee and reveals (fade only).

## Rollback

Every deploy is a new deployment URL; Vercel keeps previous builds. To roll back: Deployments → ⋯ → **Redeploy** a previous production build.
