"use server";

import prisma from "../../../lib/prisma";

const addCompany = async (formData) => {
  const body = {
    name: formData.get("companyName"),
    email: formData.get("emailAddress"),
    phoneNumber: parseInt(formData.get("phoneNumber")),
    address: formData.get("streetAddress"),
    country: formData.get("selectedCountry"),
    city: formData.get("city"),
    website: formData.get("companyWebsite"),
    postalCode: +formData.get("postalCode"),
  };

  try {
    const response = await prisma.company.create({
      data: body,
    });
    return { id: response.id, status: 200 };
  } catch (error) {
    return { error: error.message, status: 404 };
  }
};

export { addCompany };
