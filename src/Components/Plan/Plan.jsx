import React from 'react'
import './plan.css'
import Swiperh from '../../Components/Swipper/Swiperh';

function Plan() {


  return (
    <>
    <div className="plan__container">
      <div className="plan__title"> <div className='plan__title__notre'>Notre</div> <div className='plan__title__application'>Application</div></div>
      <div className="plan__description">
        Où que vous soyez, nous ne sommes qu'à un click de vous.
      </div>
        <Swiperh />
    </div>
     <div className="switcher_line">
        <img src={require('../../assets/home_assets/Groupe60.png')} alt="Groupe60.png"  />
        <div className="line"></div>
        <img src={require('../../assets/home_assets/Groupe71.png')} alt="Groupe71.png"  />
        <div className="line"></div>
        <img src={require('../../assets/home_assets/Groupe76.png')} alt="Groupe76.png"  />
      </div>
      </>
  )
}

export default Plan