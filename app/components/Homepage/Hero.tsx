"use client"
import { services } from '@/app/utils/constants';
import React from 'react'
import useStagger from '../Hooks/useStagger';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  const boxesRef = useStagger<HTMLDivElement>();
  return (
    <header className='main_wrapper h-[80vh] xl:h-[90vh] mt-5 overflow-hidden'>
      {services.map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              boxesRef.current[index] = el;
            }}
            className= 'first_service'
          >
            <Image
              src={item?.icon}
              alt={item.name}
              
              className='first_service_image'
            />
            <div className="header_text">
              <h3>{item.title}</h3>
              <p className="leading-8">{item.text}</p>
              <Link className="text-link !text-lg xl:text-xl font-semibold" href={item.name}>Learn More</Link>
            </div>
          </div>
        ))}
    </header>
  )
}

export default Hero
