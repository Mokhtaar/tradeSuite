// components/FileUploader.js
"use client";
import { useEffect, useState } from "react";
import useFileObjects from "@/lib/hooks/useFileObjects";
import useFileUploader from "@/lib/hooks/useFileUploader";
import FileInput from "./FileInput";

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
  const { fileObjects, handleFileChange } = useFileObjects();
  const { uploadStatus, progress, uploadFile, currentObj, setProgress } =
    useFileUploader();

  const [files, setFiles] = useState(inputs);

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     for (const fileObject of fileObjects) {
  //       await uploadFile(1, fileObject);
  //     }
  //     console.log("uploaded");
  //   };
  const handleSubmit = async (e) => {
    e.preventDefault();
    for (let i = 0; i < fileObjects.length; i++) {
      i < fileObjects.length - 1
        ? (await uploadFile(1, fileObjects[i]), setProgress(0))
        : await uploadFile(1, fileObjects[i]);
    }
    console.log("uploaded");
  };

  useEffect(() => {
    setFiles((prevFiles) => {
      return prevFiles.map((file) => ({
        ...file,
        progress: file.name === currentObj ? progress : file.progress,
      }));
    });
  }, [currentObj, progress]);

  return (
    <div className="container max-w-3xl mx-auto mt-8">
      <div className="mx-auto p-6 bg-white border rounded-md shadow-md">
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
          <button
            onClick={handleSubmit}
            className="bg-teal-500 w-96 text-white px-4 py-2 rounded-md mr-2"
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadDocument;
