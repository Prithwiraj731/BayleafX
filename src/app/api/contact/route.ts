import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, plan, phone } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const gmailUser = process.env.GMAIL_USER || 'bayleafxtechnologies@gmail.com';
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
    const adminEmail = process.env.ADMIN_EMAIL || gmailUser;

    // If Gmail App Password is configured, send both emails via Nodemailer
    if (gmailAppPassword) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: gmailUser,
          pass: gmailAppPassword,
        },
      });

      const planLabel = plan ? ` [${plan}]` : '';

      // 1. Send Admin Notification Email
      await transporter.sendMail({
        from: `"BayleafX Website" <${gmailUser}>`,
        to: adminEmail,
        replyTo: email,
        subject: `⚡ New Project Inquiry${planLabel} from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
            <h2 style="color: #1B4332; margin-top: 0;">New Project Inquiry</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #1B4332;">${email}</a></p>
            ${phone ? `<p><strong>Phone / WhatsApp:</strong> ${phone}</p>` : ''}
            ${plan ? `<p><strong>Selected Plan:</strong> <span style="background-color: #e8f5e9; color: #1B4332; padding: 4px 10px; border-radius: 6px; font-weight: bold; font-size: 13px;">${plan}</span></p>` : ''}
            <p><strong>Submitted At:</strong> ${new Date().toUTCString()}</p>
            <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
            <p style="font-weight: bold; color: #1e293b;">Project Details:</p>
            <div style="background-color: #f8fafc; padding: 16px; border-radius: 8px; border-left: 4px solid #1B4332; color: #334155; line-height: 1.6;">
              ${message.replace(/\n/g, '<br/>')}
            </div>
            <p style="color: #64748b; font-size: 12px; margin-top: 24px;">Click &quot;Reply&quot; to respond directly to ${name} (${email}).</p>
          </div>
        `,
      });

      // 2. Send User Confirmation Auto-Reply Email
      await transporter.sendMail({
        from: `"BayleafX Team" <${gmailUser}>`,
        to: email,
        replyTo: gmailUser,
        subject: `We received your inquiry — BayleafX`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
            <div style="margin-bottom: 20px;">
              <h2 style="color: #1B4332; margin: 0 0 8px 0;">Thank you for reaching out, ${name}!</h2>
              <p style="color: #64748b; font-size: 14px; margin: 0;">We have received your project inquiry.</p>
            </div>
            <p style="color: #334155; line-height: 1.6;">
              Our engineering and design team is reviewing your requirements. We will get back to you with a clear roadmap, technical recommendations, and an estimate within <strong>24 hours</strong>.
            </p>
            ${plan ? `<p style="color: #1e293b; font-size: 14px; margin: 12px 0;"><strong>Selected Plan:</strong> <span style="color: #1B4332; font-weight: bold;">${plan}</span></p>` : ''}
            <div style="background-color: #f8fafc; padding: 16px; border-radius: 8px; margin: 20px 0; border: 1px solid #e2e8f0;">
              <p style="margin: 0 0 8px; font-weight: bold; color: #1B4332; font-size: 13px;">A copy of your submitted message:</p>
              <p style="margin: 0; color: #475569; font-size: 14px; line-height: 1.5;">${message.replace(/\n/g, '<br/>')}</p>
            </div>
            <p style="color: #334155; line-height: 1.6;">
              If you have any urgent questions or updates, feel free to reply directly to this email or reach us on WhatsApp at <a href="https://wa.me/917070072227" style="color: #1B4332; font-weight: bold;">+91 70700 72227</a>.
            </p>
            <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
            <p style="color: #475569; font-size: 13px; margin: 0;">
              Warm regards,<br />
              <strong>The BayleafX Team</strong><br />
              <a href="mailto:${gmailUser}" style="color: #1B4332;">${gmailUser}</a>
            </p>
          </div>
        `,
      });
    } else {
      console.log('--- [BAYLEAFX CONTACT SUBMISSION (GMAIL)] ---');
      console.log(`From: ${name} <${email}>`);
      console.log(`To Admin: ${adminEmail}`);
      console.log(`Message: ${message}`);
      console.log('NOTE: Set GMAIL_APP_PASSWORD in .env.local to dispatch live emails via Gmail.');
      console.log('---------------------------------------------');
    }

    return NextResponse.json({
      success: true,
      message: 'Your inquiry has been submitted! A confirmation copy has been sent to your email.',
    });
  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { error: 'Failed to send inquiry. Please try again or reach us on WhatsApp.' },
      { status: 500 }
    );
  }
}
