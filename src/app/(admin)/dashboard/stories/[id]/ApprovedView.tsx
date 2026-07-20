"use client";

import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle, ShieldCheck, Edit, Send, Save, Clock, Users, Globe, Layout, Smartphone, FileText } from 'lucide-react';
import AttachmentViewer from './AttachmentViewer';
import { useRouter } from 'next/navigation';

type ApprovedViewProps = {
  story: any;
  initials: string;
  submittedDate: string;
};

const DURATIONS = [
  { id: '3 Days', label: '3 Days', subtext: 'Basic Reach', icon: Clock },
  { id: '7 Days', label: '7 Days', subtext: 'Recommended', icon: ShieldCheck, recommended: true },
  { id: '15 Days', label: '15 Days', subtext: 'High Reach', icon: Send },
  { id: '30 Days', label: '30 Days', subtext: 'Maximum Reach', icon: Globe },
];

const PLATFORMS = [
  { id: 'Instagram', name: 'Instagram', color: 'from-purple-500 to-pink-500', reach: '8.5M+ Reach' },
  { id: 'Facebook', name: 'Facebook', color: 'from-blue-600 to-blue-400', reach: '12M+ Reach' },
  { id: 'YouTube', name: 'YouTube', color: 'from-red-600 to-red-500', reach: '5M+ Reach' },
  { id: 'LinkedIn', name: 'LinkedIn', color: 'from-blue-700 to-blue-500', reach: '1.2M+ Reach' },
  { id: 'X', name: 'X', color: 'from-gray-800 to-gray-600', reach: '2.8M+ Reach' },
  { id: 'WhatsApp', name: 'WhatsApp', color: 'from-green-500 to-green-400', reach: 'Community' },
];

export default function ApprovedView({ story, initials, submittedDate }: ApprovedViewProps) {
  const router = useRouter();
  
  const [duration, setDuration] = useState(story.promotionDays || '7 Days');
  const [platforms, setPlatforms] = useState<string[]>(story.promotionPlatforms || ['Instagram', 'Facebook']);
  const [startDate, setStartDate] = useState(story.promotionStartDate ? new Date(story.promotionStartDate).toISOString().split('T')[0] : '');
  const [endDate, setEndDate] = useState(story.promotionEndDate ? new Date(story.promotionEndDate).toISOString().split('T')[0] : '');
  const [isPublishing, setIsPublishing] = useState(false);

  const togglePlatform = (id: string) => {
    setPlatforms(prev => 
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

  const handlePublish = async () => {
    setIsPublishing(true);
    try {
      await fetch(`/api/stories/${story.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          status: 'promotion',
          promotionDays: duration,
          promotionPlatforms: platforms,
          promotionStartDate: startDate || new Date().toISOString(),
          promotionEndDate: endDate || undefined,
        })
      });
      router.refresh();
    } catch (e) {
      console.error(e);
    } finally {
      setIsPublishing(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      
      {/* Left Column */}
      <div className="lg:col-span-2 space-y-8">
        
        {/* Story Information */}
        <div className="bg-[#0a0a0a] border border-[#d4af37]/30 rounded-xl p-6 relative overflow-hidden">
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37]/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10 relative z-10">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                <span className="text-[#d4af37] text-xs font-bold">{initials}</span>
              </div>
              Story Information
            </h3>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/20 text-green-400 rounded-md">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-xs font-bold">Verified & Approved</span>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-y-4 text-sm relative z-10 mb-8">
            <div className="text-white/50">Full Name</div>
            <div className="col-span-2 text-white font-medium">: {story.fullName}</div>
            
            <div className="text-white/50">Category</div>
            <div className="col-span-2">
              : <span className="inline-block px-2 py-0.5 bg-red-500/10 border border-red-500/20 text-red-400 text-xs rounded font-medium ml-1">{story.category}</span>
            </div>

            <div className="text-white/50">Location</div>
            <div className="col-span-2 text-white flex items-center gap-1">
              : <MapPin className="w-3.5 h-3.5 text-white/50 ml-1" /> {story.city}
            </div>

            <div className="text-white/50">Submitted On</div>
            <div className="col-span-2 text-white">: {submittedDate}</div>

            <div className="text-white/50">Email</div>
            <div className="col-span-2 text-white">: {story.email || "N/A"}</div>

            <div className="text-white/50">Contact</div>
            <div className="col-span-2 text-white">: +91 {story.contactNumber}</div>
          </div>

          <div className="mb-8 relative z-10">
            <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
              <FileText className="w-4 h-4 text-white/50" />
              Story Details
            </h4>
            <p className="text-sm text-white/80 leading-relaxed pl-6">
              {story.storyDescription}
            </p>
          </div>

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-bold text-white">Attachments</h4>
              <button className="text-xs text-[#d4af37] flex items-center gap-1 hover:underline">
                <Eye className="w-3.5 h-3.5" /> View All
              </button>
            </div>
            <AttachmentViewer 
              hospitalDocsUrl={story.hospitalDocsUrl}
              relevantDocsUrl={story.relevantDocsUrl}
              identityProofUrl={story.identityProofUrl}
            />
          </div>
        </div>

        {/* Team Approval Note */}
        {story.approvalNote && (
          <div className="bg-[#d4af37]/5 border border-[#d4af37]/20 rounded-xl p-6 relative">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#d4af37]/10 flex items-center justify-center shrink-0 border border-[#d4af37]/30">
                <ShieldCheck className="w-5 h-5 text-[#d4af37]" />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-bold text-[#d4af37] mb-2">Team Approval Note</h4>
                <p className="text-sm text-white/80 leading-relaxed italic mb-4">
                  "{story.approvalNote}"
                </p>
                <div className="flex justify-between items-center pt-4 border-t border-[#d4af37]/10">
                  <p className="text-xs font-bold text-[#d4af37]/70">— RK Universe Care Circle Review Team</p>
                  <p className="text-[10px] text-white/40">20 July 2026, 09:20 AM</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Awareness Post Preview */}
        <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Layout className="w-4 h-4 text-[#d4af37]" />
              Awareness Post Preview
            </h3>
            <div className="flex gap-3">
              <span className="px-2 py-1 bg-green-500/10 text-green-400 text-[10px] font-bold rounded flex items-center gap-1 border border-green-500/20">
                <CheckCircle className="w-3 h-3" /> Ready for Publishing
              </span>
              <button className="text-xs text-white/50 hover:text-white flex items-center gap-1 transition-colors">
                <Edit className="w-3.5 h-3.5" /> Edit Design
              </button>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-yellow-900/40 via-black to-yellow-900/40 border border-[#d4af37]/30 rounded-lg h-48 flex flex-col items-center justify-center relative overflow-hidden group">
            {/* Mocked Post Graphic */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
            <div className="relative z-10 text-center">
              <div className="w-12 h-12 rounded-full border-2 border-[#d4af37] mx-auto mb-3 flex items-center justify-center">
                 <span className="text-[#d4af37] font-bold">RK</span>
              </div>
              <h2 className="text-xl font-serif text-[#d4af37] font-bold mb-1">A STORY FROM RK UNIVERSE CARE CIRCLE</h2>
              <p className="text-xs text-white/80 tracking-widest uppercase mb-4">"Together We Bring Awareness, Hope & Humanity"</p>
              
              <div className="flex gap-4 text-[9px] text-white/50 justify-center">
                <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3 text-[#d4af37]" /> Privacy First</span>
                <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-[#d4af37]" /> Responsible Review</span>
                <span className="flex items-center gap-1"><Globe className="w-3 h-3 text-[#d4af37]" /> Community Connects</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Right Column (Promotion Setup) */}
      <div className="space-y-6">
        
        <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-[#d4af37]/10 flex items-center justify-center border border-[#d4af37]/30">
              <Megaphone className="w-5 h-5 text-[#d4af37]" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Promotion Setup</h3>
              <p className="text-[10px] text-white/50">Select duration and platforms to run awareness campaign</p>
            </div>
          </div>

          {/* Duration */}
          <div className="mb-8">
            <h4 className="text-sm font-bold text-white mb-4">Select Promotion Duration</h4>
            <div className="grid grid-cols-2 gap-3">
              {DURATIONS.map(d => (
                <button 
                  key={d.id}
                  onClick={() => setDuration(d.id)}
                  className={`p-3 rounded-lg border text-left flex flex-col items-start relative transition-all ${
                    duration === d.id ? 'bg-[#d4af37]/10 border-[#d4af37] shadow-[0_0_10px_rgba(212,175,55,0.15)]' : 'bg-black/50 border-white/10 hover:border-white/30'
                  }`}
                >
                  <div className="flex justify-between w-full items-start mb-2">
                    <d.icon className={`w-4 h-4 ${duration === d.id ? 'text-[#d4af37]' : 'text-white/40'}`} />
                    {d.recommended && (
                      <span className="text-[8px] uppercase font-bold text-[#d4af37] bg-[#d4af37]/10 px-1.5 py-0.5 rounded border border-[#d4af37]/20">Recommended</span>
                    )}
                  </div>
                  <span className={`text-sm font-bold ${duration === d.id ? 'text-[#d4af37]' : 'text-white'}`}>{d.label}</span>
                  <span className="text-[10px] text-white/40 mt-1">{d.subtext}</span>
                  {duration === d.id && <CheckCircle className="absolute top-3 right-3 w-4 h-4 text-[#d4af37]" />}
                </button>
              ))}
            </div>
          </div>

          {/* Platforms */}
          <div className="mb-8">
            <h4 className="text-sm font-bold text-white mb-4">Select Social Media Platforms</h4>
            <p className="text-[10px] text-white/40 mb-3">Run the story as awareness post across selected platforms</p>
            <div className="grid grid-cols-2 gap-3">
              {PLATFORMS.map(p => {
                const isActive = platforms.includes(p.id);
                return (
                  <button 
                    key={p.id}
                    onClick={() => togglePlatform(p.id)}
                    className={`p-2.5 rounded-lg border flex items-center gap-3 transition-all ${
                      isActive ? 'bg-black border-[#d4af37]/50 shadow-[0_0_10px_rgba(212,175,55,0.1)]' : 'bg-black/50 border-white/10 hover:border-white/30'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-md bg-gradient-to-br ${p.color} flex items-center justify-center shrink-0`}>
                      {/* Using generic icon for social media logos */}
                      <Smartphone className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-left flex-1 min-w-0">
                      <p className={`text-xs font-bold truncate ${isActive ? 'text-white' : 'text-white/70'}`}>{p.name}</p>
                      <p className="text-[9px] text-white/40 truncate">{p.reach}</p>
                    </div>
                    <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                      isActive ? 'bg-[#d4af37] border-[#d4af37]' : 'border-white/30'
                    }`}>
                      {isActive && <CheckCircle className="w-3 h-3 text-black" />}
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Custom Schedule */}
          <div className="mb-8 border-t border-white/10 pt-6">
            <h4 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
              <Clock className="w-4 h-4 text-white/50" /> Custom Schedule (Optional)
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] text-white/50 mb-1.5 block">Start Date</label>
                <input 
                  type="date" 
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full bg-black/50 border border-white/10 rounded-md p-2 text-xs text-white focus:outline-none focus:border-[#d4af37] [color-scheme:dark]" 
                />
              </div>
              <div>
                <label className="text-[10px] text-white/50 mb-1.5 block">End Date</label>
                <input 
                  type="date" 
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full bg-black/50 border border-white/10 rounded-md p-2 text-xs text-white focus:outline-none focus:border-[#d4af37] [color-scheme:dark]" 
                />
              </div>
            </div>
            <p className="text-[10px] text-white/40 mt-2 flex items-center gap-1">
              <CheckCircle className="w-3 h-3 text-[#d4af37]" /> Campaign will run for {duration}
            </p>
          </div>

          {/* Audience & Reach */}
          <div className="mb-8 border-t border-white/10 pt-6">
            <h4 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
              <Users className="w-4 h-4 text-[#d4af37]" /> Audience & Reach
            </h4>
            <div className="flex justify-between items-center">
              <div className="text-center">
                <p className="text-lg font-bold text-white">2.5M+</p>
                <p className="text-[9px] text-white/50">People Reach</p>
              </div>
              <div className="w-[1px] h-8 bg-white/10"></div>
              <div className="text-center">
                <p className="text-lg font-bold text-white">25K+</p>
                <p className="text-[9px] text-white/50">Expected Engagement</p>
              </div>
              <div className="w-[1px] h-8 bg-white/10"></div>
              <div className="text-center">
                <p className="text-lg font-bold text-white">India</p>
                <p className="text-[9px] text-white/50">Primary Region</p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button className="px-4 py-3 bg-transparent border border-white/20 text-white rounded-md text-xs font-medium hover:bg-white/5 transition-colors flex items-center justify-center gap-2 shrink-0">
              <Save className="w-4 h-4" /> Save Draft
            </button>
            <button className="px-4 py-3 bg-transparent border border-[#d4af37]/30 text-[#d4af37] rounded-md text-xs font-medium hover:bg-[#d4af37]/10 transition-colors flex items-center justify-center gap-2 shrink-0">
              <Clock className="w-4 h-4" /> Schedule
            </button>
            <button 
              onClick={handlePublish}
              disabled={isPublishing}
              className="flex-1 py-3 bg-[#d4af37] hover:bg-[#e5c158] text-black text-sm font-bold rounded-md transition-colors shadow-[0_0_15px_rgba(212,175,55,0.2)] flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              {isPublishing ? "Publishing..." : "Publish to Social Media"}
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}

// Need to import Megaphone for the icon
import { Megaphone, Eye } from 'lucide-react';
