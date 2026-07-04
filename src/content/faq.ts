import type { Faq } from './types'

// Canonical general-FAQ data — consolidated from the /resources/faq page
// (src/app/(frontend)/resources/faq/page.tsx). This is the site-wide FAQ list,
// distinct from the per-solution inline FAQs on src/content/solutions.ts.
// The FAQ collection mirrors this shape so the seed, the CMS, and the page
// share one source of truth.
export interface FaqCategory {
  /** Display name shown as the section heading and quick-jump label. */
  name: string
  /** URL-friendly anchor used for in-page navigation (e.g., "agentic-ai"). */
  slug: string
  faqs: Faq[]
}

export const faqCategories: FaqCategory[] = [
  {
    name: 'Agentic AI',
    slug: 'agentic-ai',
    faqs: [
      {
        question: 'What is agentic AI and how is it different from traditional AI?',
        answer:
          'Agentic AI refers to autonomous agentic systems that can pursue goals, make decisions, and take actions without constant human oversight. Unlike traditional AI that responds to single prompts, agentic AI can execute multi-step workflows, coordinate across systems, and adapt to changing conditions. Agentic Labs builds enterprise agentic systems that integrate with Salesforce, Workday, and Databricks to automate complex business processes.',
      },
      {
        question: 'What is the Model Context Protocol (MCP)?',
        answer:
          'The Model Context Protocol (MCP) is a standardization breakthrough developed by Anthropic that enables AI applications to connect with data sources, tools, and services through a universal interface—similar to how USB-C standardized hardware connectivity. MCP eliminates the need for custom integrations between agentic solutions and each data source. Agentic Labs implements MCP to give agentic solutions secure, contextualized access to enterprise data across Salesforce, Workday, SAP, and other systems of record.',
      },
      {
        question: 'How do you govern autonomous agentic solutions in enterprise settings?',
        answer:
          'Enterprise AI governance requires bounded autonomy, clear escalation paths, and comprehensive audit trails. Agentic Labs implements a governance framework that includes: (1) operational limits defining what each agent can and cannot do, (2) human-in-the-loop escalation for high-stakes decisions, (3) complete logging of all agent actions for compliance, and (4) governance agents that monitor other agentic systems for policy violations. We are SOC 2 compliant and ensure your data never leaves your environment.',
      },
    ],
  },
  {
    name: 'SaaS Replacement',
    slug: 'saas-replacement',
    faqs: [
      {
        question: 'Can agentic solutions replace SaaS point solutions?',
        answer:
          'Yes, agentic solutions are increasingly consolidating fragmented SaaS stacks. Enterprises average 150+ apps, creating complexity and cost. agentic solutions can integrate with multiple systems through APIs, performing tasks that previously required separate tools for email marketing, lead scoring, customer support, and more. Agentic Labs helps companies replace 5-10 point solutions with unified agentic solutions that layer on top of existing systems of record like Salesforce, Workday, and SAP.',
      },
      {
        question: 'What is the ROI of replacing SaaS tools with agentic solutions?',
        answer:
          'The savings come from two places: cutting overlapping SaaS subscriptions and taking manual labor out of a workflow. We instrument every agent so you can see the return, and we design to an honest payback window instead of a vanity number. As an industry benchmark, SMB agent projects commonly reach payback in about 4-6 months when they target one high-cost workflow rather than trying to boil the ocean. We report your numbers, not an average borrowed from someone else.',
      },
      {
        question: 'How do agentic solutions integrate with existing systems of record?',
        answer:
          'Agentic Labs provides zero-copy integration with major systems of record. Through partnerships like Workday Data Cloud and Salesforce-Databricks integration, our agentic solutions access your existing data without migration. We use native connectors and the Model Context Protocol (MCP) to give agents real-time, contextualized access to CRM, HCM, and analytics data. Your data stays in your environment—we orchestrate AI on top.',
      },
    ],
  },
  {
    name: 'Service & Process',
    slug: 'service-process',
    faqs: [
      {
        question: 'How long does it take to implement enterprise agentic solutions?',
        answer:
          'Agentic Labs delivers production-ready agentic systems in 6-8 weeks. Our process includes 1 week of discovery, 2 weeks of design, 3 weeks of build, and 2 weeks of deployment and monitoring. This is significantly faster than the typical 6-12 month timeline because we skip pilot phases and go directly to production systems with defined KPIs.',
      },
      {
        question: 'Why do most AI projects fail?',
        answer:
          'Industry research (MIT, 2025) found the vast majority of enterprise GenAI pilots deliver no measurable P&L impact — and it is almost always a deployment problem, not a model problem. The usual causes: (1) unclear ROI expectations, (2) 6-12 month timelines that lose stakeholder support, (3) treating AI as a "science project" with no production goal, (4) vendor lock-in, and (5) agents that do not understand the business. We address these by defining the number upfront, shipping in 6-8 weeks, grounding agents in your real data, and handing over production systems with full IP transfer.',
      },
      {
        question: 'What industries do you work with?',
        answer:
          'We work with US-based small and medium enterprises — roughly 10-500 employees — in sectors like Healthcare, Manufacturing, Retail, Energy, Dealers & Distributors, Power Electronics & FPGA, Autonomy & vLA Agents, and Biotech & Biologics Logistics. We handle the compliance that comes with them (HIPAA, GxP, NERC CIP) and design agents around those constraints from the first line.',
      },
    ],
  },
  {
    name: 'Security & Governance',
    slug: 'security-governance',
    faqs: [
      {
        question: 'How do you prevent AI hallucinations?',
        answer:
          'Multiple layers: context management grounds responses in real data, bounded autonomy limits agent scope, and validation steps check outputs before action. Our evaluation framework tracks hallucination rates and triggers alerts when they increase. We implement retrieval-augmented generation (RAG) with your actual business data to ensure accuracy.',
      },
      {
        question: 'What happens when an agent encounters an edge case?',
        answer:
          'Agents operate within bounded autonomy. When they encounter situations outside their defined boundaries, they escalate to human reviewers via Slack, email, or your preferred channel. The escalation is logged, the human decision is captured, and the system learns for future similar cases.',
      },
      {
        question: 'Is your AI infrastructure SOC 2 compliant?',
        answer:
          'Yes. Agentic Labs maintains SOC 2 Type II compliance with independently audited security controls. We also support HIPAA for healthcare, GxP for biologics, and industry-specific regulations. Your data never leaves your environment—we orchestrate AI on top of your existing infrastructure.',
      },
    ],
  },
]

// Flattened Q&A list — convenience export for FAQ schema and homepage widgets.
export const faqs: Faq[] = faqCategories.flatMap((category) => category.faqs)

export const faqCategoriesBySlug: Record<string, FaqCategory> = Object.fromEntries(
  faqCategories.map((category) => [category.slug, category]),
)

export const faqCategorySlugs: string[] = faqCategories.map((category) => category.slug)
