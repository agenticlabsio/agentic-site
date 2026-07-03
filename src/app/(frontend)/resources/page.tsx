import Link from 'next/link'
import { CtaSection } from '@/components/marketing/sections/CtaSection'

// Metadata for /resources is provided by ./layout.tsx.
const featuredResources = [
  {
    type: 'Blog',
    title: 'Agentic AI in 2026: From Hype to "Is It Working?"',
    description:
      '2026 is the year businesses finally ask "Is it working?" Learn how to measure AI agent performance and prove ROI.',
    href: '/resources/blog/agentic-ai-2026',
    category: 'Thought Leadership',
  },
  {
    type: 'Blog',
    title: 'The Model Context Protocol (MCP): Why Your AI Agents Need It',
    description:
      'MCP is the USB-C of AI connectivity. Learn how this standardization breakthrough transforms enterprise AI.',
    href: '/resources/blog/model-context-protocol-mcp',
    category: 'Technical Deep-Dive',
  },
  {
    type: 'Blog',
    title: 'Replace 10 SaaS Tools with One AI Agent',
    description:
      'A growing business pays for dozens of overlapping SaaS seats. See how one custom agent can replace 5–10 of them.',
    href: '/resources/blog/replace-saas-with-ai',
    category: 'Cost Reduction',
  },
]

const categories = [
  { name: 'All', count: 10 },
  { name: 'Thought Leadership', count: 3 },
  { name: 'Technical', count: 4 },
  { name: 'Industry', count: 3 },
]

const arrowIcon = (
  <svg
    className="ml-1 h-4 w-4 transition-transform group-hover:transtone-x-1"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
)

export default function ResourcesPage() {
  return (
    <main className="pt-16">
        <section className="px-4 pt-20 pb-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <p className="text-brand-400 mb-4 text-sm font-semibold tracking-wide uppercase">Resources</p>
            <h1 className="font-display mb-4 text-4xl font-bold tracking-tight text-stone-50 sm:text-5xl lg:text-6xl">
              Straight talk on <span className="text-brand-400">agentic AI.</span>
            </h1>
            <p className="font-body max-w-2xl text-xl text-stone-300">
              Deep dives on building agents that ship, cutting SaaS sprawl, and proving ROI &mdash;
              written for small and mid-market operators, not analysts.
            </p>
          </div>
        </section>

        <section className="px-4 pb-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-wrap gap-4 border-b border-white/10 pb-4">
              <Link
                href="/resources"
                className="text-brand-400 border-brand-400 font-display border-b-2 pb-2 text-sm font-semibold"
              >
                All Resources
              </Link>
              <Link
                href="/resources/blog"
                className="font-display pb-2 text-sm font-medium text-stone-300 hover:text-stone-50"
              >
                Blog
              </Link>
              <Link
                href="/resources/faq"
                className="font-display pb-2 text-sm font-medium text-stone-300 hover:text-stone-50"
              >
                FAQ
              </Link>
            </div>
          </div>
        </section>

        <section className="px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-display mb-8 text-2xl font-bold text-stone-50">Featured Resources</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredResources.map((resource, index) => (
                <Link
                  key={index}
                  href={resource.href}
                  className="hover:border-brand-400/50 group block rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:shadow-[0_16px_48px_-12px_rgba(91,141,255,0.25)]"
                >
                  <div className="mb-4 flex items-center gap-2">
                    <span className="bg-brand-500/10 text-brand-300 font-display rounded px-2 py-1 text-xs font-medium">
                      {resource.type}
                    </span>
                    <span className="font-display rounded bg-white/5 px-2 py-1 text-xs font-medium text-stone-300">
                      {resource.category}
                    </span>
                  </div>
                  <h3 className="font-display group-hover:text-brand-300 mb-2 text-lg font-bold text-stone-50 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="font-body mb-4 text-sm text-stone-300">{resource.description}</p>
                  <div className="text-brand-400 font-display flex items-center text-sm font-semibold">
                    Read more
                    {arrowIcon}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white/[0.02] px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-display mb-8 text-2xl font-bold text-stone-50">Browse by Category</h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {categories.map((category, index) => (
                <Link
                  key={index}
                  href={`/resources/blog?category=${category.name.toLowerCase().replace(' ', '-')}`}
                  className="hover:border-brand-400/50 rounded-xl border border-white/10 bg-white/[0.03] p-6 text-center transition-all hover:shadow-[0_16px_48px_-12px_rgba(91,141,255,0.25)]"
                >
                  <div className="text-brand-400 font-display mb-1 text-2xl font-bold">{category.count}</div>
                  <div className="font-display font-medium text-stone-300">{category.name}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CtaSection
          bg="brand"
          headline="AI insights for operators."
          description="Monthly insights on agentic AI, automation strategies, and real implementation lessons."
          buttonLabel="Subscribe to Updates"
          href="/#contact"
        />
    </main>
  )
}
