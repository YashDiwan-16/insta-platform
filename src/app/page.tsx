import Navigation from '@/components/ui/navigation';
import Hero from '@/components/sections/hero';
import Features from '@/components/sections/features';
import HowItWorks from '@/components/sections/how-it-works';
import Stats from '@/components/sections/stats';
import Testimonials from '@/components/sections/testimonials';
import FAQ from '@/components/sections/faq';
import CTA from '@/components/sections/cta';
import Footer from '@/components/ui/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
