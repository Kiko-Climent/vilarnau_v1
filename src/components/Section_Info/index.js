"use client";

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

gsap.registerPlugin("ScrollTrigger");

const Info = () => {

  useEffect(() => {

    const startAnimation = () => {
      const infoText = document.querySelector(".container-info");
  
      gsap.set(infoText,  {opacity: 0.3});
  
      ScrollTrigger.create({
        trigger: infoText,
          start: "top 80%", // Cuando el top del elemento esté al 80% de la pantalla
          end: "top 30%", // Cuando el top del elemento esté al 30% de la pantalla
          scrub: true, // Asegura que la animación esté sincronizada con el desplazamiento del scroll
          onUpdate: (self) => {
            gsap.to(infoText, {
              opacity: self.progress, // La opacidad cambia con el progreso del scroll
              duration: 0.3,
              ease: "power2.out",
            });
          },
        });
      };
      startAnimation();
    
      return () => {
        ScrollTrigger.kill();
      }
  },[])


  return(
    <section className="h-full px-8 pt-24 pb-48">
      <div className="container-info text-justify leading-[3.8rem] md:leading-[14rem] text-[13.5vw] md:text-[10vw] uppercase tracking-tight overflow-hidden break-words hyphens-manual">
        salon vilarnau. opens tu&shy;es&shy;day&shy; to sa&shy;tur&shy;day&shy; from 12AM&shy; to&shy; 8PM // man&shy;teu&shy;fel&shy;str.&shy;55 10999 Ber&shy;lin/Kreuz&shy;berg.
          #con&shy;tact: hello@vilarnau.de #030-61202363
      </div>
    </section>
  )
}

export default Info;