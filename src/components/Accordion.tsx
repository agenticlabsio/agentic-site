'use client';

import React, { useState } from 'react';
import { FadeInText } from './TextAnimations';

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

const Accordion: React.FC<AccordionProps> = ({ items, className = '' }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const getIcon = (index: number) => {
    const icons = [
      // Lightbulb for "What is"
      <svg key="0" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>,
      // Rocket for "How can AI help"
      <svg key="1" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>,
      // Shield for "Why trust"
      <svg key="2" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>,
      // Building for "What type of businesses"
      <svg key="3" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ];
    return icons[index] || icons[0];
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item, index) => (
        <FadeInText key={index} delay={index * 0.1} duration={0.6} direction="up">
          <div
            className={`group relative bg-white/90 backdrop-blur-sm border-2 transition-all duration-500 ${openIndex === index
              ? 'border-blue-400 shadow-2xl scale-[1.02] rounded-3xl'
              : 'border-gray-200 hover:border-gray-300 rounded-2xl hover:shadow-xl'
              }`}
          >
            {/* Gradient overlay on hover */}
            <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl transition-opacity duration-300 ${openIndex === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              }`} />

            <button
              onClick={() => toggleItem(index)}
              className="relative w-full px-6 py-6 text-left flex items-center gap-4 transition-all duration-200"
              aria-expanded={openIndex === index}
            >
              {/* Icon */}
              <div className={`flex-shrink-0 p-3 rounded-xl transition-all duration-300 ${openIndex === index
                ? 'bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-lg'
                : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
                }`}>
                {getIcon(index)}
              </div>

              {/* Question */}
              <span className={`flex-grow text-lg font-semibold transition-colors duration-300 ${openIndex === index ? 'text-gray-900' : 'text-gray-700'
                }`}>
                {item.question}
              </span>

              {/* Expand/Collapse indicator */}
              <div className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${openIndex === index
                ? 'bg-gradient-to-br from-blue-500 to-purple-500 text-white rotate-180'
                : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200'
                }`}>
                <svg
                  className="w-5 h-5 transition-transform duration-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </button>

            {/* Answer */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
            >
              <div className="relative px-6 pb-6 pl-[88px]">
                <div className="text-gray-600 leading-relaxed">
                  {item.answer || (
                    <span className="italic text-gray-400">
                      Answer will be added soon...
                    </span>
                  )}
                </div>

                {/* Bottom gradient line when open */}
                {openIndex === index && (
                  <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />
                )}
              </div>
            </div>
          </div>
        </FadeInText>
      ))}
    </div>
  );
};

export default Accordion;