"use server";
import prisma from "../../../lib/prisma";
import nodemailer from "nodemailer";

const VerificationToken = async (id, token, exp) => {
  const body = {
    identifier: id.toString(),
    token,
    expires: new Date(exp * 1000),
  };
  try {
    const verificationToken = await prisma.verificationToken.create({
      data: body,
    });
    return { verificationToken, status: 200 };
  } catch (error) {
    return { error: error.message, status: 404 };
  }
};

const sendVerificationEmail = async (to, token) => {
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
};

export { VerificationToken, sendVerificationEmail };

// if (Date.now() >= exp * 1000) {
//   return false;
// }
