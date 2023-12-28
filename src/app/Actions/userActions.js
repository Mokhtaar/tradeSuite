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

const AddUserFiles = async (id, signedPoaFileURL, signedIdFileURL) => {
  try {
    const addUserFiles = await prisma.user.update({
      where: {
        id,
      },
      data: {
        proofOfAddress: signedPoaFileURL,
        proofOfIdentity: signedIdFileURL,
      },
    });
    return { success: "Files have been uploaded successfully" };
  } catch (error) {
    return { error: error.message, status: 404 };
  }
};

export { addUser, AddUserFiles };
