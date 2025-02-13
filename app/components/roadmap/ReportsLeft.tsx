"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { fromlefttoright } from '../animations'
function ReportsLeft() {
  return (
    <motion.div 
    initial={fromlefttoright.initial}
                whileInView={fromlefttoright.animate}
                transition={fromlefttoright.transition}
                viewport={fromlefttoright.viewport}
    className='bg-[#172B6B] w-full md:w-[30%] flex flex-col p-[40px]'>
        <div className='mb-[20px]'>
            <h2 className='text-[#F8D835] font-bold'>| NEXT EVENTS SOON</h2>
            <h1 className='text-white font-bold text-3xl'>EVENTS DATES</h1>
        </div>
        <div className='my-[10px] flex items-center border-b-[1px] border-b-[#9FB1EC] pb-[15px]'>
            <span className='text-[#F8D835] font-bold mr-[15px]'>25 FEB<br /> 2025</span>
            <p className='text-[#9FB1EC]'>MINERALEX HALF YEAR ENDED<br />31 DECEMEBER 2024</p>
        </div>
        <div className='my-[10px] flex items-center border-b-[1px] border-b-[#9FB1EC] pb-[15px]'>
            <span className='text-[#F8D835] font-bold mr-[15px]'>25 FEB<br /> 2025</span>
            <p className='text-[#9FB1EC]'>MINERALEX HALF YEAR ENDED<br />31 DECEMEBER 2024</p>
        </div>
        <div className='my-[10px] flex items-center border-b-[1px] border-b-[#9FB1EC] pb-[15px]'>
            <span className='text-[#F8D835] font-bold mr-[15px]'>25 FEB<br /> 2025</span>
            <p className='text-[#9FB1EC]'>MINERALEX HALF YEAR ENDED<br />31 DECEMEBER 2024</p>
        </div>
    </motion.div>
  )
}

export default ReportsLeft