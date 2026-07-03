import Link from 'next/link'
import type { ReactNode } from 'react'

type ButtonProps = {
  href?: string
  variant?: 'primary' | 'outline'
  children: ReactNode
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit'
}

export function Button({
  href,
  variant = 'primary',
  children,
  className,
  onClick,
  type = 'button',
}: ButtonProps) {
  const classes = [variant === 'primary' ? 'btn-primary' : 'btn-outline', className]
    .filter(Boolean)
    .join(' ')

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
