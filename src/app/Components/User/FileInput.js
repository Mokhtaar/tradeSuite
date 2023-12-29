import React from "react";

const FileInput = ({ handleFileChange, progress, name }) => {
  return (
    <div className="flex space-x-10">
      <div className="mb-4 w-full">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          {name}
        </label>
        <input
          type="file"
          name={name}
          onChange={handleFileChange}
          className="border rounded w-full py-2 px-3"
        />
      </div>
      <div className="mb-4 w-full">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Progress
        </label>
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
                {`${progress}%`}
              </span>
            </div>
          </div>
          <div className="flex h-2 mb-4 overflow-hidden bg-gray-200 rounded">
            <div
              style={{ width: `${progress}%` }}
              className="flex flex-col justify-center bg-teal-500 shadow-none text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileInput;
