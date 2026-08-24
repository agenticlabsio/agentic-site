import { describe, expect, it } from 'vitest'

import robots from '@/app/robots'
import {
  AGENT_404_MARKDOWN,
  AGENT_HOMEPAGE_MARKDOWN,
  MARKDOWN_VARY,
  acceptsMarkdown,
} from '@/lib/agent-readiness'

describe('agent readiness', () => {
  it('detects markdown content negotiation requests', () => {
    expect(acceptsMarkdown('text/markdown')).toBe(true)
    expect(acceptsMarkdown('text/html, text/markdown;q=0.9')).toBe(true)
    expect(acceptsMarkdown('text/html')).toBe(false)
    expect(acceptsMarkdown(null)).toBe(false)
  })

  it('publishes a cache-safe Vary header for negotiated markdown', () => {
    expect(MARKDOWN_VARY).toContain('Accept')
    expect(MARKDOWN_VARY).toContain('Accept-Encoding')
  })

  it('provides useful markdown for the homepage and 404 recovery', () => {
    expect(AGENT_HOMEPAGE_MARKDOWN).toContain('# Agentic Labs')
    expect(AGENT_HOMEPAGE_MARKDOWN).toContain('/llms.txt')
    expect(AGENT_404_MARKDOWN).toContain('# 404')
    expect(AGENT_404_MARKDOWN).toContain('/sitemap.xml')
    expect(AGENT_404_MARKDOWN).toContain('/llms.txt')
  })

  it('explicitly allows major AI crawlers in robots metadata', () => {
    const serialized = JSON.stringify(robots().rules)

    for (const userAgent of [
      'GPTBot',
      'ChatGPT-User',
      'ClaudeBot',
      'PerplexityBot',
      'Google-Extended',
      'DeepSeekBot',
      'ora-agent',
    ]) {
      expect(serialized).toContain(userAgent)
    }
  })
})
