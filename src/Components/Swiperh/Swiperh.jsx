// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Switcher from '../Switcher/Switcher'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Swiperh ({setIndex})  {
  const data = [{
    title: "RAPIDITÉ", description: "Pas besoin d'ordinateur ou d'etre chez soit ou avec pour se connecter.", picture: "1.png"
  }, {
    title: "EFFICACITÉ", description: "Vous pouvez être a jour et consulter votre compte a tout moment de la journée.", picture: "2.png"
  }, {
    title: "SECURITÉ", description: "Demander de l'aide en cas de danger grâce a un simple click", picture: "3.png"
  }]
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={(e) => setIndex(e.activeIndex)}

    >
        <SwiperSlide ><Switcher switcher={data[0]} /></SwiperSlide>
        <SwiperSlide > <Switcher switcher={data[1]} /></SwiperSlide>
        <SwiperSlide > <Switcher switcher={data[2]} /></SwiperSlide>
    </Swiper>
  );
};
