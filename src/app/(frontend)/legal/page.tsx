import type { Metadata } from 'next'
import Link from 'next/link'
import { legalDocuments } from '@/content/legal'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata(
  '/legal',
  'Legal & Policies',
  'Agentic Labs legal policies — Privacy Policy, Terms of Service, Cookie Policy, Acceptable Use Policy, Data Processing Addendum, and Sub-processors.',
)

const arrowIcon = (
  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
)

export default function LegalIndexPage() {
  return (
    <main className="pt-16">
      <section className="px-4 pt-20 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="text-brand-600 mb-4 text-sm font-semibold tracking-wide uppercase">Legal</p>
          <h1 className="font-display mb-4 text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
            Policies &amp; agreements
          </h1>
          <p className="font-body max-w-2xl text-xl text-stone-600">
            The policies that govern our website and engagements. Built for enterprises in regulated
            industries — with data governance and AI safety at the core. For security controls and
            certifications, see our{' '}
            <Link href="/trust" className="text-brand-600 hover:text-brand-700 underline">
              Trust &amp; Security
            </Link>{' '}
            page.
          </p>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {legalDocuments.map((doc) => (
              <Link
                key={doc.slug}
                href={`/legal/${doc.slug}`}
                className="hover:border-brand-500/50 group block rounded-2xl border border-stone-200 bg-stone-50 p-6 transition-all duration-300 hover:shadow-[0_16px_48px_-12px_rgba(30,95,69,0.18)]"
              >
                <h2 className="font-display group-hover:text-brand-600 mb-2 text-lg font-bold text-stone-900 transition-colors">
                  {doc.title}
                </h2>
                <p className="font-body mb-4 text-sm text-stone-600">{doc.summary}</p>
                <div className="text-brand-600 font-display flex items-center text-sm font-semibold">
                  Read
                  {arrowIcon}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
