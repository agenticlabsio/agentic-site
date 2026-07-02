'use client';
import { useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/newsite/Footer';

// Sample blog posts - in production these would come from Payload CMS
const blogPosts = [
  {
    slug: 'agentic-ai-2026',
    title: 'Agentic AI in 2026: From Hype to "Is It Working?"',
    excerpt: '2026 is the year businesses finally ask "Is it working?" Only 19% of executives report >5% revenue increase from AI. Learn how to measure AI agent performance and prove ROI to stakeholders.',
    category: 'Thought Leadership',
    date: 'January 2026',
    readTime: '8 min read',
    featured: true,
  },
  {
    slug: 'model-context-protocol-mcp',
    title: 'The Model Context Protocol (MCP): Why Your AI Agents Need It',
    excerpt: 'MCP is the USB-C of AI connectivity. Learn how this standardization breakthrough enables AI applications to connect with data sources through a universal interface.',
    category: 'Technical Deep-Dive',
    date: 'January 2026',
    readTime: '10 min read',
  },
  {
    slug: 'replace-saas-with-ai',
    title: 'Replace 10 SaaS Tools with One AI Agent: A Practical Guide',
    excerpt: 'A growing business pays for dozens of overlapping SaaS seats. What if you needed a handful? How one custom agent can replace 5–10 point solutions while plugging into your systems of record.',
    category: 'Cost Reduction',
    date: 'January 2026',
    readTime: '12 min read',
  },
  {
    slug: 'ai-dealers-distributors-order-entry',
    title: 'AI for Dealers & Distributors: 80% Faster Order Entry',
    excerpt: 'Stop manually entering orders from handwritten notes. Learn how AI agents process any order format—PDF, email, voicemail, spreadsheet—and integrate directly with your ERP.',
    category: 'Industry',
    date: 'January 2026',
    readTime: '7 min read',
  },
  {
    slug: 'fpga-design-automation-ai',
    title: 'AI-Enhanced FPGA Design: 25-40% Faster Verification Cycles',
    excerpt: 'Siemens unveiled agentic AI for EDA at DAC 2025. Learn how AI-enhanced tools accelerate FPGA design, verification, and documentation.',
    category: 'Industry',
    date: 'January 2026',
    readTime: '9 min read',
  },
  {
    slug: 'enterprise-ai-governance',
    title: 'Enterprise AI Governance: Bounded Autonomy and Audit Trails',
    excerpt: 'Who\'s responsible when an AI agent makes a mistake? Learn how bounded autonomy, escalation paths, and audit trails enable compliant enterprise AI deployment.',
    category: 'Governance',
    date: 'January 2026',
    readTime: '11 min read',
  },
  {
    slug: 'robotics-ai-downtime-reduction',
    title: 'AI for Industrial Robotics: 50% Reduction in Unplanned Downtime',
    excerpt: 'SAP\'s Embodied AI proves robotics ROI in production. Learn how vision AI, predictive maintenance, and autonomous navigation transform industrial automation.',
    category: 'Industry',
    date: 'January 2026',
    readTime: '8 min read',
  },
  {
    slug: 'pharma-logistics-ai-cold-chain',
    title: 'Pharma Logistics AI: Cold Chain Monitoring and GxP Compliance',
    excerpt: 'AI could create $350-410B annual value for pharma. Learn how AI maintains cold chain integrity, automates compliance documentation, and accelerates drug discovery.',
    category: 'Industry',
    date: 'January 2026',
    readTime: '10 min read',
  },
  {
    slug: 'energy-ai-grid-optimization',
    title: 'Energy Sector AI: Grid Optimization and Predictive Maintenance',
    excerpt: '65% of energy CEOs now rank AI as top investment. Learn how AI improves grid stability, enables renewable integration, and reduces operational costs.',
    category: 'Industry',
    date: 'January 2026',
    readTime: '9 min read',
  },
  {
    slug: 'why-ai-projects-fail',
    title: 'Most AI Pilots Never Ship. Here\'s the Pattern That Does.',
    excerpt: 'MIT (2025) found ~95% of enterprise GenAI pilots deliver no measurable ROI — almost always a deployment problem, not a model one. The five reasons projects stall, and how SMEs beat the odds.',
    category: 'Thought Leadership',
    date: 'January 2026',
    readTime: '12 min read',
  },
];

const categories = ['All', 'Thought Leadership', 'Technical Deep-Dive', 'Cost Reduction', 'Industry', 'Governance'];

const navItems = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" }
];

export default function BlogPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const otherPosts = activeCategory === 'All'
    ? filteredPosts.filter(post => !post.featured)
    : filteredPosts;

  return (
    <div className="newsite relative min-h-screen">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e1a]/80 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-xl font-bold text-slate-50 font-display">
              Agentic Labs
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-slate-300 hover:text-slate-50 font-medium text-sm transition-colors font-display"
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
              className="md:hidden text-slate-300 p-2"
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
                  <Link key={index} href={item.href} className="text-slate-300 hover:text-slate-50 py-2 px-4 rounded-lg hover:bg-white/5 transition-colors font-medium text-sm font-display" onClick={() => setIsMobileMenuOpen(false)}>
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
        <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-6">
              <ol className="flex items-center gap-2 text-sm">
                <li><Link href="/" className="text-slate-400 hover:text-slate-300">Home</Link></li>
                <li className="text-slate-400">/</li>
                <li><Link href="/resources" className="text-slate-400 hover:text-slate-300">Resources</Link></li>
                <li className="text-slate-400">/</li>
                <li className="text-slate-50 font-medium">Blog</li>
              </ol>
            </nav>

            <p className="text-brand-600 font-semibold text-sm uppercase tracking-wide mb-4">Blog</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-50 tracking-tight mb-4 font-display">
              The Agentic Labs Blog
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl font-body">
              Deep dives on agentic AI, industry automation, and practical build guides &mdash;
              written for small and mid-market operators.
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
                      : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-slate-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && activeCategory === 'All' && (
          <section className="pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4 font-display">
                Featured
              </div>
              <Link
                href={`/resources/blog/${featuredPost.slug}`}
                className="block bg-white/[0.02] rounded-2xl border border-white/10 overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8 md:p-10">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-brand-500/10 text-brand-300 text-sm font-medium rounded-full font-display">
                        {featuredPost.category}
                      </span>
                      <span className="text-slate-400 text-sm font-body">{featuredPost.date}</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-50 mb-4 font-display">
                      {featuredPost.title}
                    </h2>
                    <p className="text-slate-300 mb-6 font-body">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 text-sm font-body">{featuredPost.readTime}</span>
                      <span className="inline-flex items-center gap-2 text-brand-600 font-semibold font-display">
                        Read article
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="bg-brand-600 p-8 md:p-10 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl lg:text-7xl font-bold text-white mb-2 font-display">
                        2026
                      </div>
                      <div className="text-brand-100 font-body text-lg">The &ldquo;Is It Working?&rdquo; Year</div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        )}

        {/* Blog Grid */}
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {activeCategory === 'All' && (
              <div className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4 font-display">
                All Posts
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/resources/blog/${post.slug}`}
                  className="bg-white/[0.03] rounded-2xl p-6 border border-white/10 hover:shadow-[0_16px_48px_-12px_rgba(91,141,255,0.25)] hover:border-brand-400/50 transition-all duration-300 group block"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-2 py-1 bg-white/5 text-slate-300 text-xs font-medium rounded font-display">
                      {post.category}
                    </span>
                    <span className="text-slate-400 text-xs font-body">{post.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-50 mb-2 font-display group-hover:text-brand-300 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-300 text-sm mb-4 font-body line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-sm font-body">{post.readTime}</span>
                    <div className="w-8 h-8 bg-white/5 group-hover:bg-brand-500 rounded-full flex items-center justify-center text-slate-300 group-hover:text-white transition-all duration-200">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <section className="bg-slate-900 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4 font-display">
              Enough reading. Let&apos;s build one.
            </h2>
            <p className="text-xl text-slate-300 mb-8 font-body">
              30 minutes. We&apos;ll map your workflows and tell you which one an agent should run first.
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
