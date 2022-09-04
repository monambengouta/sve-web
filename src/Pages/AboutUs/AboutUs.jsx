import React from "react";
import "./aboutus.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import AboutUsSection from "../../Components/AboutUsSection/AboutUsSection";
import TeamSection from "../../Components/TeamSection/TeamSection";
function AboutUs() {
  return (
    <div className="aboutus__container">
      <Navbar itemcolor={true} />
      <AboutUsSection />
      <TeamSection /> 
      <Footer />
    </div>
  );
}

export default AboutUs;
