import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

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
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/70 py-3 backdrop-blur-lg border-b border-white/5"
          : "bg-transparent py-6"
      }`}
    >
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
            <a
              key={l.href}
              href={l.href}
              className="eyebrow text-ink-muted transition hover:text-primary"
            >
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

        <button
          className="md:hidden text-ink"
          aria-label="Open menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden mx-auto mt-4 max-w-7xl px-6 pb-4 animate-fade-in">
          <div className="flex flex-col gap-4 border-t border-white/10 pt-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="eyebrow text-ink-muted"
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={() => {
                setOpen(false);
                onReel();
              }}
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
