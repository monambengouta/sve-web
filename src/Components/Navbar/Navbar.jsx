import React from 'react'
import './navbar.css'
import Logo from '../../assets/home_assets/ves_logo.png'
function Navbar() {
    return (
        <div className='nav'>
                <img src={Logo} alt="SVE_logo" className="logo" />
            <div className="menu__container">

                    <div className="menu__items">
                        <ul className='nav_menu'>
                            <li className='nav__item'><a href="/" className='nav__link'>A propos de nous</a></li>
                            <li className='nav__item'><a href="/" className='nav__link'>Nos services</a></li>
                            <li className='nav__item'><a href="/" className='nav__link'>Acceuil</a></li>
                        </ul>
                    </div>
                <div className="connetion__items">
                    <a href="/" className='signup_btn'>S'inscrire</a>
                    <button className='login__btn'> Se Connecter </button>
                </div>
            </div>

        </div>
    )
}

export default Navbar