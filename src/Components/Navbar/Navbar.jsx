import React from "react";
import "./navbar.css";
import WhiteLogo from "../../assets/home_assets/ves_logo.png";
import BlackLogo  from "../../assets/aboutme_assets/Groupe139.png"
import { useNavigate } from "react-router-dom";


function Navbar(props) {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/signin`;
    navigate(path);
  };
  function Logout  ()  {
     // setUser(null);
    localStorage.clear();
    let path = `/signin`;
    navigate(path);
  };

  return (
    <nav className={props.itemcolor ? " reverse__nav" : "nav"}>
      <img src={!props.itemcolor ? WhiteLogo : BlackLogo} alt="SVE_logo" className="logo"  />
      <div className="menu__container">
        <div className="menu__items">
          <ul className="nav_menu">
            <li className="nav__item">
              <a href="/" className={props.itemcolor ? "nav__link reverse__nav__link" : "nav__link"} >
                Acceuil
              </a>
            </li>
            <li className="nav__item">
              <a href="/nosservices" className={props.itemcolor ? "nav__link reverse__nav__link" : "nav__link"}>
                Nos services
              </a>
            </li>
            <li className="nav__item">
              <a href="/aboutus" className={props.itemcolor ? "nav__link reverse__nav__link" : "nav__link"}>
                À PROPOS DE NOUS
              </a>
            </li>
          </ul>
        </div>
        {localStorage.getItem("token") ? (
          <div className="connetion__items">
            <button className={props.itemcolor ? " reverse__login__btn" : "login__btn"}  onClick={Logout}>
             Logout
            </button>
          </div>
        ) : (
          <div className="connetion__items">
            <a href="/signup" className={props.itemcolor ? " reverse__signup_btn" : "signup_btn"} >
              S'inscrire
            </a>
            <button className={props.itemcolor ? " reverse__login__btn" : "login__btn"} onClick={routeChange}>
              Se Connecter
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
