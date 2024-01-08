"use server";

import prisma from "../../../lib/prisma";

const AddCompanyFile = async (url, id) => {
  try {
    const updateComapny = await prisma.company.update({
      where: {
        id,
      },
      data: {
        texRegister: url,
      },
    });
    return { success: "File has been uploaded successfully" };
  } catch (error) {
    return { error: error.message, status: 404 };
  }
};

export { AddCompanyFile };
