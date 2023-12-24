"use server";

import prisma from "../../../lib/prisma";

export async function UpdateUserStatus(email) {
  try {
    await prisma.user.update({
      where: { email: email },
      data: { status: "test" },
    });

    console.log("User status updated successfully");
  } catch (error) {
    console.error("Error updating user status:", error);
  }
}

export async function GetAdminTableData() {
  try {
    const users = await prisma.user.findMany();
    return { users };
  } catch (error) {
    console.error("Error updating user status:", error);
  }
}
