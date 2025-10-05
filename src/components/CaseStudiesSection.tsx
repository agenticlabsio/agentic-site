'use client';
import { SplitText, FadeInText } from './TextAnimations';

export default function CaseStudiesSection() {
  return (
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
  );
}
