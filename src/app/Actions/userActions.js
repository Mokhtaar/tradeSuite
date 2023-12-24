"use server";

import prisma from "../../../lib/prisma";
import bcrypt from "bcrypt";

const addUser = async (userData, companyID) => {
  const intialPassword = userData.get("password");
  const hashedPassword = await bcrypt.hash(intialPassword, 10);
  const company = await prisma.company.findUnique({
    where: {
      id: companyID,
    },
  });

  if (!company) {
    // Handle the case where the company does not exist
    return { message: "Company not found" };
  }


  const body = {
    password: hashedPassword,
    // firstName: userData.get("firstName"),
    // lastName: userData.get("lastName"),
    name: `${userData.get("firstName")} ${userData.get("lastName")}`,
    email: userData.get("email"),
    phoneNumber: parseInt(userData.get("phoneNumber")),
    dob: new Date(userData.get("dob")).toISOString(),
    companyID,
    status:"pending",
    companyName: company.name,

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
