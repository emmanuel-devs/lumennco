import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, Play } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Contact } from "@/components/site/Contact";
import { VideoModal } from "@/components/site/VideoModal";
import { projects, getProject, type Project } from "@/data/projects";

export const Route = createFileRoute("/work/$project")({
  loader: ({ params }) => {
    const project = getProject(params.project);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Project unavailable — Lumen & Co." }, { name: "robots", content: "noindex" }],
      };
    }
    const { project } = loaderData;
    const title = `${project.title} — ${project.client} | Lumen & Co.`;
    return {
      meta: [
        { title },
        { name: "description", content: project.description },
        { property: "og:title", content: title },
        { property: "og:description", content: project.description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: CaseStudy,
  notFoundComponent: ProjectNotFound,
});

function ProjectNotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background px-6 text-center">
      <h1 className="font-display text-5xl uppercase text-ink">Project not found</h1>
      <Link to="/" className="eyebrow">
        Back to the studio
      </Link>
    </div>
  );
}

function CaseStudy() {
  const { project } = Route.useLoaderData() as { project: Project };
  const [active, setActive] = useState<Project | null>(null);
  const others = projects.filter((p) => p.id !== project.id).slice(0, 3);

  const facts = [
    { k: "Client", v: project.client },
    { k: "Year", v: project.year },
    { k: "Format", v: project.runtime },
    { k: "Location", v: project.location },
  ];

  return (
    <div className="min-h-screen bg-background text-ink">
      <Nav onReel={() => setActive(project)} />

      <main>
        <section className="relative flex min-h-[80vh] items-end overflow-hidden bg-cinema pt-40 pb-20 grain">
          <img
            src={project.image}
            alt={`${project.title} still`}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-scrim via-scrim/70 to-scrim/30" />
          <div className="relative z-[2] mx-auto w-full max-w-7xl px-6">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.24em] text-on-media-muted transition hover:text-primary"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> All work
            </Link>
            <p className="eyebrow mt-8 text-on-media-muted">{project.category}</p>
            <h1 className="font-display mt-4 text-[clamp(2.75rem,9vw,8rem)] uppercase text-on-media">
              {project.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-on-media-muted">{project.description}</p>
            <button
              onClick={() => setActive(project)}
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 text-sm font-medium uppercase tracking-[0.22em] text-primary-foreground transition hover:bg-primary/90"
            >
              <Play className="h-4 w-4 fill-current" /> Watch the film
            </button>
          </div>
        </section>

        <section className="border-t border-border bg-background">
          <div className="mx-auto grid max-w-7xl gap-y-8 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
            {facts.map((f) => (
              <div key={f.k}>
                <div className="text-[0.65rem] uppercase tracking-[0.24em] text-ink-muted">{f.k}</div>
                <div className="mt-2 text-lg text-ink">{f.v}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-border/60 bg-background py-24 sm:py-32">
          <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="eyebrow">The Work</p>
              <h2 className="font-display mt-4 text-[clamp(2rem,4.5vw,3.5rem)] uppercase text-ink">
                How it<br />came together.
              </h2>
              <div className="mt-10 flex flex-wrap gap-3">
                {project.services.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border px-4 py-2 text-xs uppercase tracking-[0.18em] text-ink-muted"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-10 text-lg text-ink-muted">
              <div>
                <h3 className="text-sm uppercase tracking-[0.24em] text-primary">Challenge</h3>
                <p className="mt-3">{project.challenge}</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-[0.24em] text-primary">Approach</h3>
                <p className="mt-3">{project.approach}</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-[0.24em] text-primary">Outcome</h3>
                <p className="mt-3">{project.outcome}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-border/60 bg-cinema py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <p className="eyebrow">Stills</p>
            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {project.gallery.map((src, i) => (
                <div key={i} className="aspect-video overflow-hidden rounded-lg grain">
                  <img
                    src={src}
                    alt={`${project.title} still ${i + 1}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[900ms] hover:scale-105"
                  />
                </div>
              ))}
            </div>

            <div className="mt-20 grid gap-y-8 border-t border-border pt-10 sm:grid-cols-2 lg:grid-cols-4">
              {project.credits.map((c) => (
                <div key={c.role}>
                  <div className="text-[0.65rem] uppercase tracking-[0.24em] text-ink-muted">
                    {c.role}
                  </div>
                  <div className="mt-2 text-lg text-ink">{c.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border/60 bg-background py-24">
          <div className="mx-auto max-w-7xl px-6">
            <p className="eyebrow">Next Projects</p>
            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {others.map((p) => (
                <Link
                  key={p.id}
                  to="/work/$project"
                  params={{ project: p.id }}
                  className="group relative aspect-video overflow-hidden rounded-lg grain"
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-scrim via-scrim/35 to-transparent" />
                  <div className="absolute inset-0 z-[2] flex flex-col justify-end p-5">
                    <p className="eyebrow text-on-media-muted">{p.category}</p>
                    <h3 className="font-display mt-1 text-xl uppercase text-on-media">{p.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <Footer />
      <VideoModal project={active} onClose={() => setActive(null)} />
    </div>
  );
}
