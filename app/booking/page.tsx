import React from 'react'
// import { footerText } from '../utils/constants'
import Image from 'next/image'
import { checkout } from '@/public/png'
import Mapping from '../components/reuseable/Mapping'
import { doubleCheck } from '@/public/svgs'


const page = () => {
    const loop = Array.from({ length: 5 }, (_, i) => i + 1);
  return (
    <section className='main_wrapper pt-20 pb-10'>
      <h2 className='md:!mt-12'>Checkout Details</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur. 
        Rhoncus netus sodales vivamus porttitor. 
        Faucibus scelerisque in enim 
      </p>
      <div>
        <div className='booking_top'>
          <Image src={checkout} alt='checkout' />
          <h2>Booking Consulation</h2>
          <p>
          Lorem ipsum dolor sit amet consectetur. 
          Donec condimentum quis praesent sed arcu 
          ut eget nunc. Arcu integer consectetur massa 
          porttitor nulla morbi. 
          Lectus dictumst pellentesque 
          </p>
          <Mapping array={loop}>
            {(item)=>(
              <div key={item} className='flex items-center gap-2 w-full'>
                <Image src={doubleCheck} alt={"check"} />
                <p>Lorem ipsum dolor sit amet consectetur. Quam ut risus.</p>
              </div>
            )}
          </Mapping>
        </div>
        <div className='booking_down'>

        </div>
      </div>
    </section>
  )
}

export default page