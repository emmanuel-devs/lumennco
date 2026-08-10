export function Footer() {
  return (
    <footer className="border-t border-border bg-cinema py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-xs uppercase tracking-[0.22em] text-ink-muted sm:flex-row">
        <p>© {new Date().getFullYear()} Lumen &amp; Co. Productions</p>
        <p>Boulder · Los Angeles · New York</p>
        <p>
          Designed &amp; built by{" "}
          <a
            href="https://bricksandframe.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-muted underline-offset-4 transition-opacity duration-300 hover:text-primary hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
          >
            Bricks &amp; Frame
          </a>
        </p>

        <a href="#top" className="hover:text-primary">Back to top ↑</a>
      </div>
    </footer>
  );
}
