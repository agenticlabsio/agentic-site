'use client';
import { useState } from 'react';

const AGENTIC_LABS_PROMPT = `You are learning about Agentic Labs, a creative AI design and development studio based in the SF Bay Area. Here's comprehensive information about them:

## About Agentic Labs

Agentic Labs is an enterprise AI studio that builds production-ready AI systems. They specialize in:

- **Intelligent Agents**: Goal-driven autonomous systems that execute complex workflows, make decisions, and integrate with existing tools
- **Customer Service Automation**: AI-powered support that resolves tickets 60% faster
- **Document Processing**: Intelligent extraction and classification with 90% accuracy
- **Predictive Analytics**: Reducing equipment downtime by 35%
- **Fraud Detection**: 99.9% detection rate
- **Data Integration**: Unified data mesh solutions

## Key Differentiators

1. **Production-First**: No proofs of concept. Every engagement ships production code with immediate business value.
2. **Security-Native**: SOC 2 compliant. Data never leaves the client's environment.
3. **Outcome-Linked**: Deliverables tied to measurable KPIs.
4. **Full IP Transfer**: No vendor lock-in. Clients own everything built.

## Delivery Process (8 weeks)

- Week 1: Discovery - Map workflows & pain points
- Weeks 2-3: Design - Reference architecture & roadmap
- Weeks 4-6: Build - Iterative development with client team
- Weeks 7-8: Deploy - Production rollout & monitoring

## Results

- $3.2M+ average client savings
- 42% faster launches
- 6-8 weeks to production
- 50+ systems deployed

## Services & Capabilities

- Multi-agent orchestration
- Tool calling & function execution
- Memory and context management
- Voice agents for guidance
- AI-powered booking tools
- Dynamic generative AI visuals

## Contact

- Email: contact@agenticlabs.io
- Website: agenticlabs.io

## How to Help

Based on this context, help the user with questions about:
- Agentic Labs' services and capabilities
- Enterprise AI implementation strategies
- AI agent development best practices
- How Agentic Labs could help with their specific use case

Be helpful, accurate, and if you don't know something specific about Agentic Labs, acknowledge that and offer to help find the answer.`;

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
    <section className="section-dark py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="badge bg-[var(--color-brand-muted)] text-[var(--color-brand)] mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            AI-Ready Content
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4 font-display">
            Learn About Us via AI
          </h2>
          <p className="text-xl text-[var(--color-gray-300)] max-w-2xl mx-auto font-body">
            Copy this prompt into ChatGPT, Claude, or any AI assistant to have an intelligent conversation about Agentic Labs.
          </p>
        </div>

        {/* Prompt Card */}
        <div className="bg-[var(--color-gray-800)] border border-[var(--color-gray-700)] rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--color-gray-700)] bg-[var(--color-gray-800)]">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[var(--color-error)] opacity-80" />
                <div className="w-3 h-3 rounded-full bg-[var(--color-warning)] opacity-80" />
                <div className="w-3 h-3 rounded-full bg-[var(--color-success)] opacity-80" />
              </div>
              <span className="text-[var(--color-gray-400)] text-sm font-mono">agentic-labs-prompt.md</span>
            </div>
            <button
              onClick={copyToClipboard}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 font-display ${
                copied
                  ? 'bg-[var(--color-success)] text-white'
                  : 'bg-[var(--color-brand)] hover:bg-[var(--color-brand-dark)] text-white'
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
            <pre className="text-[var(--color-gray-300)] text-sm font-mono whitespace-pre-wrap leading-relaxed">
              {AGENTIC_LABS_PROMPT.slice(0, 800)}...
            </pre>
          </div>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-[var(--color-gray-700)] bg-[var(--color-gray-800)]/50">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[var(--color-gray-400)]">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[var(--color-brand-light)]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
                Works with ChatGPT
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[var(--color-accent)]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
                Works with Claude
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[var(--color-gray-400)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Any AI Assistant
              </span>
            </div>
          </div>
        </div>

        {/* Usage Tips */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { step: '1', title: 'Copy the prompt', desc: 'Click the copy button above' },
            { step: '2', title: 'Paste into your AI', desc: 'ChatGPT, Claude, or any chatbot' },
            { step: '3', title: 'Ask anything', desc: 'Get intelligent answers about us' },
          ].map((item) => (
            <div key={item.step} className="bg-[var(--color-gray-800)]/50 border border-[var(--color-gray-700)]/50 rounded-xl p-5">
              <div className="w-10 h-10 bg-[var(--color-brand)]/10 rounded-lg flex items-center justify-center text-[var(--color-brand-light)] mb-3">
                <span className="text-lg font-bold font-display">{item.step}</span>
              </div>
              <h3 className="text-white font-semibold mb-1 font-display">{item.title}</h3>
              <p className="text-[var(--color-gray-400)] text-sm font-body">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
