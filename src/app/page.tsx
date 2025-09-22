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
      <header className="fixed top-0 left-0 right-0 z-20 px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
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
              glowColor="#FF9FFC"
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
          <div className="lg:hidden mt-4 py-4 bg-black/80 backdrop-blur-md rounded-lg">
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
        <main className="text-center max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            <WordReveal
              words={['Build', 'Agentic', 'Products', 'that', 'Move', 'the', 'Business']}
              className="justify-center"
              delay={0.2}
              stagger={0.1}
            />
          </h1>

          <FadeInText delay={0.8} duration={0.8} direction="up">
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 font-medium">
              <GlowText glowColor="#FF9FFC" glowIntensity={15}>
                From roadmap to revenue
              </GlowText>
              : <SplitText text="AI agents deployed in weeks, not quarters" delay={1.2} stagger={0.02} />
            </p>
          </FadeInText>

          <FadeInText delay={1.5} duration={0.8} direction="up">
            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-4xl mx-auto mb-12 leading-relaxed">
              We partner with CXOs at enterprises and high-velocity startups to design, build, and scale agentic systems that reduce costs, unlock new growth, and integrate cleanly with your stack—securely, reliably, and with measurable ROI.
            </p>
          </FadeInText>

          {/* CTA Buttons */}
          <FadeInText delay={2} duration={0.8} direction="up">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <MagneticButton
                variant="primary"
                size="md"
                magneticStrength={0.25}
                onClick={() => console.log('Explore Solutions')}
              >
                <span className="flex items-center gap-2">
                  Explore Solutions
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </MagneticButton>

              <ElectricButton
                variant="secondary"
                electricColor="#B19EEF"
                onClick={() => console.log('Book a Strategy Call')}
              >
                Book a Strategy Call
              </ElectricButton>
            </div>
          </FadeInText>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}