import React from "react";
import { useDispatch , useSelector } from "react-redux";
import { setInput , setError} from "../../redux/slices/authSlice";
import { useNavigate ,Link } from "react-router-dom";

import iosstore from "../../assets/images/login/iosstore.svg";
import playstore from "../../assets/images/login/playstore.svg";
import "./Login.css";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const input = useSelector((state) => state.auth.input);
  const error = useSelector((state) => state.auth.error);

  const isValidEmail = (value) => /^\S+@\S+\.\S+$/.test(value);

  const isValidMobile = (value) => /^[6-9]\d{9}$/.test(value);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

    const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    
    setIsSubmitting(true);

    if (!input.trim()) {
      dispatch(setError("This field is required."));
      setIsSubmitting(false);
    } else if (!isValidEmail(input) && !isValidMobile(input)) {
      dispatch(setError("Please enter a valid email or 10-digit mobile number."));
      setIsSubmitting(false);
    } else {
      dispatch(setError(""));
      console.log("Form is valid, submit data:", input);
      setTimeout(() => {
      setIsSubmitting(false);
      navigate("/dashboard");
    }, 1000);
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
                onChange={(e) => dispatch(setInput(e.target.value))}
                placeholder="Enter your email Id or mobile number"
                className={`inputFull placeholderText ${error ? "inputError" : ""}`}
                />
                {error && <p className="errorText">{error}</p>}
            </div>

            <button type="submit" className="inputFull inputButton" disabled={isSubmitting} style={{ opacity: isSubmitting ? 0.6 : 1, cursor: isSubmitting ? "not-allowed" : "pointer" }}>
            {isSubmitting ? "Submitting..." : "Next"}
</button>

            <div className="line-with-or"><span>OR</span></div>

            <button type ="button" className="inputFull signUpGoogleButton">
              Login with Google
            </button>
            <label className="label2">
              Get RazorpayX mobile 
              <img src={iosstore} alt="ios store" className="iconapp" />
              <img src={playstore} alt="play store" className="iconapp"/>
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
