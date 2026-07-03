import type { ReactNode } from 'react'
import { HeroSection, type HeroSectionProps } from './sections/HeroSection'
import { MetricsGrid, type MetricItem } from './sections/MetricsGrid'
import { NarrativeSection, type NarrativeSectionProps } from './sections/NarrativeSection'
import { CardGridSection, type CardGridItem } from './sections/CardGridSection'
import { ProcessStepsSection, type ProcessStep } from './sections/ProcessStepsSection'
import { TagListSection } from './sections/TagListSection'
import { StatBandSection, type MarketStat } from './sections/StatBandSection'
import { ChecklistSection } from './sections/ChecklistSection'
import { PillLinksSection } from './sections/PillLinksSection'
import { FaqListSection, type FaqItem } from './sections/FaqListSection'
import { BeforeAfterSection } from './sections/BeforeAfterSection'
import { QuoteSection } from './sections/QuoteSection'
import { CtaSection, type CtaSectionProps } from './sections/CtaSection'

// Normalized, discriminated section descriptors. Solutions, Industries, and
// CaseStudies each use a different subset in a different order — pages build
// an ordered `sections` array from their CMS record and the template renders
// exactly what's provided, nothing more.
export type DetailSection =
  | { type: 'metrics'; heading: string; variant: 'band' | 'cards'; items: MetricItem[] }
  | ({ type: 'narrative' } & NarrativeSectionProps)
  | ({ type: 'cardGrid' } & { heading: string; description?: string; items: CardGridItem[]; variant?: 'bordered' | 'plain'; columns?: 2 | 3; bgTint?: boolean })
  | { type: 'processSteps'; heading: string; description?: string; steps: ProcessStep[] }
  | { type: 'integrations'; heading: string; description?: string; items: string[]; bgTint?: boolean }
  | { type: 'statBand'; heading: string; items: MarketStat[] }
  | { type: 'checklist'; heading: string; items: string[] }
  | { type: 'pillLinks'; heading: string; slugs: string[] }
  | { type: 'faqs'; heading: string; description?: string; items: FaqItem[] }
  | { type: 'beforeAfter'; heading: string; before: string[]; after: string[] }
  | { type: 'quote'; text: string; author: string }
  | ({ type: 'cta' } & CtaSectionProps)

function renderSection(section: DetailSection, key: number) {
  switch (section.type) {
    case 'metrics':
      return <MetricsGrid key={key} heading={section.heading} variant={section.variant} items={section.items} />
    case 'narrative':
      return <NarrativeSection key={key} {...section} />
    case 'cardGrid':
      return <CardGridSection key={key} {...section} />
    case 'processSteps':
      return (
        <ProcessStepsSection
          key={key}
          heading={section.heading}
          description={section.description}
          steps={section.steps}
        />
      )
    case 'integrations':
      return (
        <TagListSection
          key={key}
          heading={section.heading}
          description={section.description}
          items={section.items}
          bgTint={section.bgTint}
        />
      )
    case 'statBand':
      return <StatBandSection key={key} heading={section.heading} items={section.items} />
    case 'checklist':
      return <ChecklistSection key={key} heading={section.heading} items={section.items} />
    case 'pillLinks':
      return <PillLinksSection key={key} heading={section.heading} slugs={section.slugs} />
    case 'faqs':
      return (
        <FaqListSection
          key={key}
          heading={section.heading}
          description={section.description}
          items={section.items}
        />
      )
    case 'beforeAfter':
      return (
        <BeforeAfterSection key={key} heading={section.heading} before={section.before} after={section.after} />
      )
    case 'quote':
      return <QuoteSection key={key} text={section.text} author={section.author} />
    case 'cta':
      return <CtaSection key={key} {...section} />
    default:
      return null
  }
}

export interface MarketingDetailTemplateProps {
  schemas?: ReactNode
  hero: HeroSectionProps
  sections: DetailSection[]
}

// Shared RSC template for the three marketing detail entities (Solutions,
// Industries, CaseStudies). Pages map their CMS record into `hero` +
// `sections` and stay thin; all Tailwind markup lives in the section
// subcomponents under ./sections. Header/footer are owned by the frontend
// layout, so this template only renders the page's own content.
export function MarketingDetailTemplate({ schemas, hero, sections }: MarketingDetailTemplateProps) {
  return (
    <main className="pt-16">
      {schemas}
      <HeroSection {...hero} />
      {sections.map((section, i) => renderSection(section, i))}
    </main>
  )
}
