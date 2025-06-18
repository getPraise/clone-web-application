import React, { useEffect } from 'react';
import './AsideBlock.css';
import { createSlider } from "../../slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const AsideBlock03 = () => {
  useEffect(() => {
      createSlider({
      containerId: "asideBlock03ColumnContainer",
      nextBtnId: "asideBlock03nextBtn",
      prevBtnId: "asideBlock03prevBtn",
      mode: "group"
      });
    }, []);
  return (
    <aside id="asideBlock03">
      <div id="asideBlock03Heading">
        We have innovated at every instance, creating a disruption.
      </div>
      <div id="asideBlock03ColumnContainerWrapper">
        <button id="asideBlock03prevBtn" className="navButton">❮</button>
        <div id="asideBlock03ColumnContainer">

          {/* Section 1 - Large */}
          <div id="asideBlock03Section1" className="asideblock03large">
            <p>MoneySaver Export Account</p>
            <div id="headingColor">
              <h3>Open a virtual account in 200+ countries,</h3>
              <h2>save up to 50% on international bank transfer charges. Receive ACH/SWIFT/SEPA/BACS payments</h2>
            </div>
            <h4>Receive international wire transfers with ease with a smart account</h4>
            <div className="asideBlock03CardBottom">
              <div className="asideBlock03signUpNow">
                <Link to = "/SignUp"><button className="asideblock03signUpNowButton">
                  Sign Up Now <FontAwesomeIcon icon={faArrowRight} style={{color: "#ffffff"}} />
                </button></Link>
              </div>
              <div className="asideBlock03knowMore">
                <a href="#knowMore">Know more</a>
              </div>
            </div>
          </div>

          {/* Section 2 - Small */}
          <div id="asideBlock03Section2" className="asideblock03small">
            <p>Turbo UPI</p>
            <div id="headingColorSmall">
              <h3>
                Experience a 5X faster checkout, </h3>
                <h2>achieve a 10% success rate boost, all without any redirections to UPI apps.</h2>
              
            </div>
            <h4>Get India's fastest one-step UPI payment solution for businesses</h4>
            <div className="asideBlock03CardBottomsmall">
              <div className="asideBlock03signUpNow">
                <Link to = "/signUp"><button className="asideblock03signUpNowButtonsmall">
                  Sign Up Now<FontAwesomeIcon icon={faArrowRight} style={{color: "#ffffff"}} />
                </button></Link>
              </div>
              <div className="asideBlock03knowMoresmall">
                <a href="#knowMore">Know more</a>
              </div>
            </div>
          </div>

          {/* Section 3 - Small */}
          <div id="asideBlock03Section3" className="asideblock03small">
            <p>Line of Credit</p>
            <div id="headingColorSmall">
              <h3>
                Get a ₹50L collateral-free credit line</h3>
                <h2>with low 1.5% monthly interest, and no pre-closure fees.</h2>
            </div>
            <h4>Tackle cash flow like a pro with a flexible credit line for new-age businesses</h4>
            <div className="asideBlock03CardBottomsmall">
              <div className="asideBlock03signUpNow">
                <Link to = "/login"><button className="asideblock03signUpNowButtonsmall">
                  Sign Up Now <FontAwesomeIcon icon={faArrowRight} style={{color: "#ffffff"}} />
                </button></Link>
              </div>
              <div className="asideBlock03knowMoresmall">
                <a href="#knowMore">Know more</a>
              </div>
            </div>
          </div>

          {/* Section 4 - Large */}
          <div id="asideBlock03Section4" className="asideblock03large">
            <p>Magic Checkout</p>
            <div id="headingColor">
              <h3>Witness a 40% increase in conversions,</h3>
              <h2>enjoy a 5X quicker checkout process, and reduce RTOs by 50%.</h2>
            </div>
            <h4>enjoy a 5X quicker checkout process, and reduce RTOs by 50%.</h4>
            <div className="asideBlock03CardBottom">
              <div className="asideBlock03signUpNow">
                <Link to = "/signUp"><button className="asideblock03signUpNowButton">
                  Sign Up Now <FontAwesomeIcon icon={faArrowRight} style={{color: "#ffffff"}} />
                </button></Link>
              </div>
              <div className="asideBlock03knowMore">
                <a href="#knowMore">Know more</a>
              </div>
            </div>
          </div>

          {/* Section 5 - Large */}
          <div id="asideBlock03Section5" className="asideblock03large">
            <p>Optimizer</p>
            <div id="headingColor">
              <h3>Utilise 15+ payment gateways for all Aggregators</h3>
              <h2>, improve success rates by 10% with zero downtime, and cut charges/fees by 15-30%.</h2>
            </div>
            <h4>Manage multiple payment gateways with an AI-powered infinity router.</h4>
            <div className="asideBlock03CardBottom">
              <div className="asideBlock03signUpNow">
                <Link to = "/signUp"><button className="asideblock03signUpNowButton">
                  Sign Up Now <FontAwesomeIcon icon={faArrowRight} style={{color: "#ffffff"}} />
                </button></Link>
              </div>
              <div className="asideBlock03knowMore">
                <a href="#knowMore">Know more</a>
              </div>
            </div>
          </div>

          {/* Section 6 - Small */}
          <div id="asideBlock03Section6" className="asideblock03small">
            <p>Payouts Pro</p>
            <div id="headingColorSmall">
              <h3>
                Automate real-time routing across multiple accounts
                </h3><h2>,and achieve 99.9% success, prevent bank downtime disruptions.</h2>
            </div>
            <h4>Achieve unbeatable payouts success rates with our dynamic multi-bank routing</h4>
            <div className="asideBlock03CardBottomsmall">
              <div className="asideBlock03signUpNow">
                <Link to="/signUp"><button className="asideblock03signUpNowButtonsmall">
                  Sign Up Now <FontAwesomeIcon icon={faArrowRight} style={{color: "#ffffff"}} />
                </button></Link>
              </div>
              <div className="asideBlock03knowMoresmall">
                <a href="#knowMore">Know more</a>
              </div>
            </div>
          </div>

        </div>
        <button id="asideBlock03nextBtn" className="navButton">❯</button>
      </div>
    </aside>
  );
};

export default AsideBlock03;
