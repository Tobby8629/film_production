"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useCallback, useEffect, useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import MobileMenu from "../components/layout/MobileMenu";
import DesktopMenu from "../components/layout/DesktopMenu";
import Image from "next/image";
import { logo } from "@/public/png";
import gsap from "gsap";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const pathname = usePathname()

  useEffect(() => {
    // Ensure Hero animation completes before NavBar animation starts
    gsap.fromTo(
      "#nav",
      { opacity: 0, y: 30, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out", delay: 1 }
    );
  }, []);

  return (
    <nav id="nav" className={`${pathname === "/" ? "main_wrapper_home" : "main_wrapper_oth"} `}>
      <div className={`${pathname === "/" ? "nav_wrapper_home" : "nav_wrapper_oth"} flex justify-between items-center py-2 px-5 md:px-8`}>
        <Link href="/">
          <Image src={logo} alt="film contemporary" className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px]" />
        </Link>
        <DesktopMenu />
        <div className="md:hidden cursor-pointer">
          <FontAwesomeIcon icon={faBars} style={{ fontSize: 25 }} onClick={toggleMenu} />
        </div>
        <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>
    </nav>
  );
};

export default NavBar;

