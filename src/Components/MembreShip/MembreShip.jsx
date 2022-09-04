import React from 'react'

import './membreship.css'

function MembreShip(props) {
  return (
    <div className="membreship__container">
      <img src={props.img ? props.img : require("../../assets/aboutme_assets/skander.png")} alt="fondateur.png"  className='membreship__img'/>
      <div className="membreship__name">{props.name ? props.name : "Nom Prenom"}</div>
      <div className="membreship__role">{props.role ? props.role : "Fonction"}</div>
    </div>
  )
}

export default MembreShip