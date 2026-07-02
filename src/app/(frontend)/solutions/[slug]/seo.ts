// SEO metadata source of truth for solution detail pages.
// Kept alongside the (client) page so metadata lives in the server layout.
export const solutionsSeo: Record<string, { title: string; description: string }> = {
  'intelligent-agents': {
    title: 'Intelligent AI Agents for Enterprise',
    description:
      'Goal-driven autonomous AI agents that execute complex workflows, make decisions, and integrate with Salesforce, Workday, Databricks. Production-ready in 6-8 weeks.',
  },
  'customer-service-automation': {
    title: 'AI Customer Service Automation | 60% Faster Resolution',
    description:
      'Replace fragmented support tools with unified AI agents. 60% faster ticket resolution. Integrates with Salesforce Service Cloud, Zendesk, ServiceNow.',
  },
  'document-processing': {
    title: 'Intelligent Document Processing | 94% Accuracy',
    description:
      'AI-powered document extraction, classification, and processing at scale. 94% accuracy rate. Integrates with existing ERP and systems of record.',
  },
  'context-management': {
    title: 'Enterprise AI Context Management | MCP-Ready',
    description:
      'Contextualize enterprise data for AI agents. Knowledge graphs, semantic indexing, and Model Context Protocol (MCP) implementation. Enable AI that understands your business.',
  },
  'agentic-evaluation': {
    title: 'Agentic AI Evaluation & Performance Measurement',
    description:
      'Measure what matters: AI agent accuracy, task completion, cost-per-action, and business outcomes. Move from "Is it working?" to proven ROI in 90 days.',
  },
  'ai-governance-security': {
    title: 'Enterprise AI Governance & Security | SOC 2 Compliant',
    description:
      'Bounded autonomy, audit trails, policy enforcement, and compliance-ready AI agents. SOC 2 compliant. Your data never leaves your environment.',
  },
}
