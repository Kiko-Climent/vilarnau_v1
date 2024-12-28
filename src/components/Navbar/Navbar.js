"use client";

import MobileMenu from "./MobileMenu";
import { MdArrowOutward, MdArrowForward } from "react-icons/md";

import gsap from "gsap";
import { useState, useRef } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const refMobile = useRef(null);
  const menuIconRef = useRef(null);

  const [language, setLanguage] = useState("EN");

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  const links = [
    { name: "prices", href: "/prices" },
    { name: "works", href: "/works" },
    { name: "appointments", href: "/appointments" },
    { name: "about", href: "/about" },
    { name: "contact", href: "/contact" },
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
    <nav className="uppercase fixed z-10 w-full px-4 py-4 blur-[0.4px] font-bold">
      <div className="flex items-start justify-between leading-5 md:leading-7 text-xl md:text-3xl">
        <div className="flex-col">
          <h1>vilarnau</h1>
          <div className="block lg:hidden">date</div>
          <div className="flex flex-col hidden lg:block">
            <ul className="pr-4">
              {/* Render links */}
              {links.map((link) => (
                <li
                  key={link.name}
                  className="flex items-center relative group hover:text-gray-400 hover:blur-[1px] transition-all duration-300 ease-in-out"
                >
                  <span className="text-3xl flex items-center -ml-1">
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
          <div className="flex flex-row">
            <div
              onClick={() => handleLanguageChange("EN")}
              className={`flex cursor-pointer transition-colors duration-300 ease-in-out ${
                language === "EN" ? "text-gray-400 font-bold blur-[0.7px]" : "text-black"
              }`}
            >
              {language === "EN" ? "[EN]" : "EN"}
            </div>
            <div
              onClick={() => handleLanguageChange("DE")}
              className={`flex cursor-pointer transition-colors duration-300 ease-in-out ${
                language === "DE" ? "text-gray-400 font-bold blur-[0.7px]" : "text-black"
              }`}
            >
              {language === "DE" ? "[DE]" : "DE"}
            </div>
          </div>
        </div>
        {!menuOpen && (
          <div
            ref={menuIconRef}
            className="flex block lg:hidden text-xl -mt-2 -mr-1 cursor-pointer font-bold"
            onClick={openMenu}
          >
            MENU
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      <MobileMenu ref={refMobile} closeMenu={closeMenu} isVisible={menuOpen} />
    </nav>
  );
};

export default Navbar;
