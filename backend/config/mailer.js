import nodemailer from 'nodemailer';

export const createTransporter = () => {
  const { EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS } = process.env;

  if (!EMAIL_HOST || !EMAIL_PORT || !EMAIL_USER || !EMAIL_PASS) {
    return null;
  }

  return nodemailer.createTransport({
    host: EMAIL_HOST,
    port: Number(EMAIL_PORT),
    secure: Number(EMAIL_PORT) === 465,
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });
};

export const sendContactEmail = async (message) => {
  const transporter = createTransporter();
  if (!transporter) {
    console.warn('Email credentials are not configured. Skipping notification email.');
    return;
  }

  await transporter.sendMail({
    from: `Portfolio Contact <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO || 'lakshya3924@gmail.com',
    replyTo: message.email,
    subject: `Portfolio Contact: ${message.subject}`,
    html: `
      <h2>New portfolio message</h2>
      <p><strong>Name:</strong> ${message.name}</p>
      <p><strong>Email:</strong> ${message.email}</p>
      <p><strong>Subject:</strong> ${message.subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message.message.replace(/\n/g, '<br />')}</p>
    `,
  });
};
