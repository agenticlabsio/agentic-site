import type { Faq, Seo } from './types'

// Canonical industries data — consolidated from the former three sources
// (industries/[slug] detail `industriesData`, industries list cards, and
// industries/[slug]/seo.ts). Detail-page content is canonical; the list card's
// `description` is preserved as `cardDescription`, distinct from the detail
// `heroDescription`.

export interface MarketStat {
  stat: string
  source?: string
}

export interface IndustryChallenge {
  challenge: string
  description: string
}

export interface IndustryAiSolution {
  title: string
  description: string
  metric?: string
}

export interface ComplianceItem {
  standard: string
  description?: string
}

export interface Industry {
  slug: string
  name: string
  /** Short headline metric shown on cards and the detail hero (e.g. "$5M+ Annual Savings"). */
  tagline: string
  /** Emoji icon used on cards and the detail hero. */
  icon: string
  featured?: boolean
  /** Short description used on the industries list card. */
  cardDescription: string
  /** Longer description shown under the title on the detail page hero. */
  heroDescription: string
  targetAudience: string
  marketContext: MarketStat[]
  challenges: IndustryChallenge[]
  aiSolutions: IndustryAiSolution[]
  integrations: string[]
  compliance: ComplianceItem[]
  roiMetrics: string[]
  faqs: Faq[]
  /** Slugs of related solutions (deep links to /solutions/[slug]). */
  relatedSolutions: string[]
  seo: Seo
}

export const industries: Industry[] = [
  {
    slug: 'healthcare',
    name: 'Healthcare',
    tagline: '$2M+ Annual Admin Savings',
    icon: '🏥',
    featured: true,
    cardDescription:
      'agentic automation for patient intake, clinical documentation, and scheduling. HIPAA compliant.',
    heroDescription:
      'agentic automation that reduces administrative burden on clinical staff, speeds up patient intake, and improves care delivery—all while maintaining HIPAA compliance.',
    targetAudience: 'Health systems, large practices, healthcare IT companies ($500M-$10B)',
    marketContext: [
      { stat: 'A large share of healthcare spending goes to administrative tasks', source: 'McKinsey' },
      {
        stat: 'Physicians spend 2 hours on paperwork for every hour of patient care',
        source: 'AMA',
      },
      {
        stat: 'Most physicians report burnout symptoms related to administrative burden',
      },
    ],
    challenges: [
      {
        challenge: 'Administrative burden on clinical staff',
        description:
          'Physicians spend more time on paperwork than patient care, leading to burnout and inefficiency.',
      },
      {
        challenge: 'Patient intake bottlenecks',
        description:
          'Manual data entry, form completion, and verification slow down patient flow.',
      },
      {
        challenge: 'Documentation requirements',
        description:
          'Clinical documentation demands consume hours that could be spent on patient care.',
      },
      {
        challenge: 'Interoperability challenges',
        description: 'Data siloed across EHR systems, making care coordination difficult.',
      },
    ],
    aiSolutions: [
      {
        title: 'Patient Intake Automation',
        description:
          'agentic forms, document extraction, and verification reduce manual entry and wait times.',
        metric: '$2M+ annual savings for health systems',
      },
      {
        title: 'Clinical Documentation',
        description: 'agentic note generation from voice or text, with human review and approval.',
        metric: '6-8 week implementation',
      },
      {
        title: 'Scheduling Optimization',
        description: 'Intelligent scheduling that maximizes utilization while reducing wait times.',
        metric: 'ROI proof within 90 days',
      },
      {
        title: 'Prior Authorization',
        description: 'Automated prior auth submission and follow-up, reducing delays and denials.',
        metric: '$2M+ annual savings for health systems',
      },
    ],
    integrations: [
      'Epic',
      'Cerner',
      'Workday',
      'Salesforce Health Cloud',
      'athenahealth',
      'Allscripts',
    ],
    compliance: [
      { standard: 'HIPAA', description: 'Full HIPAA compliance with BAA execution' },
      { standard: 'SOC 2 Type II', description: 'Independently audited security controls' },
      { standard: 'HITRUST', description: 'Healthcare-specific security framework alignment' },
    ],
    roiMetrics: [
      'Major reduction in administrative burden',
      'Faster patient intake processing, live within 6-8 weeks',
      '$2M+ annual savings for mid-size health systems',
      'ROI proof within 90 days of deployment',
    ],
    faqs: [
      {
        question: 'How does AI improve healthcare operations without compromising patient safety?',
        answer:
          'Our agentic systems are designed for administrative tasks only—scheduling, documentation, billing, intake. Clinical decisions remain with licensed providers. All AI outputs are flagged for human review before affecting patient care.',
      },
      {
        question: 'Is your healthcare AI HIPAA compliant?',
        answer:
          'Yes. We maintain full HIPAA compliance including BAA execution, encryption at rest and in transit, access controls, and audit logging. Your PHI never leaves your environment.',
      },
      {
        question: 'How do you integrate with Epic and other EHR systems?',
        answer:
          'We use certified Epic APIs (FHIR, SMART on FHIR) and similar interfaces for Cerner, athenahealth, and other EHRs. No custom development required on your side.',
      },
      {
        question: 'What ROI can healthcare organizations expect?',
        answer:
          'Mid-size health systems typically see major reductions in administrative burden, $2M+ annual savings, and meaningful gains in provider utilization. ROI proof within 90 days of deployment.',
      },
      {
        question: 'How long does healthcare AI implementation take?',
        answer:
          '6-8 weeks from discovery to production. We start with a focused use case (e.g., patient intake) and expand based on results.',
      },
    ],
    relatedSolutions: [
      'document-processing',
      'customer-service-automation',
      'ai-governance-security',
    ],
    seo: {
      metaTitle: 'AI Solutions for Healthcare | HIPAA Compliant | Agentic Labs',
      metaDescription:
        'agentic automation for healthcare: patient intake, clinical documentation, appointment scheduling. HIPAA compliant. Cut administrative burden with ROI proof within 90 days.',
    },
  },
  {
    slug: 'manufacturing',
    name: 'Manufacturing',
    tagline: '$5M+ Annual Savings',
    icon: '🏭',
    cardDescription:
      'Predictive maintenance, quality control, and supply chain optimization for Industry 4.0.',
    heroDescription:
      'agentic predictive maintenance, quality control, and supply chain optimization that reduces downtime and improves throughput for modern manufacturing.',
    targetAudience: 'Mid-market manufacturers, industrial companies ($500M-$10B)',
    marketContext: [
      { stat: 'Average cost of unplanned downtime: $260K per hour', source: 'Aberdeen' },
      {
        stat: 'Most manufacturers have experienced unplanned downtime in the past 3 years',
      },
      {
        stat: 'Predictive maintenance can meaningfully cut the $260K-per-hour cost of unplanned downtime',
        source: 'McKinsey',
      },
    ],
    challenges: [
      {
        challenge: 'Unplanned downtime',
        description:
          'Equipment failures cost $260K/hour on average, with cascading production impacts.',
      },
      {
        challenge: 'Quality control consistency',
        description: 'Manual inspection misses defects and creates bottlenecks.',
      },
      {
        challenge: 'Supply chain volatility',
        description: 'Demand forecasting errors lead to overstock or stockouts.',
      },
      {
        challenge: 'Skilled labor shortages',
        description: 'Retiring workforce knowledge needs to be captured and automated.',
      },
    ],
    aiSolutions: [
      {
        title: 'Predictive Maintenance',
        description: 'AI monitors equipment health and predicts failures before they occur.',
        metric: '$5M+ annual savings for manufacturers',
      },
      {
        title: 'Quality Inspection',
        description: 'Computer vision systems detect defects with superhuman accuracy.',
        metric: 'Near-perfect defect detection accuracy',
      },
      {
        title: 'Demand Forecasting',
        description: 'agentic forecasting reduces inventory carrying costs.',
        metric: 'Lower inventory carrying costs',
      },
      {
        title: 'Process Optimization',
        description: 'Continuous optimization of production parameters for yield and efficiency.',
        metric: 'Meaningful throughput gains',
      },
    ],
    integrations: [
      'SAP',
      'Oracle',
      'Microsoft Dynamics',
      'Rockwell Automation',
      'Siemens MES',
      'Epicor',
    ],
    compliance: [
      { standard: 'ISO 9001', description: 'Quality management system compatibility' },
      { standard: 'ISO 27001', description: 'Information security management' },
      { standard: 'Industry 4.0', description: 'Smart manufacturing standards alignment' },
    ],
    roiMetrics: [
      'Major reduction in unplanned downtime',
      'Near-perfect defect detection accuracy',
      'Lower inventory carrying costs',
      '$5M+ annual savings for mid-size manufacturers',
    ],
    faqs: [
      {
        question: 'How does predictive maintenance AI work?',
        answer:
          'We deploy sensors on critical equipment that feed data to foundation models. These models learn normal operating patterns and detect anomalies that precede failures, alerting maintenance teams before breakdowns occur.',
      },
      {
        question: 'Can AI integrate with our existing MES and ERP systems?',
        answer:
          'Yes. We integrate with SAP, Oracle, Rockwell, Siemens, and other major manufacturing systems through standard APIs and industrial protocols (OPC-UA, MQTT).',
      },
      {
        question: 'What about edge deployment for real-time decisions?',
        answer:
          'We deploy foundation models at the edge for real-time inference—critical for time-sensitive decisions like quality inspection and process control. Edge systems sync with cloud for model updates and analytics.',
      },
      {
        question: 'How do you handle legacy equipment without sensors?',
        answer:
          'We can retrofit sensors on legacy equipment or use existing data sources (vibration, temperature, power consumption) that most equipment already generates.',
      },
      {
        question: 'What ROI can manufacturers expect?',
        answer:
          'Mid-size manufacturers typically see major reductions in downtime and inventory carrying costs, plus $5M+ annual savings. ROI proof within 90 days.',
      },
    ],
    relatedSolutions: ['intelligent-agents', 'document-processing', 'agentic-evaluation'],
    seo: {
      metaTitle: 'AI Solutions for Manufacturing | Predictive Maintenance | Agentic Labs',
      metaDescription:
        'agentic automation for manufacturing: predictive maintenance, quality control, supply chain optimization. Major downtime reduction, proven in 90 days. Integrates with existing MES and ERP.',
    },
  },
  {
    slug: 'retail',
    name: 'Retail',
    tagline: '$750K+ Freed From Inventory',
    icon: '🛒',
    cardDescription:
      'Demand forecasting, customer service automation, and omnichannel optimization.',
    heroDescription:
      'agentic demand forecasting, customer service automation, and omnichannel optimization that reduces inventory costs and improves customer experience.',
    targetAudience: 'Mid-market retailers, e-commerce companies ($500M-$10B)',
    marketContext: [
      {
        stat: 'Retailers lose $1.75T annually due to overstock and out-of-stock situations',
        source: 'IHL Group',
      },
      { stat: 'The majority of consumers expect personalized experiences', source: 'Salesforce' },
      {
        stat: 'agentic inventory optimization can free up hundreds of thousands of dollars in carrying costs for a mid-market retailer',
      },
    ],
    challenges: [
      {
        challenge: 'Inventory optimization',
        description:
          'Balancing overstock (carrying costs) vs stockout (lost sales) is a constant struggle.',
      },
      {
        challenge: 'Omnichannel customer experience',
        description: 'Customers expect a consistent experience across web, mobile, and store.',
      },
      {
        challenge: 'Order management complexity',
        description: 'Fulfillment from multiple locations with varying inventory levels.',
      },
      {
        challenge: 'Labor cost pressures',
        description: 'Rising wages require automation to maintain margins.',
      },
    ],
    aiSolutions: [
      {
        title: 'Demand Forecasting',
        description: 'AI predicts demand by SKU, location, and time period with high accuracy.',
        metric: '$750K+ freed from inventory carrying costs',
      },
      {
        title: 'Customer Service AI',
        description: 'Unified AI handles inquiries across chat, email, and phone.',
        metric: 'ROI proof within 90 days',
      },
      {
        title: 'Order Processing',
        description: 'Automated order routing, fulfillment optimization, and exception handling.',
        metric: 'High automation rate for order routing',
      },
      {
        title: 'Personalization',
        description: 'agentic product recommendations and personalized marketing.',
        metric: 'Meaningful lift in conversion rate',
      },
    ],
    integrations: [
      'Salesforce Commerce',
      'SAP Retail',
      'Shopify Plus',
      'Oracle Retail',
      'Manhattan WMS',
      'Blue Yonder',
    ],
    compliance: [
      { standard: 'PCI DSS', description: 'Payment card industry data security' },
      { standard: 'SOC 2', description: 'Security and privacy controls' },
      { standard: 'GDPR/CCPA', description: 'Consumer privacy regulations' },
    ],
    roiMetrics: [
      'Major reduction in inventory carrying costs',
      '$750K+ freed from inventory carrying costs',
      'Faster customer service resolution, live within 90 days',
      'Meaningful lift in conversion rate',
    ],
    faqs: [
      {
        question: 'How accurate is AI demand forecasting for retail?',
        answer:
          'Our foundation models achieve high forecast accuracy at the SKU-location level, significantly outperforming traditional statistical methods. Accuracy improves over time as the model learns your specific patterns.',
      },
      {
        question: 'Can AI handle seasonal and promotional demand?',
        answer:
          'Yes. Our models incorporate seasonality, promotions, events, and external factors (weather, economic indicators) to predict demand spikes and adjust recommendations accordingly.',
      },
      {
        question: 'How do you integrate with existing retail systems?',
        answer:
          'We integrate with major retail platforms (Salesforce Commerce, SAP, Shopify Plus) and warehouse systems through standard APIs. No rip-and-replace required.',
      },
      {
        question: 'What about omnichannel order fulfillment?',
        answer:
          'Our AI optimizes fulfillment routing across stores, DCs, and dropship suppliers based on inventory availability, shipping cost, and delivery speed requirements.',
      },
      {
        question: 'What ROI can retailers expect?',
        answer:
          'Mid-market retailers typically see major reductions in inventory carrying costs, $750K+ freed from carrying costs, and meaningful conversion improvement. ROI proof within 90 days.',
      },
    ],
    relatedSolutions: ['customer-service-automation', 'document-processing', 'intelligent-agents'],
    seo: {
      metaTitle: 'AI Solutions for Retail | Inventory Optimization | Agentic Labs',
      metaDescription:
        'agentic automation for retail: inventory forecasting, customer service, order management. $750K+ freed from inventory carrying costs. Integrates with existing POS and ERP.',
    },
  },
  {
    slug: 'energy',
    name: 'Energy',
    tagline: 'Stronger Grid Reliability',
    icon: '⚡',
    cardDescription:
      'Grid optimization, predictive maintenance, and renewable integration for utilities.',
    heroDescription:
      'agentic grid optimization, predictive maintenance, and demand forecasting that improves reliability and enables renewable integration for utilities and energy producers.',
    targetAudience: 'Utilities, energy producers, grid operators ($500M-$10B)',
    marketContext: [
      { stat: 'Most energy CEOs rank AI as a top investment priority', source: 'KPMG' },
      { stat: 'The vast majority of utility CIOs plan to increase AI investments in 2025' },
      {
        stat: 'agentic energy efficiency could generate $1.3T in value by 2030',
        source: 'McKinsey',
      },
    ],
    challenges: [
      {
        challenge: 'Grid stability with renewable integration',
        description: 'Variable renewable output creates grid balancing challenges.',
      },
      {
        challenge: 'Aging infrastructure maintenance',
        description: 'Legacy assets require proactive maintenance to prevent failures.',
      },
      {
        challenge: 'Demand forecasting accuracy',
        description: 'Inaccurate forecasts lead to over-generation or shortfalls.',
      },
      {
        challenge: 'Regulatory compliance',
        description: 'NERC CIP and other regulations require rigorous documentation.',
      },
    ],
    aiSolutions: [
      {
        title: 'Grid Optimization',
        description: 'AI-based load forecasting and balancing improves grid stability.',
        metric: 'ROI proof within 90 days',
      },
      {
        title: 'Predictive Maintenance',
        description: 'Monitor transformer health, line conditions, and predict failures.',
        metric: 'Fewer equipment failures',
      },
      {
        title: 'Renewable Integration',
        description: 'AI forecasting for solar and wind output enables better planning.',
        metric: 'Higher renewable availability',
      },
      {
        title: 'Demand Response',
        description: 'Intelligent demand response programs reduce peak load.',
        metric: 'Lower peak demand',
      },
    ],
    integrations: [
      'OSIsoft PI',
      'GE Grid Solutions',
      'Siemens Energy',
      'ABB Ability',
      'Oracle Utilities',
      'SAP IS-U',
    ],
    compliance: [
      { standard: 'NERC CIP', description: 'Critical infrastructure protection standards' },
      { standard: 'FERC', description: 'Federal energy regulatory compliance' },
      { standard: 'ISO 27001', description: 'Information security management' },
    ],
    roiMetrics: [
      'ROI proof within 90 days',
      'Fewer equipment failures',
      'Higher renewable availability',
      'Improved workforce productivity',
    ],
    faqs: [
      {
        question: 'How does AI improve grid stability?',
        answer:
          'foundation models predict demand and renewable output minutes to hours ahead, enabling operators to pre-position generation and storage resources. This reduces frequency deviations and improves overall grid reliability.',
      },
      {
        question: 'Can AI work with our legacy SCADA systems?',
        answer:
          'Yes. We integrate with existing SCADA, EMS, and historian systems through standard protocols (OPC, DNP3, IEC 61850). No replacement of critical infrastructure required.',
      },
      {
        question: 'What about cybersecurity for critical infrastructure?',
        answer:
          'Our systems are designed for OT environments with air-gapped deployment options, role-based access, encryption, and full audit trails. We support NERC CIP compliance requirements.',
      },
      {
        question: 'How do you handle NERC CIP compliance?',
        answer:
          'Our implementations include documentation, access controls, and audit trails required for NERC CIP compliance. We work with your compliance team to ensure all requirements are met.',
      },
      {
        question: 'What ROI can utilities expect?',
        answer:
          'Utilities typically see lower operational costs, fewer equipment failures, and improved workforce productivity. ROI proof within 90 days.',
      },
    ],
    relatedSolutions: ['intelligent-agents', 'agentic-evaluation', 'ai-governance-security'],
    seo: {
      metaTitle: 'AI Solutions for Energy & Utilities | Grid Optimization | Agentic Labs',
      metaDescription:
        'agentic automation for energy: grid optimization, predictive maintenance, demand forecasting. Lower operational costs and improve renewable availability. ROI proof within 90 days.',
    },
  },
  {
    slug: 'dealers-distributors',
    name: 'Dealers & Distributors',
    tagline: '$75K-$180K Annual Labor Savings',
    icon: '📦',
    cardDescription:
      'Order automation, inventory optimization, and quote generation for wholesale distribution.',
    heroDescription:
      'agentic order automation, inventory optimization, and quote generation that transforms wholesale distribution operations and cuts SaaS sprawl.',
    targetAudience:
      'Wholesale distributors, industrial dealers, B2B distribution companies ($500M-$10B)',
    marketContext: [
      { stat: 'AI in distribution projected to generate $100B in the US by 2025' },
      {
        stat: 'Most B2B sales interactions will occur in digital channels by 2025',
        source: 'Gartner',
      },
      {
        stat: 'GenAI can meaningfully improve EBIT margins for distributors',
        source: 'Deloitte',
      },
    ],
    challenges: [
      {
        challenge: 'Manual order entry',
        description:
          'Orders arrive via handwritten notes, PDFs, emails, voicemails—all requiring manual entry.',
      },
      {
        challenge: 'Multiple formats',
        description: 'Customers send orders in inconsistent formats that resist automation.',
      },
      {
        challenge: 'Inventory carrying costs',
        description: 'Thin margins make excess inventory a major profit drain.',
      },
      {
        challenge: 'Fragmented tech stack',
        description: 'ERP + WMS + CRM + 15+ point solutions create complexity and cost.',
      },
    ],
    aiSolutions: [
      {
        title: 'Order Entry Automation',
        description: 'AI processes any order format: handwritten, PDF, email, voicemail, spreadsheet.',
        metric: '$75K-$180K annual labor savings',
      },
      {
        title: 'Quote Generation',
        description: 'AI turns customer inquiries into quotes ready for ERP in minutes.',
        metric: 'Minutes, not hours',
      },
      {
        title: 'Inventory Optimization',
        description: 'Predictive demand forecasting reduces carrying costs.',
        metric: '$450K-$750K freed capital',
      },
      {
        title: 'Sales Rep Productivity',
        description: 'AI handles admin so reps can sell.',
        metric: 'More selling time, less admin work',
      },
    ],
    integrations: [
      'NetSuite',
      'SAP Business One',
      'Microsoft Dynamics',
      'Prophet 21',
      'Epicor',
      'Infor',
    ],
    compliance: [
      { standard: 'SOC 2', description: 'Security and privacy controls' },
      { standard: 'Data residency', description: 'US-based data storage' },
    ],
    roiMetrics: [
      '$50M distributor: $75K-$180K annual labor savings',
      '$3M inventory: $450K-$750K freed capital',
      'Meaningful EBIT margin improvement',
      'Major reduction in order entry time',
    ],
    faqs: [
      {
        question: 'How do agentic solutions handle non-standard order formats?',
        answer:
          'Our AI is trained to interpret any format: handwritten notes, PDFs, emails, spreadsheets, even voicemails. It extracts customer ID, products, quantities, and special instructions, then validates against your product catalog before ERP entry.',
      },
      {
        question: 'Does this integrate with our existing ERP?',
        answer:
          'Yes. We integrate with NetSuite, SAP Business One, Microsoft Dynamics, Prophet 21, Epicor, and other distribution ERPs through standard APIs. Orders flow directly into your system.',
      },
      {
        question: "What's the typical ROI timeline for distributors?",
        answer:
          'Most distributors see positive ROI within 6 months. A $50M distributor can expect $75K-$180K in annual labor savings plus $450K-$750K freed from inventory optimization.',
      },
      {
        question: 'Can AI learn our specific product catalog and pricing?',
        answer:
          'Yes. The AI learns your product catalog, customer-specific pricing, and ordering patterns. It gets smarter over time, handling more orders autonomously as confidence grows.',
      },
      {
        question: 'How does this replace SaaS point solutions?',
        answer:
          'Instead of separate tools for order capture, quoting, inventory planning, and customer communication, our agentic solutions handle these workflows in one integrated system—significantly cutting SaaS subscription costs and sprawl.',
      },
    ],
    relatedSolutions: ['document-processing', 'customer-service-automation', 'intelligent-agents'],
    seo: {
      metaTitle: 'AI Solutions for Dealers & Distributors | Order Automation | Agentic Labs',
      metaDescription:
        'agentic automation for dealers and distributors: order entry automation, inventory optimization ($450K-$750K freed capital), quote generation. Replace fragmented SaaS with unified agents.',
    },
  },
  {
    slug: 'power-electronics-fpga',
    name: 'Power Electronics & FPGA',
    tagline: 'Production-Ready in 6-8 Weeks',
    icon: '🔌',
    cardDescription:
      'agentic EDA tools for FPGA design, verification, and test automation.',
    heroDescription:
      'agentic EDA tools that accelerate FPGA design, verification, and test automation—shortening design cycles while maintaining quality.',
    targetAudience:
      'Semiconductor companies, FPGA design houses, power electronics manufacturers ($500M-$10B)',
    marketContext: [
      {
        stat: 'EDA software market: $14.55B in 2025 → $32.15B by 2034',
        source: 'Precedence Research',
      },
      {
        stat: 'agentic EDA tools dramatically boost productivity for complex design',
        source: 'Siemens',
      },
      { stat: 'Verification consumes the majority of development time' },
    ],
    challenges: [
      {
        challenge: 'Design complexity outpacing capacity',
        description: 'Designs grow more complex faster than engineering teams can scale.',
      },
      {
        challenge: 'Verification bottlenecks',
        description: 'The majority of development time goes to verification, not design.',
      },
      {
        challenge: 'Documentation lag',
        description: 'Specs fall out of sync with design changes, creating knowledge gaps.',
      },
      {
        challenge: 'Multi-vendor toolchain integration',
        description: 'Different tools for different stages create friction and errors.',
      },
    ],
    aiSolutions: [
      {
        title: 'Design Verification Automation',
        description: 'AI generates testbenches, coverage analysis, and simulation scenarios.',
        metric: 'Faster design iteration cycles',
      },
      {
        title: 'Documentation Generation',
        description: 'AI generates specs from RTL in real-time as design evolves.',
        metric: 'Always current',
      },
      {
        title: 'Layout Optimization',
        description: 'agentic placement and routing for performance metrics.',
        metric: 'Optimized Fmax',
      },
      {
        title: 'Test Automation',
        description: 'Automated test vector generation and coverage gap identification.',
        metric: 'High verification coverage',
      },
    ],
    integrations: [
      'Siemens EDA',
      'Cadence',
      'Synopsys',
      'AMD/Xilinx Vivado',
      'Intel Quartus',
      'Mentor Graphics',
    ],
    compliance: [
      { standard: 'ISO 26262', description: 'Automotive functional safety' },
      { standard: 'DO-254', description: 'Aerospace design assurance' },
      { standard: 'IEC 61508', description: 'Functional safety for industrial' },
    ],
    roiMetrics: [
      'Major reduction in design iteration cycles',
      'Faster documentation generation, always current',
      'High verification coverage',
      'Faster time-to-tape-out',
    ],
    faqs: [
      {
        question: 'How does AI improve FPGA verification throughput?',
        answer:
          'AI generates testbenches automatically from design specs, identifies coverage gaps, and prioritizes simulation scenarios that are most likely to find bugs. This reduces manual test writing and improves coverage efficiency.',
      },
      {
        question: 'Can AI generate documentation from our existing RTL?',
        answer:
          'Yes. Our AI analyzes your RTL and generates human-readable documentation including block diagrams, signal descriptions, timing diagrams, and interface specs. Documentation stays synchronized as design evolves.',
      },
      {
        question: 'What toolchains do you integrate with?',
        answer:
          'We integrate with Siemens EDA, Cadence, Synopsys, AMD/Xilinx Vivado, Intel Quartus, and other major EDA tools. Our AI works alongside your existing toolchain, not replacing it.',
      },
      {
        question: 'How do you handle safety-critical design requirements?',
        answer:
          'We support ISO 26262 (automotive), DO-254 (aerospace), and IEC 61508 (industrial) requirements with traceability, documentation, and verification evidence needed for certification.',
      },
      {
        question: 'What ROI can FPGA teams expect?',
        answer:
          'Design teams typically see major reductions in design cycles, faster documentation, and shorter time-to-tape-out. ROI proof within 90 days.',
      },
    ],
    relatedSolutions: ['context-management', 'agentic-evaluation', 'intelligent-agents'],
    seo: {
      metaTitle: 'AI for Power Electronics & FPGA Design | EDA Automation | Agentic Labs',
      metaDescription:
        'agentic EDA tools for FPGA design, verification, and testing. Faster design cycles and shorter time-to-tape-out. Works with Siemens, AMD/Xilinx, Intel toolchains. Production-ready in 6-8 weeks.',
    },
  },
  {
    slug: 'autonomy-vla-agents',
    name: 'Autonomy & vLA Agents',
    tagline: '$500K+ Annual Savings',
    icon: '🤖',
    cardDescription:
      'Vision-language-action agents for inspection, autonomous navigation, and predictive maintenance in physical operations.',
    heroDescription:
      'agentic systems built on vision-language-action (vLA) models—perception, task planning, and physical action in one loop—reducing downtime and improving throughput across automated fleets.',
    targetAudience:
      'Industrial automation companies, systems integrators, manufacturers with automated fleets ($500M-$10B)',
    marketContext: [
      { stat: 'Global industrial robot market: $16.7B, 542,076 units in 2024', source: 'IFR' },
      {
        stat: 'SAP Embodied AI delivers substantial downtime reduction and productivity gains',
        source: 'SAP',
      },
      { stat: 'Deal value in embodied AI: $7.3B in H1 2025' },
    ],
    challenges: [
      {
        challenge: 'Fleet programming expertise',
        description:
          'Specialized skills required for programming and maintaining automated systems.',
      },
      {
        challenge: 'Vision system tuning',
        description: 'Vision systems need constant adjustment for new products and conditions.',
      },
      {
        challenge: 'Multi-vendor integration',
        description: 'Fleets include hardware from multiple vendors with different interfaces.',
      },
      {
        challenge: 'Safety certification',
        description: 'Autonomous systems require rigorous safety assessment and documentation.',
      },
    ],
    aiSolutions: [
      {
        title: 'vLA Inspection Agents',
        description:
          'Vision-language-action agents detect defects in real time and adapt to new products with minimal examples.',
        metric: 'Near-perfect inspection accuracy',
      },
      {
        title: 'Autonomous Navigation',
        description: 'Path planning, obstacle avoidance, and fleet coordination.',
        metric: 'Dynamic adaptation',
      },
      {
        title: 'Human-Machine Orchestration',
        description: 'agentic task allocation and human-machine collaboration optimization.',
        metric: 'Safe collaboration',
      },
      {
        title: 'Predictive Maintenance',
        description: 'Anomaly detection across automated fleets predicts failures.',
        metric: '$500K+ annual savings across a fleet',
      },
    ],
    integrations: [
      'ABB',
      'FANUC',
      'KUKA',
      'Universal Robots',
      'Cognex',
      'Keyence',
      'Siemens PLC',
      'Rockwell',
    ],
    compliance: [
      { standard: 'ISO 10218-1/2', description: 'Robot safety standards' },
      { standard: 'ISO/TS 15066', description: 'Collaborative robot safety' },
      { standard: 'CE Marking', description: 'European conformity requirements' },
    ],
    roiMetrics: [
      '$500K+ annual savings from reduced downtime',
      'Meaningful productivity improvement',
      'Near-perfect defect detection accuracy',
      'Lower maintenance costs',
    ],
    faqs: [
      {
        question: 'How do you integrate with our existing automated fleet?',
        answer:
          'We support major automation platforms including ABB, FANUC, KUKA, and Universal Robots through their native APIs and standard industrial protocols. No replacement of existing hardware required.',
      },
      {
        question: 'Can vLA agents work safely in human-shared workspaces?',
        answer:
          'Yes. Our agents are designed for collaborative environments with safety monitoring, dynamic speed adjustment, and compliance with ISO/TS 15066 collaborative safety standards.',
      },
      {
        question: "What's the typical ROI timeline for vLA agents?",
        answer:
          'Manufacturers typically see positive ROI within 6 months through downtime reduction and productivity improvement. A fleet of 50 machines can save $500K+ annually in maintenance and downtime costs.',
      },
      {
        question: 'How do you handle safety certification?',
        answer:
          'We provide documentation, risk assessments, and validation evidence needed for ISO 10218 and ISO/TS 15066 compliance. Our team works with your safety engineers throughout certification.',
      },
      {
        question: 'Can the vision system learn new products without retraining?',
        answer:
          'Our self-learning vision systems adapt to new products with minimal examples—typically 10-20 images. The system continuously improves as it sees more production data.',
      },
    ],
    relatedSolutions: ['intelligent-agents', 'agentic-evaluation', 'ai-governance-security'],
    seo: {
      metaTitle: 'AI for Autonomy & vLA Agents | Industrial Automation | Agentic Labs',
      metaDescription:
        'agentic systems built on vision-language-action models: vision inspection, autonomous navigation, human-machine orchestration. $500K+ annual savings from reduced downtime. Integrates with existing fleets.',
    },
  },
  {
    slug: 'biotech-biologics-logistics',
    name: 'Biotech & Biologics Logistics',
    tagline: 'GxP Compliant',
    icon: '💊',
    cardDescription:
      'Cold chain monitoring, supply chain automation, and compliance documentation.',
    heroDescription:
      'agentic cold chain monitoring, supply chain automation, and compliance documentation that maintains GxP compliance while improving operational efficiency.',
    targetAudience:
      'Biologics manufacturers, biotech firms, specialty distributors, CDMOs ($500M-$10B)',
    marketContext: [
      {
        stat: 'AI applications could create $350-410B annual value for the industry',
        source: 'McKinsey',
      },
      { stat: 'Most industry professionals use AI for drug discovery', source: 'Industry survey' },
      {
        stat: 'GenAI can meaningfully improve EBIT margins for distributors',
        source: 'Deloitte',
      },
    ],
    challenges: [
      {
        challenge: 'Cold chain integrity',
        description:
          'Biologics and mRNA therapies require precise temperature control throughout the supply chain.',
      },
      {
        challenge: 'Regulatory compliance burden',
        description:
          'FDA, EMA, and GxP requirements demand extensive documentation and audit trails.',
      },
      {
        challenge: 'Complex supplier networks',
        description:
          'Multi-tier supplier relationships create visibility and risk management challenges.',
      },
      {
        challenge: 'Drug shortage prediction',
        description: 'Supply disruptions cause patient care issues and financial losses.',
      },
    ],
    aiSolutions: [
      {
        title: 'Cold Chain Monitoring',
        description: 'Real-time temperature tracking with predictive excursion alerts.',
        metric: 'Predictive alerts',
      },
      {
        title: 'Supply Chain Resilience',
        description: 'foundation models predict disruptions and recommend alternative sourcing.',
        metric: 'Proactive mitigation',
      },
      {
        title: 'Compliance Automation',
        description: 'Automated batch record review, regulatory documentation, serialization.',
        metric: 'Faster compliance review, ROI within 90 days',
      },
      {
        title: 'Drug Discovery Support',
        description: 'Literature mining, target identification, and clinical trial analysis.',
        metric: 'Meaningful reduction in discovery timelines',
      },
    ],
    integrations: [
      'SAP',
      'Oracle',
      'Veeva',
      'MasterControl',
      'TraceLink',
      'Sensitech',
      'Manhattan WMS',
    ],
    compliance: [
      { standard: 'FDA 21 CFR Part 11', description: 'Electronic records and signatures' },
      { standard: 'GxP (GMP, GDP, GLP)', description: 'Good practice regulations' },
      { standard: 'HIPAA', description: 'Patient data protection' },
      { standard: 'EU Annex 11', description: 'Computerized systems' },
    ],
    roiMetrics: [
      'Faster compliance documentation, proven within 90 days',
      'Meaningful reduction in early-stage discovery time',
      'Fewer cold chain excursion investigations',
      '$5M+ annual savings for mid-size biologics manufacturers',
    ],
    faqs: [
      {
        question: 'How does AI maintain GxP compliance?',
        answer:
          'Our systems are designed with GxP requirements built in: full audit trails, electronic signatures per 21 CFR Part 11, validated workflows, and change control documentation. All AI decisions are logged and explainable.',
      },
      {
        question: 'Can AI predict cold chain excursions before they happen?',
        answer:
          'Yes. Our AI monitors temperature trends, shipment conditions, and external factors (weather, carrier delays) to predict potential excursions and alert operators before product is compromised.',
      },
      {
        question: 'How do you handle FDA validation requirements?',
        answer:
          'We follow GAMP 5 methodology for system validation, provide IQ/OQ/PQ documentation, and support ongoing validation maintenance. Our systems are designed for regulated environments from the ground up.',
      },
      {
        question: "What's the ROI for biologics supply chain AI?",
        answer:
          'Mid-size biologics manufacturers typically see faster compliance documentation, fewer excursion investigations, and $5M+ annual savings. ROI proof within 90 days.',
      },
      {
        question: 'Can AI help with drug shortage prevention?',
        answer:
          'Yes. AI analyzes supply chain data, manufacturing capacity, and demand signals to predict potential shortages weeks or months in advance, enabling proactive mitigation.',
      },
    ],
    relatedSolutions: ['document-processing', 'ai-governance-security', 'context-management'],
    seo: {
      metaTitle: 'AI for Biotech & Biologics Logistics | Supply Chain Automation | Agentic Labs',
      metaDescription:
        'agentic automation for biologics logistics: cold chain monitoring, compliance documentation, drug discovery acceleration. HIPAA/GxP compliant. 6-8 weeks to production.',
    },
  },
]

export const industriesBySlug: Record<string, Industry> = Object.fromEntries(
  industries.map((i) => [i.slug, i]),
)

export const industrySlugs: string[] = industries.map((i) => i.slug)
