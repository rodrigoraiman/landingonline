"use client";
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Gallery />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
      <CookieBanner />
    </>
  );
}
