"use client";

export function NeuralNetworkIcon({ size = 48, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <circle cx="24" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="8" cy="24" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="40" cy="24" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="24" cy="40" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
      <path d="M24 12v6M12 24h6M30 24h6M24 30v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M18 18l-6-6M30 18l6-6M18 30l-6 6M30 30l6 6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

export function DataFlowIcon({ size = 48, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <rect x="4" y="18" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <rect x="32" y="6" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <rect x="32" y="30" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16 24h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M24 24l8-12M24 24l8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="24" cy="24" r="3" fill="currentColor" />
    </svg>
  );
}

export function AgentBrainIcon({ size = 48, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <path d="M24 4c-8.837 0-16 7.163-16 16 0 6.627 4.03 12.32 9.778 14.738L24 44l6.222-9.262C35.97 32.32 40 26.627 40 20c0-8.837-7.163-16-16-16z" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="18" cy="18" r="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="30" cy="18" r="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="24" cy="26" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M18 21l6 2M30 21l-6 2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

export function WorkflowIcon({ size = 48, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <rect x="4" y="4" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <rect x="28" y="4" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <rect x="16" y="34" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 14v6a4 4 0 004 4h16a4 4 0 004-4v-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M24 24v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="24" cy="24" r="2" fill="currentColor" />
    </svg>
  );
}

export function MetricsIcon({ size = 48, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <rect x="4" y="28" width="8" height="16" rx="1" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
      <rect x="14" y="20" width="8" height="24" rx="1" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.15" />
      <rect x="24" y="12" width="8" height="32" rx="1" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.2" />
      <rect x="34" y="4" width="8" height="40" rx="1" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.25" />
      <path d="M8 24l10-8 10 4 10-12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ShieldCheckIcon({ size = 48, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <path d="M24 4L6 12v12c0 11 8 18 18 22 10-4 18-11 18-22V12L24 4z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.05" />
      <path d="M16 24l6 6 12-12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function RocketIcon({ size = 48, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <path d="M24 4c-8 8-8 24-4 32l4-8 4 8c4-8 4-24-4-32z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
      <circle cx="24" cy="18" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16 32c-4 2-8 6-8 10h8M32 32c4 2 8 6 8 10h-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M20 36l4 8 4-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
    </svg>
  );
}

export function CodeAgentIcon({ size = 48, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <rect x="6" y="6" width="36" height="36" rx="4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M14 18l-4 6 4 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M34 18l4 6-4 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M28 14l-8 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="24" cy="24" r="2" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

export function SupportAgentIcon({ size = 48, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <circle cx="24" cy="20" r="12" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 20c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 20v4a4 4 0 004 4M40 20v4a4 4 0 01-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="24" cy="20" r="4" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
      <path d="M24 32v8M18 44h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function TargetIcon({ size = 48, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
      <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <circle cx="24" cy="24" r="3" fill="currentColor" />
      <path d="M24 4v6M24 38v6M4 24h6M38 24h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function SpeedIcon({ size = 48, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <path d="M4 36a20 20 0 0140 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M24 36l-8-16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="24" cy="36" r="4" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.2" />
      <path d="M12 32l-2 2M36 32l2 2M8 24H6M42 24h-2M14 16l-2-2M34 16l2-2M24 12v-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function InfinityLoopIcon({ size = 48, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <path d="M14 24c0-5.523-4.477-10-10-10s-10 4.477-10 10 4.477 10 10 10 10-4.477 10-10zM34 24c0 5.523 4.477 10 10 10s10-4.477 10-10-4.477-10-10-10-10 4.477-10 10z" stroke="currentColor" strokeWidth="1.5" transform="translate(10 0)" />
      <circle cx="24" cy="24" r="3" fill="currentColor" />
    </svg>
  );
}
