import { notFound } from "next/navigation";
import { demosBySlug } from "@/data/demos";
import {
  ChapterHeader,
  SectionLabel,
  NextChapter,
} from "@/components/walkthrough/sections";

export default async function AuditPage({
  params,
}: {
  params: Promise<{ demo: string }>;
}) {
  const { demo } = await params;
  const d = demosBySlug[demo];
  if (!d) notFound();
  const a = d.audit;

  return (
    <article>
      <ChapterHeader num="02" title={a.heading} intro={a.intro} />

      {/* Audit inputs: interviews / documentation / systems */}
      <section className="mb-14">
        <SectionLabel>Audit inputs</SectionLabel>
        <div className="grid gap-6 xl:grid-cols-2">
          <div className="dossier-card p-6">
            <div className="flex items-baseline justify-between gap-3">
              <h2 className="text-xl">Interviews</h2>
              <span className="eyebrow">{a.interviewsSummary}</span>
            </div>
            <p className="mt-2 text-sm text-secondary">{a.interviewsNote}</p>
            <ul className="mt-5 divide-y divide-[color:var(--hairline-soft)]">
              {a.interviews.map((iv) => (
                <li
                  key={iv.who}
                  className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5 py-2.5"
                >
                  <span className="text-sm font-medium text-ink">{iv.who}</span>
                  <span className="figures font-mono text-xs text-accent-dark">
                    {iv.sessions}
                  </span>
                  <span className="ml-auto text-sm text-faint">{iv.focus}</span>
                </li>
              ))}
            </ul>
            <p className="eyebrow-muted mt-4">
              All sessions transcribed and tagged
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="dossier-card p-6">
              <div className="flex items-baseline justify-between gap-3">
                <h2 className="text-xl">Documentation</h2>
                <span className="eyebrow">{a.docsSummary}</span>
              </div>
              <p className="mt-2 text-sm text-secondary">{a.docsNote}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {a.docs.map((doc) => (
                  <li
                    key={doc.name}
                    className="rounded-md border border-hairline bg-paper px-3 py-1.5 text-sm"
                  >
                    <span className="text-ink-soft">{doc.name}</span>
                    <span className="ml-2 font-mono text-[0.65rem] uppercase tracking-wider text-faint">
                      {doc.kind}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="eyebrow-muted mt-4">
                Indexed and queryable by agents
              </p>
            </div>

            <div className="dossier-card p-6">
              <div className="flex items-baseline justify-between gap-3">
                <h2 className="text-xl">Software</h2>
                <span className="eyebrow">{a.systemsSummary}</span>
              </div>
              <p className="mt-2 text-sm text-secondary">{a.systemsNote}</p>
              <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3">
                {a.systems.map((sys) => (
                  <li key={sys.name} className="text-sm">
                    <span className="font-medium text-ink">{sys.name}</span>
                    <span className="block text-xs text-faint">{sys.role}</span>
                  </li>
                ))}
              </ul>
              <p className="eyebrow-muted mt-4">All systems connected</p>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 divide-x divide-[color:var(--hairline)] border-y border-hairline lg:grid-cols-4">
          {a.stats.map((s) => (
            <div key={s.label} className="px-4 py-5 first:pl-0">
              <div className="figures font-display text-2xl font-semibold text-ink">
                {s.value}
              </div>
              <div className="text-sm text-secondary">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Automation map */}
      <section className="mb-14">
        <SectionLabel>Automation map</SectionLabel>
        <div className="dossier-card p-6 sm:p-8">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <p className="text-secondary">
              Of{" "}
              <span className="figures font-semibold text-ink">
                {a.automation.totalHours}
              </span>{" "}
              manual hours per year — how much we take off your plate
            </p>
            <span className="eyebrow">
              {a.automation.automatablePct}% automatable
            </span>
          </div>

          <div
            className="mt-5 flex h-3 w-full overflow-hidden rounded-full"
            role="img"
            aria-label={`${a.automation.automatablePct} percent of hours automatable`}
          >
            <div
              className="bg-accent"
              style={{ width: `${a.automation.automatablePct}%` }}
            />
            <div className="flex-1 bg-[#e1e1d8]" />
          </div>
          <div className="mt-2 flex justify-between text-sm">
            <span className="figures text-accent-dark">
              {a.automation.automatedHours} hrs automated
            </span>
            <span className="figures text-faint">
              {a.automation.humanHours} hrs stay human
            </span>
          </div>

          <div className="mt-8 border-t border-hairline pt-6">
            <p className="mb-4 text-sm text-secondary">
              What each agent contributes, built in priority order:
            </p>
            <ol className="flex flex-col gap-3">
              {a.automation.agents.map((agent, i) => (
                <li
                  key={agent.name}
                  className="grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-1 sm:grid-cols-[auto_180px_1fr_auto]"
                >
                  <span className="figures font-mono text-xs text-faint">
                    P{i + 1}
                  </span>
                  <span className="text-sm font-medium text-ink">
                    {agent.name}
                  </span>
                  <div className="col-span-2 h-2 rounded-full bg-[#efefe9] sm:col-span-1">
                    <div
                      className="h-2 rounded-full bg-accent"
                      style={{ width: `${agent.pct}%` }}
                    />
                  </div>
                  <span className="figures col-start-2 font-mono text-xs text-secondary sm:col-start-4">
                    {agent.hours} hrs · {agent.value}
                  </span>
                </li>
              ))}
            </ol>
            <p className="eyebrow-muted mt-5">
              Stays human · judgment, exceptions, relationships
            </p>
          </div>
        </div>
      </section>

      {/* Implementation timeline */}
      <section>
        <SectionLabel>
          Implementation timeline · {a.timelineWeeks} weeks, then ongoing
        </SectionLabel>
        <div className="overflow-x-auto">
          <div className="min-w-[640px]">
            <div
              className="mb-2 grid gap-px"
              style={{
                gridTemplateColumns: `200px repeat(${a.timelineWeeks}, 1fr)`,
              }}
            >
              <span />
              {Array.from({ length: a.timelineWeeks }, (_, i) => (
                <span
                  key={i}
                  className="figures text-center font-mono text-[0.6rem] text-faint"
                >
                  {i + 1}
                </span>
              ))}
            </div>
            {a.timeline.map((row) => (
              <div
                key={row.name}
                className="grid items-center gap-px border-t border-[color:var(--hairline-soft)] py-2"
                style={{
                  gridTemplateColumns: `200px repeat(${a.timelineWeeks}, 1fr)`,
                }}
              >
                <span className="pr-3 text-xs leading-tight text-ink-soft">
                  {row.name}
                </span>
                {row.span > 0 ? (
                  <span
                    className={`h-3 rounded-sm ${
                      row.kind === "audit" ? "bg-[#c7c7bb]" : "bg-accent"
                    }`}
                    style={{
                      gridColumn: `${row.start + 2} / span ${row.span}`,
                    }}
                  />
                ) : (
                  <span
                    className="figures font-mono text-xs text-accent-dark"
                    style={{ gridColumn: `${row.start + 2} / -1` }}
                  >
                    ongoing &rarr;
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <NextChapter demoSlug={d.slug} current="02" />
    </article>
  );
}
