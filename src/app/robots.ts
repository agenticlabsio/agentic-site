import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/seo'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/admin', '/api/'] },
      // Public agent action endpoint (declared in /agents.json)
      { userAgent: '*', allow: '/api/subscribe' },
      { userAgent: 'Googlebot', allow: '/' },
      { userAgent: 'Bingbot', allow: '/' },
      // AI crawlers (for AEO)
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'Anthropic-AI', allow: '/' },
      { userAgent: 'DeepSeekBot', allow: '/' },
      { userAgent: 'ora-agent', allow: '/' },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
