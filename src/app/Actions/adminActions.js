"use server";
import prisma from "../../../lib/prisma";


export async function GetUserDocumentsAdmin() {
  try {
    const documents = await prisma.media.findMany({
      include: {
        company: true,
      },
      where: {
        status: "Pending",
      },
      
    });
    console.log(documents);

    return { documents };
  } catch (error) {
    console.error("Error in upload documents:", error);
  }
}

export async function UpdateDocumentStatus(id, newSatus) {
  try {
    const media = await prisma.media.update({
      where: { id: id },
      data: { status: newSatus },
    });
  
    return { media };
  } catch (error) {
    console.error("Error updating document status:", error);
  }
}

export async function UpdateUserStatus(email, newSatus) {
  let DeletedUser;
  if ( newSatus === "Rejected") {
    DeletedUser = await prisma.user.delete({
      where: { email: email },
    });
  }
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
        status:"Pending"
      }
    });
    return { users };
  } catch (error) {
    console.error("Error updating user status:", error);
  }
}




