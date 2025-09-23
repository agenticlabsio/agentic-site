'use client';
import React, { useEffect, useRef, useState } from 'react';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  animateOnView?: boolean;
}

export const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  delay = 0,
  stagger = 0.03,
  duration = 0.6,
  animateOnView = true,
}) => {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!animateOnView) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [animateOnView]);

  return (
    <span ref={containerRef} className={`inline-block ${className}`}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className="inline-block transition-all"
          style={{
            transform: isInView ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.9)',
            opacity: isInView ? 1 : 0,
            transitionDelay: `${delay + index * stagger}s`,
            transitionDuration: `${duration}s`,
            transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};

interface FadeInTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export const FadeInText: React.FC<FadeInTextProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 0.8,
  direction = 'up',
}) => {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    if (!isInView) {
      switch (direction) {
        case 'up':
          return 'translateY(30px)';
        case 'down':
          return 'translateY(-30px)';
        case 'left':
          return 'translateX(30px)';
        case 'right':
          return 'translateX(-30px)';
        default:
          return 'translateY(30px)';
      }
    }
    return 'translate(0)';
  };

  return (
    <div
      ref={containerRef}
      className={`transition-all ${className}`}
      style={{
        transform: getTransform(),
        opacity: isInView ? 1 : 0,
        transitionDelay: `${delay}s`,
        transitionDuration: `${duration}s`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {children}
    </div>
  );
};

interface GlowTextProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  glowIntensity?: number;
}

export const GlowText: React.FC<GlowTextProps> = ({
  children,
  className = '',
  glowColor = '#5227FF',
  glowIntensity = 20,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span
      className={`relative inline-block transition-all duration-300 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        textShadow: isHovered
          ? `0 0 ${glowIntensity}px ${glowColor}, 0 0 ${glowIntensity * 2}px ${glowColor}`
          : 'none',
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
      }}
    >
      {children}
    </span>
  );
};

interface ShimmerButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

export const ShimmerButton: React.FC<ShimmerButtonProps> = ({
  children,
  className = '',
  onClick,
  variant = 'primary',
}) => {
  const isPrimary = variant === 'primary';

  return (
    <button
      onClick={onClick}
      className={`
        relative overflow-hidden px-8 py-4 rounded-full font-semibold text-lg
        transition-all duration-300 transform hover:scale-105
        ${isPrimary
          ? 'bg-gray-900 text-white'
          : 'bg-transparent text-gray-900 border-2 border-gray-900 hover:bg-gray-900 hover:text-white'
        }
        ${className}
      `}
    >
      <span className="relative z-10">{children}</span>
      <div
        className={`
          absolute inset-0 -z-0
          ${isPrimary ? 'bg-gradient-to-r from-transparent via-white/30 to-transparent' : ''}
        `}
        style={{
          animation: isPrimary ? 'shimmer 3s infinite' : 'none',
        }}
      />
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </button>
  );
};

interface WordRevealProps {
  words: string[];
  className?: string;
  delay?: number;
  stagger?: number;
}

export const WordReveal: React.FC<WordRevealProps> = ({
  words,
  className = '',
  delay = 0,
  stagger = 0.1,
}) => {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={`flex flex-wrap gap-x-2 ${className}`}>
      {words.map((word, index) => (
        <span
          key={index}
          className="inline-block overflow-hidden"
        >
          <span
            className="inline-block transition-all"
            style={{
              transform: isInView ? 'translateY(0)' : 'translateY(100%)',
              opacity: isInView ? 1 : 0,
              transitionDelay: `${delay + index * stagger}s`,
              transitionDuration: '0.8s',
              transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </div>
  );
};