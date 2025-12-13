# Email Setup for Production Deployment

## Problem
Email works on localhost but not in production (w2wadvisors.in). This is almost always because **environment variables are not set in your production deployment**.

## Solution: Set Environment Variables in Production

### For Vercel Deployment

1. **Go to your Vercel Dashboard**
   - Visit https://vercel.com/dashboard
   - Select your project (w2wadvisors.in)

2. **Navigate to Settings → Environment Variables**
   - Click on your project
   - Go to **Settings** tab
   - Click on **Environment Variables** in the sidebar

3. **Add the following environment variables:**

   ```
   SMTP_HOST=smtpout.secureserver.net
   SMTP_PORT=587
   SMTP_USER=info@w2wadvisors.in
   SMTP_PASSWORD=your_email_password_here
   ```

4. **Important:**
   - Make sure to select **Production**, **Preview**, and **Development** environments (or at least Production)
   - After adding variables, **redeploy your application** for changes to take effect

5. **Redeploy:**
   - Go to **Deployments** tab
   - Click the three dots (⋯) on the latest deployment
   - Select **Redeploy**

### For Other Hosting Platforms

#### Netlify
1. Go to Site settings → Environment variables
2. Add the same variables as above
3. Redeploy

#### AWS/EC2/Other VPS
1. Create a `.env.production` file or set environment variables in your process manager (PM2, systemd, etc.)
2. Make sure the file is in your project root (but NOT committed to git)
3. Restart your application

#### Docker
1. Add environment variables to your `docker-compose.yml` or use `-e` flags
2. Or create a `.env` file in the same directory as docker-compose.yml

## Required Environment Variables

```env
SMTP_HOST=smtpout.secureserver.net
SMTP_PORT=587
SMTP_USER=info@w2wadvisors.in
SMTP_PASSWORD=your_actual_password_here
```

### Alternative SMTP Settings

If `smtpout.secureserver.net` doesn't work, try:

**For Microsoft 365 through GoDaddy:**
```env
SMTP_HOST=smtp.office365.com
SMTP_PORT=587
SMTP_USER=info@w2wadvisors.in
SMTP_PASSWORD=your_password
```

**If port 587 doesn't work, try port 465 with SSL:**
```env
SMTP_HOST=smtpout.secureserver.net
SMTP_PORT=465
SMTP_USER=info@w2wadvisors.in
SMTP_PASSWORD=your_password
```

## Verification Steps

1. **Check Environment Variables are Set:**
   - In Vercel: Settings → Environment Variables (should show all 4 variables)
   - In other platforms: Check your environment variable configuration

2. **Check Application Logs:**
   - In Vercel: Go to Deployments → Click on a deployment → View Function Logs
   - Look for "SMTP Configuration" log entry
   - Check for any error messages

3. **Test the Email Endpoint:**
   - Try submitting the contact form on your production site
   - Check the browser console and network tab for errors
   - Check server logs for detailed error messages

## Common Issues

### Issue: "Email service is not configured"
**Solution:** `SMTP_PASSWORD` environment variable is not set in production.

### Issue: "Authentication failed" (EAUTH)
**Possible causes:**
- Wrong password
- Wrong SMTP host (try `smtp.office365.com` if using Microsoft 365)
- MFA enabled (use app-specific password)
- Account restrictions

**Solution:**
1. Verify password is correct
2. Try logging into webmail to confirm credentials work
3. If MFA is enabled, create an app-specific password

### Issue: "Connection failed" (ECONNECTION)
**Possible causes:**
- Wrong SMTP host
- Firewall blocking SMTP ports
- Network issues

**Solution:**
1. Verify SMTP host is correct
2. Try alternative SMTP settings (see above)
3. Check if your hosting provider blocks SMTP ports

### Issue: "Connection timed out" (ETIMEDOUT)
**Possible causes:**
- Wrong SMTP host or port
- Network timeout

**Solution:**
1. Try different SMTP settings
2. Check GoDaddy email settings

## Debugging Production Issues

The email route now logs detailed information to help debug issues:

1. **Check Vercel Function Logs:**
   - Go to Vercel Dashboard → Your Project → Deployments
   - Click on a deployment → View Function Logs
   - Look for "SMTP Configuration" and error messages

2. **What to Look For:**
   - `passwordSet: false` → Environment variable not set
   - `EAUTH` error → Authentication issue
   - `ECONNECTION` error → Connection issue
   - `ETIMEDOUT` error → Timeout issue

## Security Notes

- ✅ **Never commit** `.env` files or environment variables to git
- ✅ Use **app-specific passwords** if MFA is enabled
- ✅ **Rotate passwords** regularly
- ✅ Environment variables in Vercel are encrypted at rest

## Next Steps After Setup

1. Set all environment variables in your production platform
2. Redeploy your application
3. Test the contact form on production
4. Check logs to verify it's working
5. Monitor for any errors

## Still Having Issues?

1. Check the application logs (see Debugging section above)
2. Verify environment variables are set correctly
3. Try alternative SMTP settings
4. Contact GoDaddy support to verify SMTP settings for your email account
5. Check if your hosting provider has any SMTP restrictions

