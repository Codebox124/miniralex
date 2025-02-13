import React from 'react'
import Hero from '../components/blog-news/Hero'
import News from '../components/blog-news/News'

function page() {
  return (
    <div className='bg-white text-black pb-[70px]'>
        <Hero />
        <News />
    </div>
  )
}

export default page