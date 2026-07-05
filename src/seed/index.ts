import type { Payload } from 'payload'
import { solutions } from './data/solutions'
import { industries } from './data/industries'
import { caseStudies } from './data/case-studies'
import { faqCategories } from './data/faq'
import { blogPosts } from './data/blog'
import { siteSettingsDefault } from './data/site-settings'
import { blocksToLexical } from './blog-lexical'

// Idempotent seeders: each upserts by slug so the dev seed route can be re-run
// safely and stays in sync with the canonical content modules in src/content.

// Prune records whose slug is no longer in the canonical content module
// (e.g. a renamed industry slug or a removed case study).
async function pruneStaleBySlug(
  payload: Payload,
  collection: 'industries' | 'case-studies' | 'blog-posts',
  canonicalSlugs: Set<string>,
  label: string
): Promise<string[]> {
  const results: string[] = []
  const all = await payload.find({ collection, limit: 500 })
  for (const doc of all.docs) {
    if (typeof doc.slug === 'string' && !canonicalSlugs.has(doc.slug)) {
      await payload.delete({ collection, id: doc.id })
      results.push(`Removed stale ${label}: ${doc.slug}`)
    }
  }
  return results
}

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
      // Publish immediately — these collections have drafts/versioning enabled.
      _status: 'published' as const,
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

export async function seedIndustries(payload: Payload): Promise<string[]> {
  const results: string[] = []
  for (let i = 0; i < industries.length; i++) {
    const ind = industries[i]
    const data = {
      name: ind.name,
      slug: ind.slug,
      tagline: ind.tagline,
      icon: ind.icon,
      cardDescription: ind.cardDescription,
      heroDescription: ind.heroDescription,
      targetAudience: ind.targetAudience,
      marketContext: ind.marketContext,
      challenges: ind.challenges,
      aiSolutions: ind.aiSolutions,
      integrations: ind.integrations.map((name) => ({ name })),
      compliance: ind.compliance,
      roiMetrics: ind.roiMetrics.map((metric) => ({ metric })),
      faqs: ind.faqs,
      relatedSolutions: ind.relatedSolutions.map((slug) => ({ slug })),
      seo: ind.seo,
      featured: ind.featured ?? false,
      order: i,
      // Publish immediately — these collections have drafts/versioning enabled.
      _status: 'published' as const,
    }
    const existing = await payload.find({
      collection: 'industries',
      where: { slug: { equals: ind.slug } },
      limit: 1,
    })
    if (existing.docs[0]) {
      await payload.update({ collection: 'industries', id: existing.docs[0].id, data })
      results.push(`Updated industry: ${ind.name}`)
    } else {
      await payload.create({ collection: 'industries', data })
      results.push(`Created industry: ${ind.name}`)
    }
  }
  results.push(
    ...(await pruneStaleBySlug(
      payload,
      'industries',
      new Set(industries.map((i) => i.slug)),
      'industry'
    ))
  )
  return results
}

export async function seedCaseStudies(payload: Payload): Promise<string[]> {
  const results: string[] = []
  for (let i = 0; i < caseStudies.length; i++) {
    const cs = caseStudies[i]
    const data = {
      title: cs.title,
      slug: cs.slug,
      industry: cs.industry,
      subtitle: cs.subtitle,
      card: cs.card,
      metrics: cs.metrics,
      challenge: {
        intro: cs.challenge.intro,
        painPoints: cs.challenge.painPoints.map((text) => ({ text })),
      },
      solution: cs.solution,
      results: {
        before: cs.results.before.map((text) => ({ text })),
        after: cs.results.after.map((text) => ({ text })),
      },
      quote: cs.quote,
      seo: cs.seo,
      featured: cs.featured ?? false,
      order: i,
      // Publish immediately — these collections have drafts/versioning enabled.
      _status: 'published' as const,
    }
    const existing = await payload.find({
      collection: 'case-studies',
      where: { slug: { equals: cs.slug } },
      limit: 1,
    })
    if (existing.docs[0]) {
      await payload.update({ collection: 'case-studies', id: existing.docs[0].id, data })
      results.push(`Updated case study: ${cs.title}`)
    } else {
      await payload.create({ collection: 'case-studies', data })
      results.push(`Created case study: ${cs.title}`)
    }
  }
  results.push(
    ...(await pruneStaleBySlug(
      payload,
      'case-studies',
      new Set(caseStudies.map((c) => c.slug)),
      'case study'
    ))
  )
  return results
}

export async function seedFAQ(payload: Payload): Promise<string[]> {
  const results: string[] = []
  let order = 0
  // Track the canonical question set so we can prune stale records left behind
  // when a question is reworded (the upsert keys on question text).
  const canonicalQuestions = new Set<string>()
  for (const category of faqCategories) {
    for (const faq of category.faqs) {
      canonicalQuestions.add(faq.question)
      const data = {
        question: faq.question,
        answer: faq.answer,
        category: category.slug as
          'agentic-ai' | 'saas-replacement' | 'service-process' | 'security-governance',
        order,
      }
      const existing = await payload.find({
        collection: 'faq',
        where: { question: { equals: faq.question } },
        limit: 1,
      })
      if (existing.docs[0]) {
        await payload.update({ collection: 'faq', id: existing.docs[0].id, data })
        results.push(`Updated FAQ: ${faq.question}`)
      } else {
        await payload.create({ collection: 'faq', data })
        results.push(`Created FAQ: ${faq.question}`)
      }
      order++
    }
  }
  // Prune FAQs no longer in the canonical set (e.g. an old wording of a question).
  const allFaqs = await payload.find({ collection: 'faq', limit: 500 })
  for (const doc of allFaqs.docs) {
    if (!canonicalQuestions.has(doc.question)) {
      await payload.delete({ collection: 'faq', id: doc.id })
      results.push(`Removed stale FAQ: ${doc.question}`)
    }
  }
  return results
}

export async function seedSiteSettings(payload: Payload): Promise<string[]> {
  await payload.updateGlobal({ slug: 'site-settings', data: siteSettingsDefault })
  return ['Updated site settings']
}

export async function seedBlogPosts(payload: Payload): Promise<string[]> {
  const results: string[] = []
  for (const post of blogPosts) {
    const data = {
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: blocksToLexical(post.body),
      category: post.category,
      tags: post.tags.map((tag) => ({ tag })),
      keyTakeaways: post.keyTakeaways.map((takeaway) => ({ takeaway })),
      faqs: (post.faqs ?? []).map((faq) => ({ question: faq.question, answer: faq.answer })),
      status: 'published' as const,
      publishedAt: post.publishedAt,
      author: post.author,
      seo: {
        metaTitle: `${post.title} | Agentic Labs`,
        metaDescription: post.excerpt,
      },
    }
    const existing = await payload.find({
      collection: 'blog-posts',
      where: { slug: { equals: post.slug } },
      limit: 1,
    })
    if (existing.docs[0]) {
      await payload.update({ collection: 'blog-posts', id: existing.docs[0].id, data })
      results.push(`Updated blog post: ${post.title}`)
    } else {
      await payload.create({ collection: 'blog-posts', data })
      results.push(`Created blog post: ${post.title}`)
    }
  }
  results.push(
    ...(await pruneStaleBySlug(
      payload,
      'blog-posts',
      new Set(blogPosts.map((p) => p.slug)),
      'blog post'
    ))
  )
  return results
}
