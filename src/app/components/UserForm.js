"use client";
import React, { useEffect, useState } from "react";
import "../styles/style.css";
import Image from "next/image";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";

const UserForm = ({ userAction }) => {
  const [companyID, setCompanyID] = useState();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      dob: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("This field is required!"),
      lastName: Yup.string().required("This field is required!"),
      email: Yup.string().email("Invalid email address").required("Required"),
      phoneNumber: Yup.string()
        .matches(/^[0-9]{11}$/, "Invalid phone number")
        .required("This field is required!"),
      dob: Yup.date()
        .required("This field is required!")
        .max(new Date(), "Birthdate cannot be in the future"),
      password: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
        .matches(/\d/, "Password must contain at least one number")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .matches(
          /[a-z]/,
          "Password must contain at least one lowercase letter"
        ),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
    }),
  });

  useEffect(() => {
    setCompanyID(localStorage.getItem("companyID"));
  }, []);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const userData = new FormData(event.target);
    const response = await userAction(userData, +companyID);
    console.log(response);
    localStorage.setItem("user", userData);
    // console.log(userData.name);
    router.push("/Login");
  };

  const handleFileChange = (event) => {
    event.target.files[0];
  };

  return (
    <section className="containers">
      <Image src="/logo.png" alt="Your Company" width={150} height={150} />
      <header className="mt-9 mr-9 text-center text-gray-900">
        Create User Account
      </header>

      <form action="" className="form" onSubmit={handleFormSubmit}>
        <div className="ellipse" />
        <div className="column">
          <div className="mt-9 input-box">
            <label>First Name</label>
            <input
              type="text"
              placeholder="Enter first name"
              name="firstName"
              onChange={formik.handleChange}
              value={formik.values.firstName}
              onBlur={formik.handleBlur}
              required
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className="text-red-600">{formik.errors.firstName}</div>
            ) : null}
          </div>

          <div className="mt-9 input-box">
            <label>Last Name</label>
            <input
              type="text"
              placeholder="Enter last name"
              name="lastName"
              onChange={formik.handleChange}
              value={formik.values.lastName}
              onBlur={formik.handleBlur}
              required
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div className="text-red-600">{formik.errors.lastName}</div>
            ) : null}
          </div>
        </div>

        <div className="input-box w-full mt-[20px]">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter email address"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            required
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-600">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="column">
          <div className="input-box">
            <label>Phone Number</label>
            <input
              type="tel"
              placeholder="Enter phone number"
              name="phoneNumber"
              onChange={formik.handleChange}
              value={formik.values.phoneNumber}
              onBlur={formik.handleBlur}
              required
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
              <div className="text-red-600">{formik.errors.phoneNumber}</div>
            ) : null}
          </div>
          <div className="input-box">
            <label>Birth Date</label>
            <input
              type="date"
              placeholder="Enter birth date"
              name="dob"
              onChange={formik.handleChange}
              value={formik.values.dob}
              onBlur={formik.handleBlur}
              required
            />
            {formik.touched.dob && formik.errors.dob ? (
              <div className="text-red-600">{formik.errors.dob}</div>
            ) : null}
          </div>
        </div>

        <div className="column">
          <div className="input-box">
            <label htmlFor="file-upload" className="upload-btn">
              Proof Of Identity
            </label>
            <input
              type="file"
              name="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              required
            />
          </div>

          <div className="input-box">
            <label htmlFor="file-upload" className="upload-btn">
              Proof Of Address
            </label>
            <input type="file" accept=".pdf,.doc,.docx" required />
          </div>
        </div>

        <div className="mt-9 input-box">
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
            name="password"
            required
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-600">{formik.errors.password}</div>
          ) : null}
        </div>

        <div className="input-box w-full mt-[20px]">
          <label>Confirm Password</label>
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div className="text-red-600">{formik.errors.confirmPassword}</div>
          ) : null}
        </div>

        <Link href="/Signup">
          <button type="back" className="back-btn">
            Back
          </button>
        </Link>

        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
};

export default UserForm;
