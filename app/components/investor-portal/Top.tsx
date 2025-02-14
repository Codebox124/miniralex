"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { frombotttomtotop } from '../animations'
function Top() {
  return (
    <motion.div 
    initial={frombotttomtotop.initial}
    whileInView={frombotttomtotop.whileInView}
    transition={frombotttomtotop.transition}
    viewport={frombotttomtotop.viewport}
    className='border-[2px] border-[#D2D2D2] w-[90vw] mx-auto flex flex-col d-top:flex-row items-start mt-[40px] rounded-[10px] p-[30px] justify-between'>
        <div className='border-l-[#F8D835] border-l-[3px] pl-[15px] flex flex-col justify-between h-[90px] mt-[20px] d-top:mt-0 w-full'>
        <h2 className='font-bold text-[#172B6B]'>Total Utility Tokens Held</h2>
        <div className='flex items-center justify-between w-full d-top:w-[fit-content]'>
            <h1 className='font-bold text-[#F8D835] text-5xl'>672</h1>
            <img src="/linesdash.png" alt="linesdash" className='ml-[20px] object-cover' />
        </div>
        </div>
        <div className='border-l-[#F8D835] border-l-[3px] pl-[15px] flex flex-col justify-between h-[90px] mt-[20px] d-top:mt-0 w-full'>
        <h2 className='font-bold text-[#172B6B]'>Total RWA Tokens Held</h2>
        <div className='flex items-center justify-between w-full d-top:w-[fit-content]'>
            <h1 className='font-bold text-[#F8D835] text-5xl'>672</h1>
            <img src="/linesdash.png" alt="linesdash" className='ml-[20px] object-cover' />
        </div>
        </div>
        <div className='border-l-[#F8D835] border-l-[3px] pl-[15px] flex flex-col justify-between h-[90px] mt-[20px] d-top:mt-0 w-full'>
        <h2 className='font-bold text-[#172B6B]'>Staking Rewards</h2>
        <div className='flex items-center justify-between w-full d-top:w-[fit-content]'>
            <h1 className='font-bold text-[#F8D835] text-5xl'>672</h1>
            <img src="/linesdash.png" alt="linesdash" className='ml-[20px] object-cover' />
        </div>
        </div>
        <div className='border-l-[#F8D835] border-l-[3px] pl-[15px] flex flex-col justify-between h-[90px] mt-[20px] d-top:mt-0 w-full'>
        <h2 className='font-bold text-[#172B6B]'>Dividend Earnings</h2>
        <div className='flex items-center justify-between w-full d-top:w-[fit-content]'>
            <h1 className='font-bold text-[#F8D835] text-5xl'>672</h1>
            <img src="/linesdash.png" alt="linesdash" className='ml-[20px] object-cover' />
        </div>
        </div>
    </motion.div>
  )
}

export default Top