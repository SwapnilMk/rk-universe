"use client";

import { Button } from "@/components/ui/button";
import { Play, Clapperboard, Film, Globe, Star } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    
    tl.from(".hero-text", {
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: "expo.out",
      filter: "blur(10px)",
    });

    tl.from(".hero-logo", {
      scale: 0.5,
      rotate: 15,
      opacity: 0,
      duration: 1.5,
      ease: "elastic.out(1, 0.5)",
      filter: "blur(20px)",
    }, "-=0.8");

    tl.from(".stat-item", {
      y: 40,
      scale: 0.9,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "back.out(1.5)",
    }, "-=1");
  }, { scope: container });

  return (
    <section ref={container} className="relative w-full min-h-[80vh] flex items-center bg-black overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
        {/* Placeholder for cinematic background image */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop')] bg-cover bg-center opacity-40" />
      </div>

      <div className="container mx-auto px-4 z-20 pt-20">
        <div className="flex justify-between items-center">
          <div className="max-w-2xl">
            <h2 className="hero-text text-[#d4af37] text-sm uppercase tracking-[0.3em] font-medium mb-4">
              Powerful Stories. Cinematic Excellence.
            </h2>
            <h1 className="hero-text text-5xl md:text-7xl font-serif text-white mb-2">
              GREEN CHILLIES
            </h1>
            <h3 className="hero-text text-2xl md:text-3xl text-[#7b8535] tracking-widest font-light mb-8">
              ENTERTAINMENT & MEDIA
            </h3>
            
            <p className="hero-text text-white/80 text-lg md:text-xl max-w-lg mb-10 leading-relaxed font-light">
              We create films, series and content that entertain, inspire and leave a lasting impact.
              Driven by creativity. Defined by passion.
            </p>
            
            <div className="hero-text flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#4b5320] hover:bg-[#5b6330] text-white rounded-none px-8 py-6 text-sm tracking-wider border-none">
                <Play className="mr-2 h-4 w-4 fill-white" />
                WATCH SHOWREEL
              </Button>
              <Button variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white rounded-none px-8 py-6 text-sm tracking-wider">
                OUR JOURNEY
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:flex w-1/3 justify-center">
             {/* Green Chillies Logo */}
             <div className="hero-logo relative w-80 h-80 rounded-full border border-[#4b5320]/50 flex items-center justify-center bg-black/50 backdrop-blur-sm shadow-[0_0_50px_rgba(75,83,32,0.3)] overflow-hidden">
                <Image 
                src="/rklogo.png"
                  alt="Green Chillies Logo"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-contain p-4"
                />
             </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-10">
          <div className="stat-item flex items-center gap-4">
            <div className="w-12 h-12 border border-white/20 flex items-center justify-center rounded">
              <Clapperboard className="text-white w-6 h-6" />
            </div>
            <div>
              <div className="text-white text-2xl font-semibold">25+</div>
              <div className="text-white/60 text-xs uppercase">Original Projects<br/>Created</div>
            </div>
          </div>
          <div className="stat-item flex items-center gap-4">
            <div className="w-12 h-12 border border-white/20 flex items-center justify-center rounded">
              <Film className="text-white w-6 h-6" />
            </div>
            <div>
              <div className="text-white text-2xl font-semibold">10+</div>
              <div className="text-white/60 text-xs uppercase">Genres<br/>Explored</div>
            </div>
          </div>
          <div className="stat-item flex items-center gap-4">
            <div className="w-12 h-12 border border-white/20 flex items-center justify-center rounded">
              <Globe className="text-white w-6 h-6" />
            </div>
            <div>
              <div className="text-white text-lg font-semibold">Global Vision</div>
              <div className="text-white/60 text-xs">Stories for a<br/>Worldwide Audience</div>
            </div>
          </div>
          <div className="stat-item flex items-center gap-4">
            <div className="w-12 h-12 border border-white/20 flex items-center justify-center rounded">
              <Star className="text-white w-6 h-6" />
            </div>
            <div>
              <div className="text-white text-lg font-semibold">Creative Excellence</div>
              <div className="text-white/60 text-xs">Passion in Every<br/>Frame</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
