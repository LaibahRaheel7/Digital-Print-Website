import React from 'react';
import Image from 'next/image';

function Subscription() {
  return (
    <div className="flex justify-center items-center my-8 sm:my-24">
      <div className="relative w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2">
        {/* Background image */}
        <div className="relative">
          <Image src="/subsvector.png" className="absolute inset-0 lg:w-full h-full object-cover" alt="" layout="fill" />
          <Image src="/subsbg.png" className="w-full h-auto" width={1320} height={448} alt="" />
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10 px-4 sm:px-0">
          <h2 className="sm:text-lg md:text-xl text-white font-bold mb-4 sm:mb-6">Ready to get started with your new project today</h2>
          <form className="flex flex-col sm:flex-row items-center">
            <input
              type="email"
              placeholder="Your email address"
              name="mail"
              required
              className="py-1 px-2 text-base rounded-l-xl sm:rounded-l-none sm:rounded-tl-xl border border-gray-400 focus:outline-none focus:border-gray-600 bg-white mb-2 sm:mb-0 sm:mr-2"
            />
            <button type="submit" className="bg-black text-sm text-white px-2 py-1 rounded-r-xl sm:rounded-r-none sm:rounded-tr-xl hover:bg-gray-900">
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Subscription;