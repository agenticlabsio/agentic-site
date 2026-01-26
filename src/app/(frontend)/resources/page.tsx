'use client';
import { useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';

const featuredResources = [
  {
    type: 'Blog',
    title: 'Agentic AI in 2026: From Hype to "Is It Working?"',
    description: '2026 is the year businesses finally ask "Is it working?" Learn how to measure AI agent performance and prove ROI.',
    href: '/resources/blog/agentic-ai-2026',
    category: 'Thought Leadership',
  },
  {
    type: 'Blog',
    title: 'The Model Context Protocol (MCP): Why Your AI Agents Need It',
    description: 'MCP is the USB-C of AI connectivity. Learn how this standardization breakthrough transforms enterprise AI.',
    href: '/resources/blog/model-context-protocol-mcp',
    category: 'Technical Deep-Dive',
  },
  {
    type: 'Blog',
    title: 'Replace 10 SaaS Tools with One AI Agent',
    description: 'Average enterprise runs 150+ apps. Learn how unified AI agents can replace 5-10 point solutions.',
    href: '/resources/blog/replace-saas-with-ai',
    category: 'Cost Reduction',
  },
];

const categories = [
  { name: 'All', count: 10 },
  { name: 'Thought Leadership', count: 3 },
  { name: 'Technical', count: 4 },
  { name: 'Industry', count: 3 },
];

const navItems = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" }
];

export default function ResourcesPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold transition-all duration-200 shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30 font-display"
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
                {navItems.map((item, index) => (
                  <Link key={index} href={item.href} className="text-slate-600 hover:text-slate-900 py-2 px-4 rounded-lg hover:bg-slate-50 transition-colors font-medium text-sm font-display" onClick={() => setIsMobileMenuOpen(false)}>
                    {item.label}
                  </Link>
                ))}
                <Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)} className="mt-4 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-sm text-center transition-colors font-display">
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
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-4">Resources</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-4 font-display">
              Enterprise AI Insights
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl font-body">
              Deep dives on agentic AI, SaaS replacement strategies, and industry-specific automation.
              Actionable insights for enterprise leaders.
            </p>
          </div>
        </section>

        {/* Resource Navigation */}
        <section className="pb-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-4 border-b border-slate-200 pb-4">
              <Link href="/resources" className="text-blue-600 font-semibold text-sm font-display border-b-2 border-blue-600 pb-2">
                All Resources
              </Link>
              <Link href="/resources/blog" className="text-slate-600 hover:text-slate-900 font-medium text-sm font-display pb-2">
                Blog
              </Link>
              <Link href="/resources/faq" className="text-slate-600 hover:text-slate-900 font-medium text-sm font-display pb-2">
                FAQ
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Resources */}
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 font-display">Featured Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredResources.map((resource, index) => (
                <Link
                  key={index}
                  href={resource.href}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 group block"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded font-display">
                      {resource.type}
                    </span>
                    <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded font-display">
                      {resource.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 font-display group-hover:text-blue-600 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 font-body">
                    {resource.description}
                  </p>
                  <div className="flex items-center text-blue-600 text-sm font-semibold font-display">
                    Read more
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 font-display">Browse by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categories.map((category, index) => (
                <Link
                  key={index}
                  href={`/resources/blog?category=${category.name.toLowerCase().replace(' ', '-')}`}
                  className="bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-200 hover:shadow-md transition-all text-center"
                >
                  <div className="text-2xl font-bold text-blue-600 mb-1 font-display">{category.count}</div>
                  <div className="text-slate-600 font-medium font-display">{category.name}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4 font-display">
              Get Enterprise AI Insights
            </h2>
            <p className="text-xl text-white/80 mb-8 font-body">
              Monthly insights on agentic AI, automation strategies, and real implementation lessons.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all duration-200 shadow-lg font-display"
            >
              Subscribe to Updates
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
