import React from "react";
import "./Footer.css";
import Qrcode from '../../../assets/Qrcode.png'
import Google from '../../../assets/google.png'
import Appstore from '../../../assets/Appstore.png'
import Emailarrow from '../../../assets/emailarrow.png'
import Facebook from '../../../assets/facebook.png'
import Twitter from '../../../assets/twitter.png'
import Instagram from '../../../assets/instagram.png'
import LinkedIn from '../../../assets/linkedin.png'



function Footer() {
  return (
    <main className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h1>Exclusive</h1>
          <h3>Subscribe</h3>
          <p>Get 10% off your first order</p>
          <div className="mail">
            <input type="text" placeholder="Enter your email" />
            <img src={Emailarrow} alt="Arrow" />
          </div>
        </div>
        
        <div className="footer-section">
          <h1>Support</h1>
          <p>111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        <div className="footer-section">
          <h1>Account</h1>
          <p>My Account</p>
          <p>Login / Register</p>
          <p>Cart</p>
          <p>Wishlist</p>
          <p>Shop</p>
        </div>

        <div className="footer-section">
          <h1>Quick Link</h1>
          <p>Privacy Policy</p>
          <p>Terms Of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>

        <div className="footer-section">
          <h1>Download App</h1>
          <p className="download-para">Save $3 with New User Only</p>
          <div className="download-section">
            <img src={Qrcode} alt="QR Code" className="qr-code" />
            <div className="store-icons">
              <img src={Google} alt="Google Play" />
              <img src={Appstore} alt="App Store" />
            </div>
          </div>
           <div className="social-icons">
            <img src={Facebook} alt="Facebook" />
            <img src={Twitter} alt="Twitter" />
            <img src={Instagram} alt="Instagram" />
            <img src={LinkedIn} alt="LinkedIn" />
          </div> 
        </div>
      </div>
      <div className="copyright">
    
        
        <p>©Copyright Rimel 2025. All rights reserved</p>
      </div>
    </main>
  );
}

export default Footer;


