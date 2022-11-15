import "./header.css";
import React, { useState, useEffect } from "react";

function Header() {
  return (
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="javascript:void(0)">
          Employee Dashboard
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mynavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="mynavbar">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link" href="/message">
                Messages
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/file">
                File Upload
              </a>
            </li>
          </ul>
          <form class="d-flex">
            <a class="btn btn-primary" type="button" href="/">
              Logout
            </a>
          </form>
        </div>
      </div>
    </nav>
  );
}
export default Header;
