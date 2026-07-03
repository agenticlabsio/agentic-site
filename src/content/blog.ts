// Canonical blog seed data. Metadata + excerpts are the real copy from the
// (previously hardcoded) blog list; each post is seeded as a CMS record whose
// Lexical body an editor can expand in /admin. `body` blocks are converted to
// Lexical editor state by the seeder (src/seed/blog-lexical.ts). Categories use
// the BlogPosts collection's select values.

export type BlogCategory =
  | 'thought-leadership'
  | 'technical'
  | 'industry'
  | 'case-study'
  | 'how-to'
  | 'news'

export const BLOG_CATEGORY_LABELS: Record<BlogCategory, string> = {
  'thought-leadership': 'Thought Leadership',
  technical: 'Technical Deep-Dive',
  industry: 'Industry',
  'case-study': 'Case Study',
  'how-to': 'How-To Guide',
  news: 'News & Announcements',
}

// A body block is either a paragraph (string) or a section heading.
export type BlogBlock = string | { heading: string }

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: BlogCategory
  author: string
  /** ISO date used for publishedAt + Article schema. */
  publishedAt: string
  readTime: string
  featured?: boolean
  tags: string[]
  keyTakeaways: string[]
  body: BlogBlock[]
}

// Concise, editable seed bodies grounded in each post's existing excerpt — a
// lead plus a short structure. Editors flesh these out in the dashboard.
const lead = (excerpt: string): BlogBlock[] => [excerpt]

export const blogPosts: BlogPost[] = [
  {
    slug: 'agentic-ai-2026',
    title: 'Agentic AI in 2026: From Hype to "Is It Working?"',
    excerpt:
      '2026 is the year businesses finally ask "Is it working?" Only 19% of executives report >5% revenue increase from AI. Learn how to measure AI agent performance and prove ROI to stakeholders.',
    category: 'thought-leadership',
    author: 'Agentic Labs',
    publishedAt: '2026-01-28',
    readTime: '8 min read',
    featured: true,
    tags: ['ROI', 'measurement', 'strategy'],
    keyTakeaways: [
      'Tie every agent to a measurable business metric before you build it.',
      'Instrument outcomes, not model calls — track resolution rate, cycle time, and cost per task.',
      'Report ROI in the language of the P&L, not the language of the model.',
    ],
    body: [
      ...lead(
        '2026 is the year businesses stop asking whether AI is impressive and start asking whether it is working. The honest answer for most teams is: they cannot tell, because they never defined what "working" meant.',
      ),
      { heading: 'Measure outcomes, not activity' },
      'An agent that answers a thousand tickets is not valuable; an agent that resolves them without escalation is. Instrument the outcome — resolution rate, time-to-resolution, cost per task — and you can prove or disprove ROI in weeks, not quarters.',
      { heading: 'Prove it to the people who fund it' },
      'Executives fund what they can see on the P&L. Translate agent performance into the metrics your CFO already tracks, and the "is it working?" question answers itself.',
    ],
  },
  {
    slug: 'model-context-protocol-mcp',
    title: 'The Model Context Protocol (MCP): Why Your AI Agents Need It',
    excerpt:
      'MCP is the USB-C of AI connectivity. Learn how this standardization breakthrough enables AI applications to connect with data sources through a universal interface.',
    category: 'technical',
    author: 'Agentic Labs',
    publishedAt: '2026-01-24',
    readTime: '10 min read',
    tags: ['MCP', 'integration', 'architecture'],
    keyTakeaways: [
      'MCP standardizes how agents reach tools and data behind one interface.',
      'A shared protocol removes bespoke glue code between each model and each system.',
      'Systems of record become composable capabilities instead of one-off integrations.',
    ],
    body: [
      ...lead(
        'The Model Context Protocol is to AI connectivity what USB-C is to hardware: one interface that lets any agent talk to any tool or data source without a custom adapter for every pairing.',
      ),
      { heading: 'Why a protocol beats point integrations' },
      'Without a standard, every model-to-system connection is bespoke glue you have to build, secure, and maintain. MCP collapses that N×M problem into a single, reusable surface.',
      { heading: 'What it unlocks' },
      'Your systems of record — CRM, ERP, ticketing, data warehouse — become composable capabilities an agent can safely reach, with the boundaries and permissions you define.',
    ],
  },
  {
    slug: 'replace-saas-with-ai',
    title: 'Replace 10 SaaS Tools with One AI Agent: A Practical Guide',
    excerpt:
      'A growing business pays for dozens of overlapping SaaS seats. What if you needed a handful? How one custom agent can replace 5–10 point solutions while plugging into your systems of record.',
    category: 'how-to',
    author: 'Agentic Labs',
    publishedAt: '2026-01-20',
    readTime: '12 min read',
    tags: ['SaaS consolidation', 'cost reduction', 'how-to'],
    keyTakeaways: [
      'Map the workflows your SaaS seats actually serve before replacing anything.',
      'One agent that spans systems can retire several single-purpose tools.',
      'Consolidation pays back in seats, integration overhead, and context switching.',
    ],
    body: [
      ...lead(
        'A growing business quietly accumulates dozens of overlapping SaaS seats — one tool per task, each with its own login, data silo, and bill. A custom agent that plugs into your systems of record can collapse many of them into a single workflow.',
      ),
      { heading: 'Start from the workflow, not the tool' },
      'List the jobs those seats actually do. Most are thin wrappers around read/write operations against data you already own. An agent can perform those operations directly.',
      { heading: 'Consolidate deliberately' },
      'Replace the highest-friction, highest-cost workflow first, prove the savings, then expand. The goal is fewer tools doing more, not one tool doing everything.',
    ],
  },
  {
    slug: 'ai-dealers-distributors-order-entry',
    title: 'AI for Dealers & Distributors: 80% Faster Order Entry',
    excerpt:
      'Stop manually entering orders from handwritten notes. Learn how AI agents process any order format—PDF, email, voicemail, spreadsheet—and integrate directly with your ERP.',
    category: 'industry',
    author: 'Agentic Labs',
    publishedAt: '2026-01-18',
    readTime: '7 min read',
    tags: ['distribution', 'order entry', 'ERP'],
    keyTakeaways: [
      'Agents can normalize any order format into clean ERP records.',
      'Human review stays in the loop for exceptions, not every line.',
      'Faster entry means faster fulfillment and fewer transcription errors.',
    ],
    body: [
      ...lead(
        'Orders arrive as PDFs, emails, voicemails, and spreadsheets — and staff retype them into the ERP one line at a time. An agent can read any of those formats and produce clean, validated order records.',
      ),
      { heading: 'Any format in, structured order out' },
      'Extraction plus validation turns messy inputs into ERP-ready data, with confidence scoring so ambiguous lines route to a human instead of failing silently.',
    ],
  },
  {
    slug: 'fpga-design-automation-ai',
    title: 'AI-Enhanced FPGA Design: 25-40% Faster Verification Cycles',
    excerpt:
      'Siemens unveiled agentic AI for EDA at DAC 2025. Learn how AI-enhanced tools accelerate FPGA design, verification, and documentation.',
    category: 'industry',
    author: 'Agentic Labs',
    publishedAt: '2026-01-15',
    readTime: '9 min read',
    tags: ['FPGA', 'EDA', 'verification'],
    keyTakeaways: [
      'AI assistance targets the slowest part of the flow: verification.',
      'Generated documentation keeps pace with fast-moving RTL.',
      'Engineers stay in control; the agent handles the repetitive scaffolding.',
    ],
    body: [
      ...lead(
        'Agentic AI reached mainstream EDA conversation at DAC 2025. For FPGA teams, the near-term win is compressing verification — historically the longest pole in the schedule.',
      ),
      { heading: 'Where the time goes back' },
      'Testbench scaffolding, coverage analysis, and documentation are repetitive and rules-driven — exactly the work an agent can accelerate while engineers focus on design intent.',
    ],
  },
  {
    slug: 'enterprise-ai-governance',
    title: 'Enterprise AI Governance: Bounded Autonomy and Audit Trails',
    excerpt:
      "Who's responsible when an AI agent makes a mistake? Learn how bounded autonomy, escalation paths, and audit trails enable compliant enterprise AI deployment.",
    category: 'thought-leadership',
    author: 'Agentic Labs',
    publishedAt: '2026-01-12',
    readTime: '11 min read',
    tags: ['governance', 'compliance', 'audit'],
    keyTakeaways: [
      'Bounded autonomy defines what an agent may do without a human.',
      'Escalation paths turn uncertainty into a review, not a bad action.',
      'Audit trails make every agent decision explainable after the fact.',
    ],
    body: [
      ...lead(
        'The question that stalls enterprise AI is accountability: who owns the outcome when an agent gets it wrong? Governance answers it before deployment, not after an incident.',
      ),
      { heading: 'Bounded autonomy' },
      'Define the actions an agent may take unattended and the ones that require a human. Everything outside the boundary escalates.',
      { heading: 'Audit trails' },
      'Log inputs, decisions, and actions so every outcome is explainable and reviewable — the foundation of compliant deployment.',
    ],
  },
  {
    slug: 'robotics-ai-downtime-reduction',
    title: 'AI for Industrial Robotics: 50% Reduction in Unplanned Downtime',
    excerpt:
      "SAP's Embodied AI proves robotics ROI in production. Learn how vision AI, predictive maintenance, and autonomous navigation transform industrial automation.",
    category: 'industry',
    author: 'Agentic Labs',
    publishedAt: '2026-01-10',
    readTime: '8 min read',
    tags: ['robotics', 'predictive maintenance', 'manufacturing'],
    keyTakeaways: [
      'Predictive maintenance catches failures before they stop the line.',
      'Vision AI turns cameras into inspection and safety sensors.',
      'Autonomous navigation reduces manual material handling.',
    ],
    body: [
      ...lead(
        'Embodied AI has moved from demo to production. In industrial settings, the clearest ROI comes from keeping equipment running — predictive maintenance that flags failures weeks ahead.',
      ),
      { heading: 'Uptime is the metric' },
      'Vision-based inspection, anomaly detection, and autonomous navigation compound into fewer stoppages and safer floors.',
    ],
  },
  {
    slug: 'pharma-logistics-ai-cold-chain',
    title: 'Pharma Logistics AI: Cold Chain Monitoring and GxP Compliance',
    excerpt:
      'AI could create $350-410B annual value for pharma. Learn how AI maintains cold chain integrity, automates compliance documentation, and accelerates drug discovery.',
    category: 'industry',
    author: 'Agentic Labs',
    publishedAt: '2026-01-08',
    readTime: '10 min read',
    tags: ['pharma', 'cold chain', 'GxP'],
    keyTakeaways: [
      'Continuous monitoring protects cold-chain integrity in real time.',
      'Compliance documentation can be generated as work happens.',
      'The same data trail supports audits and investigations.',
    ],
    body: [
      ...lead(
        'Pharma logistics runs on two unforgiving constraints: temperature and paperwork. AI addresses both — watching the cold chain continuously and generating GxP documentation as events occur.',
      ),
      { heading: 'Integrity and evidence together' },
      'When monitoring and documentation share one data trail, compliance stops being a separate, manual step.',
    ],
  },
  {
    slug: 'energy-ai-grid-optimization',
    title: 'Energy Sector AI: Grid Optimization and Predictive Maintenance',
    excerpt:
      '65% of energy CEOs now rank AI as top investment. Learn how AI improves grid stability, enables renewable integration, and reduces operational costs.',
    category: 'industry',
    author: 'Agentic Labs',
    publishedAt: '2026-01-06',
    readTime: '9 min read',
    tags: ['energy', 'grid', 'renewables'],
    keyTakeaways: [
      'Forecasting balances variable renewable supply against demand.',
      'Predictive maintenance protects critical grid assets.',
      'Optimization trims operational cost without new hardware.',
    ],
    body: [
      ...lead(
        'Energy leaders now rank AI among their top investments, and the grid is where it pays off — balancing renewable variability, predicting asset failures, and squeezing out operational cost.',
      ),
      { heading: 'Stability under variability' },
      'Better forecasting and asset-level prediction keep an increasingly renewable grid stable.',
    ],
  },
  {
    slug: 'why-ai-projects-fail',
    title: "Most AI Pilots Never Ship. Here's the Pattern That Does.",
    excerpt:
      'MIT (2025) found ~95% of enterprise GenAI pilots deliver no measurable ROI — almost always a deployment problem, not a model one. The five reasons projects stall, and how SMEs beat the odds.',
    category: 'thought-leadership',
    author: 'Agentic Labs',
    publishedAt: '2026-01-04',
    readTime: '12 min read',
    tags: ['deployment', 'strategy', 'ROI'],
    keyTakeaways: [
      'Most pilots fail on deployment, integration, and ownership — not the model.',
      'Scope to one workflow, wire it to real systems, and ship it.',
      'A shipped narrow agent beats an impressive demo that never lands.',
    ],
    body: [
      ...lead(
        'Research on enterprise GenAI keeps finding the same thing: the vast majority of pilots deliver no measurable ROI, and the cause is almost never the model. It is deployment.',
      ),
      { heading: 'The pattern that ships' },
      'Pick one workflow with a clear metric. Integrate with the systems of record it touches. Put a human at the boundary. Ship it, measure it, then expand. Narrow and deployed beats broad and stuck.',
    ],
  },
]

export const blogPostSlugs = blogPosts.map((p) => p.slug)
