import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Reviews = ({ testimonials }) => {
  return (
    <div className="w-full mt-10 py-18 px-4 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">
          What People Say About Us
        </h1>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Don't just take our word for it. Here's what our members have to say
          about their experience.
        </p>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, EffectCoverflow]}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 1.5,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 2.5,
                spaceBetween: 40,
              },
            }}
            className="w-full py-10"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide
                key={testimonial.id}
                className="swiper-slide flex justify-center items-center"
              >
                <div className="bg-gray-900 text-white rounded-2xl shadow-lg p-8 mx-4 h-[420px] w-[300px] flex flex-col justify-between transform transition-transform duration-300 hover:scale-105">
                  <div className="mb-6">
                    <svg
                      className="w-8 h-8 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-gray-400 text-base lg:text-lg leading-relaxed">
                    {testimonial.desc}
                  </p>
                  <div className="mt-auto">
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-4"></div>
                    <h3 className="text-xl font-bold mb-3">{testimonial.author}</h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="absolute inset-y-0 left-0 flex items-center justify-center">
            <div className="swiper-button-prev !text-white !w-12 !h-12 bg-gray-800 rounded-full shadow-lg flex items-center justify-center"></div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center justify-center">
            <div className="swiper-button-next !text-white !w-12 !h-12 bg-gray-800 rounded-full shadow-lg flex items-center justify-center"></div>
          </div>
        </div>

        {/* Pagination */}
        <div className="swiper-pagination !bottom-0"></div>
      </div>
    </div>
  );
};

export default Reviews;
