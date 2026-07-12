import { ChevronRight } from "lucide-react";

export default function ChronicleSociety() {
  return (
    <div className="bg-gradient-to-br from-[#1a1508] to-[#0a0a0a] rounded-xl border border-[#d4af37]/20 p-10 flex flex-col md:flex-row justify-between items-center w-full max-w-3xl relative overflow-hidden group hover:border-[#d4af37]/40 transition-colors">
      
      {/* Left Content */}
      <div className="flex-1 mb-8 md:mb-0">
        <h3 className="text-white text-sm tracking-widest font-semibold uppercase mb-4">
          BECOME A CHRONICLE READER
        </h3>
        <p className="text-[#d4af37] font-serif text-xl italic mb-6 leading-tight">
          You are not just a reader.<br />
          You are a part of the universe.
        </p>
        
        <ul className="space-y-3 mb-8">
          <li className="flex items-center text-white/70 text-xs">
            <span className="w-5 h-5 rounded-full border border-[#d4af37]/50 flex items-center justify-center mr-3 bg-black">
              <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></div>
            </span>
            Track your reading journey
          </li>
          <li className="flex items-center text-white/70 text-xs">
            <span className="w-5 h-5 rounded-full border border-[#d4af37]/50 flex items-center justify-center mr-3 bg-black">
              <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></div>
            </span>
            Unlock exclusive content
          </li>
          <li className="flex items-center text-white/70 text-xs">
            <span className="w-5 h-5 rounded-full border border-[#d4af37]/50 flex items-center justify-center mr-3 bg-black">
              <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></div>
            </span>
            Join reader discussions
          </li>
          <li className="flex items-center text-white/70 text-xs">
            <span className="w-5 h-5 rounded-full border border-[#d4af37]/50 flex items-center justify-center mr-3 bg-black">
              <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></div>
            </span>
            Get early chapter updates
          </li>
        </ul>
        
        <button className="bg-gradient-to-r from-[#d4af37] to-[#b38b22] hover:from-[#e5c256] hover:to-[#c49b33] text-black font-semibold text-xs tracking-widest uppercase px-6 py-3 rounded-sm flex items-center transition-colors">
          JOIN THE CHRONICLE SOCIETY
          <ChevronRight className="ml-2 w-4 h-4" />
        </button>
      </div>

      {/* Right Emblem */}
      <div className="w-40 h-40 shrink-0 relative flex items-center justify-center">
        {/* Emblem placeholder */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1549488344-c6c75dbaf8a4?q=80&w=2187&auto=format&fit=crop')] bg-cover bg-center rounded-full opacity-10 blur-sm"></div>
        <div className="relative z-10 w-32 h-32 rounded-full border-2 border-[#d4af37] flex flex-col items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.2)] bg-black/80">
          <div className="text-[#d4af37] text-3xl font-serif font-bold italic mb-1">RK</div>
          <div className="text-[#d4af37] text-[9px] tracking-widest uppercase border-t border-[#d4af37]/30 pt-1 w-3/4 text-center">Society</div>
          {/* Crown placeholder */}
          <div className="absolute -top-6 text-[#d4af37] text-2xl">👑</div>
          {/* Leaves placeholder */}
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 text-[#d4af37]/50 text-xl rotate-90">🌿</div>
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 text-[#d4af37]/50 text-xl -rotate-90">🌿</div>
        </div>
      </div>
    </div>
  );
}
