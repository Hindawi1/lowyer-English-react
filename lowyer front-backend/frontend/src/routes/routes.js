import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import About from "../components/About";
import Services from "../components/Services";
import ContactUs from "../components/Contactus";

const RoutesConfig = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default RoutesConfig;
