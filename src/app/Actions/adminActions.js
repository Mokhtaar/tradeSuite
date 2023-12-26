"use server";
import prisma from "../../../lib/prisma";
import bcrypt from "bcrypt";



export async function newAdmin(adminData) {
  const intialPassword = adminData.get("password");
  const hashedPassword = await bcrypt.hash(intialPassword, 10);

  const body = {
    name: adminData.get("name"),
    email: adminData.get("email"),
    password: hashedPassword,
  };

  try {
    const response = await prisma.admin.create({
      data: body,
    });
    return { id: response.id, status: 200 };
  } catch (error) {
    return { error: error.message, status: 404 };
  }
};

export async function UpdateUserStatus(email, newSatus) {
  try {
    const user = await prisma.user.update({
      where: { email: email },
      data: { status: newSatus },
    });
  
    return { user };
  } catch (error) {
    console.error("Error updating user status:", error);
  }
}

export async function GetAdminTableData() {
  try {
    const users = await prisma.user.findMany({
      include: {
        company: true,
      },
      where:{
        status:"pending"
      }
    });
    console.log(users);

    return { users };
  } catch (error) {
    console.error("Error updating user status:", error);
  }
}
