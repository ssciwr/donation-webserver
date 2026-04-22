import type { Actions } from './$types';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export const prerender = false;

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 587,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
});

export const actions: Actions = {
    contact: async ({ request }) => {
        if (process.env.BUILD_MODE === 'true') {
            return { success: false, message: 'Build mode: action skipped' };
        }

        const data = await request.formData();
        const name = String(data.get('name') || '').trim();
        const email = String(data.get('email') || '').trim();
        const subject = String(data.get('subject') || '').trim();
        const message = String(data.get('message') || '').trim();
        const honeypot = String(data.get('website') || '').trim();

        if (honeypot) {
            return { success: true };
        }

        if (!name || !email || !subject || !message) {
            return { success: false, message: 'missing_fields' };
        }

        const toEmail = process.env.CONTACT_TO_EMAIL;
        if (!toEmail) {
            console.error('CONTACT_TO_EMAIL not configured');
            return { success: false, message: 'server_error' };
        }

        try {
            await transporter.sendMail({
                from: `"${name}" <${process.env.SMTP_USER}>`,
                replyTo: email,
                to: toEmail,
                subject: `[Contact Form] ${subject}`,
                text: `From: ${name} <${email}>\n\n${message}`
            });
            return { success: true };
        } catch (err) {
            console.error('Failed to send contact email:', err);
            return { success: false, message: 'send_failed' };
        }
    }
};
