import React from "react";
import crown from "../assets/crown.png";
import "../styles/LoginModal.css";

const LoginModal = () => {
  return (
      <div className="loginModalContainer">
        <img src={crown} className="crown" alt="crown" />
        <div className="loginModal">
            <h2>Username:</h2>
            <input type="text" name="username" />
            <h2>Password:</h2>
            <input type="password" name="password" />
            <button>Login</button>
        </div>
    </div>
  );
};

export default LoginModal;
