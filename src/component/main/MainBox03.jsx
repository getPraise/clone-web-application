import React, { useEffect } from 'react';
import { createSlider } from "../../component/slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const MainBox03 = () => {

  useEffect(() => {
    createSlider({
      containerId: "mainBox03LowerHalfslideContainer",
      cardClass: "mainBox03LowerHalfCard",
      nextBtnId: "mainBox03nextBtn",
      prevBtnId: "mainBox03prevBtn",
      mode: "scroll",
      visibleCards: 3
    });
  }, []);

  return (
    <div id="mainBox03">
      <div id="mainBox03UpperHalf">
        <p>&lt;what html?&gt;</p>
        <h5>Not a developer? </h5>
        <h6>Our No-Code products have you covered</h6>
      </div>
      <div id="mainBox03LowerHalfWrapper">
        <button id="mainBox03prevBtn" className="navButton">
          ❮
        </button>
        <div id="mainBox03LowerHalfslideContainer">
          {[
            {
              title: "Payment Links",
              description: "Accept payments instantly: Share links via email, text, or social.",
              links: [
                { text: "Sign Up", href: "/signUp" },
                { text: "Know More", href: "#KnowMore" },
              ],
            },
            {
              title: "Payment Pages",
              description:
                "Accept payments without coding on a custom-branded store.",
              links: [
                { text: "Sign Up", href: "/signUp" },
                { text: "Know More", href: "#KnowMore" },
              ],
            },
            {
              title: "Payment Buttons",
              description: "Effortlessly add a Pay Now button without any coding knowledge.",
              links: [
                { text: "Sign Up", href: "/signUp" },
                { text: "Know More", href: "#KnowMore" },
              ],
            },
            {
              title: "Invoices",
              description: "Generate GST invoices, get instant payments from customers.",
              links: [
                { text: "Sign Up", href: "/signUp" },
                { text: "Know More", href: "#KnowMore" },
              ],
            },
          ].map((card, index) => (
            <div key={index} className="mainBox03LowerHalfCard">
              <p>{card.title}</p>
              <h5>
                {card.description.split("\n").map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </h5>
              <div className="mainBox03LowerHalfCardAnchorTags">
                {card.links.map((link, idx) => (
                  <div key={idx} className="mainBox03SingnUp">
                    <a href={link.href}>
                      {link.text}{" "}
                      <FontAwesomeIcon icon={faArrowRight} style={{ color: "#ffffff", }} />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button id="mainBox03nextBtn" className="navButton">
          ❯
        </button>
      </div>
    </div>
  );
};

export default MainBox03;
