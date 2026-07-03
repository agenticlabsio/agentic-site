'use client'

import { useSyncExternalStore } from 'react'

function isDarkTheme() {
  return document.documentElement.getAttribute('data-theme') !== 'light'
}

function subscribeToThemeChange(onChange: () => void) {
  window.addEventListener('theme-change', onChange)
  return () => window.removeEventListener('theme-change', onChange)
}

export default function ThemeToggle() {
  const dark = useSyncExternalStore(subscribeToThemeChange, isDarkTheme, () => false)

  function handleClick() {
    const isDark = document.documentElement.getAttribute('data-theme') !== 'light'
    const next = !isDark

    if (next) {
      document.documentElement.removeAttribute('data-theme')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-theme', 'light')
      localStorage.setItem('theme', 'light')
    }

    window.dispatchEvent(new Event('theme-change'))
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Toggle theme"
      style={{
        background: 'var(--card-blue-bg)',
        border: '1px solid var(--card-blue-border)',
        borderRadius: 8,
        width: 36,
        height: 36,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        flexShrink: 0,
        padding: 0,
      }}
    >
      {dark ? (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      ) : (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  )
}
