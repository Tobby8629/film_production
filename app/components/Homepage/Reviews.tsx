"use client";

import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Review } from '@/app/utils/constants'
import React, { useRef } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { upperquote } from "@/public/svgs";



const Reviews = () => {
 const swiperRef = useRef<SwiperRef | null>(null);
  return (
    <section className='review_wrapper'>
      <div className='main_wrapper'>
      <h2 className="text-2xl md:text-4xl text-center font-bold mb-5">Reviews and Feedback</h2>
      <p className="md:w-[85%] lg:w-[50%] mx-auto text-center">Lorem ipsum dolor sit amet consectetur. Dui amet et sagittis at massa nisl integer suscipit et. Dolor consectetur non vitae maecenas ultrie</p>
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
              <Image src={upperquote} alt={"review"} />
              <p className="text-lg font-sans italic my-5">{review.review}</p>
              <div className="flex gap-3 items-center">
              <h3 className="mt-2 text-2xl font-semibold capitalize">{review.name}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-4 flex justify-center gap-4">
        <button
          onClick={() => swiperRef.current?.swiper.slidePrev()}
          className="h-13 w-13 bg-gray-600 text-white rounded-full shadow-md hover:bg-gray-700 transition"
        >
          <FontAwesomeIcon icon={faArrowLeft}  width={40} />
        </button>
        <button
          onClick={() => swiperRef.current?.swiper.slideNext()}
          className="h-13 w-13 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition"
        >
           <FontAwesomeIcon icon={faArrowRight} width={40} />
        </button>
      </div>
      </div>
    </section>
  )
}

export default Reviews