import { NextResponse } from "next/server";

export async function GET() {
  // This endpoint helps diagnose email configuration issues
  const smtpHost = process.env.SMTP_HOST || "smtpout.secureserver.net";
  const smtpPort = process.env.SMTP_PORT || "587";
  const smtpUser = process.env.SMTP_USER || "info@w2wadvisors.in";
  const smtpPassword = process.env.SMTP_PASSWORD || "";

  const status = {
    configured: !!smtpPassword,
    environment: process.env.NODE_ENV,
    smtpHost,
    smtpPort,
    smtpUser,
    passwordSet: !!smtpPassword,
    passwordLength: smtpPassword.length,
    message: smtpPassword
      ? "Email configuration appears to be set. Check server logs for detailed errors."
      : "SMTP_PASSWORD environment variable is not set. Please configure it in your deployment platform.",
  };

  return NextResponse.json(status, {
    status: smtpPassword ? 200 : 500,
  });
}

