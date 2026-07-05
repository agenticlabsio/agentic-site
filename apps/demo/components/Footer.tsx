export default function Footer() {
  return (
    <footer className="border-t border-hairline bg-[#efefe9]">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-8 gap-y-3 px-6 py-8 text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Agentic Labs. All rights reserved.</p>
        <nav
          aria-label="Legal"
          className="flex items-center gap-5 font-mono text-xs uppercase tracking-wider"
        >
          <a
            href="https://agenticlabs.io/legal/privacy"
            className="text-muted-fg transition-colors hover:text-ink"
          >
            Privacy
          </a>
          <a
            href="https://agenticlabs.io/legal/terms"
            className="text-muted-fg transition-colors hover:text-ink"
          >
            Terms
          </a>
          <a
            href="https://agenticlabs.io/trust"
            className="text-muted-fg transition-colors hover:text-ink"
          >
            Trust
          </a>
        </nav>
        <a
          href="https://agenticlabs.io"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-ink"
        >
          agenticlabs.io
        </a>
      </div>
    </footer>
  );
}
