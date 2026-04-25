import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

const requiredEnvVars = [
    'SMTP_HOST',
    'SMTP_PORT',
    'SMTP_USER',
    'SMTP_PASS',
    'CONTACT_FROM_EMAIL'
] as const;

type ContactPayload = {
    name?: string;
    email?: string;
    project?: string;
    message?: string;
};

const escapeHtml = (value: string) =>
    value
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll('\'', '&#39;');

export async function POST(request: Request) {
    try {
        const payload = (await request.json()) as ContactPayload;
        const name = payload.name?.trim();
        const email = payload.email?.trim();
        const project = payload.project?.trim() || 'Not provided';
        const message = payload.message?.trim();

        if (!name || !email || !message) {
            return NextResponse.json(
                { message: 'Name, email, and message are required.' },
                { status: 400 }
            );
        }

        const missingEnvVars = requiredEnvVars.filter(
            (envVar) => !process.env[envVar]
        );

        if (missingEnvVars.length > 0) {
            return NextResponse.json(
                {
                    message:
                        'Contact form email is not configured yet. Please add SMTP environment variables.'
                },
                { status: 500 }
            );
        }

        const safeName = escapeHtml(name);
        const safeEmail = escapeHtml(email);
        const safeProject = escapeHtml(project);
        const safeMessage = escapeHtml(message);

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: Number(process.env.SMTP_PORT) === 465,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        });

        await transporter.sendMail({
            from: process.env.CONTACT_FROM_EMAIL,
            to: 'raydedon@gmail.com',
            replyTo: email,
            subject: `Portfolio enquiry from ${name}`,
            text: [
                `Name: ${name}`,
                `Email: ${email}`,
                `Project: ${project}`,
                '',
                'Message:',
                message
            ].join('\n'),
            html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
                    <h2 style="margin-bottom: 16px;">New portfolio contact message</h2>
                    <p><strong>Name:</strong> ${safeName}</p>
                    <p><strong>Email:</strong> ${safeEmail}</p>
                    <p><strong>Project:</strong> ${safeProject}</p>
                    <p><strong>Message:</strong></p>
                    <p style="white-space: pre-wrap;">${safeMessage}</p>
                </div>
            `
        });

        return NextResponse.json({ message: 'Email sent successfully.' });
    } catch {
        return NextResponse.json(
            { message: 'Failed to send email. Please try again later.' },
            { status: 500 }
        );
    }
}
