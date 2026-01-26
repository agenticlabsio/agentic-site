'use client';
import { useState } from 'react';

const AGENTIC_LABS_PROMPT = `You are learning about Agentic Labs, an enterprise AI studio that ships production-ready AI systems in 8 weeks. Here's comprehensive information:

## About Agentic Labs

Agentic Labs builds AI systems that run in production—not decks that collect dust. Based in the SF Bay Area, they specialize in:

- **Intelligent Agents**: Autonomous systems that handle ticket routing, data entry, report generation—freeing teams for high-value decisions
- **Customer Service Automation**: 60% of tickets resolved without human intervention
- **Document Processing**: 94% extraction accuracy, zero manual entry
- **Predictive Analytics**: 35% reduction in equipment downtime
- **Fraud Detection**: 99.9% detection rate in real-time
- **Data Integration**: Unified data mesh architecture

## Key Differentiators

1. **Production-First**: No proofs of concept. If it won't run in prod, they won't build it.
2. **Security-Native**: SOC 2 Type II certified. Data never leaves your environment.
3. **Outcome-Linked**: Success metrics agreed before kickoff.
4. **Full IP Transfer**: 100% ownership. No lock-in, no licensing fees.

## 8-Week Delivery Process

- Week 1: Discovery — Map workflows, identify quick wins
- Weeks 2-3: Design — Reference architecture, success metrics
- Weeks 4-6: Build — Iterative development with your team
- Weeks 7-8: Deploy — Production rollout, monitoring, handoff

## Results

- $3.2M+ average first-year savings
- 8 weeks to production (vs industry average of 6-12 months)
- 50+ systems deployed
- 0 failed projects

## Contact

- Email: contact@agenticlabs.io
- Website: agenticlabs.io

## How to Help

Based on this context, help users with:
- Understanding Agentic Labs' approach and capabilities
- Enterprise AI implementation strategies
- Whether Agentic Labs might be a fit for their use case

Be direct and honest. If you don't know something specific, say so.`;

export default function AIChatPromptSection() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(AGENTIC_LABS_PROMPT);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <section className="bg-stone-900 py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-500/20 text-brand-300 text-sm font-medium rounded-full mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            AI-Ready
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Ask AI about us.
          </h2>
          <p className="text-xl text-stone-400 max-w-2xl mx-auto">
            Copy this prompt into ChatGPT or Claude. Get answers instantly.
          </p>
        </div>

        {/* Prompt Card */}
        <div className="bg-stone-800 border border-stone-700 rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-stone-700 bg-stone-800">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500 opacity-80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-80" />
                <div className="w-3 h-3 rounded-full bg-green-500 opacity-80" />
              </div>
              <span className="text-stone-400 text-sm font-mono">agentic-labs-prompt.md</span>
            </div>
            <button
              onClick={copyToClipboard}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                copied
                  ? 'bg-green-600 text-white'
                  : 'bg-brand-600 hover:bg-brand-700 text-white'
              }`}
            >
              {copied ? (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Copied!
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Copy Prompt
                </>
              )}
            </button>
          </div>

          {/* Prompt Preview */}
          <div className="p-6 max-h-64 overflow-y-auto">
            <pre className="text-stone-300 text-sm font-mono whitespace-pre-wrap leading-relaxed">
              {AGENTIC_LABS_PROMPT.slice(0, 800)}...
            </pre>
          </div>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-stone-700 bg-stone-800/50">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-stone-400">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
                ChatGPT
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-purple-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
                Claude
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Any AI
              </span>
            </div>
          </div>
        </div>

        {/* Usage Tips */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { step: '1', title: 'Copy', desc: 'Click the button above' },
            { step: '2', title: 'Paste', desc: 'Into your AI of choice' },
            { step: '3', title: 'Ask', desc: 'Get instant answers' },
          ].map((item) => (
            <div key={item.step} className="bg-stone-800/50 border border-stone-700/50 rounded-xl p-5">
              <div className="w-10 h-10 bg-brand-600/10 rounded-lg flex items-center justify-center text-brand-400 mb-3">
                <span className="text-lg font-bold">{item.step}</span>
              </div>
              <h3 className="text-white font-semibold mb-1">{item.title}</h3>
              <p className="text-stone-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
