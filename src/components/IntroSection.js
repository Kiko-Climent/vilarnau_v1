"use client";

import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { useEffect } from "react";
gsap.registerPlugin(Flip);





const IntroSection = () => {

  useEffect(() => {
    const centerImage = document.querySelector(".intro__center-image img");
    const centerImageWrapper = document.querySelector(".intro__center-image");
    const imagesWrapper = document.querySelector(".intro__images");
    const images = [...imagesWrapper.querySelectorAll("img")];
    const textLine = ".intro__line";
    const titleLines = 'h1 [data-animation="text-reveal"] > *';

    // Configurar estados iniciales y animaciones
    const getFinalState = () => {
      gsap.set([images, centerImageWrapper], {
        xPercent: -50,
        yPercent: -50,
      });
      return Flip.getState([centerImageWrapper, images]);
    };

    const setInitialState = () => {
      centerImageWrapper.classList.add("initial");
      imagesWrapper.classList.add("initial");

      gsap.set(images, {
        xPercent: 0,
        yPercent: 0,    
        y: 80,
      });

      gsap.set(centerImageWrapper, {
        y: 80,
        scale: 0.15,
      });

      gsap.set(centerImage, {
        scale: 1.5,
      });

      gsap.set(textLine, {
        scaleX: 0,
        opacity: 1,
      });
    };

    const fadeUpImages = () => {
      return gsap.to([images, centerImageWrapper], {
        y: 0,
        opacity: 1,
        duration: 3,
        ease: "power3.inOut",
        stagger: 0.1,
        onComplete: moveImagesToCenter,
      });
    };

    const moveImagesToCenter = (state) => {
      Flip.to(state, {
        duration: 2,
        ease: "expo.inOut",
        stagger: 0.15,
        onComplete: scaleCenterImage,
      });
    };

    const scaleCenterImage = () => {
      const tl = gsap.timeline({
        onComplete: revealContent,
      });

      tl.to(centerImageWrapper, {
        scale: 1,
        duration: 2,
        ease: "expo.inOut",
      }).to(
        centerImage,
        {
          scale: 1,
          duration: 2,
          ease: "expo.inOut",
        },
        0
      );
    };

    const revealContent = () => {
      const tl = gsap.timeline({
        defaults: {
          y: 0,
          duration: 2,
          ease: "expo.out",
        },
      });

      tl.to(titleLines, {
        stagger: 0.2,
      }).to(
        textLine,
        {
          scaleX: 1,
          transformOrigin: "left center",
        },
        0
      );
    };

    // Inicializar animación
    const state = getFinalState();
    setInitialState();
    fadeUpImages(state);

    
  }, []);
  return (
    <section className="">
      <div className="intro__text">
        <h1 className="intro__title">
          <span data-animation="text-revel">vilarnau</span>
        </h1>
      </div>
      <div className="intro__line"></div>
      <div className="intro__center-image">
        <img src="/images/_MG_6741.JPG" alt="Main Pic" />
      </div>
      <div className="intro__images">
        <img src="/images/_MG_6734.JPG" alt="Pic 1" />
        <img src="/images/R1-02324-014A.jpeg" alt="Pic 2" />
        <img src="/images/R1-02324-024A.jpeg" alt="Pic 3" />
        <img src="/images/R1-02325-020A.jpeg" alt="Pic 4" />
        <img src="/images/R1-02325-021A.jpeg" alt="Pic 5" />
      </div>
    </section>
  )
}

export default IntroSection;