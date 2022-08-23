import React from 'react';
import './servicesection.css';
import Service from '../Service/Service';
function ServiceSection() {

    const data = [
        { img: "ICHKILI.png", title: "Ichkili", description: " est un espace de dépôt ou on pourra analyser n'importe qu'elle message  ayant un contenu inapproprié.", link: "#" },
        { img: "BLOQUIH.png", title: "Bloquih", description: " est un service qui efface les messages ayant un contenu haineux automatiquement pour vous !", link: "#" },
        { img: "EJRILI.png", title: "Ejrili", description: " est un service qui efface les messages ayant un contenu haineux automatiquement pour vous ! ", link: "#" }
      
        ]

  return (
    <section className='services__container'>
        <div className="services__header"><span>NOS </span> SERVICES</div>
        <div className="services__body">la sécurité devrait être un droit ; on en fait notre obligation !</div>
    <div className='service__list'>
        {/*---------------fetch data----------------*/}
        {data.map((item, index) => {
            return (
                <Service Service={item} key={index}/>)})}
    </div>
    </section>
  )
}

export default ServiceSection