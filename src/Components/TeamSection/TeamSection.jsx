import React from 'react'
import "./teamsection.css";
import MembreShip from "../MembreShip/MembreShip";
function TeamSection() {
  return (
    <div className="teamsection__container">

        <div className="teamsection__title">ÉQUIPE</div>
        <div className="teamsection__members">
        <MembreShip name="Skander" role="Fondateur"/>
        <MembreShip img ={require("../../assets/aboutme_assets/m1.png")} />
        <MembreShip img ={require("../../assets/aboutme_assets/m2.png")} />
        <MembreShip img ={require("../../assets/aboutme_assets/m1.png")} />
        </div>
    </div>
  )
}

export default TeamSection