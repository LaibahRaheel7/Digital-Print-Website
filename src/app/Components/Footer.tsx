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
    <div className='bg-[#2B2F3E]'>
      <div className='container mx-auto px-4 py-6 text-white'>
        <div className='flex flex-col lg:flex-row justify-between mx-5'>

          {/* Address and Links */}
          <div className='w-full  xl:w-2/3 flex flex-col md:flex-row md:justify-between md:items-start md:mx-0 xl:mx-10'>

            {/* Address */}
            <div className='w-full md:w-1/2 my-5'>
              <div className='flex my-3 md:my-5'>
                <FaLocationDot size={15} className='m-1'/>
                <div className='pl-3'>Office 9, AH Building, Makka Street, Al Rawda 1, Ajman, U.A.E</div>
              </div>
              <div className='flex my-3 md:my-5'>
                <FaPhoneAlt size={15} className='m-1'/>
                <div className='pl-3'>+923002004000</div>
              </div>
              <div className='my-3 md:my-5'>
                <div className='text-[#FF5536]'>Open Hours:</div>
                <div>Mon-Sat: 9 am-6pm</div>
              </div>
            </div>

            {/* Links */}
            <div className='w-full md:w-1/2 md:px-24 my-5'>
              <h1 className='text-xl font-bold'>Links:</h1>
              <div>Home</div>
              <div>About</div>
              <div>Services</div>
              <div>Portfolio</div>
            </div>

          </div>

          {/* Newsletter */}
          <div className='w-full xl:w-1/3 lg:mx-5 my-5'>
            <h1 className='text-2xl font-bold'>Newsletter</h1>
            <div className='mt-3 md:mt-5'>Send us a newsletter to get updates.</div>
            <div className='flex my-3 md:my-2'>
              <input type='text' placeholder='Your Email Address' name='mail' required className='py-1 px-2 rounded border border-gray-400 focus:outline-none focus:border-gray-600 w-full'/>
              <button className='bg-[#FF5536] px-3 py-1'>
                <IoIosSend size={25}/>
              </button>
            </div>
            <div className='flex my-3 md:my-2 justify-center'>
              <div className='rounded-full bg-gray-600 p-2 m-2'><GrFacebookOption size={25}/></div>
              <div className='rounded-full bg-gray-600 p-2 m-2'><FaTwitter size={25}/></div>
              <div className='rounded-full bg-gray-600 p-2 m-2'><FaYoutube size={25}/></div>
              <div className='rounded-full bg-gray-600 p-2 m-2'><FaInstagram size={25}/></div>
            </div>
          </div>
          
        </div>
        
        {/* Copyright */}
        <div className='md:flex text-center xl:mx-14 md:text-start text-sm mt-6'>
          <div className='md:w-2/3'>© Copyright 2020 colorsproadv.com. All Rights Reserved.</div>
          <div className='md:w-1/3 xl:px-8'>Terms & Conditions</div>
        </div>
        
      </div>
    </div>
  );
}

export default Footer;