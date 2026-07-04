import Link from 'next/link'
import ContactFormSection from '@/components/ContactFormSection'

const solutions = [
  {
    title: 'Intelligent Agents',
    description:
      'Autonomous systems that handle ticket routing, data entry, report generation—freeing teams for high-value decisions.',
    metric: '40+ hrs',
    metricLabel: 'reclaimed per team weekly',
    href: '/solutions/intelligent-agents',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: 'Customer Service Automation',
    description:
      'Resolve tickets without human intervention, while maintaining quality and customer satisfaction.',
    metric: '1,200+',
    metricLabel: 'tickets auto-resolved/mo',
    href: '/solutions/customer-service-automation',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
  },
  {
    title: 'Document Processing',
    description:
      'Extract data from invoices, contracts, and forms in seconds—not hours. Zero manual data entry required.',
    metric: '<2 min',
    metricLabel: 'per document turnaround',
    href: '/solutions/document-processing',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    title: 'Context Management',
    description:
      'Enterprise knowledge systems that understand your business and provide relevant answers instantly.',
    metric: 'Unified',
    metricLabel: 'knowledge access',
    href: '/solutions/context-management',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
  },
  {
    title: 'Agentic Evaluation',
    description:
      'Comprehensive testing and monitoring systems to ensure agentic system performance and reliability at scale.',
    metric: '<5 min',
    metricLabel: 'mean incident detection',
    href: '/solutions/agentic-evaluation',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
  {
    title: 'Agentic Governance & Security',
    description:
      'Enterprise-grade security, compliance, and governance frameworks for agentic deployments.',
    metric: 'SOC 2',
    metricLabel: 'Type II certified',
    href: '/solutions/ai-governance-security',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
]

const caseStudyMetrics = [
  { value: '6–8 wks', label: 'To Production' },
  { value: '<2 min', label: 'Doc Turnaround' },
  { value: '3 days', label: 'Faster Resolution' },
  { value: '$150K+/yr', label: 'Cost Reduction' },
]

export default function PortfolioPage() {
  return (
      <main>
        {/* Hero Section */}
        <section className="px-4 pt-28 pb-16 sm:px-6 lg:px-8 lg:pt-36 lg:pb-24">
          <div className="mx-auto max-w-6xl text-center">
            <div className="bg-brand-500/10 border-brand-400/20 mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-2">
              <span className="bg-brand-600 h-2 w-2 animate-pulse rounded-full" />
              <span className="text-brand-700 text-sm font-medium">
                Agentic Solutions for the Enterprise
              </span>
            </div>

            <h1 className="font-display mx-auto mb-6 max-w-4xl text-4xl tracking-[-0.02em] text-stone-900 sm:text-5xl lg:text-6xl">
              Our Work
            </h1>

            <p className="mx-auto max-w-2xl text-xl leading-relaxed text-stone-600">
              Production agentic solutions — shipped in 6&ndash;8 weeks, running
              on infrastructure you own, with full IP transfer.
            </p>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="bg-stone-50 px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <h2 className="font-display mb-4 text-3xl tracking-[-0.02em] text-stone-900 sm:text-4xl">
                Solutions We Build
              </h2>
              <p className="mx-auto max-w-2xl text-xl text-stone-600">
                End-to-end agentic systems that integrate with your existing infrastructure.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {solutions.map((solution, index) => (
                <Link
                  key={index}
                  href={solution.href}
                  className="group hover:border-brand-500/50 rounded-2xl border border-stone-200 bg-stone-50 p-6 transition-all duration-300 hover:shadow-[0_16px_48px_-12px_rgba(91,141,255,0.25)]"
                >
                  {/* Icon */}
                  <div className="bg-brand-500/10 text-brand-700 group-hover:bg-brand-500/20 mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-colors">
                    {solution.icon}
                  </div>

                  <h3 className="group-hover:text-brand-600 mb-2 text-lg font-semibold text-stone-900 transition-colors">
                    {solution.title}
                  </h3>

                  <p className="mb-4 text-sm leading-relaxed text-stone-600">
                    {solution.description}
                  </p>

                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-brand-600 text-2xl">{solution.metric}</span>
                    <span className="text-sm text-stone-500">{solution.metricLabel}</span>
                  </div>

                  <div className="text-brand-600 mt-4 flex items-center gap-1 text-sm font-medium transition-all group-hover:gap-2">
                    Learn more
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Metrics */}
        <section className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <h2 className="font-display mb-4 text-3xl tracking-[-0.02em] text-stone-900 sm:text-4xl">
                Proven Results
              </h2>
              <p className="mx-auto max-w-2xl text-xl text-stone-600">
                Real outcomes from real deployments &mdash; sized for SME budgets, not enterprise
                ones.
              </p>
            </div>

            <div className="mb-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
              {caseStudyMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-stone-200 bg-stone-50 p-6 text-center"
                >
                  <div className="font-display text-brand-600 mb-2 text-3xl sm:text-4xl">
                    {metric.value}
                  </div>
                  <div className="text-sm text-stone-600">{metric.label}</div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-stone-200 bg-stone-50 px-7 py-4 text-lg font-medium text-stone-600 transition-all duration-200 hover:border-stone-300 hover:bg-stone-100"
              >
                View Case Studies
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <ContactFormSection />
      </main>
  )
}
