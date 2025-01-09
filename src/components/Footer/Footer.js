import React from 'react'
import Content from './Footer_Content'

export default function Footer() {
  return (
    <div 
      className='relative h-[200px] md:h-[300px] bg-[#0f0f0f]'
      style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
    >
      <div className='fixed bottom-0 h-[200px] md:h-[300px] w-full'>
        <Content />
      </div>
    </div>
  )
}