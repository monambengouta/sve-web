import React from "react";
import "./experiencesection.css";
import Label from "../Label/Label";
function ExperienceSection() {
  return (
    <section className="experience__container">
      <div className="experience__img">
        <img
          src={require("../../assets/home_assets/experience.png")}
          alt="experience.png"
        />
      </div>

      <div className="experience__details">
        <div className="experience__title">
          {" "}
          <div className="experience__title__notre">Notre</div>{" "}
          <div className="experience__title__experience">EXPÉRIENCE</div>
        </div>
        <div className="experience__description">
          Où que vous soyez, nous ne sommes qu'à un click de vous.
        </div>
        <Label title= "EJRILI" percent= "85%"  />
        <Label title= "ICHKILI" percent= "63%"/>
        <Label title= "BLOQUIH" percent= "59%" />
      </div>
    </section>
  );
}

export default ExperienceSection;
