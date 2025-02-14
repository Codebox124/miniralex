'use client'
import React from 'react'
import { IoMenu } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { motion } from 'framer-motion';
import { frombotttomtotop} from '../animations';
function Hero() {
  return (
    <div className='w-full h-[150px] flex flex-col items-end text-white bg-[#F5F5F5]'>
        <div className='flex items-center  mt-[25px]  w-full'>
            <div className='bg-[#F8D835] rounded-tr-[40px] rounded-br-[40px] h-[fit-content] flex justify-end  w-[100px] py-[10px] mr-[15px]'>
                <IoMenu className='mr-[10px] text-[#172B6B] w-[39px] h-[30px]' />
            </div>
            <img src="/logo.png" alt="logo" />
        </div>
    </div>
  )
}

export default Hero