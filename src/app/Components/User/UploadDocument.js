"use client";
import { useEffect, useState } from "react";
import useFileObjects from "@/lib/hooks/useFileObjects";
import useFileUploader from "@/lib/hooks/useFileUploader";
import FileInput from "./FileInput";
import SubmitButton from "./SubmitButton";
import { useSession } from "next-auth/react";

const inputs = [
  {
    label: "Income Statement",
    name: "incomeStatement",
    progress: 0,
    url: null,
  },
  { label: "Balance Sheet", name: "balanceSheet", progress: 0, url: null },
  { label: "Cash Flow", name: "cashFlow", progress: 0, url: null },
  {
    label: "Supplier Details",
    name: "supplierDetails",
    progress: 0,
    url: null,
  },
  { label: "Past Orders", name: "pastOrders", progress: 0, url: null },
  { label: "Yearly Sales", name: "yearlySales", progress: 0, url: null },
  { label: "Bank Statement", name: "bankStatement", progress: 0, url: null },
  {
    label: "Previous Yearly Invoices",
    name: "previousYearlyInvoices",
    progress: 0,
    url: null,
  },
  { label: "Other", name: "other", progress: 0, url: null },
];

const UploadDocument = () => {
  const { fileObjects, setFileObjects, handleFileChange } = useFileObjects();
  const { uploadStatus, progress, uploadFile, currentObj } = useFileUploader();
  const [files, setFiles] = useState(inputs);
  const { data } = useSession();

  const handleSubmit = async () => {
    for (const fileObject of fileObjects) {
      await uploadFile(data.user.companyID, fileObject);
    }
    setFileObjects([]);
    console.log("uploaded");
  };

  useEffect(() => {
    setFiles((prevFiles) =>
      prevFiles.map((file) =>
        file.name === currentObj ? { ...file, progress } : file
      )
    );
  }, [currentObj, progress]);

  return (
    <div className="relative max-w-4xl mx-auto sm:mt-8 border rounded-md shadow-md">
      <form
        action={handleSubmit}
        className="mx-auto h-[75vh] overflow-y-auto p-9 bg-white sm:grid sm:grid-cols-2 gap-y-5 gap-x-10"
      >
        {files.map((input, index) => (
          <div key={index}>
            <FileInput input={input} handleFileChange={handleFileChange} />
          </div>
        ))}
        <div className="mt-7 sm:mt-0 flex justify-center items-center">
          <SubmitButton />
        </div>
      </form>
    </div>
  );
};

export default UploadDocument;
