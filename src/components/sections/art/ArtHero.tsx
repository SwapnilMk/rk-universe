"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Gem, ShieldCheck, Globe } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function ArtHero() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    
    tl.from(".ah-hero-text", {
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: "expo.out",
      filter: "blur(10px)",
    });

    tl.from(".ah-hero-feature", {
      x: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
    }, "-=1");

  }, { scope: container });

  return (
    <section ref={container} className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden pt-24">
      {/* Background Gallery Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577720580479-7d839d829c73?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center opacity-40" />
      </div>

      <div className="container mx-auto px-4 z-20 flex flex-col lg:flex-row items-center justify-between h-full w-full">
        
        {/* Left Side Content */}
        <div className="flex flex-col max-w-2xl text-center lg:text-left mb-16 lg:mb-0 mt-12 lg:mt-0">
          <div className="ah-hero-text flex items-center justify-center lg:justify-start gap-4 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#d4af37]"></div>
            <div className="text-[#d4af37] text-2xl font-serif">✥</div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#d4af37]"></div>
          </div>
          
          <h1 className="ah-hero-text text-6xl md:text-8xl font-serif text-[#d4af37] mb-2 leading-none">
            RK
          </h1>
          <h1 className="ah-hero-text text-4xl md:text-6xl font-serif text-[#d4af37] mb-8 leading-none">
            ART COLLECTION
          </h1>
          
          <h2 className="ah-hero-text text-white text-xs md:text-sm uppercase tracking-[0.3em] font-semibold mb-8">
            WHERE IMAGINATION BECOMES TIMELESS ART
          </h2>
          
          <p className="ah-hero-text text-white/80 text-base md:text-lg max-w-sm mb-12 font-light mx-auto lg:mx-0">
            A curated world of original artworks, visual stories and collectible creations.
          </p>
          
          <div className="ah-hero-text flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
            <Button className="bg-gradient-to-r from-[#d4af37] to-[#b38b22] hover:from-[#e5c256] hover:to-[#c49b33] text-black rounded-sm px-8 py-6 text-xs font-semibold tracking-widest border-none">
              ENTER GALLERY
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white rounded-sm px-8 py-6 text-xs font-semibold tracking-widest">
              VIEW COLLECTION
            </Button>
          </div>
        </div>
        
        {/* Right Side: Features */}
        <div className="w-full lg:w-1/3 flex flex-col gap-10 lg:pl-16 mt-16 lg:mt-0 border-l border-white/10 pl-8">
          <div className="ah-hero-feature flex gap-6 items-start">
            <Gem className="text-[#d4af37] w-6 h-6 shrink-0 mt-1" />
            <div className="flex flex-col">
              <h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-2">Original</h4>
              <p className="text-white/50 text-[10px] uppercase tracking-wider leading-relaxed">
                100% Original<br />Artworks
              </p>
            </div>
          </div>
          
          <div className="ah-hero-feature flex gap-6 items-start">
            <ShieldCheck className="text-[#d4af37] w-6 h-6 shrink-0 mt-1" />
            <div className="flex flex-col">
              <h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-2">Authentic</h4>
              <p className="text-white/50 text-[10px] uppercase tracking-wider leading-relaxed">
                Certificate of<br />Authenticity
              </p>
            </div>
          </div>

          <div className="ah-hero-feature flex gap-6 items-start">
            <Globe className="text-[#d4af37] w-6 h-6 shrink-0 mt-1" />
            <div className="flex flex-col">
              <h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-2">Worldwide</h4>
              <p className="text-white/50 text-[10px] uppercase tracking-wider leading-relaxed">
                Curated for Global<br />Collectors
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
