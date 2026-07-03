import { describe, it, expect, vi } from 'vitest'

// The sitemap is driven entirely by Payload (getAllMarketingSlugs /
// getAllBlogPostSlugs), so these guard that it maps each fetched slug to the
// right URL, type-prefixed path, and lastModified — not that it derives from
// any particular content source.
const getSolutionBySlug = vi.fn()
vi.mock('@/lib/payload', () => ({
  getSolutionBySlug: (slug: string) => getSolutionBySlug(slug),
  getAllSolutionSlugs: vi.fn().mockResolvedValue([]),
  getAllMarketingSlugs: vi.fn().mockResolvedValue([
    { type: 'solutions', slug: 'intelligent-agents', updatedAt: '2026-01-01T00:00:00.000Z' },
    { type: 'industries', slug: 'healthcare', updatedAt: '2026-01-02T00:00:00.000Z' },
    { type: 'case-studies', slug: 'patient-intake', updatedAt: '2026-01-03T00:00:00.000Z' },
  ]),
  getAllBlogPostSlugs: vi.fn().mockResolvedValue([
    { slug: 'agentic-ai-2026', updatedAt: '2026-01-04T00:00:00.000Z' },
  ]),
}))

import sitemap from '@/app/sitemap'

describe('sitemap', () => {
  it('emits a matching URL and lastModified for each marketing/blog slug', async () => {
    const entries = await sitemap()
    const urls = entries.map((e) => e.url)

    expect(urls).toContain('https://agenticlabs.io/solutions/intelligent-agents')
    expect(urls).toContain('https://agenticlabs.io/industries/healthcare')
    expect(urls).toContain('https://agenticlabs.io/case-studies/patient-intake')
    expect(urls).toContain('https://agenticlabs.io/resources/blog/agentic-ai-2026')

    const solutionEntry = entries.find((e) => e.url.endsWith('/solutions/intelligent-agents'))
    expect(solutionEntry?.lastModified).toBe('2026-01-01T00:00:00.000Z')
  })
})

// generateMetadata must always set a canonical URL — even for an unknown slug
// (so a 404 page still self-canonicalizes) — and derive title/description from
// the CMS record when it resolves.
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
