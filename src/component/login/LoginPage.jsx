import React from "react";
import LoginLeft from "./LoginLeft";
import LoginRight from "./LoginRight";
import "./login.css";

const LoginPage = () => {
  return (
    <div className="loginPage">
      <LoginRight />
      <LoginLeft />
    </div>
  );
};

export default LoginPage;
