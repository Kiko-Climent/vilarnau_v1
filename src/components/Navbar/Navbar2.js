"use client";

import MobileMenu from "./MobileMenu";
import gsap from "gsap";
import { useState, useRef } from "react";

const Navbar2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const letterMRef = useRef(null);
  const letterERef = useRef(null);
  const letterNRef = useRef(null);
  const letterURef = useRef(null);

  const refMobile = useRef(null);

  const openMenu = () => {
    gsap.to([letterMRef.current, letterNRef.current, letterURef.current], {
      y: -20,
      opacity: 0, // Fade them out
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out",
      onComplete: () => {
        setMenuOpen(true);
      },
    });
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="uppercase fixed z-10 w-full px-4 py-4 blur-[0.4px] font-bold">
      <div className="flex items-center justify-between">
        <h1 className="text-xl">vilarnau</h1>
        {!menuOpen && (
        <div
          className="flex text-xl cursor-pointer -mt-2 -mr-1"
          onClick={openMenu}
        >
          <span ref={letterMRef}>M</span>
          <span ref={letterERef}>E</span>
          <span ref={letterNRef}>N</span>
          <span ref={letterURef}>U</span>
        </div>
        )}
        
      </div>
      {/* Mobile Menu */}
      <MobileMenu ref={refMobile} closeMenu={closeMenu} isVisible={menuOpen} />

    </nav>
  );
};

export default Navbar2;
