import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata(
  '/platform/integrations',
  'Enterprise Integrations',
  'Connect agentic solutions to Salesforce, Workday, Databricks, SAP, NetSuite and more. Pre-built enterprise integrations with your systems of record.',
)

export default function IntegrationsLayout({ children }: { children: React.ReactNode }) {
  return children
}
