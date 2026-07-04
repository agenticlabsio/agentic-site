import type { BlogBlock, InlineSegment } from '@/content/blog'

// Minimal builders for Payload's Lexical editor state. Enough to seed blog
// bodies as real paragraphs, section headings, and inline links that the
// /admin editor can then extend with the full toolbar.

function textNode(text: string) {
  return { type: 'text', version: 1, text, format: 0, style: '', mode: 'normal', detail: 0 }
}

// Lexical text format bitmask: 1 = bold. Used for the "What happens today:" /
// "What it looks like with AI:" inline lead-ins.
function boldTextNode(text: string) {
  return { ...textNode(text), format: 1 }
}

// Payload's Lexical link node (v3). `linkType: 'custom'` + a url covers both
// internal paths (/resources/blog/...) and external URLs.
function linkNode(text: string, href: string) {
  return {
    type: 'link',
    version: 3,
    fields: { linkType: 'custom' as const, url: href, newTab: href.startsWith('http') },
    format: '' as const,
    indent: 0,
    direction: 'ltr' as const,
    children: [textNode(text)],
  }
}

function inlineNode(segment: InlineSegment) {
  if (typeof segment === 'string') return textNode(segment)
  if ('href' in segment) return linkNode(segment.text, segment.href)
  return boldTextNode(segment.text)
}

function paragraph(text: string) {
  return {
    type: 'paragraph',
    version: 1,
    format: '' as const,
    indent: 0,
    direction: 'ltr' as const,
    textFormat: 0,
    children: [textNode(text)],
  }
}

function richParagraph(segments: InlineSegment[]) {
  return {
    type: 'paragraph',
    version: 1,
    format: '' as const,
    indent: 0,
    direction: 'ltr' as const,
    textFormat: 0,
    children: segments.map(inlineNode),
  }
}

function heading(text: string) {
  return {
    type: 'heading',
    tag: 'h2',
    version: 1,
    format: '' as const,
    indent: 0,
    direction: 'ltr' as const,
    children: [textNode(text)],
  }
}

// Convert the content module's simple block list into a Lexical editor state.
export function blocksToLexical(blocks: BlogBlock[]) {
  const children = blocks.map((block) => {
    if (typeof block === 'string') return paragraph(block)
    if ('heading' in block) return heading(block.heading)
    return richParagraph(block.paragraph)
  })
  return {
    root: {
      type: 'root',
      format: '' as const,
      indent: 0,
      version: 1,
      direction: 'ltr' as const,
      children,
    },
  }
}
