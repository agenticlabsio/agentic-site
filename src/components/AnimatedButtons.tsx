'use client';
import React, { useRef, useState, useEffect, MouseEvent } from 'react';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  magneticStrength?: number;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  onClick,
  variant = 'primary',
  size = 'md',
  magneticStrength = 0.3,
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [buttonPos, setButtonPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current || !isHovered) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distX = (e.clientX - centerX) * magneticStrength;
    const distY = (e.clientY - centerY) * magneticStrength;

    setButtonPos({ x: distX, y: distY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setButtonPos({ x: 0, y: 0 });
  };

  const sizeClasses = {
    sm: 'px-6 py-2 text-base',
    md: 'px-8 py-4 text-lg',
    lg: 'px-10 py-5 text-xl',
  };

  const variantClasses = {
    primary: 'bg-white text-black hover:shadow-2xl',
    secondary: 'bg-transparent text-white border-2 border-white hover:bg-white hover:text-black',
    ghost: 'bg-white/10 text-white backdrop-blur-sm hover:bg-white/20',
  };

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`
        relative overflow-hidden rounded-full font-semibold
        transition-all duration-300 ease-out
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
      `}
      style={{
        transform: `translate(${buttonPos.x}px, ${buttonPos.y}px)`,
      }}
    >
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && (
        <div className="absolute inset-0 -z-0">
          <div
            className="absolute inset-0 opacity-0 transition-opacity duration-300"
            style={{
              background: 'radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(82, 39, 255, 0.3), transparent 70%)',
              opacity: isHovered ? 1 : 0,
            }}
          />
        </div>
      )}
    </button>
  );
};

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
  liquidColor = '#5227FF',
}) => {
  const [isClicked, setIsClicked] = useState(false);
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    const newRipple = { x, y, id: Date.now() };
    setRipples(prev => [...prev, newRipple]);

    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== newRipple.id));
    }, 1000);

    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 600);

    onClick?.();
  };

  const isPrimary = variant === 'primary';

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      className={`
        relative overflow-hidden px-8 py-4 rounded-full font-semibold text-lg
        transition-all duration-300 transform hover:scale-105
        ${isPrimary
          ? 'bg-white text-black hover:shadow-xl'
          : 'bg-transparent text-white border-2 border-white hover:bg-white/10'
        }
        ${isClicked ? 'scale-95' : ''}
        ${className}
      `}
    >
      <span className="relative z-10">{children}</span>
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="absolute rounded-full animate-ripple"
          style={{
            left: `${ripple.x}%`,
            top: `${ripple.y}%`,
            backgroundColor: isPrimary ? liquidColor : 'white',
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
      <style jsx>{`
        @keyframes ripple {
          0% {
            width: 0;
            height: 0;
            opacity: 0.5;
          }
          100% {
            width: 300px;
            height: 300px;
            opacity: 0;
          }
        }
        .animate-ripple {
          animation: ripple 1s ease-out;
        }
      `}</style>
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
  glowColor = '#5227FF',
  pulseAnimation = true,
}) => {
  const [mousePos, setMousePos] = useState({ x: '50%', y: '50%' });
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x: `${x}%`, y: `${y}%` });
  };

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      className={`
        relative overflow-hidden px-8 py-4 rounded-full font-semibold text-lg
        bg-blue-600 hover:bg-blue-700 text-white
        transition-all duration-300 transform hover:scale-105 hover:shadow-2xl
        ${pulseAnimation ? 'animate-pulse-glow' : ''}
        ${className}
      `}
      style={{
        '--mouse-x': mousePos.x,
        '--mouse-y': mousePos.y,
        '--glow-color': glowColor,
      } as React.CSSProperties}
    >
      <span className="relative z-10">{children}</span>
      <div
        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.3), transparent 50%)`,
        }}
      />
      <div
        className="absolute -inset-1 rounded-full opacity-75 blur-lg"
        style={{
          background: `linear-gradient(45deg, ${glowColor}, #FF9FFC)`,
          animation: pulseAnimation ? 'pulse 2s ease-in-out infinite' : 'none',
        }}
      />
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.5; transform: scale(0.95); }
          50% { opacity: 0.75; transform: scale(1); }
        }
      `}</style>
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
  electricColor = '#00ffff',
  variant = 'primary',
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [sparks, setSparks] = useState<{ id: number; x: number; y: number }[]>([]);

  useEffect(() => {
    if (!isHovered) return;

    const interval = setInterval(() => {
      setSparks(prev => [
        ...prev.slice(-5),
        {
          id: Date.now(),
          x: Math.random() * 100,
          y: Math.random() * 100,
        },
      ]);
    }, 100);

    return () => clearInterval(interval);
  }, [isHovered]);

  const isPrimary = variant === 'primary';

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setSparks([]);
      }}
      className={`
        relative overflow-visible px-8 py-4 rounded-full font-semibold text-lg
        transition-all duration-300 transform hover:scale-105
        ${isPrimary
          ? 'bg-black text-white border-2'
          : 'bg-transparent text-white border-2'
        }
        ${className}
      `}
      style={{
        borderColor: isHovered ? electricColor : 'white',
        boxShadow: isHovered ? `0 0 20px ${electricColor}` : 'none',
      }}
    >
      <span className="relative z-10">{children}</span>

      {/* Electric border animation */}
      {isHovered && (
        <div className="absolute inset-0 rounded-full">
          <svg
            className="absolute inset-0 w-full h-full"
            style={{ filter: `drop-shadow(0 0 3px ${electricColor})` }}
          >
            <rect
              x="1"
              y="1"
              width="calc(100% - 2)"
              height="calc(100% - 2)"
              rx="9999"
              fill="none"
              stroke={electricColor}
              strokeWidth="2"
              strokeDasharray="10 5"
              className="animate-electric"
            />
          </svg>
        </div>
      )}

      {/* Sparks */}
      {sparks.map(spark => (
        <span
          key={spark.id}
          className="absolute w-1 h-1 animate-spark"
          style={{
            left: `${spark.x}%`,
            top: `${spark.y}%`,
            backgroundColor: electricColor,
            boxShadow: `0 0 6px ${electricColor}`,
          }}
        />
      ))}

      <style jsx>{`
        @keyframes electric {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: 15; }
        }
        .animate-electric {
          animation: electric 0.3s linear infinite;
        }
        @keyframes spark {
          0% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
          }
          100% {
            opacity: 0;
            transform: scale(0);
          }
        }
        .animate-spark {
          animation: spark 0.6s ease-out;
        }
      `}</style>
    </button>
  );
};