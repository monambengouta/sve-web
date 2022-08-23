import React from "react";
import "./label.css";
function Label(props) {
  return (
    <div className="label__container">
      <div className="label__title">{props.title}</div>
      <div className="label__degree">
        <div className={props.title === "EJRILI" ?" label__degree__line__ejrili" : (props.title === "ICHKILI" ? "label__degree__line__ichkili" :"label__degree__line__bloquih" ) }></div>
        <div className="label__degree__precent">{props.percent}</div>
      </div>
      <div className="label__line"></div>
    </div>
  );
}

export default Label;
