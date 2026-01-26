'use client';
import { useState } from 'react';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import LogoBar from '@/components/LogoBar';
import ProblemSection from '@/components/ProblemSection';
import ProcessSection from '@/components/ProcessSection';
import SolutionsSection from '@/components/SolutionsSection';
import FeaturedCaseStudy from '@/components/FeaturedCaseStudy';
import DifferentiatorsSection from '@/components/DifferentiatorsSection';
import ContactFormSection from '@/components/ContactFormSection';
import FAQSection, { homepageFAQs } from '@/components/FAQSection';
import { OrganizationSchema } from '@/components/SEO';

export default function RootPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const items = [
    { label: "Home", href: "/" },
    { label: "Solutions", href: "/solutions" },
    { label: "Industries", href: "/industries" },
    { label: "Case Studies", href: "/case-studies" }
  ];

  return (
    <div className="relative min-h-screen bg-white">
      {/* SEO Schema Markup */}
      <OrganizationSchema />

      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <a href="/" className="text-xl font-bold text-slate-900 font-display">
              Agentic Labs
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {items.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-slate-600 hover:text-slate-900 font-medium text-sm transition-colors font-display"
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

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-slate-700 p-2"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-200">
              <nav className="flex flex-col space-y-2">
                {items.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="text-slate-600 hover:text-slate-900 py-2 px-4 rounded-lg hover:bg-slate-50 transition-colors font-medium text-sm font-display"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-4 px-4 py-3 bg-sky-500 hover:bg-sky-600 text-white rounded-lg font-semibold text-sm text-center transition-colors font-display"
                >
                  Get In Touch
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>
        <HeroSection />
        <LogoBar />
        <ProblemSection />
        <ProcessSection />
        <SolutionsSection />
        <FeaturedCaseStudy />
        <DifferentiatorsSection />
        <FAQSection faqs={homepageFAQs} />
        <ContactFormSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
