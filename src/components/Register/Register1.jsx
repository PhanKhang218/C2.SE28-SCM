import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
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
    <form onSubmit={handleRegister}>
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
      <button type="submit">Register</button>

      <div>
        <FacebookLogin
          appId="1088597931155576"
          autoLoad={true}
          fields="name,email,picture"
          callback={responseFacebook}
          cssClass="my-facebook-button-class"
          icon="fa-facebook"
        />
        <GoogleLogin
          clientId="your-google-client-id"
          buttonText="Login with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
      </div>
    </form>
  );
};

// export default RegisterForm;
