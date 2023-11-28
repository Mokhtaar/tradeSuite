// @react-server-runtime react
"use client";
import React, { useState } from "react";
import "../../styles/style.css";
import Image from "next/image";
import Link from 'next/link';


export default function UserRegistrationForm() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleBack = () => {
    window.history.back();
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (error) {
      console.log("There are errors in the form. Submission prevented.");
      return;
    }

    // Continue with form submission logic
    // ...
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    const pass = e.target.value;

    var errorMessage = "";

    if (pass.length < 8) {
      errorMessage = "Password must be at least 8 characters.";
    } else if (!/\d/.test(pass)) {
      errorMessage = "Password must have at least one number.";
    } else if (!/[A-Z]/.test(pass) || !/[a-z]/.test(pass)) {
      errorMessage =
        "Password must have at least one uppercase and one lowercase letter.";
    } else {
      errorMessage = "";
    }

    setError(errorMessage);
  };
  const passwordsMatch = password === confirmPassword;

  return (
    <section className="container" style={ { background:'linear-gradient(to bottom right, #cffafe, #707fce)'}}>
      <Image
        className="float-left"
        src="/logo.png"
        alt="Your Company"
        width={120}
        height={40}
      />
      <header className="mt-9 mr-9 text-center text-gray-900">
        Create User Account
      </header>

      <br />
      <br />

      <form action="" className="form" method="" onSubmit={handleFormSubmit}>
        <div className="mt-9 input-box">
          <label>Full Name</label>
          <input type="text" placeholder="Enter full name" required />
        </div>

        <div className="input-box w-full mt-[20px]">
          <label>Email Address</label>
          <input type="email" placeholder="Enter email address" required />
        </div>

        <div className="column">
          <div className="input-box">
            <label>Phone Number</label>
            <input type="number" placeholder="Enter phone number" required />
          </div>
          <div className="input-box">
            <label>Birth Date</label>
            <input type="date" placeholder="Enter birth date" required />
          </div>
        </div>

        <div className="column">
          <div className="input-box">
            <label for="file-upload" className="upload-btn">
              Proof Of Identity
            </label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              required
            />
          </div>

          <div className="input-box">
            <label htmlFor="file-upload" className="upload-btn">
              Proof Of Address
            </label>
            <input type="file" accept=".pdf,.doc,.docx" required />
          </div>
        </div>

        <div className="input-box address">
          <label>Address</label>
          <input type="text" placeholder="Enter street address" required />

          <div className="column">
            <input type="text" placeholder="Enter your city" required />
          </div>
          <div className="column">
            <input type="text" placeholder="Enter your region" required />
            <input type="number" placeholder="Enter postal code" required />
          </div>
        </div>

        <div className="mt-9 input-box">
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            onChange={handlePasswordChange}
            required
          />
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>

        <div className="input-box w-full mt-[20px]">
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
          {confirmPassword.length > 0 && !passwordsMatch && (
            <p style={{ color: "red" }}>Passwords do not match.</p>
          )}
        </div>

        <Link href="/Signup">
        <button type="back" className="back-btn">
          Back
        </button>
        </Link>
        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}
