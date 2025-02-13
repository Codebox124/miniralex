'use client'
import React from 'react'

import ReportsLeft from './ReportsLeft';
import ReportsRight from './ReportsRight';
function Reports() {
  return (
    <div className='flex flex-col md:flex-row mt-[100px]'>
        <ReportsLeft />
        <ReportsRight />
    </div>
  )
}

export default Reports