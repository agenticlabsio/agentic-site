'use client';
import { useState } from 'react';
import Footer from '@/components/Footer';

const caseStudies = [
  {
    slug: 'document-processing',
    industry: 'Financial Services',
    title: 'Document Processing Automation',
    subtitle: 'Fortune 500 Bank',
    metrics: [
      { value: '12→6', label: 'Days' },
      { value: '$2.4M', label: 'Savings' },
      { value: '94%', label: 'Accuracy' },
    ],
    featured: true,
  },
  {
    slug: 'patient-intake',
    industry: 'Healthcare',
    title: 'Patient Intake Automation',
    subtitle: 'Regional Health System',
    metrics: [
      { value: '45%', label: 'Faster Processing' },
    ],
  },
  {
    slug: 'inventory-forecasting',
    industry: 'Retail',
    title: 'Inventory Forecasting',
    subtitle: 'National Retailer',
    metrics: [
      { value: '32%', label: 'Reduced Stockouts' },
    ],
  },
  {
    slug: 'predictive-maintenance',
    industry: 'Manufacturing',
    title: 'Predictive Maintenance',
    subtitle: 'Industrial Equipment',
    metrics: [
      { value: '35%', label: 'Less Downtime' },
    ],
  },
  {
    slug: 'claims-processing',
    industry: 'Insurance',
    title: 'Claims Processing',
    subtitle: 'National Insurer',
    metrics: [
      { value: '70%', label: 'Faster Adjudication' },
    ],
  },
];

const aggregateStats = [
  { value: '$3.2M+', label: 'Avg Savings' },
  { value: '50+', label: 'Systems Deployed' },
  { value: '42%', label: 'Faster Cycles' },
  { value: '8 Weeks', label: 'Avg Delivery' },
];

export default function CaseStudiesPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const featured = caseStudies.find(cs => cs.featured);
  const others = caseStudies.filter(cs => !cs.featured);

  const items = [
    { label: "Home", href: "/" },
    { label: "Solutions", href: "/solutions" },
    { label: "Case Studies", href: "/case-studies" }
  ];

  return (
    <div className="relative min-h-screen bg-white">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="/" className="text-xl font-bold text-slate-900 font-display">
              Agentic Labs
            </a>
            <nav className="hidden md:flex items-center gap-8">
              {items.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={`font-medium text-sm transition-colors font-display ${
                    item.href === '/case-studies' ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="px-5 py-2.5 bg-sky-500 hover:bg-sky-600 text-white rounded-lg text-sm font-semibold transition-all duration-200 shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/30 font-display"
              >
                Get In Touch
              </a>
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
                  <a key={index} href={item.href} className="text-slate-600 hover:text-slate-900 py-2 px-4 rounded-lg hover:bg-slate-50 transition-colors font-medium text-sm font-display" onClick={() => setIsMobileMenuOpen(false)}>
                    {item.label}
                  </a>
                ))}
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="mt-4 px-4 py-3 bg-sky-500 hover:bg-sky-600 text-white rounded-lg font-semibold text-sm text-center transition-colors font-display">
                  Get In Touch
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      <main className="pt-16">
        {/* Hero */}
        <section className="bg-white pt-20 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <p className="text-sm font-semibold text-sky-500 uppercase tracking-wider mb-3 font-display">
              Case Studies
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-4 font-display">
              Real results from real deployments.
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl font-body">
              Every project. Measurable outcomes.
            </p>
          </div>
        </section>

        {/* Featured Case Study */}
        {featured && (
          <section className="pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <a
                href={`/case-studies/${featured.slug}`}
                className="block bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200 overflow-hidden shadow-lg hover:shadow-xl hover:border-sky-200 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8 md:p-10">
                    <div className="inline-flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-sky-500 text-white text-xs font-semibold uppercase tracking-wider rounded-full font-display">
                        Featured
                      </span>
                      <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full font-display">
                        {featured.industry}
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2 font-display">
                      {featured.title}
                    </h2>
                    <p className="text-slate-500 mb-6 font-body">{featured.subtitle}</p>
                    <div className="inline-flex items-center gap-2 text-sky-500 font-semibold font-display">
                      Read Case Study
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                  <div className="bg-sky-500 p-8 md:p-10 flex items-center">
                    <div className="grid grid-cols-3 gap-6 w-full">
                      {featured.metrics.map((metric, i) => (
                        <div key={i} className="text-center">
                          <div className="text-3xl lg:text-4xl font-bold text-white mb-1 font-display">{metric.value}</div>
                          <div className="text-sm text-blue-100 font-body">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </section>
        )}

        {/* Case Studies Grid */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {others.map((cs) => (
                <a
                  key={cs.slug}
                  href={`/case-studies/${cs.slug}`}
                  className="block bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-sky-200 transition-all duration-300 group"
                >
                  <div className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full mb-4 font-display">
                    {cs.industry}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1 font-display">{cs.title}</h3>
                  <p className="text-slate-500 text-sm mb-4 font-body">{cs.subtitle}</p>
                  <div className="flex items-end justify-between">
                    <div className="flex gap-6">
                      {cs.metrics.map((metric, i) => (
                        <div key={i}>
                          <div className="text-lg font-bold text-sky-500 font-display">{metric.value}</div>
                          <div className="text-xs text-slate-500 font-body">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                    <div className="w-10 h-10 bg-slate-100 group-hover:bg-sky-500 rounded-full flex items-center justify-center text-slate-600 group-hover:text-white transition-all duration-200">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Aggregate Stats */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-center text-slate-400 text-sm font-semibold uppercase tracking-wider mb-10 font-display">
              Aggregate Results Across All Deployments
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {aggregateStats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-1 font-display">{stat.value}</div>
                  <div className="text-sm text-slate-500 font-body">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="bg-sky-500 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6 font-display">
              Want results like these?
            </h2>
            <a
              href="mailto:contact@agenticlabs.io?subject=Discovery%20Call%20Request"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-sky-600 rounded-xl font-semibold text-lg hover:bg-sky-50 transition-all duration-200 shadow-lg font-display"
            >
              Schedule Discovery Call
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
