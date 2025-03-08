"use client";

import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import gsap from "gsap";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import Image from "next/image";
import { Gallery } from "@/app/utils/constants";

const Footages = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // GSAP Animation on Mount
  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current.children,
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.5,
          ease: "power2.out",
        }
      );
    }
  }, []);

  return (
    <section className="py-10 md:py-24 ">
      <div className="main_wrapper">
      <h2 className="text-2xl md:text-4xl font-bold mb-5"> Gallery and Work Footage </h2>
      <div ref={containerRef} className="max-w-4xl mx-auto p-4">
      <Swiper
        modules={[Autoplay, EffectFade]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        effect="fade"
        loop={true}
        className="w-full rounded-lg overflow-hidden shadow-lg"
      >
        {Gallery.map((src, index) => (
          <SwiperSlide key={src.id} >
            <Image
              src={src.img}
              alt={`Slide ${index + 1}`}
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
      </div>
    </section>
    
  );
};

export default Footages;





// "use client"
// import { useState, useRef, useEffect } from "react";
// import gsap from "gsap";
// import { Gallery } from "@/app/utils/constants";
// import Image from "next/image";

// const Footages = () => {
//   const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);
//   const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
//   const carouselRef = useRef<HTMLDivElement | null>(null);

//   // Auto-transition every 3 seconds
//   useEffect(() => {
//     if (!isVisible) return;

//     const interval = setInterval(() => {
//       setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % Gallery.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [isVisible]);

//   // Intersection Observer to check visibility
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => setIsVisible(entry.isIntersecting),
//       { threshold: 0.7 }
//     );

//     if (carouselRef.current) {
//       observer.observe(carouselRef.current);
//     }

//     return () => {
//       if (carouselRef.current) {
//         observer.unobserve(carouselRef.current);
//       }
//     };
//   }, []);

//   // GSAP animation on index change
//   useEffect(() => {
//     if (isVisible) {
//       gsap.to(".carousel-inner", {
//         x: `-${currentVideoIndex * 100}%`,
//         duration: 1,
//         ease: "power2.inOut",
//       });
//     }
//   }, [currentVideoIndex, isVisible]);

//   return (
//     <section className='bg-zinc py-10 w-screen overflow-hidden'>
//       <div className='main_wrapper common-padding'>
//         <div className='md:flex mb-20 flex-wrap justify-between '>
//           <h2>Gallery</h2>
//         </div>
      
//       <div ref={carouselRef} className="overflow-hidden w-full">
//         <div className="carousel-inner flex w-full transition-transform">
//           {Gallery.map((list, index) => (
//           <div key={list.id} className="w-full flex-shrink-0">
//             <div className="video-carousel_container w-full h-full flex items-center justify-center bg-black rounded-3xl">
//               <Image
//                 src={list.img}
//                 ref={(el) => {
//                     imageRefs.current[index] = el;
//                   }}
//                 alt="image"
//                 className="w-full h-full object-cover rounded-3xl"
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//     </div>
//     </section>
//   );
// };

// export default Footages;
