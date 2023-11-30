"use server";

import prisma from "../../../lib/prisma";

const addUser = async (userData) => {
  const body = {
    
    firstName: userData.get("firstName"),
    
  };

  try {
    await prisma.user.create({
      data: body,
    });
  } catch (error) {
    console.log(error.message);
  }
}


export { addUser };
