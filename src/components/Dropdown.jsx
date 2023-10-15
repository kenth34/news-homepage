// src/components/Dropdown.js
import React, { useState } from 'react';
import { iconMenu,iconMenuClose } from '../assets/images';
import { navLinks } from '../constants';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="rounded-md "
      >
        {isOpen ? 
        <img 
            src={iconMenuClose}
            alt='hamburgerclose'
            width={25}
            height={25}
        /> :
        <img 
            src={iconMenu}
            alt="hamburger"
            width={35}
            height={55} />}
      </button>
      {isOpen && (
        <ul className="absolute right-0 mt-2 bg-white border border-gray-300 rounded shadow-lg py-2">
          {navLinks.map((items)=>(
            <li key={items.label}>
              <a href={items.href}
              className='font-inter leading-normal text-lg text-slate-gray hover:text-red-400 p-6'
              >
                {items.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
