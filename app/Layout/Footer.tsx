import React from 'react'
import { footerText, getInTouch, quickLinks } from '../utils/constants'
import Mapping from '../components/reuseable/Mapping'
import Link from 'next/link'
import Image from 'next/image'
import { phone } from '@/public/svgs'

const Footer = () => {
  return (
    <footer className=' bg-pry-red text-pry-white'>
      <div className='main_wrapper'>
        <div className='footer_nav'>
          <section>
            <h2 className='mb-5 text-lg font-semibold'>Grammercetamol</h2>
            <p className='max-sm:leading-[23px] leading-[28px] font-sans'>{footerText}</p> 
          </section>
          <section className='max-sm:my-7'>
            <h3 className='header'>Quick Links</h3>
            <Mapping array={quickLinks}>
              {(item)=>
              <div className='my-2 '>
                <Link className='font-poppins font-[500] text-sm' href={item.link}>{item.name}</Link>
              </div>
              }
            </Mapping>
          </section>
          <section className='max-sm:my-7'>
            <h3 className='header'>Get In Touch</h3>
            <Mapping array={getInTouch}>
              {(item)=>
                <div className='my-2 flex'>
                  <Image src={item.icon} className='mr-1 w-[15px]' alt={item.text as string} />
                  <a className='font-poppins font-[500] text-sm' href={item.icon === phone ? `tel:${item.text}` : `mailto:${item.text}`}>{item.text}</a>
                </div>
              }
            </Mapping>
            
          </section>
          {/* <section className='max-sm:my-7'>
            <h3 className='header'>Follow Us</h3>
            <Mapping array={socials}>
              {(item)=>
              <div className='my-2 flex'>
                <Image src={item.icon}  className='mr-1 w-[15px]'alt={item.handle as string} />
                <a href={item.link} className='font-poppins font-[500] text-sm'>{item.handle}</a>
              </div>
              }
            </Mapping>
          </section> */}
        </div>
        <div className=' border-t-2 py-10 mt-10 border-pry-white lg:flex lg:items-center justify-between'>
          <p className='max-sm:text-xs font-thin flex items-center'><span className='text-lg mr-1'>&copy;</span> 2025 GRAMMERCETAMOL. ALL RIGHT RESERVED</p>
          <div className='terms'>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
      
    </footer>
  )
}

export default Footer