import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export const prerender = false;

const getSmtpConfig = () => {
    const requiredVars = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS'] as const;
    const missingVars = requiredVars.filter((name) => {
        const value = process.env[name];
        return !value || value.trim() === '';
    });

    if (missingVars.length > 0) {
        return {
            isValid: false as const,
            reason: `Missing required SMTP env vars: ${missingVars.join(', ')}`
        };
    }

    const smtpPort = Number.parseInt(process.env.SMTP_PORT as string, 10);
    if (!Number.isFinite(smtpPort) || smtpPort <= 0) {
        return {
            isValid: false as const,
            reason: `Invalid SMTP_PORT value: ${process.env.SMTP_PORT}`
        };
    }

    return {
        isValid: true as const,
        config: {
            host: process.env.SMTP_HOST as string,
            port: smtpPort,
            secure: process.env.SMTP_SECURE === 'true',
            auth: {
                user: process.env.SMTP_USER as string,
                pass: process.env.SMTP_PASS as string
            }
        }
    };
};

export const actions: Actions = {
    contact: async ({ request }) => {
        if (process.env.BUILD_MODE === 'true') {
            return fail(500, { success: false, message: 'server_error' });
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
            return fail(400, { success: false, message: 'missing_fields' });
        }

        const toEmail = process.env.CONTACT_TO_EMAIL;
        if (!toEmail) {
            console.error('CONTACT_TO_EMAIL not configured');
            return fail(500, { success: false, message: 'server_error' });
        }

        const smtpConfig = getSmtpConfig();
        if (!smtpConfig.isValid) {
            console.error(`SMTP configuration error: ${smtpConfig.reason}`);
            return fail(500, { success: false, message: 'server_error' });
        }

        const transporter = nodemailer.createTransport(smtpConfig.config);

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
            return fail(500, { success: false, message: 'send_failed' });
        }
    }
};
