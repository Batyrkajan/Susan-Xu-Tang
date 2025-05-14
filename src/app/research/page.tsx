import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ResearchSection from "../../components/ResearchSection";

export default function ResearchPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-24">
        <ResearchSection />
      </div>
      <Footer />
    </main>
  );
}
