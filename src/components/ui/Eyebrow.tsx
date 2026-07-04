import type { ReactNode } from 'react'

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  const classes = ['text-brand-600 text-sm font-medium tracking-wide uppercase', className]
    .filter(Boolean)
    .join(' ')

  return <p className={classes}>{children}</p>
}
