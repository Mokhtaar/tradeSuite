/* eslint-disable @next/next/no-img-element */
"use client";
import { Fragment, useEffect, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon } from "@heroicons/react/24/outline";

import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";

const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "/" },
];
const navigation = [
  { name: "Messages", href: "#" },
  { name: "XTurn Finance", href: "#" },
  { name: "Research Center", href: "#" },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const MyHeader = () => {
 
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState();

  useEffect(() => {
    const userString = localStorage.getItem("userInfo");
    const userInfo = JSON.parse(userString);
    setUser(userInfo);
  }, []);

  const handleSignOut = () => {
    // Perform sign-out action here, such as clearing user data from localStorage
    localStorage.removeItem('userInfo');
    setUser(null); // Set the user state to null or an appropriate value indicating signed out
  
  };

  return (
    <>
    
      {/*
        This example requires updating your template:

        
        <html class="h-full bg-white">
        <body class="h-full">
        x
      */}
      <div>
        <div>
          <div className="lg:pl-60">
            <div
              className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4  bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8"
              style={{
                backgroundColor: "black",
                backgroundImage:
                  "linear-gradient(425deg, rgba(140.25, 12.27, 96.74, 0.5) 1.27%, rgba(73.68, 97.25, 112.62, 0.46) 49.27%, rgba(36.35, 16.49, 158.31, 0) 100%)",
                //  ' linear-gradient(425deg, rgba(140, 12, 97, 0.50) 1.27, rgba(74, 97, 113, 0.46) 49.27%, rgba(36, 16, 158, 0.00) 100%)',
              }}
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
                className="h-6 w-px bg-white-200 lg:hidden"
                aria-hidden="true"
              />

              <div className="relative flex flex-1 lg:flex lg:gap-x-12 text-white ">
                {" "}
                {/* Modified line */}
                <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6 items-center justify-center rounded-[8px] border-b [border-bottom-style:solid] border-white "style={{ margin: '0 150px' }}
                >
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-sm font-semibold leading-6 text-white-900 "
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="flex items-center gap-x-4 lg:gap-x-6">
                  <button
                    type="button"
                    className="-m-2.5 p-2.5 text-white-400 hover:text-gray-500"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Separator */}
                  <div
                    className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200"
                    aria-hidden="true"
                  />

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative">
                    <Menu.Button className="-m-1.5 flex items-center p-1.5">
                      <img
                        className="h-8 w-8 rounded-full bg-white-50"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <span className="hidden lg:flex lg:items-center">
                        <span
                          className="ml-4 text-sm font-semibold leading-6 text-white-900"
                          aria-hidden="true"
                        >
                          {user?.name}
                        </span>
                        <ChevronDownIcon
                          className="ml-2 h-5 w-5 text-white-400"
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
                    href={item.href}
                    onClick={item.name === 'Sign out' ? handleSignOut : undefined}
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
              <div className="px-4 sm:px-6 lg:px-8">{/* Your content */}</div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};
export default MyHeader;
