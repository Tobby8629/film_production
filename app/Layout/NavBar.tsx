"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useCallback, useState } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import MobileMenu from '../components/layout/MobileMenu';
import DesktopMenu from '../components/layout/DesktopMenu';
import Image from 'next/image';
import { logo } from '@/public/png';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  return (
    <nav className="main_wrapper relative">
      <div className='nav_wrapper'>
        <Image src={logo} alt='film contemporary' className='w-[50px] h-[50px]'/>
        <DesktopMenu />
        <div className="md:hidden cursor-pointer" >
          <FontAwesomeIcon 
            icon={faBars} 
            style={{ fontSize: 25 }} 
            onClick={toggleMenu} 
          /> 
        </div>
        <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>
    </nav>
  );
};

export default NavBar;


