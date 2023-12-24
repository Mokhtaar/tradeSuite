"use server";
import prisma from "../../../lib/prisma";

export async function UpdateUserStatus(email, newSatus) {
  try {
    await prisma.user.update({
      where: { email: email },
      data: { status: newSatus },
    });
    console.log(`User status updated successfully`);
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
    });
    console.log(users);

    return { users };
  } catch (error) {
    console.error("Error updating user status:", error);
  }
}
