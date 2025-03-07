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