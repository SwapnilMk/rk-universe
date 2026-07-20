"use client";

import React, { useState } from 'react';
import { Mail, Phone, MapPin, FileText, Eye, MessageSquare, CheckCircle, Speaker as SpeakerIcon } from 'lucide-react';
import AttachmentViewer from './AttachmentViewer';
import StorySidebarActions from './StorySidebarActions';

type UnderReviewViewProps = {
  story: any;
  initials: string;
  submittedDate: string;
};

export default function UnderReviewView({ story, initials, submittedDate }: UnderReviewViewProps) {
  const [approvalNote, setApprovalNote] = useState(story.approvalNote || "");

  const handleNoteChange = async (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setApprovalNote(e.target.value);
  };

  const handleNoteBlur = async () => {
    if (approvalNote !== story.approvalNote) {
      await fetch(`/api/stories/${story.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ approvalNote })
      });
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      
      {/* Left Column (Story Details) */}
      <div className="lg:col-span-2 space-y-8">
        
        {/* Story Information */}
        <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6">
          <h3 className="text-lg font-bold text-white mb-6 border-b border-white/10 pb-4">Story Information</h3>
          
          <div className="flex items-start justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-xl font-bold text-white">
                {initials}
              </div>
              <div>
                <h4 className="text-base font-bold text-white">{story.fullName}</h4>
                <div className="flex items-center gap-2 text-sm text-white/60 mt-1">
                  <Mail className="w-3.5 h-3.5" />
                  {story.email || "No email provided"}
                </div>
                <div className="flex items-center gap-2 text-sm text-white/60 mt-1">
                  <Phone className="w-3.5 h-3.5" />
                  +91 {story.contactNumber}
                </div>
              </div>
            </div>

            <div className="text-right">
              <p className="text-xs text-white/40 mb-1">Category</p>
              <span className="inline-block px-3 py-1 bg-red-500/10 border border-red-500/20 text-red-400 text-xs rounded-md font-medium">
                {story.category}
              </span>
              <p className="text-xs text-white/40 mt-3 mb-1">Submitted On</p>
              <p className="text-sm text-white/80">{submittedDate}</p>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-sm font-bold text-white mb-2">Story Details</h4>
            <p className="text-sm text-white/70 leading-relaxed bg-black/40 p-4 rounded-lg border border-white/5">
              {story.storyDescription}
            </p>
          </div>

          <div className="mb-8">
            <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
              Location
            </h4>
            <p className="text-sm text-white/70 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#d4af37]" />
              {story.city}
            </p>
          </div>

          {/* Attachments */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">Attachments</h4>
            <AttachmentViewer 
              hospitalDocsUrl={story.hospitalDocsUrl}
              relevantDocsUrl={story.relevantDocsUrl}
              identityProofUrl={story.identityProofUrl}
            />
          </div>
          
          {/* Review Notes */}
          <div className="mt-8 border-t border-white/10 pt-6">
            <h4 className="text-sm font-bold text-white mb-3">Review Notes</h4>
            <textarea 
              value={approvalNote}
              onChange={handleNoteChange}
              onBlur={handleNoteBlur}
              className="w-full bg-black/50 border border-white/10 rounded-lg p-4 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#d4af37] resize-none h-24 transition-colors"
              placeholder="Add internal notes (visible to admin only)..."
            ></textarea>
            <p className="text-[10px] text-white/40 mt-2">Visible only to admin team</p>
          </div>
        </div>

        {/* Activity Timeline */}
        <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6">
          <h3 className="text-lg font-bold text-white mb-6">Activity Timeline</h3>
          
          <div className="relative pl-6 space-y-8 before:absolute before:inset-0 before:ml-[11px] before:w-[1px] before:bg-white/10 before:-z-10">
            
            <div className="relative z-10">
              <div className="absolute -left-6 w-5 h-5 rounded-full bg-[#d4af37] flex items-center justify-center shadow-[0_0_10px_rgba(212,175,55,0.3)]">
                <FileText className="w-3 h-3 text-black" />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-sm font-bold text-white">Story Submitted</h4>
                  <p className="text-xs text-white/50 mt-1">{submittedDate}</p>
                </div>
                <span className="text-sm text-white/70">{story.fullName}</span>
              </div>
            </div>

            <div className="relative z-10">
              <div className="absolute -left-6 w-5 h-5 rounded-full bg-[#d4af37] flex items-center justify-center shadow-[0_0_10px_rgba(212,175,55,0.3)]">
                <Eye className="w-3 h-3 text-black" />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-sm font-bold text-[#d4af37]">Under Review</h4>
                  <p className="text-xs text-white/50 mt-1">In Progress</p>
                </div>
                <span className="text-sm text-white/70">{story.assignedTo || "Admin User"}</span>
              </div>
            </div>

            <div className="relative z-10 opacity-50">
              <div className="absolute -left-6 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                <MessageSquare className="w-3 h-3 text-white" />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-sm font-medium text-white">Query Sent</h4>
                  <p className="text-xs text-white/50 mt-1">-</p>
                </div>
                <span className="text-sm text-white/70">-</span>
              </div>
            </div>

            <div className="relative z-10 opacity-50">
              <div className="absolute -left-6 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                <CheckCircle className="w-3 h-3 text-white" />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-sm font-medium text-white">Story Approved</h4>
                  <p className="text-xs text-white/50 mt-1">-</p>
                </div>
                <span className="text-sm text-white/70">-</span>
              </div>
            </div>
            
            <div className="relative z-10 opacity-50">
              <div className="absolute -left-6 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                <SpeakerIcon className="w-3 h-3 text-white" />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-sm font-medium text-white">Promotion Started</h4>
                  <p className="text-xs text-white/50 mt-1">-</p>
                </div>
                <span className="text-sm text-white/70">-</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Right Column (Sidebar Actions) */}
      <div className="space-y-6">
        <StorySidebarActions 
          storyId={story.id}
          initialStatus={story.status}
          initialAssignedTo={story.assignedTo}
          initialPriority={story.priority}
          initialPromotionDays={story.promotionDays}
          initialPromotionPlatforms={story.promotionPlatforms}
        />
      </div>

    </div>
  );
}
