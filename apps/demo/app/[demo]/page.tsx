import { notFound } from "next/navigation";
import { demosBySlug } from "@/data/demos";
import {
  ChapterHeader,
  SectionLabel,
  StatBand,
  ValueSplitPanel,
  NextChapter,
} from "@/components/walkthrough/sections";

export default async function OverviewPage({
  params,
}: {
  params: Promise<{ demo: string }>;
}) {
  const { demo } = await params;
  const d = demosBySlug[demo];
  if (!d) notFound();

  return (
    <article>
      <ChapterHeader num="01" title={d.title} intro={d.heroSub} />

      <section className="mb-14">
        <SectionLabel>How an engagement runs</SectionLabel>
        <ol className="grid gap-px overflow-hidden rounded-lg border border-hairline bg-[color:var(--hairline)] sm:grid-cols-3">
          {d.phases.map((p) => (
            <li key={p.num} className="bg-elevated p-6">
              <div className="flex items-baseline justify-between">
                <span className="figures font-mono text-xs text-muted-fg">
                  {p.num}
                </span>
                <span className="eyebrow">{p.duration}</span>
              </div>
              <h2 className="mt-3 text-xl">{p.name}</h2>
              <p className="mt-1.5 text-sm leading-relaxed text-secondary">
                {p.description}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mb-14">
        <SectionLabel>Anonymized operating benchmark</SectionLabel>
        <StatBand stats={d.benchmark} />
      </section>

      <section>
        <ValueSplitPanel demo={d} />
      </section>

      <NextChapter demoSlug={d.slug} current="01" />
    </article>
  );
}
