export default function Footer() {
  return (
    <footer className="border-t border-hairline bg-[#efefe9]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8 text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Agentic Labs. All rights reserved.</p>
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
