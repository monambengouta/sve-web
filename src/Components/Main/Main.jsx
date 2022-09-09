import React from 'react'
import './main.css'
import { useNavigate } from 'react-router-dom'
function Main() {
  const navigate = useNavigate()
  const handleGetStarted = () => {
    navigate('/aboutus')
  }
  return (
    <section className='main__section'>
      <div className="slogan">
        ON CRÉE UN RÉEL IMPACT
      </div>
      <div className="description">
        Virtual Safe World est la première Start up engagé grâce à son application dans le combat contre les discriminations de tous genres, de l'harcèlement qu'ils soient dans la vie professionnelle ou bien dans la vie personnelle.
      </div>
      <button className='look__else' onClick={handleGetStarted}>En savoir plus</button>
      <div className="social__logos">
        <ul>
          <li>
            <img src={require('../../assets/home_assets/facebook_b.png')} alt="facebook" />
          </li>
          <li>
            <img src={require('../../assets/home_assets/twitter_b.png')} alt="twitter" />
          </li>
          <li><img src={require('../../assets/home_assets/instagram_b.png')} alt="instagram" />
          </li>
          <li>
            <img src={require('../../assets/home_assets/whatsapp_b.png')} alt="whatsapp" />
          </li>
          <li>
            <img src={require('../../assets/home_assets/linkedin_b.png')} alt="linkedin" />
          </li>


        </ul>
      </div>
    </section>
  )
}

export default Main