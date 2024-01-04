"use server";
import prisma from "../../../lib/prisma";

export async function GetUserDocumentsAdmin(key) {
  try {
    const documents = await prisma.document.findMany({
      include: {
        company: true,
      },
    });
    return { documents };
  } catch (error) {
    console.error("Error in upload documents:", error);
  }
}

export async function DocumentsReviewAdmin() {
  try {
    const documents = await prisma.document.findMany({
      include: {
        company: true,
      },
      where: {
        status: "Approved",
      },
    });
    return { documents };
  } catch (error) {
    console.error("Error in upload documents:", error);
  }
}

export async function UpdateDocumentStatus(id, newSatus) {
  let json = { status: newSatus, url: "" };
  let key = "supplierDetails";

  try {
    const media = await prisma.document.update({
      where: { companyID: "clqz6h0cx00007b7f9ar0i65p" },
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
