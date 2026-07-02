'use client';
import { useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';

const integrations = [
  {
    slug: 'salesforce',
    name: 'Salesforce',
    category: 'CRM',
    description: 'Native integration with Salesforce Sales Cloud, Service Cloud, and Marketing Cloud. Bi-directional sync with full API access.',
    features: ['Real-time data sync', 'Custom object support', 'Workflow triggers', 'OAuth 2.0 auth'],
  },
  {
    slug: 'workday',
    name: 'Workday',
    category: 'HCM',
    description: 'Connect to Workday HCM, Financial Management, and Workday Data Cloud. Access people and financial data securely.',
    features: ['HCM integration', 'Financial data access', 'Report-as-a-Service', 'Workday Data Cloud'],
  },
  {
    slug: 'databricks',
    name: 'Databricks',
    category: 'Analytics',
    description: 'Access your lakehouse data directly. Run queries, trigger jobs, and use ML models through the AI agent layer.',
    features: ['SQL Warehouse access', 'Unity Catalog support', 'MLflow models', 'Job orchestration'],
  },
  {
    slug: 'sap',
    name: 'SAP',
    category: 'ERP',
    description: 'Integration with SAP S/4HANA, SAP Business One, and SAP Business ByDesign. Full transactional support.',
    features: ['BAPI/RFC access', 'OData services', 'IDoc processing', 'Real-time events'],
  },
  {
    slug: 'netsuite',
    name: 'NetSuite',
    category: 'ERP',
    description: 'Oracle NetSuite integration for financials, inventory, and order management. SuiteTalk API access.',
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
];

const categories = ['All', 'CRM', 'HCM', 'Analytics', 'ERP', 'ITSM', 'Productivity', 'Communication'];

const navItems = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" }
];

export default function IntegrationsPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredIntegrations = activeCategory === 'All'
    ? integrations
    : integrations.filter(i => i.category === activeCategory);

  return (
    <div className="relative min-h-screen bg-white">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-xl font-bold text-slate-900 font-display">
              Agentic Labs
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-slate-600 hover:text-slate-900 font-medium text-sm transition-colors font-display"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/#contact"
                className="px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white rounded-lg text-sm font-semibold transition-all duration-200 shadow-lg shadow-brand-600/25 hover:shadow-xl hover:shadow-brand-600/30 font-display"
              >
                Book Strategy Call
              </Link>
            </nav>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-slate-700 p-2"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-200">
              <nav className="flex flex-col space-y-2">
                {navItems.map((item, index) => (
                  <Link key={index} href={item.href} className="text-slate-600 hover:text-slate-900 py-2 px-4 rounded-lg hover:bg-slate-50 transition-colors font-medium text-sm font-display" onClick={() => setIsMobileMenuOpen(false)}>
                    {item.label}
                  </Link>
                ))}
                <Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)} className="mt-4 px-4 py-3 bg-brand-600 hover:bg-brand-700 text-white rounded-lg font-semibold text-sm text-center transition-colors font-display">
                  Book Strategy Call
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      <main className="pt-16">
        {/* Hero */}
        <section className="bg-white pt-20 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-6">
              <ol className="flex items-center gap-2 text-sm">
                <li><Link href="/" className="text-slate-500 hover:text-slate-700">Home</Link></li>
                <li className="text-slate-400">/</li>
                <li><Link href="/platform" className="text-slate-500 hover:text-slate-700">Platform</Link></li>
                <li className="text-slate-400">/</li>
                <li className="text-slate-900 font-medium">Integrations</li>
              </ol>
            </nav>

            <p className="text-brand-600 font-semibold text-sm uppercase tracking-wide mb-4">Integrations</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-4 font-display">
              Enterprise Integrations
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl font-body">
              Native connectors to your systems of record. Zero-copy data access—your data stays where it lives.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="pb-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 font-display ${
                    activeCategory === category
                      ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/25'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Grid */}
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredIntegrations.map((integration) => (
                <div
                  key={integration.slug}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-brand-200 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 font-display">{integration.name}</h3>
                      <span className="text-sm text-brand-600 font-medium font-display">{integration.category}</span>
                    </div>
                  </div>
                  <p className="text-slate-600 mb-4 font-body">{integration.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {integration.features.map((feature, i) => (
                      <span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full font-display">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Integration */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-8 border border-slate-200 text-center">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 font-display">Need a custom integration?</h2>
              <p className="text-slate-600 mb-6 max-w-2xl mx-auto font-body">
                We build custom connectors for proprietary systems as part of our implementation.
                If it has an API, we can integrate it.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-semibold transition-all duration-200 font-display"
              >
                Discuss Your Integration
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* MCP Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4 font-display">
                  Powered by Model Context Protocol
                </h2>
                <p className="text-lg text-slate-600 mb-6 font-body">
                  MCP is the USB-C of AI connectivity. Instead of building custom integrations for each data source,
                  we implement a universal protocol that provides secure, standardized access.
                </p>
                <ul className="space-y-3">
                  {[
                    'Universal interface for all data sources',
                    'Zero-copy access—data stays where it lives',
                    'Secure, audited data access',
                    'Future-proof your AI infrastructure',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 font-body">
                      <svg className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                <div className="text-center">
                  <div className="text-6xl mb-4">🔌</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 font-display">MCP-Ready</h3>
                  <p className="text-slate-600 font-body">
                    All our integrations are built on MCP, ensuring compatibility with the emerging standard
                    for AI-to-data connectivity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-brand-600 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4 font-display">
              Ready to connect your systems?
            </h2>
            <p className="text-xl text-white/80 mb-8 font-body">
              Book a discovery call to discuss your integration requirements.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-700 rounded-xl font-semibold text-lg hover:bg-brand-50 transition-all duration-200 shadow-lg font-display"
            >
              Schedule Discovery Call
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
