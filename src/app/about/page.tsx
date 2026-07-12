import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AboutHero from "@/components/sections/about/AboutHero";
import MissionVision from "@/components/sections/about/MissionVision";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-sans">
      <Header />
      <main className="flex-1">
        <AboutHero />
        <MissionVision />
      </main>
      <Footer />
    </div>
  );
}
