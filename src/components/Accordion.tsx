'use client';
import { useState } from 'react';

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export default function Accordion({ items, className = '' }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item, index) => (
        <div
          key={index}
          className={`bg-white border rounded-xl transition-all ${
            openIndex === index
              ? 'border-blue-200 shadow-sm'
              : 'border-slate-200 hover:border-slate-300'
          }`}
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full px-6 py-5 text-left flex items-center justify-between gap-4"
            aria-expanded={openIndex === index}
          >
            <span className={`font-semibold transition-colors ${
              openIndex === index ? 'text-slate-900' : 'text-slate-700'
            }`}>
              {item.question}
            </span>

            <span className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-all ${
              openIndex === index
                ? 'bg-blue-600 text-white'
                : 'bg-slate-100 text-slate-500'
            }`}>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
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
            </span>
          </button>

          <div
            className={`overflow-hidden transition-all duration-200 ${
              openIndex === index ? 'max-h-96' : 'max-h-0'
            }`}
          >
            <div className="px-6 pb-5">
              <p className="text-slate-600 leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
