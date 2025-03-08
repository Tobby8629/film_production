"use client";

import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Review } from '@/app/utils/constants'
import React, { useRef } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faUser } from "@fortawesome/free-solid-svg-icons";



const Reviews = () => {
 const swiperRef = useRef<SwiperRef | null>(null);
  return (
    <section className='bg-pry-dark-blue py-10'>
      <div className='main_wrapper'>
      <h2 className="text-2xl md:text-4xl text-center font-bold mb-5">Reviews and Feedback</h2>
      <Swiper
        ref={swiperRef}
        modules={[Navigation]}
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1 }, // Mobile
          768: { slidesPerView: 2 }, // Tablet
          1024: { slidesPerView: 3 }, // Desktop
        }}
        className="w-full"
      >
        {Review.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="p-6 border rounded-lg shadow-md bg-white text-gray-800 my-10">
              <p className="text-lg italic">{review.review}</p>
              <div className="flex gap-3 items-center mt-3">
              <FontAwesomeIcon icon={faUser} className="text-xl bg-gray-400 p-3 rounded-full h-2.5"/>
              <h3 className="mt-2 font-semibold capitalize">{review.name}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-4 flex justify-center gap-4">
        <button
          onClick={() => swiperRef.current?.swiper.slidePrev()}
          className="px-6 py-2 bg-gray-600 text-white rounded-lg shadow-md hover:bg-gray-700 transition"
        >
          <FontAwesomeIcon icon={faArrowLeft}  />
        </button>
        <button
          onClick={() => swiperRef.current?.swiper.slideNext()}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
        >
           <FontAwesomeIcon icon={faArrowRight} width={10} />
        </button>
      </div>
      </div>
    </section>
  )
}

export default Reviews