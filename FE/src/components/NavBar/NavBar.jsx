import React, { useState, useEffect } from "react";
import "./NavBar.css";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    // Kiểm tra trạng thái đăng nhập khi component được tạo
    checkLoggedInStatus();
  }, []);

  const checkLoggedInStatus = async () => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:9000/view/account/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Kiểm tra thông tin trả về từ API và cập nhật trạng thái đăng nhập và tên người dùng
        console.log(data);
        if (data.username) {
          setIsLoggedIn(true);
          setUsername(data.username);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
          <li className="nav-item">
            {isLoggedIn ? (
              <span>Xin chào {username}</span>
            ) : (
              <a className="nav-link" href="/login">
                Đăng nhập
              </a>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
