"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { Heart, Users, Link as LinkIcon, Globe, FileText, Search, MessageCircle, ShieldCheck, EyeOff, Hand, Ban, Lock, CheckCircle, HandHeart, Handshake } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CareCirclePage() {
  const container = useRef(null);

  useGSAP(() => {
    // Hero animation on load
    gsap.from(".hero-animate", {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
      delay: 0.2
    });

    // Scroll trigger for other items
    const items = gsap.utils.toArray(".animate-item");
    
    items.forEach((item: any) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          toggleActions: "play none none none"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });
    });

    // Staggered scroll animations for cards
    const staggerGroups = gsap.utils.toArray(".animate-stagger-group");
    staggerGroups.forEach((group: any) => {
      gsap.from(group.children, {
        scrollTrigger: {
          trigger: group,
          start: "top 85%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
      });
    });
  }, { scope: container });

  return (
    <div ref={container} className="flex flex-col min-h-screen bg-[#050505] text-white font-sans selection:bg-[#d4af37] selection:text-black relative">
      
      {/* Global Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <Image src="/rkcircle.png" alt="RK Universe Care Circle Background" fill className="object-cover md:object-contain object-[25%_center] md:object-center" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/70 via-[#050505]/70 to-[#050505]"></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen w-full">
        <Header />

        <main className="flex-1 relative overflow-hidden flex flex-col items-center pt-8 pb-12 px-4 md:px-8">

          {/* Hero Section */}
          <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 mb-16 relative py-12 px-4 md:px-12 rounded-3xl overflow-hidden">

            {/* Left Content */}
            <div className="lg:w-3/5 flex flex-col text-left relative z-10 py-8 lg:py-12">
              <div className="hero-animate flex items-center gap-4 mb-2">
                <div className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-transparent to-[#d4af37]"></div>
                <span className="text-[#d4af37] font-['--font-cinzel'] font-semibold tracking-[0.3em] text-xs">RK UNIVERSE</span>
                <div className="h-[1px] w-8 sm:w-12 bg-gradient-to-l from-transparent to-[#d4af37]"></div>
              </div>
              <h1 className="hero-animate text-4xl md:text-5xl lg:text-7xl font-['--font-cinzel'] text-[#d4af37] font-bold tracking-wider mb-4 drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                CARE CIRCLE
              </h1>
              <h2 className="hero-animate text-white font-semibold tracking-[0.1em] text-sm md:text-lg uppercase mb-6 drop-shadow-md">
                Connecting Humanity Through Stories
              </h2>
              <p className="hero-animate text-white/80 text-sm md:text-base leading-relaxed font-light mb-10 max-w-lg drop-shadow-md">
                RK Universe Care Circle is an awareness platform that shares real stories, inspires communities and creates meaningful connections.
              </p>

              <div className="hero-animate flex justify-between max-w-2xl gap-2 mt-4">
                <div className="flex flex-col items-center text-center">
                  <HandHeart className="w-10 h-10 md:w-12 md:h-12 text-[#d4af37] mb-4" strokeWidth={1.5} />
                  <span className="text-[#d4af37] text-[9px] md:text-sm font-['--font-cinzel'] font-bold tracking-widest uppercase mb-2">Awareness</span>
                  <span className="text-white/80 text-[10px] md:text-sm font-serif">Creates Hope</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Users className="w-10 h-10 md:w-12 md:h-12 text-[#d4af37] mb-4" strokeWidth={1.5} />
                  <span className="text-[#d4af37] text-[9px] md:text-sm font-['--font-cinzel'] font-bold tracking-widest uppercase mb-2">Community</span>
                  <span className="text-white/80 text-[10px] md:text-sm font-serif">Builds Strength</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Handshake className="w-10 h-10 md:w-12 md:h-12 text-[#d4af37] mb-4" strokeWidth={1.5} />
                  <span className="text-[#d4af37] text-[9px] md:text-sm font-['--font-cinzel'] font-bold tracking-widest uppercase mb-2">Connection</span>
                  <span className="text-white/80 text-[10px] md:text-sm font-serif">Brings Change</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Globe className="w-10 h-10 md:w-12 md:h-12 text-[#d4af37] mb-4" strokeWidth={1.5} />
                  <span className="text-[#d4af37] text-[9px] md:text-sm font-['--font-cinzel'] font-bold tracking-widest uppercase mb-2">Humanity</span>
                  <span className="text-white/80 text-[10px] md:text-sm font-serif">Unites Us All</span>
                </div>
              </div>
            </div>

            {/* Right Card */}
            <div className="hero-animate lg:w-1/3 flex justify-end w-full relative z-10">
              <div className="bg-[#0a0a0a]/80 backdrop-blur-md border border-[#d4af37]/50 rounded-xl p-8 max-w-sm w-full flex flex-col items-center text-center shadow-[0_0_40px_rgba(212,175,55,0.15)]">
                <FileText className="w-8 h-8 text-[#d4af37] mb-4" />
                <h3 className="text-[#d4af37] font-['--font-cinzel'] text-xl font-bold tracking-wider mb-2">
                  RK Universe Care Circle
                </h3>
                <h4 className="text-white font-bold tracking-widest uppercase mb-4 text-sm border-b border-[#d4af37]/30 pb-4 w-full">
                  SHARE YOUR STORY
                </h4>
                <p className="text-white/90 text-sm font-light mb-8 leading-relaxed">
                  Do you know someone who needs awareness or support? Share their story with us.
                </p>
                <Link href="/care-circle/share-your-story" className="w-full bg-gradient-to-r from-[#b3952f] to-[#e5c158] text-black font-bold text-sm tracking-wider uppercase py-4 px-6 rounded hover:opacity-90 transition-opacity flex items-center justify-center gap-2 mb-4 shadow-lg">
                  <Heart className="w-4 h-4 fill-current" />
                  SHARE YOUR STORY
                </Link>
                <div className="flex items-center gap-2 text-white/60 text-[10px] font-medium">
                  <Lock className="w-3 h-3" />
                  Your information is safe with us.
                </div>
              </div>
            </div>

          </div>

          {/* How It Works */}
          <div className="animate-item w-full max-w-7xl mx-auto mb-16 relative">
            <div className="flex flex-col items-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-3 w-full">
                <div className="h-[1px] flex-1 max-w-[60px] md:max-w-[150px] bg-gradient-to-r from-transparent to-[#d4af37]"></div>
                <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37]"></div>
                <h2 className="text-[#d4af37] font-['--font-cinzel'] text-2xl md:text-3xl font-bold tracking-widest px-4 uppercase">
                  HOW IT WORKS
                </h2>
                <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37]"></div>
                <div className="h-[1px] flex-1 max-w-[60px] md:max-w-[150px] bg-gradient-to-l from-transparent to-[#d4af37]"></div>
              </div>
              <p className="text-white/80 text-sm tracking-wide font-serif">
                A Simple Process. A Stronger Community.
              </p>
            </div>

            <div className="animate-stagger-group flex flex-col lg:flex-row items-stretch justify-between gap-6 lg:gap-2 w-full">
              {/* Step 1 */}
              <div className="flex-1 w-full relative border border-[#d4af37]/40 rounded-xl bg-[#0a0a0a] p-6 flex flex-col items-center text-center h-auto min-h-[220px]">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0a0a0a] border border-[#d4af37] text-[#d4af37] flex items-center justify-center font-bold text-sm shadow-[0_0_10px_rgba(212,175,55,0.3)]">
                  1
                </div>
                <FileText className="w-12 h-12 text-[#d4af37] mb-4 mt-2" strokeWidth={1} />
                <h4 className="text-[#d4af37] text-[11px] font-['--font-cinzel'] font-bold tracking-widest uppercase mb-3 mt-1">STORY RECEIVED</h4>
                <p className="text-white/70 text-[10px] leading-relaxed px-1">
                  A person or family shares their situation with us through our platform.
                </p>
              </div>

              {/* Arrow */}
              <div className="hidden lg:flex items-center justify-center text-[#d4af37] text-2xl font-light">›</div>

              {/* Step 2 */}
              <div className="flex-1 w-full relative border border-[#d4af37]/40 rounded-xl bg-[#0a0a0a] p-6 flex flex-col items-center text-center h-auto min-h-[220px]">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0a0a0a] border border-[#d4af37] text-[#d4af37] flex items-center justify-center font-bold text-sm shadow-[0_0_10px_rgba(212,175,55,0.3)]">
                  2
                </div>
                <Search className="w-12 h-12 text-[#d4af37] mb-4 mt-2" strokeWidth={1} />
                <h4 className="text-[#d4af37] text-[11px] font-['--font-cinzel'] font-bold tracking-widest uppercase mb-3 mt-1">REVIEW & VERIFY</h4>
                <p className="text-white/70 text-[10px] leading-relaxed px-1">
                  We understand the story carefully and verify the information responsibly.
                </p>
              </div>

              {/* Arrow */}
              <div className="hidden lg:flex items-center justify-center text-[#d4af37] text-2xl font-light">›</div>

              {/* Step 3 */}
              <div className="flex-1 w-full relative border border-[#d4af37]/40 rounded-xl bg-[#0a0a0a] p-6 flex flex-col items-center text-center h-auto min-h-[220px]">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0a0a0a] border border-[#d4af37] text-[#d4af37] flex items-center justify-center font-bold text-sm shadow-[0_0_10px_rgba(212,175,55,0.3)]">
                  3
                </div>
                <Users className="w-12 h-12 text-[#d4af37] mb-4 mt-2" strokeWidth={1} />
                <h4 className="text-[#d4af37] text-[11px] font-['--font-cinzel'] font-bold tracking-widest uppercase mb-3 mt-1">AWARENESS CREATED</h4>
                <p className="text-white/70 text-[10px] leading-relaxed px-1">
                  We share the story with awareness to reach more people and communities.
                </p>
              </div>

              {/* Arrow */}
              <div className="hidden lg:flex items-center justify-center text-[#d4af37] text-2xl font-light">›</div>

              {/* Step 4 */}
              <div className="flex-1 w-full relative border border-[#d4af37]/40 rounded-xl bg-[#0a0a0a] p-6 flex flex-col items-center text-center h-auto min-h-[220px]">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0a0a0a] border border-[#d4af37] text-[#d4af37] flex items-center justify-center font-bold text-sm shadow-[0_0_10px_rgba(212,175,55,0.3)]">
                  4
                </div>
                <MessageCircle className="w-12 h-12 text-[#d4af37] mb-4 mt-2" strokeWidth={1} />
                <h4 className="text-[#d4af37] text-[11px] font-['--font-cinzel'] font-bold tracking-widest uppercase mb-3 mt-1">COMMUNITY CONNECTS</h4>
                <p className="text-white/70 text-[10px] leading-relaxed px-1">
                  People who wish to help connect directly with the concerned person/family on their own terms.
                </p>
              </div>

              {/* Arrow */}
              <div className="hidden lg:flex items-center justify-center text-[#d4af37] text-2xl font-light">›</div>

              {/* Step 5 */}
              <div className="flex-1 w-full relative border border-[#d4af37]/40 rounded-xl bg-[#0a0a0a] p-6 flex flex-col items-center text-center h-auto min-h-[220px]">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0a0a0a] border border-[#d4af37] text-[#d4af37] flex items-center justify-center font-bold text-sm shadow-[0_0_10px_rgba(212,175,55,0.3)]">
                  5
                </div>
                <ShieldCheck className="w-12 h-12 text-[#d4af37] mb-4 mt-2" strokeWidth={1} />
                <h4 className="text-[#d4af37] text-[11px] font-['--font-cinzel'] font-bold tracking-widest uppercase mb-3 mt-1">TRANSPARENCY FIRST</h4>
                <p className="text-white/70 text-[10px] leading-relaxed px-1">
                  We are an awareness platform only. We do not collect or handle any funds or donations.
                </p>
              </div>
            </div>
          </div>

          {/* Our Commitment */}
          <div className="animate-item w-full max-w-7xl mx-auto mb-16 border border-[#d4af37]/40 rounded-xl bg-[#050505] p-8 lg:px-10 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-[0_0_15px_rgba(212,175,55,0.15)] relative overflow-hidden">
            
            {/* Top glowing line accent */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/70 to-transparent"></div>
            
            <div className="flex flex-col md:flex-row items-center gap-6 lg:w-[55%]">
              <div className="relative w-28 h-28 shrink-0 flex items-center justify-center bg-gradient-to-br from-[#d4af37]/20 to-transparent rounded-full border border-[#d4af37]/30 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                <ShieldCheck className="w-16 h-16 text-[#d4af37]" strokeWidth={1.2} />
                <Lock className="w-5 h-5 text-[#050505] fill-[#d4af37] absolute mt-1" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-[#d4af37] font-['--font-cinzel'] text-xl font-bold tracking-wider mb-2">
                  OUR COMMITMENT
                </h3>
                <p className="text-white/80 text-xs leading-relaxed font-serif max-w-md">
                  We believe in honesty, responsibility and transparency.<br />
                  RK Universe Care Circle is not a donation or financial platform.<br />
                  We only create awareness and build meaningful connections.
                </p>
              </div>
            </div>

            <div className="animate-stagger-group flex flex-wrap md:flex-nowrap justify-center lg:justify-end gap-4 lg:gap-8 lg:w-[45%] w-full">
              <div className="flex flex-col items-center text-center w-[80px]">
                <div className="w-16 h-16 rounded-full border border-[#d4af37] flex items-center justify-center mb-3">
                  <EyeOff className="w-8 h-8 text-[#d4af37]" strokeWidth={1.2} />
                </div>
                <span className="text-white/80 text-[8px] md:text-[9px] font-semibold tracking-widest uppercase">No Collection</span>
              </div>
              <div className="flex flex-col items-center text-center w-[80px]">
                <div className="w-16 h-16 rounded-full border border-[#d4af37] flex items-center justify-center mb-3 relative">
                  <HandHeart className="w-8 h-8 text-[#d4af37]" strokeWidth={1.2} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-11 h-[1.5px] bg-[#d4af37] rotate-[-45deg]"></div>
                  </div>
                </div>
                <span className="text-white/80 text-[8px] md:text-[9px] font-semibold tracking-widest uppercase">No Fund Handling</span>
              </div>
              <div className="flex flex-col items-center text-center w-[80px]">
                <div className="w-16 h-16 rounded-full border border-[#d4af37] flex items-center justify-center mb-3 relative">
                  <div className="text-[#d4af37] text-2xl font-bold pb-1">+</div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-11 h-[1.5px] bg-[#d4af37] rotate-[-45deg]"></div>
                  </div>
                </div>
                <span className="text-white/80 text-[8px] md:text-[9px] font-semibold tracking-widest uppercase">No Medical Claims</span>
              </div>
              <div className="flex flex-col items-center text-center w-[80px]">
                <div className="w-16 h-16 rounded-full border border-[#d4af37] flex items-center justify-center mb-3">
                  <Users className="w-8 h-8 text-[#d4af37]" strokeWidth={1.2} />
                </div>
                <span className="text-white/80 text-[8px] md:text-[9px] font-semibold tracking-widest uppercase">Humanity First</span>
              </div>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="animate-item w-full max-w-7xl mx-auto border border-[#d4af37]/30 rounded-xl bg-gradient-to-b from-[#111] to-black overflow-hidden relative mb-16">
            <div className="flex flex-col lg:flex-row h-full">
              {/* Left Image */}
              <div className="lg:w-1/3 h-64 lg:min-h-[300px] lg:h-auto relative overflow-hidden flex items-center justify-center bg-black">
                <Image src="/community.png" alt="Community" fill className="object-cover opacity-85 hover:scale-105 transition-transform duration-700" />
                {/* Gradient to blend with the right side */}
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#111] to-transparent hidden lg:block"></div>
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#111] to-transparent lg:hidden"></div>
              </div>

              {/* Right Content */}
              <div className="lg:w-2/3 p-8 lg:p-10 flex flex-col justify-center relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#d4af37]"></div>
                  <h2 className="text-[#d4af37] font-['--font-cinzel'] text-lg md:text-xl font-bold tracking-[0.2em] uppercase">
                    ONE COMMUNITY. ONE HEART. ONE HUMANITY.
                  </h2>
                  <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#d4af37]"></div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-8">
                  <Link href="/care-circle/share-your-story" className="bg-gradient-to-r from-[#b3952f] to-[#e5c158] text-black font-bold text-sm tracking-wider uppercase py-4 px-8 rounded-sm hover:opacity-90 transition-opacity flex items-center gap-3 shrink-0">
                    <Heart className="w-5 h-5 fill-current" />
                    SHARE YOUR STORY <span className="text-xl leading-none">&rarr;</span>
                  </Link>

                  <div className="flex flex-wrap md:flex-nowrap gap-6 w-full justify-around text-left">
                    <div className="flex items-start gap-3">
                      <ShieldCheck className="w-6 h-6 text-[#d4af37] shrink-0 mt-1" />
                      <div>
                        <h4 className="text-white text-xs font-bold tracking-wider uppercase mb-1">100% Safe</h4>
                        <p className="text-white/50 text-[10px]">Your data is protected</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[#d4af37] shrink-0 mt-1" />
                      <div>
                        <h4 className="text-white text-xs font-bold tracking-wider uppercase mb-1">Verified Process</h4>
                        <p className="text-white/50 text-[10px]">Carefully reviewed and verified</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="w-6 h-6 text-[#d4af37] shrink-0 mt-1" />
                      <div>
                        <h4 className="text-white text-xs font-bold tracking-wider uppercase mb-1">Community Driven</h4>
                        <p className="text-white/50 text-[10px]">Connections that create impact</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </main>

        <Footer />
      </div>
    </div>
  );
}
