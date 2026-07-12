"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight, BookOpen, Users, Globe, ScrollText } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function ChroniclesHero() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    
    tl.from(".ch-hero-text", {
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: "expo.out",
      filter: "blur(10px)",
    });

    tl.from(".ch-hero-feature", {
      y: 40,
      scale: 0.9,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "back.out(1.5)",
    }, "-=1");

    tl.from(".ch-hero-logo", {
      scale: 0.5,
      rotate: 15,
      opacity: 0,
      duration: 1.5,
      ease: "elastic.out(1, 0.5)",
      filter: "blur(20px)",
    }, "-=0.8");
  }, { scope: container });

  return (
    <section ref={container} className="relative w-full min-h-[90vh] flex flex-col items-center justify-center bg-black overflow-hidden pt-20">
      {/* Background Library Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2190&auto=format&fit=crop')] bg-cover bg-center opacity-30" />
      </div>

      <div className="container mx-auto px-4 z-20 flex flex-col lg:flex-row items-center justify-between">
        
        {/* Left Side Content */}
        <div className="flex flex-col max-w-2xl text-center lg:text-left mb-16 lg:mb-0">
          <div className="ch-hero-text flex items-center justify-center lg:justify-start gap-4 mb-4">
            <div className="h-px w-12 bg-[#d4af37]"></div>
            <h2 className="text-white text-sm uppercase tracking-[0.2em] font-medium">
              WELCOME TO
            </h2>
            <div className="h-px w-12 bg-[#d4af37]"></div>
          </div>
          
          <h1 className="ch-hero-text text-5xl md:text-7xl font-serif text-[#d4af37] mb-6">
            RK CHRONICLES
          </h1>
          
          <p className="ch-hero-text text-white text-lg md:text-xl max-w-lg mb-12 tracking-wide font-light mx-auto lg:mx-0">
            A LIVING DIGITAL LIBRARY WHERE EVERY WEEK A NEW STORY WORLD OPENS.
          </p>
          
          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 border-b border-white/10 pb-12">
            <div className="ch-hero-feature flex flex-col items-center text-center">
              <BookOpen className="text-[#d4af37] w-8 h-8 mb-4" />
              <span className="text-white/80 text-[10px] font-semibold tracking-widest uppercase">Original<br/>Stories</span>
            </div>
            <div className="ch-hero-feature flex flex-col items-center text-center">
              <Users className="text-[#d4af37] w-8 h-8 mb-4" />
              <span className="text-white/80 text-[10px] font-semibold tracking-widest uppercase">Powerful<br/>Characters</span>
            </div>
            <div className="ch-hero-feature flex flex-col items-center text-center">
              <Globe className="text-[#d4af37] w-8 h-8 mb-4" />
              <span className="text-white/80 text-[10px] font-semibold tracking-widest uppercase">Interconnected<br/>Worlds</span>
            </div>
            <div className="ch-hero-feature flex flex-col items-center text-center">
              <ScrollText className="text-[#d4af37] w-8 h-8 mb-4" />
              <span className="text-white/80 text-[10px] font-semibold tracking-widest uppercase">Stories That<br/>Stay With You</span>
            </div>
          </div>
          
          <div className="ch-hero-text flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
            <Button className="bg-gradient-to-r from-[#d4af37] to-[#b38b22] hover:from-[#e5c256] hover:to-[#c49b33] text-black rounded-sm px-10 py-6 text-sm font-semibold tracking-widest border-none">
              EXPLORE LIBRARY
            </Button>
            <Button variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white rounded-sm px-10 py-6 text-sm font-semibold tracking-widest">
              START READING
              <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
          
          {/* Quote */}
          <div className="ch-hero-text mt-16 mx-auto lg:mx-0 max-w-md text-center lg:text-left">
            <p className="text-[#d4af37] font-serif text-xl italic leading-relaxed">
              I dont just write stories. I build universes you can belong to.
            </p>
            <div className="mt-4 flex items-center justify-center lg:justify-start gap-4">
              <div className="h-px w-8 bg-[#d4af37]/50"></div>
              <span className="text-white/60 tracking-widest text-sm">- RK -</span>
              <div className="h-px w-8 bg-[#d4af37]/50"></div>
            </div>
          </div>
        </div>
        
        {/* Right Side: glowing book / logo */}
        <div className="ch-hero-logo w-full lg:w-1/2 flex justify-center lg:justify-end relative">
          <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
            <div className="absolute inset-0 bg-[#d4af37]/20 rounded-full blur-[100px] z-0"></div>
            
            {/* The Book / Emblem Image */}
            <div className="relative z-10 w-full h-full flex items-center justify-center shadow-[0_0_80px_rgba(212,175,55,0.15)] rounded-full overflow-hidden">
               <Image 
                 src="/rkchronicels.png" 
                 alt="The RK Chronicles Logo" 
                 fill
                 sizes="(max-width: 768px) 300px, 450px"
                 className="object-contain"
               />
            </div>
            
            {/* Glowing Book placeholder at bottom of circle */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-64 h-32 z-20 flex justify-center items-end opacity-90 drop-shadow-[0_0_30px_rgba(212,175,55,0.8)]">
               <div className="text-6xl">📖</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
