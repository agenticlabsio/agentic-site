// Authoring shapes for the seed corpora in this directory. These describe the
// data the seed script writes into Payload — they are NOT the runtime source of
// truth. At runtime the RSC pages read Payload records typed by the generated
// src/payload-types.ts; if these shapes and the Payload collections drift, the
// generated types win. Keep them aligned with the collection configs.

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
