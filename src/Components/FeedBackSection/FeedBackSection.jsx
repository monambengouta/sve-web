import React from "react";
import "./feedbacksection.css";
import Comment from "../Comment/Comment";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const data = [
  {
    img: require("../../assets/home_assets/pexels-andrea-piacquadio-774909.png")
  },
  {
    img: require("../../assets/home_assets/pexels-pixabay-220453.png")
  },
  {
    img: require("../../assets/home_assets/pexels-victor-miyata-1845534.png")
  },
  {
    img: require("../../assets/home_assets/pexels-italo-melo-2379004.png")
  }


];
function FeedBackSection() {
  return (
    <section className="feedback__container">
      <div className="feedback__header">
        <div className="feedback__title">
          <strong>125 000</strong> PERSONNES SATISFAITES
        </div>
        <div className="feedback__description">voici leurs commentaires...</div>
      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          data.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <Comment img={item.img} />
              </SwiperSlide>
            )
          }
          )
        }
      </Swiper>
      {/* <div className="feedback__pagination">
        <div className="rounded"></div>
        <div className="rounded" style={{ backgroundColor: "#141B86" }}></div>
        <div className="rounded" style={{ backgroundColor: "#141B86" }}></div>
        <div className="rounded" style={{ backgroundColor: "#141B86" }}></div>
      </div> */}
    </section>
  );
}

export default FeedBackSection;
