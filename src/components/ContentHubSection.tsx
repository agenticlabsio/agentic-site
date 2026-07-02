export default function ContentHubSection() {
  const contentItems = [
    {
      type: 'Podcast',
      title: 'The Agentic Future',
      description: 'Conversations with CTOs shipping AI to production. Real challenges, real solutions.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
      accentClass: 'text-purple-600 bg-purple-50',
      links: [
        { label: 'Apple Podcasts', url: '#' },
        { label: 'Spotify', url: '#' },
      ],
    },
    {
      type: 'Blog',
      title: 'AI Insights',
      description: 'Technical deep-dives from the engineers building production AI systems.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      ),
      accentClass: 'text-brand-600 bg-brand-50',
      links: [
        { label: 'Read on LinkedIn', url: 'https://www.linkedin.com/company/agenticlabsio/' },
        { label: 'Follow on X', url: 'https://x.com/agenticlabs' },
      ],
    },
    {
      type: 'Portfolio',
      title: 'Our Work',
      description: '50+ AI systems deployed. See what production-ready looks like.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      accentClass: 'text-green-600 bg-green-50',
      links: [
        { label: 'View Case Studies', url: '/case-studies' },
      ],
    },
  ];

  return (
    <section className="bg-stone-50 py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-50 text-brand-700 text-sm font-medium rounded-full mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Content Hub
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight mb-4">
            Learn from the builders.
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Insights from the team shipping enterprise AI to production every week.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contentItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-stone-200 shadow-sm hover:shadow-md hover:border-brand-200 transition-all duration-300 group"
            >
              {/* Badge */}
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium mb-6 ${item.accentClass}`}>
                {item.type}
              </div>

              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${item.accentClass} group-hover:scale-105 transition-transform`}>
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-stone-900 mb-3">
                {item.title}
              </h3>
              <p className="text-stone-600 mb-6 leading-relaxed">
                {item.description}
              </p>

              {/* Links */}
              <div className="flex flex-wrap gap-4">
                {item.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.url}
                    target={link.url.startsWith('http') ? '_blank' : undefined}
                    rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors"
                  >
                    {link.label}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
