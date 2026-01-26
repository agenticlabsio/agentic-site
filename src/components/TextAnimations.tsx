import React from 'react';

// Static versions of animation components - no animations, just render children

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
}) => {
  return <span className={className}>{text}</span>;
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
}) => {
  return <div className={className}>{children}</div>;
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
}) => {
  return <span className={className}>{children}</span>;
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
        px-8 py-4 rounded-lg font-semibold text-lg transition-colors
        ${isPrimary
          ? 'bg-slate-900 text-white hover:bg-slate-800'
          : 'bg-transparent text-slate-900 border-2 border-slate-900 hover:bg-slate-900 hover:text-white'
        }
        ${className}
      `}
    >
      {children}
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
}) => {
  return (
    <div className={`flex flex-wrap gap-x-2 ${className}`}>
      {words.map((word, index) => (
        <span key={index}>{word}</span>
      ))}
    </div>
  );
};
