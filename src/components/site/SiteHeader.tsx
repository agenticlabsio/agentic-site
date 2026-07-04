'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export interface SiteNavItem {
  label: string
  href: string
}

export interface SiteHeaderProps {
  navItems: SiteNavItem[]
  cta: { label: string; href: string }
}

// Single header for every public page — logo, route nav, theme toggle, and
// mobile menu. Replaces the homepage-only Navbar and the chrome-less
// MarketingHeader that interior pages used to render separately.
export default function SiteHeader({ navItems, cta }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          background: scrolled ? 'var(--nav-bg)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px) saturate(1.4)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(1.4)' : 'none',
          borderBottom: scrolled ? '1px solid var(--nav-border)' : '1px solid transparent',
        }}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" style={{ flexShrink: 0, display: 'flex', alignItems: 'center', gap: 12 }}>
            <Image
              src="/logo.png"
              alt="Agentic Labs"
              width={160}
              height={36}
              style={{ height: 36, width: 'auto', filter: 'brightness(0)', opacity: 0.88 }}
              priority
            />
          </Link>

          <div className="nav-desktop" style={{ alignItems: 'center', gap: 4 }}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-display nav-link"
                style={{
                  padding: '8px 16px',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  letterSpacing: '0.01em',
                  borderRadius: 8,
                  transition: 'all 0.2s ease',
                  color: pathname.startsWith(item.href) ? 'var(--text-primary)' : 'var(--text-secondary)',
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="nav-desktop" style={{ flexShrink: 0, alignItems: 'center', gap: 12 }}>
            <Link
              href={cta.href}
              className="nav-cta"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'var(--cta-btn-bg)',
                color: 'var(--cta-btn-color)',
                padding: '10px 20px',
                borderRadius: 8,
                fontSize: '0.88rem',
                fontWeight: 500,
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                cursor: 'pointer',
              }}
            >
              <span>{cta.label}</span>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="var(--cta-btn-arrow)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          <div className="nav-mobile-right" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button
              className="nav-mobile-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
              aria-expanded={mobileOpen}
              aria-controls="nav-mobile-menu"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                flexDirection: 'column',
                gap: 5,
                padding: 8,
              }}
            >
              <span
                style={{
                  display: 'block',
                  width: 22,
                  height: 2,
                  background: 'var(--text-primary)',
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  transform: mobileOpen ? 'rotate(45deg) translate(3px,3px)' : 'none',
                }}
              />
              <span
                style={{
                  display: 'block',
                  width: 22,
                  height: 2,
                  background: 'var(--text-primary)',
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  opacity: mobileOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  display: 'block',
                  width: 22,
                  height: 2,
                  background: 'var(--text-primary)',
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  transform: mobileOpen ? 'rotate(-45deg) translate(3px,-3px)' : 'none',
                }}
              />
            </button>
          </div>
        </div>

        <div
          id="nav-mobile-menu"
          className="nav-mobile-menu"
          style={{
            maxHeight: mobileOpen ? 500 : 0,
            overflow: 'hidden',
            transition: 'max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            background: 'var(--nav-bg)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderBottom: mobileOpen ? '1px solid var(--nav-border)' : '1px solid transparent',
          }}
        >
          <div style={{ padding: '8px 24px 24px' }}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="font-display"
                style={{
                  display: 'block',
                  padding: '14px 0',
                  color: 'var(--text-secondary)',
                  fontSize: '1.05rem',
                  textDecoration: 'none',
                  borderBottom: '1px solid var(--border)',
                  transition: 'color 0.2s ease',
                }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={cta.href}
              onClick={() => setMobileOpen(false)}
              style={{
                marginTop: 20,
                width: '100%',
                textAlign: 'center',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                background: 'var(--cta-btn-bg)',
                color: 'var(--cta-btn-color)',
                padding: '14px 24px',
                borderRadius: 8,
                fontSize: '0.9rem',
                fontWeight: 500,
                textDecoration: 'none',
              }}
            >
              <span>{cta.label}</span>
            </Link>
          </div>
        </div>
      </header>

      <style>{`
        .nav-desktop { display: none; }
        .nav-mobile-toggle { display: flex; }
        .nav-mobile-menu { display: block; }
        .nav-mobile-right { display: flex; }

        .nav-link {
          transition: color 0.25s ease, background 0.25s ease;
        }
        .nav-link:hover, .nav-link:focus-visible {
          color: var(--text-primary);
          background: var(--bg-card);
        }

        .nav-cta:hover, .nav-cta:focus-visible {
          box-shadow: 0 0 0 1px var(--border-accent), 0 8px 28px var(--accent-glow);
          transform: translateY(-1px);
        }

        @media (min-width: 768px) {
          .nav-desktop { display: flex !important; }
          .nav-mobile-toggle { display: none !important; }
          .nav-mobile-menu { display: none !important; }
          .nav-mobile-right { display: none !important; }
        }
      `}</style>
    </>
  )
}
