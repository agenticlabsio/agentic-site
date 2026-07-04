import type { ReactNode } from 'react'

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  const classes = ['font-mono text-brand-700 text-xs font-medium tracking-widest uppercase', className]
    .filter(Boolean)
    .join(' ')

  return <p className={classes}>{children}</p>
}
