import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Card = ({ title, description, image }) => {
  return (
    <div
      className="mainBox02Card"
      style={{
        backgroundImage: `url(${image})`, // Set background image dynamically
      }}
    >
        <div className="mainBox02CardUpper"></div>
        <div className="mainBox02CardDown">
          <div className="mainBox02CardBottom1">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
          <div className="mainBox02CardBottom2">
            <div className="mainBox02signUpNow">
             
              <Link to='/signUp'>
                <button className="mainBox02signUpNowButton">
                  Sign Up Now{" "}
                  <FontAwesomeIcon icon={faArrowRight} style={{color: "#ffffff"}} />
                </button>
              </Link>

            </div>
            <div className="mainBox02knowMore">
              <a href="#knowMore">Know more</a>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Card;
