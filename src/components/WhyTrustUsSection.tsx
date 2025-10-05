'use client';
import { SplitText, FadeInText, WordReveal } from './TextAnimations';

export default function WhyTrustUsSection() {
  return (
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
  );
}
