/**
 * DO NOT paste this whole file into EmailJS.
 *
 * EmailJS dashboard steps:
 * 1. Email Templates → open "Contact Us"
 * 2. Subject → copy ONLY this line (no quotes):
 *    Portfolio inquiry from {{from_name}}
 * 3. Content → switch to HTML mode, then open contactUsTemplate.html
 *    and copy from the first <div> through the closing </div> (not the comments).
 * 4. To Email: johncaganda0@gmail.com
 * 5. Reply To: {{reply_to}}
 *
 * If your template is "Plain text" only, use contactUsTemplate.txt instead.
 */

export const contactUsSubject = 'Portfolio inquiry from {{from_name}}';

/** Reference copy — use contactUsTemplate.html in EmailJS editor */
export const contactUsHtml = `<div style="font-family: Arial, Helvetica, sans-serif; font-size: 15px; line-height: 1.65; color: #1d201e; max-width: 560px;">
  <p style="margin: 0 0 8px; font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; color: #666;">JGCB Portfolio</p>
  <h1 style="margin: 0 0 20px; font-size: 22px; font-weight: 700; line-height: 1.25;">New contact form message</h1>
  <p style="margin: 0 0 16px;">Hello John Gabriel,</p>
  <p style="margin: 0 0 24px;">Someone submitted your portfolio contact form. Details are below.</p>
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse: collapse; margin: 0 0 24px; font-size: 14px;">
    <tr>
      <td style="padding: 12px 14px; border: 1px solid #cccccc; background-color: #f5f3ed; width: 100px; font-weight: bold;">Name</td>
      <td style="padding: 12px 14px; border: 1px solid #cccccc;">{{from_name}}</td>
    </tr>
    <tr>
      <td style="padding: 12px 14px; border: 1px solid #cccccc; background-color: #f5f3ed; font-weight: bold;">Email</td>
      <td style="padding: 12px 14px; border: 1px solid #cccccc;"><a href="mailto:{{from_email}}" style="color: #2532be;">{{from_email}}</a></td>
    </tr>
    <tr>
      <td style="padding: 12px 14px; border: 1px solid #cccccc; background-color: #f5f3ed; font-weight: bold;">Sent</td>
      <td style="padding: 12px 14px; border: 1px solid #cccccc;">{{submitted_at}}</td>
    </tr>
  </table>
  <p style="margin: 0 0 8px; font-size: 11px; font-weight: bold; text-transform: uppercase; color: #666;">Message</p>
  <div style="padding: 16px; border: 1px solid #cccccc; background-color: #ffffff; white-space: pre-wrap; font-size: 14px; line-height: 1.6;">{{message}}</div>
  <p style="margin: 28px 0 0; padding-top: 16px; border-top: 1px solid #cccccc; font-size: 12px; color: #666;">
    Reply to <a href="mailto:{{from_email}}" style="color: #2532be;">{{from_email}}</a>.<br />
    Automated message from your portfolio website.
  </p>
</div>`;

export const contactUsText = `Hello John Gabriel,

You have a new portfolio contact form submission.

Name:     {{from_name}}
Email:    {{from_email}}
Sent:     {{submitted_at}}

Message:
{{message}}

---
Reply to {{from_email}}`;
