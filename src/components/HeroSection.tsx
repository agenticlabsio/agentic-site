export default function HeroSection() {
  return (
    <section className="bg-white pt-28 pb-20 lg:pt-36 lg:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text */}
          <div>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 border border-sky-100 mb-6">
              <span className="w-2 h-2 bg-sky-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-sky-700 font-display">
                Enterprise AI That Ships
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight mb-6">
              Build AI Systems That{' '}
              <span className="text-sky-500">Deliver Results</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8 max-w-xl font-body">
              From pilot to production in weeks, not quarters. We build AI agents
              that cut costs, accelerate cycles, and create measurable business impact.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-sky-500 hover:bg-sky-600 text-white rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/30 hover:-translate-y-0.5 font-display"
              >
                Schedule Discovery Call
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#case-studies"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white hover:bg-slate-50 border-2 border-slate-200 text-slate-700 rounded-xl font-semibold text-lg transition-all duration-200 font-display"
              >
                View Case Studies
              </a>
            </div>

            {/* Trust Signal */}
            <p className="text-sm text-slate-500 flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              No credit card required. Response within 24 hours.
            </p>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            {/* Stats Card */}
            <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200 p-8 shadow-xl">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 text-sm font-medium rounded-full mb-4">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  Results Across All Deployments
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white rounded-xl border border-slate-100">
                  <div className="text-3xl sm:text-4xl font-bold text-sky-500 mb-1 font-display">
                    $3.2M+
                  </div>
                  <div className="text-sm text-slate-600">Avg Client Savings</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl border border-slate-100">
                  <div className="text-3xl sm:text-4xl font-bold text-sky-500 mb-1 font-display">
                    42%
                  </div>
                  <div className="text-sm text-slate-600">Faster Launches</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl border border-slate-100">
                  <div className="text-3xl sm:text-4xl font-bold text-sky-500 mb-1 font-display">
                    6-8 Wks
                  </div>
                  <div className="text-sm text-slate-600">To Production</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl border border-slate-100">
                  <div className="text-3xl sm:text-4xl font-bold text-sky-500 mb-1 font-display">
                    50+
                  </div>
                  <div className="text-sm text-slate-600">Systems Deployed</div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-sky-100 rounded-2xl -z-10 opacity-60" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-sky-50 rounded-full -z-10 opacity-80" />
          </div>
        </div>
      </div>
    </section>
  );
}
