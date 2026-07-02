'use client';
import { useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { FAQSchema } from '@/components/SEO';

// Comprehensive FAQ data organized by category
const faqCategories = [
  {
    name: 'Agentic AI',
    slug: 'agentic-ai',
    faqs: [
      {
        question: 'What is agentic AI and how is it different from traditional AI?',
        answer: 'Agentic AI refers to autonomous AI systems that can pursue goals, make decisions, and take actions without constant human oversight. Unlike traditional AI that responds to single prompts, agentic AI can execute multi-step workflows, coordinate across systems, and adapt to changing conditions. Agentic Labs builds enterprise agentic systems that integrate with Salesforce, Workday, and Databricks to automate complex business processes.'
      },
      {
        question: 'What is the Model Context Protocol (MCP)?',
        answer: 'The Model Context Protocol (MCP) is a standardization breakthrough developed by Anthropic that enables AI applications to connect with data sources, tools, and services through a universal interface—similar to how USB-C standardized hardware connectivity. MCP eliminates the need for custom integrations between AI agents and each data source. Agentic Labs implements MCP to give AI agents secure, contextualized access to enterprise data across Salesforce, Workday, SAP, and other systems of record.'
      },
      {
        question: 'How do you govern autonomous AI agents in enterprise settings?',
        answer: 'Enterprise AI governance requires bounded autonomy, clear escalation paths, and comprehensive audit trails. Agentic Labs implements a governance framework that includes: (1) operational limits defining what each agent can and cannot do, (2) human-in-the-loop escalation for high-stakes decisions, (3) complete logging of all agent actions for compliance, and (4) governance agents that monitor other AI systems for policy violations. We are SOC 2 compliant and ensure your data never leaves your environment.'
      },
    ]
  },
  {
    name: 'SaaS Replacement',
    slug: 'saas-replacement',
    faqs: [
      {
        question: 'Can AI agents replace SaaS point solutions?',
        answer: 'Yes, AI agents are increasingly consolidating fragmented SaaS stacks. Enterprises average 150+ apps, creating complexity and cost. AI agents can integrate with multiple systems through APIs, performing tasks that previously required separate tools for email marketing, lead scoring, customer support, and more. Agentic Labs helps companies replace 5-10 point solutions with unified AI agents that layer on top of existing systems of record like Salesforce, Workday, and SAP.'
      },
      {
        question: 'What is the ROI of replacing SaaS tools with AI agents?',
        answer: 'Companies typically see 40-60% reduction in SaaS subscription costs, 30-50% acceleration in business processes, and fewer integration headaches from vendor management. A $50M company can realize $100K-$300K in annual savings from SaaS consolidation plus labor efficiency gains. Agentic Labs clients see an average of $3.2M+ in first-year savings through combined SaaS consolidation and process automation.'
      },
      {
        question: 'How do AI agents integrate with existing systems of record?',
        answer: 'Agentic Labs provides zero-copy integration with major systems of record. Through partnerships like Workday Data Cloud and Salesforce-Databricks integration, our AI agents access your existing data without migration. We use native connectors and the Model Context Protocol (MCP) to give agents real-time, contextualized access to CRM, HCM, and analytics data. Your data stays in your environment—we orchestrate AI on top.'
      },
    ]
  },
  {
    name: 'Service & Process',
    slug: 'service-process',
    faqs: [
      {
        question: 'How long does it take to implement enterprise AI agents?',
        answer: 'Agentic Labs delivers production-ready AI systems in 6-8 weeks. Our process includes 1 week of discovery, 2 weeks of design, 3 weeks of build, and 2 weeks of deployment and monitoring. This is significantly faster than the typical 6-12 month timeline because we skip pilot phases and go directly to production systems with defined KPIs.'
      },
      {
        question: 'Why do most enterprise AI projects fail?',
        answer: 'Most AI projects fail due to: (1) unclear ROI expectations, (2) 6-12 month timelines that lose stakeholder support, (3) treating AI as a "science project" without production goals, (4) vendor lock-in that limits flexibility, and (5) data context issues—AI doesn\'t understand the business. Agentic Labs addresses these by defining KPIs upfront, delivering in 6-8 weeks, implementing proper context management, and building production systems with full IP transfer.'
      },
      {
        question: 'What industries do you work with?',
        answer: 'Agentic Labs works with $500M-$10B companies in high-growth sectors: Healthcare, Manufacturing, Retail, Energy, Dealers & Distributors, Power Electronics & FPGA, Autonomy & Robotics, and Biotech & Pharma Logistics. We have industry-specific expertise in compliance requirements (HIPAA, GxP, NERC CIP) and operational workflows.'
      },
    ]
  },
  {
    name: 'Security & Governance',
    slug: 'security-governance',
    faqs: [
      {
        question: 'How do you prevent AI hallucinations?',
        answer: 'Multiple layers: context management grounds responses in real data, bounded autonomy limits agent scope, and validation steps check outputs before action. Our evaluation framework tracks hallucination rates and triggers alerts when they increase. We implement retrieval-augmented generation (RAG) with your actual business data to ensure accuracy.'
      },
      {
        question: 'What happens when an agent encounters an edge case?',
        answer: 'Agents operate within bounded autonomy. When they encounter situations outside their defined boundaries, they escalate to human reviewers via Slack, email, or your preferred channel. The escalation is logged, the human decision is captured, and the system learns for future similar cases.'
      },
      {
        question: 'Is your AI infrastructure SOC 2 compliant?',
        answer: 'Yes. Agentic Labs maintains SOC 2 Type II compliance with independently audited security controls. We also support HIPAA for healthcare, GxP for pharma, and industry-specific regulations. Your data never leaves your environment—we orchestrate AI on top of your existing infrastructure.'
      },
    ]
  },
];

// Flatten all FAQs for schema
const allFaqs = faqCategories.flatMap(cat => cat.faqs);

const navItems = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" }
];

export default function FAQHubPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleFAQ = (categorySlug: string, faqIndex: number) => {
    const key = `${categorySlug}-${faqIndex}`;
    setOpenIndex(openIndex === key ? null : key);
  };

  return (
    <div className="relative min-h-screen bg-white">
      {/* FAQ Schema for all questions */}
      <FAQSchema faqs={allFaqs} />

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
                className="px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white rounded-lg text-sm font-semibold transition-all duration-200 shadow-lg shadow-brand-600/25 hover:shadow-xl hover:shadow-brand-600/30 font-display"
              >
                Book Strategy Call
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
                <Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)} className="mt-4 px-4 py-3 bg-brand-600 hover:bg-brand-700 text-white rounded-lg font-semibold text-sm text-center transition-colors font-display">
                  Book Strategy Call
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
            {/* Breadcrumb */}
            <nav className="mb-6">
              <ol className="flex items-center gap-2 text-sm">
                <li><Link href="/" className="text-slate-500 hover:text-slate-700">Home</Link></li>
                <li className="text-slate-400">/</li>
                <li><Link href="/resources" className="text-slate-500 hover:text-slate-700">Resources</Link></li>
                <li className="text-slate-400">/</li>
                <li className="text-slate-900 font-medium">FAQ</li>
              </ol>
            </nav>

            <p className="text-brand-600 font-semibold text-sm uppercase tracking-wide mb-4">Frequently Asked Questions</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-4 font-display">
              Enterprise AI FAQ
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl font-body">
              Common questions about agentic AI, SaaS replacement, implementation, and governance.
            </p>
          </div>
        </section>

        {/* Quick Jump */}
        <section className="pb-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-3">
              {faqCategories.map((category) => (
                <a
                  key={category.slug}
                  href={`#${category.slug}`}
                  className="px-4 py-2 bg-slate-100 text-slate-600 rounded-lg text-sm font-medium hover:bg-slate-200 hover:text-slate-900 transition-colors font-display"
                >
                  {category.name}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category) => (
              <div key={category.slug} id={category.slug} className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 font-display">{category.name}</h2>
                <div className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => {
                    const key = `${category.slug}-${faqIndex}`;
                    const isOpen = openIndex === key;

                    return (
                      <div
                        key={faqIndex}
                        className="bg-white rounded-xl border border-slate-200 overflow-hidden"
                      >
                        <button
                          onClick={() => toggleFAQ(category.slug, faqIndex)}
                          className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                          aria-expanded={isOpen}
                        >
                          <span className="text-lg font-semibold text-slate-900 font-display">
                            {faq.question}
                          </span>
                          <svg
                            className={`w-5 h-5 text-slate-500 flex-shrink-0 transition-transform duration-200 ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>

                        <div
                          className={`overflow-hidden transition-all duration-200 ${
                            isOpen ? 'max-h-96' : 'max-h-0'
                          }`}
                        >
                          <div className="px-6 pb-5 text-slate-600 font-body">
                            {faq.answer}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-brand-600 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4 font-display">
              Still have questions?
            </h2>
            <p className="text-xl text-white/80 mb-8 font-body">
              Book a 30-minute discovery call to discuss your specific use case.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-700 rounded-xl font-semibold text-lg hover:bg-brand-50 transition-all duration-200 shadow-lg font-display"
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
