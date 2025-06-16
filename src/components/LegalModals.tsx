import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Download, FileText, Shield } from "lucide-react";
import React from "react";

interface PrivacyPolicyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({
  open,
  onOpenChange,
}) => {
  const privacyContent = `
**Last updated: ${new Date().toLocaleDateString()}**

## Introduction
This Privacy Policy describes how Md. Atikur Rahaman ("we", "our", or "us") collects, uses, and protects your information when you visit our portfolio website.

## Information We Collect

### Personal Information
- **Contact Information**: When you contact us through forms, we may collect your name, email address, and message content.
- **Newsletter Subscription**: If you subscribe to our newsletter, we collect your email address.
- **Usage Data**: We may collect information about how you interact with our website using analytics tools.

### Automatically Collected Information
- IP address and browser information
- Pages visited and time spent on the site
- Referring websites and search terms used

## How We Use Your Information
- To respond to your inquiries and provide requested services
- To send newsletters and updates (only if you've subscribed)
- To improve our website and user experience
- To analyze site usage and optimize performance
- To comply with legal obligations

## Data Protection & Security
We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Your data is stored securely and is only accessible by authorized personnel.

## Third-Party Services
Our website may use third-party services like:
- **Google Analytics**: For website analytics and performance monitoring
- **EmailJS/Nodemailer**: For handling contact forms and newsletter subscriptions
- **GitHub**: For hosting and version control

These services have their own privacy policies governing the use of your information.

## Cookies and Tracking
We may use cookies and similar tracking technologies to:
- Remember your preferences
- Analyze site traffic and usage patterns
- Improve site functionality

You can control cookie settings through your browser preferences.

## Your Rights
You have the right to:
- **Access** your personal data
- **Correct** inaccurate data
- **Request deletion** of your data
- **Unsubscribe** from our newsletter at any time
- **Data portability** - receive your data in a structured format

## Data Retention
- Contact form submissions: Stored for up to 2 years
- Newsletter subscriptions: Until you unsubscribe
- Analytics data: As per Google Analytics retention policies

## Children's Privacy
Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.

## International Data Transfers
Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data.

## Changes to This Policy
We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.

## Contact Us
If you have any questions about this Privacy Policy, please contact us at:
- **Email**: atikurrahaman0305@gmail.com
- **Website**: Through the contact form on our portfolio

## Compliance
This Privacy Policy complies with applicable data protection laws including GDPR and other relevant regulations.
  `;
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100">
        <DialogHeader className="pb-4 border-b border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-full">
              <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="text-left">
              <DialogTitle className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                Privacy Policy
              </DialogTitle>
              <DialogDescription className="text-slate-600 dark:text-slate-300 mt-1">
                How we collect, use, and protect your information
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <ScrollArea className="h-[60vh] pr-4">
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <div className="text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line text-sm">
              {privacyContent}
            </div>
          </div>
        </ScrollArea>

        <div className="flex justify-between items-center pt-4 border-t border-slate-200 dark:border-slate-700">
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Last updated: {new Date().toLocaleDateString()}
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              onClick={() => {
                const blob = new Blob([privacyContent], { type: "text/plain" });
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = "privacy-policy.txt";
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
              }}
            >
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
            <Button
              onClick={() => onOpenChange(false)}
              size={"sm"}
              className="bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

interface TermsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const TermsOfServiceModal: React.FC<TermsModalProps> = ({
  open,
  onOpenChange,
}) => {
  const termsContent = `
**Last updated: ${new Date().toLocaleDateString()}**

## Acceptance of Terms
By accessing and using this portfolio website, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by the above, please do not use this service.

## Use License
Permission is granted to temporarily download one copy of the materials on this website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:

### Permitted Uses
- View and browse the website content
- Download materials for personal reference
- Share links to the website
- Contact the website owner for legitimate business purposes

### Prohibited Uses
- Modify or copy the materials for commercial use
- Use the materials for any commercial purpose or for any public display
- Attempt to reverse engineer any software contained on the website
- Remove any copyright or other proprietary notations from the materials
- Use automated systems to scrape or download content
- Impersonate the website owner or misrepresent your affiliation

## Intellectual Property Rights
The content, design, graphics, text, images, and other materials on this website are protected by copyright, trademark, and other intellectual property laws. All rights are reserved by Md. Atikur Rahaman unless otherwise noted.

### Copyright Notice
© 2025 Md. Atikur Rahaman. All rights reserved.

### Trademarks
Any trademarks, service marks, or logos used on this website are the property of their respective owners.

## Content Disclaimer
The materials on this website are provided on an 'as is' basis. Md. Atikur Rahaman makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation:
- Implied warranties or conditions of merchantability
- Fitness for a particular purpose
- Non-infringement of intellectual property or other violation of rights

## Limitations of Liability
In no event shall Md. Atikur Rahaman or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website, even if Md. Atikur Rahaman or its authorized representative has been notified orally or in writing of the possibility of such damage.

## Accuracy of Materials
The materials appearing on this website could include technical, typographical, or photographic errors. Md. Atikur Rahaman does not warrant that any of the materials on its website are accurate, complete, or current. Md. Atikur Rahaman may make changes to the materials contained on its website at any time without notice.

## Links to External Sites
Md. Atikur Rahaman has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Md. Atikur Rahaman of the site. Use of any such linked website is at the user's own risk.

## Privacy Policy
Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the website, to understand our practices.

## User Communications
When you send emails or other communications to us, you grant us permission to use, modify, and distribute such communications for any lawful purpose.

## Website Availability
We do not guarantee that the website will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the website, resulting in interruptions, delays, or errors.

## Modifications to Terms
Md. Atikur Rahaman may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.

## Governing Law
These terms and conditions are governed by and construed in accordance with the laws of Bangladesh and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.

## Contact Information
If you have any questions about these Terms of Service, please contact us at:
- **Email**: atikurrahaman0305@gmail.com
- **Website**: Through the contact form on our portfolio

## Severability
If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that the Terms will otherwise remain in full force and effect.

## Entire Agreement
These Terms constitute the entire agreement between you and Md. Atikur Rahaman regarding the use of the website and supersede all prior agreements and understandings.
  `;
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100">
        <DialogHeader className="pb-4 border-b border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-100 dark:bg-green-900/50 rounded-full">
              <FileText className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div className="text-left">
              <DialogTitle className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                Terms of Service
              </DialogTitle>
              <DialogDescription className="text-slate-600 dark:text-slate-300 mt-1">
                Rules and regulations for using our website
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <ScrollArea className="h-[60vh] pr-4">
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <div className="text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line text-sm">
              {termsContent}
            </div>
          </div>
        </ScrollArea>

        <div className="flex justify-between items-center pt-4 border-t border-slate-200 dark:border-slate-700">
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Last updated: {new Date().toLocaleDateString()}
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              onClick={() => {
                const blob = new Blob([termsContent], { type: "text/plain" });
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = "terms-of-service.txt";
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
              }}
            >
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
            <Button
              onClick={() => onOpenChange(false)}
              size={"sm"}
              className="bg-green-600 hover:bg-green-700 text-white dark:bg-green-600 dark:hover:bg-green-700"
            >
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
