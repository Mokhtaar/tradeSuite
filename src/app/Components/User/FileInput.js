import React, { useRef } from "react";

const FileInput = ({ handleFileChange, input }) => {
  const ref = useRef();
  return (
    <div className="mb-4 sm:mb-0 space-y-2">
      <label className="block text-gray-700 text-sm font-bold">
        {input.label}
      </label>
      <input
        type="file"
        name={input.name}
        accept="image/*,.pdf,.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        onChange={handleFileChange}
        className="border  rounded w-full py-2 px-3"
      />
      <div className="relative flex items-center justify-center space-x-2">
        <div className="flex h-2 w-full overflow-hidden bg-gray-200 rounded">
          <div
            style={{ width: `${input.progress}%` }}
            className=" bg-teal-500 shadow-none text-white"
          />
        </div>
        <div className="flex  items-center justify-between">
          <div>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
              {`${input.progress}%`}
            </span>
          </div>
        </div>
      </div>
      {/* <p class="mt-1 text-sm text-gray-400" id="file_input_help">
            PDF, DOC, or Image (MAX. 2 MB).
          </p> */}
    </div>
  );
};

export default FileInput;
