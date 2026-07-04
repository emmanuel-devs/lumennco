import { useEffect, useRef } from "react";
import { Play, ArrowDown } from "lucide-react";
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
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-cinema pt-32 pb-32 sm:pt-40 sm:pb-40"
    >
      <div ref={mediaRef} className="absolute inset-0 will-change-transform">
        <video
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster={heroPoster}
          preload="metadata"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-a-cinema-camera-on-a-set-9018/1080p.mp4"
            type="video/mp4"
          />
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
          LUMEN &amp; CO. is a full-service production studio crafting unscripted series,
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
