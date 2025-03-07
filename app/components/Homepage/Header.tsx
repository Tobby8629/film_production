// "use client"

// import React from 'react'
// import Mapping from '../reuseable/Mapping'
// import { services } from '@/app/utils/constants'
// import Image from 'next/image'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import { useGSAP } from '@gsap/react'

// gsap.registerPlugin(ScrollTrigger);
// const Header = () => {

//   useGSAP(() => {
//       gsap.fromTo(
//         ".box",
//         { opacity: 0, y: 50 },
//         {
//           opacity: 1,
//           y: 0,
//           stagger: 0.4, // Delays each box animation
//           duration: 0.8,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: ".box",
//             start: "top 80%", // When 80% of viewport hits the top of container
//             toggleActions: "play none none none",
//           },
//         }
//       );
//     }, []);
//   return (
//     <div>
//       <Mapping array={services} className='services'>
//         {(item)=>
//           <div  className='relative my-10 box' >
//             <Image src={item?.icon} alt={item.name} className='h-[40vh] object-cover'/>
//             <p className='my-5'>{item.text}</p>
//           </div>}
//       </Mapping>  
//     </div>
//   )
// }

// export default Header

"use client";

import React from "react";
import { services } from "@/app/utils/constants";
import Image from "next/image";
import useStagger from "../Hooks/useStagger";


const Header = () => {
  const boxesRef = useStagger<HTMLDivElement>();

  return (
    <div className="services">
      <div 
        className="space-y-10 grid md:grid-cols-2 lg:grid-cols-3 gap-10 "
      >
        {services.map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              boxesRef.current[index] = el;
            }}
            className={`${index === 0 ? 'first_service' : ''}`}
          >
            <Image
              src={item?.icon}
              alt={item.name}
              // width={300}
              // height={200}
              className={`${index === 0 ? 'first_service_image' : "h-[40vh] w-full object-cover rounded-lg"}`}
            />
            <div className="header_text">
              <h3>{item.title}</h3>
              <p className="leading-8">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
