"use client";

import React from "react";
import { motion, useTransform } from "framer-motion";

const Description = ({scrollYProgress}) => {

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 0])

  return(
    <motion.div style={{scale, rotate}} className='relative h-screen bg-[#0f0f0f]'>
      <div className="flex flex-col text-white text-center justify-end md:justify-center pb-32 md:pb-0 pt-0 md:pt-32 items-center h-screen px-8 text-[14.4px] font-bold tracking-[0.05em]">
        <div className='flex uppercase text-white text-center leading-none'>Welcome to Salon Vilarnau.</div>
        <br></br>
        <div className="flex text-white">Our philosophy is to deeply understand your wishes,<br></br>so that we can create individual cuts that accentuate 
          your features and style.</div>
        <br></br>
        <div className="flex text-white">We believe in the power of classic meets contemporary,<br></br>and customers leaving our salon feeling seen, 
          understood, and phenomenal.</div>
        <br></br>
        <div className="flex text-white">Open in the heart of Berlin-Kreuzberg since 2018. Come say hello.</div>
      </div>
    </motion.div>
  )
};

export default Description;