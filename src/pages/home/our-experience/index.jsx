import './index.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

export function OurExperience(){
    return(
        <section id='OurExperience'>
            <div className='container-992px container-ourExperience'>
                <div className='wrapper-subtitle'>
                    <h4>Nossa experiência refletindo no seu futuro.</h4>
                </div>
                <div className='wrapper-title'>
                    <h1>
                        Somos uma agência de aceleração digital.
                    </h1>
                </div>
                <div className="wrapper-images">
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={20}
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
                            delay: 5000,
                            disableOnInteraction: false                  
                        }}
                        modules={[Autoplay, FreeMode, Pagination, Navigation]}
                        className="mySwiper"
                        >
                        <SwiperSlide><img src="images/partners/perfectPay.png" alt="logo perfectPay" /></SwiperSlide>
                        <SwiperSlide><img src="images/partners/cartpanda.png" alt="logo cartpanda" /></SwiperSlide>
                        <SwiperSlide><img src="images/partners/swiftype.png" alt="logo swiftype" /></SwiperSlide>
                        <SwiperSlide><img src="images/partners/convertte.png" alt="logo convertte" /></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}