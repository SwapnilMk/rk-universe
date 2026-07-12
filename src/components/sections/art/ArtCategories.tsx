"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    num: "01",
    title: "ORIGINAL COLLECTIONS",
    desc: "Unique artworks born from creativity, emotion and imagination.",
    linkText: "EXPLORE ART",
    image: "https://placehold.co/600x400?text=Image",
  },
  {
    num: "02",
    title: "LIMITED EDITIONS",
    desc: "Exclusive artworks created in limited numbers for discerning collectors.",
    linkText: "VIEW COLLECTION",
    image: "https://placehold.co/600x400?text=Image",
  },
  {
    num: "03",
    title: "ART STORIES",
    desc: "Every artwork has a story. Discover the inspiration behind each creation.",
    linkText: "READ STORIES",
    image: "https://placehold.co/600x400?text=Image",
  },
];

export default function ArtCategories() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from(".ac-item", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 75%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
    });
  }, { scope: container });

  return (
    <section ref={container} className="bg-[#050505] py-20 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <div key={index} className="ac-item flex flex-col group cursor-pointer h-full border border-white/5 rounded-xl overflow-hidden hover:border-[#d4af37]/30 transition-colors bg-black">
              
              <div className="relative h-48 sm:h-56 w-full overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                  style={{ backgroundImage: `url(${cat.image})` }}
                />
              </div>

              <div className="p-8 flex flex-col flex-1 relative z-20 -mt-16 bg-gradient-to-b from-transparent via-black/90 to-black">
                <span className="text-[#d4af37] text-2xl font-serif mb-4">
                  {cat.num}
                </span>
                <h3 className="text-white text-sm font-semibold tracking-widest uppercase mb-3">
                  {cat.title}
                </h3>
                <p className="text-white/50 text-xs leading-relaxed mb-6 flex-1">
                  {cat.desc}
                </p>
                
                <div className="pt-4 border-t border-white/10 mt-auto">
                  <Link href="#" className="inline-flex items-center text-white/70 group-hover:text-[#d4af37] text-[10px] tracking-[0.2em] font-semibold uppercase transition-colors">
                    {cat.linkText}
                    <ChevronRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
