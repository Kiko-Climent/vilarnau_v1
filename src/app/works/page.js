'use client';

import { useEffect, useRef } from "react";
import { useScroll } from "framer-motion";

import Works from "@/components/Section_Works";
import Description from "@/components/Section_Works/description";
import Footer from "@/components/Footer/Footer";

const page = () => {

  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']

  })
  useEffect(() => {

  }, [])
  return (
      <main ref={container} className="relative h-[200vh]">
        <Works scrollYProgress={scrollYProgress}/>
        <Description scrollYProgress={scrollYProgress}/>
        <Footer />
      </main>
  )
}

export default page;