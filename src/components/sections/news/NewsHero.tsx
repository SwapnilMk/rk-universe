"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function NewsHero() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    
    tl.from(".nh-hero-text", {
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: "expo.out",
      filter: "blur(10px)",
    });
  }, { scope: container });

  return (
    <section ref={container} className="relative w-full min-h-[50vh] flex flex-col items-center justify-center bg-black overflow-hidden pt-24 pb-12 border-b border-white/10">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center opacity-30" />
      </div>

      <div className="container mx-auto px-4 z-20 flex flex-col items-center text-center">
        <div className="nh-hero-text flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-12 bg-[#d4af37]"></div>
          <h2 className="text-white text-xs uppercase tracking-[0.3em] font-medium">
            LATEST ANNOUNCEMENTS
          </h2>
          <div className="h-px w-12 bg-[#d4af37]"></div>
        </div>
        
        <h1 className="nh-hero-text text-5xl md:text-7xl font-serif text-[#d4af37] mb-6 tracking-wide">
          NEWS & UPDATES
        </h1>
        
        <p className="nh-hero-text text-white/70 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
          Stay informed about the latest releases, behind-the-scenes insights, and major developments across the RK Universe.
        </p>
      </div>
    </section>
  );
}
