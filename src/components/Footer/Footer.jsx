import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo va Manzil */}
        <div className="footer-col">
          <h2 className="footer-logo">Funiro.</h2>
          <p className="address">
            400 University Drive Suite 200 Coral<br />
            Gables, <br />
            FL 33134 USA
          </p>
        </div>

        {/* Links */}
        <div className="footer-col">
          <h4 className="col-title">Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Help */}
        <div className="footer-col">
          <h4 className="col-title">Help</h4>
          <ul>
            <li><a href="#">Payment Options</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Privacy Policies</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-col newsletter-col">
          <h4 className="col-title">Newsletter</h4>
          <div className="newsletter">
            <input 
              type="email" 
              placeholder="Enter Your Email Address" 
              className="email-input"
            />
            <button className="subscribe-btn">SUBSCRIBE</button>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>2023 furino. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;