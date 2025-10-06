'use client';
import { FadeInText, SplitText } from './TextAnimations';

const products = [
  {
    name: 'AgenForge',
    category: 'Agents',
    categoryColor: 'blue',
    description: 'Agentic AI platform for orchestrating goal-driven autonomous agents.',
  },
  {
    name: 'OpsIQ',
    category: 'Ops',
    categoryColor: 'cyan',
    description: 'Operations intelligence with automated insights and root-cause analysis.',
  },
  {
    name: 'OpsTalk',
    category: 'Chat',
    categoryColor: 'blue',
    description: 'Secure conversational AI for enterprise knowledge and SOPs.',
  },
  {
    name: 'OrderGenie',
    category: 'Retail',
    categoryColor: 'purple',
    description: 'AI-driven ordering and recommendations for retail and QSR.',
  },
  {
    name: 'DataMesh+',
    category: 'Data',
    categoryColor: 'cyan',
    description: 'Unified data access with governance and fine-grained line-of-business ownership.',
  },
  {
    name: 'IntegrateX',
    category: 'Integration',
    categoryColor: 'blue',
    description: 'Prebuilt enterprise connectors and pipelines for rapid integrations.',
  },
];

export default function ProductsSection() {
  return (
    <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            <SplitText
              text="Products"
              className="inline-block"
              delay={0}
            />
          </h2>

          <FadeInText delay={0.2} duration={0.8} direction="up">
            <p className="text-lg text-gray-600 mb-8">
              Modular products to accelerate your AI roadmap with governed, reliable outcomes.
            </p>
          </FadeInText>

          <FadeInText delay={0.3} duration={0.8} direction="up">
            <a
              href="/products#products-list"
              className="text-blue-600 hover:text-cyan-600 font-semibold inline-flex items-center gap-2 transition-colors duration-300"
            >
              View all products
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </FadeInText>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <FadeInText key={product.name} delay={0.4 + index * 0.1} duration={0.8} direction="up">
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-4 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full">
                <div className="mb-3">
                  <span className={`inline-block px-2.5 py-0.5 bg-${product.categoryColor}-50 text-${product.categoryColor}-600 text-xs font-semibold rounded`}>
                    {product.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  {product.description}
                </p>
                <button
                  onClick={() => console.log(`Learn more - ${product.name}`)}
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
