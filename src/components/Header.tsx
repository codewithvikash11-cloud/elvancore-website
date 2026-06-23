'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from './ThemeProvider';
import { Moon, Sun, Menu, ChevronDown, ChevronRight } from 'lucide-react';
import styles from './Header.module.css';
import { Logo } from './Logo';
import { servicesData } from '@/data/services';

export function Header() {
  const { theme, toggleTheme, mounted } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : 'glass'}`}>
      <Link href="/" className={styles.logo}>
        <Logo width={36} height={36} />
      </Link>

      <nav className={styles.nav}>
        <div className={styles.navItem}>
          <Link href="/" className={styles.navLink}>Home</Link>
        </div>
        
        <div className={styles.navItem}>
          <div className={styles.navLink} style={{ cursor: 'pointer' }}>
            Capabilities <ChevronDown size={16} />
          </div>
          <div className={styles.megaMenu}>
            <div className={styles.megaGrid}>
              {servicesData.map((category) => (
                <Link key={category.categoryId} href={`/services`} className={styles.categoryCard}>
                  <h3 className={styles.categoryCardTitle}>{category.categoryTitle.toUpperCase()}</h3>
                  <div className={styles.categoryCardCount}>{category.count} SERVICES</div>
                  <div className={styles.categoryCardLink}>Explore Capabilities <ChevronRight size={14} /></div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.navItem}>
          <Link href="/industries" className={styles.navLink}>Industries</Link>
        </div>
        <div className={styles.navItem}>
          <Link href="/portfolio" className={styles.navLink}>Portfolio</Link>
        </div>
        <div className={styles.navItem}>
          <Link href="/about" className={styles.navLink}>Company</Link>
        </div>
        <div className={styles.navItem}>
          <Link href="/careers" className={styles.navLink}>Careers</Link>
        </div>
      </nav>

      <div className={styles.actions}>
        {mounted && (
          <button onClick={toggleTheme} className={styles.themeToggle} aria-label="Toggle Theme">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        )}
        <Link href="/contact" style={{ textDecoration: 'none' }}>
          <button className={styles.ctaButton}>Book Consultation</button>
        </Link>
        <button className={`${styles.themeToggle} ${styles.mobileMenuBtn}`} aria-label="Menu">
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
}
