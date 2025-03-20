"use client"
import { footerText, services } from '@/app/utils/constants'
import React from 'react'
import { service } from '@/interfaces'
import Services from '@/app/components/Details/Services'
import Video from '@/app/components/Details/Video'
import { useParams } from 'next/navigation'

const Page =  () => {
  const params = useParams()
  const service = services.find((e)=> e.link === `/services/${params.service}`)
  return (
    <main className='main_wrapper pt-12 lg:pt-28 px-2'>
      <Video service={service as service}/>
       <h3 className='header'>{service?.title}</h3>
       <p className='text my-5'>{footerText}</p>
      <Services />
    </main>
  )
}

export default Page
