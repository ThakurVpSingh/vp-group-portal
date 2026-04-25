import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email, subject, message, attachment } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    // Create a transporter
    // NOTE: In production, use env variables for service, user, and pass
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'contact.vpsdev@gmail.com',
        pass: process.env.EMAIL_PASS // User will need to provide this in .env
      }
    });

    const mailOptions = {
      from: `"VP Group Portal" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: 'contact.vpsdev@gmail.com',
      subject: `VP Group Contact: ${subject}`,
      text: `
        New Message from VP Group Contact Form:
        
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        
        Message:
        ${message}
      `,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #8b5cf6;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        </div>
      `,
      attachments: attachment ? [
        {
          filename: attachment.filename,
          content: attachment.content,
          encoding: attachment.encoding
        }
      ] : []
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email. Ensure backend is configured with EMAIL_PASS.' });
  }
});

export default router;
