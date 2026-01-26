export default function FeaturedCaseStudy() {
  return (
    <section id="case-studies" className="bg-white py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-sky-500 uppercase tracking-wider mb-3 font-display">
            Case Study
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Real Results, Real Impact
          </h2>
        </div>

        {/* Case Study Card */}
        <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200 overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left - Content */}
            <div className="p-8 lg:p-12">
              {/* Industry Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 text-sky-700 text-sm font-medium rounded-full mb-6 font-display">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Financial Services
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 font-display leading-tight">
                Automated Document Processing for a Fortune 500 Bank
              </h3>

              <p className="text-slate-600 mb-8 font-body text-lg leading-relaxed">
                A leading financial services firm processed 50,000+ loan applications monthly.
                Manual document review took 12-15 days per application, creating bottlenecks
                and customer complaints.
              </p>

              {/* Quote */}
              <blockquote className="border-l-4 border-sky-500 pl-6 mb-8">
                <p className="text-lg text-slate-700 italic mb-3 font-body">
                  &quot;Processing time dropped from 12-15 days to 6-8 days.
                  The ROI was clear within 90 days.&quot;
                </p>
                <footer className="text-slate-500 text-sm font-display font-medium">
                  — VP Operations
                </footer>
              </blockquote>

              {/* CTA */}
              <a
                href="/case-studies/document-processing"
                className="inline-flex items-center gap-2 px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white rounded-xl font-semibold transition-all duration-200 shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/30 font-display"
              >
                Read Full Case Study
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>

            {/* Right - Metrics */}
            <div className="bg-sky-500 p-8 lg:p-12 flex flex-col justify-center">
              <p className="text-sky-100 text-sm font-semibold uppercase tracking-wider mb-8 font-display">
                Key Results
              </p>
              <div className="space-y-8">
                <div>
                  <div className="text-5xl lg:text-6xl font-bold text-white mb-2 font-display">
                    12→6
                  </div>
                  <div className="text-sky-100 font-body">Days processing time reduced</div>
                </div>
                <div>
                  <div className="text-5xl lg:text-6xl font-bold text-white mb-2 font-display">
                    $2.4M
                  </div>
                  <div className="text-sky-100 font-body">Annual cost savings</div>
                </div>
                <div>
                  <div className="text-5xl lg:text-6xl font-bold text-white mb-2 font-display">
                    94%
                  </div>
                  <div className="text-sky-100 font-body">Document extraction accuracy</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* View All CTA */}
        <div className="text-center mt-10">
          <a
            href="/case-studies"
            className="inline-flex items-center gap-2 px-7 py-4 bg-white hover:bg-slate-50 border-2 border-slate-200 hover:border-slate-300 text-slate-700 rounded-xl font-semibold text-lg transition-all duration-200 font-display"
          >
            View All Case Studies
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
