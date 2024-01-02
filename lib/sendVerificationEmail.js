import nodemailer from "nodemailer";

export async function sendVerificationEmail(to, token) {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const verificationLink = `http://localhost:3000/api/auth/verify-email?token=${token}`;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject: "Email Verification",
    html: `<p>Click the following link to verify your email: <a href="${verificationLink}">${verificationLink}</a></p>`,
  };

  const result = await transporter.sendMail(mailOptions);
  return result;
}
