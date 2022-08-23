import { useState } from 'react';
import React from 'react'
import './plan.css'
import Swiperh from '../../Components/Swiperh/Swiperh';

function Plan() {
  const [index,setIndex] = useState(0);

  return (
    <>
    <div className="plan__container">
      <div className="plan__title"> <div className='plan__title__notre'>Notre</div> <div className='plan__title__application'>Application</div></div>
      <div className="plan__description">
        Où que vous soyez, nous ne sommes qu'à un click de vous.
      </div>
        <Swiperh setIndex={setIndex} />
    </div>
     <div className="switcher_line">
        <img src={require('../../assets/home_assets/'+(index === 0 ? "Groupe60.png" : "Groupe6.png"))} alt={index === 0 ? "Groupe60.png" : "Groupe6.png"  }/>
        <div className="line"></div>
        <img src={require('../../assets/home_assets/'+(index === 1 ? "Groupe70.png" : "Groupe7.png"))} alt={index === 1 ? "Groupe70.png" : "Groupe7.png" }   />
        <div className="line"></div>
        <img src={require('../../assets/home_assets/'+(index === 2 ? "Groupe80.png" : "Groupe8.png"))} alt={index === 2 ? "Groupe80.png" : "Groupe8.png"}   />
      </div>
      </>
  )
}

export default Plan