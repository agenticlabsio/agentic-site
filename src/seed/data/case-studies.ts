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
      intro: 'We implemented an agentic intake system:',
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
    slug: 'procurement-operations',
    industry: 'Manufacturing',
    title: 'Procurement Spend Intelligence',
    subtitle: 'for a Mid-Market Manufacturer',
    featured: false,
    card: {
      title: 'Procurement Spend Intelligence',
      subtitle: 'Mid-Market Manufacturer',
      metrics: [
        { value: 'Days → Min', label: 'Spend Analysis' },
        { value: '8–12%', label: 'Savings Identified' },
      ],
    },
    metrics: [
      { value: 'Days → Minutes', label: 'Analysis', description: 'Multi-Year Spend Review' },
      { value: '8–12%', label: 'Purchasing', description: 'Savings Identified' },
      { value: '3 FTEs', label: 'Redeployed', description: 'From Manual Reconciliation' },
    ],
    challenge: {
      intro:
        'A mid-market manufacturer ran a legacy ERP that did not communicate with its modern procurement platform. Comparative spend analysis across years of data took analysts days per request, and overhead costs carried unrealized reduction opportunities nobody could see.',
      painPoints: [
        'Legacy ERP and procurement platform fully disconnected',
        'Multi-year spend analysis took days of manual FTE work',
        'Overhead cost reduction opportunities invisible in siloed data',
        'Procurement decisions made on stale, partial numbers',
      ],
    },
    solution: {
      intro: 'We built an agentic bridge between the legacy ERP and the procurement system:',
      components: [
        {
          title: 'System bridge agent',
          description: 'Connects legacy ERP and modern procurement data without re-platforming',
        },
        {
          title: 'Data normalization',
          description: 'Ingests and normalizes multi-year transactional data from both platforms',
        },
        {
          title: 'Comparative analysis',
          description: 'Automated year-over-year spend analysis, delivered in minutes',
        },
      ],
      timeline: '8 weeks from kickoff to production',
    },
    results: {
      before: [
        'Days per spend analysis',
        'Siloed ERP and procurement data',
        'Invisible overhead opportunities',
        'FTEs on manual reconciliation',
      ],
      after: [
        'Minutes per spend analysis',
        'One queryable operating picture',
        '8–12% purchasing savings identified',
        'FTEs on strategic sourcing',
      ],
    },
    quote: {
      text: 'Analysis that took my team days now runs in minutes — and it surfaced savings we did not know existed.',
      author: 'VP Procurement',
    },
    seo: {
      metaTitle: 'Procurement Spend Intelligence for a Mid-Market Manufacturer | Case Study',
      metaDescription:
        'A mid-market manufacturer ran a legacy ERP disconnected from its procurement platform. An agentic bridge cut multi-year spend analysis from days to minutes and identified 8-12% purchasing savings.',
    },
  },
  {
    slug: 'revenue-management',
    industry: 'Distribution',
    title: 'Revenue Management Automation',
    subtitle: 'for a National Distributor',
    card: {
      title: 'Revenue Management',
      subtitle: 'National Distributor',
      metrics: [
        { value: '3d → 4hr', label: 'Quote Turnaround' },
        { value: '+2.1pp', label: 'Gross Margin' },
      ],
    },
    metrics: [
      { value: '3d → 4hr', label: 'Quotes', description: 'Turnaround Time' },
      { value: '+2.1pp', label: 'Margin', description: 'Gross Margin Recovered' },
      { value: '96%', label: 'Contract', description: 'Price Compliance' },
    ],
    challenge: {
      intro:
        'A national distributor priced thousands of quotes monthly against outdated rate cards. Discounts drifted below contract floors, margin leaked deal by deal, and the quote desk became the bottleneck for the entire sales team.',
      painPoints: [
        '3-day average quote turnaround',
        'Discounting drifted below contract floors unnoticed',
        'Margin leakage across thousands of monthly quotes',
        'Pricing decisions inconsistent across regions',
      ],
    },
    solution: {
      intro: 'We deployed a revenue management engine inside their quoting workflow:',
      components: [
        {
          title: 'Pricing agent',
          description:
            'Builds quotes from live cost, contract, and win-rate data instead of static rate cards',
        },
        {
          title: 'Margin guardrails',
          description: 'Flags below-floor discounts and routes exceptions to deal-desk approval',
        },
        {
          title: 'Leakage analytics',
          description:
            'Continuously audits invoiced prices against contract terms to recover misses',
        },
      ],
      timeline: '10 weeks from kickoff to production',
    },
    results: {
      before: [
        '3-day quote turnaround',
        'Below-floor discounts common',
        'Margin leakage invisible',
        'Regional pricing inconsistency',
      ],
      after: [
        '4-hour quote turnaround',
        'Exceptions gated for approval',
        '+2.1pp gross margin recovered',
        '96% contract price compliance',
      ],
    },
    quote: {
      text: 'The quote desk went from bottleneck to advantage. We see every discount before it goes out, not after it hits margin.',
      author: 'Chief Revenue Officer',
    },
    seo: {
      metaTitle: 'Revenue Management Automation for a National Distributor | Case Study',
      metaDescription:
        'A national distributor priced thousands of quotes monthly against outdated rate cards. A revenue management engine cut quote turnaround from 3 days to 4 hours and recovered 2.1pp of gross margin.',
    },
  },
  {
    slug: 'agentic-commerce',
    industry: 'Retail',
    title: 'Agentic Commerce Enablement',
    subtitle: 'for a Specialty Retailer',
    card: {
      title: 'Agentic Commerce',
      subtitle: 'Specialty Retailer',
      metrics: [
        { value: '24/7', label: 'Agent Channel' },
        { value: '11%', label: 'Orders via Agents' },
      ],
    },
    metrics: [
      { value: '11%', label: 'Of Orders', description: 'Placed by AI Agents' },
      { value: '+18%', label: 'AOV', description: 'On Agent-Assisted Orders' },
      { value: '<1s', label: 'Catalog', description: 'Agent Query Response' },
    ],
    challenge: {
      intro:
        'A specialty retailer watched AI shopping agents fail against its storefront: product data was built for human eyes, checkout assumed a browser session, and every agent-driven order fell back to email and manual entry.',
      painPoints: [
        'Product catalog unreadable to AI shopping agents',
        'Checkout flows assumed a human browser session',
        'Agent-driven orders fell back to email and manual rekeying',
        'No guardrails for payments or order limits on automated buyers',
      ],
    },
    solution: {
      intro: 'We made the storefront a first-class surface for AI agents:',
      components: [
        {
          title: 'Agent-ready catalog',
          description:
            'Structured product, pricing, and availability data served through an MCP storefront',
        },
        {
          title: 'Agentic checkout',
          description:
            'Authenticated agent ordering with payment mandates, limits, and full audit trails',
        },
        {
          title: 'Conversational ordering',
          description:
            'A reorder and recommendation agent for B2B customers on top of the same surface',
        },
      ],
      timeline: '9 weeks from kickoff to production',
    },
    results: {
      before: [
        'Agent traffic bounced or failed',
        'Manual rekeying of emailed orders',
        'No visibility into agent buyers',
        'Single human-only sales channel',
      ],
      after: [
        '11% of orders placed by agents',
        'Zero-touch agent checkout',
        'Every agent order authenticated and logged',
        'A 24/7 machine-readable sales channel',
      ],
    },
    quote: {
      text: 'Agents were already trying to buy from us — we just could not serve them. Now they are our fastest-growing channel.',
      author: 'VP Digital Commerce',
    },
    seo: {
      metaTitle: 'Agentic Commerce Enablement for a Specialty Retailer | Case Study',
      metaDescription:
        'A specialty retailer made its storefront agent-ready: MCP catalog, authenticated agentic checkout with payment guardrails, and conversational reordering. 11% of orders now placed by AI agents.',
    },
  },
]

// Representative aggregate outcomes shown on the case-studies list page.
export const caseStudiesAggregateStats: CardMetric[] = [
  { value: '6–8 wks', label: 'To Production' },
  { value: '8–12%', label: 'Purchasing Savings' },
  { value: '3d → 4hr', label: 'Quote Turnaround' },
  { value: '+2.1pp', label: 'Gross Margin' },
]

export const caseStudiesBySlug: Record<string, CaseStudy> = Object.fromEntries(
  caseStudies.map((c) => [c.slug, c])
)

export const caseStudySlugs: string[] = caseStudies.map((c) => c.slug)
