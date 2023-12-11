"use server";
import bcrypt from "bcrypt";
import prisma from "../../../lib/prisma";
import jwt from "jsonwebtoken";

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

    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: 36000,
    });

    return { user, message: "LoggedIn", token };
  } catch (error) {
    console.log(error.message);
  }
};

export { LoginAction };
