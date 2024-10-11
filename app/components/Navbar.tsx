
// import React, { useState } from 'react';
// import Link from 'next/link';



// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen); 
// };

"use client"

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-black text-white p-4 z-50 shadow-lg">
      <div className="flex justify-between items-center">
        
        {/* Desktop Links */}
        <div className="hidden md:flex justify-center gap-6 flex-grow">
          <Link href="/" className="transition-colors duration-300 hover:text-gray-400 font-bold text-lg">
            Home
          </Link>
          <Link href="/about" className="transition-colors duration-300 hover:text-gray-400 font-bold text-lg">
            About
          </Link>
          <Link href="/contact" className="transition-colors duration-300 hover:text-gray-400 font-bold text-lg">
            Contact
          </Link>
          <Link href="/service" className="transition-colors duration-300 hover:text-gray-400 font-bold text-lg">
            Service
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden bg-white text-black py-2 px-4 rounded-lg transition-transform transform hover:scale-105 shadow-lg font-bold"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <svg
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              className="octicon octicon-x"
            >
              <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              className="text-black octicon octicon-three-bars"
            >
              <path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z"></path>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden flex flex-col mt-2 space-y-2">
          <Link href="/" className="transition-colors duration-300 hover:text-gray-400 font-bold text-lg">
            Home
          </Link>
          <Link href="/about" className="transition-colors duration-300 hover:text-gray-400 font-bold text-lg">
            About
          </Link>
          <Link href="/contact" className="transition-colors duration-300 hover:text-gray-400 font-bold text-lg">
            Contact
          </Link>
          <Link href="/service" className="transition-colors duration-300 hover:text-gray-400 font-bold text-lg">
            Service
          </Link>
        </div>
      )}
    </div>
  );
}



// return (
//   <div className='fixed top-0 left-0 w-full bg-black text-white p-4 z-50'>
//       <div className='flex flex-wrap justify-between items-center'>
          
//           <div className='hidden md:flex justify-center gap-6 flex-grow'>
//               <Link className='transition-colors duration-300 hover:text-gray-400 font-bold text-lg' to="">
//                   Home
//               </Link>
//               <Link className='transition-colors duration-300 hover:text-gray-400 font-bold text-lg' to="about">
//                   About
//               </Link>
//               <Link className='transition-colors duration-300 hover:text-gray-400 font-bold text-lg' to="contact">
//                   Contact
//               </Link>
//               <Link className='transition-colors duration-300 hover:text-gray-400 font-bold text-lg' to="service">
//                   Service
//               </Link>
//           </div>

          
//           <button 
//               className="md:hidden bg-white text-white py-2 px-4 rounded-lg transition-transform transform hover:scale-105 shadow-lg font-bold"
//               onClick={toggleMenu}
//           >
//               {isOpen ? (
//                   <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
//                   <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
//               </svg>
//               ) : (
//                   <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" className=" text-black octicon octicon-three-bars Button-visual">
//                       <path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z"></path>
//                   </svg>
//               )}
//           </button>

//           </div>

// {isOpen && (
//     <div className='md:hidden flex flex-col mt-2'>
//         <Link className='transition-colors duration-300 hover:text-gray-400 font-bold text-lg' to="">
//             Home
//         </Link>
//         <Link className='transition-colors duration-300 hover:text-gray-400 font-bold text-lg' to="about">
//             About
//         </Link>
//         <Link className='transition-colors duration-300 hover:text-gray-400 font-bold text-lg' to="contact">
//             Contact
//         </Link>
//         <Link className='transition-colors duration-300 hover:text-gray-400 font-bold text-lg' to="service">
//             Service
//         </Link>
//     </div>
// )}
// </div>
// )











// import Link from 'next/link';
// import React from 'react';
// import './Navbar.css'; // Import custom CSS

// const Navbar = () => {
//   return (
//     <div className="navbar">
//       <div className="container">
//         {/* Logo */}
//         <h1 className="logo">LOGO</h1>

//         {/* Desktop Menu */}
//         <div className="menu">
//           <Link href="/">HOME</Link>
//           <Link href="/about">ABOUT</Link>
//           <Link href="/contact">CONTACT</Link>
//           <Link href="/product">PRODUCT</Link>
//         </div>

//         {/* Mobile Menu Toggle Button */}
//         <div className="mobile-toggle">
//           <button className="toggle-btn">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={2}
//               stroke="currentColor"
//               className="icon"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       <div className="mobile-nav">
//         <Link href="/">HOME</Link>
//         <Link href="/about">ABOUT</Link>
//         <Link href="/contact">CONTACT</Link>
//         <Link href="/product">PRODUCT</Link>
//       </div>
//     </div>
//   );
// };

// export default Navbar;









// import Link from 'next/link';
// import React from 'react';

// const Navbar = () => {
//   return (
//     <div className="bg-gray-800 text-white p-4 fixed w-full top-0 z-10">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <h1 className="text-2xl font-bold">LOGO</h1>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-6">
//           <Link href="/" className="hover:text-gray-300 transition">HOME</Link>
//           <Link href="/about" className="hover:text-gray-300 transition">ABOUT</Link>
//           <Link href="/contact" className="hover:text-gray-300 transition">CONTACT</Link>
//           <Link href="/product" className="hover:text-gray-300 transition">PRODUCT</Link>
//         </div>

//         {/* Mobile Menu Toggle Button */}
//         <div className="md:hidden flex items-center">
//           <button className="text-gray-300 focus:outline-none hover:text-gray-400">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={2}
//               stroke="currentColor"
//               className="w-6 h-6"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       <div className="md:hidden flex flex-col space-y-4 mt-4 px-4">
//         <Link href="/" className="block hover:text-gray-300 transition">HOME</Link>
//         <Link href="/about" className="block hover:text-gray-300 transition">ABOUT</Link>
//         <Link href="/contact" className="block hover:text-gray-300 transition">CONTACT</Link>
//         <Link href="/product" className="block hover:text-gray-300 transition">PRODUCT</Link>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
















// import Link from 'next/link';
// import React from 'react';

// const Navbar = () => {
//   return (
//     <div className="bg-gray-800 text-white p-4 fixed">
//       <div className="container mx-auto flex justify-between items-center">
//         <h1 className="text-2xl font-bold">LOGO</h1>
//         <div className="hidden md:flex space-x-6">
//           <Link href="/" className="hover:text-gray-300 transition">HOME</Link>
//           <Link href="/about" className="hover:text-gray-300 transition">ABOUT</Link>
//           <Link href="/contact" className="hover:text-gray-300 transition">CONTACT</Link>
//           <Link href="/product" className="hover:text-gray-300 transition">PRODUCT</Link>
//         </div>
//         <div className="md:hidden flex items-center">
//           <button className="text-gray-300 focus:outline-none hover:text-gray-400">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={2}
//               stroke="currentColor"
//               className="w-6 h-6">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       <div className="md:hidden flex flex-col space-y-4 mt-4 fixed">
//         <Link href="/" className="block hover:text-gray-300 transition">HOME</Link>
//         <Link href="/about" className="block hover:text-gray-300 transition">ABOUT</Link>
//         <Link href="/contact" className="block hover:text-gray-300 transition">CONTACT</Link>
//         <Link href="/product" className="block hover:text-gray-300 transition">PRODUCT</Link>
//       </div>
//     </div>
//   );
// };

// export default Navbar











// // 'use client'




// import Link from 'next/link';
// import React, { useState } from 'react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false); // State to handle mobile menu toggle

//   return (
//     <div className="bg-gray-800 text-white p-4 fixed w-full z-10">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <h1 className="text-2xl font-bold">LOGO</h1>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex space-x-6">
//           <Link href="/" className="hover:text-gray-300 transition">HOME</Link>
//           <Link href="/about" className="hover:text-gray-300 transition">ABOUT</Link>
//           <Link href="/contact" className="hover:text-gray-300 transition">CONTACT</Link>
//           <Link href="/product" className="hover:text-gray-300 transition">PRODUCT</Link>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden flex items-center">
//           <button
//             className="text-gray-300 focus:outline-none hover:text-gray-400"
//             onClick={() => setIsOpen(!isOpen)} // Toggle the menu
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={2}
//               stroke="currentColor"
//               className="w-6 h-6"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {isOpen && (
//         <div className="md:hidden flex flex-col space-y-4 mt-4">
//           <Link href="/" className="block hover:text-gray-300 transition">HOME</Link>
//           <Link href="/about" className="block hover:text-gray-300 transition">ABOUT</Link>
//           <Link href="/contact" className="block hover:text-gray-300 transition">CONTACT</Link>
//           <Link href="/product" className="block hover:text-gray-300 transition">PRODUCT</Link>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;
