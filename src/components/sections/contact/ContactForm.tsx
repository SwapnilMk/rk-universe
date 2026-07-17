"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Mail, Phone, MapPin, Globe, Clock, Quote, Send, Lock, Handshake, Lightbulb, Clapperboard, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    
    tl.from(".cf-hero-text", {
      x: -50,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
    });

    tl.from(".cf-hero-img", {
      x: 50,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
    }, "-=1");

    tl.from(".cf-content", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out",
    }, "-=0.5");
  }, { scope: container });

  return (
    <section ref={container} className="relative w-full min-h-screen bg-[#050505] text-white overflow-hidden font-sans">
      
      {/* Hero Section */}
      <div className="relative w-full flex flex-col md:flex-row md:min-h-[600px] items-center border-b border-white/10 pt-20 md:pt-0">
        
        {/* Mobile-only Image (Shows at top, fully visible) */}
        <div className="cf-hero-img relative w-full h-[300px] sm:h-[400px] md:hidden block pointer-events-none z-0 mt-4">
           {/* Gradient to smoothly blend the bottom into the text section */}
           <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10"></div>
           <Image 
            src="/rkabout.png" 
            alt="RK Founder" 
            fill 
            className="object-contain object-bottom mix-blend-lighten px-4"
            priority
          />
        </div>

        {/* Desktop-only Background Image (Blended on right) */}
        <div 
          className="cf-hero-img hidden md:block absolute right-0 top-0 w-[65%] h-full pointer-events-none z-0"
          style={{ 
            maskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent 100%), linear-gradient(to top, transparent, black 15%)", 
            WebkitMaskImage: "linear-gradient(to right, transparent, black 30%), linear-gradient(to top, transparent, black 15%)",
            WebkitMaskComposite: "source-in",
            maskComposite: "intersect"
          }}
        >
          <Image 
            src="/rkabout.png" 
            alt="RK Founder" 
            fill 
            className="object-cover object-right-bottom mix-blend-lighten"
            priority
          />
        </div>

        {/* Left: Text Content */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 pt-8 md:pt-32 pb-16 md:pb-20 flex flex-col justify-center">
          <div className="w-full md:w-[60%]">
            <div className="cf-hero-text flex items-center gap-4 mb-4">
              <div className="h-[1px] w-12 bg-[#d4af37]"></div>
              <span className="text-[#d4af37] font-semibold tracking-[0.25em] text-xs uppercase">GET IN TOUCH</span>
              <div className="h-[1px] w-12 bg-[#d4af37]"></div>
            </div>
            
            <h1 className="cf-hero-text text-5xl md:text-7xl font-['--font-cinzel'] font-bold text-[#d4af37] mb-6 drop-shadow-[0_0_15px_rgba(212,175,55,0.3)] tracking-wider">
              CONTACT US
            </h1>
            
            <h2 className="cf-hero-text text-lg md:text-xl font-bold tracking-widest uppercase mb-8 leading-relaxed">
              Let&apos;s create something extraordinary<br className="hidden md:block" /> together.
            </h2>
            
            <div className="cf-hero-text w-12 h-[1px] bg-[#d4af37] mb-8"></div>
            
            <p className="cf-hero-text text-white/80 text-sm md:text-base max-w-md leading-relaxed font-light">
              We welcome collaborations, partnerships, creative ideas 
              and opportunities to build the future together.<br /><br />
              RK Universe is always open to new connections.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content: 3 Columns */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-20">
          
          {/* Column 1: Contact Details */}
          <div className="w-full lg:w-[30%] flex flex-col gap-10">
            <h3 className="cf-content text-[#d4af37] font-['--font-cinzel'] text-xl font-bold tracking-widest uppercase mb-2">
              Connect with RK Universe
            </h3>
            
            <div className="flex flex-col gap-8">
              {/* 
              <div className="cf-content flex gap-6 group">
                <div className="w-12 h-12 shrink-0 rounded-full border border-white/20 flex items-center justify-center text-[#d4af37] group-hover:border-[#d4af37] transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="text-[#d4af37] text-[11px] font-semibold tracking-widest uppercase mb-1">Email Us</h4>
                  <a href="mailto:contact@rkuniverse.world" className="text-white text-sm hover:text-[#d4af37] transition-colors mb-1 font-medium">contact@rkuniverse.world</a>
                  <p className="text-white/50 text-[11px]">We aim to respond within 24-48 hours.</p>
                </div>
              </div>

              <div className="cf-content flex gap-6 group">
                <div className="w-12 h-12 shrink-0 rounded-full border border-white/20 flex items-center justify-center text-[#d4af37] group-hover:border-[#d4af37] transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="text-[#d4af37] text-[11px] font-semibold tracking-widest uppercase mb-1">Call Us</h4>
                  <a href="tel:+917208046058" className="text-white text-sm hover:text-[#d4af37] transition-colors mb-1 font-medium">+91 7208046058</a>
                  <p className="text-white/50 text-[11px]">Monday &ndash; Saturday | 10:00 AM &ndash; 7:00 PM (IST)</p>
                </div>
              </div> 
              */}

              <div className="cf-content flex gap-6 group">
                <div className="w-12 h-12 shrink-0 rounded-full border border-white/20 flex items-center justify-center text-[#d4af37] group-hover:border-[#d4af37] transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="text-[#d4af37] text-[11px] font-semibold tracking-widest uppercase mb-1">Our Studio</h4>
                  <p className="text-white text-sm font-medium mb-1">Mumbai, India</p>
                </div>
              </div>

              <div className="cf-content flex gap-6 group">
                <div className="w-12 h-12 shrink-0 rounded-full border border-white/20 flex items-center justify-center text-[#d4af37] group-hover:border-[#d4af37] transition-colors">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="text-[#d4af37] text-[11px] font-semibold tracking-widest uppercase mb-1">Global Inquiries</h4>
                  <p className="text-white/70 text-[12px] leading-relaxed">For international collaborations and<br/>partnerships, reach out to us via email.</p>
                </div>
              </div>

              <div className="cf-content flex gap-6 group">
                <div className="w-12 h-12 shrink-0 rounded-full border border-white/20 flex items-center justify-center text-[#d4af37] group-hover:border-[#d4af37] transition-colors">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="text-[#d4af37] text-[11px] font-semibold tracking-widest uppercase mb-1">Business Hours</h4>
                  <p className="text-white/70 text-[12px] leading-relaxed">Monday &ndash; Saturday<br/>10:00 AM &ndash; 7:00 PM (IST)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Quote Banner */}
          <div className="cf-content w-full lg:w-[25%] flex justify-center">
            <div className="w-full max-w-sm h-full min-h-[500px] border border-white/10 rounded-[30px] p-8 flex flex-col relative overflow-hidden bg-gradient-to-b from-[#111] to-[#0a0a0a]">
              {/* Decorative gradient overlay mimicking the mountain/gold base */}
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#3a2c0f] to-transparent opacity-40"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <Quote className="w-10 h-10 text-[#d4af37] mb-6 opacity-80" />
                
                <h3 className="text-[#d4af37] font-['--font-cinzel'] text-[22px] leading-[1.4] font-bold tracking-widest uppercase mb-8">
                  EVERY GREAT<br/>
                  CONNECTION<br/>
                  BEGINS WITH<br/>
                  A CONVERSATION.
                </h3>
                
                <p className="text-white/70 text-[13px] leading-relaxed font-light mb-auto pr-4">
                  Share your ideas, your vision and your story with us.<br/>
                  Let&apos;s build something remarkable together.
                </p>
                
                <div className="mt-12 flex flex-col gap-1">
                  {/* Signature representation */}
                  <div className="font-['--font-cinzel'] italic text-4xl text-[#d4af37] font-light mb-2">
                    RK
                  </div>
                  <p className="text-white text-[10px] font-bold tracking-[0.2em] uppercase">FOUNDER</p>
                  <p className="text-white/50 text-[10px] font-semibold tracking-widest uppercase">RK UNIVERSE</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Form */}
          <div className="w-full lg:w-[45%] flex flex-col">
            <h3 className="cf-content text-[#d4af37] font-['--font-cinzel'] text-xl font-bold tracking-widest uppercase mb-2">
              Send Us A Message
            </h3>
            <p className="cf-content text-white/80 text-sm mb-8 font-light">
              We&apos;d love to hear from you.
            </p>
            
            <form className="flex flex-col gap-5">
              <div className="cf-content grid grid-cols-1 md:grid-cols-2 gap-5">
                <input 
                  type="text" 
                  placeholder="Your Name *"
                  className="bg-black/50 border border-white/10 rounded-sm p-4 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#d4af37] transition-colors w-full"
                  required
                />
                <input 
                  type="email" 
                  placeholder="Your Email *"
                  className="bg-black/50 border border-white/10 rounded-sm p-4 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#d4af37] transition-colors w-full"
                  required
                />
              </div>

              <input 
                type="text" 
                placeholder="Subject *"
                className="cf-content bg-black/50 border border-white/10 rounded-sm p-4 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#d4af37] transition-colors w-full"
                required
              />

              <textarea 
                rows={6} 
                placeholder="Your Message *"
                className="cf-content bg-black/50 border border-white/10 rounded-sm p-4 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#d4af37] transition-colors resize-none w-full"
                required
              ></textarea>

              <div className="cf-content mt-2">
                <Button className="w-full bg-transparent hover:bg-[#d4af37]/10 border border-[#d4af37]/50 text-[#d4af37] font-bold tracking-[0.2em] uppercase rounded-sm py-7 flex items-center justify-center gap-3 transition-colors">
                  <Send className="w-4 h-4" />
                  SEND MESSAGE
                </Button>
              </div>
              
              <div className="cf-content mt-4 flex items-center justify-center gap-2 text-white/40">
                <Lock className="w-3 h-3 text-[#d4af37]" />
                <p className="text-[11px]">Your information is safe with us and will never be shared.</p>
              </div>
            </form>
          </div>

        </div>
      </div>

      {/* Bottom Features Section */}
      <div className="w-full border-t border-white/5 py-16 bg-gradient-to-b from-[#050505] to-black">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6 divide-y md:divide-y-0 lg:divide-x divide-white/5">
          
          <div className="cf-content flex flex-col items-center text-center pt-8 md:pt-0 px-4">
            <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-[#d4af37] mb-6">
              <Handshake className="w-6 h-6" />
            </div>
            <h4 className="text-[#d4af37] font-semibold tracking-widest uppercase mb-3 text-xs">Collaborations</h4>
            <p className="text-white/70 text-[13px] leading-relaxed max-w-[200px]">Creative partnerships that inspire.</p>
          </div>
          
          <div className="cf-content flex flex-col items-center text-center pt-8 md:pt-0 px-4">
            <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-[#d4af37] mb-6">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h4 className="text-[#d4af37] font-semibold tracking-widest uppercase mb-3 text-xs">Ideas & Projects</h4>
            <p className="text-white/70 text-[13px] leading-relaxed max-w-[200px]">Share your ideas and bring them to life.</p>
          </div>
          
          <div className="cf-content flex flex-col items-center text-center pt-8 md:pt-0 px-4">
            <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-[#d4af37] mb-6">
              <Clapperboard className="w-6 h-6" />
            </div>
            <h4 className="text-[#d4af37] font-semibold tracking-widest uppercase mb-3 text-xs">Media & Press</h4>
            <p className="text-white/70 text-[13px] leading-relaxed max-w-[200px]">For media enquiries and press kits.</p>
          </div>
          
          <div className="cf-content flex flex-col items-center text-center pt-8 md:pt-0 px-4">
            <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-[#d4af37] mb-6">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h4 className="text-[#d4af37] font-semibold tracking-widest uppercase mb-3 text-xs">Investors</h4>
            <p className="text-white/70 text-[13px] leading-relaxed max-w-[200px]">Explore opportunities with RK Universe.</p>
          </div>
          
        </div>
      </div>
      
    </section>
  );
}
