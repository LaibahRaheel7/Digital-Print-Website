import React from 'react';
import Image from 'next/image';

function HeroSection() {
  return (
    <div className='py-16'>
      <div className='container mx-auto 2xl:px-56 px-6 py-6 flex flex-col-reverse lg:flex-row font-sans'>
        <div className='lg:w-1/2 flex flex-col justify-center'>
          <div className='font-bold text-4xl lg:text-5xl mb-2 lg:mb-5 leading-normal lg:leading-relaxed text-center lg:text-left'>
            Elevate Your Brand with Our Digital
          </div>
          <div className='text-[#FF553E] font-bold text-4xl lg:text-5xl mb-4 lg:mb-7 text-center lg:text-left'>
            Print Services
          </div>
          <div className='my-5 leading-8 lg:leading-10 text-lg tracking-wider text-center lg:text-left'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </div>
          <div className='text-center lg:text-left'>
            <button className='bg-[#FF553E] text-white rounded-lg py-4 lg:py-5 px-10 lg:px-12 text-sm my-4'>
              Let's Talk Us
            </button>
          </div>
        </div>
        <div className='lg:w-1/2 flex items-center justify-center 2xl:flex-none'>
          <Image src="/section1.png" width={872} height={588} alt='hero image' className='xl:absolute'/>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
