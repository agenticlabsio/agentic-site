'use client';
import { useState } from 'react';
import Footer from '@/components/Footer';
import ContactFormSection from '@/components/ContactFormSection';

const solutions = [
  {
    title: 'Intelligent Agents',
    description: 'Autonomous systems that handle ticket routing, data entry, report generation—freeing teams for high-value decisions.',
    metric: '40+ hrs',
    metricLabel: 'reclaimed per team weekly',
    href: '/solutions/intelligent-agents',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Customer Service Automation',
    description: 'Resolve tickets without human intervention, while maintaining quality and customer satisfaction.',
    metric: '60%',
    metricLabel: 'tickets auto-resolved',
    href: '/solutions/customer-service-automation',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: 'Document Processing',
    description: 'Extract data from invoices, contracts, and forms in seconds—not hours. Zero manual data entry required.',
    metric: '94%',
    metricLabel: 'extraction accuracy',
    href: '/solutions/document-processing',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Context Management',
    description: 'Enterprise knowledge systems that understand your business and provide relevant answers instantly.',
    metric: 'Unified',
    metricLabel: 'knowledge access',
    href: '/solutions/context-management',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    title: 'Agentic Evaluation',
    description: 'Comprehensive testing and monitoring systems to ensure AI performance and reliability at scale.',
    metric: '99.9%',
    metricLabel: 'uptime guaranteed',
    href: '/solutions/agentic-evaluation',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'AI Governance & Security',
    description: 'Enterprise-grade security, compliance, and governance frameworks for AI deployments.',
    metric: 'SOC 2',
    metricLabel: 'Type II certified',
    href: '/solutions/ai-governance-security',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

const caseStudyMetrics = [
  { value: '$3.2M+', label: 'Average First-Year Savings' },
  { value: '50+', label: 'Systems Deployed' },
  { value: '8 Weeks', label: 'To Production' },
  { value: '0', label: 'Failed Projects' },
];

export default function PortfolioPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Industries', href: '/industries' },
    { label: 'Case Studies', href: '/case-studies' },
  ];

  return (
    <div className="relative min-h-screen bg-white">
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <a href="/" className="text-xl font-display text-stone-900">
              Agentic Labs
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    item.href === '/portfolio'
                      ? 'text-brand-600'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white rounded-xl text-sm font-medium transition-all duration-200 shadow-lg shadow-brand-600/25"
              >
                Book Strategy Call
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-stone-700 p-2"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-stone-200">
              <nav className="flex flex-col space-y-2">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="text-stone-600 hover:text-stone-900 py-2 px-4 rounded-lg hover:bg-stone-50 transition-colors font-medium text-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-4 px-4 py-3 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-medium text-sm text-center transition-colors"
                >
                  Book Strategy Call
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="bg-white pt-28 pb-16 lg:pt-36 lg:pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 border border-brand-100 mb-8">
              <span className="w-2 h-2 bg-brand-600 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-brand-700">
                Enterprise AI Solutions
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-stone-900 tracking-[-0.02em] mb-6 max-w-4xl mx-auto">
              Our Work
            </h1>

            <p className="text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
              Production-ready AI systems deployed across Fortune 500 enterprises.
              Every solution ships in 8 weeks with full IP transfer.
            </p>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="bg-stone-50 py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl text-stone-900 tracking-[-0.02em] mb-4">
                Solutions We Build
              </h2>
              <p className="text-xl text-stone-600 max-w-2xl mx-auto">
                End-to-end AI systems that integrate with your existing infrastructure.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map((solution, index) => (
                <a
                  key={index}
                  href={solution.href}
                  className="group bg-white rounded-2xl border border-stone-200 p-6 shadow-sm hover:shadow-md hover:border-brand-200 transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 mb-5 group-hover:bg-brand-100 transition-colors">
                    {solution.icon}
                  </div>

                  <h3 className="text-lg font-semibold text-stone-900 mb-2 group-hover:text-brand-600 transition-colors">
                    {solution.title}
                  </h3>

                  <p className="text-stone-600 text-sm leading-relaxed mb-4">
                    {solution.description}
                  </p>

                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-display text-brand-600">
                      {solution.metric}
                    </span>
                    <span className="text-sm text-stone-500">
                      {solution.metricLabel}
                    </span>
                  </div>

                  <div className="mt-4 flex items-center gap-1 text-sm text-brand-600 font-medium group-hover:gap-2 transition-all">
                    Learn more
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Metrics */}
        <section className="bg-white py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl text-stone-900 tracking-[-0.02em] mb-4">
                Proven Results
              </h2>
              <p className="text-xl text-stone-600 max-w-2xl mx-auto">
                Real outcomes from real deployments across enterprise clients.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {caseStudyMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="bg-stone-50 rounded-2xl border border-stone-200 p-6 text-center"
                >
                  <div className="text-3xl sm:text-4xl font-display text-brand-600 mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm text-stone-600">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a
                href="/case-studies"
                className="inline-flex items-center gap-2 px-7 py-4 bg-white hover:bg-stone-50 border-2 border-stone-200 hover:border-stone-300 text-stone-700 rounded-xl font-medium text-lg transition-all duration-200"
              >
                View Case Studies
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <ContactFormSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
