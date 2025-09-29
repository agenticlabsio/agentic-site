'use client';

import React, { useState, useEffect, useRef, ReactNode } from 'react';

interface FullPageScrollProps {
  children: ReactNode[];
  className?: string;
}

const FullPageScroll: React.FC<FullPageScrollProps> = ({ children, className = '' }) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartY = useRef(0);
  const lastScrollTime = useRef(0);

  const scrollToSection = (index: number) => {
    if (index < 0 || index >= children.length || isScrolling) return;

    setIsScrolling(true);
    setCurrentSection(index);

    // Smooth scroll animation
    if (containerRef.current) {
      containerRef.current.style.transform = `translateY(-${index * 100}vh)`;
    }

    // Prevent rapid scrolling - increased timeout
    setTimeout(() => {
      setIsScrolling(false);
    }, 1500);
  };

  // Handle wheel events
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();

      if (isScrolling) return;

      // Throttle scroll events - check both time and scrolling state
      const now = Date.now();
      if (now - lastScrollTime.current < 1500) return;

      // Only trigger on significant scroll
      if (Math.abs(e.deltaY) < 30) return;

      lastScrollTime.current = now;

      if (e.deltaY > 0) {
        // Scrolling down
        scrollToSection(currentSection + 1);
      } else if (e.deltaY < 0) {
        // Scrolling up
        scrollToSection(currentSection - 1);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentSection, isScrolling, children.length]);

  // Handle touch events for mobile
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isScrolling) return;

      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY.current - touchEndY;

      // Minimum swipe distance
      if (Math.abs(deltaY) < 50) return;

      if (deltaY > 0) {
        // Swiped up
        scrollToSection(currentSection + 1);
      } else {
        // Swiped down
        scrollToSection(currentSection - 1);
      }
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentSection, isScrolling, children.length]);

  // Handle keyboard navigation
  useEffect(() => {
    let lastKeyTime = 0;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling) return;

      // Throttle keyboard events
      const now = Date.now();
      if (now - lastKeyTime < 1500) return;

      switch(e.key) {
        case 'ArrowDown':
        case 'PageDown':
          e.preventDefault();
          lastKeyTime = now;
          scrollToSection(currentSection + 1);
          break;
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault();
          lastKeyTime = now;
          scrollToSection(currentSection - 1);
          break;
        case 'Home':
          e.preventDefault();
          lastKeyTime = now;
          scrollToSection(0);
          break;
        case 'End':
          e.preventDefault();
          lastKeyTime = now;
          scrollToSection(children.length - 1);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSection, isScrolling, children.length]);

  return (
    <div className={`fixed inset-0 overflow-hidden ${className}`}>
      {/* Sections Container */}
      <div
        ref={containerRef}
        className="relative h-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateY(-${currentSection * 100}vh)` }}
      >
        {children.map((child, index) => (
          <div
            key={index}
            className="relative h-screen w-full overflow-hidden"
          >
            {child}
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        {children.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSection === index
                ? 'bg-blue-600 scale-125'
                : 'bg-gray-400 hover:bg-gray-600'
            }`}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator (for first section) */}
      {currentSection === 0 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 animate-bounce">
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default FullPageScroll;