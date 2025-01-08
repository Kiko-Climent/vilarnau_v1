import { gsap } from "gsap";

export const appointmentsPic = (imageRef3, imageRef4) => {
  const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });

  tl.to(imageRef3.current, {
    x: "-100%", // Mueve la primera imagen hacia la izquierda
    opacity: 0, // Hace que desaparezca
    duration: 1.5, // Duración de la animación
    ease: "power2.inOut", // Suavizado
  })
    .to(
      imageRef4.current,
      {
        x: "0%", // Mueve la segunda imagen desde la derecha al centro
        opacity: 1, // Hace que aparezca
        duration: 1.5,
        ease: "power2.inOut",
      },
      "-=1.5" // Comienza esta animación al mismo tiempo que la anterior
    )
    .to(imageRef4.current, {
      x: "100%", // Mueve la segunda imagen hacia la derecha
      opacity: 0, // Hace que desaparezca
      duration: 1.5,
      ease: "power2.inOut",
    })
    .to(
      imageRef3.current,
      {
        x: "0%", // Mueve la primera imagen desde la izquierda al centro
        opacity: 1, // Hace que reaparezca
        duration: 1.5,
        ease: "power2.inOut",
      },
      "-=1.5"
    );
}