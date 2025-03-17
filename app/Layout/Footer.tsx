import React from 'react'
import { getInTouch, quickLinks, socials } from '../utils/constants'
import Mapping from '../components/reuseable/Mapping'
import Link from 'next/link'
import Image from 'next/image'
// import { Mail, phone } from '@/public/svgs'
import { logo } from '@/public/png'
import { Phone } from '@/public/svgs'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='main_wrapper'>
        <div className='footer_nav'>
          <section>
            <Image src={logo} alt='film contemporary' className='w-[50px] h-[50px] mb-8'/>
            <p className=' font-poppins font-semibold capitalize text-lg'>subscribe for more info</p>
            <div className='subscribe'> 
              <input name='gmail' placeholder='enter email address' type="email" className='bg-transparent pl-3 w-[70%]'/>  
              <button className=' rounded-3xl font-poppins bg-blue-500 text-white p-3'>subscribe</button>
            </div>
          </section>
          <section className='max-sm:my-7'>
            <h3 className='header font-poppins font-semibold text-lg'>Quick Links</h3>
            <Mapping array={quickLinks}>
              {(item)=>
              <div className='my-2 '>
                <Link className='font-sans text-sm' href={item.link}>{item.name}</Link>
              </div>
              }
            </Mapping>
          </section>
          <section className='max-sm:my-7'>
            <h3 className='header font-poppins font-semibold text-lg '>Get In Touch</h3>
            <Mapping array={getInTouch}>
              {(item)=>
                <div className='my-2 flex items-center'>
                  <item.icon className='footer_svg text-red-500'/>
                  <a className='font-sans capitalize text-sm' href={item.icon === Phone ? `tel:${item.text}` : `mailto:${item.text}`}>{item.text}</a>
                </div>
              }
            </Mapping>
            
          </section>
          <section className='max-sm:my-7'>
            <h3 className='header font-poppins font-semibold text-lg'>Follow Us</h3>
            <Mapping array={socials}>
              {(item)=>
              <div className='my-2 flex items-center'>
                <item.icon className='footer_svg' />
                <a href={item.link} className='font-sans capitalize text-sm'>{item.handle}</a>
              </div>
              }
            </Mapping>
          </section>
        </div>
        <div className=' border-t-2 py-10 mt-10 border-pry-white lg:flex lg:items-center justify-between'>
          <p className='max-sm:text-xs font-thin flex items-center'><span className='text-lg mr-1'>&copy;</span> 2025 FILM CONTEMPORARY. ALL RIGHT RESERVED</p>
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