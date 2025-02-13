"use client"
import React from 'react'
import { LuMoveLeft, LuMoveRight } from "react-icons/lu";
function BottomNav() {
  return (
    <div className='mx-auto w-[70%]  flex items-center  overflow-x-auto'>
        <div className='border-[1px] border-[#253772] h-[45px] min-w-[65px] flex items-center justify-center m-[5px] rounded-[5px] mx-auto'>
           <LuMoveLeft /> 
        </div>
        <div className='text-[#908484] cursor-pointer border-[1px] border-[#253772] h-[45px] min-w-[65px] flex items-center justify-center m-[5px] rounded-[5px] mx-auto'>
            01
        </div>
        <div className='text-[#908484] cursor-pointer border-[1px] border-[#253772] h-[45px] min-w-[65px] flex items-center justify-center m-[5px] rounded-[5px] mx-auto'>
            02
        </div>
        <div className='text-[#908484] cursor-pointer border-[1px] border-[#253772] h-[45px] min-w-[65px] flex items-center justify-center m-[5px] rounded-[5px] mx-auto'>
            03
        </div>
        <div className='text-[#253772] bg-[#F8D835] font-bold cursor-pointer border-[1px] border-[#253772] h-[45px] min-w-[65px] flex items-center justify-center m-[5px] rounded-[5px] mx-auto'>
            04
        </div>
        <div className='text-[#908484] cursor-pointer border-[1px] border-[#253772] h-[45px] min-w-[65px] flex items-center justify-center m-[5px] rounded-[5px] mx-auto'>
            05
        </div>
        <div className='border-[1px] border-[#253772] h-[45px] min-w-[65px] flex items-center justify-center m-[5px] rounded-[5px] mx-auto'>
            ...
        </div>
        <div className='text-[#908484] cursor-pointer border-[1px] border-[#253772] h-[45px] min-w-[65px] flex items-center justify-center m-[5px] rounded-[5px] mx-auto'>
            12
        </div>
        <div className='text-[#908484] cursor-pointer border-[1px] border-[#253772] h-[45px] min-w-[65px] flex items-center justify-center m-[5px] rounded-[5px] mx-auto'>
        <LuMoveRight />
        </div>
       
    </div>
  )
}

export default BottomNav