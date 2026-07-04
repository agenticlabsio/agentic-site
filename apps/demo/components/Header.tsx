import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-paper/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/logo.svg" alt="Agentic Labs" width={26} height={26} />
          <span className="font-display text-lg font-semibold text-ink">
            Agentic Labs
          </span>
          <span className="eyebrow-muted mt-0.5 hidden sm:inline">
            · Demo Suite
          </span>
        </Link>
        <div className="flex items-center gap-5">
          <span className="eyebrow-muted hidden items-center gap-2 md:inline-flex">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Confidential
          </span>
          <a
            href="https://agenticlabs.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-secondary transition-colors hover:text-ink"
          >
            agenticlabs.io &rarr;
          </a>
        </div>
      </div>
    </header>
  );
}
