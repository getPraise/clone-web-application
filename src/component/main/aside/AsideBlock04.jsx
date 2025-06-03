import React from "react";
import './AsideBlock.css';
import covercode from "../../../assets/images/covercode.png";

const AsideBlock04 = () => {
  return (
    <div id="asideBlock04">
      {/* animation scroll */}
      <div id="asideBlock04Part1">
        <div id="asideBlock04Part1Container">
          {[
            "CURL ●",
            "JAVA ●",
            "PYTHON ●",
            "PHP ●",
            "NODE JS ●",
            "CURL ●",
            "JAVA ●",
            "PYTHON ●",
            "PHP ●",
            "NODE JS ●",
            "CURL ●",
            "JAVA ●",
            "CURL ●",
            "JAVA ●",
            "PYTHON ●",
            "PHP ●",
            "NODE JS ●",
            "CURL ●",
            "JAVA ●",
            "PYTHON ●",
            "PHP ●",
            "NODE JS ●",
            "CURL ●",
            "JAVA ●",
          ].map((item, index) => (
            <div key={index} className="asideBlock04Part1Element">
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Razorpay is built <for developers by developers></for> */}
      <div id="asideBlock04Part2">
        <div id="asideBlock04Part2Heading1">
          Razorpay is built <h2>&lt;for developers by developers&gt;&lt;/for&gt;</h2>
        </div>
        <div id="asideBlock04Part2Container">
          {[
            {
              icon: "fa-file-code",
              heading: "Integrations",
              para:
                "Find all popular platform SDKs, plugin, server integrations in our integration stack.",
            },
            {
              icon: "fa-arrows-spin",
              heading: "API Reference",
              para: "Comprehensive documentation to build powerful payment solutions.",
            },
            {
              icon: "fa-brands fa-nfc-symbol",
              heading: "Webhooks",
              para:
                "Receive real-time notifications for all payment related transactions and events.",
            },
          ].map((item, index) => (
            <div key={index} className="asideBlock04Part2ContainerItems">
              <div className="asideBlock04Part2ContainerIcon">
                <i className={`fa-solid ${item.icon} asideBlock04Icon`}></i>
              </div>
              <div className="asideBlock04Part2ContainerHeading">{item.heading}</div>
              <div className="asideBlock04Part2ContainerPara">{item.para}</div>
              <div className="asideBlock04Part2ContainerDocs">
                <a href="#ViewDocs">
                  View Docs
                  <i className="fa-solid fa-arrow-right iconNavArrow" style={{ color: "#ffffff" }}></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Try it out for yourself */}
      <div id="asideBlock04Part3">
        <div id="asideBlock04Part3Content">
          <div id="asideBlock04Part3Heading">
            <h5>Try it out</h5>
            <h5>
              for yourself <i className="fa-solid fa-arrow-right asideBlock04Icon03"></i>
            </h5>
          </div>
          <div id="asideBlock04Part3CImageCover" style={{backgroundImage: `url(${covercode})`}}>
            <a href="TryItYourself">
              <div id="asideBlock04Part3Image"></div>
            </a>
            <div className="asideBlock04Part3signUpNow">
              <a>
                <button className="asideblock03signUpNowButton">
                  Take me to the code{" "}
                  <i className="fa-solid fa-arrow-right iconNavArrow" style={{ color: "#ffffff" }}></i>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AsideBlock04;
