const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Security middleware
app.use(helmet());

// Rate limiting
const emailRateLimit = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000, // 15 minutes
  max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS) || 5, // limit each IP to 5 requests per windowMs
  message: {
    error: 'Too many email requests from this IP, please try again later.',
    retryAfter: '15 minutes'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// CORS configuration
const allowedOrigins = [
  'http://localhost:5173',
  'https://www.atikurrahaman.live', 
  process.env.FRONTEND_URL
].filter(Boolean);

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      var msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Body parser
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Create Nodemailer transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD
    },
    secure: true,
    tls: {
      rejectUnauthorized: false
    }
  });
};

// Validate email format
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Sanitize input
const sanitizeInput = (input) => {
  if (typeof input !== 'string') return '';
  return input.trim().replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
};

// Email sending endpoint
app.post('/api/send-email', emailRateLimit, async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        error: 'All fields are required (name, email, subject, message)'
      });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid email address'
      });
    }

    // Sanitize inputs
    const sanitizedName = sanitizeInput(name);
    const sanitizedSubject = sanitizeInput(subject);
    const sanitizedMessage = sanitizeInput(message);

    if (sanitizedName.length > 100 || sanitizedSubject.length > 200 || sanitizedMessage.length > 5000) {
      return res.status(400).json({
        success: false,
        error: 'Input too long. Please keep your message concise.'
      });
    }

    // Create transporter
    const transporter = createTransporter();

    // Verify connection
    await transporter.verify();

    // Email content
    const mailOptions = {
      from: {
        name: 'Portfolio Contact Form',
        address: process.env.GMAIL_USER
      },
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `🚀 Portfolio Contact: ${sanitizedSubject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; padding: 20px; border-radius: 10px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 20px;">
            <h1 style="margin: 0; font-size: 24px;">💼 New Portfolio Contact</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Someone reached out through your portfolio!</p>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <div style="margin-bottom: 20px;">
              <h3 style="color: #374151; margin: 0 0 10px 0; font-size: 16px;">👤 From:</h3>
              <p style="margin: 0; font-size: 18px; font-weight: bold; color: #1f2937;">${sanitizedName}</p>
              <p style="margin: 5px 0 0 0; color: #6b7280;">
                <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a>
              </p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #374151; margin: 0 0 10px 0; font-size: 16px;">📧 Subject:</h3>
              <p style="margin: 0; font-size: 18px; color: #1f2937;">${sanitizedSubject}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #374151; margin: 0 0 10px 0; font-size: 16px;">💬 Message:</h3>
              <div style="background: #f9fafb; padding: 20px; border-radius: 8px; border-left: 4px solid #3b82f6;">
                <p style="margin: 0; line-height: 1.6; color: #374151; white-space: pre-wrap;">${sanitizedMessage}</p>
              </div>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <a href="mailto:${email}?subject=Re: ${encodeURIComponent(sanitizedSubject)}" 
                 style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: bold;">
                📧 Reply to ${sanitizedName}
              </a>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #6b7280; font-size: 12px;">
            <p>Sent from your Portfolio Contact Form</p>
            <p>Time: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
      text: `
Portfolio Contact Form Submission

From: ${sanitizedName} (${email})
Subject: ${sanitizedSubject}

Message:
${sanitizedMessage}

Reply to: ${email}
Time: ${new Date().toLocaleString()}
      `
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    console.log('Email sent successfully:', info.messageId);

    res.status(200).json({
      success: true,
      message: 'Email sent successfully! Thank you for your message.',
      messageId: info.messageId
    });

  } catch (error) {
    console.error('Email sending error:', error);
    
    res.status(500).json({
      success: false,
      error: 'Failed to send email. Please try again later or contact me directly.',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Newsletter subscription endpoint
app.post('/api/newsletter/subscribe', emailRateLimit, async (req, res) => {
  try {
    const { email } = req.body;

    // Validation
    if (!email) {
      return res.status(400).json({
        success: false,
        error: 'Email address is required'
      });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid email address'
      });
    }

    // Create transporter
    const transporter = createTransporter();

    // Verify connection
    await transporter.verify();

    // Send welcome email to subscriber
    const welcomeMailOptions = {
      from: {
        name: 'Md. Atikur Rahaman',
        address: process.env.GMAIL_USER
      },
      to: email,
      subject: '🎉 Welcome to My Newsletter!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; padding: 20px; border-radius: 10px;">
          <div style="background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%); color: white; padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 20px;">
            <h1 style="margin: 0; font-size: 28px;">🎉 Welcome!</h1>
            <p style="margin: 15px 0 0 0; font-size: 18px; opacity: 0.9;">Thank you for subscribing to my newsletter!</p>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #1f2937; margin: 0 0 20px 0;">Hi there! 👋</h2>
            
            <p style="color: #374151; line-height: 1.6; margin-bottom: 20px;">
              I'm <strong>Md. Atikur Rahaman</strong>, a passionate Full Stack Developer with 2+ years of experience 
              crafting exceptional web applications.
            </p>
            
            <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; border-left: 4px solid #3b82f6; margin: 20px 0;">
              <h3 style="color: #1e40af; margin: 0 0 10px 0;">What to expect:</h3>
              <ul style="color: #374151; margin: 10px 0; padding-left: 20px;">
                <li>🚀 Latest project updates and tech insights</li>
                <li>💡 Web development tips and best practices</li>
                <li>🔧 New tools and technologies I'm exploring</li>
                <li>📊 Behind-the-scenes development stories</li>
              </ul>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://your-portfolio-domain.com" 
                 style="display: inline-block; background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">
                🌐 Visit My Portfolio
              </a>
            </div>
            
            <div style="background: #fef3c7; padding: 15px; border-radius: 8px; border-left: 4px solid #f59e0b; margin: 20px 0;">
              <p style="margin: 0; color: #92400e; font-size: 14px;">
                <strong>📧 Stay Connected:</strong> Feel free to reply to this email anytime - I'd love to hear from you!
              </p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #6b7280; font-size: 12px;">
            <p>You're receiving this because you subscribed to my newsletter.</p>
            <p>If you didn't subscribe, please ignore this email.</p>
            <p style="margin-top: 10px;">
              <a href="#" style="color: #6b7280; text-decoration: underline;">Unsubscribe</a> | 
              <a href="mailto:atikurrahaman0305@gmail.com" style="color: #6b7280; text-decoration: underline;">Contact Me</a>
            </p>
          </div>
        </div>
      `,
      text: `
🎉 Welcome to My Newsletter!

Hi there! 👋

Thank you for subscribing to my newsletter! I'm Md. Atikur Rahaman, a passionate Full Stack Developer with 2+ years of experience crafting exceptional web applications.

What to expect:
• Latest project updates and tech insights
• Web development tips and best practices  
• New tools and technologies I'm exploring
• Behind-the-scenes development stories

Visit my portfolio: https://your-portfolio-domain.com

Stay connected - feel free to reply to this email anytime!

---
You're receiving this because you subscribed to my newsletter.
If you didn't subscribe, please ignore this email.
      `
    };

    // Send notification email to yourself
    const notificationMailOptions = {
      from: {
        name: 'Portfolio Newsletter',
        address: process.env.GMAIL_USER
      },
      to: process.env.GMAIL_USER,
      subject: '📧 New Newsletter Subscription',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; padding: 20px; border-radius: 10px;">
          <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; padding: 20px; border-radius: 10px; text-align: center; margin-bottom: 20px;">
            <h1 style="margin: 0; font-size: 24px;">📧 New Subscriber!</h1>
          </div>
          
          <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <p style="margin: 0; font-size: 16px; color: #374151;">
              <strong>Email:</strong> ${email}
            </p>
            <p style="margin: 10px 0 0 0; font-size: 14px; color: #6b7280;">
              Subscribed at: ${new Date().toLocaleString()}
            </p>
          </div>
        </div>
      `
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(welcomeMailOptions),
      transporter.sendMail(notificationMailOptions)
    ]);

    console.log('Newsletter subscription successful for:', email);

    res.status(200).json({
      success: true,
      message: 'Successfully subscribed to newsletter! Check your email for confirmation.',
      email: email
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    
    res.status(500).json({
      success: false,
      error: 'Failed to subscribe to newsletter. Please try again later.',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Email API is running',
    timestamp: new Date().toISOString()
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Endpoint not found'
  });
});

// Error handler
app.use((error, req, res, next) => {
  console.error('Server error:', error);
  res.status(500).json({
    success: false,
    error: 'Internal server error'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Email API server running on http://localhost:${PORT}`);
  console.log(`📧 Configured for Gmail: ${process.env.GMAIL_USER}`);
  console.log(`🛡️  CORS enabled for: ${process.env.FRONTEND_URL}`);
});

module.exports = app;
