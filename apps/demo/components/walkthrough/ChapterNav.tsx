"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { chapters } from "@/data/demos";

export default function ChapterNav({ demoSlug }: { demoSlug: string }) {
  const pathname = usePathname();
  const base = `/${demoSlug}`;

  return (
    <nav aria-label="Chapters" className="min-w-0 max-w-full lg:sticky lg:top-24">
      <div className="eyebrow-muted mb-4 hidden lg:block">Walkthrough</div>
      <ol className="chapter-strip flex w-full gap-1 overflow-x-auto lg:flex-col lg:gap-0">
        {chapters.map((ch) => {
          const href = `${base}${ch.path}`;
          const active = pathname === href;
          return (
            <li key={ch.num}>
              <Link
                href={href}
                aria-current={active ? "page" : undefined}
                className={`group flex shrink-0 items-baseline gap-3 rounded-md px-3 py-2 transition-colors lg:rounded-none lg:border-l-2 lg:px-4 ${
                  active
                    ? "bg-accent-wash text-ink lg:border-accent lg:bg-transparent"
                    : "text-secondary hover:text-ink lg:border-transparent lg:hover:border-hairline"
                }`}
              >
                <span
                  className={`figures font-mono text-xs ${active ? "text-accent-dark" : "text-muted-fg"}`}
                >
                  {ch.num}
                </span>
                <span
                  className={`whitespace-nowrap text-sm ${active ? "font-medium" : ""}`}
                >
                  {ch.name}
                </span>
              </Link>
            </li>
          );
        })}
      </ol>
      <div className="mt-6 hidden items-center gap-2 px-4 lg:flex">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        <span className="eyebrow-muted">Confidential</span>
      </div>
    </nav>
  );
}
