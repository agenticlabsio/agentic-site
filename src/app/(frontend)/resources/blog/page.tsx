import Link from 'next/link'
import Footer from '@/components/newsite/Footer'
import { MarketingHeader, type MarketingNavItem } from '@/components/marketing/MarketingHeader'
import { getBlogPosts } from '@/lib/payload'
import { BLOG_CATEGORY_LABELS, type BlogCategory } from '@/content/blog'
import { BlogList, type BlogCard } from './BlogList'

// Metadata for /resources/blog is provided by ./layout.tsx.
export const revalidate = 3600

const navItems: MarketingNavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Industries', href: '/industries' },
  { label: 'Case Studies', href: '/case-studies' },
]

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
    <div className="newsite relative min-h-screen">
      <MarketingHeader items={navItems} activeHref="" ctaHref="/#contact" />

      <main className="pt-16">
        {/* Hero */}
        <section className="px-4 pt-20 pb-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <nav className="mb-6">
              <ol className="flex items-center gap-2 text-sm">
                <li>
                  <Link href="/" className="text-slate-400 hover:text-slate-300">
                    Home
                  </Link>
                </li>
                <li className="text-slate-400">/</li>
                <li>
                  <Link href="/resources" className="text-slate-400 hover:text-slate-300">
                    Resources
                  </Link>
                </li>
                <li className="text-slate-400">/</li>
                <li className="font-medium text-slate-50">Blog</li>
              </ol>
            </nav>
            <p className="text-brand-600 mb-4 text-sm font-semibold tracking-wide uppercase">Blog</p>
            <h1 className="font-display mb-4 text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl">
              The Agentic Labs Blog
            </h1>
            <p className="font-body max-w-2xl text-xl text-slate-300">
              Deep dives on agentic AI, industry automation, and practical build guides &mdash;
              written for small and mid-market operators.
            </p>
          </div>
        </section>

        {posts.length === 0 ? (
          <section className="px-4 pb-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl text-slate-400">No posts published yet.</div>
          </section>
        ) : (
          <BlogList posts={cards} />
        )}

        {/* CTA */}
        <section className="bg-slate-900 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-display mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Enough reading. Let&apos;s build one.
            </h2>
            <p className="font-body mb-8 text-xl text-slate-300">
              30 minutes. We&apos;ll map your workflows and tell you which one an agent should run
              first.
            </p>
            <Link
              href="/#contact"
              className="bg-brand-600 hover:bg-brand-700 font-display inline-flex items-center gap-2 rounded-xl px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-200"
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
