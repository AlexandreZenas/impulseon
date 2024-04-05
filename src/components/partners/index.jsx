import './index.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, FreeMode } from 'swiper/modules';
//vaaaa
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';


export function Partners() {

  return (

    <div className="container-1140px container-partners">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          loop={true}  
          freeMode={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false                  
          }}
          modules={[Autoplay, FreeMode, Pagination, Navigation]}
          classNameName="mySwiper"
        >
        <SwiperSlide><img src="images/partners/shopify.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="images/partners/shopify.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="images/partners/shopify.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="images/partners/shopify.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="images/partners/shopify.png" alt="" /></SwiperSlide>


      </Swiper>
    </div>

  )
}