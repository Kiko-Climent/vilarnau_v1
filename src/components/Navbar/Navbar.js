"use client";

import { LuPlus } from "react-icons/lu";
import MobileMenu from "./MobileMenu";
import { MdArrowOutward, MdArrowForward } from "react-icons/md";

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
            <ul className="pr-4">
              {/* Render links */}
              {links.map((link) => (
                <li
                  key={link.name}
                  className="flex items-center relative group"
                >
                  <span className="text-lg flex items-center -ml-1">
                    <MdArrowOutward className="group-hover:hidden transition-opacity" />
                    {/* <MdArrowOutward className="group-hover:opacity-0 transition-opacity duration-200 ease-in-out" /> */}
                    <MdArrowForward className="hidden group-hover:inline-block transition-opacity" />
                  </span>
                  <a
                    href={link.href}
                    className="block transition-transform transform group-hover:translate-x-1"
                  >
                    {link.name}
                  </a>
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
          <LuPlus
            ref={menuIconRef}
            className="flex block lg:hidden text-lg -mt-1 -mr-1 cursor-pointer font-bold"
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
