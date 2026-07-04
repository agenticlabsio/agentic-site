import type { Metadata } from 'next'
import Link from 'next/link'
import { CtaSection } from '@/components/marketing/sections/CtaSection'
import { BreadcrumbSchema } from '@/components/SEO'
import { LEGAL_ENTITY } from '@/content/legal'
import { pageMetadata, SITE_URL } from '@/lib/seo'

export const metadata: Metadata = pageMetadata(
  '/trust',
  'Trust & Security',
  'How Agentic Labs secures enterprise agentic systems: SOC 2 Type II controls, HIPAA support, GDPR/CCPA compliance, encryption, audit trails, and a delivery model where your data never leaves your environment.'
)

const certifications = [
  { name: 'SOC 2 Type II', detail: 'Independently audited security controls' },
  { name: 'HIPAA', detail: 'BAA available for regulated healthcare workloads' },
  { name: 'GDPR', detail: 'EU/UK data protection, SCCs for transfers' },
  { name: 'CCPA / CPRA', detail: 'California consumer privacy, service-provider terms' },
]

const controls = [
  {
    title: 'Encryption everywhere',
    body: 'Data encrypted in transit with TLS 1.2+ and at rest with AES-256 across our systems and the pipelines we build.',
  },
  {
    title: 'Least-privilege access',
    body: 'Role-based access controls, scoped credentials, and the minimum access required to deliver — nothing more.',
  },
  {
    title: 'Full audit trails',
    body: 'Every agent action can be logged — what was done, when, why, and by which agent — to support your governance and compliance.',
  },
  {
    title: 'Bounded autonomy',
    body: 'Operational limits and human-in-the-loop escalation for high-stakes decisions, so agents act within guardrails you define.',
  },
  {
    title: 'Vulnerability management',
    body: 'Ongoing monitoring, patching, and dependency review across the systems we operate and hand over.',
  },
  {
    title: 'Incident response',
    body: 'A documented response process with prompt breach notification consistent with your agreement and applicable law.',
  },
]

const documents = [
  { title: 'Privacy Policy', href: '/legal/privacy', detail: 'How we handle personal information' },
  {
    title: 'Data Processing Addendum',
    href: '/legal/dpa',
    detail: 'Processor terms, SCCs, and BAAs',
  },
  {
    title: 'Sub-processors',
    href: '/legal/subprocessors',
    detail: 'Third parties and change notifications',
  },
  {
    title: 'Acceptable Use Policy',
    href: '/legal/acceptable-use',
    detail: 'Safe, lawful use of AI systems',
  },
]

export default function TrustPage() {
  return (
    <main className="pt-16">
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_URL },
          { name: 'Trust & Security', url: `${SITE_URL}/trust` },
        ]}
      />

      {/* Hero */}
      <section className="px-4 pt-20 pb-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="text-brand-600 mb-4 text-sm font-semibold tracking-wide uppercase">Trust</p>
          <h1 className="font-display mb-4 text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
            Security &amp; trust, built in.
          </h1>
          <p className="font-body max-w-2xl text-xl text-stone-600">
            We build agentic systems for enterprises in regulated industries. Security, governance,
            and compliance aren&rsquo;t bolted on afterward — they shape how we design, deploy, and
            operate every system.
          </p>
        </div>
      </section>

      {/* Data residency highlight */}
      <section className="px-4 pb-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="border-brand-200 bg-brand-50 rounded-3xl border p-8 sm:p-10">
            <h2 className="font-display mb-3 text-2xl font-bold text-stone-900">
              Your data never leaves your environment
            </h2>
            <p className="font-body max-w-3xl text-lg leading-relaxed text-stone-700">
              We orchestrate agents on top of your existing infrastructure and systems of record.
              Because your production data stays where it already lives, we don&rsquo;t copy it into
              our systems — and it is never used to train foundation models. You keep control, and
              your compliance boundary stays intact.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display mb-8 text-2xl font-bold text-stone-900">
            Compliance &amp; certifications
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((c) => (
              <div key={c.name} className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
                <div className="font-display text-brand-700 mb-2 text-lg font-bold">{c.name}</div>
                <p className="font-body text-sm text-stone-600">{c.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Controls grid */}
      <section className="bg-stone-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display mb-8 text-2xl font-bold text-stone-900">
            How we protect data
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {controls.map((control) => (
              <div key={control.title} className="rounded-2xl border border-stone-200 bg-white p-6">
                <h3 className="font-display mb-2 text-lg font-bold text-stone-900">
                  {control.title}
                </h3>
                <p className="font-body text-sm leading-relaxed text-stone-600">{control.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display mb-3 text-2xl font-bold text-stone-900">
            Documentation for your security team
          </h2>
          <p className="font-body mb-8 max-w-2xl text-stone-600">
            We&rsquo;re glad to complete security questionnaires and provide our SOC 2 report under
            NDA. Email{' '}
            <a
              href={`mailto:${LEGAL_ENTITY.contactEmail}`}
              className="text-brand-600 hover:text-brand-700 underline"
            >
              {LEGAL_ENTITY.contactEmail}
            </a>{' '}
            (Attn: Security).
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {documents.map((doc) => (
              <Link
                key={doc.href}
                href={doc.href}
                className="hover:border-brand-500/50 group flex items-center justify-between rounded-2xl border border-stone-200 bg-stone-50 p-5 transition-all hover:shadow-[0_16px_48px_-12px_rgba(30,95,69,0.18)]"
              >
                <div>
                  <div className="font-display group-hover:text-brand-600 font-bold text-stone-900 transition-colors">
                    {doc.title}
                  </div>
                  <p className="font-body text-sm text-stone-500">{doc.detail}</p>
                </div>
                <svg
                  className="text-brand-600 h-5 w-5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        bg="brand"
        headline="Bring your security team to the first call."
        description="We'll walk through our controls, data model, and governance framework — and how they map to your requirements."
        buttonLabel="Book a Discovery Call"
        href="/#contact"
      />
    </main>
  )
}
