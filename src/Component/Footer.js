import React, { useEffect } from 'react';
import iinsafwhiteimage from './images/iinsaf-white.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Footer = () => {
  return (
    <div>
      <footer className="footer-s1">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="footer-cta">
                <div className="p-left">
                  <span>For IT Company</span>
                  <h2>Join IT Solution Our Community</h2>
                </div>
                <div className="p-right">
                  <div className="f-subs-form">
                    <input type="text" placeholder="Enter your email address" />
                    <button type="submit">Subscribe Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row f-main">
            <div className="col-xl-3 col-lg-6">
              <div className="f-widget widget-1">
                <div className="logo">
                  <a href="#">
                    <img src={iinsafwhiteimage} alt="Company Logo" />
                  </a>
                </div>
                <p className="desc">
                  Insaaf is a leading platform dedicated to promoting social
                  justice through innovative technological solutions.
                </p>
                <ul className="social-icons-s1">
                  <li>
                    <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fa-brands fa-twitter"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fa-brands fa-youtube"></i></a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-3 col-lg-6">
              <div className="f-widget widget-2">
                <h3 className="f-title">Quick Links</h3>
                <ul className="f-menu">
                  <li><a href="index.aspx">Homepage</a></li>
                  <li><a href="about.aspx">About Us</a></li>
                  <li><a href="faqs.aspx">Faqs</a></li>
                  <li><a href="../social/">Join as Reporter</a></li>
                  <li><a href="../advertiser/">Join as Advertiser</a></li>
                </ul>
              </div>
            </div>

            <div className="col-xl-3 col-lg-6">
              <div className="f-widget widget-3">
                <h3 className="f-title">Privacy Links</h3>
                <ul className="f-menu">
                  <li><a href="terms-and-conditions.aspx">Terms and Conditions</a></li>
                  <li><a href="privacy-policy.aspx">Privacy Policy</a></li>
                  <li><a href="refund-policy.aspx">Refund Policy</a></li>
                  <li><a href="disclaimer.aspx">Disclaimer</a></li>
                </ul>
              </div>
            </div>

            <div className="col-xl-3 col-lg-6">
              <div className="widget-4">
                <h3 className="f-title">Contact Us</h3>
                <ul className="info-list">
                  <li>
                    <a href="tel:09992396623">
                      <i className="fa-solid fa-phone"></i>&nbsp;+91 99923-96623
                    </a>
                  </li>
                  <li>
                    <a href="mailto:email@example.com">
                      <i className="fa-solid fa-envelope"></i>&nbsp;email@example.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-cr">
          <div className="container">
            <div className="footer-cr-container">
              <div>
                <p className="text-center">
                  Copyright © 2024, All rights reserved by www.iinsaf.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
