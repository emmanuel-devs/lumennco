import { useReveal } from "@/hooks/useReveal";

const clients = [
  "HBO",
  "Netflix",
  "National Geographic",
  "ESPN Films",
  "Discovery",
  "Patagonia",
  "Live Nation",
  "Food Network",
];

export function Clients() {
  const ref = useReveal();
  return (
    <section
      aria-label="Trusted by"
      className="relative border-t border-white/5 bg-background py-16 sm:py-20"
    >
      <div ref={ref} className="reveal mx-auto max-w-7xl px-6">
        <p className="eyebrow text-center text-ink-muted">Trusted by networks & brands</p>
        <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4 lg:grid-cols-8">
          {clients.map((c) => (
            <div
              key={c}
              className="text-center font-display text-lg uppercase tracking-[0.18em] text-ink-muted/70 transition hover:text-ink sm:text-xl"
            >
              {c}
            </div>
          ))}
        </div>

        <figure className="mx-auto mt-16 max-w-3xl text-center">
          <blockquote
            className="font-display text-2xl uppercase leading-tight text-ink sm:text-3xl"
          >
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
