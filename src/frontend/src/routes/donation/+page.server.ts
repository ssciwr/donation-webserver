import { randomUUID } from "node:crypto";
import { eq } from "drizzle-orm";
import { db } from "$lib/server/db";
import type { Actions, PageServerLoad } from "./$types";
import { donationsTable } from "$lib/server/schema";
import { fail } from "@sveltejs/kit";
import {
  createTransporter,
  getSmtpConfig,
  hasHeaderControlChars,
  isValidEmail,
} from "$lib/server/email";

export const prerender = false;

const MAX_EMAIL_LENGTH = 254;
const COUNTRY_CODE_PATTERN = /^[A-Za-z]{2}$/;

const GENDER_LABELS: Record<number, string> = {
  0: "No answer",
  1: "Male",
  2: "Female",
  3: "Diverse",
};

const AGE_LABELS: Record<number, string> = {
  0: "No answer",
  1: "Under 20",
  2: "21-30",
  3: "31-40",
  4: "41-50",
  5: "51-60",
  6: "Over 60",
};

const LANG_LABELS: Record<number, string> = {
  0: "No answer",
  1: "Native speaker",
  2: "Non-native speaker",
};

const parseCode = (
  raw: FormDataEntryValue | null,
  allowed: number[],
): number | null => {
  const value = Number(raw);
  if (!Number.isInteger(value) || !allowed.includes(value)) {
    return null;
  }
  return value;
};

export const load: PageServerLoad = async () => {
  return {};
};

export const actions: Actions = {
  donate: async ({ request }) => {
    if (process.env.BUILD_MODE === "true") {
      return fail(500, { success: false, message: "server_error" });
    }

    const data = await request.formData();
    const honeypot = String(data.get("website") || "").trim();
    if (honeypot) {
      return { success: true, donationId: null };
    }

    const gender = parseCode(data.get("gender"), [0, 1, 2, 3]);
    const age = parseCode(data.get("age"), [0, 1, 2, 3, 4, 5, 6]);
    const lang = parseCode(data.get("lang"), [0, 1, 2]);
    const email = String(data.get("email") || "").trim();
    const country = String(data.get("country") || "")
      .trim()
      .toUpperCase();

    if (gender === null || age === null || lang === null) {
      return fail(400, { success: false, message: "invalid_fields" });
    }

    if (
      !email ||
      email.length > MAX_EMAIL_LENGTH ||
      hasHeaderControlChars(email) ||
      !isValidEmail(email)
    ) {
      return fail(400, { success: false, message: "invalid_email" });
    }

    if (!COUNTRY_CODE_PATTERN.test(country)) {
      return fail(400, { success: false, message: "invalid_country" });
    }

    const smtpConfig = getSmtpConfig();
    if (!smtpConfig.isValid) {
      console.error(`SMTP configuration error: ${smtpConfig.reason}`);
      return fail(500, { success: false, message: "server_error" });
    }

    const donationUuid = randomUUID();
    let insertedRowId: number;
    try {
      const inserted = await db
        .insert(donationsTable)
        .values({ uuid: donationUuid, gender, age, lang, email, country })
        .$returningId();
      const idCandidate = inserted[0]?.id;
      if (typeof idCandidate !== "number") {
        throw new Error("Insert returned no id");
      }
      insertedRowId = idCandidate;
    } catch (err) {
      console.error("Failed to record donation:", err);
      return fail(500, { success: false, message: "db_error" });
    }

    const transporter = createTransporter(smtpConfig.config);
    const body = [
      "Thank you for your donation.",
      "",
      "Your submission has been recorded with the following information:",
      "",
      `Donation ID: ${donationUuid}`,
      `Gender: ${GENDER_LABELS[gender]}`,
      `Age: ${AGE_LABELS[age]}`,
      `Native language: ${LANG_LABELS[lang]}`,
      `Country: ${country}`,
      `Email: ${email}`,
      "",
      "Keep this ID. You need it to revoke your donation later.",
    ].join("\n");

    try {
      await transporter.sendMail({
        from: { name: "MailCom Donation", address: smtpConfig.user },
        to: email,
        bcc: smtpConfig.user,
        subject: "[Donation] Confirmation",
        text: body,
      });
    } catch (err) {
      console.error("Failed to send donation confirmation email:", err);
      try {
        await db
          .delete(donationsTable)
          .where(eq(donationsTable.id, insertedRowId));
        return fail(500, { success: false, message: "send_failed" });
      } catch (deleteErr) {
        console.error("Failed to roll back donation row:", deleteErr);
        return fail(500, {
          success: false,
          message: "send_failed",
          donationId: donationUuid,
        });
      }
    }

    return { success: true, donationId: donationUuid };
  },
};
