"use client";
import React from "react";
import { useFormStatus } from "react-dom";
import classNames from "classnames";


const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={classNames(
        pending ? "bg-gray-400" : "bg-teal-500",
        "w-44 text-white px-4 py-2 rounded-md"
      )}
    >
      {pending ? "Uploading..." : "Upload"}
    </button>
  );
};

export default SubmitButton;
