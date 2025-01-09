import { gsap } from "gsap";


export const revealTextPrices = (textRef) => {
  const tl = gsap.timeline();

  const spans = textRef.current.querySelectorAll("span");

  tl.fromTo(
    spans,
    { y: 15, opacity: 0, rotationX: 15 },
    {
      y: 0,
      opacity: 2,
      rotationX: 0,
      duration: 0.5,
      ease: "power2.out",
      stagger: 0.03,
    }
  );

  return tl;
}

export const revealScrollPrices = (textRef2) => {
  const tl = gsap.timeline();

  const p = textRef2.current.querySelectorAll("p");

  tl.fromTo(
    p,
    { y: 15, opacity: 0, rotationX: 15 },
    {
      y: 0,
      opacity: 2,
      rotationX: 0,
      duration: 0.5,
      ease: "power2.out",
      stagger: 0.03,
    }
  );

  return tl;
}