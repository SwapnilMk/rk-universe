"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Home, Building2, Landmark } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ForCollectors() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 75%",
      }
    });

    tl.from(".fc-content", {
      x: -50,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power2.out"
    });

    tl.from(".fc-image", {
      x: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power2.out"
    }, "-=1");

    tl.from(".fc-quote", {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5");
  }, { scope: container });

  return (
    <section ref={container} className="bg-black py-24 pb-32 border-t border-white/5 relative">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center border border-white/10 rounded-2xl bg-[#050505] p-8 md:p-12">
          
          {/* Left Text Content */}
          <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="fc-content text-[#d4af37] text-2xl md:text-3xl font-serif mb-6 uppercase tracking-wider">
              For Collectors
            </h2>
            <h3 className="fc-content text-white text-lg md:text-xl font-semibold mb-4">
              Own a piece of imagination.
            </h3>
            <p className="fc-content text-white/60 text-sm mb-10 max-w-sm">
              Discover exclusive artworks crafted for extraordinary spaces and timeless value.
            </p>
            <Button variant="outline" className="fc-content bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white rounded-sm px-8 py-6 text-xs font-semibold tracking-widest group">
              JOIN THE COLLECTOR LIST
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right Images */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-4 h-full">
            
            {/* Private Spaces */}
            <div className="fc-image relative h-64 md:h-[400px] rounded-lg overflow-hidden group cursor-pointer border border-white/5 hover:border-[#d4af37]/30 transition-colors">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100"
                style={{ backgroundImage: `url('https://placehold.co/400x600?text=Private+Space')` }}
              />
              <div className="absolute bottom-6 left-0 right-0 z-20 flex flex-col items-center justify-center text-center">
                <Home className="text-[#d4af37] w-6 h-6 mb-3 opacity-80" />
                <span className="text-white text-xs font-semibold uppercase tracking-widest">Private Spaces</span>
              </div>
            </div>

            {/* Corporate Spaces */}
            <div className="fc-image relative h-64 md:h-[400px] rounded-lg overflow-hidden group cursor-pointer border border-white/5 hover:border-[#d4af37]/30 transition-colors">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100"
                style={{ backgroundImage: `url('https://placehold.co/400x600?text=Corporate+Space')` }}
              />
              <div className="absolute bottom-6 left-0 right-0 z-20 flex flex-col items-center justify-center text-center">
                <Building2 className="text-[#d4af37] w-6 h-6 mb-3 opacity-80" />
                <span className="text-white text-xs font-semibold uppercase tracking-widest">Corporate Spaces</span>
              </div>
            </div>

            {/* Galleries & Museums */}
            <div className="fc-image relative h-64 md:h-[400px] rounded-lg overflow-hidden group cursor-pointer border border-white/5 hover:border-[#d4af37]/30 transition-colors">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100"
                style={{ backgroundImage: `url('https://placehold.co/400x600?text=Galleries')` }}
              />
              <div className="absolute bottom-6 left-0 right-0 z-20 flex flex-col items-center justify-center text-center">
                <Landmark className="text-[#d4af37] w-6 h-6 mb-3 opacity-80" />
                <span className="text-white text-xs font-semibold uppercase tracking-widest">Galleries & Museums</span>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Quote */}
        <div className="fc-quote mt-24 text-center flex flex-col items-center">
          <h4 className="text-white/50 text-[10px] font-semibold tracking-[0.2em] uppercase mb-4">
            The Vision Behind RK Art Collection
          </h4>
          <p className="text-white font-serif text-xl md:text-2xl italic tracking-wide">
            Art is not just something you see. It is something you remember.
          </p>
        </div>

      </div>
    </section>
  );
}
