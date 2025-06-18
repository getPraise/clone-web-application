import React, { useEffect } from 'react';
import './Header.css';

import { createSlider } from '../../component/slider';
import { Link } from 'react-router-dom';

// Sliding feature images
import slideImg1 from '../../assets/images/slidingFeatures/slidingFeatures02.avif';
import slideImg2 from '../../assets/images/slidingFeatures/slidingFeatures03.avif';
import slideImg3 from '../../assets/images/slidingFeatures/slidingFeatures01.webp';
import slideImg4 from '../../assets/images/slidingFeatures/slidingFeatures04.avif';

// Logo icon
import logoIcon from '../../assets/images/razorpay-icon.svg';

// Company logos
import gobibo from '../../assets/images/comanyLogo/gobibo.avif';
import curefit from '../../assets/images/comanyLogo/curefit.avif';
import paisabazaar from '../../assets/images/comanyLogo/paisabazaar.avif';
import apolloMunich from '../../assets/images/comanyLogo/apolloMunich.avif';
import ather from '../../assets/images/comanyLogo/ather.avif';
import bmw from '../../assets/images/comanyLogo/bmw.avif';
import bookmyshow from '../../assets/images/comanyLogo/bookmyshow.avif';
import cleartax from '../../assets/images/comanyLogo/cleartax.avif';
import niit from '../../assets/images/comanyLogo/niit.avif';
import nykaa from '../../assets/images/comanyLogo/nykaa.avif';
import swiggy from '../../assets/images/comanyLogo/swiggy.avif';
import unacademy from '../../assets/images/comanyLogo/unacademy.png';
import urbancompany from '../../assets/images/comanyLogo/urbancompany.avif';
import zerodha from '../../assets/images/comanyLogo/zerodha.avif';
import zoho from '../../assets/images/comanyLogo/zoho.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faHeadphonesSimple } from '@fortawesome/free-solid-svg-icons';

const slides = [slideImg1, slideImg2, slideImg3, slideImg4];
const companyLogos = [
  gobibo, curefit, paisabazaar, apolloMunich, ather, bmw,
  bookmyshow, cleartax, niit, nykaa, swiggy, unacademy,
  urbancompany, zerodha, zoho
];

const Header = () => {
  useEffect(() => {
    createSlider({
      containerId: 'slideContainer',
      prevBtnId: 'prevBtn',
      nextBtnId: 'nextBtn',
      mode: 'default'
    });
  }, []);

  return (
    <header>
      <nav id="navBar">
        <div id="navUpperHalf">
          <div className="navItems">
            <a href="#logo">
              <img src={logoIcon} id="logo" alt="Razorpay Logo" />
            </a>
          </div>
          <div className="navItems navItemsBorder  hide-on-small" id="Payments"><a href="#payment">Payments</a></div>
          <div className="navItems navItemsBorder  hide-on-small" id="Banking"><a href="#banking">Banking+</a></div>
          <div className="navItems hide-on-small" id="CoporateCard"><a href="#coporateCard">Coporate Card</a></div>
          <div className="navItems navItemsBorder  hide-on-small" id="Payroll"><a href="#payroll">Payroll</a></div>
          <div className="navItems navItemsBorder  hide-on-small" id="Resources"><a href="#resources">Resources</a></div>
          <div className="navItems  hide-on-small" id="Pricing"><a href="#pricing">Pricing</a></div>
        </div>

        <div id="navLowerHalf">
          <div className="navItems hide-on-small" id="Support">
            <a href="#support">
              <FontAwesomeIcon icon={faHeadphonesSimple} style={{ color: '#2d2e2f', fontSize: '24px' }} />
            </a>
          </div>
          <div className="navItems hide-on-small" id="Country">
            <select name="country" id="navCountry">
              <option value="--Select--">Flag</option>
              <option value="India">India</option>
              <option value="America">America</option>
              <option value="London">London</option>
              <option value="South Korea">South Korea</option>
              <option value="Japan">Japan</option>
            </select>
          </div>
          <div className="navItems" id="Login">
            <Link to="/login">
              <button id="navLogin">Login</button>
            </Link>
          </div>
          <div className="navItems hide-on-small" id="SignUp">
            <Link to="/signUp">
              <button id="navSignUp">
                Sign Up
                <FontAwesomeIcon icon={faArrowRight} style={{ color: '#ffffff' }} />
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* SLIDER SECTION 1 */}
      <div id="slideWrapperHeader">
        <button id="prevBtn" className="navButton ">❮</button>
        <div id="slideContainer">
          {slides.map((img, index) => {
            const headings = [
              'Advanced Payment Solutions',
              'Automated Payroll',
              'Easy In-Person Payments',
              'Effortless Banking'
            ];
            const paras = [
              '100+ Payment Methods | Easy Integration | Powerful Dashboard',
              'Automated Payroll & Compilances | Build for Startups & Enterprises',
              'Quick Payments | Seamless Integration | Top-tier UPI stack',
              'Powerful Automation | Smart Dashboard | Integration Access'
            ];
            return (
              <div
                className="slideSection1"
                style={{
                  backgroundImage: `url(${img})`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right center'
                }}
                key={index}
              >
                <div className="slideSectionHeading1">{headings[index]}</div>
                <div className="slideSectionHeading2">for India's Finest disruptors</div>
                <div className="slideSectionPara">{paras[index]}</div>
                <div className="slideSectionMore">
                  <div className="signUpNow">
                    <Link to="/signUp">
                      <button className="signUpNowButton">
                        Sign Up Now <FontAwesomeIcon icon={faArrowRight} style={{ color: 'white' }} />
                      </button>
                    </Link>
                  </div>
                  <div className="knowMore"><a href="#knowMore">Know more</a></div>
                </div>
              </div>
            );
          })}
        </div>
        <button id="nextBtn" className="navButton">❯</button>
      </div>

      {/* SLIDE SECTION 2 */}
      <div id="slideSection2">
        <p id="slideSection2p1">
          <i className="fa-regular fa-compass" style={{ color: '#222425' }}></i> I'm here to
        </p>
        {[
          'Accept Payments',
          'Make Payments',
          'Start Business Banking',
          'Get Credit loans',
          'Automate Payroll'
        ].map((item, idx) => (
          <div className="slideSection2anchor" key={idx}>{item}</div>
        ))}
        <p id="slideSection2p2">//Find the best product for your business</p>
      </div>

      {/* SLIDE SECTION 3 */}
      <div id="slideSection3">
        <div id="slideSection3scroll">
          {[...Array(2)].flatMap((_, loopIdx) =>
            companyLogos.map((logo, idx) => (
              <div className="slideSection3companylist" key={`${loopIdx}-${idx}`}>
                <img
                  className={`iconCompany ${logo === paisabazaar ? 'iconCompanyZoom1' : ''} ${logo === unacademy && loopIdx === 1 ? 'iconCompanyZoom2' : ''}`}
                  src={logo}
                  alt={`Company ${idx}`}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
