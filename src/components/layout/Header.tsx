import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, User } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/90 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="container mx-auto px-4 h-24 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-16 h-16 md:w-20 md:h-20">
              <Image 
                src="/rklogo.png" 
                alt="RK Art Collection Logo" 
                fill
                sizes="(max-width: 768px) 64px, 80px"
                className="object-contain"
              />
            </div>
          </Link>
          
          <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold tracking-wider">
            <Link href="/" className="flex flex-col items-center group">
              <span className="text-white group-hover:text-[#d4af37] transition-colors uppercase">Green Chillies</span>
              <span className="text-[9px] text-[#4b5320] group-hover:text-[#7b8535] uppercase tracking-widest mt-1">Entertainment & Media</span>
              <div className="h-0.5 w-full bg-[#4b5320] mt-2 opacity-100 shadow-[0_0_10px_#4b5320]" />
            </Link>
            <Link href="/rk-art-collection" className="text-white/70 hover:text-[#d4af37] transition-colors uppercase pb-4">
              RK Art Collection
            </Link>
            <Link href="/rk-chronicles" className="text-white/70 hover:text-[#d4af37] transition-colors uppercase pb-4">
              RK Chronicles
            </Link>
            <Link href="/news" className="text-white/70 hover:text-[#d4af37] transition-colors uppercase pb-4">
              News & Updates
            </Link>
            <Link href="/about" className="text-white/70 hover:text-[#d4af37] transition-colors uppercase pb-4">
              About RK
            </Link>
            <Link href="/contact" className="text-white/70 hover:text-[#d4af37] transition-colors uppercase pb-4">
              Contact
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden md:flex bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white rounded-none border text-xs tracking-wider">
            <User className="mr-2 h-4 w-4" />
            RK LOGIN
          </Button>
          <Button variant="ghost" size="icon" className="lg:hidden text-white">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
}
