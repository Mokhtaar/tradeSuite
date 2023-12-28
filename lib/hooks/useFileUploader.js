import { useState } from "react";
import axios from "axios";
import { SignedUrlAction } from "../../src/app/Actions/GetSignedUrl";
import { AddUserDocuments } from "../../src/app/Actions/userActions";

const useFileUploader = () => {
  const [uploadError, setUploadError] = useState(null);

  const uploadFile = async (fileObject) => {
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
      const res = await AddUserDocuments(key, url.split("?")[0]);
      console.log(res);
    } catch (error) {
      setUploadError("Error uploading to S3:", error);
    }
  };

  return {
    uploadFile,
    uploadError,
  };
};

export default useFileUploader;
