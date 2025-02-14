import React from 'react'
import TopLeft from './TopLeft'
import TopRight from './TopRight'

function Top() {
  return (
    <div className='flex flex-col md:flex-row p-[50px] md:p-[70px] justify-between items-start'>
        <TopLeft />
        <TopRight />
    </div>
  )
}

export default Top