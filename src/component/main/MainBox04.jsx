import React from "react";
import "./MainBox.css"; 

const images = [
  "insaan1.avif", "insaan2.avif", "insaan3.avif", "insaan4.avif", "insaan5.avif",
  "insaan1.avif", "insaan2.avif", "insaan3.avif", "insaan4.avif", "insaan5.avif",
  "insaan1.avif", "insaan2.avif", "insaan3.avif", "insaan4.avif", "insaan5.avif",
  "insaan1.avif", "insaan2.avif", "insaan3.avif", "insaan4.avif", "insaan5.avif",
];

const MainBox04 = () => {
  return (
    <div id="mainBox04Container">
      <div id="mainBox04">
        <div id="mainBox04Part1">
          <div id="mainBox04Part1Left">
            <p>Razorpay grows with </p><h6>you!</h6>
          </div>
          <div id="mainBox04Part1Right">
            <h6>1,50,000+ Businesses</h6>
          </div>
        </div>

        {/* Scrolling People Animation */}
        <div id="mainBox04Part2">
          <div id="mainBox04Part2container">
            {images.map((img, index) => (
              <div key={index} className="mainBox04Part2containerElement">
                <img
                  src={`/assets/images/people/${img}`}
                  className={index % 2 === 0 ? "insaanimageup" : "insaanimagedown"}
                  alt={`person${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Legal Disclaimer Section */}
        <div id="mainBox04Part3">
          <div id="mainBox04Part3left">
            <i className="fa-solid fa-triangle-exclamation" style={{ color: "#c86016" }}></i>
          </div>
          <div id="mainBox04Part3Right">
            <p>
              Razorpay Software Private Limited, its affiliates, and their officers never ask you to share personal
              or financial details for investment, trading, or job purposes. Some imposters are misleading people via
              WhatsApp, Telegram, etc. Razorpay is not liable for any action taken based on such scams.
            </p>
            <p>
              Do not share credentials like OTP, UPI PIN, account details, etc., with any unauthorized entity.
              Report such incidents to the authorities.
            </p>
            <p>
              For help, please use our official Support channel. There are no other authorized help options.
            </p>

            <div id="Login">
              <a href="#Support">
                <button id="mainBox04Support">
                  Support
                  <i className="fa-solid fa-arrow-right iconNavArrow" style={{ color: "var(--primary-color)" }}></i>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBox04;
