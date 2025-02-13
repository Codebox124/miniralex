import React from 'react'
import FooterBottom from './FooterBottom'
import Quick from '../components/roadmap/Quick'
function Footer() {
  return (
    <footer className='bg-white text-black'>
           <Quick />
         <section className=' md:my-10'>
            <img src="/mineralexsection.png" alt="mineralex" className='w-full h-ful object-cover' />
        </section>

        <FooterBottom />
     
    </footer>
  )
}

export default Footer