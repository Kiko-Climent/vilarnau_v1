"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import { revealHero } from "./animations";

const Hero = () => {
  const progressRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    
    if (progressRef.current) {
      tl.add(revealHero(progressRef));
    } else {
      console.error("progressRef no está asignado correctamente.");
    }

    return () => tl.kill();
  }, []);

  return (
    <section className="relative w-screen h-screen">
      <div
        ref={progressRef}
        className="absolute inset-0 bg-black z-50"
        style={{
          transformOrigin: "bottom center",
        }}
      ></div>

      {/* Hero Img */}
      <div ref={heroRef} className="relative overflow-hidden h-full">
        <img
          src="/images/Vilarnau x Palma Llopis-18.jpg"
          alt="Hero"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-center text-white uppercase">
        <h1 className="text-7xl font-bold">Vilarnau.</h1>
      </div>
    </section>
  );
};

export default Hero;
