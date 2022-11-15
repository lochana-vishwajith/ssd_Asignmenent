import React, { useState } from "react";
import "./login.css";
import axios from "axios";

export default function Login() {
  const [userEmail, setUserEmail] = useState();
  const [UserPassword, setUserPassword] = useState();

  const onSubmit = () => {
    console.log(userEmail," ",UserPassword);
    window.location= "/message";
  };

  return (
    <div className="Auth-form-container container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Admin Login</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              onChange={(e) => {
                setUserEmail(e.target.value);
              }}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={(e) => {
                setUserPassword(e.target.value);
              }}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => onSubmit()}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
