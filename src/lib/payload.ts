import { cache } from 'react'
import { unstable_cache } from 'next/cache'
import type { Where } from 'payload'
import { installMessageChannelPolyfill } from './messagechannel-polyfill'

// Request-scoped singleton: React.cache dedupes the (heavy) Payload init so all
// fetchers in a single render share one instance.
//
// The polyfill must run, and @payload-config must be imported, *after* that —
// a static top-level `import config from '@payload-config'` would get evaluated
// before this function ever runs, defeating the polyfill (see
// messagechannel-polyfill.ts). Dynamic imports defer evaluation until here.
export const getPayloadClient = cache(async () => {
  await installMessageChannelPolyfill()
  const [{ getPayload }, { default: config }] = await Promise.all([
    import('payload'),
    import('@payload-config'),
  ])
  return getPayload({ config })
})

// Cross-request persisted cache, tagged per collection so a Payload afterChange/
// afterDelete hook can call revalidateTag(<collection>) to purge just that data.
// react's cache() (above) only dedupes within a single render; this is what
// actually avoids re-querying D1 on every request between revalidations.
function cachedByTag<Args extends unknown[], Result>(
  tag: string,
  keyParts: string[],
  fn: (...args: Args) => Promise<Result>
) {
  return cache(unstable_cache(fn, keyParts, { tags: [tag], revalidate: 3600 }))
}

// The three marketing detail collections plus blog all share the same
// all / by-slug / all-slugs access shape — only the collection, cache tag,
// sort, and an optional `where` filter differ. This factory is the single
// definition of that shape; adding a collection is three lines below instead
// of ~60 of copy-paste (which is how getSolutions/Industries/CaseStudies drifted
// apart in the first place). The collection literal narrows the returned doc
// type at each call site, so consumers still get fully-typed records.
type FetchableCollection = 'solutions' | 'case-studies' | 'industries' | 'blog-posts'

function createCollectionFetchers<TSlug extends FetchableCollection>(
  collection: TSlug,
  tag: string,
  { sort, where }: { sort?: string; where?: Where } = {}
) {
  const getAll = cachedByTag(tag, [`${collection}-all`], async () => {
    const payload = await getPayloadClient()
    const { docs } = await payload.find({ collection, sort, where, limit: 100, depth: 1 })
    return docs
  })

  const getBySlug = cachedByTag(tag, [`${collection}-by-slug`], async (slug: string) => {
    const payload = await getPayloadClient()
    const slugWhere: Where = { slug: { equals: slug } }
    const { docs } = await payload.find({
      collection,
      where: where ? { and: [where, slugWhere] } : slugWhere,
      limit: 1,
      depth: 1,
    })
    return docs[0] ?? null
  })

  const getAllSlugs = cachedByTag(tag, [`${collection}-slugs`], async () => {
    const payload = await getPayloadClient()
    const { docs } = await payload.find({
      collection,
      where,
      limit: 100,
      depth: 0,
      pagination: false,
      select: { slug: true, updatedAt: true },
    })
    return (docs as Array<{ slug: string; updatedAt: string }>).map((doc) => ({
      slug: doc.slug,
      updatedAt: doc.updatedAt,
    }))
  })

  return { getAll, getBySlug, getAllSlugs }
}

// Solutions ---------------------------------------------------------------
const solutions = createCollectionFetchers('solutions', 'solutions', { sort: 'order' })
export const getSolutions = solutions.getAll
export const getSolutionBySlug = solutions.getBySlug
export const getAllSolutionSlugs = solutions.getAllSlugs

// Case Studies ------------------------------------------------------------
const caseStudies = createCollectionFetchers('case-studies', 'case-studies', { sort: 'order' })
export const getCaseStudies = caseStudies.getAll
export const getCaseStudyBySlug = caseStudies.getBySlug
export const getAllCaseStudySlugs = caseStudies.getAllSlugs

// Industries --------------------------------------------------------------
const industries = createCollectionFetchers('industries', 'industries', { sort: 'order' })
export const getIndustries = industries.getAll
export const getIndustryBySlug = industries.getBySlug
export const getAllIndustrySlugs = industries.getAllSlugs

// Blog --------------------------------------------------------------------
// Only published posts are ever exposed to the public site; the status filter
// is applied to every read (list, by-slug, and slug enumeration).
const blogPosts = createCollectionFetchers('blog-posts', 'blog-posts', {
  sort: '-publishedAt',
  where: { status: { equals: 'published' } },
})
export const getBlogPosts = blogPosts.getAll
export const getBlogPostBySlug = blogPosts.getBySlug
export const getAllBlogPostSlugs = blogPosts.getAllSlugs

// Combined marketing slugs (for sitemap / generateStaticParams) ------------
export const getAllMarketingSlugs = cache(
  async (): Promise<
    { type: 'solutions' | 'industries' | 'case-studies'; slug: string; updatedAt: string }[]
  > => {
    const [solutionSlugs, industrySlugs, caseStudySlugs] = await Promise.all([
      getAllSolutionSlugs(),
      getAllIndustrySlugs(),
      getAllCaseStudySlugs(),
    ])
    return [
      ...solutionSlugs.map((s) => ({ type: 'solutions' as const, ...s })),
      ...industrySlugs.map((s) => ({ type: 'industries' as const, ...s })),
      ...caseStudySlugs.map((s) => ({ type: 'case-studies' as const, ...s })),
    ]
  }
)

// Site Settings -------------------------------------------------------------
export const getSiteSettings = cachedByTag('site-settings', ['site-settings'], async () => {
  const payload = await getPayloadClient()
  return payload.findGlobal({ slug: 'site-settings' })
})

// FAQ ---------------------------------------------------------------------
export const getFAQ = cachedByTag('faq', ['faq-all'], async () => {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({ collection: 'faq', sort: 'order', limit: 100 })
  return docs
})

// Leads — public write path for the CTA / footer signup forms.
// Idempotent by email: re-submitting an address returns the existing lead
// instead of creating a duplicate, so the public endpoint is safe to retry.
export async function createLead(data: {
  email: string
  source?: 'cta-section' | 'footer' | 'hero'
  page?: string
  consent?: boolean
}) {
  const payload = await getPayloadClient()

  const { docs: existing } = await payload.find({
    collection: 'leads',
    where: { email: { equals: data.email } },
    limit: 1,
  })
  if (existing.length > 0) {
    return existing[0]
  }

  return payload.create({
    collection: 'leads',
    data: {
      email: data.email,
      source: data.source ?? 'cta-section',
      page: data.page,
      consent: data.consent ?? false,
    },
  })
}
