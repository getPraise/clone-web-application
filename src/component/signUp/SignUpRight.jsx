import React, { useEffect } from "react";
import logoImage from "../../assets/images/razorpayX-icon.svg";
import bottomImage from "../../assets/images/login/company-logos-strip.png";

import UserCommentCard from "../../component/userCommentCard/UserCommentCard";

import user1Image from "../../assets/images/login/loginInsaan/user-image-1.png";
import user2Image from "../../assets/images/login/loginInsaan/user-image-2.png";
import user3Image from "../../assets/images/login/loginInsaan/user-image-3.png";

import './SignUp.css';
import { createSlider } from "../../component/slider";

const SignUpRight = () => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      createSlider({
        wrapperId: "commentSliderWrapper",
        containerId: "commentSliderContainer",
        nextBtnId: "commentNextBtn",
        prevBtnId: "commentPrevBtn",
        cardClass: "userCommentCard",
        gap: 72,
        mode: "group",
        visibleCards: 1,
      });
    }, 100); // Ensures DOM is ready

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="signUpPageRight">
      <div className="rightUp01">
        <img src={logoImage} alt="Logo" className="logoX" />
      </div>

      <div className="rightUp02">
        Banking made awesome
        <br />
        <span className="subText">for startups</span>
      </div>

      <div className="rightUpBox">
        <button id="commentPrevBtn" className="sliderBtn prevBtn">❮</button>

        <div id="commentSliderWrapper" className="sliderWrapper">
          <div id="commentSliderContainer" className="sliderContainer">
            <UserCommentCard
              personImage={user1Image}
              name="jani"
              username="@abhayjani4"
              comment="Just tried RazorpayX & what a beautiful smooth experience it is to do payout via links. Same process on any bank would take 15 more steps & OTP entering 5 times."
              className="userCommentCard"
            />
            <UserCommentCard
              personImage={user2Image}
              name="Saumya Shah"
              username="@saumyashah6"
              comment="I paid TDS earlier this month using RazorpayX Tax payments. I am never visiting the TIN-NSDL TDS payment portal ever again in my life.."
              className="userCommentCard"
            />
            <UserCommentCard
              personImage={user3Image}
              name="Shivam Dewan"
              username="@shivamdwn"
              comment="RazorpayX is so well designed! Doing payouts, tax, payroll stuff has never been easier, great job!"
              className="userCommentCard"
            />
          </div>
        </div>

        <button id="commentNextBtn" className="sliderBtn nextBtn">❯</button>
      </div>

      <div className="rightBox03Wrapper">
        <p className="rightBox03Text">Loved by top startups</p>
        <img src={bottomImage} alt="Illustration" className="bottomLogoStrip" />
      </div>
    </div>
  );
};

export default SignUpRight;
