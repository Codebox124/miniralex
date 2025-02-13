"use client"
import React from 'react'
import { LuMoveRight } from "react-icons/lu";
import { motion } from 'framer-motion';
import { frombotttomtotop } from '../animations';
function Quick() {
  return (
    <div className='bg-[#F9F9F9] text-black p-[35px] md:p-[70px]'>
        <motion.h2
         initial={frombotttomtotop.initial}
                            whileInView={frombotttomtotop.whileInView}
                            transition={frombotttomtotop.transition}
                            viewport={frombotttomtotop.viewport}
        className='text-[#172B6B] font-bold'>| QUICK APPROACH</motion.h2>
        <motion.h1 
         initial={frombotttomtotop.initial}
                    whileInView={frombotttomtotop.whileInView}
                    transition={frombotttomtotop.transition}
                    viewport={frombotttomtotop.viewport}
        className='text-[#F8D835] font-bold text-4xl'>QUICK LINKS</motion.h1>
        <div className='quickgrid w-full mt-[50px]'>
            <motion.div
             initial={frombotttomtotop.initial}
                    whileInView={frombotttomtotop.whileInView}
                    transition={frombotttomtotop.transition}
                    viewport={frombotttomtotop.viewport}
            className='border-b-[1px] border-b-black pb-[15px]'>
                <p className='flex items-center justify-between'>Token Details Preview <LuMoveRight /></p>
            </motion.div>
            <motion.div
             initial={frombotttomtotop.initial}
                    whileInView={frombotttomtotop.whileInView}
                    transition={frombotttomtotop.transition}
                    viewport={frombotttomtotop.viewport}
            className='border-b-[1px] border-b-black pb-[15px]'>
                <p className='flex items-center justify-between'>Exploration Highlights <LuMoveRight /></p>
            </motion.div>
            <motion.div
             initial={frombotttomtotop.initial}
                    whileInView={frombotttomtotop.whileInView}
                    transition={frombotttomtotop.transition}
                    viewport={frombotttomtotop.viewport}
            className='border-b-[1px] border-b-black pb-[15px]'>
                <p className='flex items-center justify-between'>Community Impact <LuMoveRight /></p>
            </motion.div>
            <motion.div
             initial={frombotttomtotop.initial}
                    whileInView={frombotttomtotop.whileInView}
                    transition={frombotttomtotop.transition}
                    viewport={frombotttomtotop.viewport}
            className='border-b-[1px] border-b-black pb-[15px]'>
                <p className='flex items-center justify-between'>Exploration & Resources <LuMoveRight /></p>
            </motion.div>
            <motion.div
             initial={frombotttomtotop.initial}
                    whileInView={frombotttomtotop.whileInView}
                    transition={frombotttomtotop.transition}
                    viewport={frombotttomtotop.viewport}
            className='border-b-[1px] border-b-black pb-[15px]'>
                <p className='flex items-center justify-between'>Tokenization Advantage <LuMoveRight /></p>
            </motion.div>
            <motion.div
             initial={frombotttomtotop.initial}
                    whileInView={frombotttomtotop.whileInView}
                    transition={frombotttomtotop.transition}
                    viewport={frombotttomtotop.viewport}
            className='border-b-[1px] border-b-black pb-[15px]'>
                <p className='flex items-center justify-between'>Token Details Preview <LuMoveRight /></p>
            </motion.div>
        </div>
    </div>
  )
}

export default Quick