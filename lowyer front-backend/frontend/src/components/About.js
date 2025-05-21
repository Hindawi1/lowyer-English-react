import React from "react";
import aboutPic from "../assets/images/aboutpic.png"; // Ensure the path is correct

const About = () => {
  return (
    <section id="about" className="about-us-container">
      <div className="header-section">
        <div className="text-container">
          <h1 className="main-title">About us</h1>
          <p className="intro-text">
            Since its establishment, our law office has been providing a wide range of comprehensive and pioneering legal services and consultations.<br />
            We proudly serve various sectors and fields, offering our clients high-quality legal solutions that meet the highest standards.<br />
            Our goal is to fulfill our clients’ ambitions and exceed their expectations through the effective utilization of extensive practical experience.<br />
            We offer innovative and non-traditional legal services distinguished by leadership and creativity.<br />
            Thanks to this approach, we have earned the trust of a distinguished group of clients, both individuals and entities, who rely on us as their trusted legal advisors.<br />
          </p>


        </div>
        <div className="image-container">
          <img src={aboutPic} alt="Logo" className="logo" />
        </div>
      </div>
    </section>
  );
};

export default About;
