import { useState, type FormEvent } from "react";
import { toast } from "sonner";
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
      toast.success("Message sent. We'll be in touch within one business day.");
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
                2530 Frontier Ave.<br />
                Boulder, CO 80301
              </p>
            </div>
            <div>
              <p className="eyebrow text-ink-muted">General</p>
              <a
                href="mailto:hello@lumenandco.studio"
                className="mt-3 block text-lg text-ink transition hover:text-primary"
              >
                hello@lumenandco.studio
              </a>
              <a
                href="tel:+13034555200"
                className="mt-1 block text-lg text-ink-muted transition hover:text-primary"
              >
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
            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Name" name="name" required />
              <Field label="Company" name="company" />
            </div>
            <Field label="Email" name="email" type="email" required />
            <Field label="Project" name="project" placeholder="Series, doc, brand film…" />
            <div>
              <label className="eyebrow text-ink-muted">Tell us about it</label>
              <textarea
                name="message"
                required
                rows={5}
                className="mt-3 w-full resize-none border-0 border-b border-white/20 bg-transparent pb-3 text-lg text-ink outline-none transition placeholder:text-ink-muted/60 focus:border-primary"
                placeholder="Timeline, scope, budget range…"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="mt-4 inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-medium uppercase tracking-[0.22em] text-primary-foreground transition hover:bg-primary/90 disabled:opacity-60"
            >
              {sending ? "Sending…" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
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
