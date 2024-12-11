"use client";

import { IoMenuOutline } from "react-icons/io5";
import MobileMenu from "./MobileMenu";
import gsap from "gsap";
import { useState, useRef } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const refMobile = useRef(null);
  const menuIconRef = useRef(null);

  const links = [
    { name: "prices", href: "/prices" },
    { name: "appointments", href: "/appointments" },
    { name: "about", href: "/about" },
  ];

  const openMenu = () => {
    gsap.to(menuIconRef.current, {
      y: -20, 
      opacity: 0,
      duration: 0.3,
      ease: "power2.out",
      onComplete: () => {
        setMenuOpen(true);
        gsap.to(refMobile.current, {
          xPercent: 0,
          duration: 1.2,
          ease: "power2.out",
        });
      },
    });
  };

  const closeMenu = () => {
    gsap.to(refMobile.current, {
      xPercent: 100,
      duration: 1.2,
      ease: "power2.in",
      onComplete: () => {
        gsap.fromTo(
          menuIconRef.current,
          { y: -50, opacity: 0.5 },
          { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
        );
        setMenuOpen(false);
      },
    });
  };

  return (
    <nav className="uppercase fixed z-10 w-full px-4 py-4 font-bold">
      <div className="flex items-start justify-between leading-4 text-xs">
        <div className="flex-col">
          <h1>vilarnau</h1>
          <div className="block lg:hidden">date</div>
          <div className="flex flex-col hidden lg:block">
          <ul>
              {/* Render links */}
              {links.map((link) => (
                <li key={link.name} className="flex relative inline-block group">
                  <a
                    href={link.href}
                    className="block transition-transform transform group-hover:translate-x-3"
                  >
                    {link.name}
                  </a>
                  <span className="text-lg absolute left-0 top-[43%] transform -translate-y-1/2 opacity-0 group-hover:opacity-100">
                    ❯
                  </span>
                </li>
              ))}
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
            ref={menuIconRef}
            className="flex block lg:hidden text-lg -mt-1 cursor-pointer font-bold"
            onClick={openMenu}
          />
        )}
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        ref={refMobile}
        closeMenu={closeMenu}
        isVisible={menuOpen}
      />
    </nav>
  );
};

export default Navbar;
