import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

console.log('Testing Email Configuration...');
console.log(`User: ${process.env.EMAIL_USER}`);
console.log(`Pass: ${process.env.EMAIL_PASS ? '********' + process.env.EMAIL_PASS.slice(-4) : 'MISSING'}`);

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const mailOptions = {
  from: `"VP Group Test" <${process.env.EMAIL_USER}>`,
  to: process.env.EMAIL_USER,
  subject: 'Test Email from VP Group Backend',
  text: 'If you are reading this, the Nodemailer configuration is working perfectly!'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('\n❌ ERROR SENDING EMAIL:');
    console.error(error.message);
    if (error.response) console.error('Response:', error.response);
  } else {
    console.log('\n✅ EMAIL SENT SUCCESSFULLY!');
    console.log('Message ID:', info.messageId);
    console.log('Response:', info.response);
  }
  process.exit();
});
