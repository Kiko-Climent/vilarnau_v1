'use client';

import Footer from "@/components/Footer/Footer";
import About from "@/components/Section_About";
import Description from "@/components/Section_About/description";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";

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
      <About scrollYProgress={scrollYProgress} />
      <Description scrollYProgress={scrollYProgress} />
      <Footer />
    </main>
  )
}

export default page;