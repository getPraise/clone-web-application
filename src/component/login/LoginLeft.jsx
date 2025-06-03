import React, { useState } from "react";
import iosstore from "../../assets/images/login/iosstore.svg";
import playstore from "../../assets/images/login/playstore.svg";
import "./Login.css";
import { Link } from 'react-router-dom';
const Login = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const isValidEmail = (value) => {
    const re = /^\S+@\S+\.\S+$/;
    return re.test(value);
  };

  const isValidMobile = (value) => {
    const re = /^[6-9]\d{9}$/;
    return re.test(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim()) {
      setError("This field is required.");
    } else if (!isValidEmail(input) && !isValidMobile(input)) {
      setError("Please enter a valid email or 10-digit mobile number.");
    } else {
      setError("");
      console.log("Form is valid, submit data:", input);
    }
  };

  return (
    <div className="loginPageLeft">
      <div className="loginPageLeftUpper">
        <div className="formWrapper">
          <p className="signUp">Login</p>
          <form onSubmit={handleSubmit}>
            <div className="leftUpper01">
              <label className="label">Email or Mobile Number</label>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter your email Id or mobile number"
                className={`inputFull placeholderText ${error ? "inputError" : ""}`}
                />
                {error && <p className="errorText">{error}</p>}
            </div>

            <button type="submit" className="inputFull inputButton">Next</button>

            <div className="line-with-or"><span>OR</span></div>

            <button type ="button" className="inputFull signUpGoogleButton">
              Login with Google
            </button>
            <label className="label2">
              Get RazorpayX mobile <img src={iosstore} alt="ios store" className="iconapp" /><img src={playstore} alt="play store" className="iconapp" />
            </label>
            <div className="line-with-or"></div>
          </form>

          <p className="loginRedirect">
            Do not have an account? <Link to='/signUp'><span>SignUp</span></Link>
          </p>
        </div>
      </div>

      <div className="loginPageLeftLower">
        <div className="line-with-or"></div>
        <p className="line1">
          <span className="whiteText">Protected by reCAPTCHA. </span>
          <span className="blueText">Google Privacy Policy</span>
          <span className="whiteText"> &</span>
        </p>
        <p className="line2">
          <span className="blueText">Terms of Service</span>
          <span className="whiteText"> apply</span>
        </p>
      </div>

    </div>
  );
};

export default Login;
