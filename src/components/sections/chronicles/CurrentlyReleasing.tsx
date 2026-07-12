"use client";

import { Progress } from "@/components/ui/progress";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CurrentlyReleasing() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from(".cr-content", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      },
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
    });
  }, { scope: container });

  return (
    <div ref={container} className="bg-[#0a0a0a] rounded-xl border border-white/10 p-8 flex flex-col md:flex-row gap-8 w-full max-w-3xl relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Cover Image */}
      <div className="cr-content w-32 h-48 shrink-0 relative rounded-md overflow-hidden border border-white/20">
        <div 
          className="absolute inset-0 bg-cover bg-center grayscale"
          style={{ backgroundImage: `url('https://placehold.co/400x600?text=Image')` }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Info Content */}
      <div className="flex-1 flex flex-col justify-center">
        <div className="cr-content text-white/50 text-[10px] tracking-[0.2em] uppercase font-semibold mb-2">
          Currently Releasing
        </div>
        <div className="cr-content text-[#d4af37] text-[10px] tracking-[0.2em] font-semibold mb-1">
          WORLD 01
        </div>
        <h3 className="cr-content text-white font-serif text-2xl mb-2">
          THE SILENCE BETWEEN US
        </h3>
        <p className="cr-content text-white/80 text-sm mb-4">
          Chapter 08 : The Letter That Changed Everything
        </p>
        <p className="cr-content text-white/50 text-xs italic mb-6">
          Some letters dont just carry words...<br />
          They carry the weight of a life.
        </p>
        
        <div className="cr-content">
          <Link href="#" className="inline-flex items-center text-white text-xs tracking-widest uppercase border border-white/20 hover:border-[#d4af37] hover:text-[#d4af37] transition-all px-6 py-3 rounded-sm group/btn">
            Continue Reading
            <ChevronRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Progress Circle */}
      <div className="cr-content flex flex-col justify-center items-center shrink-0 pr-4">
        <div className="relative w-24 h-24 rounded-full border border-white/10 flex items-center justify-center mb-3 bg-black/50">
          <svg className="absolute inset-0 w-full h-full -rotate-90">
             <circle className="text-white/10" strokeWidth="2" stroke="currentColor" fill="transparent" r="46" cx="48" cy="48" />
             <circle className="text-[#d4af37]" strokeWidth="2" strokeDasharray="289" strokeDashoffset="173" strokeLinecap="round" stroke="currentColor" fill="transparent" r="46" cx="48" cy="48" />
          </svg>
          <div className="text-white text-xl font-serif">40%</div>
        </div>
        <div className="text-white/50 text-[9px] uppercase tracking-[0.2em] font-semibold">
          Your Progress
        </div>
      </div>
    </div>
  );
}
