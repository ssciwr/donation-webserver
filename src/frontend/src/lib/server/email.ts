import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const hasHeaderControlChars = (value: string): boolean =>
  /[\r\n]/.test(value);

const isAlphaNumeric = (char: string): boolean => {
  const code = char.charCodeAt(0);
  return (
    (code >= 48 && code <= 57) ||
    (code >= 65 && code <= 90) ||
    (code >= 97 && code <= 122)
  );
};

const isValidDomainChar = (char: string): boolean =>
  isAlphaNumeric(char) || char === "-" || char === ".";

export const isValidEmail = (value: string): boolean => {
  const atIndex = value.indexOf("@");
  if (
    atIndex <= 0 ||
    atIndex !== value.lastIndexOf("@") ||
    atIndex >= value.length - 1
  ) {
    return false;
  }

  const localPart = value.slice(0, atIndex);
  const domainPart = value.slice(atIndex + 1);

  if (
    localPart.startsWith(".") ||
    localPart.endsWith(".") ||
    domainPart.startsWith(".") ||
    domainPart.endsWith(".") ||
    !domainPart.includes(".") ||
    localPart.includes("..") ||
    domainPart.includes("..")
  ) {
    return false;
  }

  for (const char of value) {
    if (char === "@") {
      continue;
    }
    const code = char.charCodeAt(0);
    if (code <= 32 || code === 127) {
      return false;
    }
  }

  for (const char of domainPart) {
    if (!isValidDomainChar(char)) {
      return false;
    }
  }

  return true;
};

type SmtpConfig = {
  host: string;
  port: number;
  secure: boolean;
  auth: { user: string; pass: string };
};

type SmtpConfigResult =
  | { isValid: true; user: string; config: SmtpConfig }
  | { isValid: false; reason: string };

export const getSmtpConfig = (): SmtpConfigResult => {
  const requiredVars = [
    "SMTP_HOST",
    "SMTP_PORT",
    "SMTP_USER",
    "SMTP_PASS",
  ] as const;
  const missingVars = requiredVars.filter((name) => {
    const value = process.env[name];
    return !value || value.trim() === "";
  });

  if (missingVars.length > 0) {
    return {
      isValid: false,
      reason: `Missing required SMTP env vars: ${missingVars.join(", ")}`,
    };
  }

  const smtpPort = Number.parseInt(process.env.SMTP_PORT as string, 10);
  if (!Number.isFinite(smtpPort) || smtpPort <= 0) {
    return {
      isValid: false,
      reason: `Invalid SMTP_PORT value: ${process.env.SMTP_PORT}`,
    };
  }

  const user = process.env.SMTP_USER as string;
  return {
    isValid: true,
    user,
    config: {
      host: process.env.SMTP_HOST as string,
      port: smtpPort,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user,
        pass: process.env.SMTP_PASS as string,
      },
    },
  };
};

export const createTransporter = (config: SmtpConfig) =>
  nodemailer.createTransport({
    ...config,
    requireTLS: true,
    tls: {
      minVersion: "TLSv1.2",
    },
  });
