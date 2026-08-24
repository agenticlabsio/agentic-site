import { NextRequest, NextResponse } from 'next/server'

import {
  AGENT_404_MARKDOWN,
  AGENT_HOMEPAGE_MARKDOWN,
  MARKDOWN_VARY,
  acceptsMarkdown,
} from '@/lib/agent-readiness'

const PUBLIC_ROUTE_PREFIXES = [
  '/case-studies',
  '/industries',
  '/legal',
  '/platform',
  '/portfolio',
  '/resources',
  '/solutions',
  '/trust',
  '/api',
  '/admin',
  '/_next',
]

const PUBLIC_FILES = new Set([
  '/agents.json',
  '/favicon.ico',
  '/llms.txt',
  '/manifest.json',
  '/robots.txt',
  '/sitemap.xml',
])

function isKnownPublicPath(pathname: string): boolean {
  if (pathname === '/') return true
  if (PUBLIC_FILES.has(pathname)) return true
  return PUBLIC_ROUTE_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  )
}

function markdownResponse(body: string, status = 200): NextResponse {
  return new NextResponse(body, {
    status,
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      Vary: MARKDOWN_VARY,
    },
  })
}

export function middleware(request: NextRequest) {
  const accept = request.headers.get('accept')
  const { pathname } = request.nextUrl

  if (pathname === '/') {
    if (acceptsMarkdown(accept)) {
      return markdownResponse(AGENT_HOMEPAGE_MARKDOWN)
    }

    const response = NextResponse.next()
    response.headers.set('Vary', MARKDOWN_VARY)
    return response
  }

  if (!acceptsMarkdown(accept)) return NextResponse.next()

  if (!isKnownPublicPath(pathname)) {
    return markdownResponse(AGENT_404_MARKDOWN, 404)
  }

  const response = NextResponse.next()
  response.headers.set('Vary', MARKDOWN_VARY)
  return response
}

export const config = {
  matcher: ['/((?!.*\\.[^/]+$).*)'],
}
