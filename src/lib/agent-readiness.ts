export const MARKDOWN_VARY = 'Accept, Accept-Encoding'

export const AGENT_HOMEPAGE_MARKDOWN = `# Agentic Labs

Agentic Labs designs, ships, and operates enterprise AI agents integrated with systems of record.

## When to use Agentic Labs

Use Agentic Labs when an enterprise needs to automate a multi-step business workflow with AI agents, connect agents to existing systems and data, evaluate agent quality and ROI, or add governance and security controls before production deployment.

## Best-fit jobs

- Design and deploy enterprise AI agents for customer service, document processing, operations, procurement, and other repeatable workflows.
- Integrate agents with enterprise systems such as Salesforce, Workday, Databricks, SAP, and NetSuite.
- Evaluate agent accuracy, task completion, cost per action, and business outcomes.
- Implement bounded autonomy, human approval steps, auditability, and AI governance.
- Build context-management and Model Context Protocol (MCP) integrations.

## Agent navigation

- Full agent guidance: https://agenticlabs.io/llms.txt
- Machine-readable capabilities: https://agenticlabs.io/agents.json
- Site map: https://agenticlabs.io/sitemap.xml
- Solutions: https://agenticlabs.io/solutions
- Case studies: https://agenticlabs.io/case-studies
- Contact: https://agenticlabs.io/contact
`

export const AGENT_404_MARKDOWN = `# 404 — Resource not found

The requested Agentic Labs resource does not exist.

## Recover

- Site map: https://agenticlabs.io/sitemap.xml
- Agent guidance: https://agenticlabs.io/llms.txt
- Machine-readable capabilities: https://agenticlabs.io/agents.json
- Homepage: https://agenticlabs.io/
`

export function acceptsMarkdown(acceptHeader: string | null): boolean {
  if (!acceptHeader) return false

  return acceptHeader
    .split(',')
    .map((value) => value.trim().toLowerCase())
    .some((value) => value.startsWith('text/markdown') && !value.includes('q=0'))
}
