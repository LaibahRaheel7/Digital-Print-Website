'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitted(true);

    // Simulate form submission (replace with your form submission logic)
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setIsSubmitted(true);
    } else {
      console.error('Form submission failed:', response.statusText);
    }
  };

  return (
    <div className="mx-auto max-w-5xl flex flex-col md:flex-row bg-white rounded-lg shadow-xl">
      <div className="bg-blue-500 text-white p-6 rounded-lg m-5 md:w-1/2">
        <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
        <p className="mb-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in </p>
        <div className="space-y-4">
          <div className='flex'>
            <FaPhoneAlt size={20} className='mr-2'/>
            <div>+1234567890</div>
          </div>
          <div className='flex'>
            <MdOutlineEmail size={20} className='mr-2'/>
            <div>example@example.com</div>
          </div>
          <div className='flex'>
            <FaLocationDot size={20} className='mr-2'/>
            <div>123 Main Street, City, Country</div>
          </div>
        </div>
        <div className="hidden md:block absolute bottom-0 right-0 mb-24 mr-24">
          {/* <Image src='/contactform.png' width={222} height={222} className='absolute mx-64 my-24'  alt=''/> */}
        </div>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 m-5 md:w-1/2">
        <div className='flex flex-col md:flex-row mt-12 pb-6'>
          <div className="flex flex-col flex-grow mr-4">
            <label htmlFor="name" className="mb-2">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="px-3 py-2 border-b-2 border-gray-300 focus:outline-none"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col flex-grow">
            <label htmlFor="email" className="mb-2">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="px-3 py-2 border-b-2 border-gray-300 focus:outline-none"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="flex flex-col py-6">
          <label htmlFor="subject" className="">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="px-3 py-2 border-b-2 border-gray-300 focus:outline-none"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col py-6">
          <label htmlFor="message" className="">Message</label>
          <textarea
            id="message"
            name="message"
            className="px-3 py-2 border-b-2 border-gray-300 focus:outline-none h-14 resize-none"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className='pb-6'>
            {isSubmitted ? (
            <p className="text-center text-green-500">Thank you for contacting us!</p>
            ) : (
            <button
                type="submit"
                className="bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded-md focus:outline-none"
            >
                Send Message
            </button>
            )}
        </div>
      </form>
      <div className="md:hidden text-center">
        <Image src='/contactform.png' width={222} height={222} alt=''/>
      </div>
    </div>
  );
}

export default ContactForm;
