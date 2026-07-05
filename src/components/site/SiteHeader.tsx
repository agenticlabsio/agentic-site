'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { DEMO_URL } from '@/lib/seo'

export interface SiteNavItem {
  label: string
  href: string
}

export interface SiteHeaderProps {
  navItems: SiteNavItem[]
  cta: { label: string; href: string }
}

// Single header for every public page — logo, route nav, and mobile menu.
// The desktop nav needs ~1080px to fit every label plus both CTAs without
// clipping, so the mobile menu covers everything below that.
export default function SiteHeader({ navItems, cta }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  useEffect(() => {
    if (!mobileOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [mobileOpen])

  const isActive = (href: string) => href !== '/' && pathname.startsWith(href)

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'background-color 0.3s ease, border-color 0.3s ease',
          background: scrolled ? 'var(--nav-bg)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
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

          <nav className="nav-desktop" aria-label="Main" style={{ alignItems: 'center', gap: 4 }}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-display nav-link"
                aria-current={isActive(item.href) ? 'page' : undefined}
                style={{
                  padding: '10px 14px',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  letterSpacing: '0.01em',
                  borderRadius: 6,
                  whiteSpace: 'nowrap',
                  color: isActive(item.href) ? 'var(--text-primary)' : 'var(--text-secondary)',
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="nav-desktop" style={{ flexShrink: 0, alignItems: 'center', gap: 12 }}>
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-demo"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'var(--accent)',
                color: 'var(--cta-btn-color)',
                padding: '11px 18px',
                borderRadius: 6,
                fontSize: '0.88rem',
                fontWeight: 500,
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                transition: 'background-color 0.2s ease',
                cursor: 'pointer',
              }}
            >
              <span>Live Demo</span>
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </a>
            <Link
              href={cta.href}
              className="nav-cta"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'var(--cta-btn-bg)',
                color: 'var(--cta-btn-color)',
                padding: '11px 20px',
                borderRadius: 6,
                fontSize: '0.88rem',
                fontWeight: 500,
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                transition: 'background-color 0.2s ease',
                cursor: 'pointer',
              }}
            >
              <span>{cta.label}</span>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
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

          <div
            className="nav-mobile-right"
            style={{ display: 'flex', alignItems: 'center', gap: 8 }}
          >
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
                alignItems: 'center',
                justifyContent: 'center',
                gap: 5,
                width: 44,
                height: 44,
                padding: 0,
              }}
            >
              <span
                style={{
                  display: 'block',
                  width: 22,
                  height: 2,
                  background: 'var(--text-primary)',
                  borderRadius: 2,
                  transition: 'transform 0.3s ease',
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
                  transition: 'opacity 0.3s ease',
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
                  transition: 'transform 0.3s ease',
                  transform: mobileOpen ? 'rotate(-45deg) translate(3px,-3px)' : 'none',
                }}
              />
            </button>
          </div>
        </div>

        {/* Collapsed state uses grid-rows 0fr + visibility:hidden so the hidden
            links leave the tab order and no layout property animates. */}
        <div
          id="nav-mobile-menu"
          className="nav-mobile-menu"
          style={{
            display: 'grid',
            gridTemplateRows: mobileOpen ? '1fr' : '0fr',
            visibility: mobileOpen ? 'visible' : 'hidden',
            transition: 'grid-template-rows 0.35s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.35s',
            background: 'var(--nav-bg)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderBottom: mobileOpen ? '1px solid var(--nav-border)' : '1px solid transparent',
          }}
        >
          <div style={{ overflow: 'hidden', minHeight: 0 }}>
            <div style={{ padding: '8px 24px 24px' }}>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-display"
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  style={{
                    display: 'block',
                    padding: '14px 0',
                    minHeight: 44,
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
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                style={{
                  marginTop: 20,
                  width: '100%',
                  textAlign: 'center',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  background: 'var(--accent)',
                  color: 'var(--cta-btn-color)',
                  padding: '14px 24px',
                  minHeight: 44,
                  borderRadius: 6,
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                }}
              >
                <span>Live Demo</span>
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </a>
              <Link
                href={cta.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  marginTop: 12,
                  width: '100%',
                  textAlign: 'center',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  background: 'var(--cta-btn-bg)',
                  color: 'var(--cta-btn-color)',
                  padding: '14px 24px',
                  minHeight: 44,
                  borderRadius: 6,
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                }}
              >
                <span>{cta.label}</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <style>{`
        .nav-desktop { display: none; }
        .nav-mobile-toggle { display: flex; }
        .nav-mobile-menu { display: grid; }
        .nav-mobile-right { display: flex; }

        .nav-link {
          transition: color 0.25s ease, background 0.25s ease;
        }
        .nav-link:hover, .nav-link:focus-visible {
          color: var(--text-primary);
          background: var(--bg-card);
        }

        .nav-cta:hover, .nav-cta:focus-visible {
          background: var(--accent-dark);
        }

        .nav-demo:hover, .nav-demo:focus-visible {
          background: var(--accent-dark);
        }

        @media (min-width: 1080px) {
          .nav-desktop { display: flex !important; }
          .nav-mobile-toggle { display: none !important; }
          .nav-mobile-menu { display: none !important; }
          .nav-mobile-right { display: none !important; }
        }
      `}</style>
    </>
  )
}
