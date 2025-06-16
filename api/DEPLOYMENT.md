# API Deployment Guide

## Vercel Deployment

This API is configured to deploy on Vercel using the `vercel.json` configuration.

### Prerequisites

1. **Gmail App Password**: Generate an app password from your Gmail account
   - Go to Google Account settings
   - Enable 2-Factor Authentication
   - Generate an App Password for "Mail"

### Deployment Steps

1. **Install Vercel CLI** (if not already installed):

   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:

   ```bash
   vercel login
   ```

3. **Deploy the API**:

   ```bash
   cd api
   vercel
   ```

4. **Set Environment Variables** in Vercel Dashboard:
   - `GMAIL_USER`: atikurrahaman0305@gmail.com
   - `GMAIL_APP_PASSWORD`: Your Gmail app password
   - `FRONTEND_URL`: Your frontend domain (e.g., https://your-portfolio.vercel.app)
   - `RATE_LIMIT_WINDOW_MS`: 900000
   - `RATE_LIMIT_MAX_REQUESTS`: 5
   - `NODE_ENV`: production

### API Endpoints

- **POST** `/api/send-email` - Contact form submission
- **POST** `/api/newsletter/subscribe` - Newsletter subscription
- **GET** `/api/health` - Health check

### Configuration Files

- `vercel.json` - Vercel deployment configuration
- `.vercelignore` - Files to exclude from deployment
- `.env.example` - Example environment variables

### CORS Configuration

The API is configured to accept requests from:

- `http://localhost:5173` (Local development)
- `http://localhost:5174` (Local development)
- Your production frontend URL (configured via `FRONTEND_URL`)

### Rate Limiting

- 5 requests per 15 minutes per IP for email endpoints
- Configurable via environment variables

### Security Features

- Helmet.js for security headers
- CORS protection
- Input validation and sanitization
- Rate limiting
- Environment-based configuration
