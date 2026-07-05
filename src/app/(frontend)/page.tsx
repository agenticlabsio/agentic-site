import Hero from '@/components/home/Hero'
import Contrast from '@/components/home/Contrast'
import Process from '@/components/home/Process'
import Outcomes from '@/components/home/Outcomes'
import Domains from '@/components/home/Domains'
import Assurance from '@/components/home/Assurance'
import Proof from '@/components/home/Proof'
import Closing from '@/components/home/Closing'
import HomeFaq from '@/components/home/HomeFaq'
import { FAQSchema } from '@/components/SEO'
import { getFAQ } from '@/lib/payload'

// ISR: the homepage FAQ is pulled from the CMS at build/revalidate, not per request.
export const revalidate = 3600

export default async function RootPage() {
  // Homepage shows a curated subset of the canonical CMS FAQ (first 6 by order).
  const allFaqs = await getFAQ()
  const faqs = allFaqs.slice(0, 6).map((f) => ({ question: f.question, answer: f.answer }))

  return (
    <main id="main">
      <FAQSchema faqs={faqs} />
      <Hero />
      <Contrast />
      <Process />
      <Outcomes />
      <Domains />
      <Assurance />
      <Proof />
      <Closing />
      <HomeFaq faqs={faqs} />
    </main>
  )
}
