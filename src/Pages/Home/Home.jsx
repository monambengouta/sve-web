import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './home.css'
export default function Home() {
  return (

    <div>
      <Navbar />
      <div className='main__section'>
        <div className="slogan">
          ON CRÉE UN RÉEL IMPACT
        </div>
        <div className="description">
          Virtual Safe World est la première Start up engagé grâce à son application dans le combat contre les discriminations de tous genres, de l'harcèlement qu'ils soient dans la vie professionnelle ou bien dans la vie personnelle.
          <br />
          <button className='look__else'>En savoir plus</button>
        </div>

      </div>
    </div>

  )
}
