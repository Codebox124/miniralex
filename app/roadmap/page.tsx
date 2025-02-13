import React from 'react'
import Hero from '../components/roadmap/Hero'
import FuturePlans from '../components/roadmap/FuturePlans'
import Reports from '../components/roadmap/Reports'


function Roadmap() {
  return (
    <div className='w-full h-[fit-content] bg-white'>
        <Hero />
        <FuturePlans />
        <Reports />
    </div>
  )
}

export default Roadmap