'use client'

import { useId, useState } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

interface EmailCaptureFormProps {
  source: 'cta-section' | 'footer' | 'hero'
  compact?: boolean
  buttonLabel?: string
  placeholder?: string
}

export default function EmailCaptureForm({
  source,
  compact = false,
  buttonLabel = 'Get Started',
  placeholder = 'you@company.com',
}: EmailCaptureFormProps) {
  const inputId = useId()
  const [email, setEmail] = useState('')
  // Honeypot: bots that auto-fill every field populate this; humans never see it.
  const [company, setCompany] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (status === 'loading') return
    setStatus('loading')
    setMessage('')

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          company,
          source,
          page: typeof window !== 'undefined' ? window.location.pathname : undefined,
        }),
      })
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean
        error?: string
      }
      if (res.ok && data.ok) {
        setStatus('success')
      } else {
        setStatus('error')
        setMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setMessage('Network error. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div
        role="status"
        aria-live="polite"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          padding: compact ? '10px 14px' : '16px 20px',
          borderRadius: 12,
          background: 'var(--accent-glow)',
          border: '1px solid var(--border-accent)',
          color: 'var(--text-primary)',
          fontSize: compact ? '0.85rem' : '0.95rem',
          maxWidth: compact ? 320 : 480,
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
        <span>Thanks — we&apos;ve got your email. We&apos;ll be in touch shortly.</span>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 10,
        alignItems: 'flex-start',
        justifyContent: compact ? 'flex-start' : 'center',
        maxWidth: compact ? 320 : 480,
        margin: compact ? undefined : '0 auto',
        width: '100%',
      }}
    >
      {/* Honeypot — hidden from users, catches naive bots. */}
      <div
        aria-hidden="true"
        style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, overflow: 'hidden' }}
      >
        <label htmlFor={`${inputId}-company`}>Company</label>
        <input
          id={`${inputId}-company`}
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>
      <label htmlFor={inputId} className="sr-only">
        Work email address
      </label>
      <input
        id={inputId}
        type="email"
        name="email"
        required
        autoComplete="email"
        placeholder={placeholder}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value)
          if (status === 'error') setStatus('idle')
        }}
        disabled={status === 'loading'}
        aria-invalid={status === 'error'}
        aria-describedby={status === 'error' ? `${inputId}-error` : undefined}
        style={{
          flex: '1 1 200px',
          minWidth: 0,
          padding: compact ? '11px 14px' : '15px 18px',
          fontSize: compact ? '0.85rem' : '0.95rem',
          borderRadius: 12,
          border: '1px solid var(--border)',
          background: 'var(--bg-card)',
          color: 'var(--text-primary)',
          outline: 'none',
        }}
      />
      <button
        type="submit"
        className="btn-primary"
        disabled={status === 'loading'}
        style={{
          padding: compact ? '11px 20px' : '15px 26px',
          fontSize: compact ? '0.85rem' : '0.95rem',
          whiteSpace: 'nowrap',
        }}
      >
        {status === 'loading' ? 'Sending…' : buttonLabel}
      </button>
      {status === 'error' && (
        <p
          id={`${inputId}-error`}
          role="alert"
          aria-live="polite"
          style={{
            flexBasis: '100%',
            margin: 0,
            fontSize: '0.8rem',
            color: 'var(--color-error)',
          }}
        >
          {message}
        </p>
      )}
    </form>
  )
}
