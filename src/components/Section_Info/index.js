'use client';

import { useRef } from "react";
import Image from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";



const Info = () => {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start','end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"])
  return (
    <div className="h-screen overflow-hidden px-8 py-16">
      <motion.div style={{y}} className='relative h-full'>
        <Image fill alt="image" style={{objectFit: 'cover'}} src='/images/Vilarnau x Palma Llopis-9.jpg'/>
      </motion.div>
      
    </div>
  )
}

export default Info;