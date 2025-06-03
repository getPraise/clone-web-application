import React from "react";
import twitterLogo from "../../assets/images/login/appLogo/twitter.svg";
import "./UserCommentCard.css";

const UserCommentCard = ({ personImage, name, username, comment, className }) => {
  return (
    <div className={`userCommentCardContainer userCommentCard ${className || ""}`}>
      <div className="userCommentCardHeader">
        <div className="personInfo">
          <img src={personImage} alt={name} className="personImage" />
          <div className="nameUsername">
            <p className="name">{name}</p>
            <p className="username">@{username}</p>
          </div>
        </div>
        <img src={twitterLogo} alt="Twitter Logo" className="twitterLogo" />
      </div>

      <div className="commentText">{comment}</div>
    </div>
  );
};

export default UserCommentCard;
