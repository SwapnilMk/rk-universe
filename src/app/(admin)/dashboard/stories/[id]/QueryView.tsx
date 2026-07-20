"use client";

import React, { useState } from 'react';
import { FileText, MapPin, Clock, UploadCloud, Save, Send, HelpCircle, Eye } from 'lucide-react';
import { useRouter } from 'next/navigation';

type QueryViewProps = {
  story: any;
  submittedDate: string;
};

export default function QueryView({ story, submittedDate }: QueryViewProps) {
  const router = useRouter();
  const [response, setResponse] = useState(story.queryResponse || "");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmitResponse = async () => {
    setIsSubmitting(true);
    try {
      await fetch(`/api/stories/${story.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        // On submitting the response, it goes back to pending/under review state
        body: JSON.stringify({ queryResponse: response, status: 'pending' }) 
      });
      router.refresh();
    } catch (e) {
      console.error(e);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      
      {/* Left Column (Query & Response) */}
      <div className="lg:col-span-2 space-y-8">
        
        <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6 md:p-8">
          <h3 className="text-lg font-bold text-[#d4af37] mb-6 border-b border-white/10 pb-4">Message from RK Universe Care Circle</h3>
          
          <div className="flex gap-4 mb-8">
            <div className="w-12 h-12 rounded-full border border-[#d4af37] flex items-center justify-center shrink-0">
              <span className="text-[#d4af37] font-bold text-lg">RK</span>
            </div>
            <div className="space-y-4 text-sm text-white/80 leading-relaxed">
              <p className="font-bold text-white">Hello {story.fullName},</p>
              <p>Thank you for sharing your story with us.</p>
              <p>To help us understand your situation better and ensure responsible awareness, we kindly request the following additional information.</p>
              <p>Please provide the details at your earliest convenience.</p>
              <p className="font-bold text-white">- RK Universe Care Circle Team</p>
            </div>
          </div>

          <div className="bg-[#d4af37]/5 border border-[#d4af37]/20 rounded-lg p-5 flex gap-4 mb-10">
            <div className="w-8 h-8 rounded-full bg-[#d4af37]/10 flex items-center justify-center shrink-0 border border-[#d4af37]/30">
              <FileText className="w-4 h-4 text-[#d4af37]" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#d4af37] mb-2">Information / Clarification Required</h4>
              <ul className="list-disc list-inside text-sm text-white/70 space-y-2">
                <li>Please provide more details about this current situation.</li>
                <li>Any supporting documents or proofs (if available).</li>
                <li>How can the community best understand and support this situation?</li>
                <li>Your preferred contact number for communication.</li>
              </ul>
            </div>
          </div>

          <h3 className="text-base font-bold text-[#d4af37] mb-2">Your Response</h3>
          <p className="text-xs text-white/50 mb-4">Please provide the requested information below.</p>
          
          <textarea
            value={response}
            onChange={(e) => setResponse(e.target.value)}
            placeholder="Type your response here..."
            className="w-full h-40 bg-black/50 border border-white/10 rounded-lg p-4 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#d4af37] resize-none mb-8"
          ></textarea>

          <h3 className="text-base font-bold text-[#d4af37] mb-2">Upload Documents (Optional)</h3>
          <p className="text-xs text-white/50 mb-4">You can upload supporting documents if required.</p>
          
          <div className="border border-dashed border-white/20 rounded-lg p-8 flex flex-col items-center justify-center bg-black/20 hover:bg-black/40 transition-colors cursor-pointer group mb-8">
            <UploadCloud className="w-8 h-8 text-white/40 group-hover:text-[#d4af37] transition-colors mb-3" />
            <p className="text-sm text-white/80 mb-1"><span className="text-[#d4af37] font-medium">Click to upload</span> or drag and drop</p>
            <p className="text-[10px] text-white/40">PDF, JPG, PNG (Max. 10MB each)</p>
          </div>

          <div className="flex items-center gap-4">
            <button className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-transparent border border-white/20 text-white rounded-md text-sm font-medium hover:bg-white/5 transition-colors">
              <Save className="w-4 h-4" />
              Save as Draft
            </button>
            <button 
              onClick={handleSubmitResponse}
              disabled={isSubmitting || !response.trim()}
              className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-[#d4af37] hover:bg-[#e5c158] text-black rounded-md text-sm font-bold transition-colors shadow-[0_0_15px_rgba(212,175,55,0.2)] disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              {isSubmitting ? "Submitting..." : "Submit Response"}
            </button>
          </div>

        </div>
      </div>

      {/* Right Column (Summary & Status) */}
      <div className="space-y-6">
        
        {/* Story Summary */}
        <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-base font-bold text-[#d4af37]">Story Summary</h3>
            <span className="text-[10px] font-bold text-yellow-500 bg-yellow-500/10 border border-yellow-500/20 px-2 py-1 rounded-sm uppercase">PENDING</span>
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-xs text-white/40 mb-1">Full Name</p>
              <p className="text-sm font-medium text-white">{story.fullName}</p>
            </div>
            <div>
              <p className="text-xs text-white/40 mb-1">Category</p>
              <span className="inline-block px-2 py-1 bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] rounded font-medium">
                {story.category}
              </span>
            </div>
            <div>
              <p className="text-xs text-white/40 mb-1">Location</p>
              <p className="text-sm text-white flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-white/50" />
                {story.city}
              </p>
            </div>
            <div>
              <p className="text-xs text-white/40 mb-1">Submitted On</p>
              <p className="text-sm text-white">{submittedDate}</p>
            </div>
            
            <button className="w-full flex items-center justify-center gap-2 py-2 mt-4 bg-transparent border border-[#d4af37] text-[#d4af37] rounded text-xs font-medium hover:bg-[#d4af37]/10 transition-colors">
              <Eye className="w-3.5 h-3.5" />
              View Full Story
            </button>
          </div>
        </div>

        {/* Query Status */}
        <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6">
          <h3 className="text-base font-bold text-[#d4af37] mb-6">Query Status</h3>
          
          <div className="flex items-center gap-2 text-yellow-500 mb-4 bg-yellow-500/5 p-3 rounded-lg border border-yellow-500/10">
            <Clock className="w-4 h-4 shrink-0" />
            <p className="text-xs font-medium">Waiting for your response</p>
          </div>

          <p className="text-[11px] text-white/50 leading-relaxed mb-6">
            Please respond to our query so we can proceed further.
          </p>

          <div className="space-y-4 pt-4 border-t border-white/10">
            <div>
              <label className="text-xs text-white/50 mb-2 block">Assigned To</label>
              <select className="w-full bg-black border border-white/10 rounded-md p-2 text-sm text-white focus:outline-none focus:border-[#d4af37] appearance-none" defaultValue={story.assignedTo || "Admin User"}>
                <option value="Admin User">Admin User</option>
              </select>
            </div>
            <div>
              <label className="text-xs text-white/50 mb-2 block">Priority</label>
              <select className="w-full bg-black border border-white/10 rounded-md p-2 text-sm text-[#d4af37] font-medium focus:outline-none focus:border-[#d4af37] appearance-none" defaultValue={story.priority || "Medium"}>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
            <div>
              <p className="text-[10px] text-white/40 mb-1">Last Updated</p>
              <p className="text-xs text-white/70">19 July 2026, 11:45 AM</p>
            </div>
          </div>
        </div>

        {/* Need Help */}
        <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6 flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-[#d4af37]/10 flex items-center justify-center shrink-0 border border-[#d4af37]/30">
            <HelpCircle className="w-5 h-5 text-[#d4af37]" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white mb-1">Need Help?</h4>
            <p className="text-[10px] text-white/50 mb-3 leading-relaxed">
              If you have any questions, feel free to contact our team.
            </p>
            <button className="flex items-center gap-2 px-3 py-1.5 bg-transparent border border-white/20 text-white rounded text-[10px] hover:bg-white/10 transition-colors">
              <Mail className="w-3 h-3" />
              Email Support
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

// Ensure Mail is imported for Need Help
import { Mail } from 'lucide-react';
