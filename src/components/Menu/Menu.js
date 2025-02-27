'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import './menu.css';
import Link from 'next/link';

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Calendar from '../Calendar/Calendar';
import Clock from '../Calendar/Clock';

const menuLinks = [
  {path: '/home', label: 'Home'},
  {path: '/works', label: 'Works'},
  {path: '/prices', label: 'Prices'},
  {path: '/about', label: 'About'},
]

const Menu = () => {
  const pathname = usePathname()

  const container = useRef()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const tl = useRef();
  const openRef = useRef();
  const closeRef = useRef();
  const clockInRef = useRef();
  const cityInRef = useRef();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  


  useGSAP(() => {
    gsap.set('.menu-link-item-holder', { y: 50, opacity: 0 });
    gsap.set('.menu-calendar', { y: 50, opacity: 0 });

    gsap.set(closeRef.current, { y: -50, opacity: 0 });
    gsap.set(openRef.current, { scale: 1, opacity: 1 }); 

    gsap.set(clockInRef.current, {y: -50, opacity: 0});
    gsap.set(cityInRef.current, {y: -50, opacity: 0});
    
  
    tl.current = gsap.timeline({ paused: true })
      .to('.menu-overlay', {
        duration: 1.2,
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        ease: 'expo.inOut',
      })
      .to('.menu-link-item-holder', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
      }, '<0.3')
      .fromTo('.menu-link-item-holder', {
        rotationX: 15,
      }, {
        rotationX: 0,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.1,
      }, '<') // Sync with previous animation
      .to('.menu-calendar', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
      }, '<0.3')
      .fromTo('.menu-calendar', {
        rotationX: 15,
      }, {
        rotationX: 0,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.1,
      }, '<') 

      .to(closeRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out',
      }, '<')
      .to(openRef.current, {
        scale: 0, 
        opacity: 0,
        duration: 0.3,
        ease: 'power2.out',
      }, '<')

      .to(cityInRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.4,
        ease: 'power2.out',
      }, '<0.7')
      .to(clockInRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.4,
        ease: 'power2.out',
      }, '<0.7')

  }, { scope: container });
  

  useEffect(() => {
    if (isMenuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isMenuOpen])

  return(
    <div className="menu-container w-screen" ref={container} style={{ display: pathname === "/" ? "none" : "block" }}>
      <div className='menu-bar w-full px-8 py-5 bg-white'>
      <div className="menu-logo">
        <Link href="/home" className='hover:text-gray-400 transition-colors duration-300'>VILARNAU</Link>
      </div>
        <div ref={openRef} className='menu-open' onClick={toggleMenu}>
          <p className='hover:text-gray-400 transition-colors duration-300'>MENU</p>
        </div>
      </div>
      <div className='menu-overlay w-screen'>
        <div className='menu-overlay-bar w-full px-8 py-5'>
          <div className='menu-logo'>
            <Link href="/">VILARNAU</Link>
            <div className="menu-calendar text-gray-400">
              <Calendar />
            </div>
          </div>
          <div ref={closeRef} className='menu-close' onClick={toggleMenu}>
            <p className='hover:text-gray-400 transition-colors duration-300'>CLOSE</p>
          </div>
        </div>
        <div className='menu-close-icon' onClick={toggleMenu}>
          <p className=''>&#x2715;</p>
        </div>
        <div className='menu-copy'>
          <div className='menu-links'>
            {menuLinks.map((link, index) => (
              <div className='menu-link-item' key={index}>
                <div className='menu-link-item-holder' onClick={toggleMenu}>
                  <Link href={link.path} className='pl-0 md:pl-5 menu-link hover:text-gray-400 transition-colors duration-300'>
                    {link.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className='menu-clock text-[12vw] md:text-[10vw] text-gray-400'>
            <div ref={cityInRef} className='uppercase'>berlin</div>
            <div ref={clockInRef} className=''><Clock/></div>
          </div>
          <div className='menu-info'>
            <div className='menu-info-col'>
              <p>appointments &#8599;</p>
              <p>hello@vilarnau.de</p>
              <p>030 - 61202363</p>
            </div>
          </div>
        </div>
        <div className='menu-preview pr-0 md:pr-8'>
          <p>manteufelstr.55</p>
        </div>
      </div>
    </div>
  )
}

export default Menu;