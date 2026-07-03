import { useEffect } from "react";
import { X } from "lucide-react";
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

      <div
        className="relative w-full max-w-6xl animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
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
