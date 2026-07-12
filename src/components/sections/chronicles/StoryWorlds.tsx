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

const worlds = [
  {
    id: 1,
    world: "WORLD 01",
    title: "THE SILENCE BETWEEN US",
    desc: "A story of memories, secrets and choices.",
    chapters: "50 CHAPTERS",
    image: "https://placehold.co/400x500?text=Image",
  },
  {
    id: 2,
    world: "WORLD 02",
    title: "THE LAST CONFESSION",
    desc: "Some truths should never be spoken.",
    chapters: "45 CHAPTERS",
    image: "https://placehold.co/400x500?text=Image",
  },
  {
    id: 3,
    world: "WORLD 03",
    title: "MEMORY ROOM",
    desc: "The past is not lost, it is waiting.",
    chapters: "40 CHAPTERS",
    image: "https://placehold.co/400x500?text=Image",
  },
  {
    id: 4,
    world: "WORLD 04",
    title: "THE UNKNOWN MAN",
    desc: "A man with no name. A mystery with no end.",
    chapters: "ONGOING",
    image: "https://placehold.co/400x500?text=Image",
  },
  {
    id: 5,
    world: "WORLD 05",
    title: "BEYOND TOMORROW",
    desc: "A world beyond time. A journey beyond limits.",
    chapters: "COMING SOON",
    image: "https://placehold.co/400x500?text=Image",
  },
];

export default function StoryWorlds() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 75%",
      }
    });

    tl.from(".sw-header", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out"
    });

    tl.from(".sw-item", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out"
    }, "-=0.4");
  }, { scope: container });

  return (
    <section ref={container} className="bg-[#050505] py-24 border-t border-white/5">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="sw-header flex justify-center items-center mb-16 relative">
          <div className="h-px w-full max-w-[200px] bg-gradient-to-r from-transparent to-[#d4af37]/50 hidden md:block"></div>
          <h2 className="text-[#d4af37] text-lg font-serif uppercase tracking-[0.2em] px-8 text-center whitespace-nowrap">
            Explore the Story Worlds
          </h2>
          <div className="h-px w-full max-w-[200px] bg-gradient-to-l from-transparent to-[#d4af37]/50 hidden md:block"></div>
          
          <Link href="#" className="absolute right-0 flex items-center text-white/50 hover:text-white text-[10px] font-semibold uppercase tracking-[0.2em] transition-colors">
            View All Worlds
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
            {worlds.map((world) => (
              <CarouselItem key={world.id} className="sw-item md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="p-1 h-full">
                  <Card className="bg-black border-white/10 rounded-xl overflow-hidden group cursor-pointer hover:border-[#d4af37]/50 transition-colors h-full flex flex-col">
                    <CardContent className="p-0 flex flex-col h-full">
                      {/* Image Area */}
                      <div className="relative h-64 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                        <div 
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                          style={{ backgroundImage: `url(${world.image})` }}
                        />
                      </div>
                      
                      {/* Content Area */}
                      <div className="p-6 flex flex-col flex-1 text-center items-center bg-black z-20">
                        <span className="text-[#d4af37] text-[10px] tracking-[0.2em] font-semibold mb-2">
                          {world.world}
                        </span>
                        <h3 className="text-white font-serif text-lg mb-3 tracking-wide leading-tight">
                          {world.title}
                        </h3>
                        <p className="text-white/50 text-xs font-light mb-6 flex-1">
                          {world.desc}
                        </p>
                        <div className="text-white/40 text-[9px] uppercase tracking-[0.2em] font-semibold border-t border-white/10 pt-4 w-full">
                          {world.chapters}
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
