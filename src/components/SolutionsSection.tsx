'use client';
import { FadeInText, SplitText } from './TextAnimations';

const solutions = [
  {
    name: 'Customer Service Automation',
    category: 'Service',
    categoryColor: 'blue',
    description: 'AI-powered support agents that resolve tickets, reduce response time, and improve CSAT.',
  },
  {
    name: 'Document Processing',
    category: 'Automation',
    categoryColor: 'purple',
    description: 'Intelligent extraction, classification, and workflow automation for business documents.',
  },
  {
    name: 'Predictive Maintenance',
    category: 'Manufacturing',
    categoryColor: 'amber',
    description: 'Reduce downtime with AI-driven equipment monitoring and failure prediction.',
  },
  {
    name: 'Fraud Detection',
    category: 'Security',
    categoryColor: 'red',
    description: 'Real-time transaction monitoring and anomaly detection to prevent fraud.',
  },
  {
    name: 'Supply Chain Optimization',
    category: 'Logistics',
    categoryColor: 'teal',
    description: 'Demand forecasting, inventory optimization, and route planning with AI.',
  },
  {
    name: 'Personalized Marketing',
    category: 'Marketing',
    categoryColor: 'cyan',
    description: 'AI-driven customer segmentation and personalized campaign recommendations.',
  },
];

export default function SolutionsSection() {
  return (
    <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            <SplitText
              text="Solutions"
              className="inline-block"
              delay={0}
            />
          </h2>

          <FadeInText delay={0.2} duration={0.8} direction="up">
            <p className="text-lg text-gray-600 mb-8">
              End-to-end solutions designed for your industry and business challenges.
            </p>
          </FadeInText>

          <FadeInText delay={0.3} duration={0.8} direction="up">
            <button
              onClick={() => console.log('View all solutions')}
              className="text-cyan-500 hover:text-cyan-600 font-semibold inline-flex items-center gap-2 transition-colors duration-300"
            >
              View all solutions
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </FadeInText>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {solutions.map((solution, index) => (
            <FadeInText key={solution.name} delay={0.4 + index * 0.1} duration={0.8} direction="up">
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-4 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full">
                <div className="mb-3">
                  <span className={`inline-block px-2.5 py-0.5 bg-${solution.categoryColor}-50 text-${solution.categoryColor}-600 text-xs font-semibold rounded`}>
                    {solution.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{solution.name}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  {solution.description}
                </p>
                <button
                  onClick={() => console.log(`Learn more - ${solution.name}`)}
                  className="text-cyan-500 hover:text-cyan-600 font-semibold text-sm inline-flex items-center gap-2 transition-colors duration-300"
                >
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </FadeInText>
          ))}
        </div>
      </div>
    </section>
  );
}
