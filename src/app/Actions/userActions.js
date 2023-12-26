"use server";

import prisma from "../../../lib/prisma";
import bcrypt from "bcrypt";

const addUser = async (userData, companyID) => {
  const intialPassword = userData.get("password");
  const hashedPassword = await bcrypt.hash(intialPassword, 10);


  const body = {
    password: hashedPassword,
    name: `${userData.get("firstName")} ${userData.get("lastName")}`,
    email: userData.get("email"),
    phoneNumber: parseInt(userData.get("phoneNumber")),
    dob: new Date(userData.get("dob")).toISOString(),
    companyID,
    status:"pending",
  };

  try {
    await prisma.User.create({
      data: body,
    });
    return { message: "User has been created succefully" };
  } catch (error) {
    return { message: error.message };
  }
};

export { addUser };
