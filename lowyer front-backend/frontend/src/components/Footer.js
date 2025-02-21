import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} مكتب المحامي - جميع الحقوق محفوظة.
        </p>
        <div className="footer-links">
          <a href="#privacy" className="footer-link">سياسة الخصوصية</a>
          <a href="#terms" className="footer-link">الشروط والأحكام</a>
          <a href="#contact" className="footer-link">اتصل بنا</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
