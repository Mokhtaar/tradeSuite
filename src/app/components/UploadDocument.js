import React from 'react';

const UploadDocument = () => {
    return (
      <div>
        <div className="fixed z-10 left-20 top-0 w-full h-full flex bg-black bg-opacity-60">
      
        <div className="extraOutline p-4 mb-9 bg-white w-max bg-whtie m-auto rounded-lg ">
        <header className="text-center text-indigo-500 pb-7 mt-3 font-bold text-[40px] text-lg">Upload Files</header>
        <div className="p-3">
              <div className="mb-2">
                <span className="text-base">Title</span>
                <input
                  type="text"
                  className="h-12 px-3 w-full border-gray-200 border rounded focus:outline-none focus:border-gray-300"
                />
    </div>
    </div>
          <div
            className="file_upload p-5 relative border-4 border-dotted border-gray-300 rounded-lg"
            style={{ width: '550px' }}
          >
           
            <svg
              className="text-indigo-500 w-24 mx-auto mb-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            <div className="input_field flex flex-col w-max mx-auto text-center">
              <label>
                <input className="text-sm cursor-pointer w-36 hidden" type="file" multiple />
                <div className="text bg-gradient-to-tr from-[#4776E6]  via-[#8E54E9]   to-[#8E54E9]  text-white rounded font-semibold cursor-pointer p-1 px-3 hover:bg-indigo-500">
                  Select
                </div>
              </label>
  
              <div className="title text-indigo-500 uppercase">or drop files here</div>
            </div>
            
          </div>
          <button className="w-full h-12 text-lg  mt-5 bg-blue-600 rounded text-white hover:bg-blue-700">
                  Create
         </button>
        </div>
      </div>
      </div>
    );

};
export default UploadDocument