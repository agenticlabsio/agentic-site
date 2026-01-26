export default function ContactFormSection() {
  return (
    <section id="contact" className="bg-sky-500 py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-white text-sm font-medium mb-8 font-display">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          30-minute discovery call
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6 font-display">
          Ready to see results?
        </h2>
        <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto font-body leading-relaxed">
          Book a discovery call. We&apos;ll map your highest-impact AI opportunities
          and show you what&apos;s possible in the next 8 weeks.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a
            href="mailto:contact@agenticlabs.io?subject=Discovery%20Call%20Request"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-sky-600 rounded-xl font-semibold text-lg hover:bg-sky-50 transition-all duration-200 shadow-lg hover:shadow-xl font-display"
          >
            Schedule Discovery Call
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a
            href="#case-studies"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 border-2 border-white/30 text-white rounded-xl font-semibold text-lg transition-all duration-200 font-display"
          >
            View Case Studies
          </a>
        </div>

        {/* Trust signals */}
        <div className="flex flex-wrap justify-center gap-6 text-white/70 text-sm">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="font-body">No sales pitch</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="font-body">No obligations</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="font-body">Response within 24 hours</span>
          </div>
        </div>
      </div>
    </section>
  );
}
