import { useReveal } from "@/hooks/useReveal";

const capabilities = [
  "Unscripted Series",
  "Documentary",
  "Branded Films",
  "Live Production",
  "Sports",
  "Post & Finishing",
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
              We build worlds<br />
              worth <span className="text-primary">believing in.</span>
            </h2>
          </div>
          <div className="flex flex-col justify-end gap-6 text-lg text-ink-muted">
            <p>
              For nearly a decade, LUMEN &amp; CO. has partnered with networks, brands, and independent
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
            <span
              key={c}
              className="rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.18em] text-ink-muted transition hover:border-primary hover:text-primary"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
