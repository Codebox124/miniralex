"use client"
import React from 'react'
import { RxArrowTopRight } from "react-icons/rx";
function FooterBottom() {
  return (
    <div className='w-full p-[35px] md:p-[70px] pb-[20px]'>
        <div className='flex flex-col md:flex-row mb-[30px] items-start'>
            <div className=' w-full md:w-[30%] mb-[25px]'>
                <img src="/logo.png" alt="logo" className='mb-[30px]' />
                <p className='mt-[70px] mb-[30px]'>Subscribe News Letter</p>
                <div className='flex items-center border-b-[1px] border-b-black md:w-[fit-content] h-[50px]'>
                <input type="email" placeholder='Enter E-Mail Address' className='outline-none border-none' />
                <RxArrowTopRight />
                </div>
            </div>
            <div className='footergrid w-[70%]'>
                <div>
                    <h1 className='font-bold text-[#0A142F]'>QUICK LINKS</h1>
                    <ul>
                        <li className='my-[25px] text-[#817C7C]'>Home</li>
                        <li className='my-[25px] text-[#817C7C]'>About</li>
                        <li className='my-[25px] text-[#817C7C]'>Tokenomics</li>
                        <li className='my-[25px] text-[#817C7C]'>Highlights</li>
                    </ul>
                </div>
                <div>
                    <h1 className='font-bold text-[#0A142F]'>NEWZ</h1>
                    <ul>
                        <li className='my-[25px] text-[#817C7C]'>Blog</li>
                        <li className='my-[25px] text-[#817C7C]'>FAQ</li>
                        <li className='my-[25px] text-[#817C7C]'>Presse Kit</li>
                    </ul>
                </div>
                <div>
                    <h1 className='font-bold text-[#0A142F]'>INVESTMENT OPPORTUNITIES</h1>
                    <ul>
                        <li className='my-[25px] text-[#817C7C]'>Primary Issuance Platform</li>
                        <li className='my-[25px] text-[#817C7C]'>Sec Issuance Platform</li>
                        <li className='my-[25px] text-[#817C7C]'>Get to Know</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='flex flex-col md:flex-row justify-end border-b-[#253772] border-b-[1px] pb-[15px]'>
            <ul className='flex flex-col md:flex-row md:items-center'>
                <li className='mr-[15px] text-[#817C7C]'>Facebook</li>
                <li className='mr-[15px] text-[#817C7C]'>Instagram</li>
                <li className='mr-[15px] text-[#817C7C]'>Linkedin</li>
                <li className='text-[#817C7C]'>Pinterest</li>
            </ul>
        </div>
        <div className='flex flex-col md:flex-row md:items-center justify-between mt-[40px]'>
            <p className='text-[#817C7C]'>2025 Minera Lex right reserved</p>
            <ul className='flex flex-col md:flex-row md:items-center'>
                <li className='mr-[15px] text-[#817C7C]'>Terms & Conditions</li>
                <li className='mr-[15px] text-[#817C7C]'>Privacy Policy</li>
                <li className='text-[#817C7C]'>Cookie Policy</li>
            </ul>
        </div>
    </div>
  )
}

export default FooterBottom