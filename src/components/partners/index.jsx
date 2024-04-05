import './index.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';


export function Partners() {

  return (

    <div className="carousel">
      {/* <div className="carousel">
        <img src="imagem1.jpg" alt="Imagem 1"></img>
        <img src="imagem2.jpg" alt="Imagem 2"></img>
        <img src="imagem3.jpg" alt="Imagem 3"></img>
        <img src="imagem4.jpg" alt="Imagem 4"></img>
        <img src="imagem1.jpg" alt="Imagem 1"></img>
        <img src="imagem2.jpg" alt="Imagem 2"></img>
        <img src="imagem3.jpg" alt="Imagem 3"></img>
        <img src="imagem4.jpg" alt="Imagem 4"></img>
      </div> */}
            <Swiper
        slidesPerView={3.2}
        spaceBetween={30}
        freeMode={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,

        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, FreeMode, Pagination]}
        classNameName="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>

  )
}