import { Play } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import { useReveal } from "@/hooks/useReveal";

export function Work({ onOpen }: { onOpen: (p: Project) => void }) {
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
              className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-background text-left"
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
                  <h3 className="font-display mt-2 text-2xl uppercase text-ink sm:text-3xl">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm text-ink-muted">
                    {p.client} · {p.year}
                  </p>
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
