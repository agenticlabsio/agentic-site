'use client';
import { SplitText, FadeInText } from './TextAnimations';
import { GlowButton } from './AnimatedButtons';

export default function ContactFormSection() {
  return (
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
  );
}
