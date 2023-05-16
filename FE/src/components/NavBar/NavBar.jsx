import React, { useState, useEffect } from "react";
import "./NavBar.css";

export default function Navbar({ username }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(username !== "");
    console.log("Username:", username);
  }, [username]);

  return (
    <div className="navbar">
      <div className="navbar-container">
        <a href="" className="logo">
          <img src="./img/logo.svg" alt="#" />
          <span className="nav-title">SCM</span>
        </a>
        <ul className="navbar-ul">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Trang chủ
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about-us">
              Thông báo
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/pricing">
              Gói tập
            </a>
          </li>
          <li className={`nav-item ${isLoggedIn ? "hidden" : ""}`}>
            <a className="nav-link" href="/login">
              Đăng nhập
            </a>
          </li>

          <li
            style={{ listStyleType: "none", paddingLeft: "10px" }}
            className={`dropdown ${isLoggedIn ? "" : "hidden"}`}
          >
            <a
              href="#"
              className="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                src="./img/football/san-trung-vuong.jpeg"
                className="img-navbar"
              />{" "}
              <span className="caret"></span>
            </a>
            <ul className="dropdown-menu">
              {isLoggedIn && (
                <>
                  <li>
                    <a>Xin chào {username}!</a>
                  </li>
                  <li>
                    <a href="#">Another action</a>
                  </li>
                  <li>
                    <a href="#">Something else here</a>
                  </li>
                  <li>
                    <a href="#">Separated link</a>
                  </li>
                </>
              )}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
