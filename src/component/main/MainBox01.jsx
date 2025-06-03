// MainBox1.jsx
import React from "react";
import './MainBox.css'
const MainBox1 = () => {
  return (
    <div id="mainBox1">
      <div className="mainBox1heading">
        <h1>The all in one <span>finance platform</span></h1>
        <h1>you've been looking for</h1>
      </div>
      <div id="mainBox1ClickBox">
        <div id="mainBox1clickBoxLeft">
          <p className="mainBox1Para">With Razorpay, you can :</p>
          <p className="mainBox1Para">|</p>
        </div>
        <div id="mainBox1clickBoxRight">
          <div className="mainBox1cickOption"><a href="#Accept Payment">Accept Payments</a></div>
          <div className="mainBox1cickOption"><a href="#Make Payments">Make Payments</a></div>
          <div className="mainBox1cickOption"><a href="#Make Payouts">Make Payouts</a></div>
          <div className="mainBox1cickOption"><a href="#Start Business Banking">Start Business Banking</a></div>
          <div className="mainBox1cickOption"><a href="#Automate Payroll">Automate Payroll</a></div>
          <div className="mainBox1cickOption"><a href="#Get Credit & Loans">Get Credit & Loans</a></div>
        </div>
      </div>
    </div>
  );
};

export default MainBox1;
