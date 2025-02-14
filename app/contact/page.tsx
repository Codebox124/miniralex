import React from 'react'
import Hero from '../components/contact-us/Hero'
import Top from '../components/contact-us/Top'
import Bottom from '../components/contact-us/Bottom'

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