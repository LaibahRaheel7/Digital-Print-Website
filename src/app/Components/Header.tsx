import React from 'react';
import Image from 'next/image'
import { LuSearch } from "react-icons/lu";
import { MdMenu } from "react-icons/md";

function Header() {
  return (
    <div className="w-screen">
      <div className="container mx-auto px-52 py-6 flex justify-between items-center bg-transparent">
        <div className="flex items-center">
            <Image
                src="/header_logo.png"
                width={50}
                height={50}
                alt="logo"
            />
          
        </div>
        <div className="flex items-center">
        <div className="flex">
            <div className="px-4 py-2 hover:bg-gray-700 text-[#FF553E] cursor-pointer">Home</div>
            <div className="px-4 py-2 hover:bg-gray-700 cursor-pointer">About</div>
            <div className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Services</div>
            <div className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Contact</div>
          </div>
          <div className='flex'>
            <div className="mr-4 p-1"><LuSearch /></div>
            <div className="mr-4 p-1 rounded-md bg-[#FF553E]"><MdMenu /></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
