import { useEffect } from "react";
import useFileObjects from "../../../../lib/hooks/useFileObjects";
import useFileUploader from "../../../../lib/hooks/useFileUploader";

const UploadDocument = () => {
  const { fileObjects, handleFileChange } = useFileObjects();
  const { uploadError, uploadFile } = useFileUploader();

  const handleSubmit = async (e) => {
    e.preventDefault();
    for (const fileObject of fileObjects) {
      uploadFile(fileObject);
    }
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
