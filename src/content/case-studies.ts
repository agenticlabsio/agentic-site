import type { Seo } from './types'

// Canonical case-studies data — consolidated from the former two sources
// (case-studies/[slug] detail page inline data + case-studies list-page cards).
// Detail-page content is canonical; the list card fields (which diverge slightly
// in title/subtitle/metric formatting) are preserved verbatim under `card`.
// SEO mirrors the detail page's generateMetadata: metaTitle is
// `${title} ${subtitle} | Case Study` and metaDescription is the challenge intro.

export interface CaseStudyMetric {
  value: string
  label: string
  description: string
}

export interface SolutionComponent {
  title: string
  description: string
}

export interface CardMetric {
  value: string
  label: string
}

export interface CaseStudyCard {
  /** Card title on the list page (may differ from the detail title). */
  title: string
  /** Card subtitle on the list page (shorter than the detail subtitle). */
  subtitle: string
  /** Metrics shown on the list card (value + label only). */
  metrics: CardMetric[]
}

export interface CaseStudy {
  slug: string
  industry: string
  /** Detail-page title. */
  title: string
  /** Detail-page subtitle (e.g. "for a Mid-Market Bank"). */
  subtitle: string
  featured?: boolean
  /** List-page card fields (title/subtitle/metrics, preserved verbatim). */
  card: CaseStudyCard
  /** Key-results metrics shown on the detail page. */
  metrics: CaseStudyMetric[]
  challenge: {
    intro: string
    painPoints: string[]
  }
  solution: {
    intro: string
    components: SolutionComponent[]
    timeline: string
  }
  results: {
    before: string[]
    after: string[]
  }
  quote: {
    text: string
    author: string
  }
  seo: Seo
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'document-processing',
    industry: 'Financial Services',
    title: 'Document Processing Automation',
    subtitle: 'for a Mid-Market Bank',
    featured: true,
    card: {
      title: 'Document Processing Automation',
      subtitle: 'Mid-Market Bank',
      metrics: [
        { value: '12→6', label: 'Days' },
        { value: '$2.4M', label: 'Savings' },
        { value: '8 wks', label: 'To Production' },
      ],
    },
    metrics: [
      { value: '12 → 6', label: 'Days', description: 'Processing Time' },
      { value: '$2.4M', label: 'Annual', description: 'Savings' },
      { value: '8 wks', label: 'Deployment', description: 'Kickoff to Production' },
    ],
    challenge: {
      intro:
        'A leading financial services firm processed 50,000+ loan applications monthly. Manual document review took 12-15 days per application, creating bottlenecks and customer complaints.',
      painPoints: [
        '12-15 day processing time',
        'Nearly half of the 50,000+ monthly applications required manual re-review',
        '$4.2M annual labor costs',
        'Customer satisfaction scores declining',
      ],
    },
    solution: {
      intro: 'We deployed an intelligent document processing system with three core components:',
      components: [
        {
          title: 'Auto-classification',
          description: 'ML model to categorize incoming documents by type',
        },
        {
          title: 'Smart extraction',
          description: 'Entity recognition for key data points with confidence scoring',
        },
        {
          title: 'Human-in-the-loop',
          description: 'Exception handling workflow for edge cases requiring review',
        },
      ],
      timeline: '8 weeks from kickoff to production',
    },
    results: {
      before: [
        '12-15 day processing',
        'Frequent manual re-review',
        'Frequent extraction errors',
        '$4.2M labor costs',
      ],
      after: [
        '6-8 day processing',
        'Rare manual re-review',
        'Highly reliable extraction',
        '$1.8M labor costs',
      ],
    },
    quote: {
      text: 'Processing time dropped from 12-15 days to 6-8 days. The ROI was clear within 90 days of deployment.',
      author: 'VP Operations',
    },
    seo: {
      metaTitle: 'Document Processing Automation for a Mid-Market Bank | Case Study',
      metaDescription:
        'A leading financial services firm processed 50,000+ loan applications monthly. Manual document review took 12-15 days per application, creating bottlenecks and customer complaints.',
    },
  },
  {
    slug: 'patient-intake',
    industry: 'Healthcare',
    title: 'Patient Intake Automation',
    subtitle: 'for a Regional Health System',
    card: {
      title: 'Patient Intake Automation',
      subtitle: 'Regional Health System',
      metrics: [{ value: '25→14 min', label: 'Faster Intake' }],
    },
    metrics: [
      { value: '25 → 14 min', label: 'Faster', description: 'Intake Time' },
      { value: '3x', label: 'Capacity', description: 'Increase' },
      { value: '10 wks', label: 'Rollout', description: 'Kickoff to Launch' },
    ],
    challenge: {
      intro:
        'A regional health system with 12 facilities struggled with patient intake bottlenecks. Manual data entry led to errors and long wait times.',
      painPoints: [
        '25+ minute average intake time',
        'Manual data entry errors common across all 12 facilities',
        'Staff burnout from repetitive tasks',
        'Patient satisfaction below benchmarks',
      ],
    },
    solution: {
      intro: 'We implemented an AI-powered intake system:',
      components: [
        {
          title: 'Digital forms',
          description: 'Mobile-first patient intake with smart validation',
        },
        {
          title: 'Insurance verification',
          description: 'Real-time eligibility checking via API integrations',
        },
        { title: 'EHR integration', description: 'Automated data flow into existing systems' },
      ],
      timeline: '10 weeks from kickoff to rollout',
    },
    results: {
      before: [
        '25 min intake time',
        'Frequent data entry errors',
        'Staff burnout',
        'Low satisfaction',
      ],
      after: [
        '14 min intake time',
        'Minimal data entry errors',
        'Staff redeployed',
        'NPS up 28 points',
      ],
    },
    quote: {
      text: 'Our staff can now focus on patient care instead of paperwork. The system paid for itself in the first quarter.',
      author: 'Director of Operations',
    },
    seo: {
      metaTitle: 'Patient Intake Automation for a Regional Health System | Case Study',
      metaDescription:
        'A regional health system with 12 facilities struggled with patient intake bottlenecks. Manual data entry led to errors and long wait times.',
    },
  },
  {
    slug: 'inventory-forecasting',
    industry: 'Retail',
    title: 'Inventory Forecasting',
    subtitle: 'for a National Retailer',
    card: {
      title: 'Inventory Forecasting',
      subtitle: 'National Retailer',
      metrics: [{ value: '$8M', label: 'Annual Impact' }],
    },
    metrics: [
      { value: '$12M → $7.2M', label: 'Write-offs', description: 'Annual Reduction' },
      { value: '40 → 5 hrs/wk', label: 'Manual Work', description: 'Forecasting Oversight' },
      { value: '$8M', label: 'Annual', description: 'Impact' },
    ],
    challenge: {
      intro:
        'A national retailer with 400+ locations faced chronic inventory imbalances. Overstock in some regions while others experienced frequent stockouts.',
      painPoints: [
        '$12M annual write-offs from overstock',
        'Frequent stockouts across the 400+ store network impacting sales',
        'Manual forecasting taking 40+ hours weekly',
        'Seasonal patterns poorly predicted',
      ],
    },
    solution: {
      intro: 'We deployed a demand forecasting engine:',
      components: [
        { title: 'ML forecasting', description: 'Demand prediction incorporating 50+ variables' },
        {
          title: 'Dynamic reorder',
          description: 'Automated replenishment triggers by SKU/location',
        },
        { title: 'Anomaly detection', description: 'Early warning system for demand spikes' },
      ],
      timeline: '12 weeks to full deployment',
    },
    results: {
      before: [
        'Frequent stockouts',
        '$12M write-offs',
        '40+ hrs/week manual work',
        'Poor seasonal accuracy',
      ],
      after: [
        'Rare stockouts',
        '$7.2M write-offs',
        '5 hrs/week oversight',
        'Highly accurate seasonal forecasts',
      ],
    },
    quote: {
      text: 'We finally have visibility into demand before it happens. The reduction in stockouts directly impacted our bottom line.',
      author: 'SVP Supply Chain',
    },
    seo: {
      metaTitle: 'Inventory Forecasting for a National Retailer | Case Study',
      metaDescription:
        'A national retailer with 400+ locations faced chronic inventory imbalances. Overstock in some regions while others experienced frequent stockouts.',
    },
  },
  {
    slug: 'predictive-maintenance',
    industry: 'Manufacturing',
    title: 'Predictive Maintenance',
    subtitle: 'for Industrial Equipment',
    card: {
      title: 'Predictive Maintenance',
      subtitle: 'Industrial Equipment',
      metrics: [{ value: '$3.2M → $1.9M', label: 'Emergency Repairs' }],
    },
    metrics: [
      { value: '$3.2M → $1.9M', label: 'Repair Costs', description: 'Emergency Repair Spend' },
      { value: '2–4 wks', label: 'Early Warning', description: 'Failure Prediction Lead Time' },
      { value: '200+', label: 'Assets', description: 'IoT-Connected Equipment' },
    ],
    challenge: {
      intro:
        'A manufacturing company with $500M+ equipment portfolio experienced unexpected failures causing production delays and safety concerns.',
      painPoints: [
        'Frequent unplanned downtime disrupting production',
        '$3.2M annual emergency repairs',
        'Safety incidents from equipment failures',
        'Reactive maintenance culture',
      ],
    },
    solution: {
      intro: 'We implemented a predictive maintenance platform:',
      components: [
        {
          title: 'Sensor integration',
          description: 'IoT connectivity across 200+ critical assets',
        },
        {
          title: 'Failure prediction',
          description: 'ML models detecting anomalies 2-4 weeks ahead',
        },
        {
          title: 'Work order automation',
          description: 'Automatic scheduling based on predictions',
        },
      ],
      timeline: '16 weeks including sensor deployment',
    },
    results: {
      before: [
        'Frequent unplanned downtime',
        '$3.2M emergency repairs',
        'Reactive maintenance',
        'Safety concerns',
      ],
      after: [
        'Rare unplanned downtime',
        '$1.9M emergency repairs',
        'Predictive approach',
        'Zero incidents',
      ],
    },
    quote: {
      text: 'We went from fighting fires to preventing them. The safety improvements alone justified the investment.',
      author: 'Plant Director',
    },
    seo: {
      metaTitle: 'Predictive Maintenance for Industrial Equipment | Case Study',
      metaDescription:
        'A manufacturing company with $500M+ equipment portfolio experienced unexpected failures causing production delays and safety concerns.',
    },
  },
  {
    slug: 'claims-processing',
    industry: 'Insurance',
    title: 'Claims Processing Automation',
    subtitle: 'for a National Insurer',
    card: {
      title: 'Claims Processing',
      subtitle: 'National Insurer',
      metrics: [{ value: '14d → 4.2d', label: 'Resolution Time' }],
    },
    metrics: [
      { value: '14d → 4.2d', label: 'Resolution', description: 'Average Claim Turnaround' },
      { value: '$4.1M', label: 'Annual', description: 'Savings' },
      { value: '+34 NPS', label: 'Customer', description: 'Satisfaction Gain' },
    ],
    challenge: {
      intro:
        'A national insurer processed 100,000+ claims monthly with significant backlogs. Manual review created delays and inconsistent decisions.',
      painPoints: [
        '14-day average claim resolution',
        'A large share of the 100,000+ monthly claims were escalated for review',
        'Inconsistent adjudication decisions',
        'Growing customer complaints',
      ],
    },
    solution: {
      intro: 'We built an intelligent claims processing system:',
      components: [
        { title: 'Auto-triage', description: 'ML-based routing to appropriate handlers' },
        { title: 'Document analysis', description: 'Automated extraction of claim details' },
        { title: 'Decision support', description: 'Recommendation engine for adjusters' },
      ],
      timeline: '14 weeks to production',
    },
    results: {
      before: [
        '14-day resolution',
        'Frequent escalations',
        'Inconsistent decisions',
        'High complaints',
      ],
      after: [
        '4.2-day resolution',
        'Rare escalations',
        'Consistent outcomes',
        'NPS up 34 points',
      ],
    },
    quote: {
      text: 'Claims that used to take two weeks now resolve in days. Our adjusters focus on complex cases while AI handles the routine.',
      author: 'Chief Claims Officer',
    },
    seo: {
      metaTitle: 'Claims Processing Automation for a National Insurer | Case Study',
      metaDescription:
        'A national insurer processed 100,000+ claims monthly with significant backlogs. Manual review created delays and inconsistent decisions.',
    },
  },
]

// Representative aggregate outcomes shown on the case-studies list page.
export const caseStudiesAggregateStats: CardMetric[] = [
  { value: '6–8 wks', label: 'To Production' },
  { value: '$2.4M', label: 'Labor Savings' },
  { value: '14d → 4.2d', label: 'Claims Resolution' },
  { value: '$3.2M → $1.9M', label: 'Repair Costs Cut' },
]

export const caseStudiesBySlug: Record<string, CaseStudy> = Object.fromEntries(
  caseStudies.map((c) => [c.slug, c]),
)

export const caseStudySlugs: string[] = caseStudies.map((c) => c.slug)
