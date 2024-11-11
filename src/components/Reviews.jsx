import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";



const Reviews = ({ testimonials }) => {


    return (
        <div>
            <h1 className="text-black font-semibold pb-2 text-3xl text-center">What People say about us!</h1>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, EffectCoverflow]}
                spaceBetween={50}
                slidesPerView={2}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}


                coverflowEffect={
                    {
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5
                    }
                }

                className="swiper_container "

                pagination={{ el: '.swiper-pagination', clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}

            >

                {
                    testimonials.map((testimonial, i) => {
                        return <SwiperSlide
                            className="w-52 h-[500px] text-center border-2 border-black rounded-md
                             py-5 mt-3 bg-black transition duration-800 ease-linear"
                        >
                            <div
                                className="text-white h-[250px] rounded-lg"
                            >
                                <p className="text-base tracking-wider font-normal">{testimonial.desc}</p>
                                <h3 className="text-2xl mt-8 font-bold">{testimonial.author}</h3>
                            </div>
                        </SwiperSlide>



                    })
                }




                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>

                    <div className="swiper-button-next slider-arrow">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                    <div className="swiper-pagination">

                    </div>
                </div>
            </Swiper>
        </div>
    )

}


export default Reviews;