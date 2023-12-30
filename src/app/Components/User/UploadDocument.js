"use client";
import { useEffect, useState } from "react";
import useFileObjects from "@/lib/hooks/useFileObjects";
import useFileUploader from "@/lib/hooks/useFileUploader";
import FileInput from "./FileInput";
import SubmitButton from "./SubmitButton";

const inputs = [
  { name: "incomeStatement", progress: 0, url: null },
  { name: "balanceSheet", progress: 0, url: null },
  { name: "cashFlow", progress: 0, url: null },
  { name: "supplierDetails", progress: 0, url: null },
  { name: "pastOrders", progress: 0, url: null },
  { name: "yearlySales", progress: 0, url: null },
  { name: "bankStatement", progress: 0, url: null },
  { name: "previousYearlyInvoices", progress: 0, url: null },
  { name: "other", progress: 0, url: null },
];

const UploadDocument = () => {
  const { fileObjects, setFileObjects, handleFileChange } = useFileObjects();
  const { uploadStatus, progress, uploadFile, currentObj } = useFileUploader();
  const [files, setFiles] = useState(inputs);

  const handleSubmit = async () => {
    for (const fileObject of fileObjects) {
      await uploadFile(1, fileObject);
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
    <div className="container h-[70vh] overflow-y-auto max-w-3xl mx-auto mt-8 border rounded-md shadow-md">
      <form action={handleSubmit} className="mx-auto p-6 bg-white">
        {files.map((input, index) => (
          <div key={index}>
            <FileInput
              name={input.name}
              handleFileChange={handleFileChange}
              progress={input.progress}
            />
          </div>
        ))}
        <div className="flex justify-center">
          <SubmitButton />
        </div>
      </form>
    </div>
  );
};

export default UploadDocument;
