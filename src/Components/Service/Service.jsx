import React from 'react'
import './service.css'
import {useNavigate} from 'react-router-dom';
function Service(props) {
    let navigate = useNavigate();
    const routeChange = (pathurl) => {
        navigate(pathurl);
    }
  return (
    <div className="container">
        <img src={require('../../assets/home_assets/'+props.Service.img)} alt={props.Service.img} />
        <div className="service__title">{props.Service.title.toUpperCase()}</div>
        <div className="service__description"><strong>{props.Service.title}</strong>{ props.Service.description}</div>
        <button className='service__btn' onClick={()=>routeChange(props.navigate)}>En savoir plus</button>
    </div>
  )
}

export default Service