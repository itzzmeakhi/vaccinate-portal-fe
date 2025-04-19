import React from 'react';

import { IoMail } from "react-icons/io5";
import { FaPhone, FaLocationDot } from "react-icons/fa6";

import './Contact.scss';

const Contact = () => {
  const componentClassName = 'contact';
  return (
    <div className={`${componentClassName}`}>
      <p>Our support team is available Monday to Friday, 9am to 5pm.</p>
      <h3>Contact Us</h3>
      <p>Have questions or need assistance? Reach out to us.</p>
      <div className={`${componentClassName}-section`}>
        <div className={`${componentClassName}-section-item`}>
          <IoMail />
          <h4> Mail </h4>
          <p>For urgent inquiries outside of oftice hours, please email us.</p>
          <a href="mailto:contact@vaccinated.com">contact@vaccinated.com</a>
        </div>
        <div className={`${componentClassName}-section-item`}>
          <FaPhone />
          <h4> Mail </h4>
          <p>Follow us on social media for updates and news.</p>
          <a href="tel:(+91) 9911991199">(+91) 9911991199</a>
        </div>
        <div className={`${componentClassName}-section-item`}>
          <FaLocationDot />
          <h4> Office </h4>
          <p>For urgent inquiries outside of oftice hours, please email us.</p>
          <p>1-23, Hyderabad</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;