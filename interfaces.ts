import { StaticImageData } from "next/image";
import React, { ReactNode } from "react"

export interface rootLayout {
  children: React.ReactNode
}

export interface mapping<T> {
  array: T[];
  children: (item: T, index: number) =>  ReactNode;
  className?: string;

}

export interface mobileMenu {
  toggleMenu: () => void;
  isMenuOpen: boolean;
}

export interface service {
  name: string,
  title:string,
  text: string,
  link: string,
  icon: StaticImageData
}

export interface ServiceApi {
  name: string;
  // Add more properties if needed
}

export interface ServicesResponse {
  collection: ServiceApi[];
}