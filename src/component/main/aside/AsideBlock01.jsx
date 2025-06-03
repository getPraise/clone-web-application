import React from 'react';
import icon1 from "../../../assets/images/iconSlide/icon1.png";
import icon2 from "../../../assets/images/iconSlide/icon2.png";
import icon3 from "../../../assets/images/iconSlide/icon3.png";
import icon4 from "../../../assets/images/iconSlide/icon4.png";
import icon5 from "../../../assets/images/iconSlide/icon5.png";
import './AsideBlock.css';

const AsideBlock01 = () => {
  return (
    <aside id="asideBlock01">
      <div id="asideBlock01left">
        <h1>Powering every industry.</h1>
        <h1>Powering all disruptors.</h1>
      </div>
      <div id="asideBlock01right">
        <div className="asideBlock01Iconlist01">
          <div className="iconList"><img src={icon1} alt="Icon 1" /></div>
        </div>
        <div className="asideBlock01Iconlist02">
          <div className="iconList"><img src={icon2} alt="Icon 2" /></div>
        </div>
        <div className="asideBlock01Iconlist03">
          <div className="iconList"><img src={icon3} alt="Icon 3" /></div>
        </div>
        <div className="asideBlock01Iconlist04">
          <div className="iconList"><img src={icon4} alt="Icon 4" /></div>
        </div>
        <div className="asideBlock01Iconlist05">
          <div className="iconList"><img src={icon5} alt="Icon 5" /></div>
        </div>
      </div>
    </aside>
  );
};

export default AsideBlock01;
