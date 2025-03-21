"use client"
import { footerText, services } from '@/app/utils/constants'
import React from 'react'
import { service } from '@/interfaces'
import Services from '@/app/components/Details/Services'
import Video from '@/app/components/Details/Video'
import { useParams } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard } from '@fortawesome/free-solid-svg-icons/faClipboard'

const Page =  () => {
  const params = useParams()
  const service = services.find((e)=> e.link === `/services/${params.service}`)
  return (
    <main className='main_wrapper pt-12 lg:pt-28 px-2'>
      <Video service={service as service}/>
      <div className='md:w-[90%] md:mx-auto' >  
        <h3 className='header'>{service?.title}</h3>
        <p className='text my-5'>{footerText}</p>
      </div>
      <Services />
      <div className='booking-sec'>
        <p className='font-semibold'>$5000.00</p>
        <button className='bg-blue-600 rounded-lg !text-white'>Book</button>
        <button className='flex border-[1px] border-blue-600 rounded-lg items-center gap-2'>
          Add to Booking
          <FontAwesomeIcon icon={faClipboard} className='w-3 h-3' />
        </button>
      </div>
    </main>
  )
}

export default Page
