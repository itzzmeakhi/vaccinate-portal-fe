import React from 'react';
import { Link } from 'react-router-dom';
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
          <Link to='/'>Home</Link>
          <Link to="/dashboard">Vaccination Schedule</Link>
          <Link to='/faqs'>FAQs</Link>
          <Link to='/contact'>Contact Us</Link>
          <Link to='/terms'>Terms of Use</Link>
        </div>
        <div className={`${componentClassName}-links-section`}>
          <h4>Quick Links</h4>
          <Link to='/privacy'>Privacy Policy</Link>
          <Link to='/cookies'>Cookies Policy</Link>
          <Link to='/accessibility'>Accessibility</Link>
          <Link to='/report'>Report Adverse Reactions</Link>
          <Link to='/safety'>Vaccine Safety Information</Link>
        </div>
        <div className={`${componentClassName}-links-section`}>
          <h4>Connect</h4>
          <a href='https://www.facebook.com/' target='_blank'><FaFacebookSquare /> Facebook</a>
          <a href='https://www.instagram.com/' target='_blank'><FaInstagram /> Instagram</a>
          <a href='https://x.com/' target='_blank'><FaSquareXTwitter /> X</a>
          <a href='https://www.linkedin.com/' target='_blank'><FaLinkedin /> LinkedIn</a>
          <a href='https://www.youtube.com/' target='_blank'><FaYoutube /> Youtube</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;