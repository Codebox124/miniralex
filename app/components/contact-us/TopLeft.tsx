"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { fromlefttoright } from '../animations'
function TopLeft() {
  return (
    <motion.div 
    initial={fromlefttoright.initial}
        whileInView={fromlefttoright.whileInView}
        transition={fromlefttoright.transition}
        viewport={fromlefttoright.viewport}
    className='bg-[#F5F5F5] p-[30px] flex flex-col w-full md:w-[30%] rounded-[15px] shadow-lg'>
        <div className='mb-[35px]'>
            <h1 className='text-2xl font-bold text-[#F8D835]'>ADDRESS:</h1>
            <p className='text-[#353333]'>4035 Heavens, <br />Los Angeles, California</p>
        </div>
        <div className='mb-[35px]'>
            <h1 className='text-2xl font-bold text-[#F8D835]'>PHONE:</h1>
            <p className='text-[#353333]'>+000 313 577 111 <br />+000 313 577 222</p>
        </div>
        <div className='mb-[35px]'>
            <h1 className='text-2xl font-bold text-[#F8D835]'>EMAIL:</h1>
            <p className='text-[#353333]'>info@mineralexgroup.com <br />support@example.com</p>
        </div>
    </motion.div>
  )
}

export default TopLeft