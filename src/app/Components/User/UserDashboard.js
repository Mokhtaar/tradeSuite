/* eslint-disable @next/next/no-img-element */
"use client";
import { Fragment, useState, useEffect } from "react";
import { addUser } from "../../Actions/userActions";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import classNames from "classnames";
import {
  Bars3Icon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import UploadDocument from "./UploadDocument";
import DocumentManagment from "./DocumentManagment"
import AddUsers from "./addUsers";
//  import  EditProfile2 from "../../Dashboard/EditProfile"

const tabs = [
  {
    name: "Dashboard",
    href: "#",
    icon: HomeIcon,
    current: true,
  },
  {
    name: "Upload Documents",
    href: "#",
    icon: FolderIcon,
    current: false,
  },
  {
    name: "Document management",
    href: "#",
    icon: DocumentDuplicateIcon,
    current: false,
  },
  {
    name: "Add Users",
    href: "#",
    icon: UserIcon,
    current: false,
  },
];

const userNavigation = [
  { name: "Your profile", href: "../../Dashboard/EditProfile" },
  { name: "Sign out", href: "#" },
];

export default function UserDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [navigation, setNavigation] = useState(tabs);
  const [currentTab, setCurrentTab] = useState("Dashboard");
  const { data } = useSession();
  const [showAddUserForm, setShowAddUserForm] = useState(false);


  const closeAddUserForm = () => {
    setShowAddUserForm(false);
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleNavigation = (selectedTab) => {
    const updatedNavigation = navigation.map((tab) => ({
      ...tab,
      current: tab.name === selectedTab.name,
    }));
    setCurrentTab(selectedTab.name);
    setNavigation(updatedNavigation);
  };

  return (
    <>
      <div className="h-full bg-white">
        <div className="h-full">
          <Transition.Root show={sidebarOpen} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-50 lg:hidden"
              onClose={setSidebarOpen}
            >
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-gray-900/80" />
              </Transition.Child>

              <div className="fixed inset-0 flex">
                <Transition.Child
                  as={Fragment}
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="-translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="-translate-x-full"
                >
                  <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-300"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                        <button
                          type="button"
                          className="-m-2.5 p-2.5"
                          onClick={() => setSidebarOpen(false)}
                        >
                          <span className="sr-only">Close sidebar</span>
                          <XMarkIcon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                    </Transition.Child>
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
                      <div className="flex h-16 shrink-0 items-center">
                        <img
                          className="h-8 w-auto"
                          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                          alt="Your Company"
                        />
                      </div>
                      <nav className="flex flex-1 flex-col">
                        <ul
                          role="list"
                          className="flex flex-1 flex-col gap-y-7"
                        >
                          <li>
                            <ul role="list" className="-mx-2 space-y-1">
                              {navigation.map((item) => (
                                <li key={item.name}>
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      item.current
                                        ? "bg-gray-50 text-indigo-600"
                                        : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
                                      "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                    )}
                                  >
                                    <item.icon
                                      className={classNames(
                                        item.current
                                          ? "text-indigo-600"
                                          : "text-gray-400 group-hover:text-indigo-600",
                                        "h-6 w-6 shrink-0"
                                      )}
                                      aria-hidden="true"
                                    />
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>

          {/* Static sidebar for desktop */}
          <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div
              style={{
                backgroundImage:
                  "linear-gradient(170deg, rgba(140.25, 12.27, 96.74, 0.5) 1.76%, rgba(73.68, 97.25, 112.62, 0.46) 49.27%, rgba(36.35, 16.49, 158.31, 0) 100%)",
              }}
              className="flex grow flex-col gap-y-5 overflow-y-auto  bg-black px-6 pb-4"
            >
              <div className="flex h-16 shrink-0 items-center">
                <img
                  className="h-12  w-auto"
                  src="/logo.png"
                  alt="Your Company"
                />
              </div>
              <nav className="flex flex-1 flex-col">
                <ul role="list" className="flex flex-1 flex-col gap-y-7">
                  <li>
                    <ul role="list" className="-mx-2 space-y-1">
                      {navigation.map((item) => (
                        <li key={item.name}>
                          <Link
                            onClick={() => handleNavigation(item)}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "bg-gray-50 text-indigo-600"
                                : "text-gray-200 hover:text-indigo-600 hover:bg-gray-50",
                              "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                            )}
                          >
                            <item.icon
                              className={classNames(
                                item.current
                                  ? "text-indigo-600"
                                  : "text-gray-400 group-hover:text-indigo-600",
                                "h-6 w-6 shrink-0"
                              )}
                              aria-hidden="true"
                            />
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="lg:pl-72">
            <div
              style={{
                backgroundImage:
                  "linear-gradient(425deg, rgba(140.25, 12.27, 96.74, 0.5) 1.27%, rgba(73.68, 97.25, 112.62, 0.46) 49.27%, rgba(36.35, 16.49, 158.31, 0) 100%)",
              }}
              className="sticky text-gray-200 top-0 z-40 flex h-16 shrink-0 items-center gap-x-4  bg-black px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8"
            >
              <button
                type="button"
                className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <span className="sr-only">Open sidebar</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Separator */}
              <div
                className="h-6 w-px bg-gray-200 lg:hidden"
                aria-hidden="true"
              />

              <div className="flex items-center flex-1 gap-x-4 lg:gap-x-6">
                <nav className="mx-auto w-[60%]">
                  <div className="flex border-b border-solid rounded-lg border-white items-center justify-center text-center space-x-4 sm:space-x-10">
                    <p className="text-xs sm:text-sm font-semibold leading-6 text-white-900">
                      Messages
                    </p>
                    <p className="text-xs sm:text-sm font-semibold sm:leading-6 text-white-900">
                      X turn finance
                    </p>
                    <p className="text-xs sm:text-sm font-semibold sm:leading-6 text-white-900">
                      Research center
                    </p>
                  </div>
                </nav>

                <div className="flex items-center gap-x-4 lg:gap-x-6">
                  {/* Separator */}
                  <div
                    className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200"
                    aria-hidden="true"
                  />

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative">
                    <Menu.Button className="-m-1.5 flex items-center p-1.5">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full bg-gray-50"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <span className="hidden lg:flex lg:items-center">
                        <span
                          className="ml-4 text-sm font-semibold leading-6 "
                          aria-hidden="true"
                        >
                          {data?.user.name}
                        </span>
                        <ChevronDownIcon
                          className="ml-2 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </span>
                    </Menu.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                        {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                        {({ active }) => (
                          <a
                            onClick={() =>
                              item.name === "Sign out" ? signOut({ callbackUrl: "/" }) 
                              : undefined
                            

                            }
                            className={classNames(
                              active ? "bg-gray-50" : "",
                              "block px-3 py-1 text-sm leading-6 text-gray-900"
                            )}
                          >
                            {item.name}
                          </a>
                        )}
                      </Menu.Item>
                      
                      
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
            <main className="py-10">
              <div className="px-4 sm:px-6 lg:px-8">
                {currentTab === "Dashboard" ? (
                 " "
                ) : currentTab === "Upload Documents" ? (
                  <UploadDocument />
                ) : currentTab === "Document management" ? (
                  <DocumentManagment/>
                ): currentTab === "Add Users" ? (
                  <AddUsers userAction={addUser} closeForm={closeAddUserForm}/>
                )
                 : (
                  ""
                )}
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
