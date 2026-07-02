'use client';
import { useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/newsite/Footer';

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
];

const integrations = [
  { name: 'Salesforce', category: 'CRM', href: '/platform/integrations/salesforce' },
  { name: 'Workday', category: 'HCM', href: '/platform/integrations/workday' },
  { name: 'Databricks', category: 'Analytics', href: '/platform/integrations/databricks' },
  { name: 'SAP', category: 'ERP', href: '/platform/integrations/sap' },
  { name: 'NetSuite', category: 'ERP', href: '/platform/integrations/netsuite' },
];

const navItems = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" }
];

export default function PlatformPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="newsite relative min-h-screen">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e1a]/80 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-xl font-bold text-stone-50 font-display">
              Agentic Labs
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-stone-300 hover:text-stone-50 font-medium text-sm transition-colors font-display"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/#contact"
                className="px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white rounded-lg text-sm font-semibold transition-all duration-200 shadow-lg shadow-brand-600/25 hover:shadow-xl hover:shadow-brand-600/30 font-display"
              >
                Book a Strategy Call
              </Link>
            </nav>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-stone-300 p-2"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/10">
              <nav className="flex flex-col space-y-2">
                {navItems.map((item, index) => (
                  <Link key={index} href={item.href} className="text-stone-300 hover:text-stone-50 py-2 px-4 rounded-lg hover:bg-white/5 transition-colors font-medium text-sm font-display" onClick={() => setIsMobileMenuOpen(false)}>
                    {item.label}
                  </Link>
                ))}
                <Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)} className="mt-4 px-4 py-3 bg-brand-600 hover:bg-brand-700 text-white rounded-lg font-semibold text-sm text-center transition-colors font-display">
                  Book a Strategy Call
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      <main className="pt-16">
        {/* Hero */}
        <section className="bg-white/[0.02] pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <p className="text-brand-600 font-semibold text-sm uppercase tracking-wide mb-4">Platform</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-50 tracking-tight mb-4 font-display">
              Production infrastructure for <span className="text-brand-400">agents that act.</span>
            </h1>
            <p className="text-xl text-stone-300 max-w-2xl mb-8 font-body">
              The governance, integration, and control layer behind every agent we ship — running in
              your VPC or on your own hardware, plugged into the systems you already run. No migration.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-semibold transition-all duration-200 shadow-lg shadow-brand-600/25 font-display"
              >
                Book a Strategy Call
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/platform/integrations"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/[0.03] border border-white/10 text-stone-300 rounded-xl font-semibold hover:bg-white/5 transition-colors font-display"
              >
                View Integrations
              </Link>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-stone-50 mb-4 font-display">Platform Capabilities</h2>
            <p className="text-lg text-stone-300 mb-12 max-w-2xl font-body">
              The building blocks behind agents that reach production and stay governed.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((cap, index) => (
                <div key={index} className="bg-white/[0.03] rounded-xl p-6 border border-white/10">
                  <div className="text-3xl mb-4">{cap.icon}</div>
                  <h3 className="text-lg font-bold text-stone-50 mb-2 font-display">{cap.title}</h3>
                  <p className="text-stone-300 font-body">{cap.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Preview */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-stone-50 mb-2 font-display">Integrations</h2>
                <p className="text-lg text-stone-300 font-body">Native connectors to your systems of record</p>
              </div>
              <Link
                href="/platform/integrations"
                className="hidden md:inline-flex items-center gap-2 text-brand-600 font-semibold font-display"
              >
                View all integrations
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {integrations.map((integration, index) => (
                <Link
                  key={index}
                  href={integration.href}
                  className="bg-white/[0.03] rounded-xl p-6 border border-white/10 hover:border-brand-400/50 hover:shadow-[0_16px_48px_-12px_rgba(91,141,255,0.25)] transition-all text-center group"
                >
                  <div className="text-xl font-bold text-stone-50 mb-1 font-display group-hover:text-brand-300 transition-colors">
                    {integration.name}
                  </div>
                  <div className="text-sm text-stone-400 font-body">{integration.category}</div>
                </Link>
              ))}
            </div>
            <Link
              href="/platform/integrations"
              className="md:hidden inline-flex items-center gap-2 text-brand-600 font-semibold font-display mt-6"
            >
              View all integrations
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Architecture Overview */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-stone-50 mb-4 font-display">How It Works</h2>
            <p className="text-lg text-stone-300 mb-12 max-w-2xl font-body">
              AI agents layer on top of your existing infrastructure
            </p>
            <div className="bg-white/[0.03] rounded-2xl p-8 border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h3 className="text-lg font-bold text-stone-50 mb-2 font-display">Your Data</h3>
                  <p className="text-stone-300 text-sm font-body">
                    Salesforce, Workday, Databricks, SAP, and your existing systems
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔌</span>
                  </div>
                  <h3 className="text-lg font-bold text-stone-50 mb-2 font-display">MCP Layer</h3>
                  <p className="text-stone-300 text-sm font-body">
                    Model Context Protocol provides secure, standardized access
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <h3 className="text-lg font-bold text-stone-50 mb-2 font-display">AI Agents</h3>
                  <p className="text-stone-300 text-sm font-body">
                    Autonomous agents with bounded autonomy and audit trails
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-slate-900 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4 font-display">
              See it running on your stack.
            </h2>
            <p className="text-xl text-slate-300 mb-8 font-body">
              30 minutes. We&apos;ll show you how agents plug into the systems you already run —
              and where one pays back first.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg font-display"
            >
              Book a Strategy Call
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
