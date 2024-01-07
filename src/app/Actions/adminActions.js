"use server";
import prisma from "../../../lib/prisma";

export async function GetCompaniesDocsAdmin() {
  try {
    const documents = await prisma.document.findMany({
      include: {
        company: true,
      },
    });
    return { documents };
  } catch (error) {
    console.error("Error in getting documents:", error);
  }
}

export async function UpdateDocumentStatus(companyID, document, newStatus) {
  
  const key = Object.keys(document)[0];
  const json = { ...document[key], status: newStatus };

  try {
    const media = await prisma.document.update({
      where: { companyID },
      data: { [key]: json },
    });
    return { media };
  } catch (error) {
    console.error("Error updating document status:", error);
  }
}

export async function UpdateUserStatus(email, newSatus) {
  if (newSatus === "Rejected") {
    const user = await prisma.user.delete({
      where: { email: email },
    });
  } else {
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
}

export async function UserRegistrationReview() {
  try {
    const users = await prisma.user.findMany({
      include: {
        company: true,
      },
      where: {
        status: "Pending",
      },
    });
    return { users };
  } catch (error) {
    console.error("Error updating user status:", error);
  }
}
