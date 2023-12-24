/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useMemo, useState } from "react";
import countryList from "react-select-country-list";
import "../styles/style.css";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { SignedUrlAction } from "../Actions/GetSignedUrl";
import { AddCompanyFile } from "../Actions/AddComapanyFile";

const computeSHA256 = async (file) => {
  const buffer = await file?.arrayBuffer();
  const hashBuffer = await crypto.subtle.digest("SHA-256", buffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return hashHex;
};

const CompanyForm = ({ onSubmit }) => {
  const options = useMemo(() => countryList().getData(), []);
  const router = useRouter();
  const [file, setFile] = useState();
  const [fileURL, setFileURL] = useState();
  const formik = useFormik({
    initialValues: {
      companyName: "",
      emailAddress: "",
      streetAddress: "",
      phoneNumber: "",
      selectedCountry: "",
      city: "",
      postalCode: "",
      companyWebsite: "",
    },
    validationSchema: Yup.object({
      companyName: Yup.string().required("Company Name is Required"),
      emailAddress: Yup.string()
        .email("Invalid email address")
        .required("Please provide Email Address"),
      streetAddress: Yup.string().required("Street Address is Required"),
      phoneNumber: Yup.string()
        .matches(/^[0-9]{11}$/, "Invalid phone number")
        .required("Phone Number is Required"),

      selectedCountry: Yup.string().required("Please select a country"),
      city: Yup.string().required("City is Required"),
      postalCode: Yup.number().required("Postal Code is Required"),
      companyWebsite: Yup.string()
        .url("Invalid URL")
        .required("Company Website is Required"),
    }),
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const response = await onSubmit(formData);
    console.log(response);
    if (response.status === 200) {
      localStorage.setItem("companyID", response.id);
      router.push("/Signup/UserSignup");
    }
  };

  const handleFileUpload = async (e) => {
    if (file) {
      const response = await SignedUrlAction();
      if (response.success) {
        const url = response.success.url;
        console.log(url);
        uploadFile(url);
      } else {
        console.error("Error getting signed URL", response.failure);
      }
    }
  };

  //   if (fileURL) {
  //     URL.revokeObjectURL(fileURL);
  //   }
  //   if (file) {
  //     const url = URL.createObjectURL(file);
  //     setFileURL(url);
  //   } else {
  //     setFileURL(undefined);
  //   }
  // };

  const uploadFile = async (url) => {
    try {
      const response = await axios.put(url, file, {
        headers: {
          "Content-Type": file?.type,
        },
      });
      await AddCompanyFile(url.split("?")[0]);
      console.log("Upload successful");
    } catch (error) {
      console.error("Error uploading file", error);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  useEffect(() => {
    handleFileUpload();
  }, [file]);

  return (
    <section className="containers">
      <img src="/logo.png" width={150} height={150} />

      <header className="mt-9 mr-9 text-center text-gray-900">
        Company Registration
      </header>

      <div className="overlap">
        <div className="ellipse" />

        <form onSubmit={handleSubmit} className="form">
          <div className="input-box">
            <label>Company Name</label>
            <input
              type="text"
              name="companyName"
              placeholder="Company name"
              onChange={formik.handleChange}
              value={formik.values.companyName}
              onBlur={formik.handleBlur}
              required
            />
            {formik.touched.companyName && formik.errors.companyName ? (
              <div className=" text-red-400">{formik.errors.companyName}</div>
            ) : null}
          </div>

          <div className="input-box">
            <label className="">Email Address</label>
            <input
              type="email"
              name="emailAddress"
              placeholder="Enter email address"
              required
              onChange={formik.handleChange}
              value={formik.values.emailAddress}
              onBlur={formik.handleBlur}
            />
            {formik.touched.emailAddress && formik.errors.emailAddress ? (
              <div className="text-pink-600">{formik.errors.emailAddress}</div>
            ) : null}
          </div>

          <div className="column">
            <div className="input-box">
              <label className="">Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Enter phone number"
                onChange={formik.handleChange}
                value={formik.values.phoneNumber}
                onBlur={formik.handleBlur}
              />
              {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                <div className="text-red-600">{formik.errors.phoneNumber}</div>
              ) : null}
            </div>
          </div>
          <div className="input-box address">
            <label className="">Address</label>
            <input
              type="text"
              name="streetAddress"
              placeholder="Enter street address"
              required
              onChange={formik.handleChange}
              value={formik.values.streetAddress}
              onBlur={formik.handleBlur}
            />
            {formik.touched.streetAddress && formik.errors.streetAddress ? (
              <div className="text-red-600">{formik.errors.streetAddress}</div>
            ) : null}
          </div>
          <div className="column">
            <div className="inputbox2 select-box">
              <select
                name="selectedCountry"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.selectedCountry}
              >
                <option value="">Select a country</option>
                {options.map((country) => (
                  <option key={country.value} value={country.value}>
                    {country.label}
                  </option>
                ))}
              </select>
              {formik.touched.selectedCountry &&
              formik.errors.selectedCountry ? (
                <div className="text-red-600">
                  {formik.errors.selectedCountry}
                </div>
              ) : null}
            </div>
            {/* <div className="column"> */}
            <div className="input-box">
              <input
                type="text"
                name="city"
                placeholder="Enter your city"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.city}
                required
              />
              {formik.touched.city && formik.errors.city ? (
                <div className="text-red-600">{formik.errors.city}</div>
              ) : null}
            </div>
            <div className="input-box">
              <input
                type="number"
                name="postalCode"
                placeholder="Enter postal code"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.postalCode}
                required
              />
              {formik.touched.postalCode && formik.errors.postalCode ? (
                <div className="text-red-600">{formik.errors.postalCode}</div>
              ) : null}
            </div>
          </div>

          <div className="column">
            <div className="input-box">
              <label className="">Company&apos;s Website</label>
              <input
                type="url"
                name="companyWebsite"
                placeholder="Enter Company website URL"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.companyWebsite}
                required
              />
              <br />
              {formik.touched.companyWebsite && formik.errors.companyWebsite ? (
                <div className="text-red-600">
                  {formik.errors.companyWebsite}
                </div>
              ) : null}
            </div>
          </div>
          <div>
            <div className="input-box file-upload">
              <label className="">
                Tax Register
                <input
                  type="file"
                  name="file"
                  className="custom-file-upload"
                  multiple={false}
                  accept=".pdf, .doc, .docx"
                  onChange={handleFileChange}
                />
              </label>
            </div>
          </div>

          <br />
          <input type="checkbox" required />
          <span></span>
          <label className="">
            {" "}
            You are permitted to share your employee data with Trade Suite and
            provide explicit consent for them to store and manage this data on
            behalf of your company.
          </label>

          <button className="submit-btn" type="submit">
            Next{" "}
          </button>
        </form>
      </div>
    </section>
  );
};

export default CompanyForm;
