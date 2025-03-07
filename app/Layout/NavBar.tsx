"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useCallback, useState } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import MobileMenu from '../components/layout/MobileMenu';
import DesktopMenu from '../components/layout/DesktopMenu';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  return (
    <nav className="main_wrapper flex justify-between items-center py-5 relative">
      <h2 className="text-2xl font-semibold">Grammercetamol</h2>
      <DesktopMenu />
      <div className="md:hidden cursor-pointer" >
        <FontAwesomeIcon 
          icon={faBars} 
          style={{ fontSize: 25 }} 
          onClick={toggleMenu} 
        />
      </div>
      <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </nav>
  );
};

export default NavBar;


