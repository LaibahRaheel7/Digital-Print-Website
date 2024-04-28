import React from 'react'
import Image from 'next/image';

function Gallery() {
  return (
    <div>
      <div className='text-center my-12'>
        <div className='text-2xl font-bold text-[#FF553E] underline'>Watch Us</div>
        <div className='text-4xl text-black mt-2 md:mx-12 xl:mx-8 leading-loose'>Our Many Services</div>
        <div className='mx-12 md:mx-44 text-black lg:mx-72 xl:mx-80 xl:px-48 leading-relaxed'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised</div>
      </div>
      <div className='mx-12 lg:mx-28'>
        <div className='gap-8 columns-2 lg:columns-3 space-y-5'>
            <img src="/service5.png" width={420} height={256} className='w-full rounded-lg' alt="" />
            <img src="/service6.png" width={420} height={550} className='w-full rounded-lg' alt="" />
            <img src="/service3.png" width={420} height={456.79} className='w-full rounded-lg' alt="" />
            <img src="/service4.png" width={420} height={350} className='w-full rounded-lg' alt="" />
            <img src="/service1.png" width={420} height={256.79} className='w-full rounded-lg' alt="" />
            <img src="/service2.png" width={420} height={550} className='w-full rounded-lg' alt="" />
        </div>
      </div>
      <div className='text-center my-5 pt-5'>
        <div className='text-xl text-black mx-6 lg:mx-28 2xl:mx-96 xl:px-12'>Canvas Printing l Duratrance Printing l One Way Vision Printing l Blockout Banner Printing l Mesh Banner Printing l Photo Paper Printing l Flyers l Business Cards l Roll Up Stands l Promotional Stands & Many More Including Installation Services</div>
        <div className='my-5'>
            <button className='bg-[#FF553E] text-white rounded-lg py-4 lg:py-5 px-10 lg:px-12 text-sm my-4'>
                View all Service
            </button>
        </div>
      </div>
    </div>
  )
}

export default Gallery