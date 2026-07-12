"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Eye, Target, Compass } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function MissionVision() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from(".mv-item", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 75%",
      },
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
    });
  }, { scope: container });

  return (
    <section ref={container} className="bg-[#050505] py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Mission */}
          <div className="mv-item flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mb-6 bg-black group-hover:border-[#d4af37]/50 transition-colors">
              <Target className="w-6 h-6 text-[#d4af37]" />
            </div>
            <h3 className="text-white text-lg font-serif mb-4 tracking-wider uppercase">Our Mission</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              To craft unparalleled stories that deeply resonate. We aim to blur the lines between traditional storytelling and modern visual art, ensuring every release is an event in itself.
            </p>
          </div>

          {/* Vision */}
          <div className="mv-item flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mb-6 bg-black group-hover:border-[#d4af37]/50 transition-colors">
              <Eye className="w-6 h-6 text-[#d4af37]" />
            </div>
            <h3 className="text-white text-lg font-serif mb-4 tracking-wider uppercase">Our Vision</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              To be the vanguard of narrative universes. We envision a future where RK Chronicles and RK Art Collection become cornerstones of global modern mythology and culture.
            </p>
          </div>

          {/* Values */}
          <div className="mv-item flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mb-6 bg-black group-hover:border-[#d4af37]/50 transition-colors">
              <Compass className="w-6 h-6 text-[#d4af37]" />
            </div>
            <h3 className="text-white text-lg font-serif mb-4 tracking-wider uppercase">Our Values</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Creativity without bounds, passion in execution, and an unwavering commitment to cinematic excellence. Every detail matters, and every story must leave a mark.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
