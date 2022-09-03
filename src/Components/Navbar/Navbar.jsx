import React from "react";
import "./navbar.css";
import Logo from "../../assets/home_assets/ves_logo.png";
import { useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "../../Utils/AuthContext";

function Navbar() {
    // const {user,setUser} = useContext(AuthContext);
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
    <nav className="nav">
      <img src={Logo} alt="SVE_logo" className="logo" />
      <div className="menu__container">
        <div className="menu__items">
          <ul className="nav_menu">
            <li className="nav__item">
              <a href="/" className="nav__link">
                Acceuil
              </a>
            </li>
            <li className="nav__item">
              <a href="/" className="nav__link">
                Nos services
              </a>
            </li>
            <li className="nav__item">
              <a href="/" className="nav__link">
                À PROPOS DE NOUS
              </a>
            </li>
          </ul>
        </div>
        {localStorage.getItem("token") ? (
          <div className="connetion__items">
            <button className="login__btn" onClick={Logout}>
             Logout
            </button>
          </div>
        ) : (
          <div className="connetion__items">
            <a href="/signup" className="signup_btn">
              S'inscrire
            </a>
            <button className="login__btn" onClick={routeChange}>
              Se Connecter
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
