"use server";
import prisma from "../../../lib/prisma";
import jwt from "jsonwebtoken";
import { sendVerificationEmail } from "@/lib/sendVerificationEmail";

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
        Document: {
          create: {},
        },
      },
      include: {
        Document: true,
      },
    });
    const token = jwt.sign(
      { id: response.id, email: response.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );
    sendVerificationEmail(response.email, token);
    return { response, status: 200, token };
  } catch (error) {
    return { error: error.message, status: 404 };
  }
};

export { addCompany };
