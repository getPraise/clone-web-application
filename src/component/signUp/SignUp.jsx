import React from "react";
import SignUpLeft from "./SignUpLeft";
import SignUpRight from "./SignUpRight";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="signUpPage">
      <SignUpLeft />
      <SignUpRight />
    </div>
  );
};

export default SignUp;
