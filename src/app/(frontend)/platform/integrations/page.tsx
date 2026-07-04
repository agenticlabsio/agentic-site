import Link from 'next/link'
import { CtaSection } from '@/components/marketing/sections/CtaSection'
import { Button } from '@/components/ui/Button'
import { IntegrationsFilterGrid, type IntegrationData } from './IntegrationsFilterGrid'

// Metadata for /platform/integrations is provided by ./layout.tsx.
const integrations: IntegrationData[] = [
  {
    slug: 'salesforce',
    name: 'Salesforce',
    category: 'CRM',
    description:
      'Native integration with Salesforce Sales Cloud, Service Cloud, and Marketing Cloud. Bi-directional sync with full API access.',
    features: ['Real-time data sync', 'Custom object support', 'Workflow triggers', 'OAuth 2.0 auth'],
  },
  {
    slug: 'workday',
    name: 'Workday',
    category: 'HCM',
    description:
      'Connect to Workday HCM, Financial Management, and Workday Data Cloud. Access people and financial data securely.',
    features: ['HCM integration', 'Financial data access', 'Report-as-a-Service', 'Workday Data Cloud'],
  },
  {
    slug: 'databricks',
    name: 'Databricks',
    category: 'Analytics',
    description:
      'Access your lakehouse data directly. Run queries, trigger jobs, and use ML models through the agentic system layer.',
    features: ['SQL Warehouse access', 'Unity Catalog support', 'MLflow models', 'Job orchestration'],
  },
  {
    slug: 'sap',
    name: 'SAP',
    category: 'ERP',
    description:
      'Integration with SAP S/4HANA, SAP Business One, and SAP Business ByDesign. Full transactional support.',
    features: ['BAPI/RFC access', 'OData services', 'IDoc processing', 'Real-time events'],
  },
  {
    slug: 'netsuite',
    name: 'NetSuite',
    category: 'ERP',
    description:
      'Oracle NetSuite integration for financials, inventory, and order management. SuiteTalk API access.',
    features: ['SuiteTalk integration', 'Saved searches', 'Custom records', 'Workflow triggers'],
  },
  {
    slug: 'servicenow',
    name: 'ServiceNow',
    category: 'ITSM',
    description: 'ServiceNow ITSM, CSM, and HR Service Delivery integration. Automate ticket handling and workflows.',
    features: ['Incident management', 'Request fulfillment', 'Knowledge base', 'Flow Designer'],
  },
  {
    slug: 'microsoft-365',
    name: 'Microsoft 365',
    category: 'Productivity',
    description: 'Outlook, Teams, SharePoint, and OneDrive integration. Access emails, files, and collaboration tools.',
    features: ['Graph API access', 'Teams messaging', 'SharePoint files', 'Calendar management'],
  },
  {
    slug: 'slack',
    name: 'Slack',
    category: 'Communication',
    description: 'Slack workspace integration for notifications, commands, and interactive workflows.',
    features: ['Bot messages', 'Slash commands', 'Interactive modals', 'Channel management'],
  },
]

const checkIcon = (
  <svg className="text-brand-600 mt-0.5 h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
)

const arrowIcon = (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
)

export default function IntegrationsPage() {
  return (
    <main className="pt-16">
        <section className="px-4 pt-20 pb-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <nav className="mb-6">
              <ol className="flex items-center gap-2 text-sm">
                <li>
                  <Link href="/" className="text-stone-500 hover:text-stone-600">
                    Home
                  </Link>
                </li>
                <li className="text-stone-500">/</li>
                <li>
                  <Link href="/platform" className="text-stone-500 hover:text-stone-600">
                    Platform
                  </Link>
                </li>
                <li className="text-stone-500">/</li>
                <li className="font-medium text-stone-900">Integrations</li>
              </ol>
            </nav>

            <p className="text-brand-600 mb-4 text-sm font-semibold tracking-wide uppercase">Integrations</p>
            <h1 className="font-display mb-4 text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl">
              Plug into what you <span className="text-brand-600">already run.</span>
            </h1>
            <p className="font-body max-w-2xl text-xl text-stone-600">
              Native connectors to your systems of record. Zero-copy access &mdash; your data stays where it
              lives. No migration.
            </p>
          </div>
        </section>

        <IntegrationsFilterGrid integrations={integrations} />

        <section className="bg-stone-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-8 text-center">
              <h2 className="font-display mb-4 text-2xl font-bold text-stone-900">Need a custom integration?</h2>
              <p className="font-body mx-auto mb-6 max-w-2xl text-stone-600">
                We build custom connectors for proprietary systems as part of our implementation.
                If it has an API, we can integrate it.
              </p>
              <Button href="/#contact" variant="primary">
                Discuss Your Integration
                {arrowIcon}
              </Button>
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display mb-4 text-3xl font-bold text-stone-900">
                Powered by Model Context Protocol
              </h2>
              <p className="font-body mb-6 text-lg text-stone-600">
                MCP is the USB-C of AI connectivity. Instead of building custom integrations for each data source,
                we implement a universal protocol that provides secure, standardized access.
              </p>
              <ul className="space-y-3">
                {[
                  'Universal interface for all data sources',
                  'Zero-copy access—data stays where it lives',
                  'Secure, audited data access',
                  'No lock-in — swap models and tools without a rebuild',
                ].map((item, i) => (
                  <li key={i} className="font-body flex items-start gap-3 text-stone-600">
                    {checkIcon}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-8">
              <div className="text-center">
                <div className="mb-4 text-6xl">🔌</div>
                <h3 className="font-display mb-2 text-xl font-bold text-stone-900">MCP-Ready</h3>
                <p className="font-body text-stone-600">
                  All our integrations are built on MCP, ensuring compatibility with the emerging standard
                  for AI-to-data connectivity.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CtaSection
          bg="brand"
          headline="Ready to connect your systems?"
          description="30 minutes. Tell us your stack and we'll show you what an agent can reach."
          buttonLabel="Book a Discovery Call"
          href="/#contact"
        />
    </main>
  )
}
