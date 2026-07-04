import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { demosBySlug, demoSlugs } from "@/data/demos";
import ChapterNav from "@/components/walkthrough/ChapterNav";

export function generateStaticParams() {
  return demoSlugs.map((demo) => ({ demo }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ demo: string }>;
}): Promise<Metadata> {
  const { demo } = await params;
  const d = demosBySlug[demo];
  if (!d) return {};
  return {
    title: `Agentic Labs · ${d.engine}`,
    description: d.heroSub,
  };
}

export default async function DemoLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ demo: string }>;
}) {
  const { demo } = await params;
  const d = demosBySlug[demo];
  if (!d) notFound();

  return (
    <div className="mx-auto max-w-6xl px-6 py-10 lg:py-14">
      <div className="mb-8 flex items-baseline gap-3 border-b border-hairline pb-6">
        <span className="eyebrow">{d.index}</span>
        <span className="font-display text-xl font-semibold text-ink">
          {d.engine}
        </span>
        <span className="eyebrow-muted hidden sm:inline">· {d.domain}</span>
      </div>
      <div className="grid gap-10 lg:grid-cols-[200px_1fr] lg:gap-16">
        <ChapterNav demoSlug={demo} />
        <div className="min-w-0">{children}</div>
      </div>
    </div>
  );
}
