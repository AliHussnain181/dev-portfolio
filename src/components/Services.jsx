import React from 'react'
import { SiNextdotjs, SiExpress } from "react-icons/si"
import { DiReact, DiMongodb, DiNodejs } from "react-icons/di"
import { IoLogoJavascript } from "react-icons/io"
import { motion } from "framer-motion";


const Service = () => {

  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div id='services' className='w-[90%] sm:w-[80%] lg:w-[94%] mx-auto mb-14'>
      <motion.div {...options} transition={{
        delay: 0.2,
      }} className='text-center w-[90%] md:w-[80%] lg:w-[60%] xl:w-[50%] mx-auto'>
        <h2 className=' text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-transparent my-4'>What we can do for you</h2>
        <h1 className='text-3xl md:text-5xl font-bold font-Space overflow-hidden text-white '>Services provide for you.</h1>
        <p className='text-gray-50 text-lg font-Roboto opacity-60 my-2' >There are many variations of passages of Lorem Ipsum available,
          but the majority have suffered alteration.
        </p>
      </motion.div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 mx-auto my-5 lg:gap-x-4 2xl:grid-cols-4 '>

        <motion.div {...options} transition={{
          delay: 0.3,
        }} className='bg-[#0c0c0c] mx-auto rounded-xl h-64  px-5 space-y-4 sm:w-60 md:w-80 sm:h-[18.7rem] md:h-[17rem] xl:w-96 xl:h-[15.7rem]'>
          <IoLogoJavascript className='text-4xl bg-transparent text-[#22d3ee] my-9' />
          <h1 className='text-white bg-transparent text-xl font-semibold font-Roboto'>JavaScript</h1>
          <p className='text-white text-[17px] font-Space bg-transparent'>Crafting dynamic web experiences with JavaScript for a vibrant online presence.</p>
        </motion.div>

        <motion.div {...options} transition={{
          delay: 0.4,
        }} className='bg-[#0c0c0c] mx-auto rounded-xl h-64 px-5 space-y-4 sm:w-60 md:w-80 sm:h-[18.7rem] md:h-[17rem] xl:w-96 xl:h-[15.7rem] '>
          <SiNextdotjs className='text-4xl bg-transparent text-[#22d3ee] my-9' />
          <h1 className='text-white bg-transparent text-xl font-semibold font-Roboto'>Next Js</h1>
          <p className='text-white text-[17px] font-Space bg-transparent'>Next.js wizardry: Fast, scalable React apps with seamless server-side rendering.</p>
        </motion.div>

        <motion.div  {...options} transition={{
          delay: 0.5,
        }} className='bg-[#0c0c0c] mx-auto rounded-xl h-64 px-5 space-y-4 sm:w-60 md:w-80 sm:h-[18.7rem] md:h-[17rem] xl:w-96 xl:h-[15.7rem] '>
          <DiReact className='text-4xl bg-transparent text-[#22d3ee] my-9' />
          <h1 className='text-white bg-transparent text-xl font-semibold font-Roboto'>React</h1>
          <p className='text-white text-[17px] font-Space bg-transparent'>Building modern UIs with React.js for interactive and engaging web applications.</p>
        </motion.div>

        <motion.div {...options} transition={{
          delay: 0.6,
        }} className='bg-[#0c0c0c] mx-auto rounded-xl h-64 px-5 space-y-4 sm:w-60 md:w-80 sm:h-[18.7rem] md:h-[17rem] xl:w-96 xl:h-[15.7rem]'>
          <DiMongodb className='text-4xl bg-transparent text-[#22d3ee] my-9' />
          <h1 className='text-white bg-transparent text-xl font-semibold font-Roboto'>Mongo DB</h1>
          <p className='text-white text-[17px] font-Space bg-transparent'>NoSQL magic: MongoDB powers scalable, flexible databases for dynamic, data-driven applications.</p>
        </motion.div>

        <motion.div {...options} transition={{
          delay: 0.7,
        }} className='bg-[#0c0c0c] mx-auto rounded-xl h-64 px-5 space-y-4 sm:w-60 md:w-80 sm:h-[18.7rem] md:h-[17rem] xl:w-96 xl:h-[15.7rem]'>
          <DiNodejs className='text-7xl bg-transparent text-[#22d3ee] my-4' />
          <h1 className='text-white bg-transparent text-xl font-semibold font-Roboto'>Node Js</h1>
          <p className='text-white text-[17px] font-Space bg-transparent'>Backend powerhouse: Scalable, real-time magic for your apps.</p>
        </motion.div>

        <motion.div {...options} transition={{
          delay: 0.8,
        }} className='bg-[#0c0c0c] mx-auto rounded-xl h-64 px-5 space-y-4 sm:w-60 md:w-80 sm:h-[18.7rem] md:h-[17rem] xl:w-96 xl:h-[15.7rem]'>
          <SiExpress className='text-4xl bg-transparent text-[#22d3ee] my-9' />
          <h1 className='text-white bg-transparent text-xl font-semibold font-Roboto'>Express Js</h1>
          <p className='text-white text-[17px] font-Space bg-transparent'>Web whisperer: Craftful Node apps with Express's minimalist charm.</p>
        </motion.div>
      </div>
    </div>
  )
}

export default Service