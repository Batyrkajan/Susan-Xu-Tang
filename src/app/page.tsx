import Header from "../components/Header";
import Hero from "../components/Hero";
import ResearchSection from "../components/ResearchSection";
import SkillsSection from "../components/SkillsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ResearchSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
