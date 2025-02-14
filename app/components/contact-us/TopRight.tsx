"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { frombotttomtotop } from '../animations'

function TopRight() {
  return (
    <motion.div 
    initial={frombotttomtotop.initial}
        whileInView={frombotttomtotop.whileInView}
        transition={frombotttomtotop.transition}
        viewport={frombotttomtotop.viewport}
    className='w-full md:w-[65%] flex flex-col mt-[50px] md:mt-0'>
        <form onSubmit={(e)=>{e.preventDefault()}}>
            <div className='w-full flex justify-between mb-[20px]'>
                <input className='bg-[#F5F5F5] w-[49%] p-[15px] rounded-[10px] outline-none border-none' type="text" placeholder='Your Name' />
                <input className='bg-[#F5F5F5] w-[49%] p-[15px] rounded-[10px] outline-none border-none' type="email" placeholder='Your Email' />
            </div>
            <div className='w-full flex justify-between my-[20px]'>
                <input className='bg-[#F5F5F5] w-[49%] p-[15px] rounded-[10px] outline-none border-none' type="text" placeholder='Your Phone' />
                <input className='bg-[#F5F5F5] w-[49%] p-[15px] rounded-[10px] outline-none border-none' type="email" placeholder='Your Subject' />
            </div>
            <textarea className='bg-[#F5F5F5] p-[15px] w-full h-[178px] rounded-[10px] mb-[20px] outline-none border-none' name="message" id="message" placeholder='Your Message'></textarea>
            <button className='bg-[#172B6B] text-white p-[15px] rounded-[5px] w-[150px]'>Send Message</button>
        </form>
    </motion.div>
  )
}

export default TopRight