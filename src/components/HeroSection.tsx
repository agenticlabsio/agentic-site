export default function HeroSection() {
  return (
    <section className="bg-white pt-28 pb-24 lg:pt-36 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text */}
          <div>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 border border-brand-100 mb-8">
              <span className="w-2 h-2 bg-brand-600 rounded-full animate-pulse" />
              <span className="text-sm font-bold text-stone-800">
                Trusted by Fortune 500 Leaders
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-stone-900 leading-[1.1] tracking-[-0.02em] mb-6">
              Enterprise AI.{' '}
              <span className="text-brand-600">Production-Ready.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-stone-700 font-medium leading-relaxed mb-8 max-w-xl">
              $3.2M average savings. 8 weeks to production. 50+ successful deployments. Zero failures.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="https://calendly.com/cloud-agenticlabs/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-brand-500 hover:bg-brand-600 text-stone-900 rounded-xl font-bold text-lg transition-all duration-200 shadow-lg shadow-brand-500/25 hover:shadow-xl hover:shadow-brand-500/30 hover:-translate-y-0.5"
              >
                Schedule Executive Briefing
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#case-studies"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white hover:bg-stone-50 border-2 border-stone-200 text-stone-900 rounded-xl font-bold text-lg transition-all duration-200"
              >
                View Client Outcomes
              </a>
            </div>

            {/* Trust Signal */}
            <p className="text-sm text-stone-600 font-semibold flex items-center gap-2">
              <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Free 30-minute session. Response within 24 hours.
            </p>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            {/* Stats Card */}
            <div className="bg-gradient-to-br from-stone-50 to-white rounded-2xl border border-stone-200 p-8 shadow-lg">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-800 text-sm font-bold rounded-full mb-4">
                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full" />
                  Proven Track Record
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white rounded-2xl border border-stone-200 shadow-sm">
                  <div className="text-3xl sm:text-4xl font-bold text-stone-900 mb-1">
                    $3.2M+
                  </div>
                  <div className="text-sm font-semibold text-stone-600">Avg Savings</div>
                </div>
                <div className="text-center p-4 bg-white rounded-2xl border border-stone-200 shadow-sm">
                  <div className="text-3xl sm:text-4xl font-bold text-stone-900 mb-1">
                    8 Wks
                  </div>
                  <div className="text-sm font-semibold text-stone-600">To Production</div>
                </div>
                <div className="text-center p-4 bg-white rounded-2xl border border-stone-200 shadow-sm">
                  <div className="text-3xl sm:text-4xl font-bold text-stone-900 mb-1">
                    50+
                  </div>
                  <div className="text-sm font-semibold text-stone-600">Deployments</div>
                </div>
                <div className="text-center p-4 bg-white rounded-2xl border border-stone-200 shadow-sm">
                  <div className="text-3xl sm:text-4xl font-bold text-stone-900 mb-1">
                    0
                  </div>
                  <div className="text-sm font-semibold text-stone-600">Failures</div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-100 rounded-2xl -z-10 opacity-60" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-brand-50 rounded-full -z-10 opacity-80" />
          </div>
        </div>
      </div>
    </section>
  );
}
