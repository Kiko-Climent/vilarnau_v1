import { gsap } from "gsap";

export const revealHero = (progressRef) => {
  const tl = gsap.timeline();

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

export const blurHero = (imageRef) => {
  const tl = gsap.timeline();

  tl.to(imageRef.current, {
    filter: 'blur(10px)',
    duration: 0,
    ease: 'power3.inOut',
  })
  .to(imageRef.current, {
    filter: 'blur(0px)',
    duration: 1.5,
    delay: 1,
    // ease: 'power2.out'
    ease: 'expo.out'
  });

  return tl;
};

export const revealTextHero = (textRef) => {
  const tl = gsap.timeline();

  const spans = textRef.current.querySelectorAll("span");

  tl.fromTo(
    spans,
    { y: 20, opacity: 0, rotationX: 15 },
    {
      y: 0,
      opacity: 2,
      rotationX: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.15,
    }
  );

  return tl;
}
