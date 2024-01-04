"use client";

import React, { useEffect, useState } from "react";
import {
  UpdateDocumentStatus,
  GetUserDocumentsAdmin,
} from "../../Actions/adminActions";
import { useSession } from "next-auth/react";
import { filterDocuments } from "@/lib/filterDocuments";

export default function AdminDocsData() {
  const { data, update } = useSession();
  const [filteredDocuments, setFilteredDocuments] = useState();

  const getDocuments = async () => {
    const documents = await GetUserDocumentsAdmin();
    console.log(documents.documents);
    const pendingDocuments = filterDocuments(documents.documents, "Pending");
    setFilteredDocuments(pendingDocuments);
  };

  useEffect(() => {
    console.log(filteredDocuments);
  }, [filteredDocuments]);

  const handleDocumentAction = async (id, newStatus) => {
    try {
      await UpdateDocumentStatus(id, newStatus);
      getDocuments();
    } catch (error) {
      console.error("Error updating document status:", error);
    }
  };

  useEffect(() => {
    getDocuments();
  }, []);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <main className="py-10 lg:pl-72">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">
              Documents
            </h1>
            <p className="mt-2 text-sm text-gray-700">
              A list of all the Documents.
            </p>
          </div>
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      Company Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Income Statement
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
                      Suppliers Details
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
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Bank Statement
                    </th>
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
                  {filteredDocuments?.map(
                    (media) =>
                      media.incomeStatement ||
                      media.balanceSheet ||
                      media.cashFlow ||
                      media.supplierDetails ||
                      media.pastOrders ||
                      media.yearlySales ||
                      media.bankStatement ||
                      media.previousYearlyInvoices ||
                      media.other ? (
                        <tr key={media.id}>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {media.company}
                          </td>

                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {media.incomeStatement ? (
                              <a
                                href={media.incomeStatement.url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                View File
                              </a>
                            ) : (
                              "No File Uploaded"
                            )}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {media.balanceSheet? (
                              <a
                                href={media.balanceSheet.url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                View File
                              </a>
                            ) : (
                              "No File Uploaded"
                            )}
                          </td>

                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {media.cashFlow ? (
                              <a
                                href={media.cashFlow.url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                View File
                              </a>
                            ) : (
                              "No File Uploaded"
                            )}
                          </td>

                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {media.supplierDetails ? (
                              <a
                                href={media.supplierDetails.url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                View File
                              </a>
                            ) : (
                              "No File Uploaded"
                            )}
                          </td>

                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {media.pastOrders ? (
                              <a
                                href={media.pastOrders.url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                View File
                              </a>
                            ) : (
                              "No File Uploaded"
                            )}
                          </td>

                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {media.yearlySales ? (
                              <a
                                href={media.yearlySales.url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                View File
                              </a>
                            ) : (
                              "No File Uploaded"
                            )}
                          </td>

                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {media.bankStatement ? (
                              <a
                                href={media.bankStatement.url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                View File
                              </a>
                            ) : (
                              "No File Uploaded"
                            )}
                          </td>

                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {media.previousYearlyInvoices ? (
                              <a
                                href={media.previousYearlyInvoices.url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                View File
                              </a>
                            ) : (
                              "No File Uploaded"
                            )}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {media.other ? (
                              <a
                                href={media.other.url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                View File
                              </a>
                            ) : (
                              "No File Uploaded"
                            )}
                          </td>

                          <td className="relative whitespace-nowrap  py-4 pl-3 pr-4 text-sm font-medium sm:pr-0">
                            <div className="flex gap-4">
                              <button
                                value="Approved"
                                className="text-indigo-600 hover:text-indigo-900"
                                onClick={(e) =>
                                  handleDocumentAction(media.id, e.target.value)
                                }
                              >
                                Approve
                              </button>

                              <button
                                value="Rejected"
                                className="text-indigo-600 hover:text-indigo-900"
                                onClick={(e) =>
                                  handleDocumentAction(media.id, e.target.value)
                                }
                              >
                                Reject
                              </button>
                            </div>
                          </td>
                        </tr>
                      ) : null // If no document is available, don't render the row
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
