"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    
    tl.from(".cf-content", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
    });
  }, { scope: container });

  return (
    <section ref={container} className="relative w-full min-h-[80vh] flex flex-col items-center justify-center bg-black overflow-hidden pt-24 pb-20">
      <div className="container mx-auto px-4 z-20">
        
        {/* Header */}
        <div className="cf-content text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-serif text-[#d4af37] mb-4 tracking-wide">
            GET IN TOUCH
          </h1>
          <p className="text-white/60 text-sm max-w-lg mx-auto uppercase tracking-widest">
            For inquiries regarding collections, collaborations, or general questions, please reach out.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">
          
          {/* Contact Details */}
          <div className="w-full lg:w-1/3 flex flex-col gap-10">
            <div className="cf-content">
              <div className="flex items-center gap-4 mb-2">
                <Mail className="text-[#d4af37] w-5 h-5" />
                <h4 className="text-white text-xs font-semibold tracking-widest uppercase">Email</h4>
              </div>
              <p className="text-white/50 text-sm ml-9 hover:text-white transition-colors cursor-pointer">
                contact@rkuniverse.com
              </p>
            </div>
            
            <div className="cf-content">
              <div className="flex items-center gap-4 mb-2">
                <Phone className="text-[#d4af37] w-5 h-5" />
                <h4 className="text-white text-xs font-semibold tracking-widest uppercase">Phone</h4>
              </div>
              <p className="text-white/50 text-sm ml-9 hover:text-white transition-colors cursor-pointer">
                xxxxxxxxx
              </p>
            </div>

            <div className="cf-content">
              <div className="flex items-center gap-4 mb-2">
                <MapPin className="text-[#d4af37] w-5 h-5" />
                <h4 className="text-white text-xs font-semibold tracking-widest uppercase">Studio</h4>
              </div>
              <p className="text-white/50 text-sm ml-9 leading-relaxed">
                Green Chillies Entertainment<br />
                Mumbai, Maharashtra<br />
                India
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="w-full lg:w-2/3 bg-[#050505] border border-white/5 p-8 rounded-lg">
            <form className="flex flex-col gap-6">
              <div className="cf-content grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-white/50 text-[10px] uppercase tracking-widest">First Name</label>
                  <input type="text" className="bg-black border border-white/10 rounded-sm p-3 text-white focus:outline-none focus:border-[#d4af37] transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-white/50 text-[10px] uppercase tracking-widest">Last Name</label>
                  <input type="text" className="bg-black border border-white/10 rounded-sm p-3 text-white focus:outline-none focus:border-[#d4af37] transition-colors" />
                </div>
              </div>

              <div className="cf-content flex flex-col gap-2">
                <label className="text-white/50 text-[10px] uppercase tracking-widest">Email Address</label>
                <input type="email" className="bg-black border border-white/10 rounded-sm p-3 text-white focus:outline-none focus:border-[#d4af37] transition-colors" />
              </div>

              <div className="cf-content flex flex-col gap-2">
                <label className="text-white/50 text-[10px] uppercase tracking-widest">Subject</label>
                <input type="text" className="bg-black border border-white/10 rounded-sm p-3 text-white focus:outline-none focus:border-[#d4af37] transition-colors" />
              </div>

              <div className="cf-content flex flex-col gap-2">
                <label className="text-white/50 text-[10px] uppercase tracking-widest">Message</label>
                <textarea rows={5} className="bg-black border border-white/10 rounded-sm p-3 text-white focus:outline-none focus:border-[#d4af37] transition-colors resize-none"></textarea>
              </div>

              <div className="cf-content mt-4">
                <Button className="w-full bg-[#d4af37] hover:bg-[#b38b22] text-black font-semibold tracking-widest uppercase rounded-sm py-6">
                  Send Message
                </Button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
