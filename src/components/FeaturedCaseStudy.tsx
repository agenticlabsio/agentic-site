export default function FeaturedCaseStudy() {
  return (
    <section id="case-studies" className="bg-white py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-brand-600 uppercase tracking-wider mb-3">
            Client Outcomes
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            Documented results from 50+ enterprise deployments.
          </h2>
        </div>

        {/* Case Study Card */}
        <div className="bg-gradient-to-br from-stone-50 to-white rounded-2xl border border-stone-200 overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left - Content */}
            <div className="p-8 lg:p-12">
              {/* Industry Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-50 text-brand-700 text-sm font-medium rounded-full mb-6">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Financial Services
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-4 leading-tight">
                Fortune 500 Bank Cuts Document Processing Time by 50%
              </h3>

              <p className="text-stone-600 mb-8 text-lg leading-relaxed">
                50,000+ loan applications per month. Manual review took 12-15 days each.
                We deployed an intelligent document processing system that cut that in half—
                and paid for itself in 90 days.
              </p>

              {/* Quote */}
              <blockquote className="border-l-4 border-brand-600 pl-6 mb-8">
                <p className="text-lg text-stone-700 italic mb-3">
                  &quot;Processing time dropped from 12-15 days to 6-8 days.
                  The ROI was clear within 90 days.&quot;
                </p>
                <footer className="text-stone-500 text-sm font-medium">
                  — VP Operations
                </footer>
              </blockquote>

              {/* CTA */}
              <a
                href="/case-studies/document-processing"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-medium transition-all duration-200 shadow-lg shadow-brand-600/25 hover:shadow-xl hover:shadow-brand-600/30"
              >
                Read Full Case Study
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>

            {/* Right - Metrics */}
            <div className="bg-brand-600 p-8 lg:p-12 flex flex-col justify-center">
              <p className="text-brand-100 text-sm font-medium uppercase tracking-wider mb-8">
                Key Results
              </p>
              <div className="space-y-8">
                <div>
                  <div className="text-5xl lg:text-6xl font-bold text-white mb-2">
                    50%
                  </div>
                  <div className="text-brand-100">Faster processing time</div>
                </div>
                <div>
                  <div className="text-5xl lg:text-6xl font-bold text-white mb-2">
                    $2.4M
                  </div>
                  <div className="text-brand-100">Annual cost savings</div>
                </div>
                <div>
                  <div className="text-5xl lg:text-6xl font-bold text-white mb-2">
                    94%
                  </div>
                  <div className="text-brand-100">Document extraction accuracy</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* View All CTA */}
        <div className="text-center mt-10">
          <a
            href="/case-studies"
            className="inline-flex items-center gap-2 px-7 py-4 bg-white hover:bg-stone-50 border-2 border-stone-200 hover:border-stone-300 text-stone-700 rounded-xl font-medium text-lg transition-all duration-200"
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
