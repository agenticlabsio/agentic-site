import Link from 'next/link'
import { CtaSection } from '@/components/marketing/sections/CtaSection'
import { BreadcrumbSchema } from '@/components/SEO'
import { getBlogPosts } from '@/lib/payload'
import { SITE_URL } from '@/lib/seo'
import { BLOG_CATEGORY_LABELS, type BlogCategory } from '@/content/blog'
import { BlogList, type BlogCard } from './BlogList'

// Metadata for /resources/blog is provided by ./layout.tsx.
export const revalidate = 3600

function formatMonthYear(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
}

export default async function BlogPage() {
  const posts = await getBlogPosts()

  const cards: BlogCard[] = posts.map((post) => ({
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    category: post.category,
    categoryLabel: BLOG_CATEGORY_LABELS[post.category as BlogCategory] ?? post.category,
    date: post.publishedAt ? formatMonthYear(post.publishedAt) : '',
    featured: Boolean(post.featured),
  }))

  return (
    <main className="pt-16">
        <BreadcrumbSchema
          items={[
            { name: 'Home', url: SITE_URL },
            { name: 'Resources', url: `${SITE_URL}/resources` },
            { name: 'Blog', url: `${SITE_URL}/resources/blog` },
          ]}
        />
        {/* Hero */}
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
                <li className="font-medium text-stone-50">Blog</li>
              </ol>
            </nav>
            <p className="text-brand-400 mb-4 text-sm font-semibold tracking-wide uppercase">Blog</p>
            <h1 className="font-display mb-4 text-4xl font-bold tracking-tight text-stone-50 sm:text-5xl">
              The Agentic Labs Blog
            </h1>
            <p className="font-body max-w-2xl text-xl text-stone-300">
              Deep dives on agentic AI, industry automation, and practical build guides &mdash;
              written for small and mid-market operators.
            </p>
          </div>
        </section>

        {posts.length === 0 ? (
          <section className="px-4 pb-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl text-stone-400">No posts published yet.</div>
          </section>
        ) : (
          <BlogList posts={cards} />
        )}

        <CtaSection
          bg="slate"
          headline="Enough reading. Let's build one."
          description="30 minutes. We'll map your workflows and tell you which one an agent should run first."
          buttonLabel="Book a Strategy Call"
          href="/#contact"
        />
    </main>
  )
}
