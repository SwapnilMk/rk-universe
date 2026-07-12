"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const newsItems = [
  {
    id: 1,
    date: "OCTOBER 15, 2024",
    category: "ANNOUNCEMENT",
    title: "RK Universe Expands: New Story World Revealed",
    excerpt: "The latest addition to the RK Chronicles library introduces a brand new universe blending sci-fi with classical mythology...",
    image: "https://placehold.co/600x400?text=News+Image+1",
  },
  {
    id: 2,
    date: "SEPTEMBER 28, 2024",
    category: "BEHIND THE SCENES",
    title: "The Making of 'The Silence Between Us'",
    excerpt: "Dive into the creative process of our most anticipated release. From concept sketches to the final cinematic digital art...",
    image: "https://placehold.co/600x400?text=News+Image+2",
  },
  {
    id: 3,
    date: "SEPTEMBER 10, 2024",
    category: "EXHIBITION",
    title: "RK Art Collection showcased in Paris",
    excerpt: "A curated selection of physical prints from the RK Art Collection will be on display at the Louvre carousel next month...",
    image: "https://placehold.co/600x400?text=News+Image+3",
  },
  {
    id: 4,
    date: "AUGUST 22, 2024",
    category: "PARTNERSHIP",
    title: "Green Chillies partners with Global Studios",
    excerpt: "A new strategic partnership that will bring RK Chronicles stories to international streaming platforms by next year...",
    image: "https://placehold.co/600x400?text=News+Image+4",
  }
];

export default function NewsList() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from(".nl-item", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
    });
  }, { scope: container });

  return (
    <section ref={container} className="bg-[#050505] py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {newsItems.map((news) => (
            <div key={news.id} className="nl-item flex flex-col group cursor-pointer">
              <div className="relative h-64 md:h-72 w-full rounded-lg overflow-hidden border border-white/10 mb-6">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
                  style={{ backgroundImage: `url(${news.image})` }}
                />
              </div>
              
              <div className="flex items-center gap-4 mb-4 text-[10px] font-semibold tracking-widest uppercase">
                <span className="text-[#d4af37]">{news.category}</span>
                <span className="text-white/40">{news.date}</span>
              </div>
              
              <h3 className="text-white text-xl md:text-2xl font-serif mb-4 group-hover:text-[#d4af37] transition-colors leading-snug">
                {news.title}
              </h3>
              
              <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1">
                {news.excerpt}
              </p>
              
              <Link href="#" className="inline-flex items-center text-white/80 group-hover:text-[#d4af37] text-xs font-semibold tracking-widest uppercase transition-colors">
                READ MORE
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-20 flex justify-center">
          <button className="border border-white/20 text-white hover:border-[#d4af37] hover:text-[#d4af37] px-10 py-4 text-xs font-semibold tracking-widest uppercase transition-colors rounded-sm">
            LOAD MORE NEWS
          </button>
        </div>
      </div>
    </section>
  );
}
