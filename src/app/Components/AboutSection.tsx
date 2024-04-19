import React from 'react';
import Image from 'next/image';
import { TiTick } from "react-icons/ti";

function AboutSection() {
  return (
    <div className='py-16'>
        <div className='container mx-auto px-6 2xl:px-56 py-6 font-sans lg:flex'>
        <div className='lg:w-1/2 lg:mr-5'>
            <div className='absolute w-full lg:w-1/2 z-0'>
                <Image src="/section2_img2.png" width={360} height={400} className='rounded-lg' alt='hero image'/>
            </div>
            <div className='relative lg:absolute my-40 mx-40 bg-white border-8 rounded-lg border-white z-10'>
                <Image src="/section2_img1.png" width={360} height={400} className=' rounded-lg' alt='hero image'/>
            </div>
        </div>
        <div className='lg:w-1/2 py-2 lg:pl-12'>
            <div className='text-lg text-[#FF553E] pb-4 flex'><p className='underline underline-offset-1 mr-2'>About </p>The Agency</div>
            <div className='text-4xl font-bold mb-2 leading-normal'>Digital Print Agency that Helps You Go Ahead.</div>
            <div className='text-lg my-2 tracking-wide'>We are an Advertising & Design Production Company that deals in Large Format Printing, Graphic Designing, and all types of Branding including Wall/Glass Branding, Exhibition Stand Graphics Branding, Vehicle Branding with our best services & rates.</div>
            <div className='leading-7  text-base'>
                <div className='flex'>
                    <TiTick className='mx-3 my-2' color='#2FC7A1'/> 
                    <div>Happy Customers</div>
                </div>
                <div className='flex'>
                    <TiTick className='my-2 mx-3' color='#2FC7A1'/> 
                    <div>Problem Solutions</div>
                </div>
                <div className='flex'>
                    <TiTick className='my-2 mx-3' color='#2FC7A1'/> 
                    <div>Design & Development</div>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default AboutSection;
