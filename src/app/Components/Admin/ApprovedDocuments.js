import classNames from "classnames";
import { Fragment, useEffect, useState } from "react";
import { GetCompaniesDocsAdmin } from "../../Actions/adminActions";
import { filterDocuments } from "@/lib/filterDocuments";
import { camelToTitle } from "@/lib/helpers";

export default function ApprovedDocuments() {
  const [filteredDocuments, setFilteredDocuments] = useState();

  const getDocuments = async () => {
    const documents = await GetCompaniesDocsAdmin();
    const approvedDocs = filterDocuments(documents.documents, "Approved");
    setFilteredDocuments(approvedDocs);
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
            A list of all approved documents by company.
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
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3"
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
                            className="bg-gray-50 py-2 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3"
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
                              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3"></td>
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
