import ContactSection from "@/components/sections/ContactSection";
import ExpertiseTags from "@/components/sections/ExpertiseTags";
import PsychologistJsonLd from "@/components/seo/PsychologistJsonLd";
import FinalCta from "@/components/sections/FinalCta";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import HowWeWork from "@/components/sections/HowWeWork";
import MissionSection from "@/components/sections/MissionSection";
import Navbar from "@/components/sections/Navbar";
import OurOffice from "@/components/sections/OurOffice";
import QuoteBanner from "@/components/sections/QuoteBanner";
import SpecialtiesGrid from "@/components/sections/SpecialtiesGrid";
import WhoWeHelpGrid from "@/components/sections/WhoWeHelpGrid";

export default function Home() {
  return (
    <div id="top" className="flex min-h-full flex-col">
      <PsychologistJsonLd />
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Hero />
        <MissionSection />
        <WhoWeHelpGrid />
        <QuoteBanner />
        <ExpertiseTags />
        <HowWeWork />
        <SpecialtiesGrid />
        <OurOffice />
        <ContactSection />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
