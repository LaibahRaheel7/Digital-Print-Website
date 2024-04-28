import React from 'react';
import Image from 'next/image';
import { TiTick } from 'react-icons/ti';

function CreativeSection() {
  return (
    <div className='py-20 bg-gradient-to-br from-[#FE9515] from-10% via-[#FFB75D] via-30% to-[#FFD9AA] to-90%'>
      {/* Content */}
      <div className='px-6 2xl:px-56 py-6 font-sans flex flex-col lg:flex-row z-10'>
        {/* Left Section */}
        <div className='container w-full lg:w-1/2 py-2 lg:pl-12'>
          <div className='text-lg text-[#FF553E] pb-4 flex'>
            <p className='underline underline-offset-1'>Creati</p>ve Services
          </div>
          <div className='text-5xl font-bold mb-2 leading-normal'>
            Provide Awesome Services
          </div>
          <div className='text-xl my-2 tracking-wide'>
            There are many variations of passages of Lorem I available, but the
            majority have suffered.
          </div>
          <div className='leading-7  text-base'>
            <div className='flex my-4 tracking-wide'>
              <TiTick size={50} className='mx-3 my-2 md:my-0' color='#FF553E' />
              <div className='md:my-2'>All the Lorem Ipsum generators on the Internet tend to at predefined chunks as necessar</div>
            </div>
            <div className='flex my-4 tracking-wide'>
              <TiTick size={50} className='my-2 mx-3 md:my-0' color='#FF553E' />
              <div className='md:my-2'>The standard chunk of Lorem Ipsum used since there below for those interested.</div>
            </div>
            <div className='flex my-4 tracking-wide'>
              <TiTick size={50} className='my-2 mx-3 md:my-0' color='#FF553E' />
              <div className='md:my-2'>All the Lorem Ipsum generators on the Internet tend to at predefined chunks as necessar</div>
            </div>
            <div className='lg:text-left'>
              <button className='bg-[#FF553E] text-white rounded-lg py-4 lg:py-5 px-10 lg:px-12 text-sm my-4'>
                Lets Talk Us
              </button>
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div className='container w-full lg:w-1/2 flex-col flex justify-center items-center md:flex-row mx-4'>
          <div className='w-1/2 mx-4'>
            <div className='bg-white rounded-lg my-6 py-4'>
              <div className='text-center py-8'>
                <div className='bg-[#FF553E] p-4 rounded-full w-14 mx-auto'>
                  <Image src='/backdrop.png' width={60} height={40} alt='backdrop' />
                </div>
                <div className='text-xl font-bold mt-4'>Backdrops</div>
                <div className='text-[#74787C] text-xs px-16 font-lg mt-3'>
                  Quis autem veleum iure quin voluptate velit esse quam molesti
                  conseqtur
                </div>
              </div>
            </div>
            <div className='bg-white rounded-lg my-6 py-4'>
              <div className='text-center py-10'>
                <div className='bg-[#FF553E] p-4 rounded-full w-14 mx-auto'>
                  <Image src='/backdrop.png' width={60} height={40} alt='backdrop' />
                </div>
                <div className='text-xl font-bold mt-4'>Backdrops</div>
                <div className='text-[#74787C] text-xs px-16 font-lg mt-3'>
                  Quis autem veleum iure quin voluptate velit esse quam molesti
                  conseqtur
                </div>
              </div>
            </div>
          </div>
          <div className='w-1/2 mx-4 flex justify-center items-center'>
            <div className='bg-white rounded-lg my-6 py-4'>
              <div className='text-center py-8'>
                <div className='bg-[#FF553E] p-4 rounded-full w-14 mx-auto'>
                  <Image src='/backdrop.png' width={60} height={40} alt='backdrop' />
                </div>
                <div className='text-xl font-bold mt-4'>Backdrops</div>
                <div className='text-[#74787C] text-xs px-16 font-lg mt-3'>
                  Quis autem veleum iure quin voluptate velit esse quam molesti
                  conseqtur
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreativeSection;