import React from 'react'
import Image from 'next/image';

function Contact() {
  return (
    <div className='bg-gradient-to-r from-[#8EE8D9] to-[#00B293]'>
      <div>
        <div className='text-center'>
            <div className='text-white'>Client Testimonial</div>
            <div className='text-5xl'>Feedback from Client</div>
        </div>
        <div>
            <Image src='/contactvector.png' width={50} height={40} className='ml-48' alt=''/>
            <div className='flex justify-center'>
                <Image src='/contactchat.png' width={500} height={256} className='' alt=''/>
                <Image src='/contactchat.png' width={500} height={256} className='' alt=''/>
            </div>
            <div className='flex'>
                <div>
                    <Image src='/person1.jpeg' width={64} height={64} className='' alt=''/>
                    <div>
                        <div>Michale Dole</div>
                        <div>Product Designer</div>
                        <Image src='/contactStar.png' width={50} height={10} className='' alt=''/>
                    </div>
                </div>
                <div>B</div>
            </div>
        </div>
        <div>C</div>
      </div>
    </div>
  )
}

export default Contact
