import Link from "next/link";

const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);



export default function Footer() {
  return (
    <footer className="bg-[#050505] py-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-white/50 text-[10px] tracking-wider">
          <p>&copy; {new Date().getFullYear()} RK Universe. All Rights Reserved.</p>
          <div className="flex gap-6 mt-6 md:mt-0 text-[#d4af37]">
            <Link href="#" className="hover:text-white transition-colors">
              <Instagram className="w-4 h-4" />
            </Link>

          </div>
        </div>
      </div>
    </footer>
  );
}
