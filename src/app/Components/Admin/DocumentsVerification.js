import classNames from "classnames";
import { Fragment, useEffect, useState } from "react";
import {
  UpdateDocumentStatus,
  GetCompaniesDocsAdmin,
} from "../../Actions/adminActions";
import { filterDocuments } from "@/lib/filterDocuments";
import { camelToTitle } from "@/lib/helpers";
import { LuSendHorizonal } from "react-icons/lu";
import CommentModal from "./CommentModal";

export default function DocumentsVerification() {
  const [filteredDocuments, setFilteredDocuments] = useState();
  const [open, setOpen] = useState(false);

  const getDocuments = async () => {
    const documents = await GetCompaniesDocsAdmin();
    const pendingDocuments = filterDocuments(documents.documents, "Pending");
    setFilteredDocuments(pendingDocuments);
  };

  const handleDocumentStatus = async (companyID, document, newStatus) => {
    try {
      await UpdateDocumentStatus(companyID, document, newStatus);
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
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Documents
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the documents awaiting assessment and approval.
          </p>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full">
              <thead className="bg-white">
                <tr>
                  <th
                    scope="col"
                    className="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3"
                  >
                    Company name
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    File name
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    File
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Comment
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {filteredDocuments?.map(
                  (company, index) =>
                    company.docs.length > 0 && (
                      <Fragment key={index}>
                        <tr className="border-t border-gray-200">
                          <th
                            colSpan={5}
                            scope="colgroup"
                            className="bg-gray-50 whitespace-nowrap py-2 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3"
                          >
                            {company.name}
                          </th>
                        </tr>
                        {company.docs.map((document, index) =>
                          Object.entries(document).map(([key, value]) => (
                            <tr
                              key={index}
                              className={classNames(
                                index === 0
                                  ? "border-gray-300"
                                  : "border-gray-200",
                                "border-t"
                              )}
                            >
                              <td className="invisible whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3"></td>
                              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                                {camelToTitle(key)}
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                <a
                                  href={value.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  View File
                                </a>
                              </td>
                              <td
                                onClick={() => setOpen(!open)}
                                className="whitespace-nowrap cursor-pointer py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3"
                              >
                                Add comment
                              </td>
                              <CommentModal open={open} setOpen={setOpen} />

                              {/* <td className="relative w-[20px] sm:w-52 rounded-md shadow-sm">
                                <input
                                  type="text"
                                  name="comment"
                                  id="comment"
                                  className="rounded-md border-0 py-1.5 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                  <LuSendHorizonal
                                    role="button"
                                    className="h-5 w-5 cursor-pointer text-gray-400"
                                    aria-hidden="true"
                                  />
                                </div>
                              </td> */}

                              <td className="relative whitespace-nowrap space-x-2 sm:space-x-3 text-right py-4 pl-3 pr-4 text-sm font-medium sm:pr-3">
                                <button
                                  value="Approved"
                                  className="text-indigo-600 hover:text-indigo-900"
                                  onClick={(e) =>
                                    handleDocumentStatus(
                                      company.companyID,
                                      document,
                                      e.target.value
                                    )
                                  }
                                >
                                  Approve
                                </button>

                                <button
                                  value="Rejected"
                                  className="text-indigo-600 hover:text-indigo-900"
                                  onClick={(e) =>
                                    handleDocumentStatus(
                                      company.companyID,
                                      document,
                                      e.target.value
                                    )
                                  }
                                >
                                  Reject
                                </button>
                              </td>
                            </tr>
                          ))
                        )}
                      </Fragment>
                    )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
