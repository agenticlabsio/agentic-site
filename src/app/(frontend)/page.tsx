import Hero from '@/components/newsite/Hero';
import Comparison from '@/components/newsite/Comparison';
import Process from '@/components/newsite/Process';
import Problem from '@/components/newsite/Problem';
import Differentiation from '@/components/newsite/Differentiation';
import Security from '@/components/newsite/Security';
import CTA from '@/components/newsite/CTA';
import FAQ from '@/components/newsite/FAQ';
import { FAQSchema } from '@/components/SEO';
import { getFAQ } from '@/lib/payload';

// ISR: the homepage FAQ is pulled from the CMS at build/revalidate, not per request.
export const revalidate = 3600;

export default async function RootPage() {
  // Homepage shows a curated subset of the canonical CMS FAQ (first 6 by order).
  const allFaqs = await getFAQ();
  const faqs = allFaqs
    .slice(0, 6)
    .map((f) => ({ question: f.question, answer: f.answer }));

  return (
    <main>
      <FAQSchema faqs={faqs} />
      <Hero />
      <Comparison />
      <Process />
      <Problem />
      <Differentiation />
      <Security />
      <CTA />
      <FAQ faqs={faqs} />
    </main>
  );
}
