import { Play, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { projects, type Project } from "@/data/projects";
import { useReveal } from "@/hooks/useReveal";

export function Work({ onOpen }: { onOpen: (p: Project) => void }) {
  const ref = useReveal();
  return (
    <section id="work" className="relative border-t border-border/60 bg-cinema py-32 sm:py-44">
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
            <article
              key={p.id}
              className="group relative aspect-video overflow-hidden rounded-lg bg-background grain"
            >
              <img
                src={p.image}
                alt={p.title}
                width={1280}
                height={720}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-scrim via-scrim/35 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Full-tile link to the case study */}
              <Link
                to="/work/$project"
                params={{ project: p.id }}
                className="absolute inset-0 z-[2] flex flex-col justify-end p-6 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-primary"
                aria-label={`${p.title} case study`}
              >
                <div className="translate-y-2 transform transition duration-500 group-hover:translate-y-0">
                  <p className="eyebrow text-on-media-muted">{p.category}</p>
                  <h3 className="font-display mt-2 text-2xl uppercase text-on-media sm:text-3xl">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm text-on-media-muted">
                    {p.client} · {p.year}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-[0.65rem] uppercase tracking-[0.22em] text-on-media-muted opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    View case study <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>

              <button
                onClick={() => onOpen(p)}
                aria-label={`Play ${p.title} trailer`}
                className="absolute right-5 top-5 z-[3] flex h-11 w-11 items-center justify-center rounded-full border border-on-media/30 bg-scrim/40 text-on-media backdrop-blur-sm transition hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Play className="h-4 w-4 fill-current" />
              </button>

            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
