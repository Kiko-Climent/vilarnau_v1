'use client';

import React from 'react';
import { motion, useTransform } from "framer-motion";


const Description = ({scrollYProgress}) => {

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 0])

  return(
    <motion.div style={{scale, rotate}} className='relative h-screen bg-[#0f0f0f] flex justify-center items-center'>
        <p className='flex text-[7.5vw] uppercase text-white text-center leading-none'>Vilarnau Salon Works<br/>Coming Soon</p>
    </motion.div>
  )
};

export default Description;