"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { frombotttomtotop } from '../animations'
function News() {
  return (
    <div className='p-[50px] md:p-[70px]'>
        <motion.h2
             initial={frombotttomtotop.initial}
                    whileInView={frombotttomtotop.whileInView}
                    transition={frombotttomtotop.transition}
                    viewport={frombotttomtotop.viewport}
        className='font-bold text-[#172B6B] text-xl'>| High-Value Mineral Reserves</motion.h2>
        <motion.h1
             initial={frombotttomtotop.initial}
        whileInView={frombotttomtotop.whileInView}
        transition={frombotttomtotop.transition}
        viewport={frombotttomtotop.viewport}
        className='text-3xl font-bold mt-[10px] mb-[30px]'>Tens of billions of dollars in gold found in africa</motion.h1>
        <motion.img
             initial={frombotttomtotop.initial}
        whileInView={frombotttomtotop.whileInView}
        transition={frombotttomtotop.transition}
        viewport={frombotttomtotop.viewport}
        src="/dude.png" alt="dude" className='object-cover' />
        <motion.div
             initial={frombotttomtotop.initial}
        whileInView={frombotttomtotop.whileInView}
        transition={frombotttomtotop.transition}
        viewport={frombotttomtotop.viewport}
        className='mt-[50px] flex flex-col md:flex-row justify-between'>
            <div className='w-full md:w-[65%]'>
                <h1 className='text-3xl font-bold'>found in africa</h1>
                <p className='my-[20px] text-[#282828]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eius suscipit adipisci fuga temporibus, unde excepturi cupiditate a nemo id et quae labore repellat! Consectetur, soluta distinctio a iusto est quod maxime esse eum beatae nobis doloribus labore iure explicabo sed, doloremque animi in vero reiciendis incidunt, non maiores sequi. Id eligendi, doloribus eius architecto quam repellat veritatis, dolore animi eaque rerum enim! Repellat fugiat ut eius voluptates consectetur. Illum, sapiente quia</p>
                <p className='my-[30px] text-[#282828]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea vitae nisi dolorem suscipit temporibus consequatur non, similique, autem ullam qui ab dolorum reiciendis officia? Veniam necessitatibus voluptatem similique nulla voluptatum fugiat atque ab, voluptas officiis iure nostrum repellendus dolorem sint sed dolorum corrupti ipsum praesentium pariatur, corporis harum, ex reprehenderit? Sed magni accusamus vero odit fugit amet totam odio adipisci quos vitae, inventore repudiandae maiores voluptates? Cum aliquam ratione aspernatur. Non, aliquid?</p>
                <p className='my-[20px] text-[#282828]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, aut similique, ea nesciunt incidunt, provident accusantium vitae quos eligendi quibusdam alias quod commodi quas eius necessitatibus dolores iure quaerat adipisci. Asperiores repudiandae eum quos facere eveniet doloremque in, quas reprehenderit accusantium debitis neque numquam! Fugit labore iusto dolorum minus cum beatae modi pariatur! Aperiam iusto perferendis assumenda voluptatem sit amet id maxime quaerat accusantium obcaecati. Provident delectus in libero tenetur adipisci consequuntur?</p>
            </div>
            <img src="/gold2.png" alt="gold2" className='w-full md:w-[30%] object-cover' />
        </motion.div>
        <motion.img
             initial={frombotttomtotop.initial}
        whileInView={frombotttomtotop.whileInView}
        transition={frombotttomtotop.transition}
        viewport={frombotttomtotop.viewport}
        src="/lowerground.png" alt="lowerground" className='mt-[100px] object-cover' />
        <motion.h1
             initial={frombotttomtotop.initial}
        whileInView={frombotttomtotop.whileInView}
        transition={frombotttomtotop.transition}
        viewport={frombotttomtotop.viewport}
        className='text-3xl font-bold mt-[20px] mb-[10px]'>found in africa</motion.h1>
        <motion.p
             initial={frombotttomtotop.initial}
        whileInView={frombotttomtotop.whileInView}
        transition={frombotttomtotop.transition}
        viewport={frombotttomtotop.viewport}
        className='text-[#282828]'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con nisi ut aliquip ex ea commodo con</motion.p>
        <motion.h1
             initial={frombotttomtotop.initial}
        whileInView={frombotttomtotop.whileInView}
        transition={frombotttomtotop.transition}
        viewport={frombotttomtotop.viewport}
        className='text-3xl font-bold mt-[20px] mb-[10px]'>found in africa</motion.h1>
        <motion.p
             initial={frombotttomtotop.initial}
        whileInView={frombotttomtotop.whileInView}
        transition={frombotttomtotop.transition}
        viewport={frombotttomtotop.viewport}
        className='text-[#282828]'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con nisi ut aliquip ex ea commodo con</motion.p>
    </div>
  )
}

export default News