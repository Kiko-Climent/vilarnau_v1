"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(Flip);

const IntroSection = () => {
  const imagesRef = useRef([]);
  const centerImageWrapperRef = useRef(null);
  const centerImageRef = useRef(null);
  const textLineRef = useRef(null);

  useEffect(() => {
    const images = imagesRef.current;
    const centerImageWrapper = centerImageWrapperRef.current;
    const centerImage = centerImageRef.current;

    // Set initial state
    gsap.set(images, { y: 80, opacity: 0 });
    gsap.set(centerImageWrapper, { y: 80, scale: 0.15, opacity: 0 });
    gsap.set(centerImage, { scale: 1.5 });
    gsap.set(textLineRef.current, { scaleX: 0, opacity: 1 });

    // Get final state with Flip plugin
    const state = Flip.getState([centerImageWrapper, ...images]);

    // Animation timeline
    gsap
      .timeline()
      .to(images, {
        y: 0,
        opacity: 1,
        duration: 3,
        ease: "power3.inOut",
        stagger: 0.1,
      })
      .to(state, {
        duration: 2,
        ease: "expo.inOut",
        stagger: 0.15,
        onComplete: () => {
          // Scale the main image
          gsap
            .timeline()
            .to(centerImageWrapper, {
              scale: 1,
              duration: 2,
              ease: "expo.inOut",
            })
            .to(centerImage, {
              scale: 1,
              duration: 2,
              ease: "expo.inOut",
            });
        },
      });
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 z-10 flex justify-center items-center" ref={centerImageWrapperRef}>
        <img
          ref={centerImageRef}
          src="/images/photo_main.jpg"
          alt="Main"
          className="absolute w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 grid grid-cols-4 gap-2" ref={imagesRef}>
        {[...Array(8)].map((_, index) => (
          <img
            key={index}
            ref={(el) => (imagesRef.current[index] = el)}
            src={`/images/photo${index + 2}.jpg`}
            alt={`Photo ${index + 2}`}
            className="absolute w-1/4 h-1/4 object-cover"
          />
        ))}
      </div>
      <div
        className="absolute bottom-0 left-0 h-1 w-2/3 bg-white origin-left"
        ref={textLineRef}
      ></div>
    </section>
  );
};

export default IntroSection;
