import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

const insertReturningId = vi.fn();
const insertValues = vi.fn(() => ({ $returningId: insertReturningId }));
const insert = vi.fn(() => ({ values: insertValues }));
const deleteWhere = vi.fn();
const deleteFrom = vi.fn(() => ({ where: deleteWhere }));
const sendMail = vi.fn();

vi.mock('$lib/server/db', () => ({
    db: { insert, delete: deleteFrom }
}));

vi.mock('$lib/server/schema', () => ({
    donationsTable: { __table: 'donations', id: { __col: 'id' } }
}));

vi.mock('drizzle-orm', () => ({
    eq: (col: unknown, val: unknown) => ({ __eq: [col, val] })
}));

vi.mock('nodemailer', () => ({
    default: {
        createTransport: vi.fn(() => ({ sendMail }))
    }
}));

vi.mock('dotenv', () => ({
    default: { config: vi.fn() }
}));

const UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

const buildRequest = (fields: Record<string, string>): Request => {
    const form = new FormData();
    for (const [key, value] of Object.entries(fields)) {
        form.set(key, value);
    }
    return new Request('http://localhost/donation?/donate', {
        method: 'POST',
        body: form
    });
};

const validFields = {
    gender: '1',
    age: '2',
    lang: '1',
    email: 'donor@example.com',
    country: 'de'
};

const setSmtpEnv = () => {
    process.env.SMTP_HOST = 'smtp.example.com';
    process.env.SMTP_PORT = '587';
    process.env.SMTP_USER = 'noreply@example.com';
    process.env.SMTP_PASS = 'secret';
};

const clearSmtpEnv = () => {
    delete process.env.SMTP_HOST;
    delete process.env.SMTP_PORT;
    delete process.env.SMTP_USER;
    delete process.env.SMTP_PASS;
    delete process.env.SMTP_SECURE;
};

const loadAction = async () => {
    vi.resetModules();
    const mod = await import('./+page.server');
    return mod.actions!.donate as (event: { request: Request }) => Promise<unknown>;
};

describe('donate action', () => {
    beforeEach(() => {
        delete process.env.BUILD_MODE;
        clearSmtpEnv();
        insert.mockClear();
        insertValues.mockClear();
        insertReturningId.mockReset();
        deleteFrom.mockClear();
        deleteWhere.mockReset();
        sendMail.mockReset();
    });

    afterEach(() => {
        clearSmtpEnv();
    });

    it('returns server_error fail when BUILD_MODE=true', async () => {
        process.env.BUILD_MODE = 'true';
        const donate = await loadAction();
        const result = (await donate({ request: buildRequest(validFields) })) as {
            status: number;
            data: { message: string };
        };
        expect(result.status).toBe(500);
        expect(result.data.message).toBe('server_error');
        expect(insert).not.toHaveBeenCalled();
        expect(sendMail).not.toHaveBeenCalled();
    });

    it('honeypot triggers silent success without insert or send', async () => {
        setSmtpEnv();
        const donate = await loadAction();
        const result = (await donate({
            request: buildRequest({ ...validFields, website: 'spam-bot' })
        })) as { success: boolean; donationId: string | null };
        expect(result.success).toBe(true);
        expect(result.donationId).toBeNull();
        expect(insert).not.toHaveBeenCalled();
        expect(sendMail).not.toHaveBeenCalled();
    });

    it('rejects out-of-range numeric codes with invalid_fields', async () => {
        setSmtpEnv();
        const donate = await loadAction();
        const result = (await donate({
            request: buildRequest({ ...validFields, gender: '99' })
        })) as { status: number; data: { message: string } };
        expect(result.status).toBe(400);
        expect(result.data.message).toBe('invalid_fields');
        expect(insert).not.toHaveBeenCalled();
    });

    it('rejects malformed email with invalid_email', async () => {
        setSmtpEnv();
        const donate = await loadAction();
        const result = (await donate({
            request: buildRequest({ ...validFields, email: 'not-an-email' })
        })) as { status: number; data: { message: string } };
        expect(result.status).toBe(400);
        expect(result.data.message).toBe('invalid_email');
        expect(insert).not.toHaveBeenCalled();
    });

    it('rejects email containing CRLF with invalid_email', async () => {
        setSmtpEnv();
        const donate = await loadAction();
        const result = (await donate({
            request: buildRequest({ ...validFields, email: 'a@b.com\r\nBcc: x@y.com' })
        })) as { status: number; data: { message: string } };
        expect(result.status).toBe(400);
        expect(result.data.message).toBe('invalid_email');
    });

    it('rejects non-2-letter country code with invalid_country', async () => {
        setSmtpEnv();
        const donate = await loadAction();
        const result = (await donate({
            request: buildRequest({ ...validFields, country: 'XYZ' })
        })) as { status: number; data: { message: string } };
        expect(result.status).toBe(400);
        expect(result.data.message).toBe('invalid_country');
    });

    it('returns server_error when SMTP env vars are missing', async () => {
        const donate = await loadAction();
        const result = (await donate({ request: buildRequest(validFields) })) as {
            status: number;
            data: { message: string };
        };
        expect(result.status).toBe(500);
        expect(result.data.message).toBe('server_error');
        expect(insert).not.toHaveBeenCalled();
    });

    it('returns db_error when insert fails', async () => {
        setSmtpEnv();
        insertReturningId.mockRejectedValueOnce(new Error('db down'));
        const donate = await loadAction();
        const result = (await donate({ request: buildRequest(validFields) })) as {
            status: number;
            data: { message: string };
        };
        expect(result.status).toBe(500);
        expect(result.data.message).toBe('db_error');
        expect(sendMail).not.toHaveBeenCalled();
    });

    it('rolls back inserted row on email failure and omits donationId', async () => {
        setSmtpEnv();
        insertReturningId.mockResolvedValueOnce([{ id: 42 }]);
        sendMail.mockRejectedValueOnce(new Error('smtp down'));
        deleteWhere.mockResolvedValueOnce(undefined);
        const donate = await loadAction();
        const result = (await donate({ request: buildRequest(validFields) })) as {
            status: number;
            data: { message: string; donationId?: unknown };
        };
        expect(result.status).toBe(500);
        expect(result.data.message).toBe('send_failed');
        expect(result.data.donationId).toBeUndefined();
        expect(deleteFrom).toHaveBeenCalledTimes(1);
        expect(deleteWhere).toHaveBeenCalledTimes(1);
    });

    it('surfaces donationId when rollback also fails', async () => {
        setSmtpEnv();
        insertReturningId.mockResolvedValueOnce([{ id: 99 }]);
        sendMail.mockRejectedValueOnce(new Error('smtp down'));
        deleteWhere.mockRejectedValueOnce(new Error('db down'));
        const donate = await loadAction();
        const result = (await donate({ request: buildRequest(validFields) })) as {
            status: number;
            data: { message: string; donationId: string };
        };
        expect(result.status).toBe(500);
        expect(result.data.message).toBe('send_failed');
        expect(result.data.donationId).toMatch(UUID_PATTERN);
    });

    it('inserts with uuid, sends email containing uuid and labels, returns uuid donationId', async () => {
        setSmtpEnv();
        insertReturningId.mockResolvedValueOnce([{ id: 7 }]);
        sendMail.mockResolvedValueOnce({ accepted: ['donor@example.com'] });

        const donate = await loadAction();
        const result = (await donate({ request: buildRequest(validFields) })) as {
            success: boolean;
            donationId: string;
        };

        expect(result.success).toBe(true);
        expect(result.donationId).toMatch(UUID_PATTERN);

        expect(insertValues).toHaveBeenCalledWith({
            uuid: result.donationId,
            gender: 1,
            age: 2,
            lang: 1,
            email: 'donor@example.com',
            country: 'DE'
        });

        expect(sendMail).toHaveBeenCalledWith(
            expect.objectContaining({
                to: 'donor@example.com',
                from: { name: 'MailCom Donation', address: 'noreply@example.com' },
                subject: '[Donation] Confirmation',
                text: expect.stringContaining(`Donation ID: ${result.donationId}`)
            })
        );

        const mailText = sendMail.mock.calls[0]?.[0]?.text as string;
        expect(mailText).toContain('Country: DE');
        expect(mailText).toContain('Email: donor@example.com');
        expect(mailText).toContain('Male');
        expect(mailText).toContain('21-30');
        expect(mailText).toContain('Native speaker');
        expect(deleteFrom).not.toHaveBeenCalled();
    });
});
