import React from 'react'
import Hero from '../components/blog/Hero'
import Topbar from '../components/blog/Topbar'
import Bignews from '../components/blog/Bignews'
import NewsGrid from '../components/blog/NewsGrid'
import BottomNav from '../components/blog/BottomNav'

function page() {
  return (
    <div className='bg-white text-black pb-[70px]'>
        <Hero />
        <Topbar />
        <Bignews />
        <NewsGrid />
        <BottomNav />
    </div>
  )
}

export default page