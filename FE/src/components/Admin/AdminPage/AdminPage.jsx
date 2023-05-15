import React from "react";
import Sidebar from "../.././Sidebar/Sidebar";
import "./AdminPage.css";
export default function AdminPage() {
  return (
    <div className="navbar-admin">
      <div className="navbar-admin-container">
        <a href="" className="logo">
          <img src=".././img/logo.svg" alt="#" />
          <span className="nav-title">SCM</span>
        </a>
        <ul className="navbar-admin-ul">
          <li className="nav-item">
            <a className="nav-link" href="/member">
              Member Management
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/employee">
              Employee Management
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/pricing">
              Class Management
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/login">
              Class Management
            </a>
          </li>
        </ul>
      </div>
      <Sidebar />
    </div>
  );
}
