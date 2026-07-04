import { notFound } from "next/navigation";
import { demosBySlug } from "@/data/demos";
import {
  ChapterHeader,
  NextChapter,
} from "@/components/walkthrough/sections";
import RoleTabs from "@/components/walkthrough/RoleTabs";

export default async function TeamPage({
  params,
}: {
  params: Promise<{ demo: string }>;
}) {
  const { demo } = await params;
  const d = demosBySlug[demo];
  if (!d) notFound();

  return (
    <article>
      <ChapterHeader num="04" title={d.team.heading} intro={d.team.intro} />
      <RoleTabs roles={d.team.roles} />
      <NextChapter demoSlug={d.slug} current="04" />
    </article>
  );
}
