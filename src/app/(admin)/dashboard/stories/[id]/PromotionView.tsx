"use client";

import React from 'react';
import { Megaphone, CheckCircle, Clock, Smartphone, PlayCircle, BarChart3, Edit, PauseCircle, StopCircle, Eye, ShieldCheck, Globe, Heart } from 'lucide-react';
import { useRouter } from 'next/navigation';

type PromotionViewProps = {
  story: any;
};

export default function PromotionView({ story }: PromotionViewProps) {
  const router = useRouter();

  const handleEndCampaign = async () => {
    if (confirm("Are you sure you want to end this campaign early?")) {
      await fetch(`/api/stories/${story.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'approved' }) // Revert to approved
      });
      router.refresh();
    }
  };

  const platforms = story.promotionPlatforms || ['Instagram', 'Facebook', 'YouTube', 'LinkedIn'];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      
      {/* Left Column */}
      <div className="lg:col-span-2 space-y-8">
        
        {/* Promotion is Live Banner */}
        <div className="bg-[#0a0a0a] border border-[#d4af37]/30 rounded-xl p-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/10 to-transparent pointer-events-none"></div>
          
          <div className="relative z-10 flex items-start gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-[#d4af37]/20 flex items-center justify-center shrink-0 border border-[#d4af37]/50 shadow-[0_0_15px_rgba(212,175,55,0.3)]">
              <Megaphone className="w-6 h-6 text-[#d4af37]" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Promotion is Live!</h3>
              <p className="text-sm text-white/60">Your story is now live on selected social media platforms.</p>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 relative z-10">
            <div>
              <p className="text-[10px] text-white/40 flex items-center gap-1 mb-1"><Clock className="w-3 h-3 text-[#d4af37]" /> Campaign Duration</p>
              <p className="text-sm font-bold text-white">{story.promotionDays || '7 Days'}</p>
              <p className="text-[9px] text-white/40 mt-0.5">21 July 2026 - 27 July 2026</p>
            </div>
            <div>
              <p className="text-[10px] text-white/40 flex items-center gap-1 mb-1"><Smartphone className="w-3 h-3 text-[#d4af37]" /> Total Platforms</p>
              <p className="text-sm font-bold text-white">{platforms.length}</p>
              <p className="text-[9px] text-white/40 mt-0.5">{platforms.slice(0, 2).join(', ')}...</p>
            </div>
            <div>
              <p className="text-[10px] text-white/40 flex items-center gap-1 mb-1"><PlayCircle className="w-3 h-3 text-[#d4af37]" /> Campaign Status</p>
              <p className="text-sm font-bold text-green-400 flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> LIVE</p>
              <p className="text-[9px] text-white/40 mt-0.5">Running smoothly</p>
            </div>
            <div>
              <p className="text-[10px] text-white/40 flex items-center gap-1 mb-1"><BarChart3 className="w-3 h-3 text-[#d4af37]" /> Budget Type</p>
              <p className="text-sm font-bold text-white">Standard Reach</p>
              <p className="text-[9px] text-white/40 mt-0.5">Optimized Awareness</p>
            </div>
          </div>

          <div className="mt-8 bg-blue-500/10 border border-blue-500/20 rounded-lg p-3 flex items-start gap-3">
            <div className="w-4 h-4 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 mt-0.5">
               <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
            </div>
            <p className="text-xs text-blue-300/80 leading-relaxed">
              We are sharing your story responsibly to create awareness and connect the right people.
            </p>
          </div>
        </div>

        {/* Live on Social Media */}
        <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-base font-bold text-white">Live on Social Media</h3>
            <button className="text-xs text-[#d4af37] flex items-center gap-1 hover:underline">
               View All Analytics <CheckCircle className="w-3.5 h-3.5" />
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            
            {platforms.includes('Instagram') && (
            <div className="bg-black/50 border border-white/5 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 flex items-center justify-center"><Smartphone className="w-3 h-3 text-white"/></div>
                <span className="text-xs font-bold text-white">Instagram</span>
                <span className="text-[8px] bg-green-500/20 text-green-400 px-1.5 py-0.5 rounded ml-auto">LIVE</span>
              </div>
              <div className="flex justify-between">
                <div>
                  <p className="text-[9px] text-white/40">Reach</p>
                  <p className="text-sm font-bold text-white">3,245</p>
                </div>
                <div>
                  <p className="text-[9px] text-white/40">Clicks</p>
                  <p className="text-sm font-bold text-white">243</p>
                </div>
              </div>
              <button className="w-full mt-4 text-[10px] text-[#d4af37] border border-[#d4af37]/30 py-1.5 rounded hover:bg-[#d4af37]/10 transition-colors">View Post ↗</button>
            </div>
            )}

            {platforms.includes('Facebook') && (
            <div className="bg-black/50 border border-white/5 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center"><Smartphone className="w-3 h-3 text-white"/></div>
                <span className="text-xs font-bold text-white">Facebook</span>
                <span className="text-[8px] bg-green-500/20 text-green-400 px-1.5 py-0.5 rounded ml-auto">LIVE</span>
              </div>
              <div className="flex justify-between">
                <div>
                  <p className="text-[9px] text-white/40">Reach</p>
                  <p className="text-sm font-bold text-white">4,812</p>
                </div>
                <div>
                  <p className="text-[9px] text-white/40">Clicks</p>
                  <p className="text-sm font-bold text-white">328</p>
                </div>
              </div>
              <button className="w-full mt-4 text-[10px] text-[#d4af37] border border-[#d4af37]/30 py-1.5 rounded hover:bg-[#d4af37]/10 transition-colors">View Post ↗</button>
            </div>
            )}

            {platforms.includes('YouTube') && (
            <div className="bg-black/50 border border-white/5 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded bg-red-600 flex items-center justify-center"><PlayCircle className="w-3 h-3 text-white"/></div>
                <span className="text-xs font-bold text-white">YouTube</span>
                <span className="text-[8px] bg-green-500/20 text-green-400 px-1.5 py-0.5 rounded ml-auto">LIVE</span>
              </div>
              <div className="flex justify-between">
                <div>
                  <p className="text-[9px] text-white/40">Reach</p>
                  <p className="text-sm font-bold text-white">2,136</p>
                </div>
                <div>
                  <p className="text-[9px] text-white/40">Views</p>
                  <p className="text-sm font-bold text-white">1,245</p>
                </div>
              </div>
              <button className="w-full mt-4 text-[10px] text-[#d4af37] border border-[#d4af37]/30 py-1.5 rounded hover:bg-[#d4af37]/10 transition-colors">View Post ↗</button>
            </div>
            )}

            {platforms.includes('LinkedIn') && (
            <div className="bg-black/50 border border-white/5 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded bg-blue-700 flex items-center justify-center"><Smartphone className="w-3 h-3 text-white"/></div>
                <span className="text-xs font-bold text-white">LinkedIn</span>
                <span className="text-[8px] bg-green-500/20 text-green-400 px-1.5 py-0.5 rounded ml-auto">LIVE</span>
              </div>
              <div className="flex justify-between">
                <div>
                  <p className="text-[9px] text-white/40">Reach</p>
                  <p className="text-sm font-bold text-white">1,824</p>
                </div>
                <div>
                  <p className="text-[9px] text-white/40">Clicks</p>
                  <p className="text-sm font-bold text-white">99</p>
                </div>
              </div>
              <button className="w-full mt-4 text-[10px] text-[#d4af37] border border-[#d4af37]/30 py-1.5 rounded hover:bg-[#d4af37]/10 transition-colors">View Post ↗</button>
            </div>
            )}

          </div>
        </div>

        {/* Activity Timeline */}
        <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6">
          <h3 className="text-base font-bold text-white mb-6">Activity Timeline</h3>
          
          <div className="relative pl-6 space-y-8 before:absolute before:inset-0 before:ml-[11px] before:w-[1px] before:bg-white/10 before:-z-10">
            
            <div className="relative z-10">
              <div className="absolute -left-6 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/50">
                <CheckCircle className="w-3 h-3 text-green-400" />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-sm font-bold text-white">Promotion Started</h4>
                  <p className="text-xs text-white/50 mt-1">21 July 2026, 09:30 AM</p>
                </div>
                <span className="text-xs text-white/40">System</span>
              </div>
            </div>

            <div className="relative z-10">
              <div className="absolute -left-6 w-5 h-5 rounded-full bg-[#d4af37]/20 flex items-center justify-center border border-[#d4af37]/50">
                <Globe className="w-3 h-3 text-[#d4af37]" />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-sm font-bold text-[#d4af37]">Published on Social Media</h4>
                  <p className="text-xs text-white/50 mt-1">21 July 2026, 09:45 AM</p>
                </div>
                <span className="text-xs text-white/40">System</span>
              </div>
            </div>
            
            <div className="relative z-10">
              <div className="absolute -left-6 w-5 h-5 rounded-full bg-black flex items-center justify-center border border-white/30">
                <BarChart3 className="w-3 h-3 text-white/70" />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-sm font-medium text-white/70">First Reach Achieved</h4>
                  <p className="text-xs text-white/50 mt-1">21 July 2026, 10:30 AM</p>
                </div>
                <span className="text-xs text-white/40">System</span>
              </div>
            </div>

            <div className="relative z-10">
              <div className="absolute -left-6 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center shadow-[0_0_10px_rgba(34,197,94,0.4)]">
                <div className="w-2 h-2 rounded-full bg-black"></div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-sm font-bold text-green-400">Campaign is Live</h4>
                  <p className="text-xs text-white/50 mt-1">Running for {story.promotionDays || '7 Days'}</p>
                </div>
                <span className="text-xs text-white/40">System</span>
              </div>
            </div>

          </div>
        </div>

        {/* Thank You Banner */}
        <div className="bg-[#d4af37]/5 border border-[#d4af37]/20 rounded-xl p-6 flex items-center gap-6">
          <div className="w-12 h-12 rounded-full bg-[#d4af37]/10 flex items-center justify-center shrink-0 border border-[#d4af37]/30">
            <Heart className="w-6 h-6 text-[#d4af37]" />
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-bold text-[#d4af37] mb-1">Thank You for Spreading Awareness</h4>
            <p className="text-xs text-white/70 leading-relaxed">
              Your story is helping create awareness and connect people who care. 
              Together, we can bring hope and support to those who need it.
            </p>
          </div>
          <div className="hidden md:flex gap-1 shrink-0 opacity-20">
            <Heart className="w-8 h-8 text-[#d4af37]" />
            <Heart className="w-10 h-10 text-[#d4af37] -mt-2" />
            <Heart className="w-8 h-8 text-[#d4af37]" />
          </div>
        </div>

      </div>

      {/* Right Column */}
      <div className="space-y-6">
        
        {/* Ad Preview */}
        <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-bold text-white">Ad Preview</h3>
            <button className="text-xs text-[#d4af37] hover:underline flex items-center gap-1">
               View Full Post <Eye className="w-3.5 h-3.5" />
            </button>
          </div>
          
          <div className="bg-gradient-to-r from-yellow-900/40 via-black to-yellow-900/40 border border-[#d4af37]/30 rounded-lg h-40 flex flex-col items-center justify-center relative overflow-hidden group mb-4">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
            <div className="relative z-10 text-center">
              <div className="w-10 h-10 rounded-full border border-[#d4af37] mx-auto mb-2 flex items-center justify-center">
                 <span className="text-[#d4af37] font-bold text-xs">RK</span>
              </div>
              <h2 className="text-lg font-serif text-[#d4af37] font-bold mb-1">A STORY CAN<br/>CHANGE A LIFE</h2>
              <button className="mt-2 text-[8px] bg-[#d4af37] text-black px-2 py-0.5 rounded font-bold uppercase tracking-wider">Share Your Story, Inspire Change</button>
            </div>
          </div>

          <p className="text-[10px] text-white/50 mb-2">Platforms</p>
          <div className="flex gap-2">
            {platforms.map((p: string) => (
              <div key={p} className="w-6 h-6 rounded bg-white/10 flex items-center justify-center" title={p}>
                {p === 'YouTube' ? <PlayCircle className="w-3 h-3 text-white/70" /> : <Smartphone className="w-3 h-3 text-white/70" />}
              </div>
            ))}
          </div>
        </div>

        {/* Live Performance */}
        <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-base font-bold text-white">Live Performance (So Far)</h3>
            <select className="bg-transparent border border-white/20 text-xs text-white/70 rounded px-2 py-1 focus:outline-none">
              <option>Today</option>
              <option>Lifetime</option>
            </select>
          </div>
          
          <p className="text-[10px] text-green-400 mb-4 flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> Updated just now</p>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-black/50 border border-white/5 rounded-lg p-4">
              <p className="text-[10px] text-white/40 flex items-center gap-1.5 mb-1"><Globe className="w-3 h-3 text-white/50" /> Total Reach</p>
              <p className="text-xl font-bold text-white">11.2K</p>
              <p className="text-[9px] text-green-400 mt-1">↑ +28% vs yesterday</p>
            </div>
            <div className="bg-black/50 border border-white/5 rounded-lg p-4">
              <p className="text-[10px] text-white/40 flex items-center gap-1.5 mb-1"><Heart className="w-3 h-3 text-white/50" /> Engagement</p>
              <p className="text-xl font-bold text-white">1.6K</p>
              <p className="text-[9px] text-green-400 mt-1">↑ +14% vs yesterday</p>
            </div>
            <div className="bg-black/50 border border-white/5 rounded-lg p-4">
              <p className="text-[10px] text-white/40 flex items-center gap-1.5 mb-1"><CheckCircle className="w-3 h-3 text-white/50" /> Link Clicks</p>
              <p className="text-xl font-bold text-white">650</p>
              <p className="text-[9px] text-green-400 mt-1">↑ +32% vs yesterday</p>
            </div>
            <div className="bg-black/50 border border-white/5 rounded-lg p-4">
              <p className="text-[10px] text-white/40 flex items-center gap-1.5 mb-1"><PlayCircle className="w-3 h-3 text-white/50" /> Video Views</p>
              <p className="text-xl font-bold text-white">1.2K</p>
              <p className="text-[9px] text-green-400 mt-1">↑ +21% vs yesterday</p>
            </div>
          </div>
          
          <p className="text-[9px] text-white/30 text-center mt-4">✓ Analytics update every 30 minutes</p>
        </div>

        {/* Manage Promotion */}
        <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6">
          <h3 className="text-base font-bold text-white mb-6">Manage Promotion</h3>
          
          <div className="space-y-2">
            <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors group">
              <div className="flex items-center gap-3">
                <Edit className="w-4 h-4 text-white/60 group-hover:text-white" />
                <div className="text-left">
                  <p className="text-xs font-bold text-white">Edit Promotion Settings</p>
                  <p className="text-[9px] text-white/40">Change duration, platforms, or budget</p>
                </div>
              </div>
              <span className="text-white/40">›</span>
            </button>

            <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors group">
              <div className="flex items-center gap-3">
                <PauseCircle className="w-4 h-4 text-white/60 group-hover:text-white" />
                <div className="text-left">
                  <p className="text-xs font-bold text-white">Pause Campaign</p>
                  <p className="text-[9px] text-white/40">Pause the campaign anytime</p>
                </div>
              </div>
              <span className="text-white/40">›</span>
            </button>

            <button 
              onClick={handleEndCampaign}
              className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-red-500/10 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <StopCircle className="w-4 h-4 text-red-500/60 group-hover:text-red-400" />
                <div className="text-left">
                  <p className="text-xs font-bold text-red-400">End Campaign Early</p>
                  <p className="text-[9px] text-red-400/60">Stop the campaign before the end date</p>
                </div>
              </div>
              <span className="text-red-400/40">›</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
