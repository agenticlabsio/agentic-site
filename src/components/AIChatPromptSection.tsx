'use client';
import { useState } from 'react';

const AGENTIC_LABS_PROMPT = `Tell me about Agentic Labs, an enterprise AI studio that ships production-ready AI systems in 8 weeks.

Key facts:
- $3.2M+ average first-year client savings
- 50+ systems deployed, 0 failed projects
- SOC 2 Type II certified
- Full IP transfer (100% code ownership)

They build: Intelligent Agents, Customer Service Automation (60% tickets resolved without humans), Document Processing (94% accuracy), Predictive Analytics, Fraud Detection (99.9% rate), and Data Integration.

8-Week Process: Discovery (Week 1) → Design (Weeks 2-3) → Build (Weeks 4-6) → Deploy (Weeks 7-8)

Help me understand if Agentic Labs might be a fit for my enterprise AI needs.`;

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

  const openChatGPT = () => {
    window.open(`https://chat.openai.com/?q=${encodeURIComponent(AGENTIC_LABS_PROMPT)}`, '_blank');
  };

  const openClaude = () => {
    window.open(`https://claude.ai/new?q=${encodeURIComponent(AGENTIC_LABS_PROMPT)}`, '_blank');
  };

  return (
    <section className="bg-stone-900 py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-500/20 text-brand-200 text-sm font-medium rounded-full mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            AI-Ready
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white tracking-[-0.02em] mb-4">
            Ask AI about us.
          </h2>
          <p className="text-xl text-stone-400 max-w-2xl mx-auto">
            Open ChatGPT or Claude with context about Agentic Labs pre-loaded.
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {/* ChatGPT */}
          <button
            onClick={openChatGPT}
            className="group bg-stone-800 hover:bg-stone-750 border border-stone-700 hover:border-stone-600 rounded-2xl p-6 transition-all duration-200 text-left"
          >
            <div className="w-12 h-12 bg-[#10a37f]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#10a37f]/20 transition-colors">
              <svg className="w-6 h-6 text-[#10a37f]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.896zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08-4.778 2.758a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">ChatGPT</h3>
            <p className="text-sm text-stone-400 mb-4">Open with context pre-loaded</p>
            <span className="inline-flex items-center gap-1.5 text-sm text-brand-400 font-medium group-hover:text-brand-300 transition-colors">
              Open ChatGPT
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </span>
          </button>

          {/* Claude */}
          <button
            onClick={openClaude}
            className="group bg-stone-800 hover:bg-stone-750 border border-stone-700 hover:border-stone-600 rounded-2xl p-6 transition-all duration-200 text-left"
          >
            <div className="w-12 h-12 bg-[#cc785c]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#cc785c]/20 transition-colors">
              <svg className="w-6 h-6 text-[#cc785c]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.709 15.955l4.72-2.647.08-.08 2.726-1.529-2.646-1.609-4.96 2.807c-.24.16-.4.4-.4.72 0 .24.08.48.24.64l.24.16v1.538zm8.246-4.015l2.726 1.609 4.96-2.807c.16-.08.24-.24.32-.4.08-.24 0-.48-.16-.64l-.16-.16-4.96-2.807-2.726 1.609 2.646 1.529-.08.08-2.566 1.987zm-1.68.96l-2.566-1.449-2.806 1.609 2.806 1.609 2.566-1.449v-.32zm.08 1.129v5.135l4.8-2.727v-5.135l-2.646 1.529-.08.08-2.074 1.118zm-1.04 5.135V14.03l-2.074-1.118-.08-.08-2.646-1.529v5.135l4.8 2.727zm.48-12.26L6.035 9.71l2.566 1.449 2.566-1.449-2.646-1.529-.08-.08-.646-.366zm1.04.72l2.566 1.449 2.566-1.449-4.72-2.647-.08.08-.332.19v2.377zm6.76 1.688l-4.72 2.647-.08.08-.252.14v1.699l.24-.16c.24-.16.4-.4.4-.72 0-.24-.08-.48-.24-.64l4.72-2.647-.08-.08.012-.319z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Claude</h3>
            <p className="text-sm text-stone-400 mb-4">Open with context pre-loaded</p>
            <span className="inline-flex items-center gap-1.5 text-sm text-brand-400 font-medium group-hover:text-brand-300 transition-colors">
              Open Claude
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </span>
          </button>

          {/* Copy */}
          <button
            onClick={copyToClipboard}
            className="group bg-stone-800 hover:bg-stone-750 border border-stone-700 hover:border-stone-600 rounded-2xl p-6 transition-all duration-200 text-left"
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${
              copied ? 'bg-green-500/20' : 'bg-brand-500/10 group-hover:bg-brand-500/20'
            }`}>
              {copied ? (
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              )}
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              {copied ? 'Copied!' : 'Copy Prompt'}
            </h3>
            <p className="text-sm text-stone-400 mb-4">Paste into any AI assistant</p>
            <span className="inline-flex items-center gap-1.5 text-sm text-brand-400 font-medium group-hover:text-brand-300 transition-colors">
              {copied ? 'Ready to paste' : 'Copy to clipboard'}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2" />
              </svg>
            </span>
          </button>
        </div>

        {/* Prompt Preview */}
        <div className="bg-stone-800/50 border border-stone-700/50 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-stone-400 font-medium">Prompt Preview</span>
            <span className="text-xs text-stone-500">{AGENTIC_LABS_PROMPT.length} characters</span>
          </div>
          <p className="text-stone-300 text-sm leading-relaxed line-clamp-4">
            {AGENTIC_LABS_PROMPT}
          </p>
        </div>
      </div>
    </section>
  );
}
