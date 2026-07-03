import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/newsite/Footer'
import { MarketingHeader, type MarketingNavItem } from '@/components/marketing/MarketingHeader'
import { CtaSection } from '@/components/marketing/sections/CtaSection'

export const metadata: Metadata = {
  title: 'Platform | Agentic Labs',
  description:
    'The governance, integration, and control layer behind every agent we ship — running in your VPC or on your own hardware.',
  alternates: { canonical: '/platform' },
}

const navItems: MarketingNavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Industries', href: '/industries' },
  { label: 'Case Studies', href: '/case-studies' },
]

const capabilities = [
  {
    title: 'Model Context Protocol (MCP)',
    description: 'Universal protocol for AI-to-data connectivity. Like USB-C for AI systems.',
    icon: '🔌',
  },
  {
    title: 'Multi-Agent Orchestration',
    description: 'Deploy specialized agents that collaborate on complex tasks with defined boundaries.',
    icon: '🤖',
  },
  {
    title: 'Bounded Autonomy',
    description: 'AI agents with clear operational limits, escalation paths, and human oversight.',
    icon: '🔒',
  },
  {
    title: 'Zero-Copy Integration',
    description: 'Access data where it lives. No migration, no duplication, no data sprawl.',
    icon: '🔗',
  },
  {
    title: 'Complete Audit Trails',
    description: 'Every agent action logged—who, what, when, why. SOC 2 compliant.',
    icon: '📋',
  },
  {
    title: 'Evaluation Framework',
    description: 'Measure task success, accuracy, cost-per-action, and business outcomes.',
    icon: '📊',
  },
]

const integrations = [
  { name: 'Salesforce', category: 'CRM', href: '/platform/integrations/salesforce' },
  { name: 'Workday', category: 'HCM', href: '/platform/integrations/workday' },
  { name: 'Databricks', category: 'Analytics', href: '/platform/integrations/databricks' },
  { name: 'SAP', category: 'ERP', href: '/platform/integrations/sap' },
  { name: 'NetSuite', category: 'ERP', href: '/platform/integrations/netsuite' },
]

const arrowIcon = (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
)

export default function PlatformPage() {
  return (
    <div className="newsite relative min-h-screen">
      <MarketingHeader items={navItems} activeHref="/platform" ctaHref="/#contact" />

      <main className="pt-16">
        <section className="bg-white/[0.02] px-4 pt-20 pb-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <p className="text-brand-600 mb-4 text-sm font-semibold tracking-wide uppercase">Platform</p>
            <h1 className="font-display mb-4 text-4xl font-bold tracking-tight text-stone-50 sm:text-5xl lg:text-6xl">
              Production infrastructure for <span className="text-brand-400">agents that act.</span>
            </h1>
            <p className="font-body mb-8 max-w-2xl text-xl text-stone-300">
              The governance, integration, and control layer behind every agent we ship — running in
              your VPC or on your own hardware, plugged into the systems you already run. No migration.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/#contact"
                className="bg-brand-600 hover:bg-brand-700 shadow-brand-600/25 font-display inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold text-white shadow-lg transition-all duration-200"
              >
                Book a Strategy Call
                {arrowIcon}
              </Link>
              <Link
                href="/platform/integrations"
                className="font-display inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3 font-semibold text-stone-300 transition-colors hover:bg-white/5"
              >
                View Integrations
              </Link>
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-display mb-4 text-3xl font-bold text-stone-50">Platform Capabilities</h2>
            <p className="font-body mb-12 max-w-2xl text-lg text-stone-300">
              The building blocks behind agents that reach production and stay governed.
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((cap, index) => (
                <div key={index} className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
                  <div className="mb-4 text-3xl">{cap.icon}</div>
                  <h3 className="font-display mb-2 text-lg font-bold text-stone-50">{cap.title}</h3>
                  <p className="font-body text-stone-300">{cap.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white/[0.02] px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h2 className="font-display mb-2 text-3xl font-bold text-stone-50">Integrations</h2>
                <p className="font-body text-lg text-stone-300">Native connectors to your systems of record</p>
              </div>
              <Link
                href="/platform/integrations"
                className="text-brand-600 font-display hidden items-center gap-2 font-semibold md:inline-flex"
              >
                View all integrations
                {arrowIcon}
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
              {integrations.map((integration, index) => (
                <Link
                  key={index}
                  href={integration.href}
                  className="hover:border-brand-400/50 group rounded-xl border border-white/10 bg-white/[0.03] p-6 text-center transition-all hover:shadow-[0_16px_48px_-12px_rgba(91,141,255,0.25)]"
                >
                  <div className="font-display group-hover:text-brand-300 mb-1 text-xl font-bold text-stone-50 transition-colors">
                    {integration.name}
                  </div>
                  <div className="font-body text-sm text-stone-400">{integration.category}</div>
                </Link>
              ))}
            </div>
            <Link
              href="/platform/integrations"
              className="text-brand-600 font-display mt-6 inline-flex items-center gap-2 font-semibold md:hidden"
            >
              View all integrations
              {arrowIcon}
            </Link>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-display mb-4 text-3xl font-bold text-stone-50">How It Works</h2>
            <p className="font-body mb-12 max-w-2xl text-lg text-stone-300">
              AI agents layer on top of your existing infrastructure
            </p>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <div className="text-center">
                  <div className="bg-brand-500/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h3 className="font-display mb-2 text-lg font-bold text-stone-50">Your Data</h3>
                  <p className="font-body text-sm text-stone-300">
                    Salesforce, Workday, Databricks, SAP, and your existing systems
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-brand-500/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                    <span className="text-2xl">🔌</span>
                  </div>
                  <h3 className="font-display mb-2 text-lg font-bold text-stone-50">MCP Layer</h3>
                  <p className="font-body text-sm text-stone-300">
                    Model Context Protocol provides secure, standardized access
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-brand-500/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <h3 className="font-display mb-2 text-lg font-bold text-stone-50">AI Agents</h3>
                  <p className="font-body text-sm text-stone-300">
                    Autonomous agents with bounded autonomy and audit trails
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CtaSection
          bg="slate"
          headline="See it running on your stack."
          description="30 minutes. We'll show you how agents plug into the systems you already run — and where one pays back first."
          buttonLabel="Book a Strategy Call"
          href="/#contact"
        />
      </main>

      <Footer />
    </div>
  )
}
