"use client";

import React, { useEffect, useState } from "react";

import { GetUserDocuments ,DeleteDocuments } from "../../Actions/userActions";
import { useSession } from "next-auth/react";
// import DeleteIcon from '@mui/icons-material/Delete';
import DeleteIcon from '@mui/icons-material/Delete';
// import { AiOutlineClose } from "react-icons/ai";


export default function DocumentManagment() {
  const [documents, setDocument] = useState();
  const { data, update } = useSession();

  const getDocuments = async () => {
    const documents = await GetUserDocuments(companyID);
    console.log(documents?.documents);
    setDocument(documents?.documents);
  };

  // const handleUserAction = async (email, newStatus) => {
  //     try {
  //       await UpdateUserStatus(email, newStatus);
  //       update();
  //       getUsers();
  //     } catch (error) {
  //       console.error("Error updating user status:", error);
  //     }
  //   };
   const handleDelete= async (incomeStatement) => {
      try {
        await DeleteDocuments(incomeStatement);
        // update();
        // getUsers();
      } catch (error) {
        console.error("Error updating user status:", error);
      }
    };

  useEffect(() => {
    getDocuments();
  
    
  }, []);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <main className="py-10 ">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">
              Documents Managment
            </h1>
            <p className="mt-2 text-sm text-gray-700">
              A list of your Approved Documents{" "}
            </p>
          </div>
          {/* <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <Link
              href="../Admin/AddAdmin"
              className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add Admin <span aria-hidden="true">&rarr;</span>
            </Link>
          </div> */}
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    {/* <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      Name
                    </th> */}
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Income Statement
                      {/* <AiOutlineClose /> */}
                    
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Balance Sheet
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Cash Flow
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Supplier Details
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Past Orders
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Yearly Sales
                    </th>{" "}
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Bank Statement
                    </th>{" "}
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Previous Yearly Invoices
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      other
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                  {documents?.map((media) => (
                    <tr key={media.id}>
                      {/* <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                        {media.company?.name}
                      </td> */}
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {media.incomeStatement ? (
                        <div>
                          <a
                            href={media.incomeStatement}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View File
                          </a>
                          <button onClick={()=>handleDelete(media.incomeStatment)}> <DeleteIcon /> </button>
                       
                        </div>
                        ) : (
                          "No File Uploaded"
                        )
                      }
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {media.balanceSheet ? (
                          <div>
                          <a
                            href={media.balanceSheet}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View File
                          </a>
                            <DeleteIcon />
                          </div>
                        ) : (
                          "No File Uploaded"
                        )}
                      </td>

                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {media.cashFlow ? (
                          <div>
                          <a
                            href={media.cashFlow}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View File
                          </a>
                            <DeleteIcon />
                            </div>
                        ) : (
                          "No File Uploaded"
                        )}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {media.supplierDetails ? (
                          <div>
                          <a
                            href={media.supplierDetails}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View File
                          </a>
                            <DeleteIcon />
                          </div>
                        ) : (
                          "No File Uploaded"
                        )}
                      </td>

                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {media.pastOrders ? (
                          <div>
                          <a
                            href={media.pastOrders}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View File
                          </a>
                            <DeleteIcon />
                          </div>
                        ) : (
                          "No File Uploaded"
                        )}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {media.yearlySales ? (
                          <div>
                          <a
                            href={media.yearlySales}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View File
                          </a>
                            <DeleteIcon />
                          </div>
                        ) : (
                          "No File Uploaded"
                        )}
                      </td>

                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {media.bankStatement ? (
                          <div>
                          <a
                            href={media.bankStatement}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View File
                          </a>
                            <DeleteIcon />
                         </div>
                        ) : (
                          "No File Uploaded"
                        )}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {media.previousYearlyInvoices ? (
                          <div>
                          <a
                            href={media.previousYearlyInvoices}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View File
                          </a>
                          <DeleteIcon />
                         
                          </div>
                        ) : (
                          "No File Uploaded"
                        )}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {media.other ? (
                          <div>
                          <a
                            href={media.other}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View File
                          </a>
                           <button> <DeleteIcon /> </button>
                          </div>
                        ) : (
                          "No File Uploaded"
                        )}
                      </td>
                      {/* <td className="relative whitespace-nowrap  py-4 pl-3 pr-4 text-sm font-medium sm:pr-0">
                        <div className="flex gap-4">
                          <button
                            value="Approved"
                            className="text-indigo-600 hover:text-indigo-900"
                            onClick={(e) =>
                              handleUserAction(user.email, e.target.value)
                            }
                          >
                            Approve
                            <span className="sr-only">, {user.name}</span>
                          </button>

                          <button
                            value="Rejected"
                            className="text-indigo-600 hover:text-indigo-900"
                            onClick={(e) =>
                              handleUserAction(user.email, e.target.value)
                            }
                          >
                            Reject<span className="sr-only">, {user.name}</span>
                          </button>
                        </div>
                      </td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
