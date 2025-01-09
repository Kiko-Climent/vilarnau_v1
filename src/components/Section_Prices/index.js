'use client';

import React from "react";

import Image from "next/image";
import { motion, useTransform } from "framer-motion";



// const Prices = () => {
//   const container = useRef();
//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ['start start','end start']
//   })

//   const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"])
//   return (
//     <div className="h-screen overflow-hidden px-8 py-16 relative">
//       <motion.div style={{y}} className='relative h-full'>
//         <Image fill alt="image" style={{objectFit: 'cover'}} src='/images/Vilarnau x Palma Llopis-9.jpg'/>
//       </motion.div>
//       <div>
//         <p className="flex absolute text-5xl md:text-7xl font-bold text-white inset-0 items-center justify-center blur-[0.5px] opacity-70">prices</p>
//       </div>
      
//     </div>
//   )
// }

// export default Prices;


const Prices = ({scrollYProgress}) => {

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5])
  return (
    <motion.div style={{scale, rotate}} className="sticky top-0 h-screen bg-[white] text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh]">
      <div className="relative flex">
        {/* play around with pic either h-screen/h-full */}
        <img src="/images/Vilarnau x Palma Llopis-15.jpg"
            className="relative flex px-8 object-cover h-screen"/>
          <p className="absolute flex text-5xl md:text-7xl font-bold text-white inset-0 items-center justify-center blur-[0.5px] opacity-70">prices</p>
          <p className="text-sm md:text-lg font-bold text-white absolute flex inset-0 items-end justify-center pb-8">scroll down ↓</p>
      </div>
    </motion.div>
  )
}

export default Prices;