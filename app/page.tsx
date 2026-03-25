import SmoothScroll from "@/components/SmoothScroll";
import CursorGlow from "@/components/CursorGlow";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import Services from "@/components/Services";
import ProcessTimeline from "@/components/ProcessTimeline";
import FeatureShowcase from "@/components/FeatureShowcase";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <SmoothScroll>
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <Services />
        <ProcessTimeline />
        <Projects />
        <FeatureShowcase />
        <WhyChooseUs />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
