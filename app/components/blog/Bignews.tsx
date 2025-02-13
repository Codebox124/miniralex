"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { frombotttomtotop, fromlefttoright} from '../animations'
import Link from 'next/link'
function Bignews() {
  return (
    <Link href="/blog-news">
    <div className='flex items-start flex-col md:flex-row justify-evenly p-[20px] h-[fit-content]  mb-[150px]'>
        <motion.img
        initial={fromlefttoright.initial}
        whileInView={fromlefttoright.whileInView}
        transition={fromlefttoright.transition}
        viewport={fromlefttoright.viewport}
        src="/bbc.png" alt="bbc" className='mr-[20px] w-full md:w-[50%] object-cover' />
        <motion.div
        initial={frombotttomtotop.initial}
        whileInView={frombotttomtotop.whileInView}
        transition={frombotttomtotop.transition}
        viewport={frombotttomtotop.viewport}
        className='flex flex-col w-full md:w-[47%] mt-[50px] md:mt-0'>
           <div>
           <h2 className='font-bold text-[#172B6B]'>| High-Value Mineral Reserves</h2>
            <h1 className='text-4xl font-bold py-[15px]'>Tens of billions of dollars in gold ........</h1>
            <p className='text-[#282828]'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con nisi ut aliquip ex ea commodo con</p>
           </div>
            <div className='flex items-center  justify-between mt-[24%] '>
                <div className='flex items-center'>
                    <img src="/roshan.png" alt="pic" />
                    <div className='ml-[15px]'>
                        <h2 className='text-[#0DA8FF] font-bold'>By Roshan Russo</h2>
                        <p>17th September 2022</p>
                    </div>
                </div>
                <p className='text-[#0DA8FF]'>4 Min Read</p>
            </div>
        </motion.div>
    </div>
    </Link>
  )
}

export default Bignews