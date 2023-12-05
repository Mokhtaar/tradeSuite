"use server";

import prisma from "../../../lib/prisma";
import bcrypt from "bcrypt";

const addUser = async (userData, companyID) => {
  const intialPassword = userData.get("password");
  const hashedPassword = await bcrypt.hash(intialPassword, 10);

  const body = {
    password: hashedPassword,
    firstName: userData.get("firstName"),
    lastName: userData.get("lastName"),
    email: userData.get("email"),
    phoneNumber: parseInt(userData.get("phoneNumber")),
    dob: new Date(userData.get("dob")).toISOString(),
    companyID,
  };

  try {
    await prisma.User.create({
      data: body,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export { addUser };
