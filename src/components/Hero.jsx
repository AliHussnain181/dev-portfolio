import React from 'react'
import { FiPenTool } from "react-icons/fi"
import {CiMobile2} from "react-icons/ci"
import {BiAward} from "react-icons/bi"

const Hero = () => {
  return (
    <div id='home'  className='text-white mx-auto w-[92%] py-24'>
      <div className='bg-transparent mb-7'>
        <h1 className=' overflow-hidden text-4xl font-extrabold sm:text-[42px] md:text-[68px] lg:w-[80%] leading-[51px] sm:leading-[70px] font-Mono text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ' >Design Driven Development Your Web Products.</h1>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:space-x-5'>
        <div className='mx-auto text-center my-14 space-y-5'>
          <BiAward className='text-[#22d3ee] mx-auto text-6xl'/>
          <h1 className='text-2xl font-Mono font-[600]'>JavaScript Developer</h1>
          <p className='text-[#aaa] lg:text-lg font-Mono'>Passionate JavaScript developer creating seamless web experiences with code wizardry and innovation.</p>
        </div>

        <div className='mx-auto text-center my-14 space-y-5'>
          <FiPenTool className='text-[#22d3ee] mx-auto text-6xl' />
          <h1 className='text-2xl font-Mono font-[600]'>Web Developer</h1>
          <p className='text-[#aaa] lg:text-lg font-Mono'>From blueprints to browsers, crafting digital realities.</p>
        </div>

        <div className='mx-auto text-center my-14 space-y-5'>
          <CiMobile2 className='text-[#22d3ee] mx-auto text-6xl' />
          <h1 className='text-2xl font-Mono font-[600]'>Responsive Design</h1>
          <p className='text-[#aaa] lg:text-lg font-Mono'>Pixels to perfection: One design, every screen, seamless delight.</p>
        </div>
      </div>
    </div>
  )
}

export default Hero