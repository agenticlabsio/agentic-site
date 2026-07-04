'use client'

import { useState } from 'react'
import Link from 'next/link'

export interface BlogCard {
  slug: string
  title: string
  excerpt: string
  category: string
  categoryLabel: string
  date: string
  featured: boolean
}

// Interactive blog listing: category filter + featured post + grid. Data is
// fetched in the RSC page and passed in as serializable props.
export function BlogList({ posts }: { posts: BlogCard[] }) {
  const categories = ['All', ...Array.from(new Set(posts.map((p) => p.categoryLabel)))]
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All' ? posts : posts.filter((p) => p.categoryLabel === activeCategory)
  const featuredPost = posts.find((p) => p.featured)
  const gridPosts =
    activeCategory === 'All' ? filtered.filter((p) => !p.featured) : filtered

  return (
    <>
      {/* Category Filter */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`font-display rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-brand-600 shadow-brand-600/25 text-white shadow-lg'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && activeCategory === 'All' && (
        <section className="px-4 pb-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="font-display mb-4 text-sm font-semibold tracking-wider text-stone-500 uppercase">
              Featured
            </div>
            <Link
              href={`/resources/blog/${featuredPost.slug}`}
              className="block overflow-hidden rounded-2xl border border-stone-200 bg-stone-50 shadow-lg transition-shadow hover:shadow-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 md:p-10">
                  <div className="mb-4 flex items-center gap-2">
                    <span className="bg-brand-500/10 text-brand-600 font-display rounded-full px-3 py-1 text-sm font-medium">
                      {featuredPost.categoryLabel}
                    </span>
                    <span className="font-body text-sm text-stone-500">{featuredPost.date}</span>
                  </div>
                  <h2 className="font-display mb-4 text-2xl font-bold text-stone-900 sm:text-3xl">
                    {featuredPost.title}
                  </h2>
                  <p className="font-body mb-6 text-stone-600">{featuredPost.excerpt}</p>
                  <span className="text-brand-600 font-display inline-flex items-center gap-2 font-semibold">
                    Read article
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>
                </div>
                <div className="bg-brand-600 flex items-center justify-center p-8 md:p-10">
                  <div className="text-center">
                    <div className="font-display mb-2 text-6xl font-bold text-white lg:text-7xl">
                      2026
                    </div>
                    <div className="text-brand-100 font-body text-lg">
                      The &ldquo;Is It Working?&rdquo; Year
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Grid */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {activeCategory === 'All' && (
            <div className="font-display mb-4 text-sm font-semibold tracking-wider text-stone-500 uppercase">
              All Posts
            </div>
          )}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {gridPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/resources/blog/${post.slug}`}
                className="hover:border-brand-500/50 group block rounded-2xl border border-stone-200 bg-stone-50 p-6 transition-all duration-300 hover:shadow-[0_16px_48px_-12px_rgba(91,141,255,0.25)]"
              >
                <div className="mb-4 flex items-center gap-2">
                  <span className="font-display rounded bg-stone-100 px-2 py-1 text-xs font-medium text-stone-600">
                    {post.categoryLabel}
                  </span>
                  <span className="font-body text-xs text-stone-500">{post.date}</span>
                </div>
                <h3 className="font-display group-hover:text-brand-600 mb-2 line-clamp-2 text-lg font-bold text-stone-900 transition-colors">
                  {post.title}
                </h3>
                <p className="font-body line-clamp-3 text-sm text-stone-600">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
