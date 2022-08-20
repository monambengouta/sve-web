import React from 'react'
import './service.css'
function Service(props) {
  return (
    <div className="container">
        <img src={require('../../assets/home_assets/'+props.Service.img)} alt={props.Service.img} />
        <div className="service__title">{props.Service.title.toUpperCase()}</div>
        <div className="service__description"><strong>{props.Service.title}</strong>{ props.Service.description}</div>
        <button className='service__btn'>En savoir plus</button>
    </div>
  )
}

export default Service