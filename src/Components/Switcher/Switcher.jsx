import React from 'react'

import './switcher.css'
function Switcher(props) {
  return (
    <div className='switcher__body'>
      <div className="switcher__container">
        <div className="switcher__detail">
          <div className="switcher__title">
            {props.switcher.title}
          </div>
          <div className="switcher__descripttion">
            {props.switcher.description}
          </div>
        </div>
        <div className={
          props.switcher.picture === "1.png" ? "switcher__picture__1" : props.switcher.picture === "2.png" ? "switcher__picture__2" : "switcher__picture__3"
        }>

        </div>


      </div>
     
    </div>
  )
}

export default Switcher