# 🚀 Portfolio Deployment Guide

A complete deployment guide for the portfolio website and API backend.

## 📋 Prerequisites

1. **Accounts Required:**

   - [Vercel Account](https://vercel.com)
   - Gmail account with App Password enabled

2. **Tools Required:**
   - Node.js (v18+ recommended)
   - Git
   - Vercel CLI

## 🛠 Setup Instructions

### 1. Install Vercel CLI

```bash
npm install -g vercel
```

### 2. Login to Vercel

```bash
vercel login
```

### 3. Gmail App Password Setup

1. Go to [Google Account Settings](https://myaccount.google.com)
2. Enable 2-Factor Authentication
3. Go to App Passwords section
4. Generate a new app password for "Mail"
5. Save this password for environment variables

## 🌐 Deployment Process

### Option 1: Automated Deployment (Recommended)

```bash
chmod +x deploy.sh
./deploy.sh
```

### Option 2: Manual Deployment

#### Deploy API Backend

```bash
cd api
vercel --prod
```

**Set Environment Variables in Vercel Dashboard:**

- `GMAIL_USER`: atikurrahaman0305@gmail.com
- `GMAIL_APP_PASSWORD`: Your Gmail app password
- `FRONTEND_URL`: Your frontend domain
- `RATE_LIMIT_WINDOW_MS`: 900000
- `RATE_LIMIT_MAX_REQUESTS`: 5
- `NODE_ENV`: production

#### Deploy Frontend

```bash
cd ..
vercel --prod
```

**Set Environment Variables in Vercel Dashboard:**

- `VITE_API_BASE_URL`: Your API domain
- `VITE_ENVIRONMENT`: production

## 🔧 Configuration Files

### Backend (`/api`)

- `vercel.json` - Vercel deployment config
- `.env.example` - Environment variables template
- `DEPLOYMENT.md` - Detailed API deployment guide

### Frontend

- `vercel.json` - Frontend deployment config
- `.env.development` - Development environment
- `.env.production` - Production environment

## 📡 API Endpoints

- **POST** `/api/send-email` - Contact form
- **POST** `/api/newsletter/subscribe` - Newsletter subscription
- **GET** `/api/health` - Health check

## 🔒 Security Features

- **Rate Limiting**: 5 requests per 15 minutes
- **CORS Protection**: Configured domains only
- **Input Validation**: Email format validation
- **Security Headers**: Helmet.js protection
- **Environment Variables**: Secure configuration

## 🎨 Frontend Features

- **Newsletter Subscription**: Real-time API integration
- **Legal Modals**: Privacy Policy & Terms of Service
- **Dark Theme**: Proper styling for all components
- **Responsive Design**: Mobile-first approach
- **Performance**: Optimized builds and caching

## 🔍 Testing

### Local Testing

```bash
# Start API
cd api && npm run dev

# Start Frontend (new terminal)
npm run dev
```

### Production Testing

1. Test newsletter subscription
2. Test contact form
3. Test legal modals
4. Verify dark/light theme support
5. Check mobile responsiveness

## 🌍 Environment URLs

- **Development**: http://localhost:5173
- **API Development**: http://localhost:3001
- **Production**: https://your-portfolio.vercel.app
- **API Production**: https://your-portfolio-api.vercel.app

## 🚨 Troubleshooting

### Common Issues

1. **CORS Errors**

   - Update `FRONTEND_URL` in API environment variables
   - Check allowed origins in `api/index.js`

2. **Newsletter Not Working**

   - Verify `GMAIL_APP_PASSWORD` is set correctly
   - Check API logs in Vercel dashboard

3. **Rate Limiting Issues**

   - Adjust `RATE_LIMIT_MAX_REQUESTS` if needed
   - Clear browser cache

4. **Build Failures**
   - Check Node.js version compatibility
   - Verify all dependencies are installed

### Logs and Monitoring

- **Vercel Dashboard**: Real-time function logs
- **Browser Console**: Frontend error debugging
- **Network Tab**: API request monitoring

## 📞 Support

For issues or questions:

- Check Vercel documentation
- Review API logs in dashboard
- Test locally first
- Verify environment variables

## 🔄 Updates and Maintenance

### Updating Code

```bash
git add .
git commit -m "Update: description"
git push
```

Vercel will automatically redeploy on git push.

### Environment Variables

Update through Vercel dashboard under Project Settings > Environment Variables.

---

**Last Updated**: June 16, 2025
**Version**: 1.0.0
