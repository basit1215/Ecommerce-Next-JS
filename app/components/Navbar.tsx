"use client"

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="fixed top-0 left-0 w-full bg-orange-500 text-white p-4 z-50 shadow-custom">
      <div className="flex justify-between items-center">
        <div className="flex items-center pl-3 sm:pl-5 md:pl-6 lg:pl-7 xl:pl-8 2xl:pl-10">
          <h1 className="text-xl font-bold tracking-wider">
            Store
          </h1>
        </div>
  
        <div className="hidden md:flex gap-6 pr-3 sm:pr-5 md:pr-6 lg:pr-7 xl:pr-8 2xl:pr-10">
          <Link href="/" className="transition-colors duration-300 hover:text-orange-100 text-base font-semibold">
            Home
          </Link>
          <Link href="/about" className="transition-colors duration-300 hover:text-orange-100  text-base font-semibold">
            About
          </Link>
          <Link href="/contact" className="transition-colors duration-300 hover:text-orange-100  text-base font-semibold">
            Contact
          </Link>
        </div>
  
        <button
          className="md:hidden  text-white p-1 rounded-md  focus:ring-1 focus:ring-offset-1 focus:ring-orange-200 pr-3 "
          onClick={toggleMenu}
        >
          {isOpen ? (
            <svg
              aria-hidden="true"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              className="text-white"
            >
              <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              className="text-white"
            >
              <path d="M4 6h16M4 12h16m-16 6h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>
      </div>
  
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <Link href="/" className="block text-center transition-colors duration-300 hover:text-orange-100  text-lg font-semibold">
            Home
          </Link>
          <Link href="/about" className="block text-center transition-colors duration-300 hover:text-orange-100  text-lg font-semibold">
            About
          </Link>
          <Link href="/contact" className="block text-center transition-colors duration-300 hover:text-orange-100  text-lg font-semibold">
            Contact
          </Link>
        </div>
      )}
    </div>
  )
}