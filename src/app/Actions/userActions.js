"use server";

import prisma from "../../../lib/prisma";

// password    String
// firstName   String
// lastName    String
// email       String
// phoneNumber Int
// dob         DateTime
// company     Company  @relation(fields: [companyID], references: [id])
// companyID   Int      @unique

const addUser = async (userData) => {
  const body = {
    password: userData.get("password"),
    firstName: userData.get("firstName"),
    lastName: userData.get("lastName"),
    email: userData.get("email"),
    phoneNumber: parseInt(userData.get("phoneNumber")),
    dob: new Date(userData.get("dob")).toISOString(),
    companyID: +1,
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
