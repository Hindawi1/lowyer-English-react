import React from 'react';
import logo from '../assets/images/logo.png'; 

const ContactUs = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-content">
        {/* Hero-like Title and Description */}
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-description">
          For immediate legal and professional consultation!
        </p>

        {/* Contact Info */}
        <div className="contact-info">
          <div className="contact-item">
            <i className="fas fa-home"></i> {/* Home Icon */}
            <p>Saudi Arabia</p>
          </div>
          <div className="contact-item">
            <i className="fas fa-phone-alt"></i> {/* Phone Icon */}
            <p>00000000</p>
          </div>
          <div className="contact-item">
            <i className="fas fa-envelope"></i> {/* Email Icon */}
            <p>info@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Logo placed to the right side */}
      <div className="contact-logo">
        <img src={logo} alt="Logo" className="logo-img" />
      </div>
    </section>
  );
};

export default ContactUs;
