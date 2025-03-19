"use client";

import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { services } from "@/app/utils/constants";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import useResize from "../Hooks/useResize";

const Hero = () => {
  const swiperRef = useRef<SwiperRef | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const resize = useResize()

  useEffect(() => {
    // Initial translate up animation on mount
    gsap.fromTo (
      heroRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <header ref={heroRef} className="main_wrapper max-md:!p-2.5 max-md:h-[70vh] h-[100vh] xl:h-[90vh] opacity-0 overflow-hidden md:pt-10 ">
      <div className="h-full w-full">
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 9000, disableOnInteraction: false }} // Auto-slide
          pagination={{ clickable: true }} 
          className="w-full h-full"
        >
          {services.map((item, index) => (
            <SwiperSlide key={index} className="first_service">
              <Image
                src={item?.icon}
                alt={item.name}
                className="first_service_image"
              />
              <div className="header_text">
                <h3>{item.title}</h3>
                <p className="leading-8">
                  {resize.screen === "mobile"  ? `${item.text.slice(0, 250)}...` : item.text}
                </p>
                <Link
                  className="text-link !text-lg xl:text-xl font-semibold"
                  href={item.name}
                >
                  Learn More
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
    </header>
  );
};

export default Hero;

