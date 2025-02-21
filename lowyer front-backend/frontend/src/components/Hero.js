import React from "react";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">محمد بن عفيف</h1>
        <p className="hero-description">للمحاماة والاستشارات القانونية.</p>
        <button onClick={scrollToContact} className="hero-btn">
          اطلب استشارة فورية
        </button>
      </div>
    </section>
  );
};

export default Hero;
