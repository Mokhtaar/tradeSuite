"use client";
import React, { useEffect, useState } from "react";
//import Image from "next/image";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import useFileObjects from "../../../../lib/hooks/useFileObjects";
import useFileUploader from "../../../../lib/hooks/useFileUploader";

const AddUsers = ({ closeForm , userAction}) => {
 const [companyID, setCompanyID] = useState();
 const { fileObjects, handleFileChange } = useFileObjects();
 const { uploadStatus, uploadFile } = useFileUploader();
 const router = useRouter();

 const [email, setEmail] = useState('');
const [name, setName] = useState('');
const [password, setPassword] = useState('');

  useEffect(() => {
    setCompanyID(localStorage.getItem("companyID"));
  }, []);

 

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const userData = new FormData(event.target);
    const response = await userAction(userData, companyID);
    const userId = response.success.response.id;
    try {
      let result;
      for (const fileObject of fileObjects) {
        result = await uploadFile(userId, fileObject, "Register");
        console.log(result);
      }
      result.success ? router.push("/Dashboard") : console.log(result.error);
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
    router.push("/Dashboard");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-filter backdrop-blur-md" style={{
        backgroundImage:
          "linear-gradient(170deg, rgba(140.25, 12.27, 96.74, 0.5) 1.76%, rgba(73.68, 97.25, 112.62, 0.46) 49.27%, rgba(36.35, 16.49, 158.31, 0) 100%)",
      }}>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full md:max-w-md">
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
           //   onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-sm font-semibold">
              First Name:
            </label>
            <input
              type="text"
              placeholder="Enter first name"
              name="firstName"
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-sm font-semibold">
              Last Name:
            </label>
            <input
              type="text"
              placeholder="Enter last name"
              name="lastName"
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-1 text-sm font-semibold">
              Password:
            </label>
            <input
            type="password"
            placeholder="Password"
            name="password"
            required
           className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
            />
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
