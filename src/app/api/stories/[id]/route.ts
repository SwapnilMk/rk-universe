import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();

    const { 
      status, assignedTo, priority, promotionDays, promotionPlatforms,
      queryMessage, queryResponse, queryResponseDocs, approvalNote,
      promotionStartDate, promotionEndDate, campaignStatus,
      reach, clicks, engagement, videoViews
    } = body;

    const dataToUpdate: any = {};
    if (status !== undefined) dataToUpdate.status = status;
    if (assignedTo !== undefined) dataToUpdate.assignedTo = assignedTo;
    if (priority !== undefined) dataToUpdate.priority = priority;
    if (promotionDays !== undefined) dataToUpdate.promotionDays = promotionDays;
    if (promotionPlatforms !== undefined) dataToUpdate.promotionPlatforms = promotionPlatforms;
    
    if (queryMessage !== undefined) dataToUpdate.queryMessage = queryMessage;
    if (queryResponse !== undefined) dataToUpdate.queryResponse = queryResponse;
    if (queryResponseDocs !== undefined) dataToUpdate.queryResponseDocs = queryResponseDocs;
    if (approvalNote !== undefined) dataToUpdate.approvalNote = approvalNote;
    
    if (promotionStartDate !== undefined) dataToUpdate.promotionStartDate = promotionStartDate;
    if (promotionEndDate !== undefined) dataToUpdate.promotionEndDate = promotionEndDate;
    if (campaignStatus !== undefined) dataToUpdate.campaignStatus = campaignStatus;
    if (reach !== undefined) dataToUpdate.reach = reach;
    if (clicks !== undefined) dataToUpdate.clicks = clicks;
    if (engagement !== undefined) dataToUpdate.engagement = engagement;
    if (videoViews !== undefined) dataToUpdate.videoViews = videoViews;

    const updatedStory = await prisma.story.update({
      where: { id },
      data: dataToUpdate,
    });

    return NextResponse.json(updatedStory);
  } catch (error) {
    console.error('Error updating story:', error);
    return NextResponse.json({ error: 'Failed to update story' }, { status: 500 });
  }
}
