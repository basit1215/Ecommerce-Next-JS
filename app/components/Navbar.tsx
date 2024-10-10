import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-gray-800 text-white p-4 fixed">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">LOGO</h1>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-gray-300 transition">HOME</Link>
          <Link href="/about" className="hover:text-gray-300 transition">ABOUT</Link>
          <Link href="/contact" className="hover:text-gray-300 transition">CONTACT</Link>
          <Link href="/product" className="hover:text-gray-300 transition">PRODUCT</Link>
        </div>
        <div className="md:hidden flex items-center">
          <button className="text-gray-300 focus:outline-none hover:text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className="md:hidden flex flex-col space-y-4 mt-4 fixed">
        <Link href="/" className="block hover:text-gray-300 transition">HOME</Link>
        <Link href="/about" className="block hover:text-gray-300 transition">ABOUT</Link>
        <Link href="/contact" className="block hover:text-gray-300 transition">CONTACT</Link>
        <Link href="/product" className="block hover:text-gray-300 transition">PRODUCT</Link>
      </div>
    </div>
  );
};

export default Navbar