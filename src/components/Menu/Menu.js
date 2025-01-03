'use client';

import { useEffect, useRef, useState } from 'react';
import './menu.css';
import Link from 'next/link';

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Calendar from '../Calendar/Calendar';

const menuLinks = [
  {path: '/', label: 'Home'},
  {path: '/works', label: 'Works'},
  {path: '/prices', label: 'Prices'},
  {path: '/about', label: 'About'},
]

const Menu = () => {
  const container = useRef()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const tl = useRef();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useGSAP(() => {
    gsap.set('.menu-link-item-holder', { y: 50, opacity: 0 });
  
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
      }, '<'); // Sync with previous animation
  }, { scope: container });
  

  useEffect(() => {
    if (isMenuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isMenuOpen])

  return(
    <div className="menu-container" ref={container}>
      <div className='menu-bar'>
      <div className="menu-logo">
        <Link href="/">VILARNAU</Link>
        <div className="menu-calendar">
          <Calendar />
        </div>
      </div>
        <div className='menu-open' onClick={toggleMenu}>
          <p className=''>MENU</p>
        </div>
      </div>
      <div className='menu-overlay'>
        <div className='menu-overlay-bar'>
          <div className='menu-logo'>
            <Link href="/">VILARNAU</Link>
            <div className="menu-calendar">
              <Calendar />
            </div>
          </div>
          <div className='menu-close' onClick={toggleMenu}>
            <p className=''>CLOSE</p>
          </div>
        </div>
        <div className='menu-close-icon' onClick={toggleMenu}>
          <p className=''>&#x2715;</p>
           {/* <p className=''><Calendar /></p> */}
        </div>
        <div className='menu-copy'>
          <div className='menu-links'>
            {menuLinks.map((link, index) => (
              <div className='menu-link-item' key={index}>
                <div className='menu-link-item-holder' onClick={toggleMenu}>
                  <Link href={link.path} className='menu-link'>
                    {link.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className='menu-info'>
          {/* <div className='menu-info-col'>
            <a href='#'>X &#8599;</a>
            <a href='#'>Instagram &#8599;</a>
            <a href='#'>LinkedIn &#8599;</a>
            <a href='#'>Behance &#8599;</a>
            <a href='#'>Dribble &#8599;</a>
          </div> */}
            <div className='menu-info-col'>
              <p>hello@vilarnau</p>
              <p>030-56789012</p>
            </div>
          </div>
        </div>
        <div className='menu-preview'>
          <p>appointments &#8599;</p>
        </div>
      </div>
    </div>
  )
}

export default Menu;