"use client";
import React, { useEffect, useState } from "react";
//import Image from "next/image";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import useFileObjects from "../../../../lib/hooks/useFileObjects";
import useFileUploader from "../../../../lib/hooks/useFileUploader";
import { useSession } from "next-auth/react";

const AddUsers = ({ closeForm, userAction }) => {
  const [companyID, setCompanyID] = useState();
  const { fileObjects, handleFileChange } = useFileObjects();
  const { uploadStatus, uploadFile } = useFileUploader();
  const router = useRouter();
  const { data } = useSession();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("This field is required!"),
      lastName: Yup.string().required("This field is required!"),

      email: Yup.string()
        .email("Invalid email address")
        .required("This field is required!"),

      password: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
        .matches(/\d/, "Password must contain at least one number")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .matches(
          /[a-z]/,
          "Password must contain at least one lowercase letter"
        ),
    }),
  });

  useEffect(() => {
    setCompanyID(data.user.companyID);
  }, [data]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const userData = new FormData(event.target);
    const response = await userAction(userData, companyID);
    const userId = response.success.id;
    try {
      let result;
      for (const fileObject of fileObjects) {
        result = await uploadFile(userId, fileObject, "Register");
        console.log(result);
      }
      result.success ? window.location.reload() : console.log(result.error);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = () => {
    // // Clear form fields
    // setEmail('');
    // setName('');
    // setPassword('');
    // // Close the form
    // closeForm();
    window.location.reload();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-filter backdrop-blur-md"
      style={{
        backgroundImage:
          "linear-gradient(170deg, rgba(140.25, 12.27, 96.74, 0.5) 1.76%, rgba(73.68, 97.25, 112.62, 0.46) 49.27%, rgba(36.35, 16.49, 158.31, 0) 100%)",
      }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg  w-full max-w-2xl mx-auto">
        <h2 className="text-xl font-semibold mb-6 text-center">Add Users</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 text-sm font-semibold">
              Email:
            </label>
            <input
              type="email"
              placeholder="Enter email address"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
              required
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-600">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-sm font-semibold">
              First Name:
            </label>
            <input
              type="text"
              placeholder="Enter first name"
              name="firstName"
              onChange={formik.handleChange}
              value={formik.values.firstName}
              onBlur={formik.handleBlur}
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
              required
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className="text-red-600">{formik.errors.firstName}</div>
            ) : null}
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-sm font-semibold">
              Last Name:
            </label>
            <input
              type="text"
              placeholder="Enter last name"
              name="lastName"
              onChange={formik.handleChange}
              value={formik.values.lastName}
              onBlur={formik.handleBlur}
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
              required
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div className="text-red-600">{formik.errors.lastName}</div>
            ) : null}
          </div>
          <div className="flex">
            <div className="mb-4 mr-4">
              <label
                htmlFor="firstFile"
                className="block mb-1 text-sm font-semibold"
              >
                Proof Of Identity
              </label>
              <input
                type="file"
                name="proofOfIdentity"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="secondFile"
                className="block mb-1 text-sm font-semibold"
              >
                Proof Of Address
              </label>
              <input
                name="proofOfAddress"
                type="file"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block mb-1 text-sm font-semibold"
            >
              Password:
            </label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
              required
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-600">{formik.errors.password}</div>
            ) : null}
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleCancel}
              className="mr-4 px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 focus:outline-none"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUsers;
