import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ArtHero from "@/components/sections/art/ArtHero";
import ArtCategories from "@/components/sections/art/ArtCategories";
import FeaturedArt from "@/components/sections/art/FeaturedArt";
import ForCollectors from "@/components/sections/art/ForCollectors";

export default function RKArtCollectionPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-sans">
      <Header />
      <main className="flex-1">
        <ArtHero />
        <ArtCategories />
        <FeaturedArt />
        <ForCollectors />
      </main>
      <Footer />
    </div>
  );
}
