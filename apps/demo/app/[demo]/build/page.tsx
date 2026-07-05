import { notFound } from "next/navigation";
import { demosBySlug } from "@/data/demos";
import {
  ChapterHeader,
  SectionLabel,
  StatBand,
  TraceSteps,
  NextChapter,
} from "@/components/walkthrough/sections";

export default async function BuildPage({
  params,
}: {
  params: Promise<{ demo: string }>;
}) {
  const { demo } = await params;
  const d = demosBySlug[demo];
  if (!d) notFound();
  const b = d.build;

  return (
    <article>
      <ChapterHeader num="03" title={b.heading} intro={b.intro} />

      {/* Agent roster */}
      <section className="mb-14">
        <SectionLabel>Agents in production</SectionLabel>
        <ol className="grid gap-px overflow-hidden rounded-lg border border-hairline bg-[color:var(--hairline)] sm:grid-cols-2 xl:grid-cols-3">
          {b.agents.map((agent, i) => (
            <li key={agent.name} className="bg-elevated p-5">
              <div className="flex items-baseline justify-between">
                <span className="figures font-mono text-xs text-muted-fg">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="figures font-mono text-xs text-accent-dark">
                  {agent.value}
                </span>
              </div>
              <h2 className="mt-2 text-lg leading-snug">{agent.name}</h2>
              <div className="figures mt-3 flex gap-4 border-t border-[color:var(--hairline-soft)] pt-3 font-mono text-xs text-secondary">
                <span>{agent.hours}</span>
                <span>{agent.auto} auto</span>
                <span>
                  {agent.human} human{agent.human === 1 ? " gate" : " gates"}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Production trace */}
      <section className="mb-14">
        <SectionLabel>Full production trace</SectionLabel>
        <div className="dossier-card p-6 sm:p-8">
          <h2 className="text-2xl">{b.trace.title}</h2>
          <p className="mt-2 max-w-2xl text-secondary">{b.trace.sub}</p>
          <div className="mt-5 flex flex-wrap gap-x-8 gap-y-2 border-y border-hairline py-4">
            {b.trace.meta.map((m) => (
              <div key={m.label}>
                <span className="eyebrow-muted mr-2">{m.label}</span>
                <span className="figures font-mono text-sm text-ink">
                  {m.value}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <TraceSteps steps={b.trace.steps} />
          </div>
          <p className="eyebrow-muted mt-8 border-t border-hairline pt-5">
            Connected to source systems · human gates only on judgment · final
            write-back logged
          </p>
        </div>
      </section>

      {/* Aggregate outcomes */}
      <section>
        <SectionLabel>Aggregate outcomes</SectionLabel>
        <StatBand stats={b.outcomes} />
      </section>

      <NextChapter demoSlug={d.slug} current="03" />
    </article>
  );
}
