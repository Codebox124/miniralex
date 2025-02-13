'use client'
import React from 'react'
import { IoMenu } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { motion } from 'framer-motion';
import { frombotttomtotop } from '../animations';
function Hero() {
    return (
        <div className='w-full h-[75vh] homehero flex flex-col items-end text-white'>
            <div className='flex items-center  mt-[35px]  w-full'>
                <div className='bg-[#F8D835] rounded-tr-[40px] rounded-br-[40px] h-[fit-content] flex justify-end  w-[100px] py-[10px] mr-[15px]'>
                    <IoMenu className='mr-[10px] text-[#172B6B] w-[39px] h-[30px]' />
                </div>
                <img src="/logo.png" alt="logo" />
            </div>
            <div className='relative flex flex-col items-center  justify-center z-10 w-[100%] mt-40 text-center'>
                <motion.h1
                    initial={frombotttomtotop.initial}
                    animate={frombotttomtotop.animate}
                    transition={frombotttomtotop.transition}
                    className='text-white text-4xl md:text-6xl font-bold'>
                    BRIDGING MINING AND <span className='text-[#F8D835]'>BLOCKCHAIN TECHNOLOGY</span>
                </motion.h1>
                <motion.p
                    initial={frombotttomtotop.initial}
                    animate={frombotttomtotop.animate}
                    transition={frombotttomtotop.transition}
                    className='text-lg md:text-xl mt-4'>
                    Tokenizing Mineral Reserves for Transparency and Global Access.
                </motion.p>

                {/* Learn More Button */}
                <div className='flex gap-5'>
                    <motion.button
                        initial={frombotttomtotop.initial}
                        animate={frombotttomtotop.animate}
                        transition={frombotttomtotop.transition}
                        className='mt-6 bg-[#F8D835] text-[#172B6B] px-6 py-3 font-bold rounded-lg shadow-md hover:bg-yellow-500 transition duration-300'>
                        LEARN MORE
                    </motion.button>
                    <motion.button
                        initial={frombotttomtotop.initial}
                        animate={frombotttomtotop.animate}
                        transition={frombotttomtotop.transition}
                        className='mt-6 border-[#F8D835] text-[#F8D835] px-6 py-3 font-bold rounded-lg shadow-md border transition duration-300'>
                        INVEST NOW
                    </motion.button>
                </div>
            </div>
        </div>
    )
}

export default Hero