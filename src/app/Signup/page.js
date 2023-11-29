/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use server";
import { addCompany } from '../companyActions';
import React, { useMemo } from "react";
import Link from "next/link";
import prisma from "../../../lib/prisma";
import "../globals.css";
import "../styles/style.css";
import CompanyForm from '../components/CompanyForm';

  
const RegistrationForm = () => {
  return <CompanyForm onSubmit={addCompany}
   />;
};

export default RegistrationForm;