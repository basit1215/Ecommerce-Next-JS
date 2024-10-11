"use client"

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className="fixed top-0 left-0 w-full bg-orange-500 text-white p-4 z-50 shadow-xl">
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
          <Link href="/service" className="transition-colors duration-300 hover:text-orange-100  text-base font-semibold">
            Service
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
          <Link href="/service" className="block text-center transition-colors duration-300 hover:text-orange-100  text-lg font-semibold">
            Service
          </Link>
        </div>
      )}
    </div>
  );
  
  

  // return (
  //   <div className="fixed top-0 left-0 w-full bg-black text-white p-4 z-50 shadow-lg">
  //     <div className="flex justify-between items-end">
  //       <div className='justify-center md:pl-6 lg:pl-7 xl:pl-8 2xl:pl-10 sm:pl-5 gap-6 pl-3 flex-grow items-end'>
  //         <h1 className="text-2xl font-bold tracking-wide">
  //           Store
  //         </h1>
  //       </div>

  //       <div className="hidden md:flex justify-end gap-6 pr-10 flex-grow items-end">
  //         <Link href="/" className="transition-colors duration-300 hover:text-gray-400 font-bold text-lg">
  //           Home
  //         </Link>
  //         <Link href="/about" className="transition-colors duration-300 hover:text-gray-400 font-bold text-lg">
  //           About
  //         </Link>
  //         <Link href="/contact" className="transition-colors duration-300 hover:text-gray-400 font-bold text-lg">
  //           Contact
  //         </Link>
  //         <Link href="/service" className="transition-colors duration-300 hover:text-gray-400 font-bold text-lg">
  //           Service
  //         </Link>
  //       </div>

  //       <button
  //         className="md:hidden bg-blue-500 text-white py-2 px-4 rounded-lg transition-transform transform hover:scale-105 shadow-lg font-bold z-50"
  //         onClick={toggleMenu}
  //       >
  //         {isOpen ? (
  //           <svg
  //             aria-hidden="true"
  //             height="16"
  //             viewBox="0 0 16 16"
  //             version="1.1"
  //             width="16"
  //             className="text-white"
  //           >

  //             <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
  //           </svg>
  //         ) : (
  //           <svg
  //             aria-hidden="true"
  //             height="16"
  //             viewBox="0 0 16 16"
  //             version="1.1"
  //             width="16"
  //             className="text-white"
  //           >

  //             <path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z"></path>
  //           </svg>
  //         )}
  //       </button>


  //     </div>


  //     {isOpen && (
  //       <div className="md:hidden flex flex-col mt-2 space-y-2 items-center">
  //         <Link href="/" className="transition-colors duration-300 hover:text-gray-400 font-bold text-lg">
  //           Home
  //         </Link>
  //         <Link href="/about" className="transition-colors duration-300 hover:text-gray-400 font-bold text-lg">
  //           About
  //         </Link>
  //         <Link href="/contact" className="transition-colors duration-300 hover:text-gray-400 font-bold text-lg">
  //           Contact
  //         </Link>
  //         <Link href="/service" className="transition-colors duration-300 hover:text-gray-400 font-bold text-lg">
  //           Service
  //         </Link>
  //       </div>
  //     )}
  //   </div>
  // );

}