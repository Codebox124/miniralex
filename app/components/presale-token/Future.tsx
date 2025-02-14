"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { fromlefttoright, fromrighttoleft, frombotttomtotop } from '../animations'
function Future() {
  return (
    <div className='text-[#172B6B] flex flex-col p-[40px] shadow-xl w-[85vw] mx-auto mt-[100px] rounded-b-[25px]'>
        <div className='flex flex-col md:flex-row justify-between items-start'>
          <motion.div
          initial={fromlefttoright.initial}
                  whileInView={fromlefttoright.whileInView}
                  transition={fromlefttoright.transition}
                  viewport={fromlefttoright.viewport}
          >
          <h2 className='font-bold text-[#172B6B]'>| FUTURE OF MINING</h2>
          <h1 className='font-bold text-[#F8D835] text-4xl my-[15px]'>PRE-SALE BENEFITS</h1>
          </motion.div>
          <motion.p 
          initial={fromrighttoleft.initial}
                  whileInView={fromrighttoleft.whileInView}
                  transition={fromrighttoleft.transition}
                  viewport={fromrighttoleft.viewport}
          className='text-xl'>The Mineralex pre-sale offers early investors a unique <br /> opportunity to acquire tokens at the best possible rates</motion.p>
        </div>
        <motion.div
        initial={frombotttomtotop.initial}
                whileInView={frombotttomtotop.whileInView}
                transition={frombotttomtotop.transition}
                viewport={frombotttomtotop.viewport}
        className='flex flex-col md:flex-row mt-[40px] justify-between'>
          <button className='bg-[#172B6B] text-[#F8D835] p-[15px] rounded-[10px] flex items-center'><img src="/star.png" alt="star" className='mr-[7px]' />Exclusive Discounts</button>
          <button className='bg-[#172B6B] text-[#F8D835] p-[15px] rounded-[10px] flex items-center mt-[10px] md:mt-0'><img src="/hourglass.png" alt="star" className='mr-[7px]' />Exclusive Discounts</button>
          <button className='bg-[#172B6B] text-[#F8D835] p-[15px] rounded-[10px] flex items-center mt-[10px] md:mt-0'><img src="/gift.png" alt="star" className='mr-[7px]' />Bonus Rewards</button>
        </motion.div>
    </div>
  )
}

export default Future