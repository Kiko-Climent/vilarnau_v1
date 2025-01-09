'use client';

import Prices from "@/components/Section_Prices";
import Description from "@/components/Section_Prices/description";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";

// const page = () => {
//   return (
//     <main className="relative h-[200vh]">
//       <Prices />
//       <Description />
      
//     </main>
//   )
// }

// export default page;
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
      <Prices scrollYProgress={scrollYProgress} />
      <Description scrollYProgress={scrollYProgress} />
      
    </main>
  )
}

export default page;