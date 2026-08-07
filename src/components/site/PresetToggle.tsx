import { useEffect, useState } from "react";

type Preset = "studio" | "solo";
const KEY = "lumen-preset";

export function PresetToggle({ className = "" }: { className?: string }) {
  const [preset, setPreset] = useState<Preset>("studio");

  useEffect(() => {
    const saved = window.localStorage.getItem(KEY) as Preset | null;
    if (saved === "solo" || saved === "studio") setPreset(saved);
  }, []);

  useEffect(() => {
    document.documentElement.dataset["preset"] = preset;
    window.localStorage.setItem(KEY, preset);
  }, [preset]);

  return (
    <div
      role="group"
      aria-label="Colour preset"
      className={`inline-flex items-center rounded-full border border-border p-0.5 ${className}`}
    >
      {(["studio", "solo"] as const).map((p) => (
        <button
          key={p}
          onClick={() => setPreset(p)}
          aria-pressed={preset === p}
          className={`rounded-full px-3 py-1.5 text-[0.6rem] uppercase tracking-[0.2em] transition ${
            preset === p
              ? "bg-primary text-primary-foreground"
              : "text-ink-muted hover:text-primary"
          }`}
        >
          {p}
        </button>
      ))}
    </div>
  );
}
