"use client";

import { motion } from "framer-motion";

const animation = {
  initial: { y: "100%", opacity: 0.1, filter: "blur(15px)" },
  enter: (i) => ({
    y: "0",
    filter: "blur(0.3px)",
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: [0.33, 1, 0.68, 1],
      delay: 1 * i,
    },
  }),
};

const Intro = () => {
  return (
    <section className="w-full h-full px-8 py-16">
      <div className="flex flex-col md:flex-row gap-16 h-full ">
        <div className="w-full w-full md:w-6/12 ">
          <img src='./images/Vilarnau x Palma Llopis-12.jpg'  className="w-full object-cover" />
        </div>
        <div className="w-full w-full md:w-6/12 relative"> 
          <img src='./images/Vilarnau x Palma Llopis-7.jpg'  className="w-full object-cover" />
          <div className="absolute h-full inset-0 flex items-center justify-center">
            <motion.p initial="initial"
              animate="enter"
              custom={1}  // Este valor afecta el delay en enter(i)
              variants={animation} className="text-xl md:text-5xl text-center text-white font-bold blur-[0.5px] opacity-90">
              a space where individuality<br/> and self-expression <br/>are not just embraced <br/>but celebrate
            </motion.p>
         </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
