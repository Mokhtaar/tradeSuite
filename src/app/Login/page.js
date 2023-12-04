/* eslint-disable @next/next/no-img-element */
// Create a new React component in your Next.js project, for example, LoginForm.js

import React from 'react';
import "../styles/login.css";

const LoginForm = () => {
  return (
    <div className="container">
      <div className="cover">
        <div className="front">
          <img src="/1.jpg" alt="" />
          <div className="text">
            <span className="text-1">Every new friend is a new adventure</span>
            <span className="text-2">Let&apos;s get connected</span>
          </div>
        </div>
      
      </div>
      <div className="forms">
        <div className="form-content">
          <div className="login-form">
            <div className="title">Login</div>
            <form action="#">
              <div className="input-boxes">
                <div className="input-box">
                  <i className="fas fa-envelope"></i>
                  <input type="text" placeholder="Enter your email" required />
                </div>
                <div className="input-box">
                  <i className="fas fa-lock"></i>
                  <input type="password" placeholder="Enter your password" required />
                </div>
                <div className="text"><a href="#">Forgot password?</a></div>
                <div className="button input-box">
                  <input type="submit" value="Submit" />
                </div>
                <div className="text sign-up-text">Don&apos;t have an account? <label htmlFor="flip">Signup now</label></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
