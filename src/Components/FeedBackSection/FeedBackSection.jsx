import React from "react";
import "./feedbacksection.css";
import Comment from "../Comment/Comment";
function FeedBackSection() {
  return (
    <section className="feedback__container">
      <div className="feedback__header">
        <div className="feedback__title"><strong>125 000</strong> PERSONNES SATISFAITES</div>
        <div className="feedback__description">voici leurs commentaires...</div>
      </div>
      <Comment />
      <div className="feedback__pagination">
        <div className="rounded" ></div>
        <div className="rounded" style={{backgroundColor:"#141B86"}}></div>
        <div className="rounded" style={{backgroundColor:"#141B86"}}></div>
        <div className="rounded" style={{backgroundColor:"#141B86"}}></div>      
      </div>
    </section>
  );
}

export default FeedBackSection;
