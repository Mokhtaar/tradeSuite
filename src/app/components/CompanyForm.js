"use client";
import React, { useMemo } from "react";
import Link from "next/link";
import countryList from "react-select-country-list";
import prisma from "../../../lib/prisma";
import "../globals.css";
import "../styles/style.css";
import { useRouter } from 'next/navigation'

import RegistrationForm from '../Signup/page';

const CompanyForm = ({ onSubmit }) => {
  const options = useMemo(() => countryList().getData(), []);
  const router = useRouter()
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    onSubmit(formData);
    router.push('/Signup/UserSignup')
  };

  return (
  
    <section className="container">
      <img className="float-left" src="/logo.png" width={120} height={40} />
      <div className="center-content">
        <header>Company Registration Form</header>
        <br />
      </div>
      <form onSubmit={handleSubmit} className="form">
        <div className="input-box">
          <br />
          <br /> <label>Company Name</label>
          <input
            type="text"
            name="companyName"
            placeholder="Company name"
            // value={formData.companyName}
            // onChange={changeHandler}
          />
          {/* Display error message for companyName */}
          {/* <span style={{ color: "red" }}>{formErrors.companyName}</span> */}
        </div>

        <div className="input-box">
          <label>Email Address</label>
          <input
            type="email"
            name="emailAddress"
            placeholder="Enter email address"
            // value={formData.emailAddress}
            // onChange={changeHandler}
          />
          {/* <span style={{ color: "red" }}>{formErrors.emailAddress}</span> */}
        </div>

        <div className="column">
          <div className="input-box">
            <label>Phone Number</label>
            <input
              type="number"
              name="phoneNumber"
              placeholder="Enter phone number"
              // value={formData.phoneNumber}
              // onChange={changeHandler}
            />
            {/* <span style={{ color: "red" }}>{formErrors.phoneNumber}</span> */}
          </div>
        </div>
        <div className="input-box address">
          <label>Address</label>
          <input
            type="text"
            name="streetAddress"
            placeholder="Enter street address"
            // value={formData.streetAddress}
            // onChange={changeHandler}
          />
          {/* <span style={{ color: "red" }}>{formErrors.streetAddress}</span> */}
        </div>
        <div className="column">
          <div className="input-box select-box">
            <select
              name="selectedCountry"
              // value={formData.selectedCountry}
              // onChange={changeHandler}
              required
            >
              <option value="" disabled>
                Select a country
              </option>
              {options.map((country) => (
                <option key={country.value} value={country.value}>
                  {country.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="column">
          <div className="input-box">
            <input
              type="text"
              name="city"
              placeholder="Enter your city"
              // value={formData.city}
              // onChange={changeHandler}
            />
            {/* <span style={{ color: "red" }}>{formErrors.city}</span> */}
          </div>
          <div className="input-box">
            <input
              type="number"
              name="postalCode"
              placeholder="Enter postal code"
              // value={formData.postalCode}
              // onChange={changeHandler}
            />
            {/* <span style={{ color: "red" }}>{formErrors.postalCode}</span> */}
          </div>
        </div>
        <div className="column">
          <div className="input-box">
            <label>Company&apos;s Website</label>
            <input
              type="url"
              name="companyWebsite"
              placeholder="Enter Company website URL"
              // value={formData.companyWebsite}
              // onChange={changeHandler}
              required
            />
            <br />
            {/* <span style={{ color: "red" }}>{formErrors.companyWebsite}</span> */}
          </div>
        </div>
        <div>
          <div className="input-box file-upload">
            <label className="buttonUpload">
              Choose File
              <input
                type="file"
                className="custom-file-upload"
                multiple={false}
                accept=".pdf, .doc, .docx"
                // onChange={handleFileUpload}
              />
            </label>
          </div>
        </div>

      <br />
      <input type="checkbox" required />
      <span ></span>
      <label>
        {" "}
        You are permitted to share your employee data with Trade Suite and
        provide explicit consent for them to store and manage this data on
        behalf of your company.
      </label>

        {/* Use Link component for navigation */}
        {/* <Link href="/Signup/UserSignup"> */}

        {/* <button className="submit-btn" type="submit"  >Next</button> */}
        
        <button
          className="submit-btn"
          type="submit"
          //  onClick={handleSubmit}
        >
          Next{" "}
        </button>
        {/* <button className="submit-btn" type="button">    
    Next
  </button> 
        {/* </Link> */}
      </form>
    </section>

  );
};

export default CompanyForm;
