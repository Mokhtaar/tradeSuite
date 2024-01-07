/* eslint-disable @next/next/no-img-element */
import classNames from "classnames";
import { useEffect, useState } from "react";
import { formatObject, titleToCamel } from "@/lib/helpers";
import { GetUserDocuments, deleteDocument } from "../../Actions/userActions";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";

import { useSession } from "next-auth/react";

const statuses = {
  Approved: "text-green-700 bg-green-50 ring-green-600/20",
  Pending: "text-yellow-700 bg-yellow-50 ring-yellow-600/10",
};

export default function DocsManagement() {
  const [docs, setDocs] = useState({});
  const [company, setCopmany] = useState();
  const { data } = useSession();

  const getDocuments = async () => {
    const documents = await GetUserDocuments(data?.user.companyID);
    const {
      company: { name },
    } = documents.documents[0];
    setCopmany(name);
    const formattedDocs = formatObject(documents?.documents[0]);
    setDocs(formattedDocs);
  };

  const handleDelete = async (companyId, documentType) => {
    try {
      await deleteDocument(companyId, titleToCamel(documentType));
      getDocuments();
    } catch (error) {
      console.error("Error deleting document:", error);
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
            {company}&apos;s documents
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            Here, you can monitor the statuses of the documents you&apos;ve
            uploaded, as well as delete or edit them.
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
                    Status
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {Object.entries(docs).map(([key, value], index) => (
                  <>
                    <tr
                      className={classNames(
                        index === 0 ? "border-gray-300" : "border-gray-100",
                        "border-t"
                      )}
                    >
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                        {key}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {value ? (
                          <a
                            href={value?.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View File
                          </a>
                        ) : (
                          "No file uploaded"
                        )}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <span
                          className={classNames(
                            statuses[value?.status],
                            "inline-flex items-center rounded-md px-1 py-1 text-xs font-medium"
                          )}
                        >
                          {value ? value?.status : ""}
                        </span>
                      </td>
                      <td className="relative flex whitespace-nowrap space-x-2 sm:space-x-3 text-right py-4 pl-3 text-sm font-medium">
                        {value ? (
                          <RiDeleteBin6Line
                            role="button"
                            onClick={(e) =>
                              handleDelete(data?.user.companyID, key)
                            }
                            className="text-gray-900 hover:text-gray-600 w-4 h-4"
                          />
                        ) : (
                          ""
                        )}
                        {/* <FaRegEdit
                          role="button"
                          className="text-gray-900 hover:text-gray-600 w-4 h-4"
                        /> */}
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
