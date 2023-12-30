"use client";
import React, { useEffect } from "react";
import { useFormStatus } from "react-dom";
import classNames from "classnames";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className={classNames(
        pending ? "bg-gray-400" : "bg-teal-500",
        "w-96 text-white px-4 py-2 rounded-md mr-2"
      )}
    >
      {pending ? "Uploading..." : "Upload"}
    </button>
  );
};

export default SubmitButton;
