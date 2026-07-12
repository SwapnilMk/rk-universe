"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import { Video, Palette, Feather, Star, Award, Crown, Globe } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Home() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    
    tl.from(".hero-text", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
    });

    tl.from(".card-item", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    }, "-=0.5");

    tl.from(".features-bar", {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    }, "-=0.5");
  }, { scope: container });

  return (
    <div ref={container} className="flex flex-col min-h-screen bg-[#050505] text-white font-sans selection:bg-[#d4af37] selection:text-black relative">
      {/* Global Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <Image src="/background.png" alt="Background" fill className="object-cover opacity-40 mix-blend-lighten" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-[#050505]/70 to-[#050505]"></div>
      </div>
      
      <div className="relative z-10 flex flex-col min-h-screen w-full">
        <Header />
        
        <main className="flex-1 relative overflow-hidden flex flex-col items-center pt-16 pb-12">

        {/* Hero Header */}
        <div className="text-center px-4 flex flex-col items-center w-full max-w-7xl mx-auto mb-16">
          <div className="hero-text flex items-center gap-4 mb-2">
            <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-[#d4af37]"></div>
            <span className="text-[#d4af37] font-['--font-cinzel'] font-semibold tracking-[0.3em] text-xs sm:text-sm">WELCOME TO</span>
            <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-[#d4af37]"></div>
          </div>
          
          <h1 className="hero-text text-5xl sm:text-6xl md:text-7xl font-['--font-cinzel'] text-[#d4af37] font-bold tracking-wider mb-6 drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">
            RK UNIVERSE
          </h1>
          
          <div className="hero-text flex flex-col gap-2">
            <h2 className="text-white font-semibold tracking-[0.2em] text-sm sm:text-base">
              THREE WORLDS. ONE VISION.
            </h2>
            <p className="text-white/60 text-[10px] sm:text-xs tracking-[0.15em] uppercase font-medium">
              Stories that inspire. Art that speaks. Experiences that stay.
            </p>
          </div>
        </div>

        {/* The 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 sm:px-8 max-w-7xl w-full mx-auto mb-16">
          {/* Card 1 */}
          <div className="card-item">
            <div className="group relative flex flex-col h-[520px] border border-white/10 rounded-sm overflow-hidden bg-black transition-all duration-500 hover:border-[#8a9a5b]/50 hover:shadow-[0_0_30px_rgba(138,154,91,0.15)] hover:-translate-y-2">
              <div className="relative h-[55%] w-full">
                <div className="absolute inset-0 opacity-80 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105">
                  <Image src="/1.png" alt="Green Chillies" fill className="object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              </div>
              
              <div className="relative h-[45%] flex flex-col items-center text-center px-8 pb-8 z-10 pt-10">
                <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full border border-[#8a9a5b] flex items-center justify-center text-[#8a9a5b] bg-black shadow-[0_0_15px_rgba(138,154,91,0.2)] transition-transform duration-500 group-hover:scale-110">
                  <Video className="w-6 h-6 fill-current" />
                </div>
                <h3 className="text-[#8a9a5b] font-['--font-cinzel'] text-[22px] font-bold tracking-wider mb-1 mt-1 drop-shadow-[0_0_10px_rgba(138,154,91,0.2)]">GREEN CHILLIES</h3>
                <p className="text-[#8a9a5b]/90 text-[10px] tracking-[0.2em] font-medium mb-4 uppercase">Entertainment And Media</p>
                <p className="text-white/70 text-xs leading-[1.8] mb-auto font-light">
                  Driven by powerful stories and cinematic excellence
                </p>
                <a href="https://www.instagram.com/greenchillies.media/" target="_blank" rel="noopener noreferrer" className="border border-[#8a9a5b]/30 text-[#8a9a5b] text-[11px] font-semibold tracking-widest px-8 py-2.5 hover:bg-[#8a9a5b]/10 transition-colors uppercase mt-6 group-hover:border-[#8a9a5b]/80 flex items-center gap-2">
                  ENTER WORLD <span className="text-[14px] leading-none">&rsaquo;</span>
                </a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card-item">
            <div className="group relative flex flex-col h-[520px] border border-white/10 rounded-sm overflow-hidden bg-black transition-all duration-500 hover:border-[#d4af37]/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] hover:-translate-y-2">
              <div className="relative h-[55%] w-full">
                <div className="absolute inset-0 opacity-80 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105">
                  <Image src="/2.png" alt="RK Art Collection" fill className="object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              </div>
              
              <div className="relative h-[45%] flex flex-col items-center text-center px-8 pb-8 z-10 pt-10">
                <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full border border-[#d4af37] flex items-center justify-center text-[#d4af37] bg-black shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-transform duration-500 group-hover:scale-110">
                  <Palette className="w-6 h-6 fill-current" />
                </div>
                <h3 className="text-[#d4af37] font-['--font-cinzel'] text-[22px] font-bold tracking-wider mb-4 mt-1 drop-shadow-[0_0_10px_rgba(212,175,55,0.2)]">RK ART COLLECTION</h3>
                <p className="text-white/70 text-xs leading-[1.8] mb-auto font-light">
                  A curated collection of original artworks that reflect emotion, imagination and timeless beauty.
                </p>
                <a href="https://www.instagram.com/rkart.world/" target="_blank" rel="noopener noreferrer" className="border border-[#d4af37]/30 text-[#d4af37] text-[11px] font-semibold tracking-widest px-8 py-2.5 hover:bg-[#d4af37]/10 transition-colors uppercase mt-6 group-hover:border-[#d4af37]/80 flex items-center gap-2">
                  ENTER GALLERY <span className="text-[14px] leading-none">&rsaquo;</span>
                </a>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card-item">
            <div className="group relative flex flex-col h-[520px] border border-white/10 rounded-sm overflow-hidden bg-black transition-all duration-500 hover:border-[#d4af37]/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] hover:-translate-y-2">
              <div className="relative h-[55%] w-full">
                <div className="absolute inset-0 opacity-80 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105">
                  <Image src="/3.png" alt="RK Chronicles" fill className="object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              </div>
              
              <div className="relative h-[45%] flex flex-col items-center text-center px-8 pb-8 z-10 pt-10">
                <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full border border-[#d4af37] flex items-center justify-center text-[#d4af37] bg-black shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-transform duration-500 group-hover:scale-110">
                  <Feather className="w-6 h-6 fill-current" />
                </div>
                <h3 className="text-[#d4af37] font-['--font-cinzel'] text-[22px] font-bold tracking-wider mb-4 mt-1 drop-shadow-[0_0_10px_rgba(212,175,55,0.2)]">RK CHRONICLES</h3>
                <p className="text-white/70 text-xs leading-[1.8] mb-auto font-light">
                  Step into our digital library and read original novels and stories from the RK Universe.
                </p>
                <a href="https://www.instagram.com/therkchronicles/" target="_blank" rel="noopener noreferrer" className="border border-[#d4af37]/30 text-[#d4af37] text-[11px] font-semibold tracking-widest px-8 py-2.5 hover:bg-[#d4af37]/10 transition-colors uppercase mt-6 group-hover:border-[#d4af37]/80 flex items-center gap-2">
                  ENTER LIBRARY <span className="text-[14px] leading-none">&rsaquo;</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Features bar */}
        <div className="features-bar w-full max-w-5xl mx-auto px-4 mb-16">
          <div className="bg-[#050505] border border-white/5 rounded-sm py-6 px-4 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
            <div className="flex items-center gap-4">
              <Star className="text-[#d4af37] w-5 h-5 fill-current" />
              <span className="text-white/90 text-[11px] tracking-[0.15em] font-medium uppercase">Original Stories</span>
            </div>
            <div className="hidden md:block w-[1px] h-6 bg-gradient-to-b from-transparent via-[#d4af37]/40 to-transparent"></div>
            <div className="flex items-center gap-4">
              <Award className="text-[#d4af37] w-5 h-5" />
              <span className="text-white/90 text-[11px] tracking-[0.15em] font-medium uppercase">Timeless Art</span>
            </div>
            <div className="hidden md:block w-[1px] h-6 bg-gradient-to-b from-transparent via-[#d4af37]/40 to-transparent"></div>
            <div className="flex items-center gap-4">
              <Crown className="text-[#d4af37] w-5 h-5 fill-current" />
              <span className="text-white/90 text-[11px] tracking-[0.15em] font-medium uppercase">Premium Experiences</span>
            </div>
            <div className="hidden md:block w-[1px] h-6 bg-gradient-to-b from-transparent via-[#d4af37]/40 to-transparent"></div>
            <div className="flex items-center gap-4">
              <Globe className="text-[#d4af37] w-5 h-5" />
              <span className="text-white/90 text-[11px] tracking-[0.15em] font-medium uppercase">Global Community</span>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="flex flex-col items-center px-4 mb-8">
          <p className="text-white/80 text-[13px] md:text-sm font-medium tracking-[0.2em] uppercase text-center mb-6">
            <span className="text-[#d4af37] text-xl font-serif leading-none mr-3 drop-shadow-[0_0_5px_rgba(212,175,55,0.5)]">&quot;</span>
            We don&apos;t just create content, we build universes.
            <span className="text-[#d4af37] text-xl font-serif leading-none ml-3 drop-shadow-[0_0_5px_rgba(212,175,55,0.5)]">&quot;</span>
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/70 to-[#d4af37]"></div>    
            <span className="text-[#d4af37] font-['--font-cinzel'] text-sm tracking-widest italic drop-shadow-[0_0_5px_rgba(212,175,55,0.5)]">RK</span>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent via-[#d4af37]/70 to-[#d4af37]"></div>
          </div>
        </div>
      </main>

      <Footer />
      </div>
    </div>
  );
}
