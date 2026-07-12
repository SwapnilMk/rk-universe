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
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "THE LAST MESSAGE",
    type: "Feature Film",
    image: "https://placehold.co/400x500?text=Image",
  },
  {
    id: 2,
    title: "CROWN OF SILENCE",
    type: "Web Series",
    image: "https://placehold.co/400x500?text=Image",
  },
  {
    id: 3,
    title: "BEYOND DESTINY",
    type: "Feature Film",
    image: "https://placehold.co/400x500?text=Image",
  },
  {
    id: 4,
    title: "SHADOWS OF TRUTH",
    type: "Web Series",
    image: "https://placehold.co/400x500?text=Image",
  },
];

export default function FeaturedProjects() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 75%",
      }
    });

    tl.from(".fp-header", {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out"
    });

    tl.from(".fp-item", {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out"
    }, "-=0.2");
  }, { scope: container });

  return (
    <section ref={container} className="bg-black py-20 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="fp-header flex justify-between items-center mb-10">
          <h2 className="text-white text-sm font-semibold tracking-widest uppercase">
            Featured Projects
          </h2>
          <Link href="#" className="flex items-center text-white/60 hover:text-white text-xs font-medium uppercase tracking-wider transition-colors">
            View All Projects
            <ChevronRight className="ml-1 w-4 h-4" />
          </Link>
        </div>

        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {projects.map((project) => (
              <CarouselItem key={project.id} className="fp-item md:basis-1/2 lg:basis-1/4">
                <div className="p-1">
                  <Card className="bg-black/50 border-white/10 rounded-xl overflow-hidden group cursor-pointer hover:border-[#4b5320] transition-colors">
                    <CardContent className="p-0 relative aspect-[4/5]">
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                        style={{ backgroundImage: `url(${project.image})` }}
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-center">
                        <h3 className="text-white font-serif text-2xl mb-2">{project.title}</h3>
                        <p className="text-[#7b8535] text-sm font-medium tracking-widest">{project.type}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="bg-black/50 border-white/20 text-white hover:bg-[#d4af37] hover:text-black hover:border-[#d4af37] -left-12" />
            <CarouselNext className="bg-black/50 border-white/20 text-white hover:bg-[#d4af37] hover:text-black hover:border-[#d4af37] -right-12" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
