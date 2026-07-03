import { getPayload } from 'payload'
import { cache } from 'react'
import { unstable_cache } from 'next/cache'
import config from '@payload-config'

// Request-scoped singleton: React.cache dedupes the (heavy) Payload init so all
// fetchers in a single render share one instance.
export const getPayloadClient = cache(async () => getPayload({ config }))

// Cross-request persisted cache, tagged per collection so a Payload afterChange/
// afterDelete hook can call revalidateTag(<collection>) to purge just that data.
// react's cache() (above) only dedupes within a single render; this is what
// actually avoids re-querying D1 on every request between revalidations.
function cachedByTag<Args extends unknown[], Result>(
  tag: string,
  keyParts: string[],
  fn: (...args: Args) => Promise<Result>,
) {
  return cache(unstable_cache(fn, keyParts, { tags: [tag], revalidate: 3600 }))
}

// Solutions ---------------------------------------------------------------
export const getSolutions = cachedByTag('solutions', ['solutions-all'], async () => {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'solutions',
    sort: 'order',
    limit: 100,
    depth: 1,
  })
  return docs
})

export const getSolutionBySlug = cachedByTag(
  'solutions',
  ['solution-by-slug'],
  async (slug: string) => {
    const payload = await getPayloadClient()
    const { docs } = await payload.find({
      collection: 'solutions',
      where: { slug: { equals: slug } },
      limit: 1,
      depth: 1,
    })
    return docs[0] ?? null
  },
)

export const getAllSolutionSlugs = cachedByTag('solutions', ['solution-slugs'], async () => {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'solutions',
    limit: 100,
    depth: 0,
    pagination: false,
    select: { slug: true },
  })
  return docs.map((doc) => doc.slug)
})

// Case Studies ------------------------------------------------------------
export const getCaseStudies = cachedByTag('case-studies', ['case-studies-all'], async () => {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'case-studies',
    sort: 'order',
    limit: 100,
    depth: 1,
  })
  return docs
})

export const getCaseStudyBySlug = cachedByTag(
  'case-studies',
  ['case-study-by-slug'],
  async (slug: string) => {
    const payload = await getPayloadClient()
    const { docs } = await payload.find({
      collection: 'case-studies',
      where: { slug: { equals: slug } },
      limit: 1,
      depth: 1,
    })
    return docs[0] ?? null
  },
)

export const getAllCaseStudySlugs = cachedByTag('case-studies', ['case-study-slugs'], async () => {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'case-studies',
    limit: 100,
    depth: 0,
    pagination: false,
    select: { slug: true },
  })
  return docs.map((doc) => doc.slug)
})

// Industries --------------------------------------------------------------
export const getIndustries = cachedByTag('industries', ['industries-all'], async () => {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'industries',
    sort: 'order',
    limit: 100,
    depth: 1,
  })
  return docs
})

export const getIndustryBySlug = cachedByTag(
  'industries',
  ['industry-by-slug'],
  async (slug: string) => {
    const payload = await getPayloadClient()
    const { docs } = await payload.find({
      collection: 'industries',
      where: { slug: { equals: slug } },
      limit: 1,
      depth: 1,
    })
    return docs[0] ?? null
  },
)

export const getAllIndustrySlugs = cachedByTag('industries', ['industry-slugs'], async () => {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'industries',
    limit: 100,
    depth: 0,
    pagination: false,
    select: { slug: true },
  })
  return docs.map((doc) => doc.slug)
})

// Combined marketing slugs (for sitemap / generateStaticParams) ------------
export const getAllMarketingSlugs = cache(
  async (): Promise<{ type: 'solutions' | 'industries' | 'case-studies'; slug: string }[]> => {
    const [solutionSlugs, industrySlugs, caseStudySlugs] = await Promise.all([
      getAllSolutionSlugs(),
      getAllIndustrySlugs(),
      getAllCaseStudySlugs(),
    ])
    return [
      ...solutionSlugs.map((slug) => ({ type: 'solutions' as const, slug })),
      ...industrySlugs.map((slug) => ({ type: 'industries' as const, slug })),
      ...caseStudySlugs.map((slug) => ({ type: 'case-studies' as const, slug })),
    ]
  },
)

// FAQ ---------------------------------------------------------------------
export const getFAQ = cachedByTag('faq', ['faq-all'], async () => {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({ collection: 'faq', sort: 'order', limit: 100 })
  return docs
})

// Leads — public write path for the CTA / footer signup forms.
export async function createLead(data: {
  email: string
  source?: 'cta-section' | 'footer' | 'hero'
  page?: string
  consent?: boolean
}) {
  const payload = await getPayloadClient()
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
