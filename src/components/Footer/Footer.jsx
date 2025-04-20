import React from 'react';

import { 
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaYoutube
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Button from '../Button/Button';


import './Footer.scss';

const Footer = () => {
  const componentClassName = 'footer';
  return(
    <footer className={`${componentClassName}`}>
      <div className={`${componentClassName}-form`}>
        <p>Subscribe to our newsetter for the latest updates on new features and product releases.</p>
        <form>
          <input type='email' placeholder='Enter your email'></input>
          <Button
            variant='secondary'>
            Subscribe
          </Button>
        </form>
        <span>&copy; 2025 Vaccination Portal. All rights reserved</span>
      </div>
      <div className={`${componentClassName}-links`}>
        <div className={`${componentClassName}-links-section`}>
          <h4>About Us</h4>
          <a href="#">Home</a>
          <a href="#">Vaccination Schedule</a>
          <a href="#">FAQs</a>
          <a href="#">Contact Us</a>
          <a href="#">Terms of Use</a>
        </div>
        <div className={`${componentClassName}-links-section`}>
          <h4>Quick Links</h4>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookies Policy</a>
          <a href="#">Accessibility</a>
          <a href="#">Report Adverse Reactions</a>
          <a href="#">Vaccine Safety Information</a>
        </div>
        <div className={`${componentClassName}-links-section`}>
          <h4>Connect with Us</h4>
          <a href="#"><FaFacebookSquare /> Facebook</a>
          <a href="#"><FaInstagram /> Instagram</a>
          <a href="#"><FaSquareXTwitter /> X</a>
          <a href="#"><FaLinkedin /> LinkedIn</a>
          <a href="#"><FaYoutube /> Youtube</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;