# Website Redesign Plan: Agentic Labs

## Overview

Remove all existing animations and redesign the website with a clean, modern, conversion-focused approach. Preserve existing copy/content while improving it through professional copywriting review. Keep media placeholders minimal.

---

## Phase 1: Remove All Animations

### Files to Modify:
1. **Delete/Simplify Animation Components:**
   - `src/components/LiquidEther.tsx` - Remove entirely (WebGL fluid simulation)
   - `src/components/TextAnimations.tsx` - Convert to static versions (remove animation logic)
   - `src/components/AnimatedButtons.tsx` - Convert to simple button variants
   - `src/components/NavBar.tsx` - Remove particle effects, keep basic navigation

2. **Update Components Using Animations:**
   - `src/app/(frontend)/page.tsx` - Remove LiquidEther background, simplify button usage
   - `src/components/HeroSection.tsx` - Remove FadeInText wrappers
   - `src/components/WhyCXOsSection.tsx` - Remove FadeInText, GlowText wrappers
   - `src/components/ProductsSection.tsx` - Remove FadeInText, SplitText wrappers
   - `src/components/SolutionsSection.tsx` - Remove FadeInText, SplitText wrappers
   - `src/components/WhyTrustUsSection.tsx` - Remove animation wrappers
   - `src/components/FAQSection.tsx` - Remove SplitText, FadeInText wrappers
   - `src/components/ContactFormSection.tsx` - Remove animation wrappers
   - `src/components/Footer.tsx` - Remove FadeInText wrappers
   - `src/components/Accordion.tsx` - Remove FadeInText wrappers

---

## Phase 2: Design System Foundation

### Design Tokens (to be added to globals.css):
```
Colors:
- Primary: #2563EB (Blue-600)
- Secondary: #0F172A (Slate-900)
- Accent: #06B6D4 (Cyan-500)
- Background: #FFFFFF
- Surface: #F8FAFC (Slate-50)
- Border: #E2E8F0 (Slate-200)
- Text Primary: #0F172A
- Text Secondary: #64748B

Typography:
- Font: Inter (already via Tailwind defaults)
- H1: 56px/64px desktop, 36px/44px mobile
- H2: 40px/48px desktop, 28px/36px mobile
- H3: 24px/32px desktop, 20px/28px mobile
- Body: 18px/28px desktop, 16px/24px mobile
- Small: 14px/20px

Spacing:
- Section padding: 96px vertical (desktop), 64px (mobile)
- Container max-width: 1280px
- Grid gap: 32px

Shadows:
- sm: 0 1px 2px rgba(0,0,0,0.05)
- md: 0 4px 6px rgba(0,0,0,0.07)
- lg: 0 10px 15px rgba(0,0,0,0.1)
```

---

## Phase 3: Component Redesign

### 3.1 Navigation (NavBar)
**Current:** Gooey particle animation nav
**New Design:**
- Clean horizontal nav with dropdown support
- Sticky header with subtle background blur on scroll
- Mobile hamburger menu
- CTA button: "Book a Demo" (solid blue)

### 3.2 Hero Section
**Current:** Full-screen with animated text, statistics cards
**New Design:**
- Split layout: Left text (60%) + Right media placeholder (40%)
- Clear headline + subheadline + dual CTAs
- Trust badges below CTAs (SOC 2, Enterprise Security)
- Single hero media placeholder (for future video/image)
- Statistics bar below hero (horizontal, minimal)

**Copy Improvements:**
- Headline: "Build AI Products That Drive Real Business Results"
- Subheadline: "From roadmap to revenue—deploy enterprise AI agents in weeks, not quarters. Zero hallucination risk, full governance."
- Primary CTA: "See How It Works"
- Secondary CTA: "Book a Strategy Call"

### 3.3 Why CXOs Section
**Current:** Image placeholder + text with animated elements
**New Design:**
- Centered headline with supporting text
- 3-column benefit cards with icons
- Single media placeholder below cards

**Copy Improvements:**
- Headline: "Built for Executive Decision-Makers"
- Subheadline: "We understand that AI initiatives need to prove ROI fast. Our approach prioritizes measurable outcomes over science projects."

### 3.4 Products Section
**Current:** 6-card grid with animated reveals
**New Design:**
- 2-3 featured products with larger cards
- Icon + name + description + CTA per card
- "View All Products" link

**Keep existing product descriptions—they're solid.**

### 3.5 Solutions Section
**Current:** 6-card grid similar to products
**New Design:**
- Tab or filter interface by industry/use case
- Larger feature cards with:
  - Category tag
  - Solution name
  - Brief description
  - Key metric/outcome
  - CTA link

### 3.6 Why Trust Us Section
**Current:** Stats + text
**New Design:**
- Social proof strip (logo placeholder row)
- Key metrics in horizontal bar
- Single testimonial placeholder with quote + attribution

**Copy Improvements:**
- Add context to metrics: "100+ Hours Saved Per Client Monthly"
- Consider: "20+ Years Combined Team Experience"

### 3.7 FAQ Section
**Current:** Accordion with icons
**New Design:**
- Clean accordion without gradient overlays
- Simple +/- toggle
- Clear question/answer typography

### 3.8 Contact Section
**Current:** Form with animated elements
**New Design:**
- Split layout: Form (left) + Contact info/benefits (right)
- Simplified form fields
- Clear privacy/compliance note
- Expected response time

### 3.9 Footer
**Current:** 4-column layout with animation
**New Design:**
- Simplified 3-column layout
- Logo + tagline
- Navigation links
- Contact + social
- Legal links in bottom bar

---

## Phase 4: Media Placeholders (Minimal)

Keep to absolute minimum for clean, fast-loading experience:

1. **Hero Section:** 1 placeholder (video/product demo screenshot)
2. **Why CXOs Section:** 1 placeholder (team/office or product interface)
3. **Social Proof:** Logo strip placeholder (5-6 client logos)
4. **Testimonial:** 1 small avatar placeholder

**Total: 4 media placeholder areas**

---

## Phase 5: Implementation Order

1. Remove all animation wrappers and simplify components
2. Update globals.css with design tokens
3. Redesign NavBar component (static, clean)
4. Redesign HeroSection with new layout
5. Redesign WhyCXOsSection with benefit cards
6. Update ProductsSection layout
7. Update SolutionsSection layout
8. Redesign WhyTrustUsSection with social proof
9. Simplify FAQSection/Accordion
10. Redesign ContactFormSection
11. Simplify Footer
12. Final polish and responsive testing

---

## Copywriting Improvements Summary

### Headline Updates:
| Section | Current | Proposed |
|---------|---------|----------|
| Hero H1 | "Build Agentic Products that Move the Business" | "Build AI Products That Drive Real Business Results" |
| Hero Sub | "From roadmap to revenue: AI agents deployed in weeks, not quarters" | "From roadmap to revenue—deploy enterprise AI agents in weeks, not quarters. Zero hallucination risk, full governance." |
| CXOs | "Why CXOs choose us" | "Built for Executive Decision-Makers" |
| Trust | "Why Trust Us" | "Trusted by Enterprise Leaders" |
| Contact | "Let's Build Production AI" | "Ready to Deploy Production AI?" |

### CTA Updates:
| Current | Proposed |
|---------|----------|
| "Explore Solutions" | "See How It Works" |
| "Book a Strategy Call" | Keep as is |
| "See our approach" | "Learn Our Process" |
| "Request a Strategy Call" | "Schedule Your Demo" |

---

## Technical Notes

- Keep Tailwind CSS for styling
- Remove Three.js dependency (LiquidEther)
- Remove unused animation keyframes from globals.css
- Ensure all interactive elements have proper hover/focus states
- Maintain accessibility (ARIA labels, keyboard nav)
- Test on mobile breakpoints (sm, md, lg)
