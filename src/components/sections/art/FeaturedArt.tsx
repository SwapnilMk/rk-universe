"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const featuredArt = [
  {
    id: 1,
    title: "THE GOLDEN MEMORY",
    desc: "Contemporary Digital Art",
    image: "https://placehold.co/400x500?text=Image",
  },
  {
    id: 2,
    title: "ETERNAL DREAMS",
    desc: "Surreal Digital Art",
    image: "https://placehold.co/400x500?text=Image",
  },
  {
    id: 3,
    title: "SILENT UNIVERSE",
    desc: "Cosmic Digital Art",
    image: "https://placehold.co/400x500?text=Image",
  },
  {
    id: 4,
    title: "LOST MOMENTS",
    desc: "Cinematic Digital Art",
    image: "https://placehold.co/400x500?text=Image",
  },
  {
    id: 5,
    title: "FUTURE VISIONS",
    desc: "Abstract Digital Art",
    image: "https://placehold.co/400x500?text=Image",
  },
];

export default function FeaturedArt() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 75%",
      }
    });

    tl.from(".fa-header", {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out"
    });

    tl.from(".fa-item", {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out"
    }, "-=0.4");
  }, { scope: container });

  return (
    <section ref={container} className="bg-black py-24 border-t border-white/5">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="fa-header flex justify-center items-center mb-12 relative">
          <div className="h-px w-full max-w-[150px] bg-gradient-to-r from-transparent to-[#d4af37]/50 hidden md:block"></div>
          <h2 className="text-white text-sm font-serif uppercase tracking-[0.2em] px-8 text-center whitespace-nowrap">
            <span className="text-[#d4af37] mx-2">✥</span>
            FEATURED ART COLLECTION
            <span className="text-[#d4af37] mx-2">✥</span>
          </h2>
          <div className="h-px w-full max-w-[150px] bg-gradient-to-l from-transparent to-[#d4af37]/50 hidden md:block"></div>
          
          <Link href="#" className="absolute right-0 flex items-center text-white/50 hover:text-white text-[10px] font-semibold uppercase tracking-[0.2em] transition-colors">
            VIEW ALL ARTWORKS
            <ChevronRight className="ml-1 w-3 h-3" />
          </Link>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {featuredArt.map((art) => (
              <CarouselItem key={art.id} className="fa-item md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="p-1 h-full">
                  <Card className="bg-[#050505] border-white/10 rounded-xl overflow-hidden group cursor-pointer hover:border-[#d4af37]/50 transition-colors h-full flex flex-col">
                    <CardContent className="p-0 flex flex-col h-full relative">
                      
                      {/* Image Area */}
                      <div className="relative aspect-[4/5] w-full overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-80" />
                        <div 
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
                          style={{ backgroundImage: `url(${art.image})` }}
                        />
                      </div>
                      
                      {/* Content Area Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col z-20">
                        <h3 className="text-white font-serif text-sm mb-1 tracking-wider">
                          {art.title}
                        </h3>
                        <p className="text-white/50 text-[10px] uppercase tracking-wider mb-4">
                          {art.desc}
                        </p>
                        <div className="pt-2">
                          <Link href="#" className="inline-flex items-center text-white/80 group-hover:text-[#d4af37] text-[10px] tracking-[0.2em] font-semibold uppercase transition-colors">
                            VIEW DETAILS
                            <ChevronRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>

                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="bg-black/50 border-white/20 text-white hover:bg-[#d4af37] hover:text-black hover:border-[#d4af37] -left-6" />
            <CarouselNext className="bg-black/50 border-white/20 text-white hover:bg-[#d4af37] hover:text-black hover:border-[#d4af37] -right-6" />
          </div>
        </Carousel>

      </div>
    </section>
  );
}
