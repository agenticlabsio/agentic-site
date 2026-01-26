'use client';
import { useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';

const solutions = [
  {
    id: 'intelligent-agents',
    slug: 'intelligent-agents',
    name: 'Intelligent Agents',
    category: 'Core',
    description: 'Goal-driven autonomous AI agents that execute complex workflows, make decisions, and integrate with Salesforce, Workday, Databricks.',
    features: [
      'Multi-agent orchestration',
      'Tool calling & function execution',
      'Memory and context management',
      'Goal-driven task decomposition',
    ],
    metric: 'Autonomous',
    metricLabel: 'execution',
    featured: true,
  },
  {
    id: 'customer-service',
    slug: 'customer-service-automation',
    name: 'Customer Service Automation',
    category: 'Operations',
    description: 'Replace fragmented support tools with unified AI agents. 60% faster ticket resolution across all channels.',
    features: [
      'Multi-channel support automation',
      'Intelligent ticket routing',
      'Knowledge base integration',
      'Sentiment analysis & escalation',
    ],
    metric: '60% faster',
    metricLabel: 'resolution',
    caseStudyLink: '/case-studies/customer-service',
  },
  {
    id: 'document-processing',
    slug: 'document-processing',
    name: 'Document Processing',
    category: 'Operations',
    description: 'AI-powered document extraction, classification, and processing at scale. Works with any format.',
    features: [
      'Auto-classification and routing',
      'Entity extraction with 94%+ accuracy',
      'Human-in-the-loop exception handling',
      'Full audit trail and compliance',
    ],
    metric: '94%',
    metricLabel: 'accuracy',
    caseStudyLink: '/case-studies/document-processing',
  },
  {
    id: 'context-management',
    slug: 'context-management',
    name: 'Context Management',
    category: 'Platform',
    description: 'Contextualize enterprise data for AI agents. Knowledge graphs, semantic indexing, and Model Context Protocol (MCP) implementation.',
    features: [
      'Knowledge graph construction',
      'Semantic indexing for RAG',
      'Model Context Protocol (MCP)',
      'Zero-copy data access',
    ],
    metric: 'MCP',
    metricLabel: 'ready',
  },
  {
    id: 'agentic-evaluation',
    slug: 'agentic-evaluation',
    name: 'Agentic Evaluation',
    category: 'Platform',
    description: 'Measure what matters: AI agent accuracy, task completion, cost-per-action, and business outcomes. Prove ROI in 90 days.',
    features: [
      'Task success rate tracking',
      'Accuracy & hallucination monitoring',
      'Cost-per-action analysis',
      'Business outcome attribution',
    ],
    metric: '90 days',
    metricLabel: 'to ROI proof',
  },
  {
    id: 'ai-governance',
    slug: 'ai-governance-security',
    name: 'AI Governance & Security',
    category: 'Governance',
    description: 'Bounded autonomy, audit trails, policy enforcement, and compliance-ready AI agents. SOC 2 compliant.',
    features: [
      'Bounded autonomy controls',
      'Complete audit trails',
      'Policy enforcement engine',
      'Governance supervisor agents',
    ],
    metric: 'SOC 2',
    metricLabel: 'compliant',
  },
];

const categories = ['All', 'Core', 'Operations', 'Platform', 'Governance'];

export default function SolutionsPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  const items = [
    { label: "Home", href: "/" },
    { label: "Solutions", href: "/solutions" },
    { label: "Industries", href: "/industries" },
    { label: "Case Studies", href: "/case-studies" }
  ];

  const featured = solutions.find(s => s.featured);
  const filteredSolutions = activeCategory === 'All'
    ? solutions.filter(s => !s.featured)
    : solutions.filter(s => s.category === activeCategory && !s.featured);

  return (
    <div className="relative min-h-screen bg-white">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-xl font-bold text-stone-900">
              Agentic Labs
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              {items.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={`font-medium text-sm transition-colors ${
                    item.href === '/solutions' ? 'text-stone-900' : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/#contact"
                className="px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white rounded-lg text-sm font-medium transition-all duration-200 shadow-lg shadow-brand-600/25 hover:shadow-xl hover:shadow-brand-600/30"
              >
                Book a Call
              </Link>
            </nav>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-stone-700 p-2"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-stone-200">
              <nav className="flex flex-col space-y-2">
                {items.map((item, index) => (
                  <Link key={index} href={item.href} className="text-stone-600 hover:text-stone-900 py-2 px-4 rounded-lg hover:bg-stone-50 transition-colors font-medium text-sm" onClick={() => setIsMobileMenuOpen(false)}>
                    {item.label}
                  </Link>
                ))}
                <Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)} className="mt-4 px-4 py-3 bg-brand-600 hover:bg-brand-700 text-white rounded-lg font-medium text-sm text-center transition-colors">
                  Book a Call
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
            <p className="text-brand-600 font-medium text-sm uppercase tracking-wide mb-4">Solutions</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 tracking-tight mb-4">
              AI that ships to production.
            </h1>
            <p className="text-xl text-stone-600 max-w-2xl">
              Not demos. Not pilots. Production systems that deliver ROI from week one.
              Delivered in 8 weeks.
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
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeCategory === category
                      ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/25'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Solution */}
        {featured && activeCategory === 'All' && (
          <section className="pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-sm font-medium text-stone-400 uppercase tracking-wider mb-4">
                Featured Solution
              </div>
              <div className="bg-gradient-to-br from-stone-50 to-white rounded-2xl border border-stone-200 overflow-hidden shadow-lg">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8 md:p-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-50 text-brand-700 text-sm font-medium rounded-full mb-4">
                      {featured.category}
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-4">
                      {featured.name}
                    </h2>
                    <p className="text-stone-600 mb-6">
                      {featured.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {featured.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-stone-600">
                          <svg className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-4">
                      <Link
                        href={`/solutions/${featured.slug}`}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-medium transition-all duration-200 shadow-lg shadow-brand-600/25"
                      >
                        Learn More
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  <div className="bg-brand-600 p-8 md:p-10 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl lg:text-7xl font-bold text-white mb-2">
                        {featured.metric}
                      </div>
                      <div className="text-brand-100 text-lg">{featured.metricLabel}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* All Solutions Grid */}
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {activeCategory === 'All' && (
              <div className="text-sm font-medium text-stone-400 uppercase tracking-wider mb-4">
                All Solutions
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSolutions.map((solution) => (
                <Link
                  key={solution.id}
                  href={`/solutions/${solution.slug}`}
                  className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm hover:shadow-md hover:border-brand-200 transition-all duration-300 group block"
                >
                  <div className="inline-block px-3 py-1 bg-stone-100 text-stone-600 text-xs font-medium rounded-full mb-4">
                    {solution.category}
                  </div>
                  <h3 className="text-lg font-semibold text-stone-900 mb-2 group-hover:text-brand-600 transition-colors">
                    {solution.name}
                  </h3>
                  <p className="text-stone-600 text-sm mb-4 line-clamp-2">
                    {solution.description}
                  </p>
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-2xl font-bold text-brand-600">
                        {solution.metric}
                      </div>
                      <div className="text-sm text-stone-500">{solution.metricLabel}</div>
                    </div>
                    <div className="w-10 h-10 bg-stone-100 group-hover:bg-brand-600 rounded-full flex items-center justify-center text-stone-600 group-hover:text-white transition-all duration-200">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="bg-brand-600 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
              Not sure which solution fits?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              30 minutes. We&apos;ll map your workflows and tell you exactly what to build first.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-700 rounded-xl font-medium text-lg hover:bg-brand-50 transition-all duration-200 shadow-lg"
            >
              Book Your Strategy Call
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
