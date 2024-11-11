import React, { useState } from "react";
import Main1 from "../components/Main1";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import backgroundImage from "../pictures/wallpaperflare.com_wallpaper.jpg"
import { Play, Clock, Users, Dumbbell } from 'lucide-react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

import '../App.css';


import { Parallax, Pagination, Navigation } from 'swiper/modules';
import ClassCard from "../components/ClassCard";
import TrainerCard from "../components/TrainerCard";

import Reviews from "../components/Reviews";
import testimonials from "../data/data2";


const Home = ({ datas, isLoggedIn }) => {


    return (
      <>


        

        <div className="min-h-screen bg-black text-white">
      
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold mb-6">SHAPE YOUR BODY</h1>
            <p className="text-xl mb-8">Transform your physique and elevate your lifestyle with our state-of-the-art facilities and expert trainers.</p>
            <button className="bg-red-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors flex items-center">
              Start Training
               <Play className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      <div className="h-[100vh] ">
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

        </div>

      {/* Features Section */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="text-center">
            <Clock className="h-16 w-16 text-red-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">FLEXIBLE TIME</h3>
            <p className="text-gray-400">Open 24/7 for your convenience. Train on your schedule.</p>
          </div>
          <div className="text-center">
            <Users className="h-16 w-16 text-red-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">EXPERT TRAINERS</h3>
            <p className="text-gray-400">Professional coaches to guide your fitness journey.</p>
          </div>
          <div className="text-center">
            <Dumbbell className="h-16 w-16 text-red-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">MODERN EQUIPMENT</h3>
            <p className="text-gray-400">State-of-the-art facilities for optimal training.</p>
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">OUR CLASSES</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ClassCard
              title="CrossFit"
              trainer="John Smith"
              time="Mon, Wed, Fri - 10:00 AM"
              image="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80"
            />
            <ClassCard
              title="Boxing"
              trainer="Mike Johnson"
              time="Tue, Thu - 4:00 PM"
              image="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&q=80"
            />
            <ClassCard
              title="Yoga"
              trainer="Sarah Williams"
              time="Every Day - 8:00 AM"
              image="https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?auto=format&fit=crop&q=80"
            />
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">EXPERT TRAINERS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TrainerCard
              name="John Smith"
              role="CrossFit Expert"
              image="https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&q=80"
            />
            <TrainerCard
              name="Sarah Williams"
              role="Yoga Instructor"
              image="https://wallpapers.com/images/high/lady-in-black-legs-spread-393ln7u6u5eanmas.webp"
            />
            <TrainerCard
              name="Mike Johnson"
              role="Boxing Coach"
              image="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?auto=format&fit=crop&q=80"
            alt="CTA background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-8">START YOUR JOURNEY TODAY</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">Join our community of fitness enthusiasts and transform your life with our expert guidance and state-of-the-art facilities.</p>
          <button className="bg-red-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors">
            Become a Member
          </button>
        </div>
      </section>

      <div className=" h-[600px]">
        <Reviews testimonials={testimonials} />
      </div>
     
    </div>
      </>
        
    )
      
}

export default Home;
