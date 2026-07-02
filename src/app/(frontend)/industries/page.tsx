'use client';
import { useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/newsite/Footer';

const industries = [
  {
    id: 'healthcare',
    slug: 'healthcare',
    name: 'Healthcare',
    tagline: '40% Admin Burden Reduction',
    description: 'AI automation for patient intake, clinical documentation, and scheduling. HIPAA compliant.',
    icon: '🏥',
    featured: true,
  },
  {
    id: 'manufacturing',
    slug: 'manufacturing',
    name: 'Manufacturing',
    tagline: '35% Less Downtime',
    description: 'Predictive maintenance, quality control, and supply chain optimization for Industry 4.0.',
    icon: '🏭',
  },
  {
    id: 'retail',
    slug: 'retail',
    name: 'Retail',
    tagline: '15-25% Inventory Reduction',
    description: 'Demand forecasting, customer service automation, and omnichannel optimization.',
    icon: '🛒',
  },
  {
    id: 'energy',
    slug: 'energy',
    name: 'Energy',
    tagline: '20% Grid Stability Improvement',
    description: 'Grid optimization, predictive maintenance, and renewable integration for utilities.',
    icon: '⚡',
  },
  {
    id: 'dealers-distributors',
    slug: 'dealers-distributors',
    name: 'Dealers & Distributors',
    tagline: '80% Faster Order Entry',
    description: 'Order automation, inventory optimization, and quote generation for wholesale distribution.',
    icon: '📦',
  },
  {
    id: 'power-electronics-fpga',
    slug: 'power-electronics-fpga',
    name: 'Power Electronics & FPGA',
    tagline: '25-40% Faster Design Cycles',
    description: 'AI-enhanced EDA tools for FPGA design, verification, and test automation.',
    icon: '🔌',
  },
  {
    id: 'autonomy-robotics',
    slug: 'autonomy-robotics',
    name: 'Autonomy & Robotics',
    tagline: '50% Downtime Reduction',
    description: 'Vision AI, autonomous navigation, and predictive maintenance for industrial robotics.',
    icon: '🤖',
  },
  {
    id: 'biotech-pharma-logistics',
    slug: 'biotech-pharma-logistics',
    name: 'Biotech & Pharma Logistics',
    tagline: 'GxP Compliant',
    description: 'Cold chain monitoring, supply chain automation, and compliance documentation.',
    icon: '💊',
  },
];

const navItems = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" }
];

export default function IndustriesPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const featured = industries.find(i => i.featured);
  const otherIndustries = industries.filter(i => !i.featured);

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
                  className={`font-medium text-sm transition-colors ${
                    item.href === '/industries' ? 'text-stone-50' : 'text-stone-300 hover:text-stone-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/#contact"
                className="px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white rounded-lg text-sm font-medium transition-all duration-200 shadow-lg shadow-brand-600/25 hover:shadow-xl hover:shadow-brand-600/30"
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
                  <Link key={index} href={item.href} className="text-stone-300 hover:text-stone-50 py-2 px-4 rounded-lg hover:bg-white/5 transition-colors font-medium text-sm" onClick={() => setIsMobileMenuOpen(false)}>
                    {item.label}
                  </Link>
                ))}
                <Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)} className="mt-4 px-4 py-3 bg-brand-600 hover:bg-brand-700 text-white rounded-lg font-medium text-sm text-center transition-colors">
                  Book a Strategy Call
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      <main className="pt-16">
        {/* Hero */}
        <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <p className="text-brand-400 font-medium text-sm uppercase tracking-wide mb-4">Industries</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-50 tracking-tight mb-4 font-display">
              Your industry. <span className="text-brand-400">Your workflows.</span>
            </h1>
            <p className="text-xl text-stone-300 max-w-2xl">
              We build for the workflows, compliance rules, and systems your sector actually runs on —
              sized for a small or mid-market operator, not a Fortune 500 pilot budget.
            </p>
          </div>
        </section>

        {/* Featured Industry */}
        {featured && (
          <section className="pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-sm font-medium text-stone-400 uppercase tracking-wider mb-4">
                Featured Industry
              </div>
              <Link
                href={`/industries/${featured.slug}`}
                className="block bg-white/[0.02] rounded-2xl border border-white/10 overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8 md:p-10">
                    <div className="text-4xl mb-4">{featured.icon}</div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-stone-50 mb-2 font-display">
                      {featured.name}
                    </h2>
                    <p className="text-brand-400 font-medium mb-4">{featured.tagline}</p>
                    <p className="text-stone-300 mb-6">
                      {featured.description}
                    </p>
                    <div className="inline-flex items-center gap-2 text-brand-300 font-medium">
                      Explore {featured.name} Solutions
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                  <div className="bg-brand-600 p-8 md:p-10 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl lg:text-7xl font-bold text-white mb-2">
                        40%
                      </div>
                      <div className="text-brand-100 text-lg">admin burden reduction</div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        )}

        {/* All Industries Grid */}
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-sm font-medium text-stone-400 uppercase tracking-wider mb-4">
              All Industries
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherIndustries.map((industry) => (
                <Link
                  key={industry.id}
                  href={`/industries/${industry.slug}`}
                  className="bg-white/[0.03] rounded-2xl p-6 border border-white/10 hover:border-brand-400/50 hover:shadow-[0_16px_48px_-12px_rgba(91,141,255,0.25)] transition-all duration-300 group block"
                >
                  <div className="text-3xl mb-4">{industry.icon}</div>
                  <h3 className="text-lg font-semibold text-stone-50 mb-1 group-hover:text-brand-300 transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-brand-400 font-medium text-sm mb-3">{industry.tagline}</p>
                  <p className="text-stone-300 text-sm mb-4">
                    {industry.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-stone-400">Learn more</span>
                    <div className="w-10 h-10 bg-white/5 group-hover:bg-brand-500 rounded-full flex items-center justify-center text-stone-300 group-hover:text-white transition-all duration-200">
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

        {/* Target Market Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-stone-50 mb-4 text-center font-display">
              Built for SMEs. <span className="text-brand-400">Not enterprise theater.</span>
            </h2>
            <p className="text-lg text-stone-300 text-center mb-12 max-w-2xl mx-auto">
              US-based small and medium enterprises that need production AI — not science projects,
              and not the Fortune 500 playbook shrunk to fit. One workflow, shipped, paying back in months.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-400 mb-2">10&ndash;500</div>
                <div className="text-stone-300">Employees &mdash; built for your scale</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-400 mb-2">6&ndash;8 Weeks</div>
                <div className="text-stone-300">To production</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-400 mb-2">4&ndash;6 Months</div>
                <div className="text-stone-300">Typical SMB payback (industry benchmark)</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="bg-brand-600 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
              Let&apos;s talk about your industry.
            </h2>
            <p className="text-xl text-white/80 mb-8">
              30 minutes. We&apos;ll map your workflows and show you what&apos;s possible.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-700 rounded-xl font-medium text-lg hover:bg-brand-50 transition-all duration-200 shadow-lg"
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
