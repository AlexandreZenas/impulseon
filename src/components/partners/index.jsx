import './index.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, FreeMode } from 'swiper/modules';
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
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          autoplay={{
            delay: 1000              
          }}
          modules={[Autoplay, FreeMode, Pagination, Navigation]}
          className="mySwiper"
        >
        <SwiperSlide><img src="images/partners/shopify.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="images/partners/google.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="images/partners/woocommerce.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="images/partners/meta.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="images/partners/elementor.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="images/partners/wordpress.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="images/partners/hostgator.png" alt="" /></SwiperSlide>
      </Swiper>
    </div>
  )
}