export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-cinema py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-xs uppercase tracking-[0.22em] text-ink-muted sm:flex-row">
        <p>© {new Date().getFullYear()} Lumen &amp; Co. Productions</p>
        <p>Boulder · Los Angeles · New York</p>
        <a href="#top" className="hover:text-primary">Back to top ↑</a>
      </div>
    </footer>
  );
}
