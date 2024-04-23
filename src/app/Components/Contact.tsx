import React from 'react';
import Image from 'next/image';
import ContactForm from "./ContactForm"

function Contact() {
  return (
    <div className=''>
      <div className='bg-gradient-to-r from-[#8EE8D9] to-[#00B293]'>
        <div className='py-8 lg:py-24'>
          <div className='text-center my-2'>
            <div className='text-white text-lg lg:text-xl'>Client Testimonial</div>
            <div className='text-3xl lg:text-5xl'>Feedback from Client</div>
          </div>
          <div className='my-12'>
            <div className='flex flex-col items-center lg:flex-row lg:justify-center xl:mx-auto max-w-screen-lg px-4'>
              <div className='flex flex-col lg:flex-row justify-center'>
                <div className='relative mb-4 lg:mr-4'>
                  <Image src='/contactchat.png' width={500} height={256} className='' alt='' />
                  <div className='absolute bottom-32 lg:bottom-24 left-0 p-4 text-sm lg:text-base'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and this typesetting industry.
                  </div>
                  <div className='flex w-full lg:w-1/2 mb-4 lg:mb-0'>
                    <Image src='/person1.jpeg' width={64} height={64} className='rounded-full h-14 border-2 border-black' alt='' />
                    <div className='mx-3'>
                      <div className='text-lg lg:text-xl text-black font-bold'>Michale Dole</div>
                      <div className='text-sm text-white'>Product Designer</div>
                      <Image src='/contactStar.png' width={50} height={10} className='my-2' alt='' />
                    </div>
                  </div>
                </div>
                <div className='relative'>
                  <Image src='/contactchat.png' width={500} height={256} className='' alt='' />
                  <div className='absolute bottom-28 lg:bottom-28 left-0 p-4 text-sm lg:text-base'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and this typesetting industry.
                  </div>
                  <div className='flex w-full lg:w-1/2'>
                    <Image src='/person1.jpeg' width={64} height={64} className='rounded-full h-14 border-2 border-black' alt='' />
                    <div className='mx-3'>
                      <div className='text-lg lg:text-xl text-black font-bold'>Michale Dole</div>
                      <div className='text-sm text-white'>Product Designer</div>
                      <Image src='/contactStar.png' width={50} height={10} className='my-2' alt='' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=''>
        <ContactForm/>
      </div>
    </div>
  )
}

export default Contact;
