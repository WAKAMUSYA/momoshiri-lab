"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContent}`}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          🍑 桃尻研究所
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          <Link href="/about" className={styles.navLink}>
            運営者情報
          </Link>
          <Link href="/#about" className="btn-primary" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>
            はじめる
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button 
          className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`} 
          onClick={toggleMenu}
          aria-label="メニューを開く"
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>

        {/* Mobile Menu Overlay */}
        <div 
          className={`${styles.overlay} ${isMenuOpen ? styles.open : ''}`} 
          onClick={closeMenu}
        ></div>

        {/* Mobile Menu Panel */}
        <nav className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
          <Link href="/" className={styles.navLink} onClick={closeMenu}>ホーム</Link>
          <Link href="/about" className={styles.navLink} onClick={closeMenu}>運営者情報</Link>
          <Link href="/#about" className="btn-primary" style={{ padding: '8px 20px', fontSize: '0.9rem', textAlign: 'center', marginTop: '1rem' }} onClick={closeMenu}>
            はじめる
          </Link>
        </nav>
      </div>
    </header>
  );
}
