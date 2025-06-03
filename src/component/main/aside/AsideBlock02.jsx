import React from 'react';
import nykaaLogo from '../../../assets/images/comanyLogo/nykaa.avif';
import decathlonLogo from '../../../assets/images/comanyLogo/decathlon.avif';
import zomatoLogo from '../../../assets/images/comanyLogo/zomato.avif';
import flipkartLogo from '../../../assets/images/comanyLogo/flipkart.avif';
import bkg from "../../../assets/images/backgroundAside.avif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import './AsideBlock.css';
const AsideBlock02 = () => {
  return (
    <aside id="asideBlock02">
      <div className="asideBlock02AnchorPageHolder">
        <a className="asideBlock02HeadingAnchor" href="#E-Commerce">E-Commerce</a>
        <a className="asideBlock02HeadingAnchor" href="#Education">Education</a>
        <a className="asideBlock02HeadingAnchor" href="#BFSI">BFSI</a>
        <a className="asideBlock02HeadingAnchor" href="#SaaS">Saas</a>
        <a className="asideBlock02HeadingAnchor" href="#Freelancer">Freelancer</a>
      </div>
      <div id="asideBlock02BackgroundBlock" style={{backgroundImage: `url(${bkg})`}}>
        
        <div id="asideBlock02BackgroundBlockQuantant">
          <div id="asideBlock02BackgroundBlockHeading1">Empower your</div>
          <div id="asideBlock02BackgroundBlockHeading2">e-commerce business</div>
          <div id="asideBlock02BackgroundBlockPara">
            Streamline payment management with a unified dashboard, enabling both online and in-person payment collection while enhancing conversion rates and minimizing fraud.
          </div>
          <div id="asideBlock02BackgroundBlockCompanyList">
            <div className="asideBlock02CompanyName"><img className="iconCompany" src={nykaaLogo} alt="Nykaa" /></div>
            <div className="asideBlock02CompanyName"><img className="iconCompany" src={decathlonLogo} alt="Decathlon" /></div>
            <div className="asideBlock02CompanyName"><img className="iconCompany" src={zomatoLogo} alt="Zomato" /></div>
            <div className="asideBlock02CompanyName"><img className="iconCompany" src={flipkartLogo} alt="Flipkart" /></div>
            <p>+70,000 other</p>
          </div>
          <div>
            <a><button id="asideBlock02BackgroundBlockButton">See Solutions<FontAwesomeIcon icon={faArrowRight} style={{color: "#ffffff"}} /></button></a>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default AsideBlock02;
