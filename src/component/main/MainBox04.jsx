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
                  src={`src/assets/images/people/${img}`}
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
            <p>A To the fullest extent permitted by law, Razorpay Software Private Limited, its
                                    affiliates,
                                    and each
                                    of their respective officers, directors, members, employees, and agents ("Razorpay")
                                    NEVER
                                    ask you
                                    or any individual to share their personal or financial details for the purpose of
                                    any
                                    investments,
                                    trading, employment or any other related or incidental activity. It has recently
                                    come to our
                                    attention that some unknown individuals are reaching out to gullible people through
                                    WhatsApp,
                                    Telegram & other platforms representing to be authorised personals of Razorpay and
                                    deceitfully
                                    offering unauthorized Investment/employment opportunities. Kindly note that these
                                    individuals are
                                    merely imposters & not authorised by Razorpay to do any such act. Please do not
                                    share your
                                    login
                                    credentials, debit/credit card number, CVV number, OTP, UPI, ATM pin, bank account
                                    details
                                    or
                                    transfer any monies to these individuals.</p>
                                <p>While we are pursuing legal recourse against these individuals, however, we advise
                                    you to
                                    exercise
                                    caution in sharing any information online and file a complaint with theauthorities,
                                    if you
                                    come
                                    across any such instance. Razorpay disclaims responsibility for losses resultingfrom
                                    unauthorized
                                    information sharing or disclosure on platforms like WhatsApp or Telegram, and isnot
                                    liable
                                    for any
                                    decisions or actions taken based on such content.
                                </p>
                                <p>For assistance, please click on Support. Kindly note that here is no other help
                                    channel
                                    available.
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
