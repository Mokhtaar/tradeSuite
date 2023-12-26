"use server";
import { addCompany } from "../Actions/companyActions";
import React from "react";
import "../globals.css";
import "../styles/style.css";
import CompanyForm from "../Components/Registration/CompanyForm";

const RegistrationForm = () => {
  return <CompanyForm onSubmit={addCompany} />;
};

export default RegistrationForm;
