import Navbar from '@/components/newsite/Navbar';
import Hero from '@/components/newsite/Hero';
import Comparison from '@/components/newsite/Comparison';
import Process from '@/components/newsite/Process';
import Problem from '@/components/newsite/Problem';
import Testimonials from '@/components/newsite/Testimonials';
import Differentiation from '@/components/newsite/Differentiation';
import CTA from '@/components/newsite/CTA';
import FAQ from '@/components/newsite/FAQ';
import Footer from '@/components/newsite/Footer';
import { OrganizationSchema } from '@/components/SEO';

export default function RootPage() {
  return (
    <div className="newsite">
      <OrganizationSchema />
      <Navbar />
      <Hero />
      <Comparison />
      <Process />
      <Problem />
      <Testimonials />
      <Differentiation />
      <CTA />
      <FAQ />
      <Footer />
    </div>
  );
}
