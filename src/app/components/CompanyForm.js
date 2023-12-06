"use client";
import React, { useMemo } from "react";
import countryList from "react-select-country-list";
import "../globals.css";
import "../styles/style.css";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";

const CompanyForm = ({ onSubmit }) => {
  const options = useMemo(() => countryList().getData(), []);
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      companyName: "",
    },
    validationSchema: Yup.object({
      companyName: Yup.string().required("Company Name is Required"),
      emailAddress: Yup.string()
        .email("Invalid email address")
        .required("Required"),
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

  return (
    <section className="container">
      <img className="float-left" src="/logo.png" width={120} height={40} />
      <div className="center-content">
        <header >Company Registration Form</header>
        <br />
      </div>
      <div className="overlap">
      <div className="ellipse" />

      <form onSubmit={handleSubmit} className="form">
        <div className="input-box">
          <br />
          <br /> <label >Company Name</label>
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
            <div className="text-red-600">{formik.errors.companyName}</div>
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
            <div className="text-red-600">{formik.errors.emailAddress}</div>
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
            {formik.touched.selectedCountry && formik.errors.selectedCountry ? (
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
              <div className="text-red-600">{formik.errors.companyWebsite}</div>
            ) : null}
          </div>
        </div>
        <div>
          <div className="input-box file-upload">
            <label className="">
              upload File
              <input
                type="file"
                className="custom-file-upload"
                multiple={false}
                accept=".pdf, .doc, .docx"
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
