import React, { useState } from "react";
import Main1 from "../components/Main1";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import backgroundImage from "../pictures/wallpaperflare.com_wallpaper.jpg"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

import '../App.css';

// import required modules
import { Parallax, Pagination, EffectCoverflow, Navigation } from 'swiper/modules';
import Reviews from "../components/Reviews";
import testimonials from "../data/data2";


const Home = ({ datas, isLoggedIn }) => {



  return (
    <div className="h-full ">
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            'background-image':
              'url(https://r4.wallpaperflare.com/wallpaper/787/610/414/muscle-press-pose-athlete-workout-hd-wallpaper-742e3fa43719b9e7c12bea17c7ddd322.jpg)',
          }}
          data-swiper-parallax="-23%"
        ></div>

        {
          datas.map((data, i) => {
            return <SwiperSlide className="" key={i}>
              <img className="object-cover" src={data.image} />
            </SwiperSlide>
          })
        }
      </Swiper>

      <div className=" h-[600px]">
        <Reviews testimonials={testimonials} />
      </div>
    </div>
  )
}

export default Home;
