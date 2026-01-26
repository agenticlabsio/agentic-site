export default function ProblemSection() {
  const comparison = [
    { typical: '6-12 month runway', agentic: '6-8 week delivery' },
    { typical: 'Unclear ROI', agentic: 'Defined KPIs upfront' },
    { typical: 'Science project', agentic: 'Production system' },
    { typical: 'Vendor lock-in', agentic: 'Your IP, your data' },
    { typical: 'Hallucination risk', agentic: 'Governed outputs' },
  ];

  return (
    <section className="bg-slate-50 py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Most AI initiatives fail.
          </h2>
          <p className="text-xl text-slate-600 font-body">
            Here&apos;s why yours won&apos;t.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Typical Column */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display">Typical AI Pilot</h3>
            </div>
            <div className="space-y-4">
              {comparison.map((row, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 py-3 border-b border-slate-100 last:border-0"
                >
                  <span className="text-slate-600 font-body">{row.typical}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Agentic Column */}
          <div className="bg-blue-600 rounded-2xl p-8 shadow-lg shadow-blue-600/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white font-display">Agentic Approach</h3>
            </div>
            <div className="space-y-4">
              {comparison.map((row, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 py-3 border-b border-white/20 last:border-0"
                >
                  <svg className="w-5 h-5 text-blue-200 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white font-medium font-body">{row.agentic}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
