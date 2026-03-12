import Cursor from "@/app/components/Cursor";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import HeroSection from "@/app/sections/HeroSection";
import TickerSection from "@/app/sections/TickerSection";
import AboutSection from "@/app/sections/AboutSection";
import WorkSection from "@/app/sections/WorkSection";
import SkillsSection from "@/app/sections/SkillsSection";
import ContactSection from "@/app/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <HeroSection />
        <TickerSection />
        <AboutSection />
        <WorkSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
