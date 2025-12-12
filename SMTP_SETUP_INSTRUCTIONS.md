# SMTP Email Setup Instructions

## Current Configuration
- **SMTP Host:** smtp.office365.com
- **Port:** 587
- **Security:** STARTTLS
- **Username:** info@w2wadvisor.in
- **Password:** (set in .env.local)

## Authentication Error Fix

If you're getting "Authentication failed" errors, follow these steps:

### Option 1: Use App-Specific Password (Recommended if MFA is enabled)

1. Go to https://account.microsoft.com/security
2. Sign in with your Microsoft account (info@w2wadvisor.in)
3. Navigate to **Security** → **Advanced security options**
4. Under **App passwords**, click **Create a new app password**
5. Give it a name (e.g., "Website Contact Form")
6. Copy the generated app password
7. Update `.env.local` with the new app password:
   ```
   SMTP_PASSWORD=your_app_specific_password_here
   ```
8. Restart your Next.js server

### Option 2: Verify Account Settings

1. Make sure the email account exists and is active
2. Verify the password is correct
3. Check if the account has any restrictions
4. Ensure SMTP is enabled for the account

### Option 3: Check Domain Configuration

If your email is hosted on a custom domain (w2wadvisor.in), you may need to:
1. Verify the domain is properly configured with Office 365
2. Check if SMTP authentication is enabled for your domain
3. Contact your email administrator if needed

### Option 4: Alternative SMTP Settings

If Office 365 continues to fail, you might need to:
1. Check if your email provider uses different SMTP settings
2. Verify if you need to use a different port (465 for SSL)
3. Check if your hosting provider has specific SMTP requirements

## Testing

After updating the configuration:
1. Restart the Next.js development server
2. Try submitting the contact form
3. Check the server console for detailed error messages
4. Verify the email is received

## Troubleshooting

- **Error: EAUTH** - Authentication failed. Check username/password or use app-specific password.
- **Error: ECONNECTION** - Cannot connect to SMTP server. Check network/firewall settings.
- **Error: ETIMEDOUT** - Connection timed out. Check SMTP host and port settings.

## Security Notes

- Never commit `.env.local` to version control
- Use app-specific passwords instead of your main account password
- Regularly rotate passwords for security

