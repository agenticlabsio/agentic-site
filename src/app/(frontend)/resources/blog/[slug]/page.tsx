import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { RichText } from '@payloadcms/richtext-lexical/react'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import { ArticleSchema, BreadcrumbSchema, FAQSchema } from '@/components/SEO'
import { CtaSection } from '@/components/marketing/sections/CtaSection'
import { getBlogPostBySlug, getAllBlogPostSlugs } from '@/lib/payload'
import { SITE_URL } from '@/lib/seo'
import { BLOG_CATEGORY_LABELS, type BlogCategory } from '@/content/blog'

export const revalidate = 3600

export async function generateStaticParams() {
  const slugs = await getAllBlogPostSlugs()
  return slugs.map((s) => ({ slug: s.slug }))
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

  const url = `${SITE_URL}/resources/blog/${slug}`
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
    <main className="pt-16">
      <ArticleSchema
        headline={post.title}
        description={post.excerpt}
        url={url}
        datePublished={post.publishedAt ?? undefined}
        dateModified={post.updatedAt ?? undefined}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_URL },
          { name: 'Blog', url: `${SITE_URL}/resources/blog` },
          { name: post.title, url },
        ]}
      />
      {faqs.length > 0 && <FAQSchema faqs={faqs} />}

      {/* Back link */}
        <div className="px-4 pt-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/resources/blog"
              className="font-display inline-flex items-center gap-2 text-sm text-stone-500 transition-colors hover:text-stone-900"
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
              <span className="bg-brand-500/10 text-brand-600 font-display rounded-full px-3 py-1 text-xs font-medium">
                {categoryLabel}
              </span>
              {date && <span className="font-body text-sm text-stone-500">{date}</span>}
            </div>
            <h1 className="font-display mb-4 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <p className="font-body mb-8 text-xl text-stone-600">{post.excerpt}</p>

            {takeaways.length > 0 && (
              <div className="mb-10 rounded-2xl border border-stone-200 bg-stone-50 p-6">
                <h2 className="font-display mb-4 text-sm font-semibold tracking-wider text-stone-500 uppercase">
                  Key Takeaways
                </h2>
                <ul className="space-y-3">
                  {takeaways.map((t, i) => (
                    <li key={i} className="font-body flex items-start gap-3 text-stone-600">
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
            <div className="blog-content font-body space-y-5 text-lg leading-relaxed text-stone-600">
              <RichText data={post.content as SerializedEditorState} />
            </div>

            {/* FAQs */}
            {faqs.length > 0 && (
              <section className="mt-12">
                <h2 className="font-display mb-6 text-2xl font-bold text-stone-900">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {faqs.map((faq, i) => (
                    <div key={i} className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
                      <h3 className="font-display mb-2 font-semibold text-stone-900">
                        {faq.question}
                      </h3>
                      <p className="font-body text-stone-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </article>

        <CtaSection
          bg="brand"
          headline="Want to put this into practice?"
          buttonLabel="Book a Strategy Call"
          href="/#contact"
        />
    </main>
  )
}
