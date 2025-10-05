'use client';
import { FadeInText } from './TextAnimations';
import { GlowButton } from './AnimatedButtons';

export default function HeroSection() {
  return (
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
  );
}
