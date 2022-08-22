import { useState } from 'react';
import React from 'react'
import './plan.css'
import Swiperh from '../../Components/Swipper/Swiperh';

function Plan() {
  const [monam,setMonam] = useState(0);

console.log(monam)
  return (
    <>
    <div className="plan__container">
      <div className="plan__title"> <div className='plan__title__notre'>Notre</div> <div className='plan__title__application'>Application</div></div>
      <div className="plan__description">
        Où que vous soyez, nous ne sommes qu'à un click de vous.
      </div>
        <Swiperh setIndex={setMonam} />
    </div>
     <div className="switcher_line">
        <img src={require('../../assets/home_assets/Groupe60.png')} alt="Groupe60.png" style={{backgroundColor:monam===0?"red":""}} />
        <div className="line"></div>
        <img src={require('../../assets/home_assets/Groupe71.png')} alt="Groupe71.png" style={{backgroundColor:monam===1?"red":""}}   />
        <div className="line"></div>
        <img src={require('../../assets/home_assets/Groupe76.png')} alt="Groupe76.png" style={{backgroundColor:monam===2?"red":""}}   />
      </div>
      </>
  )
}

export default Plan