'use client';
import { SplitText, FadeInText } from './TextAnimations';

export default function IndustriesSection() {
  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
          <SplitText
            text="Industries we serve"
            className="inline-block"
            delay={0}
          />
        </h2>

        <FadeInText delay={0.2} duration={0.6} direction="up">
          <p className="text-lg text-gray-600 text-center mb-16">
            Practical, governed AI tailored to your domain and tech stack.
          </p>
        </FadeInText>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Healthcare */}
          <FadeInText delay={0.3} duration={0.8} direction="up">
            <div className="group flex flex-col items-center text-center space-y-4 p-6 rounded-2xl hover:bg-white/50 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-red-400 to-red-500 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM4 8h8v2H4zM4 13h5v2H4zM4 18h5v2H4z" />
                  <path d="M20 3H4C2.9 3 2 3.9 2 5v14c0 1.1.9 2 2 2h8.5c-.3-.6-.5-1.3-.5-2H4V5h16v7c.7 0 1.4.2 2 .5V5c0-1.1-.9-2-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Healthcare</h3>
              <p className="text-gray-600 text-sm">
                Smarter care, automated workflows, better outcomes.
              </p>
            </div>
          </FadeInText>

          {/* Software & Platforms */}
          <FadeInText delay={0.4} duration={0.8} direction="up">
            <div className="group flex flex-col items-center text-center space-y-4 p-6 rounded-2xl hover:bg-white/50 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Software & Platforms</h3>
              <p className="text-gray-600 text-sm">
                Scalable AI for automation, analytics, and growth.
              </p>
            </div>
          </FadeInText>

          {/* Retail */}
          <FadeInText delay={0.5} duration={0.8} direction="up">
            <div className="group flex flex-col items-center text-center space-y-4 p-6 rounded-2xl hover:bg-white/50 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-teal-500 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0020 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Retail</h3>
              <p className="text-gray-600 text-sm">
                AI-driven demand forecasting & personalized shopping.
              </p>
            </div>
          </FadeInText>

          {/* Manufacturing & Industry 4.0 */}
          <FadeInText delay={0.6} duration={0.8} direction="up">
            <div className="group flex flex-col items-center text-center space-y-4 p-6 rounded-2xl hover:bg-white/50 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 9h-4.79l-4.38-6.56c-.19-.28-.51-.42-.83-.42s-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1zM12 4.8L14.8 9H9.2L12 4.8zM18.5 19l-12.99.01L3.31 11H20.7l-2.2 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Manufacturing & Industry 4.0</h3>
              <p className="text-gray-600 text-sm">
                Optimized production, predictive maintenance, and AI automation.
              </p>
            </div>
          </FadeInText>

          {/* Banking & Insurance */}
          <FadeInText delay={0.7} duration={0.8} direction="up">
            <div className="group flex flex-col items-center text-center space-y-4 p-6 rounded-2xl hover:bg-white/50 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Banking & Insurance</h3>
              <p className="text-gray-600 text-sm">
                Fraud detection, compliance, and AI-driven insights.
              </p>
            </div>
          </FadeInText>

          {/* Supply Chain & Logistics */}
          <FadeInText delay={0.8} duration={0.8} direction="up">
            <div className="group flex flex-col items-center text-center space-y-4 p-6 rounded-2xl hover:bg-white/50 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Supply Chain & Logistics</h3>
              <p className="text-gray-600 text-sm">
                AI-powered inventory, fleet, and supplier intelligence.
              </p>
            </div>
          </FadeInText>
        </div>
      </div>
    </section>
  );
}
