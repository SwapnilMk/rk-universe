"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Disc } from "lucide-react"; 
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useState } from "react";
const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);



export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setMessage('');

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus('error');
        setMessage(data.message || 'Something went wrong');
      } else {
        setStatus('success');
        setMessage('Thanks for subscribing!');
        setEmail('');
      }
    } catch (err) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <footer className="w-full text-white font-sans border-t border-white/5">
      {/* Newsletter Section */}
      <div className="bg-[#0a0a0a] py-12 lg:py-16 border-b border-white/5">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full border border-[#d4af37]/30 flex items-center justify-center bg-black">
              <Mail className="w-6 h-6 text-[#d4af37]" />
            </div>
            <div>
              <h3 className="text-[#d4af37] text-xl lg:text-2xl font-serif mb-2 uppercase">Dont miss any update</h3>
              <p className="text-white/60 text-xs lg:text-sm max-w-md">
                Subscribe to our newsletter and be the first to know about new creations, stories and announcements.
              </p>
            </div>
          </div>
          
          <form onSubmit={handleSubscribe} className="w-full md:w-auto flex-1 max-w-md flex flex-col gap-2">
            <div className="flex w-full">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === 'loading'}
                placeholder="Enter your email address"
                className="w-full bg-black border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#d4af37]/50 disabled:opacity-50"
                required
              />
              <button 
                type="submit"
                disabled={status === 'loading'}
                className="bg-[#d4af37] text-black px-6 lg:px-8 py-3 text-xs font-semibold tracking-widest hover:bg-[#d4af37]/80 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'WAIT...' : 'SUBSCRIBE'}
              </button>
            </div>
            {message && (
              <p className={`text-xs ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                {message}
              </p>
            )}
          </form>
        </div>
      </div>

      {/* Follow RK Universe Section */}
      <div className="bg-[#080808] py-16 border-b border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center mb-12 text-center">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[#d4af37] text-lg">✦</span>
              <h3 className="text-[#d4af37] text-xl font-serif font-bold tracking-[0.2em] uppercase">FOLLOW RK UNIVERSE</h3>
              <span className="text-[#d4af37] text-lg">✦</span>
            </div>
            
            <h4 className="text-white font-serif tracking-widest text-lg uppercase mb-2">OUR UNIVERSES</h4>
            <p className="text-white/60 text-sm">Select a profile to follow</p>
          </div>
          
          <Carousel 
            opts={{ align: "center", dragFree: true, loop: true }}
            plugins={[Autoplay({ delay: 3000, stopOnInteraction: false })]}
            className="w-full max-w-[85vw] md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-4 md:-ml-8">
              {[
                { name: "GREEN CHILLIES", handle: "@greenchillies.media" },
                { name: "RK ART COLLECTION", handle: "@rkart.world" },
                { name: "RK CHRONICLES", handle: "@therkchronicles" },
                { name: "RK MOBILITY", handle: "@rkmobility" },
                { name: "RK MASION", handle: "@rahilkhanmaison" },
                { name: "RK CARE CIRCLE", handle: "@rkcarecircle" }
              ].map((account, index, array) => (
                <CarouselItem key={account.name} className="pl-4 md:pl-8 basis-auto">
                  <div className="flex items-center h-full">
                    <div className="flex flex-col items-center gap-4 w-[160px]">
                      <Link href={`https://instagram.com/${account.handle.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="relative group w-16 h-16 md:w-20 md:h-20 rounded-full border border-[#d4af37]/50 flex items-center justify-center text-[#d4af37] transition-all duration-300 hover:scale-105 hover:bg-[#d4af37]/5">
                        <div className="absolute inset-0 rounded-full shadow-[0_0_15px_rgba(212,175,55,0.3)] group-hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] transition-all duration-300"></div>
                        <div className="absolute inset-1 rounded-full border border-[#d4af37]/20"></div>
                        <Instagram className="w-6 h-6 md:w-7 md:h-7 relative z-10" />
                        <div className="absolute top-1 right-1 md:right-2 w-1 h-1 bg-white rounded-full shadow-[0_0_5px_#fff]"></div>
                        <div className="absolute bottom-1 md:bottom-2 left-1 md:left-2 w-1.5 h-1.5 bg-[#d4af37] rounded-full shadow-[0_0_8px_#d4af37]"></div>
                      </Link>
                      <div className="text-center px-2">
                        <h5 className="text-[#d4af37] font-serif font-bold text-xs md:text-sm tracking-widest uppercase truncate w-full">{account.name}</h5>
                        <p className="text-white/60 text-[10px] md:text-xs mt-1 truncate w-full">{account.handle}</p>
                      </div>
                    </div>

                    {/* Divider (Desktop) - show between items, but not after the last one */}
                    {index < array.length - 1 && (
                      <div className="hidden lg:block w-px h-16 bg-white/10 flex-none ml-4 md:ml-8"></div>
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="border-[#d4af37]/50 text-[#d4af37] hover:bg-[#d4af37] hover:text-black bg-black" />
              <CarouselNext className="border-[#d4af37]/50 text-[#d4af37] hover:bg-[#d4af37] hover:text-black bg-black" />
            </div>
          </Carousel>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-[#050505] py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-stretch justify-between gap-12 lg:gap-0 pb-12 border-b border-white/5">
            
            {/* Logo & Tagline (Left Block) */}
            <div className="flex-1 flex items-center gap-4 sm:gap-6 lg:pr-12 lg:border-r border-white/10">
              <div className="relative w-32 h-20 sm:w-40 sm:h-24 lg:w-48 lg:h-28 shrink-0">
                <Image 
                  src="/logo.png" 
                  alt="RK Universe" 
                  fill 
                  className="object-contain object-left" 
                />
              </div>
              <div>
                <p className="text-[#d4af37] text-sm sm:text-base font-semibold tracking-wide mb-1">Interconnected Worlds.</p>
                <p className="text-white/70 text-xs sm:text-sm">Stories That Stay With You.</p>
              </div>
            </div>

            {/* Quick Links (Middle Block) */}
            <div className="flex-1 lg:px-12 lg:border-r border-white/10">
              <h4 className="text-white font-semibold text-xs tracking-widest uppercase mb-6">Quick Links</h4>
              <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                <Link href="/" className="text-xs text-white/60 hover:text-[#d4af37] transition-colors">Home</Link>
                <Link href="/news" className="text-xs text-white/60 hover:text-[#d4af37] transition-colors">News & Updates</Link>
                <Link href="/about" className="text-xs text-white/60 hover:text-[#d4af37] transition-colors">About RK</Link>
                <Link href="/contact" className="text-xs text-white/60 hover:text-[#d4af37] transition-colors">Contact</Link>
              </div>
            </div>

            {/* Contact Us (Right Block) */}
            <div className="flex-1 lg:pl-12">
              <h4 className="text-white font-semibold text-xs tracking-widest uppercase mb-6">Contact Us</h4>
              <ul className="space-y-3 text-xs text-white/60">
                {/* <li>contact@rkuniverse.com</li> */}
                <li>RK Universe, Global Creative House</li>
              </ul>
            </div>
            
          </div>

          <div className="mt-8 text-center text-white/40 text-[10px] sm:text-xs tracking-widest">
            <p>&copy; {new Date().getFullYear()} RK Universe. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
