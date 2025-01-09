"use client";

const Content = () => {
  return(
    <div>
      <div className='bg-[#0f0f0f] pt-8 px-12 h-full w-full flex flex-col justify-between'>
        <Section1 />
        <Section2 />
    </div>
    </div>
  )
}

export default Content;

const Section1 = () => {
  return (
      <div>
          <Nav />
      </div>
  )
}

const Section2 = () => {
  return (
      <div className='flex justify-between items-end text-white'>
          <h1 className='text-[16vw] leading-[0.8] mt-8 uppercase blur-[0.5px]'>Vilarnau</h1>
          {/* <h1 className='text-[16vw] leading-[0.8] mt-8 uppercase blur-[0.5px]'>Vilarnau</h1> */}
      </div>
  )
}

const Nav = () => {
  return (
      <div className='flex flex-col shrink-0'>
          <div className='flex flex-col gap-1'>
              <h3 className='text-3xl mb-2 uppercase text-white'>Manteufelstr. 55 | 10999 | Berlin-Kreuzberg</h3>
          </div>
          <div className='flex flex-col gap-1'>
              <h3 className='text-3xl mb-2 uppercase text-white'>030 - 61202363</h3>
          </div>
          <div className='flex flex-col gap-1'>
              <h3 className='text-3xl mb-2 text-white'>hello@vilarnau.de</h3>
          </div>
      </div>
  )
}