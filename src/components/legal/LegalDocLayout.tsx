import Link from 'next/link'
import type { LegalBlock, LegalDocument, LegalSection } from '@/content/legal'
import { legalDocuments } from '@/content/legal'

// Renders inline **bold** segments; everything else is plain text.
function Inline({ text }: { text: string }) {
  const parts = text.split('**')
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? <strong key={i}>{part}</strong> : <span key={i}>{part}</span>
      )}
    </>
  )
}

function slugifyHeading(heading: string): string {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

function Block({ block }: { block: LegalBlock }) {
  if (block.type === 'text') {
    return (
      <p className="font-body mt-4 leading-relaxed text-stone-600">
        <Inline text={block.text ?? ''} />
      </p>
    )
  }

  if (block.type === 'list') {
    return (
      <ul className="mt-4 space-y-2">
        {(block.items ?? []).map((item, i) => (
          <li key={i} className="font-body flex gap-3 leading-relaxed text-stone-600">
            <span
              aria-hidden
              className="bg-brand-500 mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full"
            />
            <span>
              <Inline text={item} />
            </span>
          </li>
        ))}
      </ul>
    )
  }

  // table
  return (
    <div className="mt-6 overflow-x-auto">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="border-b border-stone-300">
            {(block.columns ?? []).map((col, i) => (
              <th key={i} className="font-display px-4 py-3 text-sm font-semibold text-stone-900">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {(block.rows ?? []).map((row, ri) => (
            <tr key={ri} className="border-b border-stone-200 align-top">
              {row.map((cell, ci) => (
                <td key={ci} className="font-body px-4 py-3 text-sm leading-relaxed text-stone-600">
                  <Inline text={cell} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function Section({ section, index }: { section: LegalSection; index: number }) {
  const id = slugifyHeading(section.heading)
  return (
    <section id={id} className="scroll-mt-24 border-t border-stone-200 pt-10">
      <h2 className="font-display text-2xl font-bold tracking-tight text-stone-900">
        <span className="text-brand-600">{index + 1}.</span> {section.heading}
      </h2>
      {section.blocks.map((block, i) => (
        <Block key={i} block={block} />
      ))}
    </section>
  )
}

export function LegalDocLayout({ doc }: { doc: LegalDocument }) {
  const others = legalDocuments.filter((d) => d.slug !== doc.slug)

  return (
    <main className="pt-16">
      <section className="px-4 pt-20 pb-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/legal"
            className="font-display text-brand-600 hover:text-brand-700 text-sm font-semibold"
          >
            ← Legal
          </Link>
          <h1 className="font-display mt-4 text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl">
            {doc.title}
          </h1>
          <p className="mt-3 font-mono text-sm text-stone-500">Last updated: {doc.updated}</p>
          <p className="font-body mt-6 text-lg leading-relaxed text-stone-600">{doc.intro}</p>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {/* Table of contents */}
          <nav
            aria-label="On this page"
            className="rounded-2xl border border-stone-200 bg-stone-50 p-6"
          >
            <p className="font-display mb-4 text-sm font-semibold tracking-wide text-stone-500 uppercase">
              On this page
            </p>
            <ol className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
              {doc.sections.map((section, i) => (
                <li key={section.heading}>
                  <a
                    href={`#${slugifyHeading(section.heading)}`}
                    className="font-body text-brand-700 hover:text-brand-800 text-sm hover:underline"
                  >
                    {i + 1}. {section.heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Body */}
          <div className="mt-12 space-y-10">
            {doc.sections.map((section, i) => (
              <Section key={section.heading} section={section} index={i} />
            ))}
          </div>

          {/* Cross-links to other policies */}
          <div className="mt-16 border-t border-stone-200 pt-8">
            <p className="font-display mb-4 text-sm font-semibold tracking-wide text-stone-500 uppercase">
              Related policies
            </p>
            <div className="flex flex-wrap gap-3">
              {others.map((d) => (
                <Link
                  key={d.slug}
                  href={`/legal/${d.slug}`}
                  className="font-display hover:border-brand-500/60 hover:text-brand-700 rounded-full border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 transition-colors"
                >
                  {d.title}
                </Link>
              ))}
              <Link
                href="/trust"
                className="font-display hover:border-brand-500/60 hover:text-brand-700 rounded-full border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 transition-colors"
              >
                Trust &amp; Security
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
