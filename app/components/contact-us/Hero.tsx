'use client'
import React from 'react'
import { IoMenu } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { motion } from 'framer-motion';
import { frombotttomtotop} from '../animations';
function Hero() {
  return (
    <div className='w-full h-[75vh] bloghero flex flex-col items-end text-white'>
        <div className='flex items-center  mt-[35px]  w-full'>
            <div className='bg-[#F8D835] rounded-tr-[40px] rounded-br-[40px] h-[fit-content] flex justify-end  w-[100px] py-[10px] mr-[15px]'>
                <IoMenu className='mr-[10px] text-[#172B6B] w-[39px] h-[30px]' />
            </div>
            <img src="/logo.png" alt="logo" />
        </div>
        <div className='mt-[13%]  w-[95%]'>
            <motion.p
            initial={frombotttomtotop.initial}
            animate={frombotttomtotop.animate}
            transition={frombotttomtotop.transition}
            viewport={frombotttomtotop.viewport}
            className='flex flex-col md:flex-row md:items-center text-md md:text-xl'>HOME <MdKeyboardArrowRight className='text-[#F8D835]' />GET HELP FROM US</motion.p>
            <motion.h1 
              initial={frombotttomtotop.initial}
              animate={frombotttomtotop.animate}
              transition={frombotttomtotop.transition}
              viewport={frombotttomtotop.viewport}
            className='text-[#F8D835] text-3xl md:text-5xl font-bold mt-[20px]'>CONTACT US</motion.h1>
        </div>
    </div>
  )
}

export default Hero