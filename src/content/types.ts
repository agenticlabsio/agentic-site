// Shared content types for the marketing site's entity data.
// These shapes are the single source of truth: the seed script writes them into
// Payload, the Payload collections mirror them, and the RSC pages read them back
// through the typed fetchers in src/lib/payload.ts.

export interface Capability {
  title: string
  description: string
  metric?: string
}

export interface ProcessStep {
  step: number
  title: string
  description: string
}

export interface ResultMetric {
  metric: string
  label: string
  description: string
}

export interface Faq {
  question: string
  answer: string
}

export interface Seo {
  metaTitle: string
  metaDescription: string
}

export type SolutionCategory = 'Core' | 'Operations' | 'Platform' | 'Governance'

export interface Solution {
  slug: string
  name: string
  category: SolutionCategory
  featured?: boolean
  /** Short description used on cards and as the meta description fallback. */
  description: string
  /** One-line headline shown under the title on the detail page. */
  heroTagline: string
  /** Card headline metric (canonical: sourced from the detail page results). */
  cardMetric: string
  cardMetricLabel: string
  /** Four capability bullets shown on the solutions list card. */
  features: string[]
  /** Narrative problem statement. */
  problem: string
  challenges: string[]
  solutionOverview: string
  capabilities: Capability[]
  howItWorks: ProcessStep[]
  integrations: string[]
  results: ResultMetric[]
  faqs: Faq[]
  cta: { headline: string; description: string }
  /** Optional deep link to a related case study. */
  caseStudyLink?: string
  seo: Seo
}
