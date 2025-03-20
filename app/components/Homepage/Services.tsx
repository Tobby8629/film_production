"use client";

import React from "react";
import { services } from "@/app/utils/constants";
import Image from "next/image";
import useStagger from "../Hooks/useStagger";
import Link from "next/link";


const Services = () => {
  const boxesRef = useStagger<HTMLDivElement>();

  return (
    <div className="services main_wrapper ">
      <div 
        className="space-y-10 grid md:grid-cols-2  gap-10 "
      >
        {services.map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              boxesRef.current[index] = el;
            }}
            className="opacity-0"
            // className={`${index === 0 ? 'first_service' : ''}`}
          >
            <Image
              src={item?.icon}
              alt={item.name}
              
              // className={`${index === 0 ? 'first_service_image' : "h-[40vh] w-full object-cover rounded-lg"}`}
            />
            <div className="header_text">
              <h3>{item.title}</h3>
              <p className="leading-8 my-3">{item.text}</p>
              <Link href={item.link} className="text-link text-lg font-semibold">Learn More</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
