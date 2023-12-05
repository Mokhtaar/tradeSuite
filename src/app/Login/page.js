/* eslint-disable @next/next/no-img-element */
import React from "react";
import LoginForm from "../components/LoginForm";
import { LoginAction } from "../Actions/LoginAction";

export default function LoginPage() {
  return (
    <>
      <LoginForm LoginAction={LoginAction} />
    </>
  );
}
