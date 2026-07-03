import type { Payload } from 'payload'
import { solutions } from '@/content/solutions'

// Idempotent seeders: each upserts by slug so the dev seed route can be re-run
// safely and stays in sync with the canonical content modules in src/content.

export async function seedSolutions(payload: Payload): Promise<string[]> {
  const results: string[] = []
  for (let i = 0; i < solutions.length; i++) {
    const s = solutions[i]
    const data = {
      name: s.name,
      slug: s.slug,
      category: s.category,
      description: s.description,
      heroTagline: s.heroTagline,
      cardMetric: s.cardMetric,
      cardMetricLabel: s.cardMetricLabel,
      features: s.features.map((text) => ({ text })),
      problem: s.problem,
      challenges: s.challenges.map((text) => ({ text })),
      solutionOverview: s.solutionOverview,
      capabilities: s.capabilities,
      howItWorks: s.howItWorks,
      integrations: s.integrations.map((name) => ({ name })),
      results: s.results,
      faqs: s.faqs,
      cta: s.cta,
      caseStudyLink: s.caseStudyLink,
      seo: s.seo,
      featured: s.featured ?? false,
      order: i,
    }
    const existing = await payload.find({
      collection: 'solutions',
      where: { slug: { equals: s.slug } },
      limit: 1,
    })
    if (existing.docs[0]) {
      await payload.update({ collection: 'solutions', id: existing.docs[0].id, data })
      results.push(`Updated solution: ${s.name}`)
    } else {
      await payload.create({ collection: 'solutions', data })
      results.push(`Created solution: ${s.name}`)
    }
  }
  return results
}
