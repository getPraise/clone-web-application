import React from 'react';
import './MainBox.css';
import '../header/Header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const MainBox05 = () => {
  return (
    <div id="mainBox05">
      <div id="mainBox05Upper">
        <h4>Supercharge your business</h4>
        <h4>with Razorpay</h4>
      </div>
      <div id="mainBox05Lower">
        <div id="SignUp">
          <Link to ="/signUp">
            <button id="navSignUp">
              Sign Up{" "}
              <FontAwesomeIcon icon={faArrowRight} className="signup-icon" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainBox05;
