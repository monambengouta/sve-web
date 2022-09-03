import React, { useState } from "react";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import axiosConfig from "../../../Libraries/axios/axiosConfig";
function SignUp() {
  let navigate = useNavigate();
  const [mailError, setMailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const initialUserState = {
    id: null,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    birthdate: "",
  };
  const [User, setUser] = useState(initialUserState);
  const routeChange = (pathurl) => {
    let path = pathurl;
    navigate(path);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...User, [name]: value });
  };

  const saveUser = (event) => {
    event.preventDefault();

    var data = {
      firstName: User.firstName,
      lastName: User.lastName,
      email: User.email,
      password: User.password,
      birthdate: User.birthdate,
    };
    axiosConfig.get(`/getuserEmail/${data.email}`).then((res) => {
          setPasswordError(false);
          setMailError(false);
      if (!res.data) {
        setMailError(true);
      } else {
        if (data.password.length < 8) {
          setPasswordError(true);
        } else if ( Object.values(data).some(x => x === null || x === '')){
          alert("Please fill all the fields");
        }else{
          // axiosConfig.post("sendsms",{email: User.email,code:400}).then((res) => {
          //   console.log(res.data);
          // }).catch((err) => {
          //   console.log(err);
          // });

          axiosConfig
          .post("/createuser", data)
          .then((res) => {
            navigate("/signin");
          })
          .catch((err) => {
            console.log("error in signup");
          })
          .finally(() => {
            setUser(initialUserState);
          });
        }
      }
    })
    .catch((err) => {
      console.log(err);
    });
  };

  // const newUser = () => {
  //   setUser(initialUserState);
  //   setSubmitted(false);
  // };

  return (
    <div className="signup__container">
      <div className="signup__label">
        <div className="signup__logo">
          <img
            src={require("../../../assets/sign_assets/Groupe1.png")}
            alt="sve_logo.png"
          />
        </div>
        <div className="signup__slagon">
          <div className="signup__title">Bienvenu !</div>
          <div className="signup__description">
            Saisissez vos données personnelles et commencez.
          </div>
        </div>
      </div>
      <div className="signup__action">
        <div className="signup__connection">
          <a
            href="/signup"
            className="signup__signup"
            onClick={() => routeChange(-1)}
          >
            S'inscire
          </a>
          <Link to="/signin">
            {" "}
            <button className="signup__btn">Se connecter</button>
          </Link>
        </div>
        <div className="signup__placeholder">
          <div className="signup__placeholder__title">CRÉER UN COMPTE</div>
          <div className="signup__placeholder__description">
            ou vous pouvez vous s'inscrire avec:{" "}
          </div>
          <div className="signup__placeholder__icon">
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
        <div className="signup__form">
          <form onSubmit={saveUser}>
            <div className="signup__username">
              <div className="signup__username__firstname">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Nom"
                  onChange={handleInputChange}
                  className="signup__username__username"
                  required
                />
              </div>
              <div className="signup__username__lastname">
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Prénom"
                  onChange={handleInputChange}
                  required
                  className="signup__username__username"
                />
              </div>
            </div>
            <div className="signup__birthdate">
              <input
                type="date"
                name="birthdate"
                id="birthdate"
                style={{ color: "#969696" }}
                onChange={handleInputChange}
                required
                className="signup__form__input"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                name="email"
                id="email"
                onChange={handleInputChange}
                className="signup__form__input"
                required
              />
              {mailError && <div className="signup__form__error" style={{color:"red", marginBottom:"10px"}}>Email already exists</div>}
            </div>
            <div>
              <input
                type="password"
                placeholder="************"
                name="password"
                id="password"
                onChange={handleInputChange}
                className="signup__form__input"
                required
               
              />
              {passwordError && <div className="signup__form__error" style={{color:"red"}}>Password must be at least 8 characters</div>}
            </div>
            <div className="signup__form__submit">
              <button className="signup__form__submit__btn">S'INSCRIRE</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
