import React from 'react'
import Image from 'next/image'
import { TiTick } from "react-icons/ti";

function AboutSection() {
  return (
    <div className=' w-screen container mx-auto px-48 py-6 flex'>
        <div className='w-1/2'>
        <Image src="/section2_img1.png" width={300} height={300} alt='hero image'/>
        <Image src="/section2_img2.png" width={300} height={300} alt='hero image'/>
        </div>
        <div className=' py-7 w-1/2'>
            <div className='text-xs text-[#FF553E] pb-4 flex'><p className='underline underline-offset-1 mr-2'>About </p>The Agency</div>
            <div className=' text-4xl font-bold mb-5'>Digital Print Agency that Help you go Ahead.</div>
            <div className='text-sm my-5'>We are Advertising & Design Production Company Deals in Large Format Printing, Graphic Designing and all Types of Branding including Wall/Glass Branding, Exhbition Stand Graphics Branding, Vehilce Branding with our best servies & rates.</div>
            <div>
                <div className='flex'>
                    <TiTick className='my-1 mx-3' color='#2FC7A1'/> 
                    <div>Happy Customers</div>
                </div>
                <div className='flex'>
                    <TiTick className='my-1 mx-3' color='#2FC7A1'/> 
                    <div>Problem Solutions</div>
                </div>
                <div className='flex'>
                    <TiTick className='my-1 mx-3' color='#2FC7A1'/> 
                    <div>Design & Development</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutSection
