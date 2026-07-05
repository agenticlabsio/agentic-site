import Link from "next/link";
import { demos } from "@/data/demos";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
      <div className="eyebrow mb-5 flex items-center gap-3">
        <span aria-hidden className="h-px w-6 bg-accent/40" />
        404 — Not in the ledger
      </div>
      <h1 className="max-w-2xl text-4xl leading-[1.1] sm:text-5xl">
        This page isn&apos;t on file.
      </h1>
      <p className="mt-5 max-w-md leading-relaxed text-secondary">
        The four dossiers below are. Or start from the index.
      </p>
      <ul className="mt-12 divide-y divide-[color:var(--hairline-soft)] border-y border-hairline">
        {demos.map((d) => (
          <li key={d.slug}>
            <Link
              href={`/${d.slug}`}
              className="group flex flex-wrap items-baseline gap-x-4 gap-y-1 py-4"
            >
              <span className="eyebrow-muted w-14 shrink-0">{d.index}</span>
              <span className="font-medium text-ink transition-colors group-hover:text-accent-dark">
                {d.engine}
              </span>
              <span className="eyebrow-muted hidden sm:inline">
                · {d.domain}
              </span>
              <span
                aria-hidden
                className="ml-auto text-accent-dark opacity-0 transition-opacity group-hover:opacity-100"
              >
                &rarr;
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href="/"
        className="mt-10 inline-flex items-center gap-2 rounded-md bg-ink px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
      >
        Back to the index
        <span aria-hidden>&rarr;</span>
      </Link>
    </div>
  );
}
