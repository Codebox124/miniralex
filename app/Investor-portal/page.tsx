import React from 'react'
import Hero from '../components/investor-portal/Hero'
import Top from '../components/investor-portal/Top'
import Bottom from '../components/investor-portal/Bottom'

function page() {
  return (
    <div className='bg-white text-black pb-[70px]'>
        <Hero />
        <Top />
        <Bottom />
    </div>
  )
}

export default page