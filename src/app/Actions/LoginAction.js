"use server";
import bcrypt from "bcrypt";
import prisma from "../../../lib/prisma";

const LoginAction = async (values) => {
  const email = values.email;
  const password = values.password;

  try {
    const user = await prisma.user.findUnique({
      where: { email: email },
    });
    if (!user) return { message: "wrongEmail" };

    const correctPassword = await bcrypt.compare(password, user.password);
    if (!correctPassword) return { message: "wrongPassword" };

    // if (user.status === "Rejected") return { message: "Rejected" };
    // if (user.status === "Approved") return { message: "Approved" };

    return { user };
  } catch (error) {
    console.log(error.message);
  }
};

export { LoginAction };
