import React from "react";
import "./signin.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Utils/AuthContext";
import {dologin} from "../../../Services/userService";
function SignIn() {
  const initialUserState = {
    email: "",
    password: "",
  };
   // save user data in context
  const {user,setUser} = useContext(AuthContext);
  const [errorCredentials, setErrorCredentials] = React.useState(false);
  const [credential, setCredential] = React.useState(initialUserState);
  let navigate = useNavigate();

  if (!user) {
    navigate("/signin");
  }
    

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCredential({ ...credential, [name]: value });
  };

  const routeChange = () => {
    let path = `/signin`;
    navigate(path);
  };
  const login = async (event) => {
    event.preventDefault();
    setErrorCredentials(false);
    dologin(credential).then((res) => {
      // upadtae context 
      setUser({...res.data,password:null});
      localStorage.setItem("token", JSON.stringify(res.data.token));
      navigate("/");
    }).catch ((err) => {
      setErrorCredentials(true);
    });
  };

  return (
    <div className="signin__container">
      <div className="signin__label">
        <div className="signin__logo">
          <img
            src={require("../../../assets/sign_assets/Groupe1.png")}
            alt="sve_logo.png"
          />
        </div>
        <div className="signin__slagon">
          <div className="signin__title">Vous Revoilà !</div>
          <div className="signin__description">
            Connectez-vous avec vos informations personnelles pour rester en
            contact avec nous.
          </div>
        </div>
      </div>
      <div className="signin__action">
        <div className="signin__connection">
          <a href="/signup" className="signin__signup">
            S'inscire
          </a>
          <button className="signin__btn" onClick={routeChange}>
            Se connecter
          </button>
        </div>
        <div className="signin__placeholder">
          <div className="signin__placeholder__title">SE CONNECTER</div>
          <div className="signin__placeholder__description">
            ou vous pouvez vous connecter avec:{" "}
          </div>
          <div className="signin__placeholder__icon">
            <img
              src={require("../../../assets/sign_assets/Groupe32.png")}
              alt="facebook.png"
            />
            <img
              src={require("../../../assets/sign_assets/Groupe34.png")}
              alt="gmail.png"
            />
            <img
              src={require("../../../assets/sign_assets/Groupe36.png")}
              alt="linkedin.png"
            />
          </div>
        </div>
        <div className="signin__form">
          <form onSubmit={login}>
            <div>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="signin__form__input"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="************"
                className="signin__form__input"
                name="password"
                onChange={handleInputChange}
              />
              {errorCredentials && <div className="signup__form__error" style={{color:"red",marginBottom:"10px"}}>Verify your credential</div>}
            </div>
            <div className="signin__form__checkbox">
              <input type="checkbox" className="signin__checkbox" />
              <div className="remember__me">Se souvenir de moi</div>
            </div>
            <div className="signin__form__forgot">
              <a href="/signin" className="signin__form__forgot__link">
                <a href="/signin"> Mot de passe</a> oublié ?
              </a>
            </div>
            <div className="signin__form__submit">
              <button className="signin__form__submit__btn">
                Se Connecter
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
