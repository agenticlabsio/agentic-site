import type { BlogBlock } from '@/content/blog'

// Minimal builders for Payload's Lexical editor state. Enough to seed blog
// bodies as real paragraphs + section headings that the /admin editor can
// then extend with the full toolbar.

function textNode(text: string) {
  return { type: 'text', version: 1, text, format: 0, style: '', mode: 'normal', detail: 0 }
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
  const children = blocks.map((block) =>
    typeof block === 'string' ? paragraph(block) : heading(block.heading),
  )
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
