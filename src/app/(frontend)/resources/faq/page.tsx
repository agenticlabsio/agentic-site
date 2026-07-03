import Link from 'next/link'
import { FAQSchema, BreadcrumbSchema } from '@/components/SEO'
import { CtaSection } from '@/components/marketing/sections/CtaSection'
import { getFAQ } from '@/lib/payload'
import { SITE_URL } from '@/lib/seo'
import { FaqAccordion, type FaqCategoryGroup } from './FaqAccordion'

// Metadata for /resources/faq is provided by ./layout.tsx.
export const revalidate = 3600

const CATEGORY_ORDER: { slug: string; name: string }[] = [
  { slug: 'agentic-ai', name: 'Agentic AI' },
  { slug: 'saas-replacement', name: 'SaaS Replacement' },
  { slug: 'service-process', name: 'Service & Process' },
  { slug: 'security-governance', name: 'Security & Governance' },
]

export default async function FAQHubPage() {
  const faqs = await getFAQ()

  const categories: FaqCategoryGroup[] = CATEGORY_ORDER.map(({ slug, name }) => ({
    slug,
    name,
    faqs: faqs
      .filter((f) => f.category === slug)
      .map((f) => ({ question: f.question, answer: f.answer })),
  })).filter((category) => category.faqs.length > 0)

  const allFaqs = categories.flatMap((c) => c.faqs)

  return (
    <main className="pt-16">
      <FAQSchema faqs={allFaqs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_URL },
          { name: 'Resources', url: `${SITE_URL}/resources` },
          { name: 'FAQ', url: `${SITE_URL}/resources/faq` },
        ]}
      />
        <section className="px-4 pt-20 pb-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <nav className="mb-6">
              <ol className="flex items-center gap-2 text-sm">
                <li>
                  <Link href="/" className="text-stone-400 hover:text-stone-300">
                    Home
                  </Link>
                </li>
                <li className="text-stone-400">/</li>
                <li>
                  <Link href="/resources" className="text-stone-400 hover:text-stone-300">
                    Resources
                  </Link>
                </li>
                <li className="text-stone-400">/</li>
                <li className="font-medium text-stone-50">FAQ</li>
              </ol>
            </nav>

            <p className="text-brand-400 mb-4 text-sm font-semibold tracking-wide uppercase">
              Frequently Asked Questions
            </p>
            <h1 className="font-display mb-4 text-4xl font-bold tracking-tight text-stone-50 sm:text-5xl">
              Straight answers.
            </h1>
            <p className="font-body max-w-2xl text-xl text-stone-300">
              Common questions about agentic AI, SaaS replacement, deployment, and governance &mdash;
              answered for small and mid-market teams, without the sales pitch.
            </p>
          </div>
        </section>

        <section className="px-4 pb-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <a
                  key={category.slug}
                  href={`#${category.slug}`}
                  className="font-display rounded-lg bg-white/5 px-4 py-2 text-sm font-medium text-stone-300 transition-colors hover:bg-white/10 hover:text-stone-50"
                >
                  {category.name}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <FaqAccordion categories={categories} />
          </div>
        </section>

        <CtaSection
          bg="brand"
          headline="Still have questions?"
          description="30 minutes. We'll map your workflows and tell you what to build first."
          buttonLabel="Book a Strategy Call"
          href="/#contact"
        />
    </main>
  )
}
