import Link from 'next/link';
import { Logo } from './Logo';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.brand}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <Logo width={40} height={40} />
          </Link>
          <p className={styles.brandDesc}>
            Elvancore Software Solutions is a global enterprise technology partner, delivering bleeding-edge digital ecosystems, AI integration, and cloud architectures for Fortune 500 companies.
          </p>
          <div style={{ marginTop: '1rem' }}>
            <h4 className={styles.newsletterTitle}>Enterprise Insights</h4>
            <form className={styles.newsletterForm}>
              <input type="email" placeholder="Corporate Email Address" className={styles.newsletterInput} />
              <button type="button" className={styles.newsletterBtn}>Subscribe</button>
            </form>
          </div>
        </div>

        <div className={styles.column}>
          <h3>Core Capabilities</h3>
          <ul className={styles.links}>
            <li><Link href="/services" className={styles.link}>Web Development (75)</Link></li>
            <li><Link href="/services" className={styles.link}>AI Development (70)</Link></li>
            <li><Link href="/services" className={styles.link}>Mobile Apps (65)</Link></li>
            <li><Link href="/services" className={styles.link}>WordPress (60)</Link></li>
            <li><Link href="/services" className={styles.link}>Cloud & DevOps (50)</Link></li>
            <li><Link href="/services" className={styles.link}>Cybersecurity (50)</Link></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3>Industries Served</h3>
          <ul className={styles.links}>
            <li><Link href="/industries" className={styles.link}>Healthcare & Biotech</Link></li>
            <li><Link href="/industries" className={styles.link}>Financial Services</Link></li>
            <li><Link href="/industries" className={styles.link}>Logistics & Supply</Link></li>
            <li><Link href="/industries" className={styles.link}>Government</Link></li>
            <li><Link href="/industries" className={styles.link}>Real Estate</Link></li>
            <li><Link href="/industries" className={styles.link}>Telecommunications</Link></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3>Company</h3>
          <ul className={styles.links}>
            <li><Link href="/about" className={styles.link}>Corporate Overview</Link></li>
            <li><Link href="/founder" className={styles.link}>Founder & Leadership</Link></li>
            <li><Link href="/portfolio" className={styles.link}>Case Studies</Link></li>
            <li><Link href="/careers" className={styles.link}>Careers & Hiring</Link></li>
            <li><Link href="/contact" className={styles.link}>Global Offices</Link></li>
            <li><Link href="/contact" className={styles.link}>Partner Program</Link></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3>Legal & Compliance</h3>
          <ul className={styles.links}>
            <li><Link href="/privacy-policy" className={styles.link}>Privacy Policy</Link></li>
            <li><Link href="/privacy-policy" className={styles.link}>Terms of Service</Link></li>
            <li><Link href="/privacy-policy" className={styles.link}>SOC 2 Compliance</Link></li>
            <li><Link href="/privacy-policy" className={styles.link}>GDPR Data Processing</Link></li>
            <li><Link href="/privacy-policy" className={styles.link}>Cookie Policy</Link></li>
            <li><Link href="/faq" className={styles.link}>Support FAQ</Link></li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.copyright}>
          &copy; {new Date().getFullYear()} Elvancore Software Solutions LLC. All rights reserved.
        </div>
        <div className={styles.social}>
          <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a href="#" className={styles.socialIcon} aria-label="Twitter">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
          </a>
          <a href="#" className={styles.socialIcon} aria-label="GitHub">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
