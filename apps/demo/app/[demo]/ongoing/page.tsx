import { notFound } from "next/navigation";
import { demosBySlug } from "@/data/demos";
import {
  ChapterHeader,
  SectionLabel,
  NextChapter,
} from "@/components/walkthrough/sections";

function AccuracyCurve({
  points,
  final,
  note,
  title,
}: {
  points: number[];
  final: string;
  note: string;
  title: string;
}) {
  const w = 560;
  const h = 180;
  const pad = 12;
  const min = Math.min(...points);
  const max = Math.max(...points);
  const range = max - min || 1;
  const coords = points.map((p, i) => {
    const x = pad + (i / (points.length - 1)) * (w - pad * 2);
    const y = h - pad - ((p - min) / range) * (h - pad * 2);
    return [x, y] as const;
  });
  const polyline = coords.map(([x, y]) => `${x},${y}`).join(" ");
  const [endX, endY] = coords[coords.length - 1];

  return (
    <div className="dossier-card p-6 sm:p-8">
      <h2 className="text-2xl">{title}</h2>
      <p className="mt-2 max-w-2xl text-secondary">{note}</p>
      <div className="mt-6 overflow-x-auto">
        <svg
          viewBox={`0 0 ${w} ${h}`}
          className="h-auto w-full min-w-[420px]"
          role="img"
          aria-label={`${title}: rising from ${points[0]} to ${final} over twelve weeks`}
        >
          {[0.25, 0.5, 0.75].map((f) => (
            <line
              key={f}
              x1={pad}
              x2={w - pad}
              y1={pad + f * (h - pad * 2)}
              y2={pad + f * (h - pad * 2)}
              stroke="var(--hairline-soft)"
            />
          ))}
          <polyline
            points={polyline}
            fill="none"
            stroke="var(--accent)"
            strokeWidth="2.5"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          {coords.map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="3" fill="var(--accent)" />
          ))}
          <circle cx={endX} cy={endY} r="6" fill="var(--accent-wash)" stroke="var(--accent)" strokeWidth="2" />
        </svg>
      </div>
      <div className="mt-3 flex items-baseline justify-between">
        <span className="figures font-mono text-xs text-muted-fg">
          W0 &rarr; W12
        </span>
        <span className="figures font-display text-2xl font-semibold text-accent-dark">
          {final}
        </span>
      </div>
    </div>
  );
}

export default async function OngoingPage({
  params,
}: {
  params: Promise<{ demo: string }>;
}) {
  const { demo } = await params;
  const d = demosBySlug[demo];
  if (!d) notFound();
  const o = d.ongoing;

  return (
    <article>
      <ChapterHeader num="05" title={o.heading} intro={o.intro} />

      {/* Before & after */}
      <section className="mb-14">
        <SectionLabel>Before &amp; after</SectionLabel>
        <div className="overflow-x-auto">
          <table className="figures w-full min-w-[520px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-hairline text-left">
                <th className="eyebrow-muted py-3 pr-4 font-medium">Metric</th>
                <th className="eyebrow-muted py-3 pr-4 font-medium">Before</th>
                <th className="eyebrow-muted py-3 pr-4 font-medium">After</th>
                <th className="eyebrow-muted py-3 text-right font-medium">
                  Change
                </th>
              </tr>
            </thead>
            <tbody>
              {o.beforeAfter.map((row) => (
                <tr
                  key={row.metric}
                  className="border-b border-[color:var(--hairline-soft)]"
                >
                  <td className="py-3.5 pr-4 font-medium text-ink">
                    {row.metric}
                  </td>
                  <td className="py-3.5 pr-4 text-secondary">{row.before}</td>
                  <td className="py-3.5 pr-4 font-semibold text-accent-dark">
                    {row.after}
                  </td>
                  <td className="py-3.5 text-right font-mono text-xs text-secondary">
                    {row.delta}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Curve */}
      <section className="mb-14">
        <AccuracyCurve
          title={o.curve.title}
          note={o.curve.note}
          points={o.curve.points}
          final={o.curve.final}
        />
        <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-1">
          {o.curve.annotations.map((a, i) => (
            <li key={a} className="flex items-baseline gap-2 text-sm text-secondary">
              <span className="figures font-mono text-xs text-accent-dark">
                {String(i + 1).padStart(2, "0")}
              </span>
              {a}
            </li>
          ))}
        </ul>
      </section>

      {/* What we maintain */}
      <section className="mb-14">
        <SectionLabel>What we maintain</SectionLabel>
        <div className="grid gap-px overflow-hidden rounded-lg border border-hairline bg-[color:var(--hairline)] sm:grid-cols-3">
          {o.maintain.map((m) => (
            <div key={m.title} className="bg-elevated p-6">
              <h2 className="text-lg">{m.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-secondary">
                {m.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Cadence */}
      <section>
        <SectionLabel>Operating cadence</SectionLabel>
        <dl className="divide-y divide-[color:var(--hairline)] border-y border-hairline">
          {o.cadence.map((c) => (
            <div key={c.name} className="grid gap-1 py-5 sm:grid-cols-[160px_1fr]">
              <dt className="font-display text-lg font-semibold text-ink">
                {c.name}
              </dt>
              <dd className="text-secondary">{c.description}</dd>
            </div>
          ))}
        </dl>
      </section>

      <NextChapter demoSlug={d.slug} current="05" />
    </article>
  );
}
