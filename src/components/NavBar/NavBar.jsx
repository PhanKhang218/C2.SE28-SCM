import React from "react";
import "./NavBar.css";
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <a href="" className="logo">
          <img src="./img/logo.svg" alt="#" />
          <span className="nav-title">SCM</span>
        </a>
        <ul className="navbar-ul">
          <li className="nav-item">
            <a className="nav-link" href="/dashboard">
              Trang chủ
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about-us">
              Thông báo
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Khoá học
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/login">
              Đăng nhập
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
