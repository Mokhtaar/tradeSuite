"use server";

import prisma from "../../../lib/prisma";

const addUser = async (userData) => {
  const body = {
    password: userData.get("password"),
    firstName: userData.get("firstName"),
    lastName: userData.get("lastName"),
    email: userData.get("email"),
    phoneNumber: parseInt(userData.get("phoneNumber")),
    dob: userData.get("dob"),
  };

  try {
    await prisma.User.create({
      data: body,
    });
  } catch (error) {
    console.log(error.message);
  }
}


export { addUser };
