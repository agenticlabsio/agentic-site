import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { RichText } from '@payloadcms/richtext-lexical/react'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import Footer from '@/components/newsite/Footer'
import { MarketingHeader, type MarketingNavItem } from '@/components/marketing/MarketingHeader'
import { ArticleSchema, BreadcrumbSchema, FAQSchema } from '@/components/SEO'
import { getBlogPostBySlug, getAllBlogPostSlugs } from '@/lib/payload'
import { BLOG_CATEGORY_LABELS, type BlogCategory } from '@/content/blog'

export const revalidate = 3600

const navItems: MarketingNavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Industries', href: '/industries' },
  { label: 'Case Studies', href: '/case-studies' },
]

export async function generateStaticParams() {
  const slugs = await getAllBlogPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const path = `/resources/blog/${slug}`
  const post = await getBlogPostBySlug(slug)

  if (!post) {
    return { alternates: { canonical: path } }
  }

  const title = post.seo?.metaTitle || `${post.title} | Agentic Labs`
  const description = post.seo?.metaDescription || post.excerpt

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type: 'article', url: path, title: post.title, description },
    twitter: { card: 'summary_large_image', title: post.title, description },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const url = `https://agenticlabs.io/resources/blog/${slug}`
  const categoryLabel =
    BLOG_CATEGORY_LABELS[post.category as BlogCategory] ?? String(post.category)
  const date = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : ''
  const takeaways = (post.keyTakeaways ?? []).map((t) => t.takeaway).filter(Boolean)
  const faqs = (post.faqs ?? []).map((f) => ({ question: f.question, answer: f.answer }))

  return (
    <div className="newsite relative min-h-screen">
      <ArticleSchema
        headline={post.title}
        description={post.excerpt}
        url={url}
        datePublished={post.publishedAt || '2026-01-01'}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://agenticlabs.io' },
          { name: 'Blog', url: 'https://agenticlabs.io/resources/blog' },
          { name: post.title, url },
        ]}
      />
      {faqs.length > 0 && <FAQSchema faqs={faqs} />}

      <MarketingHeader items={navItems} activeHref="" ctaHref="/#contact" />

      <main className="pt-16">
        {/* Back link */}
        <div className="px-4 pt-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/resources/blog"
              className="font-display inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-slate-50"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Blog
            </Link>
          </div>
        </div>

        {/* Header */}
        <article className="px-4 pt-8 pb-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-4 flex items-center gap-2">
              <span className="bg-brand-500/10 text-brand-300 font-display rounded-full px-3 py-1 text-xs font-medium">
                {categoryLabel}
              </span>
              {date && <span className="font-body text-sm text-slate-400">{date}</span>}
            </div>
            <h1 className="font-display mb-4 text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <p className="font-body mb-8 text-xl text-slate-300">{post.excerpt}</p>

            {takeaways.length > 0 && (
              <div className="mb-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <h2 className="font-display mb-4 text-sm font-semibold tracking-wider text-slate-400 uppercase">
                  Key Takeaways
                </h2>
                <ul className="space-y-3">
                  {takeaways.map((t, i) => (
                    <li key={i} className="font-body flex items-start gap-3 text-slate-300">
                      <svg
                        className="text-brand-500 mt-0.5 h-5 w-5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Body */}
            <div className="blog-content font-body space-y-5 text-lg leading-relaxed text-slate-300">
              <RichText data={post.content as SerializedEditorState} />
            </div>

            {/* FAQs */}
            {faqs.length > 0 && (
              <section className="mt-12">
                <h2 className="font-display mb-6 text-2xl font-bold text-slate-50">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {faqs.map((faq, i) => (
                    <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                      <h3 className="font-display mb-2 font-semibold text-slate-50">
                        {faq.question}
                      </h3>
                      <p className="font-body text-slate-300">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </article>

        {/* CTA */}
        <section className="bg-brand-600 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-display mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Want to put this into practice?
            </h2>
            <Link
              href="/#contact"
              className="text-brand-700 hover:bg-brand-50 font-display inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-lg font-semibold shadow-lg transition-all duration-200"
            >
              Book a Strategy Call
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
        </section>
      </main>

      <Footer />
    </div>
  )
}
