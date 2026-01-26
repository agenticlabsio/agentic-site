const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <h2 className="text-xl font-bold text-white mb-4 font-display">Agentic Labs</h2>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6 font-body">
              Enterprise AI systems that deliver results.
              From roadmap to revenue in weeks, not quarters.
            </p>
            <a
              href="mailto:contact@agenticlabs.io"
              className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 text-sm transition-colors font-display font-medium"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              contact@agenticlabs.io
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4 font-display">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-slate-400 hover:text-white text-sm transition-colors font-body">
                  Home
                </a>
              </li>
              <li>
                <a href="/solutions" className="text-slate-400 hover:text-white text-sm transition-colors font-body">
                  Solutions
                </a>
              </li>
              <li>
                <a href="/case-studies" className="text-slate-400 hover:text-white text-sm transition-colors font-body">
                  Case Studies
                </a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4 font-display">
              Get Started
            </h3>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-sky-500 hover:bg-sky-400 text-white rounded-lg text-sm font-semibold transition-colors font-display"
            >
              Book a Demo
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm font-body">
            &copy; {currentYear} Agentic Labs Solutions LLC
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 hover:text-slate-300 text-sm transition-colors font-body">
              Privacy
            </a>
            <a href="#" className="text-slate-500 hover:text-slate-300 text-sm transition-colors font-body">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
