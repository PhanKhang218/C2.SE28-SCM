import React, { useState } from "react";
// import FacebookLogin from "react-facebook-login";
// import GoogleLogin from "react-google-login";
import "./Register.css";
const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    // Xử lý đăng ký tài khoản mới
    console.log(
      `Username: ${username}, Email: ${email}, Password: ${password}`
    );
  };

  const responseFacebook = (response) => {
    // Xử lý đăng nhập hoặc tạo tài khoản từ phản hồi đăng nhập Facebook
    console.log(`Facebook response: ${response}`);
  };

  const responseGoogle = (response) => {
    // Xử lý đăng nhập hoặc tạo tài khoản từ phản hồi đăng nhập Google
    console.log(`Google response: ${response}`);
  };

  return (
    <div>
      <div className="container">
        <div className="header-login">
          <div className="header-left">
            <div className="logo">
              <img src="./img/logo.svg" alt="#" />
              <span className="title-header">SCM</span>
            </div>
          </div>
          <div className="header-right"></div>
        </div>
        <div className="content-login">
          <div className="content-left-login">
            <form onSubmit={handleRegister}>
              <div className="register-title">
                <p className="register-account">Đăng kí tài khoản</p>
                <div className="members">
                  <span style={{ paddingRight: "10px" }}>
                    Đã là thành viên?
                  </span>
                  <a href="/login" className="sign-up">
                    Đăng nhập
                  </a>
                </div>
              </div>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                id="confirm-password"
                placeholder="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button className="button-submit" type="submit">
                Register
              </button>
              <div className="register-fb">
                {/* <FacebookLogin
                  className="register-social"
                  appId="1088597931155576"
                  autoLoad={false}
                  fields="name,email,picture"
                  callback={responseFacebook}
                  cssClass="my-facebook-button-class"
                  icon="fa-facebook"
                  style={{ width: "100%" }}
                /> */}
                {/* 
                <GoogleLogin
                  className="register-social"
                  clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                  buttonText="Login with google"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={"single_host_origin"}
                /> */}
              </div>
            </form>
          </div>
          <div className="content-right-login">
            <img src="./img/image-login2.avif" alt="#" />
          </div>
        </div>
        <div className="footer" />
      </div>
    </div>
  );
};

export default RegisterForm;
