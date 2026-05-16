import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeStrip from "@/components/MarqueeStrip";
import AboutSection from "@/components/AboutSection";
import WhatWeDo from "@/components/WhatWeDo";
import CultureSection from "@/components/CultureSection";
import ContentSection from "@/components/ContentSection";
import PhilosophySection from "@/components/PhilosophySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <MarqueeStrip />
      <Hero />
      <AboutSection />
      <WhatWeDo />
      <CultureSection />
      <ContentSection />
      <PhilosophySection />
      <CTASection />
      <Footer />
    </main>
  );
}
