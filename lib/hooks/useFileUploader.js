import { useState } from "react";
import axios from "axios";
import { SignedUrlAction } from "../../src/app/Actions/GetSignedUrl";
import { AddUserDocuments } from "../../src/app/Actions/userActions";
import { AddUserFiles } from "../../src/app/Actions/userActions";

const useFileUploader = () => {
  const [uploadStatus, setUploadStatus] = useState(null);

  const uploadFile = async (id, fileObject, phase) => {
    const key = Object.keys(fileObject)[0];
    const file = fileObject[key];

    try {
      const response = await SignedUrlAction(file.type);
      const url = response.success.url;

      await axios.put(url, file, {
        headers: {
          "Content-Type": file?.type,
        },
      });
      phase === "Register"
        ? await AddUserFiles(id, key, url.split("?")[0])
        : await AddUserDocuments(id, key, url.split("?")[0]);
      return { success: "File has been uploaded successfully" };
    } catch (error) {
      return "Error uploading to S3:", error;
    }
  };

  return {
    uploadFile,
    uploadStatus,
  };
};

export default useFileUploader;
