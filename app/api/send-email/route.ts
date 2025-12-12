import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, companyName, employeeSize, services, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !companyName || !employeeSize) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate environment variables
    // GoDaddy email SMTP settings:
    // - For GoDaddy Workspace Email: smtpout.secureserver.net (port 587 or 465)
    // - For Microsoft 365 through GoDaddy: smtp.office365.com (port 587)
    const smtpHost = process.env.SMTP_HOST || "smtpout.secureserver.net";
    const smtpPort = parseInt(process.env.SMTP_PORT || "587");
    const smtpUser = process.env.SMTP_USER || "info@w2wadvisors.in";
    const smtpPassword = process.env.SMTP_PASSWORD || "";

    if (!smtpPassword) {
      console.error("SMTP_PASSWORD is not set in environment variables");
      return NextResponse.json(
        { error: "Email service is not configured. Please contact the administrator." },
        { status: 500 }
      );
    }

    // Log configuration (without password) for debugging
    console.log("SMTP Configuration:", {
      host: smtpHost,
      port: smtpPort,
      user: smtpUser,
      passwordSet: !!smtpPassword,
      passwordLength: smtpPassword.length,
    });

    // Create transporter with SMTP configuration for GoDaddy email
    // GoDaddy Workspace Email typically uses:
    // - smtpout.secureserver.net
    // - Port 587 (STARTTLS) or 465 (SSL)
    // - Full email address as username
    const isSecure = smtpPort === 465;
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: isSecure, // true for SSL (port 465), false for STARTTLS (port 587)
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
      tls: {
        rejectUnauthorized: false,
        ciphers: "SSLv3",
      },
      requireTLS: !isSecure, // Require STARTTLS only if not using SSL
      connectionTimeout: 30000, // 30 seconds
      greetingTimeout: 30000,
      socketTimeout: 30000,
      debug: process.env.NODE_ENV === "development", // Enable debug in development
      logger: process.env.NODE_ENV === "development", // Enable logging in development
    });

    // Verify connection before sending
    try {
      await transporter.verify();
      console.log("SMTP connection verified successfully");
    } catch (verifyError: any) {
      console.error("SMTP verification failed:", {
        message: verifyError.message,
        code: verifyError.code,
        command: verifyError.command,
        response: verifyError.response,
      });
      // Re-throw to be caught by outer catch block
      throw verifyError;
    }

    // Format services list
    const servicesList = services && services.length > 0 
      ? services.join(", ") 
      : "None selected";

    // Email content
    const mailOptions = {
      from: smtpUser,
      to: smtpUser, // Send to the same email
      replyTo: email,
      subject: `New Meeting Request from ${name} - ${companyName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #166534; border-bottom: 2px solid #166534; padding-bottom: 10px;">
            New Meeting Request
          </h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
            <p><strong>Company Name:</strong> ${companyName}</p>
            <p><strong>Employee Size:</strong> ${employeeSize}</p>
          </div>

          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Services of Interest</h3>
            <p>${servicesList}</p>
          </div>

          ${message ? `
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          ` : ''}

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>This email was sent from the Work Well Advisors website contact form.</p>
            <p>You can reply directly to this email to respond to ${name}.</p>
          </div>
        </div>
      `,
      text: `
New Meeting Request

Contact Information:
- Name: ${name}
- Email: ${email}
- Phone: ${phone}
- Company Name: ${companyName}
- Employee Size: ${employeeSize}

Services of Interest:
${servicesList}

${message ? `Message:\n${message}\n` : ''}

---
This email was sent from the Work Well Advisors website contact form.
You can reply directly to this email to respond to ${name}.
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error sending email:", error);
    console.error("Error details:", {
      message: error.message,
      code: error.code,
      command: error.command,
      response: error.response,
    });
    
    // Provide user-friendly error message
    let errorMessage = "Failed to send email. Please try again later.";
    if (error.code === "EAUTH") {
      errorMessage = "Authentication failed. If you have MFA enabled, please use an app-specific password. Otherwise, please verify your email and password are correct.";
    } else if (error.code === "ECONNECTION") {
      errorMessage = "Connection failed. Please check your internet connection.";
    } else if (error.code === "ETIMEDOUT") {
      errorMessage = "Connection timed out. Please try again later.";
    }
    
    return NextResponse.json(
      { 
        error: errorMessage, 
        details: process.env.NODE_ENV === "development" ? {
          message: error.message,
          code: error.code,
          command: error.command,
        } : undefined 
      },
      { status: 500 }
    );
  }
}

