import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">محمد بن عفيف</h1> {/* إضافة فئة للمساعدة في التنسيق */}
        <p className="hero-description">
          للمحاماة والاستشارات القانونية.
        </p>
        <a href="/contact" className="hero-btn">
          اطلب استشارة فورية
        </a>
      </div>
    </section>
  );
};

export default Hero;
