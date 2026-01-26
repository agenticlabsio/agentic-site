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
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-xl font-bold text-slate-900 font-display">
              Agentic Labs
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              {items.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={`font-medium text-sm transition-colors font-display ${
                    item.href === '/solutions' ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/#contact"
                className="px-5 py-2.5 bg-sky-500 hover:bg-sky-600 text-white rounded-lg text-sm font-semibold transition-all duration-200 shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/30 font-display"
              >
                Get In Touch
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
                {items.map((item, index) => (
                  <Link key={index} href={item.href} className="text-slate-600 hover:text-slate-900 py-2 px-4 rounded-lg hover:bg-slate-50 transition-colors font-medium text-sm font-display" onClick={() => setIsMobileMenuOpen(false)}>
                    {item.label}
                  </Link>
                ))}
                <Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)} className="mt-4 px-4 py-3 bg-sky-500 hover:bg-sky-600 text-white rounded-lg font-semibold text-sm text-center transition-colors font-display">
                  Get In Touch
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
            <p className="text-sky-500 font-semibold text-sm uppercase tracking-wide mb-4">Solutions</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-4 font-display">
              Enterprise AI Solutions
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl font-body">
              Production-ready AI systems that replace fragmented SaaS, accelerate engineering,
              and automate complex operations. Delivered in 6-8 weeks.
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
                      ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/25'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
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
              <div className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4 font-display">
                Featured Solution
              </div>
              <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200 overflow-hidden shadow-lg">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8 md:p-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 text-sky-700 text-sm font-medium rounded-full mb-4 font-display">
                      {featured.category}
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 font-display">
                      {featured.name}
                    </h2>
                    <p className="text-slate-600 mb-6 font-body">
                      {featured.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {featured.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-600 font-body">
                          <svg className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-4">
                      <Link
                        href={`/solutions/${featured.slug}`}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white rounded-xl font-semibold transition-all duration-200 shadow-lg shadow-sky-500/25 font-display"
                      >
                        Learn More
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  <div className="bg-sky-500 p-8 md:p-10 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl lg:text-7xl font-bold text-white mb-2 font-display">
                        {featured.metric}
                      </div>
                      <div className="text-sky-100 font-body text-lg">{featured.metricLabel}</div>
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
              <div className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4 font-display">
                All Solutions
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSolutions.map((solution) => (
                <Link
                  key={solution.id}
                  href={`/solutions/${solution.slug}`}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-sky-200 transition-all duration-300 group block"
                >
                  <div className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full mb-4 font-display">
                    {solution.category}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 font-display group-hover:text-sky-500 transition-colors">
                    {solution.name}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2 font-body">
                    {solution.description}
                  </p>
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-2xl font-bold text-sky-500 font-display">
                        {solution.metric}
                      </div>
                      <div className="text-sm text-slate-500 font-body">{solution.metricLabel}</div>
                    </div>
                    <div className="w-10 h-10 bg-slate-100 group-hover:bg-sky-500 rounded-full flex items-center justify-center text-slate-600 group-hover:text-white transition-all duration-200">
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
        <section id="contact" className="bg-sky-500 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4 font-display">
              Ready to see which solution fits your needs?
            </h2>
            <p className="text-xl text-white/80 mb-8 font-body">
              Book a 30-minute discovery call. We&apos;ll assess your workflows and recommend the right approach.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-sky-600 rounded-xl font-semibold text-lg hover:bg-sky-50 transition-all duration-200 shadow-lg font-display"
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
