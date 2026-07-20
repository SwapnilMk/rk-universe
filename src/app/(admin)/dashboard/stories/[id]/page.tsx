import React from 'react';
import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import StoryStepper from './StoryStepper';
import UnderReviewView from './UnderReviewView';
import QueryView from './QueryView';
import ApprovedView from './ApprovedView';
import PromotionView from './PromotionView';

export const dynamic = 'force-dynamic';

export default async function StoryDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  const story = await prisma.story.findUnique({
    where: { id },
  });

  if (!story) {
    notFound();
  }

  // Generate initials for avatar
  const initials = story.fullName.split(' ').map((n: string) => n[0]).join('').toUpperCase().substring(0, 2);

  // Formatting date
  const submittedDate = new Date(story.createdAt).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  });

  return (
    <div className="flex-1 p-4 md:p-8 bg-[#050505] min-h-screen text-white font-sans">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-white font-serif">
          {story.status === 'promotion' ? 'Promotion & Live Monitoring' : 'Story Review & Approval'}
          {story.status === 'approved' && (
             <span className="ml-4 inline-flex items-center px-3 py-1 bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-bold rounded-sm uppercase tracking-wider align-middle">
               Approved
             </span>
          )}
          {story.status === 'promotion' && (
             <span className="ml-4 inline-flex items-center px-3 py-1 bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-bold rounded-sm uppercase tracking-wider align-middle">
               <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse mr-1.5"></span> LIVE
             </span>
          )}
        </h2>
        <div className="flex items-center gap-3">
          <Link 
            href="/dashboard/stories" 
            className="flex items-center gap-2 px-4 py-2 border border-white/20 rounded-md text-sm text-white hover:bg-white/5 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Stories
          </Link>
          {(story.status === 'approved' || story.status === 'promotion') && (
            <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-md text-sm text-white/70">
              Story #RC-{story.id.substring(18).toUpperCase()}
            </span>
          )}
        </div>
      </div>

      {/* Progress Steps */}
      <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-8 mb-6 shadow-sm overflow-x-auto">
        <StoryStepper 
          status={story.status} 
          createdAt={story.createdAt}
          updatedAt={story.updatedAt}
        />
      </div>

      {/* Dynamic View based on Status */}
      {story.status === 'pending' && (
        <UnderReviewView story={story} initials={initials} submittedDate={submittedDate} />
      )}
      
      {story.status === 'query' && (
        <QueryView story={story} submittedDate={submittedDate} />
      )}

      {story.status === 'approved' && (
        <ApprovedView story={story} initials={initials} submittedDate={submittedDate} />
      )}

      {story.status === 'promotion' && (
        <PromotionView story={story} />
      )}
      
      {story.status === 'rejected' && (
        <div className="text-center py-20 bg-[#0a0a0a] border border-red-500/20 rounded-xl">
          <h3 className="text-xl text-red-500 font-bold mb-2">Story Rejected</h3>
          <p className="text-white/50">This story was rejected and cannot be promoted.</p>
        </div>
      )}

    </div>
  );
}
