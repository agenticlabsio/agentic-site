'use client';
import { useState, useEffect } from 'react';
import LiquidEther from '@/components/LiquidEther';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
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
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
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
      <header className="fixed top-0 left-0 right-0 z-20 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="flex justify-between items-center">
          {/* Logo on the left */}
          <div className="text-xl sm:text-2xl font-bold text-white">
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
            className="lg:hidden text-white p-2"
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
          <div className="lg:hidden mt-4 py-4 bg-black/20 backdrop-blur-md rounded-lg border border-white/10">
            <nav className="flex flex-col space-y-2 px-4">
              {items.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-white py-2 px-4 rounded hover:bg-white/10 transition-colors"
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

      {/* Content Layer */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8 pt-20 sm:pt-24">
        <main className="text-center max-w-7xl mx-auto w-full">
          {/* Security Badge */}
          <FadeInText delay={0} duration={0.6} direction="down">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
              <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L3.5 7v6c0 5.55 3.84 10.74 8.5 12 4.66-1.26 8.5-6.45 8.5-12V7L12 2zm0 3.9l5 2.5V13c0 3.53-2.16 6.82-5 8.47-2.84-1.65-5-4.94-5-8.47V8.4l5-2.5z"/>
              </svg>
              <span className="text-sm font-medium text-white/80">SOC 2 Ready • Enterprise Security</span>
            </div>
          </FadeInText>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <FadeInText delay={0.2} duration={0.8} direction="up">
              <div className="text-white">Build Agentic Products</div>
            </FadeInText>
            <FadeInText delay={0.4} duration={0.8} direction="up">
              <div className="text-blue-400">that Move the Business</div>
            </FadeInText>
          </h1>

          {/* Subheadline */}
          <FadeInText delay={0.6} duration={0.8} direction="up">
            <p className="text-lg sm:text-xl md:text-2xl text-white/70 max-w-4xl mx-auto mb-12">
              From roadmap to revenue: AI agents deployed in <span className="text-white font-semibold">weeks, not quarters</span>
            </p>
          </FadeInText>

          {/* CTA Buttons */}
          <FadeInText delay={0.8} duration={0.8} direction="up">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
              <button
                onClick={() => console.log('Explore Solutions')}
                className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                Explore Solutions
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>

              <button
                onClick={() => console.log('Book a Strategy Call')}
                className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white rounded-full font-semibold text-lg transition-all duration-300"
              >
                Book a Strategy Call
              </button>
            </div>
          </FadeInText>

          {/* Statistics Cards */}
          <FadeInText delay={1} duration={0.8} direction="up">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1">42%</div>
                <div className="text-xs text-white/60">Faster launches</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1">30%</div>
                <div className="text-xs text-white/60">Less rework</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1">+18</div>
                <div className="text-xs text-white/60">NPS uplift</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1">Weeks</div>
                <div className="text-xs text-white/60">not quarters</div>
              </div>
            </div>
          </FadeInText>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}