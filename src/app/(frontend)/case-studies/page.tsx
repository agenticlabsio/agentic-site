'use client';
import { useState } from 'react';
import Footer from '@/components/newsite/Footer';

const caseStudies = [
  {
    slug: 'document-processing',
    industry: 'Financial Services',
    title: 'Document Processing Automation',
    subtitle: 'Mid-Market Bank',
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
  { value: '6–8 wks', label: 'To Production' },
  { value: '94%', label: 'Extraction Accuracy' },
  { value: '60%', label: 'Faster Resolution' },
  { value: '40%', label: 'Cost Reduction' },
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
    <div className="newsite relative min-h-screen">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e1a]/80 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="/" className="text-xl font-bold text-stone-50">
              Agentic Labs
            </a>
            <nav className="hidden md:flex items-center gap-8">
              {items.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={`font-medium text-sm transition-colors ${
                    item.href === '/case-studies' ? 'text-stone-50' : 'text-stone-300 hover:text-stone-50'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white rounded-lg text-sm font-medium transition-all duration-200 shadow-lg shadow-brand-600/25 hover:shadow-xl hover:shadow-brand-600/30"
              >
                Book a Strategy Call
              </a>
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
                {items.map((item, index) => (
                  <a key={index} href={item.href} className="text-stone-300 hover:text-stone-50 py-2 px-4 rounded-lg hover:bg-white/5 transition-colors font-medium text-sm" onClick={() => setIsMobileMenuOpen(false)}>
                    {item.label}
                  </a>
                ))}
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="mt-4 px-4 py-3 bg-brand-600 hover:bg-brand-700 text-white rounded-lg font-medium text-sm text-center transition-colors">
                  Book a Strategy Call
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      <main className="pt-16">
        {/* Hero */}
        <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <p className="text-sm font-medium text-brand-600 uppercase tracking-wider mb-3">
              Case Studies
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-50 tracking-tight mb-4 font-display">
              Proof, <span className="text-brand-400">not promises.</span>
            </h1>
            <p className="text-xl text-stone-300 max-w-2xl">
              Real workflows for small and mid-market teams — measurable outcomes and honest numbers,
              not a demo that never shipped.
            </p>
          </div>
        </section>

        {/* Featured Case Study */}
        {featured && (
          <section className="pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <a
                href={`/case-studies/${featured.slug}`}
                className="block bg-white/[0.02] rounded-2xl border border-white/10 overflow-hidden shadow-lg hover:shadow-[0_16px_48px_-12px_rgba(91,141,255,0.25)] hover:border-brand-400/50 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8 md:p-10">
                    <div className="inline-flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-brand-600 text-white text-xs font-medium uppercase tracking-wider rounded-full">
                        Featured
                      </span>
                      <span className="px-3 py-1 bg-white/5 text-stone-300 text-xs font-medium rounded-full">
                        {featured.industry}
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-stone-50 mb-2">
                      {featured.title}
                    </h2>
                    <p className="text-stone-400 mb-6">{featured.subtitle}</p>
                    <div className="inline-flex items-center gap-2 text-brand-600 font-medium">
                      Read Case Study
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                  <div className="bg-brand-600 p-8 md:p-10 flex items-center">
                    <div className="grid grid-cols-3 gap-6 w-full">
                      {featured.metrics.map((metric, i) => (
                        <div key={i} className="text-center">
                          <div className="text-3xl lg:text-4xl font-bold text-white mb-1">{metric.value}</div>
                          <div className="text-sm text-brand-100">{metric.label}</div>
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
                  className="block bg-white/[0.03] rounded-2xl p-6 border border-white/10 hover:shadow-[0_16px_48px_-12px_rgba(91,141,255,0.25)] hover:border-brand-400/50 transition-all duration-300 group"
                >
                  <div className="inline-block px-3 py-1 bg-white/5 text-stone-300 text-xs font-medium rounded-full mb-4">
                    {cs.industry}
                  </div>
                  <h3 className="text-xl font-semibold text-stone-50 mb-1">{cs.title}</h3>
                  <p className="text-stone-400 text-sm mb-4">{cs.subtitle}</p>
                  <div className="flex items-end justify-between">
                    <div className="flex gap-6">
                      {cs.metrics.map((metric, i) => (
                        <div key={i}>
                          <div className="text-lg font-bold text-brand-600">{metric.value}</div>
                          <div className="text-xs text-stone-400">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                    <div className="w-10 h-10 bg-white/5 group-hover:bg-brand-500 rounded-full flex items-center justify-center text-stone-300 group-hover:text-white transition-all duration-200">
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-center text-stone-400 text-sm font-medium uppercase tracking-wider mb-10">
              Representative Outcomes From Our Builds
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {aggregateStats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-stone-50 mb-1">{stat.value}</div>
                  <div className="text-sm text-stone-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="bg-brand-600 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">
              Your results could be next.
            </h2>
            <a
              href="mailto:contact@agenticlabs.io?subject=Discovery%20Call%20Request"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-700 rounded-xl font-medium text-lg hover:bg-brand-50 transition-all duration-200 shadow-lg"
            >
              Book a Strategy Call
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
