import React from "react";
import Card from "../../card/Card";

const Section = ({ heading, cardsData, showLinks }) => {
  return (
    <div id="mainBox02">
      <div className="mainBox02Heading">{heading}</div>
      {showLinks && (
        <div className="mainBox02AnchorPageHolder">
          <a className="mainBox02HeadingAnchor" href="#TopProduct">Top Product</a>
          <a className="mainBox02HeadingAnchor" href="#OnWebsiteApp">On Website/App</a>
          <a className="mainBox02HeadingAnchor" href="#Plugins">Plugins</a>
          <a className="mainBox02HeadingAnchor" href="#OnSocialMedia">On Social Media</a>
          <a className="mainBox02HeadingAnchor" href="#InStore">In-Store</a>
          <a className="mainBox02HeadingAnchor" href="#CrossBorder">Cross-Border</a>
          <a className="mainBox02HeadingAnchor" href="#WithSmartAddOns">With Smart Ad-Ons</a>
        </div>
      )}
      <div className="mainBox02CardHolder">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Section;
