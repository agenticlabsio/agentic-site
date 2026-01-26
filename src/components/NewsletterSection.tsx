'use client';
import { useState } from 'react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    // TODO: Integrate with actual newsletter service
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1000);
  };

  return (
    <section className="bg-[var(--bg-primary)] py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-t border-[var(--border-light)]">
      <div className="max-w-4xl mx-auto">
        <div className="bg-[var(--bg-secondary)] rounded-2xl border border-[var(--border-light)] p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Content */}
            <div>
              <div className="badge mb-6">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Newsletter
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] tracking-tight mb-4 font-display">
                Stay Ahead of AI
              </h2>
              <p className="text-[var(--text-secondary)] font-body leading-relaxed mb-6">
                Get weekly insights on enterprise AI, agent architectures, and production-ready
                implementations. No fluff, just actionable intelligence.
              </p>
              <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
                {[
                  'Weekly AI industry insights',
                  'Case studies & implementation guides',
                  'Early access to research & tools',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[var(--color-success)] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-body">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                  <input
                    type="email"
                    id="newsletter-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-5 py-4 bg-[var(--bg-primary)] border border-[var(--border-default)] rounded-xl text-[var(--text-primary)] placeholder-[var(--color-gray-400)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)] focus:border-transparent transition-all font-body"
                    required
                    disabled={status === 'loading' || status === 'success'}
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading' || status === 'success'}
                  className={`w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-200 font-display ${
                    status === 'success'
                      ? 'bg-[var(--color-success)] text-white'
                      : 'bg-[var(--color-brand)] hover:bg-[var(--color-brand-dark)] text-white shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-brand)]'
                  }`}
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Subscribing...
                    </>
                  ) : status === 'success' ? (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Subscribed!
                    </>
                  ) : (
                    <>
                      Subscribe
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
              <p className="mt-4 text-xs text-[var(--text-tertiary)] text-center font-body">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
