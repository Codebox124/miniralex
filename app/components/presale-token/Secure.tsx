"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { fromlefttoright, fromrighttoleft } from '../animations'
function Secure() {
  const [stakedAmount, setStakedAmount] = useState<number>(3.4);
  return (
    <div className='flex flex-col md:flex-row items-start px-5 p-[50px] md:p-[70px] justify-between'>
      <motion.div
        initial={fromlefttoright.initial}
        whileInView={fromlefttoright.whileInView}
        transition={fromlefttoright.transition}
        viewport={fromlefttoright.viewport}
        className='w-full md:w-[47%]'>
        <h2 className='font-bold text-[#172B6B]'>| SECURE YOUR SIZE</h2>
        <h1 className='font-bold text-[#F8D835] text-3xl my-[15px]'>WHY INVEST IN THE MINERALEX PRE-SALE?</h1>
        <p className=' text-xl'>The Mineralex pre-sale offers early investors a unique <br /> opportunity to acquire tokens at the best possible rates <br /> before the official public launch.</p>
        <p className='my-[20px] text-xl'>By participating in this phase, you gain priority access to a <br /> revolutionary tokenized mining ecosystem, benefiting <br /> from lower entry costs and strategic positioning in a high-<br />growth industry.</p>
        <button className='bg-[#172B6B] text-white p-[15px] rounded-[5px]'>Explore Mineralex Game</button>
      </motion.div>
      <div className="mx-auto mt-5 md:mt-0 bg-[#0D1B5C] text-white rounded-lg p-6 max-w-lg w-full">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <img src="/logo.png" alt="Mineralex Logo" className="h-8" />
          <h2 className="text-lg font-semibold">STAKE MINERLEX TOKEN</h2>
        </div>

        {/* Stats */}
        <div className="flex justify-between border-b border-gray-600 pb-4 mb-4">
          <div className="text-center">
            <p className="text-xl font-bold">4.70%</p>
            <p className="text-sm">Staking APR</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold">30.0%</p>
            <p className="text-sm">Max Slashing</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold">30.0%</p>
            <p className="text-sm">Wallet Balance</p>
          </div>
        </div>

        {/* Staked Amount Input */}
        <div>
          <p className="text-sm text-yellow-400 mb-2">STAKED AMOUNT</p>
          <div className="border border-yellow-400 rounded-md flex items-center p-2">
            <img src="/logo.png" alt="Token" className="h-6 mr-2" />
            <input
            type="number"
            value={stakedAmount}
            onChange={(e) => setStakedAmount(parseFloat(e.target.value) || 0)}
            className="bg-transparent text-lg outline-none w-full"
          />
          </div>
        </div>

        {/* Charges */}
        <div className="mt-4 text-sm">
          <p className="flex justify-between">
            <span>Staked Charges:</span> <span>$0.002</span>
          </p>
          <p className="flex justify-between">
            <span>Exchanges Charges:</span> <span>$0.002</span>
          </p>
          <p className="flex justify-between">
            <span>Staked Charges:</span> <span>$0.002</span>
          </p>
        </div>

        {/* Stake Button */}
        <button className="mt-6 w-full bg-yellow-400 text-[#0D1B5C] font-semibold py-2 rounded-lg hover:bg-yellow-500 transition">
          STAKE NOW
        </button>
      </div>
    </div>
  )
}

export default Secure