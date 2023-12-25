"use server";
import prisma from "../../../lib/prisma";

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
        status:"Approved"
      }
    });
    console.log(users);

    return { users };
  } catch (error) {
    console.error("Error updating user status:", error);
  }
}
