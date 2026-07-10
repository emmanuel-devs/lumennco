# LUMEN & CO. — Framer Agent Rebuild Guide

Rebuild this cinematic production-studio landing page in Framer. This file contains the complete design spec, tokens, component code, copy, and asset list.

## 1. Brand & Concept

- **Brand:** LUMEN & CO. — a full-service production studio for film, TV, and branded content.
- **Mood:** Dark, cinematic, editorial, high-contrast, minimal.
- **Personality:** Bold uppercase display type, subtle grain texture, warm amber accents, slow elegant reveals.
- **Site structure:** Single-page landing with 5 sections: Hero, Clients, About, Work, Contact, plus Footer, Navigation, and a Video Modal.

## 2. Design Tokens (use exactly)

### Colors
- **Background:** `#0A0A0A` (oklch(0.14 0.005 260)) — near black
- **Cinema well:** `#070707` (oklch(0.11 0.005 260)) — deeper black for heavy sections
- **Foreground / Ink:** `#F2F1EC` (oklch(0.96 0.005 90)) — off-white
- **Ink muted:** `#ABABA6` (oklch(0.68 0.01 90)) — secondary text
- **Primary accent:** warm amber / bone (oklch(0.82 0.11 75)) — `#E5C89C` approx
- **Borders:** white at 10% opacity, plus subtle white/5 dividers
- **Overlay gradients:** `bg-gradient-to-b from-background/60 via-background/40 to-background`

### Typography
- **Display font:** Anton (fallback Impact), uppercase, tight leading 0.95, slight negative tracking.
- **Body font:** Inter 400 / 500 / 600.
- **Italic serif emphasis:** Instrument Serif Italic (only for the single words *move* and *something* in the H1/H2).
- **Eyebrow style:** uppercase, letter-spacing 0.22em, 0.75rem, font-weight 500, primary color.

### Spacing & Layout
- Max container width: `1280px` (max-w-7xl), centered, horizontal padding `24px`.
- Section vertical padding: `py-32` mobile, `py-44` desktop (`128px` / `176px`).
- Clients section is tighter: `py-16` mobile, `py-20` desktop.
- Buttons: rounded-full, generous horizontal padding, uppercase tracking 0.22em.

### Effects
- **Scroll reveal:** sections fade in and translate Y from 24px to 0 over 900ms with easing `cubic-bezier(0.2, 0.7, 0.2, 1)`.
- **Hero parallax:** background video/poster translates Y at 0.35× scroll and scales `1 + scrollY * 0.0004`.
- **Grain overlay:** a subtle SVG noise overlay at 8% opacity with `mix-blend-mode: overlay` on sections with `.grain`.
- **Hover states:** primary border/text color shifts on tags, work cards scale image 1.05 over 900ms.
- **Modal:** fade-in backdrop, scale-in content, escape-to-close, body scroll locked.

### Animation presets to recreate in Framer
- `animate-fade-in`: opacity 0→1 with stagger 0.1s for hero text/buttons.
- `reveal`: opacity 0, translateY 24px → opacity 1, translateY 0, 900ms, `cubic-bezier(0.2, 0.7, 0.2, 1)`.
- `animate-bounce`: small arrow bounce (loop).
- `animate-scale-in`: modal content scale 0.95→1 + opacity 0→1.

## 3. Global CSS (styles.css)

```css
@import "tailwindcss" source(none);
@source "../src";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);

  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);

  --color-ink: var(--ink);
  --color-ink-muted: var(--ink-muted);
  --color-cinema: var(--cinema);

  --font-display: "Anton", "Impact", sans-serif;
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
}

:root {
  --radius: 0.5rem;

  --background: oklch(0.14 0.005 260);
  --foreground: oklch(0.96 0.005 90);
  --ink: oklch(0.96 0.005 90);
  --ink-muted: oklch(0.68 0.01 90);
  --cinema: oklch(0.11 0.005 260);

  --card: oklch(0.17 0.005 260);
  --card-foreground: var(--foreground);
  --popover: oklch(0.17 0.005 260);
  --popover-foreground: var(--foreground);

  --primary: oklch(0.82 0.11 75);
  --primary-foreground: oklch(0.14 0.005 260);
  --secondary: oklch(0.22 0.005 260);
  --secondary-foreground: var(--foreground);
  --muted: oklch(0.22 0.005 260);
  --muted-foreground: oklch(0.68 0.01 90);
  --accent: oklch(0.82 0.11 75);
  --accent-foreground: oklch(0.14 0.005 260);

  --destructive: oklch(0.62 0.22 25);
  --destructive-foreground: oklch(0.96 0.005 90);

  --border: oklch(1 0 0 / 10%);
  --input: oklch(1 0 0 / 12%);
  --ring: oklch(0.82 0.11 75);
}

@layer base {
  * { border-color: var(--color-border); }
  html { scroll-behavior: smooth; }
  body {
    background-color: var(--color-background);
    color: var(--color-foreground);
    font-family: var(--font-sans);
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }
  ::selection {
    background: var(--color-primary);
    color: var(--color-primary-foreground);
  }
}

@utility font-display {
  font-family: var(--font-display);
  letter-spacing: -0.01em;
  line-height: 0.95;
}

@utility eyebrow {
  font-family: var(--font-sans);
  text-transform: uppercase;
  letter-spacing: 0.22em;
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--color-primary);
}

@utility reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 900ms cubic-bezier(0.2, 0.7, 0.2, 1),
              transform 900ms cubic-bezier(0.2, 0.7, 0.2, 1);
}

@utility reveal-in {
  opacity: 1;
  transform: translateY(0);
}

@utility grain {
  position: relative;
  isolation: isolate;
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 1;
    pointer-events: none;
    opacity: 0.08;
    mix-blend-mode: overlay;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.6 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>");
    background-size: 160px 160px;
  }
}
```

Load fonts in `<head>`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet">
```

## 4. Assets Required

| File | Purpose |
|------|---------|
| `hero-poster.jpg` | Hero fallback poster behind the looping video |
| `work-1.jpg` | Signal Fire thumbnail |
| `work-2.jpg` | High Country thumbnail |
| `work-3.jpg` | On the Line thumbnail |
| `work-4.jpg` | Amplified thumbnail |
| `work-5.jpg` | Kickoff thumbnail |
| `work-6.jpg` | North Star thumbnail |

**Video source used in Hero:** `https://cdn.coverr.co/videos/coverr-a-cinema-camera-on-a-set-9018/1080p.mp4`

**Video embeds used in project modal:** `https://player.vimeo.com/video/76979871` (placeholder — replace with real project videos).

## 5. Reusable Utilities

### `useReveal` hook (scroll-trigger)

```typescript
import { useEffect, useRef } from "react";

export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -80px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}
```

In Framer, use the native scroll-into-view animation instead; trigger at 12% visibility with a 80px bottom root margin.

## 6. Section Components

### Nav

```typescript
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // or use SVG icons

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Nav({ onReel }: { onReel: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
      scrolled
        ? "bg-background/70 py-3 backdrop-blur-lg border-b border-white/5"
        : "bg-transparent py-6"
    }`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-3 group">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-primary/60 transition group-hover:border-primary">
            <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_16px_var(--color-primary)]" />
          </span>
          <span className="font-display text-xl tracking-wide">
            LUMEN <span className="text-primary">&</span> CO.
          </span>
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="eyebrow text-ink-muted transition hover:text-primary">
              {l.label}
            </a>
          ))}
          <button
            onClick={onReel}
            className="rounded-full border border-primary px-5 py-2 text-xs font-medium uppercase tracking-[0.22em] text-primary transition hover:bg-primary hover:text-primary-foreground"
          >
            Demo Reel
          </button>
        </nav>

        <button className="md:hidden text-ink" aria-label="Open menu" onClick={() => setOpen((o) => !o)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden mx-auto mt-4 max-w-7xl px-6 pb-4 animate-fade-in">
          <div className="flex flex-col gap-4 border-t border-white/10 pt-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="eyebrow text-ink-muted">
                {l.label}
              </a>
            ))}
            <button
              onClick={() => { setOpen(false); onReel(); }}
              className="mt-2 self-start rounded-full border border-primary px-5 py-2 text-xs font-medium uppercase tracking-[0.22em] text-primary"
            >
              Demo Reel
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
```

### Hero

```typescript
import { useEffect, useRef } from "react";
import { Play, ArrowDown } from "lucide-react"; // or SVG icons
import heroPoster from "@/assets/hero-poster.jpg";

export function Hero({ onReel }: { onReel: () => void }) {
  const mediaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!mediaRef.current) return;
      const y = window.scrollY;
      mediaRef.current.style.transform = `translate3d(0, ${y * 0.35}px, 0) scale(${1 + y * 0.0004})`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="top" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-cinema pt-32 pb-32 sm:pt-40 sm:pb-40 grain">
      <div ref={mediaRef} className="absolute inset-0 will-change-transform">
        <video className="h-full w-full object-cover" autoPlay loop muted playsInline poster={heroPoster} preload="metadata">
          <source src="https://cdn.coverr.co/videos/coverr-a-cinema-camera-on-a-set-9018/1080p.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--color-background)_90%)]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        <p className="eyebrow mb-6 animate-fade-in">Film · Television · Branded Content</p>
        <h1 className="font-display text-[clamp(3.5rem,11vw,10rem)] uppercase text-ink animate-fade-in">
          Stories that
          <br />
          <span className="italic font-normal text-primary" style={{ fontFamily: "'Instrument Serif', serif" }}>
            move
          </span>{" "}
          the room.
        </h1>
        <p className="mt-8 max-w-xl text-base text-ink-muted sm:text-lg animate-fade-in">
          LUMEN & CO. is a full-service production studio crafting unscripted series,
          documentaries, live events, and branded films for networks and brands with something to say.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-fade-in">
          <button
            onClick={onReel}
            className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 text-sm font-medium uppercase tracking-[0.22em] text-primary-foreground transition hover:bg-primary/90"
          >
            <Play className="h-4 w-4 fill-current" />
            Watch Reel
          </button>
          <a
            href="#work"
            className="inline-flex items-center gap-3 rounded-full border border-white/20 px-7 py-4 text-sm font-medium uppercase tracking-[0.22em] text-ink transition hover:border-primary hover:text-primary"
          >
            See the Work
          </a>
        </div>

        <a href="#about" aria-label="Scroll down" className="mt-16 inline-flex flex-col items-center gap-2 text-ink-muted transition hover:text-primary">
          <span className="text-[0.65rem] uppercase tracking-[0.3em]">Scroll</span>
          <ArrowDown className="h-5 w-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
```

### Clients

```typescript
import { useReveal } from "@/hooks/useReveal";

const clients = [
  "HBO", "Netflix", "National Geographic", "ESPN Films",
  "Discovery", "Patagonia", "Live Nation", "Food Network",
];

export function Clients() {
  const ref = useReveal();
  return (
    <section aria-label="Trusted by" className="relative border-t border-white/5 bg-background py-16 sm:py-20">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-6">
        <p className="eyebrow text-center text-ink-muted">Trusted by networks & brands</p>
        <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4 lg:grid-cols-8">
          {clients.map((c) => (
            <div key={c} className="text-center font-display text-lg uppercase tracking-[0.18em] text-ink-muted/70 transition hover:text-ink sm:text-xl">
              {c}
            </div>
          ))}
        </div>

        <figure className="mx-auto mt-16 max-w-3xl text-center">
          <blockquote className="font-display text-2xl uppercase leading-tight text-ink sm:text-3xl">
            "Lumen delivered a season that outperformed every benchmark we set —
            on schedule, on budget, and unmistakably theirs."
          </blockquote>
          <figcaption className="mt-6 text-sm uppercase tracking-[0.22em] text-ink-muted">
            Marta Reyes · Executive Producer, Discovery
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
```

### About

```typescript
import { useReveal } from "@/hooks/useReveal";

const capabilities = [
  "Unscripted Series", "Documentary", "Branded Films",
  "Live Production", "Sports", "Post & Finishing",
];

const stats = [
  { k: "180+", v: "Episodes delivered" },
  { k: "14", v: "Networks & brands" },
  { k: "9", v: "Years in production" },
  { k: "6", v: "Regional Emmys" },
];

export function About() {
  const ref = useReveal();
  return (
    <section id="about" className="relative border-t border-white/5 bg-background py-32 sm:py-44">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-6">
        <p className="eyebrow">About the Studio</p>
        <div className="mt-8 grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-24">
          <div>
            <h2 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] uppercase text-ink">
              We build worlds<br />worth <span className="text-primary">believing in.</span>
            </h2>
          </div>
          <div className="flex flex-col justify-end gap-6 text-lg text-ink-muted">
            <p>
              For nearly a decade, LUMEN & CO. has partnered with networks, brands, and independent
              storytellers to produce work that lingers — the kind of film and television that gets
              quoted, argued over, and shared.
            </p>
            <p>
              From a Boulder-based studio and crews around the world, we handle every frame: development,
              production, post, and delivery. One team. Full craft. No handoffs.
            </p>
          </div>
        </div>

        <div className="mt-24 grid gap-y-10 border-y border-white/10 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.v}>
              <div className="font-display text-5xl text-primary">{s.k}</div>
              <div className="mt-2 text-sm uppercase tracking-[0.18em] text-ink-muted">{s.v}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap gap-3">
          {capabilities.map((c) => (
            <span key={c} className="rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.18em] text-ink-muted transition hover:border-primary hover:text-primary">
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### Work

```typescript
import { Play } from "lucide-react"; // or SVG icon
import { useReveal } from "@/hooks/useReveal";

const projects = [
  {
    id: "signal-fire",
    title: "Signal Fire",
    client: "Discovery",
    category: "Unscripted Series",
    year: "2025",
    image: "work-1.jpg",
    videoUrl: "https://player.vimeo.com/video/76979871",
    description: "An 8-part unscripted series following wildland firefighters through a record-breaking season.",
  },
  {
    id: "high-country",
    title: "High Country",
    client: "National Geographic",
    category: "Documentary Feature",
    year: "2025",
    image: "work-2.jpg",
    videoUrl: "https://player.vimeo.com/video/76979871",
    description: "A feature-length documentary tracing a lone photographer's year in the Rockies.",
  },
  {
    id: "on-the-line",
    title: "On the Line",
    client: "Food Network",
    category: "Culinary Series",
    year: "2024",
    image: "work-3.jpg",
    videoUrl: "https://player.vimeo.com/video/76979871",
    description: "Behind the pass with the chefs shaping America's next great restaurants.",
  },
  {
    id: "amplified",
    title: "Amplified",
    client: "Live Nation",
    category: "Live Production",
    year: "2024",
    image: "work-4.jpg",
    videoUrl: "https://player.vimeo.com/video/76979871",
    description: "Multi-cam live capture and broadcast direction for a national headline tour.",
  },
  {
    id: "kickoff",
    title: "Kickoff",
    client: "ESPN Films",
    category: "Sports Documentary",
    year: "2024",
    image: "work-5.jpg",
    videoUrl: "https://player.vimeo.com/video/76979871",
    description: "An intimate portrait of a rookie season told through the athlete's own footage.",
  },
  {
    id: "north-star",
    title: "North Star",
    client: "Patagonia",
    category: "Branded Content",
    year: "2023",
    image: "work-6.jpg",
    videoUrl: "https://player.vimeo.com/video/76979871",
    description: "A brand film celebrating five athletes and the wild places that made them.",
  },
];

export function Work({ onOpen }: { onOpen: (p: typeof projects[0]) => void }) {
  const ref = useReveal();
  return (
    <section id="work" className="relative border-t border-white/5 bg-cinema py-32 sm:py-44">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Selected Work</p>
            <h2 className="font-display mt-4 text-[clamp(2.5rem,6vw,5.5rem)] uppercase text-ink">
              Recent<br />productions.
            </h2>
          </div>
          <p className="max-w-sm text-ink-muted">
            A cross-section of series, documentaries, and branded films from the last twenty-four months.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <button
              key={p.id}
              onClick={() => onOpen(p)}
              className="group relative aspect-video overflow-hidden rounded-lg bg-background text-left grain"
            >
              <img
                src={p.image}
                alt={p.title}
                width={1280}
                height={896}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="translate-y-2 transform transition duration-500 group-hover:translate-y-0">
                  <p className="eyebrow text-primary">{p.category}</p>
                  <h3 className="font-display mt-2 text-2xl uppercase text-ink sm:text-3xl">{p.title}</h3>
                  <p className="mt-1 text-sm text-ink-muted">{p.client} · {p.year}</p>
                </div>
              </div>
              <span className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/30 text-ink backdrop-blur-sm transition group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                <Play className="h-4 w-4 fill-current" />
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### Contact

```typescript
import { useState, type FormEvent } from "react";
import { useReveal } from "@/hooks/useReveal";

export function Contact() {
  const ref = useReveal();
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      alert("Message sent. We'll be in touch within one business day."); // replace with toast in Framer
    }, 700);
  };

  return (
    <section id="contact" className="relative border-t border-white/5 bg-background py-32 sm:py-44">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-6">
        <p className="eyebrow">Start a Project</p>
        <h2 className="font-display mt-6 text-[clamp(3rem,9vw,9rem)] uppercase leading-[0.9] text-ink">
          Let's make<br />
          <span className="text-primary italic font-normal" style={{ fontFamily: "'Instrument Serif', serif" }}>
            something
          </span>{" "}
          together.
        </h2>

        <div className="mt-20 grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
          <div className="space-y-10">
            <div>
              <p className="eyebrow text-ink-muted">Studio</p>
              <p className="mt-3 text-lg text-ink">
                2530 Frontier Ave.<br />Boulder, CO 80301
              </p>
            </div>
            <div>
              <p className="eyebrow text-ink-muted">General</p>
              <a href="mailto:hello@lumenandco.studio" className="mt-3 block text-lg text-ink transition hover:text-primary">
                hello@lumenandco.studio
              </a>
              <a href="tel:+13034555200" className="mt-1 block text-lg text-ink-muted transition hover:text-primary">
                +1 (303) 455-5200
              </a>
            </div>
            <div>
              <p className="eyebrow text-ink-muted">Follow</p>
              <div className="mt-3 flex gap-6 text-sm uppercase tracking-[0.22em] text-ink-muted">
                <a href="#" className="hover:text-primary">Instagram</a>
                <a href="#" className="hover:text-primary">Vimeo</a>
                <a href="#" className="hover:text-primary">LinkedIn</a>
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="space-y-6">
            <Field label="Name" name="name" required />
            <Field label="Email" name="email" type="email" required />
            <div>
              <label className="eyebrow text-ink-muted">One-line pitch</label>
              <textarea
                name="message"
                required
                rows={3}
                className="mt-3 w-full resize-none border-0 border-b border-white/20 bg-transparent pb-3 text-lg text-ink outline-none transition placeholder:text-ink-muted/60 focus:border-primary"
                placeholder="Tell us what you're making…"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="mt-4 inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-medium uppercase tracking-[0.22em] text-primary-foreground transition hover:bg-primary/90 disabled:opacity-60"
            >
              {sending ? "Sending…" : "Send Message"}
            </button>
            <p className="text-xs uppercase tracking-[0.22em] text-ink-muted">We reply within 1 business day.</p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required, placeholder }: {
  label: string; name: string; type?: string; required?: boolean; placeholder?: string;
}) {
  return (
    <div>
      <label className="eyebrow text-ink-muted">
        {label}
        {required && <span className="text-primary"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="mt-3 w-full border-0 border-b border-white/20 bg-transparent pb-3 text-lg text-ink outline-none transition placeholder:text-ink-muted/60 focus:border-primary"
      />
    </div>
  );
}
```

### Footer

```typescript
export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-cinema py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-xs uppercase tracking-[0.22em] text-ink-muted sm:flex-row">
        <p>© {new Date().getFullYear()} Lumen & Co. Productions</p>
        <p>Boulder · Los Angeles · New York</p>
        <a href="#top" className="hover:text-primary">Back to top ↑</a>
      </div>
    </footer>
  );
}
```

### VideoModal

```typescript
import { useEffect } from "react";
import { X } from "lucide-react"; // or SVG icon
import type { Project } from "@/data/projects";

interface Props {
  project: Project | null;
  onClose: () => void;
}

export function VideoModal({ project, onClose }: Props) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} video`}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Close video"
        className="absolute right-6 top-6 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-ink transition hover:border-primary hover:text-primary"
      >
        <X className="h-5 w-5" />
      </button>

      <div className="relative w-full max-w-6xl animate-scale-in" onClick={(e) => e.stopPropagation()}>
        <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-cinema shadow-2xl">
          <iframe
            src={`${project.videoUrl}?autoplay=1&title=0&byline=0&portrait=0`}
            title={project.title}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        </div>
        <div className="mt-6 flex flex-col gap-2 text-ink sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">{project.category}</p>
            <h3 className="font-display mt-2 text-3xl sm:text-4xl">{project.title}</h3>
          </div>
          <p className="max-w-md text-sm text-ink-muted">{project.description}</p>
        </div>
      </div>
    </div>
  );
}
```

## 7. Page Composition

```typescript
import { useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Clients } from "@/components/site/Clients";
import { About } from "@/components/site/About";
import { Work } from "@/components/site/Work";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { VideoModal } from "@/components/site/VideoModal";
import { projects } from "@/data/projects";

export default function Index() {
  const [active, setActive] = useState<typeof projects[0] | null>(null);
  const openReel = () => setActive(projects[0]);
  return (
    <div className="min-h-screen bg-background text-ink">
      <Nav onReel={openReel} />
      <main>
        <Hero onReel={openReel} />
        <Clients />
        <About />
        <Work onOpen={setActive} />
        <Contact />
      </main>
      <Footer />
      <VideoModal project={active} onClose={() => setActive(null)} />
    </div>
  );
}
```

## 8. Head / SEO Metadata

```html
<title>Lumen & Co. — Film, Television & Branded Content Studio</title>
<meta name="description" content="Lumen & Co. is a full-service production studio crafting unscripted series, documentaries, live events, and branded films for networks and brands.">
<meta property="og:title" content="Lumen & Co. — Cinematic Production Studio">
<meta property="og:description" content="Unscripted series, documentaries, live productions, and branded films. Selected work and a full demo reel.">
<meta property="og:type" content="website">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#0A0A0A">
```

## 9. Notes for the Framer Agent

- **Single-page layout:** keep all sections in one page; nav links scroll to `#section` anchors.
- **Parallax:** apply the transform to the hero video/image layer, not the text.
- **Grain:** can be recreated with a transparent PNG noise tile or a CSS/SVG overlay; opacity should be very low (~8%).
- **Video modal:** in Framer, use a fullscreen overlay with a YouTube/Vimeo embed component and a close button.
- **Form:** currently a client-side simulated submit; wire it to a real endpoint or Framer form handler if needed.
- **Images:** use the `work-1.jpg` through `work-6.jpg` names as placeholders; the originals are in the source repo at `src/assets/`.
- **Iconography:** `Play`, `X`, `Menu`, `ArrowDown` from `lucide-react` — use equivalent Framer icons or SVGs.
