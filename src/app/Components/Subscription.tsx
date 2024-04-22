import React from 'react';
import Image from 'next/image';

function Subscription() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="relative w-full sm:w-auto">
        {/* Background image */}
        <Image src="/subsvector.png" className="absolute inset-0 w-full h-full object-cover" alt="" layout="fill" />
        <Image src="/subsbg.png" className="w-full h-auto" width={1320} height={448} alt="" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10 px-4 sm:px-0">
          <h2 className="text-3xl text-white font-bold mb-6">Ready to get started with your new project today</h2>
          <form className="flex flex-col sm:flex-row items-center">
            <input
              type="email"
              placeholder="Your email address"
              name="mail"
              required
              className="py-2 px-4 rounded-l-xl sm:rounded-l-none sm:rounded-tl-xl border border-gray-400 focus:outline-none focus:border-gray-600 bg-white mb-2 sm:mb-0 sm:mr-2"
            />
            <button type="submit" className="bg-black text-white px-4 py-2 rounded-r-xl sm:rounded-r-none sm:rounded-tr-xl hover:bg-gray-900">
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Subscription;
