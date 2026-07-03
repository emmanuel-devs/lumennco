
# Cinematic Portfolio Site — Build Plan

A single-page, dark-cinematic showcase site inspired by citizenpictures.com but sharper: tighter type, richer motion, better mobile, faster load. Since you're okay with placeholders, I'll use a placeholder studio name ("**LUMEN & CO.**" — swap anytime) and 6 placeholder projects you can rename later.

## What you'll get

**One long scrolling page** with sticky top nav that smooth-scrolls to:
1. **Hero** — full-viewport looping background video, centered logotype, tagline, "View Reel" CTA
2. **About** — split layout, animated headline, mission statement, capabilities strip (Unscripted • Branded • Documentary • Live • Sports)
3. **Work** — 6-tile responsive grid (3×2 desktop, 2×3 tablet, 1×6 mobile) with hover reveal (title, client, category); click opens a **video modal** with the reel embedded
4. **Reel modal** — full-screen dark overlay, autoplay, click-outside / Esc to close
5. **Contact** — bold oversized headline, email + phone + address, working contact form, social row
6. **Footer** — minimal, thin rule, copyright, socials

## Design direction (locked)

- **Palette**: near-black background `#0A0A0A`, off-white text `#F2F1EC`, single accent (electric cyan `#22D3EE` — matches the reference's star-blue but modern)
- **Typography**: Display headings in **Anton** (condensed, editorial, cinematic); body in **Inter** (clean, legible). Uppercase tracking on nav + section labels.
- **Motion**:
  - Hero video with slow Ken Burns zoom + dark gradient overlay for text legibility
  - Sticky nav shrinks + adds blur backdrop after 80px scroll
  - Parallax on hero (video translates slower than scroll)
  - Section headlines fade-up on scroll (IntersectionObserver, one-time)
  - Work tiles: image scales 1.05 on hover, dark overlay lifts, text slides up
  - Modal: scale-in + backdrop fade
- **Density**: generous whitespace, large hero type (clamp 4rem → 9rem), thin 1px accent rules

## Technical build

- **Stack**: TanStack Start (React + Tailwind v4) on the existing template — SSR, edge-fast, better Lighthouse than a Framer export
- **Route**: single `src/routes/index.tsx` with anchored sections (`#work`, `#about`, `#contact`) — matches your "one long scroll" ask
- **SEO**: real `<title>`, description, og:title/description/image, twitter card
- **Assets**: I'll generate 6 cinematic placeholder tile images (behind-the-scenes / production stills style) and use a tasteful stock-style looping hero video (muted, autoplay, playsInline). All swappable — every image/video is a single import you can replace with your real files or Vimeo/YouTube embed IDs.
- **Video modal**: accessible dialog (focus trap, Esc, aria-modal), supports both `<video>` files and Vimeo/YouTube iframe embeds
- **Contact form**: submits to a stub handler with success toast (wire to email/Cloud later — say the word)
- **Responsive**: mobile-first, hamburger nav under 768px, hero type + grid re-flow, tap-friendly modals
- **Performance**: hero video `preload="metadata"` + poster frame, tile images lazy-loaded, fonts preloaded, no client-side data fetching on first paint

## File plan

```text
src/routes/index.tsx        one-page composition + head() SEO
src/routes/__root.tsx       update site title/meta, load Anton + Inter
src/styles.css              add cinematic tokens (bg, ink, accent, gradients)
src/components/site/
  Nav.tsx                   sticky nav w/ scroll-shrink + mobile menu
  Hero.tsx                  video bg + parallax + CTA
  About.tsx                 split section + capabilities
  Work.tsx                  6-tile grid + modal trigger
  Contact.tsx               oversized headline + form + info
  Footer.tsx                minimal footer
  VideoModal.tsx            reusable accessible video dialog
src/assets/                 6 generated tile images + hero poster
src/data/projects.ts        6 placeholder project entries (title/client/category/video)
```

## What I need from you later (not blocking)

- Real studio name, tagline, contact info → 1-line swap in `projects.ts` + `Hero.tsx`
- Real Vimeo/YouTube IDs → paste into `projects.ts`
- Real hero video file or Vimeo ID → drop-in replace
- Logo SVG → replaces the wordmark in `Nav.tsx`

Approve and I'll build it end-to-end.
