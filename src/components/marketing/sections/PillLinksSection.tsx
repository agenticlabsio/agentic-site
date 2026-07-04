import Link from 'next/link'

function titleCase(slug: string): string {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

// Industries "Related Solutions" — pill links to /solutions/[slug]. Labels are
// derived from the slug (matching the original page's behavior) rather than
// looking up the solution's real name, to avoid an extra cross-collection fetch.
export function PillLinksSection({ heading, slugs }: { heading: string; slugs: string[] }) {
  return (
    <section className="bg-stone-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display mb-8 text-3xl font-bold text-stone-900">{heading}</h2>
        <div className="flex flex-wrap gap-4">
          {slugs.map((slug) => (
            <Link
              key={slug}
              href={`/solutions/${slug}`}
              className="hover:border-brand-500/50 hover:text-brand-600 font-display rounded-xl border border-stone-200 bg-stone-50 px-6 py-3 font-medium text-stone-600 transition-colors"
            >
              {titleCase(slug)}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
