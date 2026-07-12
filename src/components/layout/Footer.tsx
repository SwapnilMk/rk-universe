import Link from "next/link";
import Image from "next/image";
import { Sparkles, ShieldCheck, Star, Heart, Zap } from "lucide-react";

const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Youtube = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

const Facebook = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Twitter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 pt-20 pb-10 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="space-y-4">
            <h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-4">Our Approach</h4>
            <p className="text-white/50 text-xs leading-relaxed max-w-sm">
              At Green Chillies Entertainment & Media, we believe in telling authentic stories with cinematic brilliance. 
              We combine imagination with craft to deliver content that resonates and endures.
            </p>
          </div>
          
          <div>
            <h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-6">Our Values</h4>
            <div className="flex gap-6">
              <div className="flex flex-col items-center gap-2">
                <Sparkles className="text-[#4b5320] w-6 h-6" />
                <span className="text-white/60 text-[10px] uppercase">Creativity</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <ShieldCheck className="text-[#4b5320] w-6 h-6" />
                <span className="text-white/60 text-[10px] uppercase">Integrity</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Star className="text-[#4b5320] w-6 h-6" />
                <span className="text-white/60 text-[10px] uppercase">Excellence</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Heart className="text-[#4b5320] w-6 h-6" />
                <span className="text-white/60 text-[10px] uppercase">Passion</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Zap className="text-[#4b5320] w-6 h-6" />
                <span className="text-white/60 text-[10px] uppercase">Impact</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-6">Connect With Us</h4>
            <div className="flex gap-4">
              <Link href="https://www.instagram.com/rkshowindia/" target="_blank" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                <Instagram className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                <Youtube className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                <Facebook className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                <Linkedin className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                <Twitter className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-white/40 text-xs">
          <p>© 2024 RK Art Collection. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
