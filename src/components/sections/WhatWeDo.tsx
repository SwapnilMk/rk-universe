"use client";

import { Video, MonitorPlay, PlaySquare, PenTool, Megaphone, FileText } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { icon: Video, title: "Film Production" },
  { icon: MonitorPlay, title: "Web Series" },
  { icon: PlaySquare, title: "OTT Content" },
  { icon: PenTool, title: "Story Development" },
  { icon: Megaphone, title: "Branded Content" },
  { icon: FileText, title: "Script Development" },
];

export default function WhatWeDo() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from(".what-we-do-item", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out",
    });
  }, { scope: container });

  return (
    <section ref={container} className="bg-black py-16 border-t border-white/10">
      <div className="container mx-auto px-4">
        <h2 className="text-[#7b8535] text-center text-sm font-semibold tracking-widest uppercase mb-12">
          What We Do
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="what-we-do-item flex flex-col items-center justify-center gap-4 group cursor-pointer"
              >
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-[#4b5320]/20 group-hover:border-[#d4af37]/50 transition-all duration-300">
                  <Icon className="w-8 h-8 text-[#d4af37] group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                </div>
                <h3 className="text-white/80 text-xs text-center font-medium uppercase tracking-wider group-hover:text-white transition-colors">
                  {service.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
