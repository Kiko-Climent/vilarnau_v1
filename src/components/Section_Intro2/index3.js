"use client";

import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const lines = [
  "Located in the heart of Kreuzberg,",
  "Vilarnau has been elevating",
  "the kraft of hairstyling",
  "since 2018",
];

const Intro2_3 = () => {
  const containerRef = useRef();
  const refs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, []);

  const createAnimation = () => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        scrub: 1,
        start: "center 80%",
        end: "top 20%",
      },
      opacity: 1,
      y: 0,
      ease: "power2.out",
      stagger: 0.5,
    });
  };

  const splitLines = (lines) => {
    return lines.map((line, lineIndex) => (
      <div key={`line-${lineIndex}`} className="block">
        {splitWords(line)}
      </div>
    ));
  };

  const splitWords = (line) => {
    return line.split(" ").map((word, wordIndex) => (
      <span key={`word-${wordIndex}`} className="inline-block mr-2">
        {splitLetters(word)}
      </span>
    ));
  };

  const splitLetters = (word) => {
    return word.split("").map((letter, letterIndex) => (
      <span
        key={`letter-${letterIndex}`}
        ref={(el) => refs.current.push(el)}
        className="inline-block opacity-0 translate-y-6"
      >
        {letter}
      </span>
    ));
  };

  return (
    <section className="h-screen px-8 py-16">
      <div
        ref={containerRef}
        className="flex flex-col md:flex-row md:justify-between items-center h-full gap-8 md:gap-16"
      >
        {/* Contenedor del texto */}
        <div className="flex w-full md:w-6/12">
          <div className="w-full text-right md:text-left text-3xl md:text-5xl font-bold text-gray-700">
            {splitLines(lines)}
          </div>
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

export default Intro2_3;
