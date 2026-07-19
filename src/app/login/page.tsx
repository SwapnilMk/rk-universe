"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { User, Lock, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const container = useRef(null);
  const router = useRouter();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Invalid credentials');
      }

      if (result.user.role === 'admin') {
        router.push('/dashboard');
      } else {
        router.push('/');
      }
      router.refresh();
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  useGSAP(() => {
    const tl = gsap.timeline();
    
    tl.from(".auth-elem", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
    });
  }, { scope: container });

  return (
    <div ref={container} className="flex flex-col min-h-screen bg-[#050505] text-white font-sans selection:bg-[#d4af37] selection:text-black">
      <Header />
      
      <main className="flex-1 flex items-center justify-center relative overflow-hidden py-20 px-4">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4af37]/5 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="w-full max-w-md bg-black border border-white/10 rounded-lg p-8 sm:p-10 relative z-10 shadow-[0_0_40px_rgba(0,0,0,0.8)]">
          <div className="text-center mb-10 auth-elem">
            <div className="w-16 h-16 mx-auto bg-[#0a0a0a] border border-[#d4af37]/30 rounded-full flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(212,175,55,0.15)]">
              <User className="w-7 h-7 text-[#d4af37]" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-serif text-[#d4af37] tracking-wider mb-2 uppercase">
              RK Login
            </h1>
            <p className="text-white/50 text-[11px] uppercase tracking-[0.15em]">
              Access your universe
            </p>
          </div>

          <form onSubmit={handleLogin} className="flex flex-col gap-5">
            {error && (
              <div className="text-red-400 text-xs text-center border border-red-500/20 bg-red-500/10 py-2 rounded-sm mb-2">
                {error}
              </div>
            )}
            <div className="auth-elem flex flex-col gap-2 relative">
              <label className="text-white/60 text-[10px] uppercase tracking-widest font-medium ml-1">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-white/30">
                  <Mail className="w-4 h-4" />
                </div>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  disabled={loading}
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded-sm pl-11 pr-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#d4af37]/70 transition-colors disabled:opacity-50"
                  required
                />
              </div>
            </div>

            <div className="auth-elem flex flex-col gap-2 relative">
              <div className="flex items-center justify-between ml-1">
                <label className="text-white/60 text-[10px] uppercase tracking-widest font-medium">Password</label>
                <Link href="/reset-password" className="text-[#d4af37]/80 hover:text-[#d4af37] text-[10px] uppercase tracking-widest transition-colors">
                  Forgot?
                </Link>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-white/30">
                  <Lock className="w-4 h-4" />
                </div>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  disabled={loading}
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded-sm pl-11 pr-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#d4af37]/70 transition-colors disabled:opacity-50"
                  required
                />
              </div>
            </div>

            <div className="auth-elem mt-6">
              <Button 
                type="submit" 
                disabled={loading}
                className="w-full bg-[#d4af37] hover:bg-[#b38b22] text-black font-semibold tracking-widest uppercase rounded-sm py-6 flex items-center justify-center gap-2 group transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? 'WAIT...' : 'Sign In'}
                {!loading && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
              </Button>
            </div>
          </form>

          <div className="auth-elem mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-white/40 text-[11px] tracking-widest uppercase">
              Don&apos;t have an account? <span className="text-white/60 cursor-not-allowed">Sign up soon</span>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
