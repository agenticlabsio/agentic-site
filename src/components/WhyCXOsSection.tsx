'use client';
import { FadeInText, GlowText } from './TextAnimations';
import { GlowButton } from './AnimatedButtons';

export default function WhyCXOsSection() {
  return (
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
  );
}
