import React from 'react';
import Image from 'next/image';
import Header from './Header';

function HeroSection() {
  return (
    <div className=''>
      <Image src='/hero_bgimg.png' width={1100} height={900} className='w-full lg:h-4/5 h-full absolute z-0' alt='background'/>
      <Image src='/redshade.png' width={600} height={500} className='absolute bottom-1 z-10' alt='redshade'/>
      <Image src='/blueshade.png' width={600} height={500} className='absolute left-4 z-10' alt='blueshade'/>
      <Image src='/greenshade.png' width={750} height={700} className='absolute right-2 z-10' alt='greenshade'/>
      <Image src='/vector2.png' width={30} height={40} className='hidden xl:block absolute xl:right-28 xl:top-24 z-30' alt=''/>
      <Image src='/vector3.png' width={60} height={90} className='hidden xl:block absolute xl:right-32 xl:top-28 z-30' alt=''/>
      <Image src='/vector4.svg' width={60} height={90} className='hidden xl:block absolute xl:left-32 xl:top-20 z-30' alt=''/>
      <Image src='/vector5.png' width={60} height={60} className='hidden xl:block absolute xl:left-1/3 xl:top-28 z-30' alt=''/>
      <Image src='/vector6.png' width={30} height={30} className='hidden 2xl:block absolute xl:left-40 xl:bottom-1/2 z-40' alt=''/>
      <Header/>
      <div className='lg:py-16 py-5'>
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
            <Image src="/section1.png" width={850} height={550} alt='hero image' className='xl:absolute z-40'/>
            <Image src='/section1img2.png' width={700} height={600} className="absolute w-2/3 lg:w-96 xl:w-fit 2xl:left-2/4 z-20" alt='behind'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
