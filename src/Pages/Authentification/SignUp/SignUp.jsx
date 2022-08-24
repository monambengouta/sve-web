import React from 'react'
import './signup.css'
import { useNavigate } from "react-router-dom";
function SignUp() {
  let navigate = useNavigate(); 
  const routeChange = (pathurl) =>{ 
    let path = pathurl; 
    navigate(path);
  }
  return (
    <div className="signup__container">
        <div className="signup__label">
          <div className="signup__logo">
            <img src={require("../../../assets/sign_assets/Groupe1.png")} alt="sve_logo.png" />
          </div>
          <div className="signup__slagon">
            <div className="signup__title">Bienvenu !</div>
            <div className="signup__description">Saisissez vos données personnelles et commencez.</div>
          </div>
        </div>
        <div className="signup__action">
          <div className="signup__connection">
          <a href="/signup" className='signup__signup'>S'inscire</a> 
            <button className='signup__btn' onClick={()=>routeChange('signin')}>Se connecter</button>
          </div>
          <div className="signup__placeholder">
            <div className="signup__placeholder__title">CRÉER UN COMPTE</div>
            <div className="signup__placeholder__description">ou vous pouvez vous s'inscrire avec: </div>
            <div className="signup__placeholder__icon">
              <img src={require("../../../assets/sign_assets/Groupe32.png")} alt="facebook.png"  />
              <img src={require("../../../assets/sign_assets/Groupe34.png")} alt="gmail.png"  />
              <img src={require("../../../assets/sign_assets/Groupe36.png")} alt="linkedin.png"  />
            </div>
          </div>
          <div className="signup__form">
            <form>
              <div className="signup__username">
                <div className="signup__username__firstname">
                  <input type="text" name="firstname" id="firstname" placeholder='Nom' className="signup__username__username"/>
                </div>
                <div className="signup__username__lastname">
                <input type="text" name="lastname" id="lastname" placeholder='Prénom' className="signup__username__username"/>
                </div>
              </div>
              <div className="signup__birthdate">
                <input type="date" name="birthdate" id="birthdate" style={{color:"#969696"}} className="signup__form__input"/>
              </div>
              <div >
                <input type="email" placeholder="Email" name="email" id="email" className="signup__form__input" />
              </div>
              <div >
                <input type="password" placeholder="************" name='password' id="password" className="signup__form__input" />
              </div>
              <div className="signup__form__submit">
                <button  className='signup__form__submit__btn'>S'INSCRIRE</button>
              </div>

            </form>
          </div>
        </div>
    </div>
  )
}

export default SignUp