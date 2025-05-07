"use client"

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useState, useRef, useEffect } from 'react';

interface Option {
  name: string;
  scheduling_url: string;
}

interface CustomDropdownProps {
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
  options: Option[];
}

const Dropdown: React.FC<CustomDropdownProps> = ({ name, value, onChange, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (isOpen) {
      gsap.fromTo(
        ".option",
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
      );
    }
  }, [isOpen]);

  const handleSelect = (selectedValue: string) => {
    setIsOpen(false);
    onChange(name, selectedValue);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedOption = options.find(opt => opt.scheduling_url === value);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        className="w-full border px-4 py-2 text-left rounded shadow focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption ? selectedOption.name : 'Select a service'}
      </button>

      {isOpen && (
        <ul className="absolute left-0 right-0 mt-2 border rounded shadow max-h-60 overflow-auto z-50">
          {options.map((opt) => (
            <li
              key={opt.name}
              className="option "
              onClick={() => handleSelect(opt.scheduling_url)}
            >
              {opt.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
