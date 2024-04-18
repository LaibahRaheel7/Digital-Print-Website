import React from 'react'
import Image from 'next/image'

function HeroSection() {
  return (
    <div className=' w-screen container mx-auto px-48 py-6 flex'>
      <div className=' py-7 w-1/2'>
        <div className='font-bold text-5xl'>Elevate Your Brand with Our Digital</div>
        <div className='text-[#FF553E] text-4xl font-bold mb-5'>Print Services</div>
        <div className='text-sm my-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</div>
        <div>
            <button className='bg-[#FF553E] text-white rounded py-2 px-4 text-sm'>Let's Talk Us</button>
        </div>
      </div>
      <div className='w-1/2'>
        <Image src="/section1.png" width={1500} height={1500} alt='hero image'/>
      </div>

    </div>
  )
}

export default HeroSection
