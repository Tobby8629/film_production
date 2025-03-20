"use client"
import { services } from '@/app/utils/constants'
import Image, { StaticImageData } from 'next/image'
import {play} from '@/public/png'
import React from 'react'
import { service } from '@/interfaces'

const page = async ({params}: {params: {service: service}}) => {
  const service = services.find((e)=> e.link === `/services/${params.service}`)
  return (
    <div className='main_wrapper pt-12 lg:pt-28 h-[150vh] px-2'>
      <div className='max-md:h-[250px] my-5 relative md:w-[90%] md:mx-auto lg:mx-0 lg:ml-4 md:h-[400px] lg:w-full xl:h-[520px]'>
        <Image src={service?.icon as StaticImageData} alt='header' className='rounded-lg h-full w-full object-cover' loading='lazy'/>
        <div onClick={()=> console.log("i clicked")} className="absolute z-10 inset-0 bg-[#ffffff78] bg-opacity-50 flex items-center justify-center text-white">
          <Image src={play} alt='play video' className='absolute top-1/2 left-1/2 -translate-1/2'/>
        </div>
      </div>

    </div>
  )
}

export default page
