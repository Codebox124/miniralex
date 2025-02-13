"use client"
import React from 'react'
import DATA from "./newsgrid.json"
import { motion } from 'framer-motion'
import { frombotttomtotop } from '../animations'
function NewsGrid() {
  return (
    <div className='newsgrid mx-auto w-[90%] mt-[100px] pb-[50px] h-[fit-content]'>
        {DATA.map((item, index)=>{
            return <motion.div
             initial={frombotttomtotop.initial}
                    whileInView={frombotttomtotop.whileInView}
                    transition={{...frombotttomtotop.transition, delay:0.05*index}}
                    viewport={frombotttomtotop.viewport}
            key={index}>
                <img src={item.image} alt={item.title} className='w-full' />
                <h2 className='mt-[25px] text-[#0DA8FF] font-bold'>{item.title}</h2>
                <h1 className='my-[10px] font-bold'>{item.secondTitle}</h1>
                <p className='text-[#282828]'>{item.info}</p>
            </motion.div>
        })}
    </div>
  )
}

export default NewsGrid