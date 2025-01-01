'use client';

import { useRef, useState } from 'react';
import './menu.css';
import Link from 'next/link';

const menuLinks = [
  {path: '/', label: 'Home'},
  {path: '/prices', label: 'Prices'},
  {path: '/about', label: 'About'},
  {path: '/contact', label: 'Contact'},
]

const Menu = () => {
  const container = useRef()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return(
    <div className="menu-container" ref={container}>
      <div className='menu-bar'>
        <div className='menu-logo'>
          <Link href="/">VILARNAU</Link>
        </div>
        <div className='menu-open' onClick={toggleMenu}>
          <p className=''>MENU</p>
        </div>
      </div>
      <div className='menu-overlay'>
        <div className='menu-overlay-bar'>
          <div className='menu-logo'>
            <Link href="/">VILARNAU</Link>
          </div>
          <div className='menu-close' onClick={toggleMenu}>
            <p className=''>CLOSE</p>
          </div>
        </div>
        <div className='menu-close-icon'>
          <p className=''>&#x2715;</p>
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
          <div className='menu-info-col'>
            <a href='#'>X &#8599;</a>
            <a href='#'>Instagram &#8599;</a>
            <a href='#'>LinkedIn &#8599;</a>
            <a href='#'>Behance &#8599;</a>
            <a href='#'>Dribble &#8599;</a>
          </div>
            <div className='menu-info-col'>
              <p>hello@vilarnau</p>
              <p>030-56789012</p>
            </div>
          </div>
        </div>
        <div className='menu-preview'>
          <p>View Showreel</p>
        </div>
      </div>
    </div>
  )
}

export default Menu;