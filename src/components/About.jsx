import React from 'react'
import img from "../assets/about.png"
import { IoPaperPlaneOutline } from "react-icons/io5"

const About = () => {
    return (
        <div id='about' className='bg-[#0c0c0c] w-full'>
            <div className='w-[90%] bg-[#0c0c0c] sm:w-[75%] lg:w-[90%] lg:h-[90vh] mx-auto h-full  mb-7 lg:flex  my-24 mb-20'>
                <div className='bg-[#0c0c0c]' >
                    <img className='w-full lg:h-[90vh] bg-[#0c0c0c] rounded-lg' src={img} alt='about' />
                </div>
                <div className='lg:px-11 lg:w-[60%] overflow-hidden bg-[#0c0c0c]'>
                    <div className='w-16 h-16 bg-[#22d3ee] rounded-full my-10 overflow-hidden'>
                        <IoPaperPlaneOutline className='text-white bg-transparent m-auto mt-4 text-3xl' />
                    </div>
                    <h1 className='text-white text-3xl overflow-hidden font-bold font-Mono my-7 tracking-wide lg:text-5xl bg-[#0c0c0c]'>Building your digital dreams, together.</h1>
                    <p className='text-[#aaa] font-Mono my-7 bg-[#0c0c0c]' >As a passionate web developer, I blend creativity with technical expertise to craft immersive online experiences. Proficient in full-stack development</p>
                    <p className='text-[#aaa] font-Mono my-7 bg-[#0c0c0c]'> I specialize in leveraging cutting-edge technologies like React.js, Node.js, and MongoDB to build dynamic and responsive applications.</p>
                </div>
            </div>
        </div>
    )
}

export default About