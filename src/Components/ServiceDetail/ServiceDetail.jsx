import React from "react";
import "./servicedetail.css";
const data = [
  {
    title: "BLOQUIH",
    description:
      "malheureusement la cyber criminalité augmente, c'est donc ce volet qui aura pour rôle de la combattre ! le volet bloquih vous permettra de bloquer tout type de commentaire haineux, discriminatoire etc..",
    img: require("../../assets/services_assets/Groupe63.png"),
  },
  {
    title: "ICHKILI",
    description:
      "Ce volet aura pour rôle de vous permettre de déposer tout types de discrimination ou d'harcèlement pour que ensuite notre équipe s'engage à déposer une plainte en votre nom",
    img: require("../../assets/services_assets/Groupe164.png"),
  },
  {
    title: "EJRILI",
    description:
      "ce volet vous assurera à chaque instant de la journée une sécurité maximal ou que vous soyez. Lors d'une situation dangereuse, à la maison ou dans l'espace publique votre signal d'alerte sera instantanément envoyé à notre équipe, à l'abonnée de l'application les plus proche mais aussi au service de police.",
    img: require("../../assets/services_assets/mockupphone.png"),
    link: "(CE SERVICE N'EST DISPONIBLE QUE SUR L'APPLICATION)",
    android : true
  },
];
function ServiceDetail(props) {
  return (
    <div className="servicedetail__container">
      <img src={data[props.index].img} alt="Groupe63.png" className="servicedetail__img" />
      <div className="servicedetail__bloc__body">
        <div className="servicedetail__bloc__body__title">{data[props.index].title}</div>
        <div className="servicedetail__bloc__body__description">
          {data[props.index].description}
        </div>
        <div className="servicedetail__bloc__body__link">
          {data[props.index].link
            ? data[props.index].link
            : "(CE SERVICE EST DISPONIBLE SUR WEB ET APPLICATION)"}
        </div>
        {data[props.index].title === "EJRILI" ? null : (
          <div className="serviecedetail__btn">
            <button className="servicedetail__bloc__body__btn">
              Souscrire
            </button>
          </div>
        )}
        {data[props.index].android ? (
          <div className="servicedetail__bloc__body__android">
            <div className="servicedetail__bloc__body__android__spec">
              Simple. Sécurisé. Fiable.
            </div>
            <div className="servicedetail__bloc__body__android__description">
              Avec VSW, profitez de nos servies rapide, simple et sûre qui est
              gratuite, et qui est disponible sur téléphones.
            </div>
            <div className="phone__items">
              <div className="phone__item">
                <img src={require("../../assets/services_assets/android.png")} alt="androidlogo.png" className="phone__icon"/>
                <div className="phone__item_type">android</div>
                <div className="phone__item_arrow"> <i className="arrow right"></i></div>
              </div>
              <div className="phone__item">
                <img src={require("../../assets/services_assets/apple.png")} alt="androidlogo.png" className="phone__icon"/>
                <div className="phone__item_type">android</div>
                <div className="phone__item_arrow"> <i className="arrow right"></i></div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default ServiceDetail;
