import React from 'react'
import Hero from '../components/presale-token/Hero'
import Secure from '../components/presale-token/Secure'
import Future from '../components/presale-token/Future'

function page() {
  return (
    <div className='bg-white text-black pb-[70px]'>
        <Hero />
        <Secure />
        <Future />
    </div>
  )
}

export default page