# Portfolio Contact Form API

This is the backend API for the portfolio contact form using Nodemailer with Gmail.

## Setup Instructions

### 1. Gmail Configuration

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password**:
   - Go to Google Account → Security
   - 2-Step Verification → App passwords
   - Select app: "Mail" and device: "Other (custom name)"
   - Enter: "Portfolio Contact Form"
   - **Copy the 16-character password**

### 2. Environment Setup

1. Copy `.env.example` to `.env`:

   ```bash
   cp .env.example .env
   ```

2. Update `.env` with your credentials:
   ```env
   GMAIL_USER=atikurrahaman0305@gmail.com
   GMAIL_APP_PASSWORD=your_16_character_app_password_here
   ```

### 3. Installation

```bash
npm install
```

### 4. Development

```bash
npm run dev
```

### 5. Production

```bash
npm start
```

## API Endpoints

### POST `/api/send-email`

Send contact form email

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Hello from Portfolio",
  "message": "Your message here"
}
```

**Response:**

```json
{
  "success": true,
  "message": "Email sent successfully!",
  "messageId": "message-id"
}
```

### GET `/api/health`

Health check endpoint

## Security Features

- Rate limiting (5 requests per 15 minutes per IP)
- Input sanitization
- CORS protection
- Helmet security headers
- Email validation

## Deployment

### Vercel (Recommended)

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Add environment variables in Vercel dashboard

### Railway

1. Connect your GitHub repo
2. Add environment variables
3. Deploy

### Render

1. Connect your GitHub repo
2. Set build command: `npm install`
3. Set start command: `npm start`
4. Add environment variables
