# ElevenLabs Voice AI Widget Integration Plan

## Overview

Integrate the ElevenLabs Conversational AI widget (`agent_6601kfwbkw35e929cv72r8cffdcj`) into the Agentic Labs marketing site as a floating voice assistant.

## Widget Code

```html
<elevenlabs-convai agent-id="agent_6601kfwbkw35e929cv72r8cffdcj"></elevenlabs-convai>
<script src="https://unpkg.com/@elevenlabs/convai-widget-embed" async type="text/javascript"></script>
```

---

## Integration Options (Ranked by Relevance)

### Option A: Global Floating Widget (Recommended)

**Location:** `src/app/(frontend)/layout.tsx`

**Rationale:**
- Available on every frontend page
- Consistent user experience across site
- Bottom-right fixed position (industry standard)
- Non-intrusive, always accessible
- Complements existing "AIChatPromptSection" which shows AI-forward positioning

**Implementation:**
1. Create `src/components/ElevenLabsVoiceWidget.tsx` - Client component wrapper
2. Add Script component to load ElevenLabs SDK in layout
3. Mount widget component after `{children}` in layout body
4. Style with `z-40` (below header at `z-50`)

**Pros:**
- Site-wide availability
- Single point of integration
- Matches Agentic Labs' "AI-first" brand positioning
- Voice AI differentiates from competitors

**Cons:**
- Always visible (may be distracting for some users)
- Bundle size increase on all pages

---

### Option B: Replace/Enhance AIChatPromptSection

**Location:** `src/components/AIChatPromptSection.tsx`

**Rationale:**
- Section already titled "Learn About Us via AI"
- Currently offers copy-paste prompt for external AI tools
- Could upgrade to embedded, interactive voice experience
- More contextually relevant placement

**Implementation:**
1. Add ElevenLabs widget inside the existing section
2. Position as primary CTA, demote copy-paste to secondary
3. Frame as "Talk to our AI directly" vs "Copy prompt for other AIs"

**Pros:**
- High contextual relevance
- Clear value proposition upgrade
- Focused user experience in one section

**Cons:**
- Only visible when user scrolls to that section
- Less discoverable than floating widget

---

### Option C: Pre-Contact Section Engagement

**Location:** Before `ContactFormSection` (above `#contact`)

**Rationale:**
- Catches users before they commit to scheduling a call
- "Not ready for a call? Talk to our AI first"
- Reduces friction for early-stage prospects

**Implementation:**
1. Create new section: `VoiceAgentSection.tsx`
2. Insert between FAQ and Contact sections
3. Position as alternative to form submission

**Pros:**
- Natural conversion funnel placement
- Alternative engagement for hesitant users
- Clear CTA context

**Cons:**
- Only on homepage (unless duplicated)
- May cannibalize contact form submissions

---

### Option D: Dual Integration (Floating + Section)

**Combination of A + B**

**Rationale:**
- Floating widget for global access
- Enhanced section for focused experience
- Maximum discoverability

**Implementation:**
- Global floating widget (always visible)
- AIChatPromptSection shows embedded inline version
- Floating widget minimizes when inline version in view

**Pros:**
- Best of both worlds
- Multiple touchpoints

**Cons:**
- More complex implementation
- Potential user confusion (two widgets)

---

## Technical Implementation (for Option A)

### Files to Create/Modify

#### 1. Create `src/components/ElevenLabsVoiceWidget.tsx`

```tsx
'use client';

import Script from 'next/script';

export default function ElevenLabsVoiceWidget() {
  return (
    <>
      <Script
        src="https://unpkg.com/@elevenlabs/convai-widget-embed"
        strategy="lazyOnload"
      />
      {/* @ts-expect-error - Custom element from ElevenLabs SDK */}
      <elevenlabs-convai agent-id="agent_6601kfwbkw35e929cv72r8cffdcj" />
    </>
  );
}
```

#### 2. Modify `src/app/(frontend)/layout.tsx`

```diff
+ import ElevenLabsVoiceWidget from '@/components/ElevenLabsVoiceWidget';

  export default function FrontendLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="en">
        <head>...</head>
        <body ...>
          {children}
+         <ElevenLabsVoiceWidget />
        </body>
      </html>
    );
  }
```

### TypeScript Considerations

Add type declaration for custom element (optional, for strict TS):

```typescript
// src/types/elevenlabs.d.ts
declare namespace JSX {
  interface IntrinsicElements {
    'elevenlabs-convai': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & { 'agent-id': string },
      HTMLElement
    >;
  }
}
```

### Styling (if needed)

The ElevenLabs widget handles its own positioning (fixed bottom-right). If customization needed:

```css
/* src/globals.css */
elevenlabs-convai {
  --elevenlabs-primary-color: var(--color-brand);
  /* Widget supports CSS custom properties */
}
```

---

## Recommendations

### Primary Recommendation: Option A (Global Floating)

**Why:**
1. **Brand alignment** - Agentic Labs sells AI agents. Having a voice AI on the site demonstrates capability.
2. **Differentiation** - Most competitors only have contact forms or chatbots.
3. **Accessibility** - Available from any page, any scroll position.
4. **Low friction** - No context switching to external AI tools.
5. **Technical simplicity** - Single component, one integration point.

### Alternative: Option D (Dual) for maximum impact

If the goal is maximum visibility and engagement, combine floating widget with enhanced AIChatPromptSection.

---

## Implementation Effort

| Option | Files Changed | Complexity | Effort |
|--------|---------------|------------|--------|
| A (Global) | 2-3 | Low | Small |
| B (Section) | 1-2 | Low | Small |
| C (Pre-contact) | 2 | Low | Small |
| D (Dual) | 3-4 | Medium | Medium |

---

## Next Steps

1. **Choose integration option** (A recommended)
2. **Create ElevenLabs wrapper component**
3. **Add to layout or section**
4. **Test across pages and devices**
5. **Verify z-index doesn't conflict with header**
6. **Test mobile experience** (ElevenLabs widget handles responsiveness)
