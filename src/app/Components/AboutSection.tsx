import React from 'react';
import Image from 'next/image';
import { TiTick } from "react-icons/ti";

function AboutSection() {
  return (
    <div className='py-6 lg:py-16'>
      <div className='container mx-auto px-12 lg:px-2 xl:px-36 2xl:px-56 py-6 font-sans flex flex-col lg:flex-row'>
        <div className=' w-1/2 mr-24'>
          <div className='absolute mx-16 my-40 sm:mx-32 z-10'>
            <Image src="/section2_img1.png" width={360} height={400} className='shadow-lg w-2/3 sm:w-full bg-white border-8 border-white rounded-lg' alt='hero image'/>
          </div>
          <div>
            {/* <Image src='/vector21.png' width={100} height={100} className='hidden md:block absolute md:w-42 left-2/3 lg:left-1/3 translate-x-2 lg:translate-x-36 translate-y-11 z-0' alt=''/> */}
          </div>
          <div className='lg:absolute z-0'>
            <Image src="/section2_img2.png" width={360} height={400} className='rounded-lg' alt='hero image'/>
          </div>
        </div>
        <div className='mt-56 sm:mt-64 md:mt-72 lg:mt-0 lg:pt-0 lg:w-1/2 lg:pl-12'>
          <div className='text-lg text-[#FF553E] pb-4 flex'><p className='underline underline-offset-1'>About The Agency</p></div>
          <div className='text-4xl text-black font-bold mb-2 leading-normal'>Digital Print Agency that Helps You Go Ahead.</div>
          <div className='text-lg text-black my-2 tracking-wide'>We are an Advertising & Design Production Company that deals in Large Format Printing, Graphic Designing, and all types of Branding including Wall/Glass Branding, Exhibition Stand Graphics Branding, Vehicle Branding with our best services & rates.</div>
          <div className='leading-7 text-base'>
            <div className='flex'>
              <TiTick className='mx-3 my-2' color='#2FC7A1'/> 
              <div className='text-black'>Happy Customers</div>
            </div>
            <div className='flex'>
              <TiTick className='my-2 mx-3' color='#2FC7A1'/> 
              <div className='text-black'>Problem Solutions</div>
            </div>
            <div className='flex'>
              <TiTick className='my-2 mx-3' color='#2FC7A1'/> 
              <div className='text-black'>Design & Development</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;