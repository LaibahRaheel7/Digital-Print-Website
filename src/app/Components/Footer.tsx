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
    <div className=' bg-[#2B2F3E]'>
      <div className='container mx-auto 2xl:px-56 px-6 py-6 text-white'>
        <div className='flex flex-wrap w-full my-10'>
          <div className='w-full text-sm md:w-1/3 px-12 my-4'>
            <div className='flex mb-4'>
              <FaLocationDot className='m-1' />
              <div className='mx-2'>Office 9, AH Building, Makka Street, Al Rawda 1, Ajman, U.A.E</div>
            </div>
            <div className='flex items-center mb-4'>
              <FaPhoneAlt className='mr-2'/>
              <div>+971 6 520 6845</div>
            </div>
            <div className='text-[#FF5536]'>Open Hours:</div>
            <div>Mond-Sat: 9am - 6pm</div>
          </div>
          <div className='w-full my-2 md:w-1/3 px-12'>
            <div className='font-bold text-lg mb-2'>Links:</div>
            <div className='text-sm my-2'>Home</div>
            <div className='text-sm my-2'>About</div>
            <div className='text-sm my-2'>Services</div>
            <div className='text-sm my-2'>Portfolio</div>
          </div>
          <div className='w-fullpx-12 md:w-1/3'>
            <div className='mb-4 text-2xl font-bold'>Newsletter</div>
            <div className='text-sm text-[#74787C] my-1'>Send us a newsletter to get updates</div>
            <div className='flex my-2'>
              <input type="text" placeholder="Your mail address" name="mail" required className=' py-1 px-2 rounded border border-gray-400 focus:outline-none focus:border-gray-600'/>
              <button className='bg-[#FF5536] px-3'>
                  <IoIosSend />
              </button>
            </div>
            <div className='flex my-2'>
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
    </div>
  )
}

export default Footer;
