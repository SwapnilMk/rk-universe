"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';

type StorySidebarActionsProps = {
  storyId: string;
  initialStatus: string;
  initialAssignedTo?: string | null;
  initialPriority?: string | null;
  initialPromotionDays?: string | null;
  initialPromotionPlatforms?: string[];
};

export default function StorySidebarActions({
  storyId,
  initialStatus,
  initialAssignedTo,
  initialPriority,
  initialPromotionDays,
  initialPromotionPlatforms
}: StorySidebarActionsProps) {
  const router = useRouter();
  
  const [status, setStatus] = useState(initialStatus);
  const [assignedTo, setAssignedTo] = useState(initialAssignedTo || "Admin User");
  const [priority, setPriority] = useState(initialPriority || "Medium");
  
  const [promotionDays, setPromotionDays] = useState(initialPromotionDays || "7 Days");
  const [promotionPlatforms, setPromotionPlatforms] = useState<string[]>(initialPromotionPlatforms || []);
  
  const [isLoading, setIsLoading] = useState(false);

  const updateStory = async (updates: any) => {
    setIsLoading(true);
    try {
      const res = await fetch(`/api/stories/${storyId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates)
      });
      if (res.ok) {
        if (updates.status) setStatus(updates.status);
        router.refresh();
      }
    } catch (error) {
      console.error("Failed to update story:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleStatusChange = (newStatus: string) => {
    updateStory({ status: newStatus });
  };

  const handleMetadataChange = () => {
    updateStory({ assignedTo, priority });
  };

  const handlePromotionChange = () => {
    updateStory({ promotionDays, promotionPlatforms });
  };

  const togglePlatform = (platform: string) => {
    setPromotionPlatforms(prev => 
      prev.includes(platform) 
        ? prev.filter(p => p !== platform)
        : [...prev, platform]
    );
  };

  // Helper to format status beautifully
  const getStatusDisplay = () => {
    switch (status) {
      case 'pending':
        return <span className="text-[10px] font-bold text-yellow-500 bg-yellow-500/10 border border-yellow-500/20 px-2 py-1 rounded-sm uppercase">Pending</span>;
      case 'query':
        return <span className="text-[10px] font-bold text-blue-500 bg-blue-500/10 border border-blue-500/20 px-2 py-1 rounded-sm uppercase">Query Sent</span>;
      case 'approved':
        return <span className="text-[10px] font-bold text-green-500 bg-green-500/10 border border-green-500/20 px-2 py-1 rounded-sm uppercase">Approved</span>;
      case 'rejected':
        return <span className="text-[10px] font-bold text-red-500 bg-red-500/10 border border-red-500/20 px-2 py-1 rounded-sm uppercase">Rejected</span>;
      default:
        return <span className="text-[10px] font-bold text-white bg-white/10 border border-white/20 px-2 py-1 rounded-sm uppercase">{status}</span>;
    }
  };

  const currentStageName = status === 'pending' ? 'Under Review' : 
                           status === 'query' ? 'Query (Awaiting User)' : 
                           status === 'approved' ? 'Approved (Ready)' : 'Rejected';

  return (
    <div className="space-y-6">
      
      {/* Story Status */}
      <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-base font-bold text-white">Story Status</h3>
          {getStatusDisplay()}
        </div>
        
        <div className="space-y-5">
          <div>
            <p className="text-xs text-white/50 mb-1">Current Stage</p>
            <p className="text-sm font-bold text-white">{currentStageName}</p>
          </div>

          <div>
            <label className="text-xs text-white/50 mb-2 block">Assigned To</label>
            <select 
              value={assignedTo}
              onChange={(e) => { setAssignedTo(e.target.value); setTimeout(handleMetadataChange, 0); }}
              className="w-full bg-black border border-white/10 rounded-md p-2.5 text-sm text-white focus:outline-none focus:border-[#d4af37] appearance-none"
            >
              <option value="Admin User">Admin User</option>
              <option value="Editor Team">Editor Team</option>
            </select>
          </div>

          <div>
            <label className="text-xs text-white/50 mb-2 block">Priority</label>
            <select 
              value={priority}
              onChange={(e) => { setPriority(e.target.value); setTimeout(handleMetadataChange, 0); }}
              className="w-full bg-black border border-white/10 rounded-md p-2.5 text-sm text-[#d4af37] font-medium focus:outline-none focus:border-[#d4af37] appearance-none"
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6">
        <h3 className="text-base font-bold text-white mb-6">Next Steps</h3>
        
        <div className="space-y-4">
          
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1">
              <p className="text-sm font-medium text-white mb-1">If you have any query</p>
              <p className="text-[10px] text-white/50">We will contact the user on email.</p>
            </div>
            <button 
              onClick={() => handleStatusChange('query')}
              disabled={isLoading}
              className="flex items-center justify-center gap-2 px-4 py-2 bg-transparent border border-[#d4af37] text-[#d4af37] rounded-md text-xs font-medium hover:bg-[#d4af37]/10 transition-colors w-32 shrink-0 disabled:opacity-50"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              Send Query
            </button>
          </div>
          
          <div className="w-full h-[1px] bg-white/10"></div>

          <div className="flex items-center justify-between gap-4">
            <div className="flex-1">
              <p className="text-sm font-medium text-white mb-1">Approve Story</p>
              <p className="text-[10px] text-white/50">Approve the story to proceed for promotion.</p>
            </div>
            <button 
              onClick={() => handleStatusChange('approved')}
              disabled={isLoading}
              className="flex items-center justify-center gap-2 px-4 py-2 bg-green-900/40 border border-green-700 text-green-400 rounded-md text-xs font-medium hover:bg-green-900/60 transition-colors w-32 shrink-0 disabled:opacity-50"
            >
              <CheckCircle className="w-3.5 h-3.5" />
              Approve
            </button>
          </div>
          
          <div className="w-full h-[1px] bg-white/10"></div>

          <div className="flex items-center justify-between gap-4">
            <div className="flex-1">
              <p className="text-sm font-medium text-white mb-1">Reject Story</p>
              <p className="text-[10px] text-white/50">Reject the story with a reason.</p>
            </div>
            <button 
              onClick={() => handleStatusChange('rejected')}
              disabled={isLoading}
              className="flex items-center justify-center gap-2 px-4 py-2 bg-red-900/20 border border-red-900/50 text-red-500 rounded-md text-xs font-medium hover:bg-red-900/40 transition-colors w-32 shrink-0 disabled:opacity-50"
            >
              <AlertCircle className="w-3.5 h-3.5" />
              Reject Story
            </button>
          </div>

        </div>
      </div>

      {/* Promotion Settings */}
      <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6">
        <h3 className="text-base font-bold text-white mb-6">Promotion Settings <span className="text-[10px] text-white/40 font-normal">(After Approval)</span></h3>
        
        <div className="space-y-5">
          <div>
            <label className="text-xs text-white/50 mb-2 block">Run Ad For</label>
            <select 
              value={promotionDays}
              onChange={(e) => setPromotionDays(e.target.value)}
              className="w-full bg-black border border-white/10 rounded-md p-2.5 text-sm text-white focus:outline-none focus:border-[#d4af37] appearance-none"
            >
              <option value="7 Days">7 Days</option>
              <option value="14 Days">14 Days</option>
              <option value="30 Days">30 Days</option>
            </select>
          </div>

          <div>
            <label className="text-xs text-white/50 mb-3 block">Platform</label>
            <div className="flex flex-wrap gap-4">
              {['Instagram', 'Facebook', 'YouTube', 'LinkedIn'].map(platform => (
                <label key={platform} className="flex items-center gap-2 cursor-pointer group">
                  <input 
                    type="checkbox" 
                    checked={promotionPlatforms.includes(platform)}
                    onChange={() => togglePlatform(platform)}
                    className="w-3.5 h-3.5 rounded border-white/30 text-[#d4af37] focus:ring-[#d4af37] bg-black accent-[#d4af37]" 
                  />
                  <span className="text-xs text-white/80 group-hover:text-white transition-colors">{platform}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-lg p-3 flex items-start gap-3 mt-4">
            <AlertCircle className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
            <p className="text-[11px] text-[#d4af37]/90 leading-relaxed">
              You can change promotion settings anytime before starting the ad.
            </p>
          </div>

          <button 
            onClick={handlePromotionChange}
            disabled={isLoading}
            className="w-full py-3 bg-[#d4af37] hover:bg-[#e5c158] text-black text-sm font-bold rounded-md transition-colors shadow-[0_0_15px_rgba(212,175,55,0.2)] mt-2 disabled:opacity-50"
          >
            {isLoading ? "Saving..." : "Save & Continue"}
          </button>
        </div>
      </div>

    </div>
  );
}
