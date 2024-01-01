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
    return { success: { response } };
  } catch (error) {
    return { message: error.message };
  }
};

<<<<<<< HEAD

=======
>>>>>>> dbeccca10d5faadf232c1cfafb6f5d7136ead27b
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
        companyID: id,
      },
      data: {
        [key]: value,
      },
    });
    return { success: "File has been uploaded successfully" };
  } catch (error) {
    console.log(error);
  }
};
export async function GetUserDocuments(companyID) {
  try {
    const documents = await prisma.media.findMany({
      include: {
        company: true,
      } , where :{
       companyID: companyID,
      },

    });
    console.log(documents);

    return { documents };
  } catch (error) {
    console.error("Error in retrieve documents:", error);
  }
}
export async function DeleteDocuments(incomeStatement) {
  try {
    const deletedDocument = await prisma.media.Delete({
   where :{
    incomeStatement,
   }, 

    });

    console.log('Document deleted:', deletedDocument);

    return { deletedDocument };

   
  } catch (error) {
    console.error("Error in upload documents:", error);
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
