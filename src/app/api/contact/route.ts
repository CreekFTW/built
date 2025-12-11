import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;
    const fileEntries = formData.getAll('files') as File[];

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Process file attachments
    const attachments = await Promise.all(
      fileEntries
        .filter(file => file.size > 0) // Filter out empty files
        .map(async (file) => {
          const bytes = await file.arrayBuffer();
          const buffer = Buffer.from(bytes);

          return {
            filename: file.name,
            content: buffer,
          };
        })
    );

    // Validate file count
    if (attachments.length > 3) {
      return NextResponse.json(
        { error: 'Maximum 3 files allowed' },
        { status: 400 }
      );
    }

    // Validate file sizes (10MB max per file)
    const maxSize = 10 * 1024 * 1024; // 10MB
    const oversizedFiles = attachments.filter(att => att.content.length > maxSize);
    if (oversizedFiles.length > 0) {
      return NextResponse.json(
        { error: 'Each file must be less than 10MB' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const fromDomain = process.env.FROM_EMAIL_DOMAIN || 'resend.dev';
    const fromName = process.env.FROM_EMAIL_NAME || 'Built Contact Form';
    const fromEmail = fromDomain === 'resend.dev' ? 'onboarding@resend.dev' : `contact@${fromDomain}`;

    const { data, error } = await resend.emails.send({
      from: `${fromName} <${fromEmail}>`,
      to: process.env.EMAIL || 'njames.programming@gmail.com',
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            ${phone ? `<p style="margin: 10px 0;"><strong>Phone:</strong> ${phone}</p>` : ''}
            <p style="margin: 10px 0;"><strong>Subject:</strong> ${subject}</p>
          </div>
          <div style="margin: 20px 0;">
            <h3 style="color: #333;">Message:</h3>
            <p style="line-height: 1.6; color: #555;">${message}</p>
          </div>
          ${attachments.length > 0 ? `
          <div style="margin: 20px 0;">
            <h3 style="color: #333;">Attachments:</h3>
            <ul style="list-style: none; padding: 0;">
              ${attachments.map(att => `<li style="color: #555;">📎 ${att.filename}</li>`).join('')}
            </ul>
          </div>
          ` : ''}
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <p style="color: #888; font-size: 12px;">This email was sent from the Built contact form.</p>
        </div>
      `,
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Email sent successfully', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
