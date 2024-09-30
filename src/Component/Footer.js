import React, { useEffect } from 'react';
import iinsafwhiteimage from './images/iinsaf-white.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { Link } from 'react-router-dom';

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
                  <li><Link  to={"/"}>Homepage</Link></li>
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/faqs">Faqs</Link></li>
                  <li><Link to="/register?as=1">Join as Reporter</Link></li>
                  <li><Link to="/register?as=2">Join as Advertiser</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-xl-3 col-lg-6">
              <div className="f-widget widget-3">
                <h3 className="f-title">Privacy Links</h3>
                <ul className="f-menu">
                  <li><Link to={'/privacy'}>Terms and Conditions</Link></li>
                  <li><Link to={'/privacypolicy'}>Privacy Policy</Link></li>
                  <li><Link to={'/refundpolicy'}>Refund Policy</Link></li>
                  <li><Link to={'/desclamer'}>Disclaimer</Link></li>
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
