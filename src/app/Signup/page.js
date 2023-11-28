/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useMemo } from "react";
import Link from "next/link";
import countryList from "react-select-country-list";
import prisma from "../../../lib/prisma";
import "../globals.css";
import "../styles/style.css";
export default function RegistrationForm() {
  const options = useMemo(() => countryList().getData(), []);
  // const [formData, setFormData] = useState({
  //   companyName: "",
  //   emailAddress: "",
  //   phoneNumber: "",
  //   streetAddress: "",
  //   selectedCountry: "",
  //   city: "",
  //   postalCode: "",
  //   companyWebsite: "",
  //   file: null,
  //   consentChecked: false,
  // });

  // const [formErrors, setFormErrors] = useState({
  //   companyName: "",
  //   emailAddress: "",
  //   phoneNumber: "",
  //   streetAddress: "",
  //   selectedCountry: "",
  //   city: "",
  //   postalCode: "",
  //   companyWebsite: "",
  //   consentChecked: "",
  // });

  // const handleFileUpload = (event) => {
  //   const uploadedFile = event.target.files[0];
  //   setFormData({
  //     ...formData,
  //     file: uploadedFile,
  //   });
  // };

  const addCompany = async (formData) => {
    "use server";
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
  };
  return (
    <body
      style={{
        backgroundImage: "url('/6254046.jpg')",
        backgroundSize: "cover",
      }}
    >
      <section className="container">
        <img className="float-left" src="/logo.png" width={120} height={40} />
        <div className="center-content">
          <header>Company Registration Form</header>
          <br />
        </div>
        <form action={addCompany} className="form">
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
          <span></span>
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
            // onClick={() => router.push('/Signup/UserSignup')}
          >
            Next{" "}
          </button>
          {/* <button className="submit-btn" type="button">    
      Next
    </button> 
          {/* </Link> */}
        </form>
      </section>
    </body>
  );
}

// RegistrationForm.js
// import React from "react";
// import Link from "next/link";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import countryList from "react-select-country-list";

// const validationSchema = Yup.object({
//   companyName: Yup.string().required("Company Name is required"),
//   emailAddress: Yup.string()
//     .email("Invalid email address")
//     .required("Email is required"),
//   phoneNumber: Yup.number().required("Phone Number is required"),
//   streetAddress: Yup.string().required("Street Address is required"),
//   selectedCountry: Yup.string().required("Country is required"),
//   city: Yup.string().required("City is required"),
//   postalCode: Yup.number().required("Postal Code is required"),
//   companyWebsite: Yup.string()
//     .url("Invalid URL")
//     .required("Company Website is required"),
//   consentChecked: Yup.boolean().oneOf([true], "You must agree to the terms"),
// });

// export default function RegistrationForm() {
//   const formik = useFormik({
//     initialValues: {
//       companyName: "",
//       emailAddress: "",
//       phoneNumber: "",
//       streetAddress: "",
//       selectedCountry: "",
//       city: "",
//       postalCode: "",
//       companyWebsite: "",
//       consentChecked: false,
//     },
//     // validationSchema: validationSchema,
//     onSubmit: (values) => {
//       console.log(values);
//       // Navigate to the next page using Link
//       // return (
//       //   <Link href="/Signup/UserSignup">
//       //     <a>Navigate to User Signup Page</a>
//       //   </Link>
//       // );
//     },
//   });

//   const options = countryList().getData();

//   return (
//     <body
//       style={{
//         backgroundImage: "url('/6254046.jpg')",
//         backgroundSize: "cover",
//       }}
//     >
//       <section className="container">
//         <img className="float-left" src="/logo.png" width={120} height={40} />
//         <div className="center-content">
//           <header>Company Registration Form</header>
//           <br />
//         </div>
//         <form onSubmit={formik.handleSubmit}>
//           <div className="input-box">
//             <label>Company Name</label>
//             <input
//               type="text"
//               name="companyName"
//               placeholder="Company name"
//               value={formik.values.companyName}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//             />
//             {formik.touched.companyName && formik.errors.companyName && (
//               <span style={{ color: "red" }}>{formik.errors.companyName}</span>
//             )}
//           </div>

//           <div className="input-box">
//             <label>Email Address</label>
//             <input
//               type="email"
//               name="emailAddress"
//               placeholder="Enter email address"
//               value={formik.values.emailAddress}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//             />
//             {formik.touched.emailAddress && formik.errors.emailAddress && (
//               <span style={{ color: "red" }}>{formik.errors.emailAddress}</span>
//             )}
//           </div>

//           <div className="column">
//             <div className="input-box">
//               <label>Phone Number</label>
//               <input
//                 type="number"
//                 name="phoneNumber"
//                 placeholder="Enter phone number"
//                 value={formik.values.phoneNumber}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//               />
//               {formik.touched.phoneNumber && formik.errors.phoneNumber && (
//                 <span style={{ color: "red" }}>
//                   {formik.errors.phoneNumber}
//                 </span>
//               )}
//             </div>
//           </div>

//           <div className="input-box address">
//             <label>Address</label>
//             <input
//               type="text"
//               name="streetAddress"
//               placeholder="Enter street address"
//               value={formik.values.streetAddress}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//             />
//             {formik.touched.streetAddress && formik.errors.streetAddress && (
//               <span style={{ color: "red" }}>
//                 {formik.errors.streetAddress}
//               </span>
//             )}
//           </div>

//           <div className="column">
//             <div className="input-box select-box">
//               <select
//                 name="selectedCountry"
//                 value={formik.values.selectedCountry}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 required
//               >
//                 <option value="" disabled>
//                   Select a country
//                 </option>
//                 {options.map((country) => (
//                   <option key={country.value} value={country.value}>
//                     {country.label}
//                   </option>
//                 ))}
//               </select>
//               {formik.touched.selectedCountry &&
//                 formik.errors.selectedCountry && (
//                   <span style={{ color: "red" }}>
//                     {formik.errors.selectedCountry}
//                   </span>
//                 )}
//             </div>
//           </div>

//           <div className="column">
//             <div className="input-box">
//               <input
//                 type="text"
//                 name="city"
//                 placeholder="Enter your city"
//                 value={formik.values.city}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//               />
//               {formik.touched.city && formik.errors.city && (
//                 <span style={{ color: "red" }}>{formik.errors.city}</span>
//               )}
//             </div>
//             <div className="input-box">
//               <input
//                 type="number"
//                 name="postalCode"
//                 placeholder="Enter postal code"
//                 value={formik.values.postalCode}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//               />
//               {formik.touched.postalCode && formik.errors.postalCode && (
//                 <span style={{ color: "red" }}>{formik.errors.postalCode}</span>
//               )}
//             </div>
//           </div>

//           <div className="column">
//             <div className="input-box">
//               <label>Company's Website</label>
//               <input
//                 type="url"
//                 name="companyWebsite"
//                 placeholder="Enter Company website URL"
//                 value={formik.values.companyWebsite}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 required
//               />
//               {formik.touched.companyWebsite &&
//                 formik.errors.companyWebsite && (
//                   <span style={{ color: "red" }}>
//                     {formik.errors.companyWebsite}
//                   </span>
//                 )}
//               <br />
//             </div>
//           </div>

//           <div>
//             <div className="input-box file-upload">
//               <label className="buttonUpload">
//                 Choose File
//                 <input
//                   type="file"
//                   className="custom-file-upload"
//                   multiple={false}
//                   accept=".pdf, .doc, .docx"
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   required
//                 />
//               </label>
//             </div>
//           </div>

//           <br />
//           <input
//             type="checkbox"
//             name="consentChecked"
//             checked={formik.values.consentChecked}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             required
//           />
//           <span></span>
//           <label>
//             You are permitted to share your employee data with Trade Suite and
//             provide explicit consent for them to store and manage this data on
//             behalf of your company.
//           </label>

//           <button type="submit">Next</button>
//         </form>
//       </section>
//     </body>
//   );
// };
