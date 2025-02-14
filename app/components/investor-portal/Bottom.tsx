"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { frombotttomtotop } from '../animations'
function Bottom() {
  return (
    <div className='p-[40px] md:p-[70px] dashgrid'>
        <motion.div 
            initial={frombotttomtotop.initial}
                whileInView={frombotttomtotop.whileInView}
                transition={frombotttomtotop.transition}
                viewport={frombotttomtotop.viewport}
        ><img src="/tokenholdings.png" alt="pic" className='object-cover w-full' /></motion.div>
        <motion.div 
            initial={frombotttomtotop.initial}
    whileInView={frombotttomtotop.whileInView}
    transition={{...frombotttomtotop.transition, delay:0.05}}
    viewport={frombotttomtotop.viewport}
        ><img src="/utilitytoken.png" alt="pic" className='object-cover w-full' /></motion.div>
        <motion.div 
            initial={frombotttomtotop.initial}
    whileInView={frombotttomtotop.whileInView}
    transition={{...frombotttomtotop.transition, delay:0.05*2}}
    viewport={frombotttomtotop.viewport}
        ><img src="/tokenprice.png" alt="pic" className='object-cover w-full' /></motion.div>
        <motion.div 
            initial={frombotttomtotop.initial}
    whileInView={frombotttomtotop.whileInView}
    transition={{...frombotttomtotop.transition, delay:0.05*3}}
    viewport={frombotttomtotop.viewport}
        ><img src="/portfoliohealth.png" alt="pic" className='object-cover w-full' /></motion.div>
        <motion.div 
            initial={frombotttomtotop.initial}
    whileInView={frombotttomtotop.whileInView}
    transition={{...frombotttomtotop.transition, delay:0.05*4}}
    viewport={frombotttomtotop.viewport}
        ><img src="/unstakedtokens.png" alt="pic" className='object-cover w-full' /></motion.div>
        <motion.div 
            initial={frombotttomtotop.initial}
    whileInView={frombotttomtotop.whileInView}
    transition={{...frombotttomtotop.transition, delay:0.05*5}}
    viewport={frombotttomtotop.viewport}
        ><img src="/miningreserves.png" alt="pic" className='object-cover w-full' /></motion.div>
    </div>
  )
}

export default Bottom