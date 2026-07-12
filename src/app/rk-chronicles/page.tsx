import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChroniclesHero from "@/components/sections/chronicles/ChroniclesHero";
import StoryWorlds from "@/components/sections/chronicles/StoryWorlds";
import CurrentlyReleasing from "@/components/sections/chronicles/CurrentlyReleasing";
import ChronicleSociety from "@/components/sections/chronicles/ChronicleSociety";

export default function RKChroniclesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#050505] text-white font-sans">
      <Header />
      <main className="flex-1">
        <ChroniclesHero />
        <StoryWorlds />
        
        {/* Bottom Section with Releasing and Society components */}
        <section className="py-24 px-4 bg-black">
          <div className="container mx-auto flex flex-col xl:flex-row gap-8 justify-center items-center xl:items-stretch">
            <CurrentlyReleasing />
            <ChronicleSociety />
          </div>
          
          {/* Extra Info Bar (as seen at bottom of design) */}
          <div className="container mx-auto mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
            <div className="flex items-center gap-3">
              <div className="text-[#d4af37] text-xl">📅</div>
              <div>
                <div className="text-white text-[10px] font-semibold tracking-wider uppercase">Weekly Chapters</div>
                <div className="text-white/50 text-[10px]">New chapter every week</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-[#d4af37] text-xl">👤</div>
              <div>
                <div className="text-white text-[10px] font-semibold tracking-wider uppercase">Character Files</div>
                <div className="text-white/50 text-[10px]">Know every soul deeply</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-[#d4af37] text-xl">🔗</div>
              <div>
                <div className="text-white text-[10px] font-semibold tracking-wider uppercase">Hidden Connections</div>
                <div className="text-white/50 text-[10px]">Every detail is connected</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-[#d4af37] text-xl">💬</div>
              <div>
                <div className="text-white text-[10px] font-semibold tracking-wider uppercase">Reader Discussions</div>
                <div className="text-white/50 text-[10px]">Share. Discuss. Belong.</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
