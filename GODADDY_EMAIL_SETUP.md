# GoDaddy Email SMTP Configuration

## Current Configuration
- **SMTP Host:** smtpout.secureserver.net
- **Port:** 587
- **Security:** STARTTLS
- **Username:** info@w2wadvisor.in
- **Password:** (set in .env.local)

## GoDaddy Email Types

GoDaddy offers different email services with different SMTP settings:

### Option 1: GoDaddy Workspace Email
- **SMTP Host:** `smtpout.secureserver.net`
- **Port:** `587` (STARTTLS) or `465` (SSL)
- **Username:** Full email address (info@w2wadvisor.in)
- **Password:** Your email account password

### Option 2: Microsoft 365 through GoDaddy
- **SMTP Host:** `smtp.office365.com`
- **Port:** `587` (STARTTLS)
- **Username:** Full email address (info@w2wadvisor.in)
- **Password:** Your email account password (or app-specific password if MFA is enabled)

## Troubleshooting Authentication Errors

### Step 1: Verify Email Type
1. Log into your GoDaddy account
2. Go to Email & Office Dashboard
3. Check what type of email you have (Workspace Email or Microsoft 365)

### Step 2: Try Different SMTP Settings

**For GoDaddy Workspace Email, try:**
```env
SMTP_HOST=smtpout.secureserver.net
SMTP_PORT=587
```

**If port 587 doesn't work, try port 465 with SSL:**
```env
SMTP_HOST=smtpout.secureserver.net
SMTP_PORT=465
```

**For Microsoft 365 through GoDaddy:**
```env
SMTP_HOST=smtp.office365.com
SMTP_PORT=587
```

### Step 3: Verify Credentials
1. Make sure the email address is correct: `info@w2wadvisor.in`
2. Verify the password is correct: `Arjun123!`
3. Try logging into webmail to confirm credentials work

### Step 4: Check GoDaddy Email Settings
1. Log into GoDaddy Email & Office Dashboard
2. Go to your email account settings
3. Check if SMTP is enabled
4. Verify there are no restrictions on the account

### Step 5: Contact GoDaddy Support
If authentication continues to fail:
1. Contact GoDaddy support
2. Ask for the correct SMTP settings for your email account
3. Verify if there are any account restrictions
4. Ask if SMTP authentication is enabled for your account

## Testing

After updating `.env.local`:
1. **Restart your Next.js server** (important!)
2. Test using curl:
   ```bash
   curl -X POST http://localhost:3000/api/send-email \
     -H "Content-Type: application/json" \
     -d '{"name":"Test","email":"test@example.com","phone":"123","companyName":"Test","employeeSize":"1-10","services":[],"message":"Test"}'
   ```

## Common Issues

- **535 Authentication Failed:** Wrong password, wrong SMTP host, or account restrictions
- **Connection timeout:** Wrong SMTP host or port
- **SSL/TLS errors:** Wrong port or security settings

## Next Steps

1. Check your GoDaddy account to determine email type
2. Update `.env.local` with the correct SMTP settings
3. Restart the server
4. Test again

