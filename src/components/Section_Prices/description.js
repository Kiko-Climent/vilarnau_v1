'use client';

import React from 'react';
import { motion, useTransform } from "framer-motion";

// export default function Description() {
//   return (
//       <div className='flex justify-center my-40 '>
//           <p className='text-[7.5vw] uppercase text-center max-w-[50vw] leading-none'>The quick brown fox jumps over the lazy dog</p>
//       </div>
//   )
// }

const Description = ({scrollYProgress}) => {

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 0])

  return(
    <motion.div style={{scale, rotate}} className='relative h-screen bg-[#0f0f0f]'>
      <p className='text-[7.5vw] uppercase text-white text-center leading-none pt-16'>Vilarnau Salon prices</p>
    </motion.div>
  )
};

export default Description;