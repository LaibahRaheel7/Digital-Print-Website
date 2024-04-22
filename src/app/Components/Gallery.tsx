import React from 'react'
import Image from 'next/image';

function Gallery() {
  return (
    <div>
      <div className='text-center my-12'>
        <div className='text-2xl font-bold text-[#FF553E] underline'>Watch Us</div>
        <div className='text-4xl mt-2 md:mx-12 xl:mx-8 leading-relaxed'>Our Many Services</div>
        <div className='mx-12 md:mx-44 lg:mx-72 xl:mx-96 leading-loose'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised</div>
      </div>
      <div className='mx-48'>
        <div className='columns-1 gap-5 md:gap-8 md:columns-2 xl:columns-3 space-y-5'>
            <img src="/service5.png" width={420} height={256} className='rounded-lg' alt="" />
            <img src="/service6.png" width={420} height={550} className='rounded-lg' alt="" />
            <img src="/service3.png" width={420} height={456.79} className='rounded-lg' alt="" />
            <img src="/service4.png" width={420} height={350} className='rounded-lg' alt="" />
            <img src="/service1.png" width={420} height={256.79} className='rounded-lg' alt="" />
            <img src="/service2.png" width={420} height={550} className='rounded-lg' alt="" />
        </div>
      </div>
      <div className='text-center my-5'>
        <div className='text-xl mx-6 lg:mx-28 xl:mx-64'>Canvas Printing l Duratrance Printing l One Way Vision Printing l Blockout Banner Printing l Mesh Banner Printing l Photo Paper Printing l Flyers l Business Cards l Roll Up Stands l Promotional Stands & Many More Including Installation Services</div>
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
