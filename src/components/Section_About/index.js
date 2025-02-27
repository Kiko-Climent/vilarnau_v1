"use client";

import React from "react";
import { useRef, useEffect } from "react";
import { motion, useTransform } from "framer-motion";
import { gsap } from 'gsap';

const About = ({scrollYProgress}) => {
  
  const titleAboutRef = useRef(null);

  useEffect(() => {
      const startAnimation = () => {
        gsap.set(titleAboutRef.current, { scaleY: 0, opacity: 0, filter: "blur-[25px]" });
  
        gsap.timeline()
          .to(titleAboutRef.current, {
            opacity: 0.8,
            scaleY: 1,
            filter: "blur(0px)",
            duration: 0.8,
            ease: "power2.out",
          })
          
      };
      window.addEventListener("pageTransitionComplete", startAnimation);
  
      return () => {
        window.removeEventListener("pageTransitionComplete", startAnimation);
      };
    }, []);

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5])

  return(
    <motion.div style={{scale, rotate}} className="sticky top-0 h-screen bg-[white] text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh]">
      <div className="relative flex">
        {/* play around with pic either h-screen/h-full */}
        <img src="/images/Vilarnau x Palma Llopis-16.jpg"
            className="relative flex px-8 pb-8 md:pb-0 object-contain md:object-cover h-screen"/>
          <p className="absolute flex text-5xl md:text-7xl font-bold text-white inset-0 items-center justify-center blur-[0.5px] opacity-0"
          ref={titleAboutRef}
          >about</p>
          <p className="text-sm md:text-lg font-bold text-gray-400 md:text-white absolute flex inset-0 items-end justify-center pb-8">scroll down ↓</p>
      </div>
    </motion.div>
  )
}

export default About;