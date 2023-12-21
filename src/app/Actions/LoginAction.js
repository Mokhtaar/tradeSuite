"use server";
import bcrypt from "bcrypt";
import prisma from "../../../lib/prisma";
import jwt from "jsonwebtoken";

const LoginAction = async (values) => {
  // console.log(formData);
  const email = values.email;
  const password = values.password;
  
  try {
    const user = await prisma.user.findUnique({
      where: { email: email },
    });
    // const Approve = await prisma.user.findMany({
    //   where: { status: "Rejected" },
    // });
    if (!user) return { message: "wrongEmail" };
    
    const correctPassword = await bcrypt.compare(password, user.password);
    if (!correctPassword) return { message: "wrongPassword" };
    
    if(user.status==="rejected") return {message: "rejected"}
    if(user.status==="pending") return {message: "pending"}
    
    const token = jwt.sign({ user }, process.env.JWT_SECRET, {
      expiresIn: 36000,
    });
    return { message: "LoggedIn", token };
  } catch (error) {
    console.log(error.message);
  }
};

export { LoginAction };
