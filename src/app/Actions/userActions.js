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
    const response = await prisma.user.create({
      data: body,
    });
    return { success: response };
  } catch (err) {
    console.log(err.message);
    return { error: err.message };
  }
};
export async function EditProfile(companyID) {
  try {
    const users = await prisma.user.update({
      include: {
        company: true,
      },
      where:{
        companyID:companyID, 
      }

    });
    return { users };
  } catch (error) {
    console.error("Error Edit profile", error);
  }
}

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
  const json = {
    url: value,
    status: "Pending",
  };

  try {
    const addUserFiles = await prisma.document.update({
      where: {
        companyID: id,
      },
      data: {
        [key]: json,
      },
    });
    return { success: "File has been uploaded successfully" };
  } catch (error) {
    console.log(error);
  }
};

export async function GetUserDocuments(companyID) {
  try {
    const documents = await prisma.document.findMany({
      include: {
        company: true,
      },
      where: {
        companyID,
      },
    });
    return { documents };
  } catch (error) {
    console.error("Error in retrieve documents:", error);
  }
}

export async function deleteDocument(companyID, documentType) {
  try {
    const deletedDocument = await prisma.document.update({
      where: {
        companyID,
      },
      data: {
        [documentType]: null, // Set the specific document type to null to delete it
      },
    });
    return { deletedDocument };
  } catch (error) {
    console.error("Error in deleting document:", error);
    return { error: error.message, status: 404 };
  }
}

export async function DeleteAllDocument(companyID) {
  try {
    const deletedDocument = await prisma.media.update({
      where: {
        companyID,
      },
      data: {
       userStatus: false, 
       status : "Pending"
      },
    });
    console.log("Document deleted:", deletedDocument);
    return { deletedDocument };
  } catch (error) {
    console.error("Error in deleting document:", error);
    return { error: error.message, status: 404 };
  }
}
// const VerifyToken = async (id, ) => {
//   try {
//     const {
//       user: { id },
//     } = jwt.verify(req.params.token, EMAIL_SECRET);
//     await prisma.user.update({
//       where: {
//         id,
//       },
//       data: {
//         emailValid: value,
//       },
//     });
//   } catch (e) {
//     res.send("error");
//   }

//   return res.redirect("http://localhost:3001/login");
// };

export { addUser, AddUserFiles, AddUserDocuments };
