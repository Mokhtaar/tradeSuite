"use client";
import { useEffect } from "react";
import useFileObjects from "@/lib/hooks/useFileObjects";
import useFileUploader from "@/lib/hooks/useFileUploader";

const UploadDocument = () => {
  const { fileObjects, handleFileChange } = useFileObjects();
  const { uploadStatus, uploadFile } = useFileUploader();

  const handleSubmit = async (e) => {
    e.preventDefault();
    for (const fileObject of fileObjects) {
      await uploadFile(1, fileObject);
    }
    console.log("uploaded");
  };

  return (
    <>
      <form
        className="fixed z-10 left-20 top-0 w-full h-full flex  bg-opacity-20"
        style={{
          backgroundColor: "black", // Set the black background for the entire sidebar
          backgroundImage:
            "linear-gradient(180deg, rgba(140.25, 12.27, 96.74, 0.5) 1.76%, rgba(73.68, 97.25, 112.62, 0.46) 49.27%, rgba(36.35, 16.49, 158.31, 0) 100%)",
        }}
      >
        <div className="extraOutline p-4 mb-9 bg-white w-max bg-whtie m-auto rounded-lg ">
          <header className="text-center text-indigo-500 pb-7 mt-3 font-bold text-[40px] text-lg">
            Upload Files
          </header>
          <div className="p-3">
            <div className="mb-2">
              <span className="text-base">
                Please Provide a detailed business plan outlining the purpose of
                the financing, your company&apos;s history, and future
                projections.
              </span>
            </div>
          </div>

          {/* <div className="flex items-center justify-center">
            <label
              for="dropzone-file"
              className="flex flex-col items-center justify-center border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div> */}

          <form className="max-w-lg mx-auto">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              for="user_avatar"
            >
              Upload file
            </label>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              aria-describedby="user_avatar_help"
              id="user_avatar"
              type="file"
            />
            <div
              className="mt-1 text-sm text-gray-500 dark:text-gray-300"
              id="user_avatar_help"
            >
              A profile picture is useful to confirm your are logged into your
              account
            </div>
          </form>

          <div className="input_field flex flex-col w-max mx-auto text-center ">
            <div className="flex flex-row items-start justify-end space-x-4">
              <label>
                incomeStatement
                <input
                  name="incomeStatement"
                  className="text-sm cursor-pointer w-36 hidden"
                  type="file"
                  onChange={handleFileChange}
                  multiple
                />
                <div className="text bg-gradient-to-tr from-[#4776E6]  via-[#8E54E9]   to-[#8E54E9]  text-white rounded font-semibold cursor-pointer p-1 px-3 hover:bg-indigo-500">
                  Select
                </div>
              </label>
              <label>
                Balance Sheet
                <input
                  name="balanceSheet"
                  className="text-sm cursor-pointer w-36 hidden"
                  type="file"
                  onChange={handleFileChange}
                  multiple
                />
                <div className="text bg-gradient-to-tr from-[#4776E6]  via-[#8E54E9]   to-[#8E54E9]  text-white rounded font-semibold cursor-pointer p-1 px-3 hover:bg-indigo-500">
                  Select
                </div>
              </label>
            </div>
            <label>
              Cash Flow Statement
              <input
                className="text-sm cursor-pointer w-36 hidden"
                type="file"
                name="cashFlow"
                onChange={handleFileChange}
                multiple
              />
              <div className="text bg-gradient-to-tr from-[#4776E6]  via-[#8E54E9]   to-[#8E54E9]  text-white rounded font-semibold cursor-pointer p-1 px-3 hover:bg-indigo-500">
                Select
              </div>
            </label>
            <label>
              Supplier Details
              <input
                className="text-sm cursor-pointer w-36 hidden"
                type="file"
                name="supplierDetails"
                onChange={handleFileChange}
                multiple
              />
              <div className="text bg-gradient-to-tr from-[#4776E6]  via-[#8E54E9]   to-[#8E54E9]  text-white rounded font-semibold cursor-pointer p-1 px-3 hover:bg-indigo-500">
                Select
              </div>
            </label>
            <label>
              Past orders
              <input
                name="pastOrders"
                className="text-sm cursor-pointer w-36 hidden"
                type="file"
                multiple
                onChange={handleFileChange}
              />
              <div className="text bg-gradient-to-tr from-[#4776E6]  via-[#8E54E9]   to-[#8E54E9]  text-white rounded font-semibold cursor-pointer p-1 px-3 hover:bg-indigo-500">
                Select
              </div>
            </label>
            <label>
              Yearly Sales Volume
              <input
                name="yearlySales"
                className="text-sm cursor-pointer w-36 hidden"
                type="file"
                multiple
                onChange={handleFileChange}
              />
              <div className="text bg-gradient-to-tr from-[#4776E6]  via-[#8E54E9]   to-[#8E54E9]  text-white rounded font-semibold cursor-pointer p-1 px-3 hover:bg-indigo-500">
                Select
              </div>
            </label>
            <label>
              Bank Account Statements
              <input
                name="bankStatement"
                className="text-sm cursor-pointer w-36 hidden"
                type="file"
                multiple
                onChange={handleFileChange}
              />
              <div className="text bg-gradient-to-tr from-[#4776E6]  via-[#8E54E9]   to-[#8E54E9]  text-white rounded font-semibold cursor-pointer p-1 px-3 hover:bg-indigo-500">
                Select
              </div>
            </label>
            <label>
              Previous Yearly Invoices
              <input
                name="previousYearlyInvoices"
                className="text-sm cursor-pointer w-36 hidden"
                type="file"
                multiple
                onChange={handleFileChange}
              />
              <div className="text bg-gradient-to-tr from-[#4776E6]  via-[#8E54E9]   to-[#8E54E9]  text-white rounded font-semibold cursor-pointer p-1 px-3 hover:bg-indigo-500">
                Select
              </div>
            </label>
            <label>
              Other Supported Documents
              <input
                name="other"
                className="text-sm cursor-pointer w-36 hidden"
                type="file"
                multiple
                // onChange={handleFileChange}
              />
              <div className="text bg-gradient-to-tr from-[#4776E6]  via-[#8E54E9]   to-[#8E54E9]  text-white rounded font-semibold cursor-pointer p-1 px-3 hover:bg-indigo-500">
                Select
              </div>
            </label>
          </div>

          {/* <div className="p-3">
            <div className="mb-2">
              <span className="text-base">Title</span>
              <input
                type="text"
                className="h-12 px-3 w-full border-gray-200 border rounded focus:outline-none focus:border-gray-300"
              />
            </div>
          </div>
          <div
            className="file_upload p-5 relative border-4 border-dotted border-gray-300 rounded-lg"
            style={{ width: "550px" }}
          >
            <svg
              className="text-indigo-500 w-24 mx-auto mb-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            <div className="input_field flex flex-col w-max mx-auto text-center">
              <label>
                <input
                  className="text-sm cursor-pointer w-36 hidden"
                  type="file"
                  multiple
                />
                <div className="text bg-gradient-to-tr from-[#4776E6]  via-[#8E54E9]   to-[#8E54E9]  text-white rounded font-semibold cursor-pointer p-1 px-3 hover:bg-indigo-500">
                  Select
                </div>
              </label>

              <div className="title text-indigo-500 uppercase">
                or drop files here
              </div>
            </div>
          </div>
          <button className="w-full h-12 text-lg  mt-5 bg-blue-600 rounded text-white hover:bg-blue-700">
            Create
          </button> */}
        </div>
        <button
          onClick={(e) => handleSubmit(e)}
          className="text-red-800 text-2xl right-48 absolute top-20 bg-black w-44"
        >
          Sumbit
        </button>
      </form>
    </>
  );
};
export default UploadDocument;