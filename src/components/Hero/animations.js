import { gsap } from "gsap";

export const revealHero = (progressRef) => {
  const tl = gsap.timeline();

  // Asegura que la barra comienza visible
  tl.fromTo(
    progressRef.current,
    { scaleY: 1 },
    {
      scaleY: 0,
      duration: 2,
      ease: "power3.inOut",
      transformOrigin: "bottom center",
    }
  );

  return tl;
};
