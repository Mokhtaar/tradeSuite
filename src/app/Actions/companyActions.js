"use server";
import prisma from "../../../lib/prisma";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const addCompany = async (formData) => {
  const body = {
    name: formData.get("companyName"),
    email: formData.get("emailAddress"),
    phoneNumber: parseInt(formData.get("phoneNumber")),
    address: formData.get("streetAddress"),
    country: formData.get("selectedCountry"),
    city: formData.get("city"),
    website: formData.get("companyWebsite"),
    postalCode: +formData.get("postalCode"),
  };

  try {
    // const userExists = await prisma.company.findUnique({
    //   where: { email: body.email },
    // });
    // if (userExists) return { message: "User already exists" };

    const response = await prisma.company.create({
      data: {
        ...body,
        media: {
          create: {},
        },
      },
      include: {
        media: true,
      },
    });

    const token = jwt.sign(
      { id: response.id, email: response.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      },
      (err, token) => {
        const url = `http://localhost:3000/api/auth/verify-email?token=${token}`;
        transporter.sendMail({
          to: response.email,
          subject: "Confirm Email",
          html: `Please click this link to confirm your email: <a href="${url}">${url}</a>`,
        });
      }
    );
    // const token = jwt.sign({ email: response.email }, process.env.JWT_SECRET, {
    //   expiresIn: "1d",
    // });
    // sendVerificationEmail(response.email, token);
    return { response, status: 200, token };
  } catch (error) {
    return { error: error.message, status: 404 };
  }
};

export { addCompany };

const sendVerificationEmail = async (to, token) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
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
