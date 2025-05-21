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
        <h1 className="hero-title">Law Office</h1>
        <p className="hero-description">Legal Services and Consultations</p>
        <button onClick={scrollToContact} className="hero-btn">
          Request a Consultation
        </button>
      </div>
    </section>
  );
};

export default Hero;
