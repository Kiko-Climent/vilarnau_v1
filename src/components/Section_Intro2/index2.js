"use client";

import { useRef } from "react";
import { useScroll, motion } from "framer-motion";


const Intro2_2 = () => {

  const element = useRef();
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['start 0.9', 'start 0.25'],
  })
  return (
    <section className="h-screen px-8 py-16">
      <div className="flex flex-col md:flex-row md:justify-between items-center h-full gap-8 md:gap-16">
        {/* Contenedor del texto */}
        <div className="flex w-full md:w-6/12">
          <motion.p ref={element} style={{opacity: scrollYProgress}} className="text-right md:text-left text-3xl md:text-5xl font-bold text-gray-800 blur-[0.5px]">
            Located in the heart of Kreuzberg,<br />
            Vilarnau has been elevating<br />
            the kraft of hairstyling<br />
            since 2019
          </motion.p>
        </div>
        {/* Contenedor de la imagen */}
        <div className="flex items-center w-full md:w-6/12 h-full">
          <img
            src="./images/Vilarnau x Palma Llopis-13.jpg"
            className="object-cover h-[90%] w-[85%] self-center"
            alt="Vilarnau"
          />
        </div>
      </div>
    </section>
  );
};

export default Intro2_2;
