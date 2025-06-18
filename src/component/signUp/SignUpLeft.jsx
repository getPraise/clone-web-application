import React, { useState } from "react"; 
import "./SignUp.css";
import { Link } from 'react-router-dom';

const SignUpLeft = () => {

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);
  const [success , setSuccess] =useState(false);

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if( isSubmitting) return;
    setSubmitting(true);

    if (!email.trim()) {
      setError("Email is required.");
      setSubmitting(false);
      return;
    } else if (!validateEmail(email)) {
      setError("Please enter a valid business email.");
      setSubmitting(false);
      return;
    } 
      setError("");
      console.log("Form is valid, submit data:", email);

      setTimeout(() =>{
        setSubmitting(false);
        setSuccess(false);
        setEmail("");
      }, 1000)
  };


  return (
    <div className="signUpPageLeft">
      <div className="signUpPageLeftUpper">
        <div className="formWrapper">
          <p className="signUp">Sign up</p>

          <form onSubmit={handleSubmit}>
            <div className="leftUpper01">
              <label className="label">Business Email</label>
              <input
                type="text"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                  setSuccess(false);
                }}
                placeholder="E.g. name@company.com"
                className={`inputFull placeholderText ${error ? "inputError" : ""}`} 
              />
              {error && <p className="errorText">{error}</p>}

              {!error && !success && (
                <label className="label2">
                Use your business email address for signup.
              </label>
              )}
            </div>

            <button className="inputFull inputButton" type="submit" disable={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Get Started"}
              </button>
          </form>

          <div className="line-with-or"><span>OR</span></div>

          <button className="inputFull signUpGoogleButton">
            Sign up with Google
          </button>

          <p className="signUpRedirect">
            Already have an account? <Link to='/login'><span>Log in</span></Link>

          </p>
        </div>
      </div>

      <div className="signUpPageLeftLower">
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

export default SignUpLeft;
