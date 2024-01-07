"use client";

import React, { useEffect, useState } from "react";

import { GetUserDocuments ,deleteDocument ,DeleteAllDocument } from "../../Actions/userActions";
import { useSession } from "next-auth/react";
import { indigo } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';




export default function DocumentManagment() {
  const [documents, setDocument] = useState();
  const { data, update } = useSession();

  const getDocuments = async () => {
    const documents = await GetUserDocuments(data?.user.companyID);
    console.log(documents?.documents);
    setDocument(documents?.documents);
  };

  const handleDelete = async (companyId, documentType) => {
    try {
      await deleteDocument(companyId, documentType);
      update();
      getDocuments();
      // After successful deletion, you might want to update the UI or perform any other action
     // getDocuments(); // Assuming this function updates the document list
    } catch (error) {
      console.error("Error deleting document:", error);
    }
  };

  const handleDeleteAll = async (companyId) => {
    try {
      await DeleteAllDocument(companyId);
      update();
      getDocuments();
     
    } catch (error) {
      console.error("Error deleting documents:", error);
    }
  };

  useEffect(() => {
    update();
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
              A list of your Approved Documents
            </p>
          </div>
       
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
           
                    
                    </th>
                    </tr>
                    <tr>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Balance Sheet
                    </th>
                    </tr>
                    <tr>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Cash Flow
                    </th>
                    </tr>
                    <tr>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Supplier Details
                    </th>
                    </tr>
                    <tr>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Past Orders
                    </th>
                    </tr>
                    <tr>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Yearly Sales
                    </th>{" "}
                    </tr>
                    <tr>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Bank Statement
                    </th>{" "}
                    </tr>
                    <tr>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Previous Yearly Invoices
                    </th>
                    </tr>
                    <tr>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      other
                    </th>
                    </tr>
                    <tr>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                     Action
                    </th>
                  </tr>
                </thead>

                  {documents?.map((media) => (
                <tbody className="divide-y divide-gray-200"key={media.id}>
                    <tr >
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
                          <button onClick={() => handleDelete(media.companyID, 'incomeStatement')}> <DeleteIcon  color="secondary"/> </button>
                       
                        </div>
                        ) : (
                          "No File Uploaded"
                        )
                      }
                      </td>
                      </tr>
                      <tr>
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
                          <button onClick={() => handleDelete(media.companyID, 'balanceSheet')}> <DeleteIcon  color="secondary" /> </button>
                          </div>
                        ) : (
                          "No File Uploaded"
                        )}
                      </td>
</tr>
<tr>
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
                          <button onClick={() => handleDelete(media.companyID, 'cashFlow')}> <DeleteIcon  sx={{ color: indigo[300] }}/> </button>
                            </div>
                        ) : (
                          "No File Uploaded"
                        )}
                      </td>
                      </tr>
                      <tr>
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
                          <button onClick={() => handleDelete(media.companyID, 'supplierDetails')}> <DeleteIcon  color="secondary"/> </button>
                          </div>
                        ) : (
                          "No File Uploaded"
                        )}
                      </td>
</tr>
<tr>
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
                          <button onClick={() => handleDelete(media.companyID, 'pastOrders')}> <DeleteIcon  color="secondary"/> </button>
                          </div>
                        ) : (
                          "No File Uploaded"
                        )}
                      </td>
                      </tr>
                      <tr>
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
                          <button onClick={() => handleDelete(media.companyID, 'yearlySales')}> <DeleteIcon  color="secondary" /> </button>
                          </div>
                        ) : (
                          "No File Uploaded"
                        )}
                      </td>
</tr>
<tr>
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
                          <button onClick={() => handleDelete(media.companyID, 'bankStatement')}> <DeleteIcon  color="secondary"/> </button>
                         </div>
                        ) : (
                          "No File Uploaded"
                        )}
                      </td>
                      </tr>
                      <tr>
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
                          <button onClick={() => handleDelete(media.companyID, 'previousYearlyInvoices')}> <DeleteIcon  color="secondary" /> </button>
                         
                          </div>
                        ) : (
                          "No File Uploaded"
                        )}
                      </td>
                      </tr>
                      <tr>
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
                          <button onClick={() => handleDelete(media.companyID, 'other')}> <DeleteIcon  color="secondary"/> </button>

                          </div>
                        ) : (
                          "No File Uploaded"
                        )}
                      </td>
                      </tr>
                      <tr>
                
                      <td  className="relative whitespace-nowrap  py-4 pl-3 pr-4 text-sm font-medium sm:pr-0">
                        <button className="text-indigo-600 hover:text-indigo-900"   onClick={(e) =>
                             handleDeleteAll (media.companyID)
                            }>Delete All</button>
                        </td>
                    </tr>

                </tbody>
                  ))}
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}