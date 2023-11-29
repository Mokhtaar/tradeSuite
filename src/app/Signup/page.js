"use client";
import React, { useState, useMemo, useEffect } from "react";
import Link from 'next/link';
//import CountrySelector from './CountrySelector';  // Adjust the path based on your actual directory structure
import countryList from "react-select-country-list";
import "../globals.css";
import "../styles/style.css";
export default function RegistrationForm() {

  const options = useMemo(() => countryList().getData(), []);
  const [formData, setFormData] = useState({
    companyName: "",
    emailAddress: "",
    phoneNumber: "",
    streetAddress: "",
    selectedCountry: "",
    city: "",
    postalCode: "",
    companyWebsite: "",
    file: null, // Store the file object
    consentChecked: false,   
  });

  
  const isDis=
  formData.companyName.length!=0 
  // formData.emailAddress &&
  // formData.phoneNumber &&
  // formData.streetAddress &&
  // formData.selectedCountry &&
  // formData.city &&
  // formData.postalCode &&
  // formData.companyWebsite;
  // formData.file  // Store the file object
  // formData.consentChecked  ;

  useEffect(()=>{
    console.log(isDis)
  },[isDis])

  

  const changeHandler = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    setFormData({
      ...formData,
      file: uploadedFile,
    });
  };

  const handleCheckboxChange = () => {
    setFormData({
      ...formData,
      consentChecked: !formData.consentChecked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  }; // Handle form submission with formData

  return (
    <body style={{ backgroundImage: "url('/6254046.jpg')", backgroundSize: "cover" }}>
    <section className="container" >
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
            value={formData.companyName}
            onChange={changeHandler}
            required
          />
        </div>

        <div className="input-box">
          <label>Email Address</label>
          <input
            type="email"
            name="emailAddress"
            placeholder="Enter email address"
            value={formData.emailAddress}
            onChange={changeHandler}
            required
          />
        </div>

        <div className="column">
          <div className="input-box">
            <label>Phone Number</label>
            <input
              type="number"
              name="phoneNumber"
              placeholder="Enter phone number"
              value={formData.phoneNumber}
              onChange={changeHandler}
              required
            />
          </div>
        </div>
        <div className="input-box address">
          <label>Address</label>
          <input
            type="text"
            name="streetAddress"
            placeholder="Enter street address"
            value={formData.streetAddress}
            onChange={changeHandler}
            required
          />
        </div>
        <div className="column">
          <div className="input-box select-box">
            <select
              name="selectedCountry"
              value={formData.selectedCountry}
              onChange={changeHandler}
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
              value={formData.city}
              onChange={changeHandler}
              required
            />
          </div>
          <div className="input-box">
            <input
              type="number"
              name="postalCode"
              placeholder="Enter postal code"
              value={formData.postalCode}
              onChange={changeHandler}
              required
            />
          </div>
          </div>
        <div className="column">
          <div className="input-box">
            <label>Company's Website</label>
            <input
              type="url"
              name="companyWebsite"
              placeholder="Enter Company website URL"
              value={formData.companyWebsite}
              onChange={changeHandler}
              required
            />
            <br />
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
                onChange={handleFileUpload}
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

        <Link href="/Signup/UserSignup">
        <button className="submit-btn" type="submit" disabled={!isDis}>Next</button>
        </Link>
      </form>
    </section>
    </body>
  );
}


