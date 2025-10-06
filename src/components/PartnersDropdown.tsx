'use client';
import { useState, useRef, useEffect } from 'react';

interface PartnerOption {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

const partnerOptions: PartnerOption[] = [
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
      </svg>
    ),
    title: 'Partner Program',
    description: 'Explore the Agentic Labs Partner Program to innovate, deliver, and scale with Agentic Labs',
    href: '#partner-program'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      </svg>
    ),
    title: 'Become a Partner',
    description: 'Join our partner ecosystem. Choose the partner path that best fits your expertise',
    href: '#become-partner'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
    title: 'Find a Partner',
    description: 'Connect with an Agentic Labs Partner to reach your business goals',
    href: '#find-partner'
  }
];

export interface PartnersDropdownProps {
  onToggle?: (isOpen: boolean) => void;
  onOptionClick?: () => void;
}

export default function PartnersDropdown({ onToggle, onOptionClick }: PartnersDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        onToggle?.(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onToggle]);

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const newState = !isOpen;
    setIsOpen(newState);
    onToggle?.(newState);
  };

  const handleOptionClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(false);
    onToggle?.(false);
    onOptionClick?.();
  };

  return (
    <div className="relative">
      <a
        ref={buttonRef}
        href="#"
        onClick={handleToggle}
        className="outline-none py-[0.6em] px-[1em] inline-flex items-center gap-1"
        data-nav-text="Partners"
      >
        <span>Partners</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </a>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="fixed left-0 right-0 bg-white shadow-2xl border-t border-gray-200 z-50"
          style={{
            visibility: 'visible',
            pointerEvents: 'auto',
            top: `${buttonRef.current?.getBoundingClientRect().bottom || 0}px`
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">
              PARTNERS
            </h3>

            <div className="grid grid-cols-3 gap-8">
              {partnerOptions.map((option, index) => (
                <a
                  key={index}
                  href={option.href}
                  onClick={handleOptionClick}
                  className="group flex flex-col items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-200"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-200">
                    {option.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                      {option.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {option.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
