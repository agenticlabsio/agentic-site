import Link from "next/link";
import type { Demo, StatWithSub, TraceStep } from "@/data/demos";
import { chapters } from "@/data/demos";

/* Shared presentational pieces for the walkthrough chapters.
 * Ledger rules: hairline borders, mono eyebrows, serif headings, tabular figures. */

export function ChapterHeader({
  num,
  title,
  intro,
}: {
  num: string;
  title: string;
  intro: string;
}) {
  return (
    <header className="mb-12 border-b border-hairline pb-10">
      <div className="eyebrow mb-4 flex items-center gap-3">
        <span>Chapter</span>
        <span className="figures font-mono">{num}</span>
        <span aria-hidden className="h-px w-10 bg-accent/40" />
      </div>
      <h1 className="max-w-3xl text-4xl leading-[1.1] sm:text-5xl">{title}</h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-secondary">
        {intro}
      </p>
    </header>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="eyebrow mb-6 flex items-center gap-3">
      <span aria-hidden className="h-px w-6 bg-accent/40" />
      {children}
    </div>
  );
}

export function StatBand({ stats }: { stats: StatWithSub[] }) {
  return (
    <div className="grid grid-cols-1 divide-y divide-[color:var(--hairline)] border-y border-hairline sm:grid-cols-3 sm:divide-x sm:divide-y-0">
      {stats.map((s) => (
        <div key={s.label} className="px-2 py-6 sm:px-6 first:sm:pl-0">
          <div className="figures font-display text-3xl font-semibold text-ink">
            {s.value}
          </div>
          <div className="mt-1 text-sm font-medium text-ink-soft">{s.label}</div>
          <div className="text-sm text-faint">{s.sub}</div>
        </div>
      ))}
    </div>
  );
}

export function ValueSplitPanel({ demo }: { demo: Demo }) {
  return (
    <div className="dossier-card p-6 sm:p-8">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div className="eyebrow-muted">Annual value created</div>
        <div className="figures font-display text-4xl font-semibold text-accent-dark">
          {demo.value.total}
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-4">
        {demo.value.split.map((row) => (
          <div key={row.label}>
            <div className="flex items-baseline justify-between text-sm">
              <span className="font-medium text-ink-soft">{row.label}</span>
              <span className="figures font-mono text-secondary">
                {row.amount} · {row.pct}%
              </span>
            </div>
            <div className="mt-1.5 h-1.5 w-full rounded-full bg-[#efefe9]">
              <div
                className="h-1.5 rounded-full bg-accent"
                style={{ width: `${row.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm leading-relaxed text-faint">{demo.value.note}</p>
    </div>
  );
}

export function TraceSteps({ steps }: { steps: TraceStep[] }) {
  return (
    <ol className="relative">
      {steps.map((step, i) => (
        <li key={step.text} className="relative flex gap-4 pb-8 last:pb-0">
          {i < steps.length - 1 && (
            <span
              aria-hidden
              className="absolute left-[11px] top-7 h-full w-px bg-[color:var(--hairline)]"
            />
          )}
          <span
            className={`figures z-10 mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full font-mono text-[0.65rem] ${
              step.kind === "human"
                ? "border border-accent bg-accent-wash text-accent-dark"
                : "bg-ink text-white"
            }`}
          >
            {i + 1}
          </span>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-medium text-ink">{step.text}</span>
              <span
                className={`rounded-full px-2 py-0.5 font-mono text-[0.6rem] uppercase tracking-wider ${
                  step.kind === "human"
                    ? "bg-accent-wash text-accent-dark"
                    : "bg-[#efefe9] text-secondary"
                }`}
              >
                {step.kind === "human" ? "Reviewer gate" : "Automated"}
              </span>
            </div>
            <p className="mt-1 text-sm text-faint">{step.detail}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function NextChapter({
  demoSlug,
  current,
}: {
  demoSlug: string;
  current: string; // chapter num, e.g. "01"
}) {
  const idx = chapters.findIndex((c) => c.num === current);
  const next = chapters[idx + 1];
  return (
    <footer className="mt-16 border-t border-hairline pt-8">
      {next ? (
        <Link
          href={`/${demoSlug}${next.path}`}
          className="group inline-flex items-baseline gap-3"
        >
          <span className="eyebrow-muted">Next</span>
          <span className="font-display text-2xl font-semibold text-ink transition-colors group-hover:text-accent-dark">
            {next.name}
          </span>
          <span
            aria-hidden
            className="text-accent-dark transition-transform group-hover:translate-x-1"
          >
            &rarr;
          </span>
        </Link>
      ) : (
        <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl">Ready to scope your engagement</h2>
            <p className="mt-1 max-w-xl text-secondary">
              Start with an operating audit: process owners, source systems,
              exceptions, and baselines mapped before build begins.
            </p>
          </div>
          <a
            href="https://agenticlabs.io/#contact"
            className="inline-flex items-center gap-2 rounded-md bg-ink px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
          >
            Schedule a conversation
            <span aria-hidden>&rarr;</span>
          </a>
        </div>
      )}
    </footer>
  );
}
