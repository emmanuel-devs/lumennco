import { useEffect, useRef, useState } from "react";
import { Play, ArrowDown } from "lucide-react";
import heroPoster from "@/assets/hero-poster.jpg";
import heroWebm from "@/assets/hero-loop.webm.asset.json";
import heroMp4 from "@/assets/hero-loop.mp4.asset.json";

export function Hero({ onReel }: { onReel: () => void }) {
  const mediaRef = useRef<HTMLDivElement>(null);
  const [playVideo, setPlayVideo] = useState(false);

  // Parallax, rAF-throttled and disabled for reduced-motion / small screens.
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || window.innerWidth < 640) return;
    let raf = 0;
    const apply = () => {
      raf = 0;
      const el = mediaRef.current;
      if (!el) return;
      const y = window.scrollY;
      if (y > window.innerHeight) return;
      el.style.transform = `translate3d(0, ${y * 0.35}px, 0) scale(${1 + y * 0.0004})`;
    };
    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(apply);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  // Only fetch the video after first paint, on capable connections.
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
    const slow = conn?.saveData || /2g/.test(conn?.effectiveType ?? "");
    if (reduced || slow || window.innerWidth < 640) return;
    const id = window.setTimeout(() => setPlayVideo(true), 300);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-cinema pt-32 pb-32 sm:pt-40 sm:pb-40 grain"
    >
      <div ref={mediaRef} className="absolute inset-0 will-change-transform">
        <img
          src={heroPoster}
          alt="Cinema camera on a darkened film set"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        {playVideo && (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster={heroPoster}
            aria-hidden="true"
          >
            <source src={heroWebm.url} type="video/webm" />
            <source src={heroMp4.url} type="video/mp4" />
          </video>
        )}
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
          LUMEN &amp; CO. is a full-service production studio crafting unscripted series,
          documentaries, live events, and branded films for networks and brands with something to say.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-fade-in">
          <button
            onClick={onReel}
            className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 text-sm font-medium uppercase tracking-[0.22em] text-primary-foreground transition hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            <Play className="h-4 w-4 fill-current" />
            Watch Reel
          </button>
          <a
            href="#work"
            className="inline-flex items-center gap-3 rounded-full border border-white/20 px-7 py-4 text-sm font-medium uppercase tracking-[0.22em] text-ink transition hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            See the Work
          </a>
        </div>

        <a
          href="#about"
          aria-label="Scroll down"
          className="mt-16 inline-flex flex-col items-center gap-2 text-ink-muted transition hover:text-primary"
        >
          <span className="text-[0.65rem] uppercase tracking-[0.3em]">Scroll</span>
          <ArrowDown className="h-5 w-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
