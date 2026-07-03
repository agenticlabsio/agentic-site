import { describe, it, expect, vi } from 'vitest'
import sitemap from '@/app/sitemap'
import { solutionSlugs } from '@/content/solutions'
import { industrySlugs } from '@/content/industries'
import { caseStudySlugs } from '@/content/case-studies'

// The sitemap and the seeded CMS both derive from the canonical src/content
// slug arrays, so they can never drift. This guards that the sitemap keeps
// emitting exactly one entry per content slug.
describe('sitemap ↔ content slugs', () => {
  const urls = sitemap().map((e) => e.url)
  const slugsFor = (prefix: string) =>
    urls
      .filter((u) => u.includes(`/${prefix}/`))
      .map((u) => u.split(`/${prefix}/`)[1])
      .sort()

  it('emits every solution slug exactly once', () => {
    expect(slugsFor('solutions')).toEqual([...solutionSlugs].sort())
  })

  it('emits every industry slug exactly once', () => {
    expect(slugsFor('industries')).toEqual([...industrySlugs].sort())
  })

  it('emits every case-study slug exactly once', () => {
    expect(slugsFor('case-studies')).toEqual([...caseStudySlugs].sort())
  })
})

// generateMetadata must always set a canonical URL — even for an unknown slug
// (so a 404 page still self-canonicalizes) — and derive title/description from
// the CMS record when it resolves.
const getSolutionBySlug = vi.fn()
vi.mock('@/lib/payload', () => ({
  getSolutionBySlug: (slug: string) => getSolutionBySlug(slug),
  getAllSolutionSlugs: vi.fn().mockResolvedValue([]),
}))

import { generateMetadata } from '@/app/(frontend)/solutions/[slug]/page'

describe('solutions/[slug] generateMetadata', () => {
  it('sets canonical + title from the CMS record for a known slug', async () => {
    getSolutionBySlug.mockResolvedValueOnce({
      name: 'Intelligent Agents',
      description: 'desc',
      seo: { metaTitle: 'Intelligent Agents | Agentic Labs', metaDescription: 'meta' },
    })
    const meta = await generateMetadata({ params: Promise.resolve({ slug: 'intelligent-agents' }) })
    expect(meta.alternates?.canonical).toBe('/solutions/intelligent-agents')
    expect(meta.title).toBe('Intelligent Agents | Agentic Labs')
  })

  it('still sets canonical for an unknown slug', async () => {
    getSolutionBySlug.mockResolvedValueOnce(null)
    const meta = await generateMetadata({ params: Promise.resolve({ slug: 'ghost' }) })
    expect(meta.alternates?.canonical).toBe('/solutions/ghost')
    expect(meta.title).toBeUndefined()
  })
})
