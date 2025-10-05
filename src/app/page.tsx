'use client';
import { useState, useEffect } from 'react';
import LiquidEther from '@/components/LiquidEther';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Accordion from '@/components/Accordion';
import { SplitText, FadeInText, GlowText, WordReveal } from '@/components/TextAnimations';
import { MagneticButton, LiquidButton, GlowButton, ElectricButton } from '@/components/AnimatedButtons';

export default function RootPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const items = [
    { label: "Home", href: "#" },
    { label: "Product", href: "#" },
    { label: "Solutions", href: "#" },
    { label: "Partners", href: "#" },
    { label: "Case Studies", href: "#" },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Background Layer */}
      <div className="fixed inset-0 -z-10">
        <LiquidEther
          colors={['#E0E7FF', '#FEE2F8', '#F3E8FF']}
          mouseForce={isMobile ? 15 : 20}
          cursorSize={isMobile ? 80 : 100}
          isViscous={false}
          viscous={30}
          iterationsViscous={isMobile ? 16 : 32}
          iterationsPoisson={isMobile ? 16 : 32}
          resolution={isMobile ? 0.3 : 0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={isMobile ? 0.3 : 0.5}
          autoIntensity={isMobile ? 1.5 : 2.2}
          takeoverDuration={0.25}
          autoResumeDelay={isMobile ? 2000 : 3000}
          autoRampDuration={0.6}
        />
      </div>

      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-20 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="flex justify-between items-center">
          {/* Logo on the left */}
          <div className="text-xl sm:text-2xl font-bold text-gray-900">
            Agentic Labs
          </div>

          {/* Desktop Navigation menu and button on the right */}
          <div className="hidden lg:flex items-center gap-8">
            <NavBar
              items={items}
              particleCount={15}
              particleDistances={[90, 10]}
              particleR={100}
              initialActiveIndex={0}
              animationTime={600}
              timeVariance={300}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            />

            {/* Book A Demo Button */}
            <GlowButton
              glowColor="#2563eb"
              pulseAnimation={true}
              onClick={() => console.log('Book A Demo')}
              className="!px-6 !py-3 !text-base"
            >
              Book A Demo
            </GlowButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gray-900 p-2"
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
          <div className="lg:hidden mt-4 py-4 bg-white/90 backdrop-blur-md rounded-lg border border-gray-200">
            <nav className="flex flex-col space-y-2 px-4">
              {items.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-gray-900 py-2 px-4 rounded hover:bg-gray-100 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <LiquidButton
                variant="primary"
                liquidColor="#5227FF"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  console.log('Book A Demo');
                }}
                className="mt-4 w-full"
              >
                Book A Demo
              </LiquidButton>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8 pt-20 sm:pt-24">
        <main className="text-center max-w-7xl mx-auto w-full">
          {/* Security Badge */}
          <FadeInText delay={0} duration={0.6} direction="down">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-gray-100 backdrop-blur-sm border border-gray-200">
              <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L3.5 7v6c0 5.55 3.84 10.74 8.5 12 4.66-1.26 8.5-6.45 8.5-12V7L12 2zm0 3.9l5 2.5V13c0 3.53-2.16 6.82-5 8.47-2.84-1.65-5-4.94-5-8.47V8.4l5-2.5z" />
              </svg>
              <span className="text-sm font-medium text-gray-600">SOC 2 Ready • Enterprise Security</span>
            </div>
          </FadeInText>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <FadeInText delay={0.2} duration={0.8} direction="up">
              <div className="text-gray-900">Build Agentic Products</div>
            </FadeInText>
            <FadeInText delay={0.4} duration={0.8} direction="up">
              <div className="text-blue-600">that Move the Business</div>
            </FadeInText>
          </h1>

          {/* Subheadline */}
          <FadeInText delay={0.6} duration={0.8} direction="up">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12">
              From roadmap to revenue: AI agents deployed in <span className="text-gray-900 font-semibold">weeks, not quarters</span>
            </p>
          </FadeInText>

          {/* CTA Buttons */}
          <FadeInText delay={0.8} duration={0.8} direction="up">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
              <button
                onClick={() => console.log('Explore Solutions')}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                Explore Solutions
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>

              <button
                onClick={() => console.log('Book a Strategy Call')}
                className="px-8 py-4 bg-gray-100 hover:bg-gray-200 backdrop-blur-sm border border-gray-300 text-gray-900 rounded-full font-semibold text-lg transition-all duration-300"
              >
                Book a Strategy Call
              </button>
            </div>
          </FadeInText>

          {/* Statistics Cards */}
          <FadeInText delay={1} duration={0.8} direction="up">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
              <div className="bg-gray-50 backdrop-blur-sm border border-gray-200 rounded-xl p-4 hover:bg-gray-100 transition-all duration-300">
                <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1">42%</div>
                <div className="text-xs text-gray-600">Faster launches</div>
              </div>
              <div className="bg-gray-50 backdrop-blur-sm border border-gray-200 rounded-xl p-4 hover:bg-gray-100 transition-all duration-300">
                <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1">30%</div>
                <div className="text-xs text-gray-600">Less rework</div>
              </div>
              <div className="bg-gray-50 backdrop-blur-sm border border-gray-200 rounded-xl p-4 hover:bg-gray-100 transition-all duration-300">
                <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1">+18</div>
                <div className="text-xs text-gray-600">NPS uplift</div>
              </div>
              <div className="bg-gray-50 backdrop-blur-sm border border-gray-200 rounded-xl p-4 hover:bg-gray-100 transition-all duration-300">
                <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1">Weeks</div>
                <div className="text-xs text-gray-600">not quarters</div>
              </div>
            </div>
          </FadeInText>
        </main>
      </div>

      {/* Why CXOs Choose Us Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image placeholder */}
            <FadeInText delay={0} duration={0.8} direction="left">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl aspect-square flex items-center justify-center border border-gray-300 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                <span className="text-gray-500 text-xl font-medium">Image Placeholder</span>
              </div>
            </FadeInText>

            {/* Right side - Content */}
            <div className="space-y-6">
              <div>
                <FadeInText delay={0.2} duration={0.6} direction="right">
                  <div className="inline-block mb-3">
                    <GlowText glowColor="#2563eb" className="text-blue-600 text-base sm:text-lg font-semibold tracking-wide uppercase">
                      Why CXOs choose us
                    </GlowText>
                  </div>
                </FadeInText>

                <FadeInText delay={0.3} duration={0.8} direction="right">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    Ship measurable outcomes in weeks—not quarters
                  </h2>
                </FadeInText>
              </div>

              <FadeInText delay={0.5} duration={0.8} direction="right">
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  We architect and ship agentic products that plug into your enterprise stack
                  and startup toolchain. Every engagement is prioritized by business impact—
                  cost takeout, cycle-time reduction, and new revenue—delivered with security,
                  reliability, and clear governance.
                </p>
              </FadeInText>

              <FadeInText delay={0.6} duration={0.8} direction="right">
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  Our model-first, data-secure approach de-risks AI delivery: lean discovery,
                  reference architectures, production SLAs, and change management. Start
                  focused, prove value fast, then scale across functions with reusable patterns
                  and measurable ROI.
                </p>
              </FadeInText>

              <FadeInText delay={0.7} duration={0.8} direction="right">
                <GlowButton
                  glowColor="#2563eb"
                  pulseAnimation={true}
                  onClick={() => console.log('See our approach')}
                  className="!px-8 !py-3 !text-base mt-2"
                >
                  See our approach
                </GlowButton>
              </FadeInText>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              <SplitText
                text="Case Studies"
                className="inline-block"
                delay={0}
              />
            </h2>

            <FadeInText delay={0.2} duration={0.8} direction="up">
              <p className="text-lg text-gray-600 mb-8">
                Real-world outcomes from enterprise deployments across regulated industries.
              </p>
            </FadeInText>

            <FadeInText delay={0.3} duration={0.8} direction="up">
              <button
                onClick={() => console.log('Explore all')}
                className="text-blue-600 hover:text-blue-700 font-semibold text-lg inline-flex items-center gap-2 transition-colors duration-300"
              >
                Explore all
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </FadeInText>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {/* Automation - Fortune 500 Ops Efficiency */}
            <FadeInText delay={0.4} duration={0.8} direction="up">
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-4 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full">
                <div className="mb-3">
                  <span className="inline-block px-2.5 py-0.5 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                    Automation
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Fortune 500 Ops Efficiency
                </h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  Automated document workflows, saving 120+ hours/month and reducing error rates by 38%.
                </p>
                <button
                  onClick={() => console.log('Read more - Fortune 500')}
                  className="text-blue-600 hover:text-blue-700 font-semibold text-sm inline-flex items-center gap-2 transition-colors duration-300"
                >
                  Read more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </FadeInText>

            {/* Data Platform - Retail Insights at Scale */}
            <FadeInText delay={0.5} duration={0.8} direction="up">
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-4 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full">
                <div className="mb-3">
                  <span className="inline-block px-2.5 py-0.5 bg-teal-100 text-teal-700 text-xs font-semibold rounded-full">
                    Data Platform
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Retail Insights at Scale
                </h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  Unified data layer and AI insights across 12 regions to unlock 9% revenue uplift.
                </p>
                <button
                  onClick={() => console.log('Read more - Retail')}
                  className="text-blue-600 hover:text-blue-700 font-semibold text-sm inline-flex items-center gap-2 transition-colors duration-300"
                >
                  Read more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </FadeInText>

            {/* Governance - Secure GenAI for Banking */}
            <FadeInText delay={0.6} duration={0.8} direction="up">
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-4 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full">
                <div className="mb-3">
                  <span className="inline-block px-2.5 py-0.5 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">
                    Governance
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Secure GenAI for Banking
                </h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  Deployed governed GenAI agents with audit trails and PII safeguards for 20k+ staff.
                </p>
                <button
                  onClick={() => console.log('Read more - Banking')}
                  className="text-blue-600 hover:text-blue-700 font-semibold text-sm inline-flex items-center gap-2 transition-colors duration-300"
                >
                  Read more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </FadeInText>

            {/* Compliance - Pharma Compliance Automation */}
            <FadeInText delay={0.7} duration={0.8} direction="up">
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-4 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full">
                <div className="mb-3">
                  <span className="inline-block px-2.5 py-0.5 bg-red-100 text-red-700 text-xs font-semibold rounded-full">
                    Compliance
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Pharma Compliance Automation
                </h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  Automated SOP approvals and CAPA tracking, cutting cycle time by 42% in GxP workflows.
                </p>
                <button
                  onClick={() => console.log('Read more - Pharma')}
                  className="text-blue-600 hover:text-blue-700 font-semibold text-sm inline-flex items-center gap-2 transition-colors duration-300"
                >
                  Read more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </FadeInText>

            {/* Vision - Manufacturing Quality AI */}
            <FadeInText delay={0.8} duration={0.8} direction="up">
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-4 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full">
                <div className="mb-3">
                  <span className="inline-block px-2.5 py-0.5 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full">
                    Vision
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Manufacturing Quality AI
                </h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  Vision-based defect detection reduced false rejects by 31% across 4 plants.
                </p>
                <button
                  onClick={() => console.log('Read more - Manufacturing')}
                  className="text-blue-600 hover:text-blue-700 font-semibold text-sm inline-flex items-center gap-2 transition-colors duration-300"
                >
                  Read more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </FadeInText>

            {/* Claims - Insurance Claims Triage */}
            <FadeInText delay={0.9} duration={0.8} direction="up">
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-4 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full">
                <div className="mb-3">
                  <span className="inline-block px-2.5 py-0.5 bg-cyan-100 text-cyan-700 text-xs font-semibold rounded-full">
                    Claims
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Insurance Claims Triage
                </h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  Prioritized claims using AI scoring, improving SLA adherence to 96% and CX NPS by +12.
                </p>
                <button
                  onClick={() => console.log('Read more - Insurance')}
                  className="text-blue-600 hover:text-blue-700 font-semibold text-sm inline-flex items-center gap-2 transition-colors duration-300"
                >
                  Read more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </FadeInText>
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
            <SplitText
              text="Industries we serve"
              className="inline-block"
              delay={0}
            />
          </h2>

          <FadeInText delay={0.2} duration={0.6} direction="up">
            <p className="text-lg text-gray-600 text-center mb-16">
              Practical, governed AI tailored to your domain and tech stack.
            </p>
          </FadeInText>

          {/* Industry Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Healthcare */}
            <FadeInText delay={0.3} duration={0.8} direction="up">
              <div className="group flex flex-col items-center text-center space-y-4 p-6 rounded-2xl hover:bg-white/50 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-red-400 to-red-500 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM4 8h8v2H4zM4 13h5v2H4zM4 18h5v2H4z" />
                    <path d="M20 3H4C2.9 3 2 3.9 2 5v14c0 1.1.9 2 2 2h8.5c-.3-.6-.5-1.3-.5-2H4V5h16v7c.7 0 1.4.2 2 .5V5c0-1.1-.9-2-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Healthcare</h3>
                <p className="text-gray-600 text-sm">
                  Smarter care, automated workflows, better outcomes.
                </p>
              </div>
            </FadeInText>

            {/* Software & Platforms */}
            <FadeInText delay={0.4} duration={0.8} direction="up">
              <div className="group flex flex-col items-center text-center space-y-4 p-6 rounded-2xl hover:bg-white/50 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Software & Platforms</h3>
                <p className="text-gray-600 text-sm">
                  Scalable AI for automation, analytics, and growth.
                </p>
              </div>
            </FadeInText>

            {/* Retail */}
            <FadeInText delay={0.5} duration={0.8} direction="up">
              <div className="group flex flex-col items-center text-center space-y-4 p-6 rounded-2xl hover:bg-white/50 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-teal-500 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0020 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Retail</h3>
                <p className="text-gray-600 text-sm">
                  AI-driven demand forecasting & personalized shopping.
                </p>
              </div>
            </FadeInText>

            {/* Manufacturing & Industry 4.0 */}
            <FadeInText delay={0.6} duration={0.8} direction="up">
              <div className="group flex flex-col items-center text-center space-y-4 p-6 rounded-2xl hover:bg-white/50 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 9h-4.79l-4.38-6.56c-.19-.28-.51-.42-.83-.42s-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1zM12 4.8L14.8 9H9.2L12 4.8zM18.5 19l-12.99.01L3.31 11H20.7l-2.2 8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Manufacturing & Industry 4.0</h3>
                <p className="text-gray-600 text-sm">
                  Optimized production, predictive maintenance, and AI automation.
                </p>
              </div>
            </FadeInText>

            {/* Banking & Insurance */}
            <FadeInText delay={0.7} duration={0.8} direction="up">
              <div className="group flex flex-col items-center text-center space-y-4 p-6 rounded-2xl hover:bg-white/50 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Banking & Insurance</h3>
                <p className="text-gray-600 text-sm">
                  Fraud detection, compliance, and AI-driven insights.
                </p>
              </div>
            </FadeInText>

            {/* Supply Chain & Logistics */}
            <FadeInText delay={0.8} duration={0.8} direction="up">
              <div className="group flex flex-col items-center text-center space-y-4 p-6 rounded-2xl hover:bg-white/50 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Supply Chain & Logistics</h3>
                <p className="text-gray-600 text-sm">
                  AI-powered inventory, fleet, and supplier intelligence.
                </p>
              </div>
            </FadeInText>
          </div>
        </div>
      </section>

      {/* Why Trust Us Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900">
            <SplitText
              text="Why Trust Us"
              className="inline-block"
              delay={0}
            />
          </h2>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center mb-4 text-blue-600">
            <WordReveal
              words={["Your", "Vision,", "Our", "Expertise—Delivered"]}
              className="justify-center"
              delay={0.3}
              stagger={0.08}
            />
          </h3>

          <FadeInText delay={0.4} duration={0.8} direction="up">
            <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-16">
              We've delivered enterprise-grade AI for Fortune 500s and high-growth startups alike.
              Our industry-specific blueprints, security-first delivery, and production SLAs turn
              pilots into measurable outcomes—cost takeout, cycle-time reduction, and new revenue—on
              timelines that match the business.
            </p>
          </FadeInText>

          {/* Trust Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <FadeInText delay={0.6} duration={0.8} direction="up">
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col justify-center">
                <div className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">100+</div>
                <div className="text-sm sm:text-base text-gray-600">Hours Saved</div>
              </div>
            </FadeInText>

            <FadeInText delay={0.7} duration={0.8} direction="up">
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col justify-center">
                <div className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">20+</div>
                <div className="text-sm sm:text-base text-gray-600 whitespace-nowrap">Years of Experience</div>
              </div>
            </FadeInText>

            <FadeInText delay={0.8} duration={0.8} direction="up">
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col justify-center">
                <div className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-sm sm:text-base text-gray-600">AI Solutions</div>
              </div>
            </FadeInText>

            <FadeInText delay={0.9} duration={0.8} direction="up">
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col justify-center">
                <div className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">10+</div>
                <div className="text-sm sm:text-base text-gray-600">
                  <span className="block sm:hidden">Products Delivered</span>
                  <span className="hidden sm:block">Software Products<br />Delivered</span>
                </div>
              </div>
            </FadeInText>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-transparent to-gray-50/50">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
            <SplitText
              text="Frequently Asked Questions"
              className="inline-block"
              delay={0}
            />
          </h2>

          <FadeInText delay={0.2} duration={0.6} direction="up">
            <p className="text-lg text-gray-600 text-center mb-12">
              Got questions? We've got answers.
            </p>
          </FadeInText>

          <Accordion
            items={[
              {
                question: "What is Agentic Labs?",
                answer: "Agentic Labs specializes in providing customized AI solutions that help businesses drive efficiency, agility, and measurable results. We help enterprises and startups optimize operations, reduce complexity, and stay ahead of market disruptions with AI-driven innovations."
              },
              {
                question: "How can AI help my business?",
                answer: "AI can drive significant improvements in efficiency, streamline operations, and enhance decision-making. At Agentic Labs, we offer AI solutions tailored to your business needs, from automation and decision intelligence to predictive insights, helping you scale faster and smarter."
              },
              {
                question: "Why should I trust Agentic Labs with my AI needs?",
                answer: "With over a decade of AI expertise, we have delivered more than 50 solutions to enterprises and startups. Our industry-specific approach ensures that our solutions are not only relevant but also highly impactful. Our focus on measurable outcomes and continuous support ensures that your business can fully leverage the power of AI."
              },
              {
                question: "What type of businesses can benefit from Agentic Labs' AI solutions?",
                answer: "Our AI solutions are suitable for businesses of all sizes, ranging from small startups to large enterprises. We tailor our services to meet the specific needs of your industry and company, ensuring that we address your unique business challenges."
              }
            ]}
          />
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50/50 to-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
            <SplitText
              text="Let's Build Production AI"
              className="inline-block"
              delay={0}
            />
          </h2>

          <FadeInText delay={0.2} duration={0.8} direction="up">
            <p className="text-lg text-gray-600 text-center mb-12">
              Share your goals. We'll propose a focused plan and timelines.
            </p>
          </FadeInText>

          <FadeInText delay={0.4} duration={0.8} direction="up">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300 bg-white"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300 bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    placeholder="Company/Project"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300 bg-white"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300 bg-white"
                  />
                </div>
              </div>

              <div>
                <textarea
                  placeholder="Tell us about your project"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300 resize-none bg-white"
                ></textarea>
              </div>

              <div className="text-center">
                <GlowButton
                  glowColor="#2563eb"
                  pulseAnimation={true}
                  onClick={() => {
                    console.log('Request a Strategy Call');
                  }}
                  className="!px-10 !py-4 !text-lg"
                >
                  Request a Strategy Call
                </GlowButton>
              </div>
            </form>
          </FadeInText>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}