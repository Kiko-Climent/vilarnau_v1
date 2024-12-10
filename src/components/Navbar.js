"use client";

import { IoMenuOutline } from "react-icons/io5";
import MobileMenu from "./MobileMenu";
import gsap from "gsap";
import { useState, useRef } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const refMobile = useRef(null);

  const openMenu = () => {
    setMenuOpen(true);
    gsap.to(refMobile.current, {
      xPercent: 0,
      duration: 1.2,
      ease: "power2.out",
    });
  };

  const closeMenu = () => {
    gsap.to(refMobile.current, {
      xPercent: 100,
      duration: 1.2,
      ease: "power2.in",
      onComplete: () => setMenuOpen(false),
    });
  };

  return (
    <nav className="uppercase fixed z-10 w-full px-4 py-4">
      <div className="flex items-start justify-between leading-4 text-xs">
        <div className="flex-col">
          <h1>vilarnau</h1>
          <div className="block lg:hidden">date</div>
          <div className="flex flex-col hidden lg:block">
            <ul>
              <li>prices</li>
              <li>appointments</li>
              <li>about</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col hidden lg:block">
          <div className="flex">date</div>
          <div className="flex">
            <div>en</div>
            <div>—</div>
            <div>de</div>
          </div>
        </div>
        {!menuOpen && (
          <IoMenuOutline
            className="flex block lg:hidden text-lg -mt-1 cursor-pointer"
            onClick={openMenu}
          />
        )}
      </div>

      {/* Mobile Menu */}
      <MobileMenu ref={refMobile} closeMenu={closeMenu} isVisible={menuOpen} />
    </nav>
  );
};

export default Navbar;
