"use client";
import { useState } from "react";

const useFileObjects = () => {
  const [fileObjects, setFileObjects] = useState([]);
  const handleFileChange = (event) => {
    const { name, files } = event.target;
    if (files.length === 0) {
      return;
    }
    const file = files[0];
    const keyExists = fileObjects.some((obj) => Object.keys(obj)[0] === name);
    setFileObjects((prevFileObjects) => {
      return keyExists
        ? prevFileObjects.map((obj) =>
            Object.keys(obj)[0] === name ? { [name]: file } : obj
          )
        : [...prevFileObjects, { [name]: file }];
    });
  };

  return {
    fileObjects,
    handleFileChange,
  };
};

export default useFileObjects;
