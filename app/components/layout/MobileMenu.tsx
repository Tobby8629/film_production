import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { usePathname } from 'next/navigation'
import React from 'react'
import Mapping from '../reuseable/Mapping'
import { menuLinks } from '@/app/utils/constants'
import Link from 'next/link'
import { mobileMenu } from '@/interfaces'

const MobileMenu = ({toggleMenu, isMenuOpen}: mobileMenu) => {
  const pathName = usePathname()
  return (
    <section className={`mobile_menu ${isMenuOpen ? 'translate-y-0' : '-translate-y-[120%]'}`}>
        <FontAwesomeIcon 
          icon={faTimes} 
          style={{ fontSize: 30 }} 
          className="absolute top-5 right-5 cursor-pointer text-gray-600" 
          onClick={toggleMenu} 
        />

        {/* <div className='mt-12 w-[85%] mx-auto p-3 px-5 rounded-4xl border-[1px] border-pry-faint-gray'>
          <FontAwesomeIcon icon={faSearch} className='mr-3 text-pry-faint-gray'/>
          <input type="text" placeholder="Search" className="w-10/12 border-0 outline-0 text-pry-faint-gray placeholder:text-pry-faint-gray" />
        </div> */}
       
          <Mapping array={menuLinks} className="py-8 max-md:w-[40%]">
            {(item) => (
              <div onClick={toggleMenu} key={item.name} className={`py-4 text-center ${pathName === item.link ? "bg-pry-faint-red rounded-lg" : ""}`}>
                <Link href={item.link} className={`menu_link ${item.name === "Sign Up" ? "btn" : null} ${pathName === item.link ? "!text-pry-red " : ""} `}>{item.name}</Link>
              </div>
            )}
          </Mapping>
        
      </section>
  )
}

export default MobileMenu