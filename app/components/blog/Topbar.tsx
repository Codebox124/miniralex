"use client"
import React from 'react'
import { CiSearch } from "react-icons/ci";
import { motion } from 'framer-motion';
import { fromrighttoleft } from '../animations';
function Topbar() {
  return (
    <div className='h-[150px] flex items-center justify-evenly p-[20px] overflow-x-auto'>
        <motion.button
            initial={fromrighttoleft.initial}
            whileInView={fromrighttoleft.whileInView}
            transition={{...fromrighttoleft.transition}}
            viewport={fromrighttoleft.viewport}
        className='bg-[#253772] min-w-[200px] py-[20px] rounded-[15px] text-white'>Daily Reports</motion.button>
        <motion.button
            initial={fromrighttoleft.initial}
            whileInView={fromrighttoleft.whileInView}
            transition={{...fromrighttoleft.transition, delay:0.05}}
            viewport={fromrighttoleft.viewport}
        className='bg-[#F9F9F9] min-w-[200px] py-[20px] rounded-[15px] text-[#908484]'>Weekly Reports</motion.button>
        <motion.button
            initial={fromrighttoleft.initial}
            whileInView={fromrighttoleft.whileInView}
            transition={{...fromrighttoleft.transition, delay:0.05*2}}
            viewport={fromrighttoleft.viewport}
        className='bg-[#F9F9F9] min-w-[200px] py-[20px] rounded-[15px] text-[#908484]'>Monthly Reports</motion.button>
        <motion.div
            initial={fromrighttoleft.initial}
            whileInView={fromrighttoleft.whileInView}
            transition={{...fromrighttoleft.transition, delay:0.05*3}}
            viewport={fromrighttoleft.viewport}
        className='flex items-center bg-[#F9F9F9] min-w-[270px] h-[50px] rounded-[15px]'>
            <input type="text" className='bg-transparent border-none outline-none h-full w-[80%] px-[10px]' placeholder='Search any news' />
            <CiSearch className='bg-[#F8D835] text-white w-[20%] h-full p-[5px] rounded-[15px]' />
        </motion.div>
    </div>
  )
}

export default Topbar