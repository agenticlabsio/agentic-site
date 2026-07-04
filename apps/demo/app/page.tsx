import Link from "next/link";
import { demos } from "@/data/demos";
import { products } from "@/data/products";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-14 lg:py-20">
      {/* Hero */}
      <section className="grid gap-8 border-b border-hairline pb-14 lg:grid-cols-[1.4fr_1fr] lg:items-end lg:gap-16">
        <div>
          <div className="eyebrow mb-5 flex items-center gap-3">
            <span aria-hidden className="h-px w-6 bg-accent/40" />
            Engagement dossiers
          </div>
          <h1 className="text-5xl leading-[1.05] sm:text-6xl">
            Four operations,
            <br />
            rebuilt around AI.
          </h1>
        </div>
        <div>
          <p className="max-w-md leading-relaxed text-secondary">
            Each dossier walks through how Agentic Labs converts a legacy
            workflow into an agentic one — the audit, the harness engineering,
            the human-in-the-loop workflows, and the operating economics that
            follow.
          </p>
          <div className="eyebrow-muted mt-5 flex items-center gap-3">
            Select an operation
            <span aria-hidden className="h-px w-12 bg-[color:var(--hairline)]" />
          </div>
        </div>
      </section>

      {/* Dossier cards */}
      <section className="grid gap-5 py-12 sm:grid-cols-2">
        {demos.map((d) => (
          <Link
            key={d.slug}
            href={`/${d.slug}`}
            className="dossier-card group flex min-h-[240px] flex-col justify-between p-7"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="eyebrow mb-2">
                  {d.index} / {d.domain}
                </div>
                <h2 className="text-3xl transition-colors group-hover:text-accent-dark">
                  {d.engine}
                </h2>
              </div>
              <span
                aria-hidden
                className="mt-1 text-xl text-accent-dark transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              >
                &#8599;
              </span>
            </div>
            <div>
              <p className="text-sm leading-relaxed text-secondary">
                {d.cardTagline}
              </p>
              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 border-t border-[color:var(--hairline-soft)] pt-4">
                {d.cardStats.map((s) => (
                  <span key={s.label} className="text-sm text-faint">
                    <span className="figures font-mono font-medium text-ink">
                      {s.value}
                    </span>{" "}
                    {s.label}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </section>

      {/* Field-work archive */}
      <section className="border-t border-hairline pt-12">
        <div className="mb-6 flex flex-wrap items-baseline justify-between gap-2">
          <div>
            <div className="eyebrow mb-2 flex items-center gap-3">
              <span aria-hidden className="h-px w-6 bg-accent/40" />
              From the field
            </div>
            <h2 className="text-2xl">Deployed client work</h2>
          </div>
          <p className="max-w-md text-sm text-faint">
            Case-study demos from production engagements — the problem, the
            build, and the measured outcome.
          </p>
        </div>
        <ul className="divide-y divide-[color:var(--hairline-soft)] border-y border-hairline">
          {products.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/products/${p.slug}`}
                className="group flex flex-wrap items-baseline gap-x-4 gap-y-1 py-4"
              >
                <span className="eyebrow-muted w-40 shrink-0">
                  {p.industry}
                </span>
                <span className="font-medium text-ink transition-colors group-hover:text-accent-dark">
                  {p.name}
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
      </section>
    </div>
  );
}
