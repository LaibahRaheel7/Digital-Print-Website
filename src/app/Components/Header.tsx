import React from 'react';
import Image from 'next/image';
import { LuSearch } from "react-icons/lu";
import { MdMenu } from "react-icons/md";

function Header() {
  return (
    <div className="">
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/header_logo.png"
            width={50}
            height={50}
            alt="logo"
          />
        </div>
        <div className="flex items-center">
          <div className="hidden sm:flex space-x-4">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>
          <div className="flex items-center space-x-4">
            <div className="p-1 cursor-pointer"><LuSearch /></div>
            <div className="p-1 text-white bg-[#FF553E] rounded cursor-pointer sm:hidden"><MdMenu /></div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Custom NavLink component for navigation links
function NavLink({ href, children }) {
  return (
    <a href={href} className="px-4 py-2 hover:bg-gray-700 text-[#FF553E] cursor-pointer">
      {children}
    </a>
  );
}

export default Header;
