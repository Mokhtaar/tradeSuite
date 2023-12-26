"use client";

import React, { useEffect, useState } from "react";
import { UpdateUserStatus } from "../../Actions/AdminActions";
import { GetAdminTableData } from "../../Actions/AdminActions";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function AdminUsersData() {
  const [users, setUsers] = useState();
  const { data, update } = useSession();

  const getUsers = async () => {
    const users = await GetAdminTableData();
    console.log(users?.users);
    setUsers(users?.users);
  };

  const handleUserAction = async (email, newStatus) => {
    try {
      await UpdateUserStatus(email, newStatus);
      update();
      getUsers();
    } catch (error) {
      console.error("Error updating user status:", error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <main className="py-10 lg:pl-72">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">
              Users
            </h1>
            <p className="mt-2 text-sm text-gray-700">
              A list of all the users in your account including their name,
              title, email and role.
            </p>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          
            <Link
                href="../Admin/AddAdmin"
                className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
               Add Admin <span aria-hidden="true">&rarr;</span>
              </Link>
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
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Company Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Proof of Address
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Proof of identity
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Tax Register
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
                  {users?.map((user) => (
                    <tr key={user.id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                        {user.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {user.company?.name}
                      </td>

                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {user.email}
                      </td>

                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {}
                      </td>

                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {user.company?.fileUpload}
                      </td>
                      <td className="relative whitespace-nowrap  py-4 pl-3 pr-4 text-sm font-medium sm:pr-0">
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
                      </td>
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
