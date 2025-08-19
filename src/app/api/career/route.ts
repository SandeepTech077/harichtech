
import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    const fullName = formData.get('fullName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const jobTitle = formData.get('jobTitle') as string;
    const resume = formData.get('resume') as File;

    if (!fullName || !email ||!jobTitle || !phone || !resume) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];
    
    if (!allowedTypes.includes(resume.type)) {
      return NextResponse.json(
        { error: 'Invalid file type. Please upload PDF or Word document.' },
        { status: 400 }
      );
    }

    // Validate file size (5MB)
    if (resume.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { error: 'File size too large. Maximum 5MB allowed.' },
        { status: 400 }
      );
    }

    const uploadsDir = path.join(process.cwd(), 'uploads');
    try {
      await mkdir(uploadsDir, { recursive: true });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
    }

    const timestamp = Date.now();
    const fileExtension = resume.name.split('.').pop();
    const fileName = `resume_${timestamp}_${fullName.replace(/\s+/g, '_')}.${fileExtension}`;
    const filePath = path.join(uploadsDir, fileName);

    const buffer = Buffer.from(await resume.arrayBuffer());
    await writeFile(filePath, buffer);



    return NextResponse.json(
      { 
        message: 'Application submitted successfully',
        applicationId: timestamp // You might generate a proper ID
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing application:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
