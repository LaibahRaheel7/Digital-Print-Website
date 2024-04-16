import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { GrFacebookOption } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <div className='container h-screen items-center justify-center px-52 py-6 text-white bg-[#2B2F3E]'>
      <div className='flex flex-wrap w-full'>
        <div className='w-full md:w-1/3 my-4 md:my-0 md:px-4'>
          <div className='flex items-center mb-2'>
            <FaLocationDot className='mr-2' />
            <div>Office 9, AH Building, Makka Street, Al Rawda 1, Ajman, U.A.E</div>
          </div>
          <div className='flex items-center mb-2'>
          <FaPhoneAlt className='mr-2'/>
            <div className='ml-2'>+971 6 520 6845</div>
          </div>
          <div className='mb-2 text-[#FF5536]'>Open Hours:</div>
          <div>Mond-Sat: 9am - 6pm</div>
        </div>
        <div className='w-full md:w-1/3 my-4 md:my-0 md:px-4'>
          <div className='font-bold mb-2'>Links:</div>
          <div className='my-1'>Home</div>
          <div className='my-1'>About</div>
          <div className='my-1'>Services</div>
          <div className='my-1'>Portfolio</div>
        </div>
        <div className='w-full md:w-1/3 my-4 md:my-0 md:px-4'>
          <div className='mb-2 text-xl font-bold'>Newsletter</div>
          <div className='mb-2'>Send us a newsletter to get updates</div>
          <div className='flex'>
            <input type="text" placeholder="Your mail address" name="mail" required className=' py-1 px-2 rounded border border-gray-400 focus:outline-none focus:border-gray-600'/>
            <button className='bg-[#FF5536] px-3'>
                <IoIosSend />
            </button>
          </div>
          <div className='flex'>
            <div className='rounded-full m-2 p-2 bg-gray-600'><GrFacebookOption /></div>
            <div className='rounded-full m-2 p-2 bg-gray-600'><FaTwitter /></div>
            <div className='rounded-full m-2 p-2 bg-gray-600'><FaYoutube /></div>
            <div className='rounded-full m-2 p-2 bg-gray-600'><FaInstagram /></div>
          </div>
        </div>
      </div>
      <div className='flex'>
        <div className='w-2/3'>© Copyright 2020 colorsproadv.com. All Rights Reserved.</div>
        <div className='w-1/3'>Terms & Conditions</div>
      </div>
    </div>
  )
}

export default Footer;
