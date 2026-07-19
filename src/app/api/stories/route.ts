import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const story = await prisma.story.create({
      data: {
        fullName: data.fullName,
        relationship: data.relationship,
        contactNumber: data.contactNumber,
        email: data.email || null,
        city: data.city,
        category: data.category,
        storyDescription: data.storyDescription,
        contactPreference: data.contactPreference,
        status: "pending",
      },
    });

    return NextResponse.json({ success: true, story }, { status: 201 });
  } catch (error: any) {
    console.error('Error creating story:', error);
    return NextResponse.json({ error: 'Failed to submit story' }, { status: 500 });
  }
}
