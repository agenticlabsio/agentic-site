export default function SolutionsSection() {
  return (
    <section id="solutions" className="bg-stone-50 py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-stone-900 tracking-[-0.02em] mb-4">
            AI that does the work—not just demos of it.
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            We build production systems that integrate with your stack
            and deliver ROI from week one.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Featured - Large Card */}
          <div className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-brand-600 to-brand-700 rounded-2xl p-8 lg:p-10 flex flex-col justify-between shadow-xl shadow-brand-600/20">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full mb-6">
                <span className="w-1.5 h-1.5 bg-white rounded-full" />
                Featured Solution
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display text-white mb-4">
                Intelligent Agents
              </h3>
              <p className="text-white text-lg mb-6 max-w-lg leading-relaxed">
                Deploy agents that handle your team&apos;s most tedious work—ticket
                routing, data entry, report generation—while they focus on
                high-value decisions.
              </p>
              <ul className="space-y-2 mb-8">
                {['Multi-agent orchestration', 'Tool calling & function execution', '40+ hours reclaimed per team, per week'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-white">
                    <svg className="w-5 h-5 text-brand-200 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="https://calendly.com/cloud-agenticlabs/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-700 rounded-xl font-medium hover:bg-brand-50 transition-colors w-fit"
            >
              Learn More
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

          {/* Customer Service */}
          <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm hover:shadow-md hover:border-brand-200 transition-all duration-300 group">
            <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center text-brand-600 mb-4 group-hover:bg-brand-100 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-stone-900 mb-2">
              Customer Service Automation
            </h3>
            <p className="text-sm text-stone-600 mb-4">
              Resolve 60% of tickets without human intervention.
            </p>
            <div className="text-2xl font-bold text-brand-600">
              $2.1M
            </div>
            <div className="text-sm text-stone-500">annual savings (avg)</div>
          </div>

          {/* Document Processing */}
          <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm hover:shadow-md hover:border-brand-200 transition-all duration-300 group">
            <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center text-brand-600 mb-4 group-hover:bg-brand-100 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-stone-900 mb-2">
              Document Processing
            </h3>
            <p className="text-sm text-stone-600 mb-4">
              Extract data from invoices, contracts, and forms in seconds—not hours.
            </p>
            <div className="text-2xl font-bold text-brand-600">
              90%
            </div>
            <div className="text-sm text-stone-500">accuracy, zero manual entry</div>
          </div>

          {/* Bottom Row */}
          <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm hover:shadow-md hover:border-brand-200 transition-all duration-300 group">
            <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center text-brand-600 mb-4 group-hover:bg-brand-100 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-stone-900 mb-2">
              Predictive Analytics
            </h3>
            <p className="text-sm text-stone-600 mb-2">
              Predict failures before they happen.
            </p>
            <div className="text-xl font-bold text-brand-600">$800K</div>
            <div className="text-sm text-stone-500">avg annual savings</div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm hover:shadow-md hover:border-brand-200 transition-all duration-300 group">
            <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center text-brand-600 mb-4 group-hover:bg-brand-100 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-stone-900 mb-2">
              Fraud Detection
            </h3>
            <p className="text-sm text-stone-600 mb-2">
              Stop fraud in real-time.
            </p>
            <div className="text-xl font-bold text-brand-600">99.9%</div>
            <div className="text-sm text-stone-500">detection rate</div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm hover:shadow-md hover:border-brand-200 transition-all duration-300 group">
            <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center text-brand-600 mb-4 group-hover:bg-brand-100 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-stone-900 mb-2">
              Data Integration
            </h3>
            <p className="text-sm text-stone-600 mb-2">
              Unify your data stack.
            </p>
            <div className="text-xl font-bold text-brand-600">Unified</div>
            <div className="text-sm text-stone-500">data mesh architecture</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="/solutions"
            className="inline-flex items-center gap-2 px-7 py-4 bg-white hover:bg-stone-50 border-2 border-stone-200 hover:border-stone-300 text-stone-700 rounded-xl font-medium text-lg transition-all duration-200"
          >
            View All Solutions
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
