import React from "react";
import "./footer.css";

function Footer() {
  return (
    <>
      <div className="footer__container">
        <div className="footer__detail">
          <div className="footer__blocs">
            <div className="footer__bloc">
              <div className="footer__items">
                <div className="footer__title">COMPANIE</div>
                <div>À Propos De Virtual Safe World</div>
                <div>Recrutement</div>
                <div>Carrière</div>
                <div>Podivtique De Confidentiadivté</div>
                <div>Nous Contacter</div>
              </div>
            </div>
            <div className="footer__bloc">
              <div className="footer__items">
                <div className="footer__title">PLUS</div>

                <div>Blog</div>
                <div>Histoires des cdivent</div>
                <div>Partenaires</div>
              </div>
            </div>
            <div className="footer__bloc">
              <div className="footer__items">
                <div className="footer__title">SUPPORT</div>

                <div>Intégration</div>
                <div>Extensions </div>
                <div>Termes Et Conditions</div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__icons">
          <div className="footer__logo">
            <img
              src={require("../../assets/home_assets/Groupe133.png")}
              alt="Groupe133.png"
            />
          </div>
          <div>

            <ul>
              <li>
                <img
                  src={require("../../assets/home_assets/facebook_w.png")}
                  alt="facebook.png"
                  style={{ width: "15px", height: "18px",marginRight:"20px" }}
                />
              </li>
              <li>
                <img
                  src={require("../../assets/home_assets/twitter_w.png")}
                  alt="twitter.png"
                  style={{ width: "31px", height: "20px",marginRight:"20px" }}
                />
              </li>
              <li>
                <img
                  src={require("../../assets/home_assets/instagram_w.png")}
                  style={{ width: "34px", height: "25px",marginRight:"20px" }}
                  alt="instagram.png"
                />
              </li>
              <li>
                <img
                  src={require("../../assets/home_assets/whatsapp_w.png")}
                  style={{ width: "32px", height: "18px",marginRight:"20px" }}
                  alt="whatsapp.png"
                />
              </li>
              <li>
                <img
                  src={require("../../assets/home_assets/linkedin_w.png")}
                  style={{ width: "28px", height: "18px",marginRight:"10px" }}
                  alt="linkedin"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="foot_url">2022-2023 virtualsafeworld.com, Tn</div>
    </>
  );
}

export default Footer;
