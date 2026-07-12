"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function AboutHero() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    
    tl.from(".ab-hero-text", {
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: "expo.out",
      filter: "blur(10px)",
    });
  }, { scope: container });

  return (
    <section ref={container} className="relative w-full min-h-[70vh] flex flex-col items-center justify-center bg-black overflow-hidden pt-24 pb-12 border-b border-white/10">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 grayscale" />
      </div>

      <div className="container mx-auto px-4 z-20 flex flex-col items-center text-center">
        <div className="ab-hero-text flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-12 bg-[#d4af37]"></div>
          <h2 className="text-white text-xs uppercase tracking-[0.3em] font-medium">
            OUR STORY
          </h2>
          <div className="h-px w-12 bg-[#d4af37]"></div>
        </div>
        
        <h1 className="ab-hero-text text-5xl md:text-7xl font-serif text-[#d4af37] mb-6 tracking-wide leading-tight">
          BEYOND IMAGINATION
        </h1>
        
        <p className="ab-hero-text text-white/70 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed mb-12">
          RK Universe was born from a singular vision: to create interconnected stories that transcend mediums. What started as a flicker of an idea has evolved into Green Chillies Entertainment & Media, a powerhouse of visual storytelling, cinematic experiences, and timeless art.
        </p>

        <div className="ab-hero-text flex gap-8 justify-center items-center">
          <div className="flex flex-col items-center">
            <span className="text-[#d4af37] text-3xl font-serif mb-2">2018</span>
            <span className="text-white/50 text-[10px] tracking-[0.2em] uppercase font-semibold">Established</span>
          </div>
          <div className="w-px h-12 bg-white/10"></div>
          <div className="flex flex-col items-center">
            <span className="text-[#d4af37] text-3xl font-serif mb-2">15+</span>
            <span className="text-white/50 text-[10px] tracking-[0.2em] uppercase font-semibold">Story Worlds</span>
          </div>
          <div className="w-px h-12 bg-white/10"></div>
          <div className="flex flex-col items-center">
            <span className="text-[#d4af37] text-3xl font-serif mb-2">Global</span>
            <span className="text-white/50 text-[10px] tracking-[0.2em] uppercase font-semibold">Community</span>
          </div>
        </div>
      </div>
    </section>
  );
}
