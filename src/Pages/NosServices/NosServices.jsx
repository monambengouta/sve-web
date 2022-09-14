import React from "react";
import "./nosservices.css";
// import ServiceDetail from "../../Components/ServiceDetail/ServiceDetail";
import ExperienceSection from "../../Components/ExperienceSection/ExperienceSection";
import Navbar from "../../Components/Navbar/Navbar";
import FeedBackSection from "../../Components/FeedBackSection/FeedBackSection";
import Footer from "../../Components/Footer/Footer";
import {Outlet} from "react-router-dom";
function NosServices(props) {
  return (
    <div className="nosservices__container">
      <Navbar itemcolor={true} />
      <Outlet />
      {/* {
        props.none ? <ServiceDetail index={0} /> : null
      } */}
      <ExperienceSection />
      <FeedBackSection />
      <Footer />
    </div>
  );
}

export default NosServices;
