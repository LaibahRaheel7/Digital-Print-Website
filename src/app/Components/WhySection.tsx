import React from 'react';
import Image from 'next/image';

function WhySection() {
  return (
    <div className='container mx-auto px-6 2xl:px-56 py-6 font-sans flex flex-col items-center justify-center h-full'>
      <div className='text-center'>
        <div className='text-xl xl:text-2xl font-bold text-[#FF553E]'>Why?</div>
        <div className='text-3xl xl:text-5xl mt-2 mx-4 md:mx-12 xl:mx-32 leading-relaxed'>Fast, Cheap And High Quality Digital Prints Why Not?</div>
      </div>
      <div className='flex flex-wrap justify-between mt-6 '>
        <div className='text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-8 flex flex-col items-center justify-center'>
          <div className='mx-auto flex justify-center items-center'>
            <Image src='/yellowellipse.png' width={200} height={200}  className='absolute' alt='crown image'/>
            <Image src='/crown.png' width={200} height={40} className='w-4/5 lg:w-full' alt='crown image'/>
          </div>
          <div className='text-xl xl:text-3xl font-bold mt-4 leading-normal'>Modern Technology</div>
          <div className='text-base xl:text-lg mt-2'>Lorem ipsum dolor sit amet consectetur. Non commodo mi elit ut</div>
        </div>

        <div className='text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-8 flex flex-col items-center justify-center'>
          <div className='mx-auto flex justify-center items-center'>
            <Image src='/marketingEllipse.png' width={200} height={200}  className='absolute' alt='crown image'/>
            <Image src='/marketing.png' width={200} height={40} className='w-4/5 lg:w-full' alt='text image'/>
          </div>
          <div className='text-xl xl:text-3xl font-bold mt-4 leading-normal'>Speed And Accuracy</div>
          <div className='text-base xl:text-lg mt-2'>Lorem ipsum dolor sit amet consectetur. Non commodo mi elit ut</div>
        </div>

        <div className='text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-8 flex flex-col items-center justify-center'>
          <div className='mx-auto flex justify-center items-center'>
            <Image src='/teamEllipse.png' width={200} height={200}  className='absolute' alt='crown image'/>
            <Image src='/team.png' width={200} height={40} className='w-4/5 lg:w-full' alt='team image'/>
          </div>
          <div className='text-xl xl:text-3xl font-bold mt-4 leading-normal'>Professional Team</div>
          <div className='text-base xl:text-lg mt-2'>Lorem ipsum dolor sit amet consectetur. Non commodo mi elit ut</div>
        </div>
      </div>
    </div>
  )
}

export default WhySection;
