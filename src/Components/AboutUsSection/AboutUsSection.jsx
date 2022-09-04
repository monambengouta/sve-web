import React from "react";
import "./aboutussection.css";

function AboutUsSection() {
  return (
    <div className="aboutussection__container">
      <div className="title">VIRTUAL SAFE WORLD</div>
      <div className="aboutussection__items">
        <div className="aboutussection__item">
          <img
            src={require("../../assets/aboutme_assets/Groupe159.png")}
            alt="Groupe159.png"
            className="aboutussection__item__image"
            style={{ marginRight: "20px" }}
          />
          <div className="aboutussection__item__text">
            <div className="aboutussection__item__text__title">
              QUI SOMMES NOUS ?
            </div>
            <div className="aboutussection__item__text__body">
              VSW est la première Start up engagé grâce à son application dans
              le combat contre les discriminations de tous genres, de
              l'harcèlement qu'ils soient dans la vie professionnelle ou bien
              dans la vie personnelle. Nous nous spécialisons donc dans le
              domaine de la protection afin de lutter contre l'insécurité
              grandissante dans les réseaux sociaux mais aussi dans le pays
            </div>
          </div>
        </div>
        <div className="aboutussection__item middle">
          <div className="aboutussection__item__text">
            <div className="aboutussection__item__text__title">VISION</div>
            <div className="aboutussection__item__text__body">
              Sécuriser la vie cyber, protéger des harceleurs, des racistes, de
              l'extrémisme des prêcheurs de haine. Être toujours présente à vos
              côtés pour vous assurer une protection fiable et indéfectible
              grâce au différents volets. Protéger votre espace de vie digital
              via les réseaux sociaux mais aussi vous offrir une protection à
              tout instant.
            </div>
          </div>
          <img
            src={require("../../assets/aboutme_assets/Groupe162.png")}
            alt="Groupe159.png"
            className="aboutussection__item__image"
            style={{ marginLeft: "20px" }}
          />
        </div>
        <div className="aboutussection__item">
          <img
            src={require("../../assets/aboutme_assets/Groupe161.png")}
            alt="Groupe159.png"
            className="aboutussection__item__image"
            style={{ marginRight: "20px" }}
          />
          <div className="aboutussection__item__text">
            <div className="aboutussection__item__text__title">OBJECTIF</div>
            <div className="aboutussection__item__text__body items">
              <div className="aboutussection__item__text__body__item">
                L'application de vsw sera la base et le slogan d'une sécurité
                cyber indispensable vue l'évolution et l'accessibilité de tout
                le monde dans le monde cyber, notre rôle sera polyvalent du
                filtrage des messages insultants à l'engagement de la procédure
                légal.
              </div>
              <div className="aboutussection__item__text__body__item">
                Assurer une présence et une sécurité en continue pour vous et
                vos proches grâce à des solutions innovante et digital.
              </div>
              <div className="aboutussection__item__text__body__item">
                Facilité la lutte contre l'harcèlement , le racisme , le racisme
                religieux , la haine l'extrémisme …..
              </div>
              <div className="aboutussection__item__text__body__item">
                Notre Rôle sera d'engager une procédure légal contre tout type
                d'harcèlements.
              </div>
              <div className="aboutussection__item__text__body__item">
                Site web recherche et analyse d'historique sur les pages public
                depuis la création du compte sur le réseau social.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsSection;
