import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import NewsHero from "@/components/sections/news/NewsHero";
import NewsList from "@/components/sections/news/NewsList";

export default function NewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-sans">
      <Header />
      <main className="flex-1">
        <NewsHero />
        <NewsList />
      </main>
      <Footer />
    </div>
  );
}
