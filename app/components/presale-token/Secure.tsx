"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { fromlefttoright, fromrighttoleft } from '../animations'
function Secure() {
  return (
    <div className='flex flex-col md:flex-row items-start p-[50px] md:p-[70px] justify-between'>
        <motion.div
        initial={fromlefttoright.initial}
        whileInView={fromlefttoright.whileInView}
        transition={fromlefttoright.transition}
        viewport={fromlefttoright.viewport}
        className='w-full md:w-[47%]'>
            <h2 className='font-bold text-[#172B6B]'>| SECURE YOUR SIZE</h2>
            <h1 className='font-bold text-[#F8D835] text-3xl my-[15px]'>WHY INVEST IN THE MINERALEX PRE-SALE?</h1>
            <p className=' text-xl'>The Mineralex pre-sale offers early investors a unique <br /> opportunity to acquire tokens at the best possible rates <br /> before the official public launch.</p>
            <p className='my-[20px] text-xl'>By participating in this phase, you gain priority access to a <br /> revolutionary tokenized mining ecosystem, benefiting <br /> from lower entry costs and strategic positioning in a high-<br />growth industry.</p>
            <button className='bg-[#172B6B] text-white p-[15px] rounded-[5px]'>Explore Mineralex Game</button>
        </motion.div>
        <motion.img
        initial={fromrighttoleft.initial}
        whileInView={fromrighttoleft.whileInView}
        transition={fromrighttoleft.transition}
        viewport={fromrighttoleft.viewport}
        src="/stake.png" alt="stake" className='w-full md:w-[45%] object-cover mt-[30px] md:mt-0' />
    </div>
  )
}

export default Secure