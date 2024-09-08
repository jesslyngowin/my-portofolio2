import React, { useState } from 'react';

import styles from './Navbar.module.css';
import { getImageUrl } from '../../utils/utils';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      {/* <a className={styles.title} href="/" >Portfolio</a> */}
      <a  href="/"><img className={styles.title} type="image/svg+xml" src={getImageUrl("logo.svg")}/></a>
      <div className={styles.menu}> 
        <img 
          className={styles.menuBtn} 
          src={menuOpen 
            ? getImageUrl('nav/closeIcon.png') 
            : getImageUrl('nav/menuIcon.png')}
          onClick={() => setMenuOpen(!menuOpen)}
        />
        
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >

          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contacts">Contacts</a></li>
          
        </ul>
      </div>
    </nav>
  );
};