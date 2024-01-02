"use server";
import prisma from "../../../lib/prisma";

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

export { VerificationToken };

// if (Date.now() >= exp * 1000) {
//   return false;
// }
