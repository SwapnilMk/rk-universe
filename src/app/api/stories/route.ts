import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

const s3Client = new S3Client({
  region: process.env.AWS_REGION || 'ap-south-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
  },
});

async function uploadFileToS3(file: File, folderName: string) {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const fileName = `${folderName}/${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;

  const command = new PutObjectCommand({
    Bucket: process.env.AWS_S3_BUCKET_NAME || 'herridez-media-bucket',
    Key: fileName,
    Body: buffer,
    ContentType: file.type,
  });

  await s3Client.send(command);
  return `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileName}`;
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const folderName = process.env.AWS_S3_FOLDER_NAME || 'rkuniverse';

    // Extract text fields
    const fullName = formData.get('fullName') as string;
    const relationship = formData.get('relationship') as string;
    const contactNumber = formData.get('contactNumber') as string;
    const email = formData.get('email') as string;
    const city = formData.get('city') as string;
    const category = formData.get('category') as string;
    const storyDescription = formData.get('storyDescription') as string;
    const contactPreference = formData.get('contactPreference') as string;

    // Handle file uploads
    let identityProofUrl = null;
    let relevantDocsUrl = null;
    let hospitalDocsUrl = null;
    let otherDocsUrl = null;

    const identityProof = formData.get('identityProof') as File | null;
    if (identityProof && identityProof.size > 0) {
      identityProofUrl = await uploadFileToS3(identityProof, folderName);
    }

    const relevantDocs = formData.get('relevantDocs') as File | null;
    if (relevantDocs && relevantDocs.size > 0) {
      relevantDocsUrl = await uploadFileToS3(relevantDocs, folderName);
    }

    const hospitalDocs = formData.get('hospitalDocs') as File | null;
    if (hospitalDocs && hospitalDocs.size > 0) {
      hospitalDocsUrl = await uploadFileToS3(hospitalDocs, folderName);
    }

    const otherDocs = formData.get('otherDocs') as File | null;
    if (otherDocs && otherDocs.size > 0) {
      otherDocsUrl = await uploadFileToS3(otherDocs, folderName);
    }

    const story = await prisma.story.create({
      data: {
        fullName,
        relationship,
        contactNumber,
        email: email || null,
        city,
        category,
        storyDescription,
        contactPreference,
        identityProofUrl,
        relevantDocsUrl,
        hospitalDocsUrl,
        otherDocsUrl,
        status: "pending",
      },
    });

    return NextResponse.json({ success: true, story }, { status: 201 });
  } catch (error: any) {
    console.error('Error creating story:', error);
    return NextResponse.json({ error: 'Failed to submit story' }, { status: 500 });
  }
}
