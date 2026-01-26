export default function ProcessSection() {
  const phases = [
    {
      number: '01',
      title: 'Discovery',
      duration: '1 Week',
      description: 'Map your workflows & pain points',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Design',
      duration: '2 Weeks',
      description: 'Reference architecture & roadmap',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Build',
      duration: '3 Weeks',
      description: 'Iterative development with your team',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      number: '04',
      title: 'Deploy',
      duration: '2 Weeks',
      description: 'Production rollout & monitoring',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-white py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            How We Deliver
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-body">
            A proven process that gets you from concept to production in 8 weeks.
          </p>
        </div>

        {/* Phases Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {phases.map((phase, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-sky-200 transition-all duration-300 group"
            >
              {/* Phase Number Badge */}
              <div className="absolute -top-3 left-6">
                <span className="inline-flex items-center px-3 py-1 bg-sky-500 text-white text-xs font-bold rounded-full font-display">
                  PHASE {phase.number}
                </span>
              </div>

              {/* Icon */}
              <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center text-sky-500 mt-4 mb-4 group-hover:bg-sky-100 transition-colors">
                {phase.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-1 font-display">
                {phase.title}
              </h3>
              <div className="text-sm text-sky-500 font-medium mb-3 font-display">
                {phase.duration}
              </div>
              <p className="text-slate-600 text-sm font-body">
                {phase.description}
              </p>

              {/* Connector line (hidden on last item and mobile) */}
              {index < phases.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-slate-200" />
              )}
            </div>
          ))}
        </div>

        {/* Timeline visualization */}
        <div className="hidden lg:flex justify-center items-center gap-2 mb-12">
          <div className="flex items-center gap-1 text-sm text-slate-500">
            <span className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center text-sky-500 font-bold text-xs">1</span>
            <span className="w-16 h-1 bg-sky-100 rounded" />
          </div>
          <div className="flex items-center gap-1 text-sm text-slate-500">
            <span className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center text-sky-500 font-bold text-xs">2</span>
            <span className="w-24 h-1 bg-sky-100 rounded" />
          </div>
          <div className="flex items-center gap-1 text-sm text-slate-500">
            <span className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center text-sky-500 font-bold text-xs">3</span>
            <span className="w-32 h-1 bg-sky-100 rounded" />
          </div>
          <div className="flex items-center gap-1 text-sm text-slate-500">
            <span className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center text-sky-500 font-bold text-xs">4</span>
            <span className="w-20 h-1 bg-sky-100 rounded" />
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-slate-700 font-medium">Production</span>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-4 bg-sky-500 hover:bg-sky-600 text-white rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/30 hover:-translate-y-0.5 font-display"
          >
            Start Discovery
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
