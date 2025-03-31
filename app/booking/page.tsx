import React from 'react'
// import { footerText } from '../utils/constants'
import Image from 'next/image'
import { checkout } from '@/public/png'
import Mapping from '../components/reuseable/Mapping'
import { doubleCheck } from '@/public/svgs'
import BookingForm from '../components/Booking/BookingForm'


const page = () => {
  const loop = Array.from({ length: 5 }, (_, i) => i + 1);
  return (
    <section className='main_wrapper !px-[1.5rem] checkout !pt-28 !pb-10'>
      <h2 className='md:!mt-12 !text-center'>Checkout Details</h2>
      <p className='text-center my-2 md:w-[85%] lg:w-[50%] mx-auto '>
        Lorem ipsum dolor sit amet consectetur. 
        Rhoncus netus sodales vivamus porttitor. 
        Faucibus scelerisque in enim 
      </p>
      <div className='checkout_main'>
        <div className='booking_top lg:w-[52%]'>
          <Image src={checkout} alt='checkout' />
          <h2 className='mt-4'>Booking Consulation</h2>
          <p className=' my-5'>
            Lorem ipsum dolor sit amet consectetur. 
            Donec condimentum quis praesent sed arcu 
            ut eget nunc. Arcu integer consectetur massa 
            porttitor nulla morbi. 
            Lectus dictumst pellentesque 
          </p>
          <Mapping array={loop}>
            {(item)=>(
              <div key={item} className='flex place-items-baseline gap-[5px] my-3 w-full'>
                <Image src={doubleCheck} className="w-[17px]" alt={"check"} />
                <p className=''>Lorem ipsum dolor sit amet consectetur. Quam ut risus.</p>
              </div>
            )}
          </Mapping>
        </div>
        <div className='booking_down lg:w-[40%]'>
            <BookingForm />
        </div>
      </div>
    </section>
  )
}

export default page