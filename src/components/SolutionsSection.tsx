export default function SolutionsSection() {
  return (
    <section id="solutions" className="bg-stone-50 py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-[-0.02em] mb-4">
            Enterprise AI Solutions
          </h2>
          <p className="text-xl text-stone-700 font-medium max-w-2xl mx-auto">
            Production-ready systems designed for your workflows. Deploy in weeks. Measure ROI in days.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Featured - Large Card */}
          <div className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-brand-400 to-brand-500 rounded-2xl p-8 lg:p-10 flex flex-col justify-between shadow-xl shadow-brand-500/20">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/30 text-stone-900 text-sm font-bold rounded-full mb-6">
                <span className="w-1.5 h-1.5 bg-stone-900 rounded-full" />
                Featured
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 mb-4">
                Intelligent Agents
              </h3>
              <div className="text-stone-800 font-semibold text-lg mb-6 max-w-lg leading-relaxed">
                Deploy autonomous AI agents that execute complex workflows, make decisions, and integrate with your existing stack.
              </div>
              <ul className="space-y-2 mb-8">
                {['Multi-agent orchestration', 'Enterprise tool integration', '40+ hours saved weekly'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-stone-900 font-medium">
                    <svg className="w-5 h-5 text-stone-800 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-stone-900 rounded-xl font-bold hover:bg-stone-50 transition-colors w-fit"
            >
              Explore Solution
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

          {/* Customer Service */}
          <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm hover:shadow-md hover:border-brand-200 transition-all duration-300 group">
            <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center text-brand-700 mb-4 group-hover:bg-brand-200 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-stone-900 mb-2">
              Customer Service
            </h3>
            <p className="text-sm font-medium text-stone-700 mb-4">
              Resolve 60% of tickets automatically.
            </p>
            <div className="text-2xl font-bold text-stone-900">
              $2.1M
            </div>
            <div className="text-sm font-semibold text-stone-600">annual savings</div>
          </div>

          {/* Document Processing */}
          <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm hover:shadow-md hover:border-brand-200 transition-all duration-300 group">
            <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center text-brand-700 mb-4 group-hover:bg-brand-200 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-stone-900 mb-2">
              Document Processing
            </h3>
            <p className="text-sm font-medium text-stone-700 mb-4">
              Extract data in seconds. 94% accuracy.
            </p>
            <div className="text-2xl font-bold text-stone-900">
              94%
            </div>
            <div className="text-sm font-semibold text-stone-600">accuracy rate</div>
          </div>

        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="/solutions"
            className="inline-flex items-center gap-2 px-7 py-4 bg-white hover:bg-stone-50 border-2 border-stone-200 hover:border-stone-300 text-stone-900 rounded-xl font-bold text-lg transition-all duration-200"
          >
            Explore All Solutions
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
