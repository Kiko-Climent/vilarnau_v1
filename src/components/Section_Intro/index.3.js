"use client";

import { gsap } from 'gsap';
import { useEffect } from 'react';


const Intro1_3 = () => {

  useEffect(() => {
    const startAnimation = () => {
      
      const salonText = document.querySelector(".salon-text");
      const lines = gsap.utils.toArray(".quote-line");

      gsap.set(lines, { y: 50, opacity: 0, filter: "blur-[25px]" });
      gsap.set(salonText, { scaleY: 0, opacity: 0, filter: "blur-[25px]" });

      const tl = gsap.timeline()

      tl.to(salonText, {
        opacity: 0.8,
        scaleY: 1,
        filter: "blur(0px)",
        duration: 0.8,
        ease: "power2.out",
      })
      .to(salonText, {
        opacity: 0,
        scaleY: 0,
        filter: "blur(10px)",
        duration: 0.6,
        delay: 1.2, // Mantiene el texto visible un momento antes de desaparecer
        ease: "power2.inOut",
      })

      .to(lines, {
        y: 0,
        opacity: 0.8,
        filter: "blur-[0px]",
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        delay: 0.5,
      })
      .fromTo(
        lines,
        { rotationX: 15 },
        { rotationX: 0, duration: 0.8, ease: "power2.out", stagger: 0.1 }
      );
    };
    window.addEventListener("pageTransitionComplete", startAnimation);

    return () => {
      window.removeEventListener("pageTransitionComplete", startAnimation);
    };
  }, []);
  

  return (
    <section className="w-full h-full px-8 py-16">
      <div className="flex flex-col md:flex-row gap-16 h-full ">
        <div className="relative w-full md:w-6/12">
          <img src='./images/Vilarnau x Palma Llopis-12.jpg'  className="w-full object-cover" />
          <div className='absolute h-full inset-0 flex items-center justify-center'>
            <p className="salon-text text-xl md:text-5xl text-center text-white font-bold blur-[0.5px] opacity-0">
              salon vilarnau
            </p>
          </div>
        </div>
        <div className="w-full w-full md:w-6/12 relative"> 
          <img src='./images/Vilarnau x Palma Llopis-7.jpg'  className="w-full object-cover" />
          <div className="absolute h-full inset-0 flex items-center justify-center">
            <p className="text-xl md:text-5xl text-center text-white font-bold blur-[0.5px]">
              <span className="quote-line opacity-0 block">a space where individuality</span>
              <span className="quote-line opacity-0 block">and self-expression</span>
              <span className="quote-line opacity-0 block">are not just embraced</span>
              <span className="quote-line opacity-0 block">but celebrated</span>
            </p>
         </div>
        </div>
      </div>
    </section>
  );
}

export default Intro1_3;
