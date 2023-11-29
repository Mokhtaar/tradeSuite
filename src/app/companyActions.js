// companyActions.js

"use server";

import prisma from "../../lib/prisma";

const addCompany = async (formData) => {
  const body = {
    name: formData.get("companyName"),
    email: formData.get("emailAddress"),
    phoneNumber: parseInt(formData.get("phoneNumber")),
    address: formData.get("streetAddress"),
    country: formData.get("selectedCountry"),
    city: formData.get("companyWebsite"),
    website: formData.get("city"),
  };

  try {
    await prisma.company.create({
      data: body,
    });
  } catch (error) {
    console.log(error.message);
  }
}


export { addCompany };
