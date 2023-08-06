import React from 'react'

import heroimage from '../assets/heroimage.gif'
function Hero() {
  return (
    <div className='bg-slate-600 text-white lg:min-h-screen'>
        <div className=" relative max-lg:flex justify-centeritems-center mx-auto max-w-4xl py-10">
        <div className="flex  max-lg:flex-col-reverse mx-auto text-light lg:min-h-screen">
           
          <div className=" lg:text-left text-center px-5 my-auto">

            {/* introduction */}

            <p className="font-bold text-border text-3xl mb-3 tracking-wide">
              ProjectPulse
            </p>
            <p className="text-md mb-10">
            Empowering Teams with Seamless Project Management
            </p>
            <a
              href=""
              className="bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
            >
              Get Started
            </a>
            </div>
          {/* Profile Picture in hero */}

          <div className=" flex max-w-lg justify-end items-cover py-20">
            <img
              className=" border-0 object-contain"
              src={heroimage}
              alt="profileimage"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
