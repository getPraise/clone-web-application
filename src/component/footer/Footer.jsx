import React from 'react';
import razorpayIcon from '../../assets/images/razorpay-icon.svg';
import left1 from '../../assets/images/footer/left1.avif';
import left2 from '../../assets/images/footer/left2.png';
import left3 from '../../assets/images/footer/left3.avif';
import right1 from '../../assets/images/footer/right1.svg';
import right2 from '../../assets/images/footer/right2.avif';
import right3 from '../../assets/images/footer/right3.svg';
import right4 from '../../assets/images/footer/right4.svg';
import right5 from '../../assets/images/footer/right5.svg';

import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div id="footerContainer">
        <div id="footerContainerLeft">
          <div id="footerColumn1">
            <div id="footerColumn1Part1">
              <img src={razorpayIcon} alt="Razorpay Logo" />
            </div>
            <div id="footerColumn1Part2">
              <p>
                Razorpay is the only payments solution in India that allows businesses to accept, process and disburse
                payments with its product suite. It gives you access to all payment modes including credit card, debit
                card, netbanking, UPI and popular wallets including JioMoney, Mobikwik, Airtel Money, FreeCharge, Ola
                Money and PayZapp.
              </p>
              <br />
              <p>
                RazorpayX supercharges your business banking experience, bringing effectiveness, efficiency, and
                excellence to all financial processes. With RazorpayX, businesses can get access to fully-functional
                current accounts, supercharge their payouts and automate payroll compliance.
              </p>
              <br />
              <p>
                Manage your marketplace, automate bank transfers, collect recurring payments, share invoices with
                customers and avail working capital loans - all from a single platform. Fast forward your business with
                Razorpay.
              </p>
              <br />
              <p>
                Disclaimer: The RazorpayX powered Current Account and VISA corporate credit card are provided by RBI
                licensed banks. Your RazorpayX powered current account is provided by our partner banks i.e, ICICI, RBL,
                Yes bank, in accordance with RBI regulations. RazorpayX itself is not a bank and doesn't hold or claim
                to hold a banking license.
              </p>
            </div>
            <div id="footerColumn1Part3">
              <img src={left1} alt="Trusted Badge 1" />
              <img src={left2} alt="Trusted Badge 2" />
              <img src={left3} alt="Trusted Badge 3" />
            </div>
          </div>
        </div>

        <div id="footerContainerRight">
          <div id="footerColumn2">
            <div id="footerColumn2Part1">
              <div className="footerColumnHeading">ACCEPT PAYMENT</div>
              <div className="footerColumnElemenet"><a href="#Payment">Payment Aggregator</a></div>
              <div className="footerColumnElemenet"><a href="#Payment">Payment Gateway</a></div>
              <div className="footerColumnElemenet"><a href="#Payment">Payment Pages</a></div>
              <div className="footerColumnElemenet"><a href="#Payment">Razorpay POS</a></div>
              <div className="footerColumnElemenet"><a href="#Payment">QR Codes</a></div>
              <div className="footerColumnElemenet"><a href="#Payment">Subscriptions</a></div>
              <div className="footerColumnElemenet"><a href="#Payment">Smart Collect</a></div>
              <div className="footerColumnElemenet"><a href="#Payment">Optimizer</a></div>
              <div className="footerColumnElemenet"><a href="#Payment">Instant Settlements</a></div>
            </div>

            <div id="footerColumn2Part2">
              <div className="footerColumnHeading">PAYROLL</div>
              <div className="footerColumnElemenet"><a href="#Payment">RazorpayX Payroll</a></div>
            </div>

            <div id="footerColumn2Part3">
              <div className="footerColumnHeading">BECOME A PARTNER</div>
              <div className="footerColumnElemenet"><a href="#Payment">Refer and Earn</a></div>
              <div className="footerColumnElemenet"><a href="#Payment">Onboarding APIs</a></div>
            </div>

            <div id="footerColumn2Part4">
              <div className="footerColumnHeading">MORE</div>
              <div className="footerColumnElemenet"><a>Router</a></div>
              <div className="footerColumnElemenet"><a>Invoice</a></div>
              <div className="footerColumnElemenet"><a>Ferrlancer Payments</a></div>
              <div className="footerColumnElemenet"><a>International Payments</a></div>
              <div className="footerColumnElemenet"><a>Flash Checkout</a></div>
              <div className="footerColumnElemenet"><a>UPI</a></div>
              <div className="footerColumnElemenet"><a>ePOS</a></div>
              <div className="footerColumnElemenet"><a>Checkout Demo</a></div>
            </div>
          </div>

          <div id="footerColumn3">
            <div id="footerColumn3Part1">
              <div className="footerColumnHeading">BANKING PLUS</div>
              <div className="footerColumnElemenet"><a>Razorpay X</a></div>
              <div className="footerColumnElemenet"><a>Source To pay</a></div>
              <div className="footerColumnElemenet"><a>Current Acccounts</a></div>
              <div className="footerColumnElemenet"><a>Payouts</a></div>
              <div className="footerColumnElemenet"><a>Payout Links</a></div>
              <div className="footerColumnElemenet"><a>Corporate Credit Card</a></div>
            </div>

            <div id="footerColumn3Part2">
              <div className="footerColumnHeading">DEVELOPERS</div>
              <div className="footerColumnElemenet"><a>Docs</a></div>
              <div className="footerColumnElemenet"><a>Integration</a></div>
              <div className="footerColumnElemenet"><a>API Reference</a></div>
            </div>

            <div id="footerColumn3Part3">
              <div className="footerColumnHeading">RESOURCES</div>
              <div className="footerColumnElemenet"><a>Blog</a></div>
              <div className="footerColumnElemenet"><a>Learn</a></div>
              <div className="footerColumnElemenet"><a>Customer Stories</a></div>
              <div className="footerColumnElemenet"><a>Events</a></div>
              <div className="footerColumnElemenet"><a>Chargeback Guide</a></div>
              <div className="footerColumnElemenet"><a>Settlement Guide</a></div>
            </div>

            <div id="footerColumn3Part4">
              <div className="footerColumnHeading">SOLUTIONS</div>
              <div className="footerColumnElemenet"><a>Education</a></div>
              <div className="footerColumnElemenet"><a>E-commerce</a></div>
              <div className="footerColumnElemenet"><a>SaaS</a></div>
              <div className="footerColumnElemenet"><a>BFSI</a></div>
            </div>

            <div id="footerColumn3Part5">
              <div className="footerColumnHeading">FREE TOOLS</div>
              <div className="footerColumnElemenet"><a>GST Calculator</a></div>
              <div className="footerColumnElemenet"><a>GST Number Search</a></div>
              <div className="footerColumnElemenet"><a>GST Search by PAN</a></div>
              <div className="footerColumnElemenet"><a>ROI Calculator</a></div>
              <div className="footerColumnElemenet"><a>CAGR Calculator</a></div>
              <div className="footerColumnElemenet"><a>EBITDA Calculator</a></div>
            </div>
          </div>

          <div id="footerColumn4">
            <div id="footerColumn4Part1">
              <div className="footerColumnHeading">COMPANY</div>
              <div className="footerColumnElemenet"><a>About Us</a></div>
              <div className="footerColumnElemenet"><a>Careers</a></div>
              <div className="footerColumnElemenet"><a>Terms of Use</a></div>
              <div className="footerColumnElemenet"><a>Privacy Policy</a></div>
              <div className="footerColumnElemenet"><a>Grievance Redressal</a></div>
              <div className="footerColumnElemenet"><a>Responsible Disclosure</a></div>
              <div className="footerColumnElemenet"><a>Patners</a></div>
              <div className="footerColumnElemenet"><a>White papers</a></div>
              <div className="footerColumnElemenet"><a>Corporate Information</a></div>
            </div>

            <div id="footerColumn4Part2">
              <div className="footerColumnHeading">HELPS & SUPPORT</div>
              <div className="footerColumnElemenet"><a>Support</a></div>
              <div className="footerColumnElemenet"><a>knowledge base</a></div>
            </div>

            <div id="footerColumn4Part3">
              <div className="footerColumnHeading">FIND US ONLINE</div>
              <div id="footerColumn4Part3ImgContainer">
                <div id="footerColumn4Part3Img"><a><img src= {right1} alt="Social Icon 1" /></a></div>
                <div id="footerColumn4Part3Img"><a><img src= {right2} alt="Social Icon 2" /></a></div>
                <div id="footerColumn4Part3Img"><a><img src= {right3} alt="Social Icon 3" /></a></div>
                <div id="footerColumn4Part3Img"><a><img src= {right4} alt="Social Icon 4" /></a></div>
                <div id="footerColumn4Part3Img"><a><img src= {right5} alt="Social Icon 5" /></a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
