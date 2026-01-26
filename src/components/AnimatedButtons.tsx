import React from 'react';

// Clean button components - no animations

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  onClick,
  variant = 'primary',
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-transparent text-slate-900 border-2 border-slate-300 hover:border-slate-400 hover:bg-slate-50',
    ghost: 'bg-slate-100 text-slate-900 hover:bg-slate-200',
  };

  return (
    <button
      onClick={onClick}
      className={`
        rounded-lg font-semibold transition-colors
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

// Legacy exports for backward compatibility
export const MagneticButton = Button;

interface LiquidButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  liquidColor?: string;
}

export const LiquidButton: React.FC<LiquidButtonProps> = ({
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
        px-6 py-3 rounded-lg font-semibold transition-colors
        ${isPrimary
          ? 'bg-slate-900 text-white hover:bg-slate-800'
          : 'bg-transparent text-slate-900 border-2 border-slate-300 hover:bg-slate-50'
        }
        ${className}
      `}
    >
      {children}
    </button>
  );
};

interface GlowButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  glowColor?: string;
  pulseAnimation?: boolean;
}

export const GlowButton: React.FC<GlowButtonProps> = ({
  children,
  className = '',
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-6 py-3 rounded-lg font-semibold transition-colors
        bg-blue-600 hover:bg-blue-700 text-white
        ${className}
      `}
    >
      {children}
    </button>
  );
};

interface ElectricButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  electricColor?: string;
  variant?: 'primary' | 'secondary';
}

export const ElectricButton: React.FC<ElectricButtonProps> = ({
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
        px-6 py-3 rounded-lg font-semibold transition-colors border-2
        ${isPrimary
          ? 'bg-white text-slate-900 border-slate-900 hover:bg-slate-50'
          : 'bg-transparent text-slate-900 border-slate-300 hover:border-slate-400'
        }
        ${className}
      `}
    >
      {children}
    </button>
  );
};
