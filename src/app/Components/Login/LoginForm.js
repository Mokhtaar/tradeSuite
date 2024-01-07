/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { signIn, signOut } from "next-auth/react";
import { getSession } from "next-auth/react";

const LoginForm = ({ LoginAction }) => {
  const router = useRouter();
  const [isValidCredentials, setIsValidCredentials] = useState(true);
  const [session, setSession] = useState();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: async (values) => {
      const response = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
      });

      const session = await getSession();
      setSession(session);
      const { status, role } = session.user;

      if (response.error) {
        console.log("Invalid login credentials");
        setIsValidCredentials(false);
      } else if (status === "Approved") {
        role === "USER" ? router.push("/Dashboard") : router.push("/Admin");
      } else if (status === "Rejected") {
        signOut();
        alert("You are rejected. Contact admin for access.");
      } else {
        signOut();
        alert("Pending");
      }
    },
  });

  useEffect(() => {
    console.log(session);
  }, [session]);

  return (
    <div className="h-[100vh] p-10px">
      <div className="flex min-h-full flex-1 "  style={{
        backgroundColor: "black",
       backgroundImage:
          "linear-gradient(20deg, rgba(140.25, 12.27, 96.74, 0.5) 1.76%, rgba(73.68, 97.25, 112.62, 0.46) 40.27%, rgba(36.35, 16.49, 158.31, 0) 100%)",
      }}>
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <img
                className="h-10 w-auto"
                src="./Logo.png"
                alt="Your Company"
              />
              <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-white">
                Sign in to your account
              </h2>
              <p className="mt-2 text-sm leading-6 text-white">
                Not a member?{" "}
                <a
                  href="../Signup"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Sign up now
                </a>
              </p>
            </div>

            <div className="mt-10">
              <div>
                <form
                  action=""
                  onSubmit={formik.handleSubmit}
                  className="space-y-6"
                >
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-white"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        onBlur={formik.handleBlur}
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    {formik.touched.email && formik.errors.email ? (
                      <div className="text-red-600">{formik.errors.email}</div>
                    ) : null}
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-white"
                    >
                      Password
                    </label>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        onBlur={formik.handleBlur}
                        required
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    {formik.touched.password && formik.errors.password ? (
                      <div className="text-red-600">
                        {formik.errors.password}
                      </div>
                    ) : null}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {/* <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      /> */}
                      {/* <label
                        htmlFor="remember-me"
                        className="ml-3 block text-sm leading-6 text-gray-700"
                      >
                        Remember me
                      </label> */}
                    </div>

                    <div className="text-sm leading-6">
                      {/* <a
                        href="#"
                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                      >
                        Forgot password?
                      </a> */}
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-gradient-to-r from-blue-500 via-violet-500 to-violet-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                    

                      Sign in
                    </button>
                  </div>
                </form>
              </div>

              <div className="mt-10">
                <div className="relative">
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div className="w-full border-t border-gray-200" />
                  </div>
            
                </div>

        
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <img
            className="absolute inset-0 h-full w-full  p-10 "
            src="./heroImage.jpg"
            alt="login photo"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
