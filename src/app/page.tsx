'use client';
import { useState, useEffect } from 'react';
import LiquidEther from '@/components/LiquidEther';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import WhyCXOsSection from '@/components/WhyCXOsSection';
import ProductsSection from '@/components/ProductsSection';
import SolutionsSection from '@/components/SolutionsSection';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import IndustriesSection from '@/components/IndustriesSection';
import WhyTrustUsSection from '@/components/WhyTrustUsSection';
import FAQSection from '@/components/FAQSection';
import ContactFormSection from '@/components/ContactFormSection';
import { LiquidButton, GlowButton } from '@/components/AnimatedButtons';
import PartnersDropdown from '@/components/PartnersDropdown';

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
    { label: "Partners", dropdown: <PartnersDropdown /> },
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
      <HeroSection />

      {/* Why CXOs Choose Us Section */}
      <WhyCXOsSection />

      {/* Products Section */}
      <ProductsSection />

      {/* Solutions Section */}
      <SolutionsSection />

      {/* Case Studies Section */}
      <CaseStudiesSection />

      {/* Industries We Serve Section */}
      <IndustriesSection />

      {/* Why Trust Us Section */}
      <WhyTrustUsSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Contact Form Section */}
      <ContactFormSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}