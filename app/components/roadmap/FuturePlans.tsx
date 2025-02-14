"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { frombotttomtotop } from '../animations'
function FuturePlans() {
  return (
    <div className='text-[#172B6B] flex flex-col items-center shadow-xl w-[80vw] mx-auto mt-[100px] rounded-b-[25px] pb-[50px]'>
        <motion.div 
        initial={frombotttomtotop.initial}
                    whileInView={frombotttomtotop.whileInView}
                    transition={frombotttomtotop.transition}
                    viewport={frombotttomtotop.viewport}
        className='flex flex-col items-center mt-[100px]'>
            <p className='font-bold'>THREE STEPS TIMELINES</p>
            <h1 className='font-bold text-[#F8D835] text-3xl'>FUTURE PLANS</h1>
        </motion.div>
        <div className='plansgrid w-full mt-[50px]'>
            <motion.div
            initial={frombotttomtotop.initial}
                        whileInView={frombotttomtotop.whileInView}
                        transition={{...frombotttomtotop.transition}}
                        viewport={frombotttomtotop.viewport}
            className='flex flex-col items-center text-center'>
                <h2 className='font-bold'>Phase 1</h2>
                <p>Utility Token fundraising</p>
                <p>($30M)</p>
                <img src="/phase1.png" alt="pic" />
            </motion.div>
            <motion.div
            initial={frombotttomtotop.initial}
                        whileInView={frombotttomtotop.whileInView}
                        transition={{...frombotttomtotop.transition, delay:0.05}}
                        viewport={frombotttomtotop.viewport}
            className='flex flex-col-reverse items-center text-center my-[50px] md:my-0'>
                <h2 className='font-bold'>Phase 2</h2>
                <p>Utility Token fundraising ($30M)</p>
                <img src="/phase2.png" alt="pic" />
            </motion.div>
            <motion.div
            initial={frombotttomtotop.initial}
                        whileInView={frombotttomtotop.whileInView}
                        transition={{...frombotttomtotop.transition, delay:0.05*2}}
                        viewport={frombotttomtotop.viewport}
            className='flex flex-col items-center text-center'>
                <h2 className='font-bold'>Phase 1</h2>
                <p>Large-scale mining operations, M&A<br /> opportunities </p>
                <img src="/phase3.png" alt="pic" />
            </motion.div>
            </div>
    </div>
  )
}

export default FuturePlans