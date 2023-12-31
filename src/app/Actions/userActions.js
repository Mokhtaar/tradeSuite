"use server";
import prisma from "../../../lib/prisma";
import bcrypt from "bcrypt";

const addUser = async (userData, companyID, role) => {
  const intialPassword = userData.get("password");
  const hashedPassword = await bcrypt.hash(intialPassword, 10);

  const body = {
    password: hashedPassword,
    name: `${userData.get("firstName")} ${userData.get("lastName")}`,
    email: userData.get("email"),
    phoneNumber: parseInt(userData.get("phoneNumber")),
    dob: new Date(userData.get("dob")).toISOString(),
    companyID,
    status: role === "ADMIN" ? "Approved" : "Pending",
    role,
  };

  try {
    const response = await prisma.User.create({
      data: body,
    });
    return { success: { response } };
  } catch (error) {
    return { message: error.message };
  }
};

const AddUserFiles = async (id, key, value) => {
  try {
    const addUserFiles = await prisma.user.update({
      where: {
        id,
      },
      data: {
        [key]: value,
      },
    });
    return { success: "File has been uploaded successfully" };
  } catch (error) {
    return { error: error.message, status: 404 };
  }
};

const AddUserDocuments = async (id, key, value) => {
  try {
    const addUserFiles = await prisma.media.update({
      where: {
        id: 1,
      },
      data: {
        [key]: value,
      },
    });
    return { success: "File has been uploaded successfully" };
  } catch (error) {
    return { error: error.message, status: 404 };
  }
};

export async function GetUserDocuments() {
  try {
    const documents = await prisma.media.findMany({
      include: {
        company: true,
      },
      where: {
        status: "Approved",
      },
      
    });
    console.log(documents);

    return { documents };
  } catch (error) {
    console.error("Error in upload documents:", error);
  }
}

export { addUser, AddUserFiles, AddUserDocuments  };
