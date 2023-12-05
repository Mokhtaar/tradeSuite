"use server";
import bcrypt from "bcrypt";
import prisma from "../../../lib/prisma";

const LoginAction = async (values) => {
  console.log(values);
  
  const email = values.email;
  const password = values.password;

  try {
    const user = await prisma.user.findUnique({
      where: { email: email },
    });
    console.log(user);
    if (!user) return { message: "User not found" };
    const correctPassword = await bcrypt.compare(password, user.password);
    if (!correctPassword) return { message: "wrong password" };

    // const token = jwt.sign({ email }, process.env.JWT_SECRET!, {
    //   expiresIn: 36000,
    // });
  } catch (error) {
    return { error: error.message };
  }
};

export { LoginAction };
