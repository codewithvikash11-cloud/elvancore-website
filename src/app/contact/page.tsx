'use client';

import { Mail, MapPin, Phone } from 'lucide-react';
import styles from './page.module.css';

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <div className={`${styles.header} fade-in`}>
        <h1 className={styles.title}>Let&apos;s Build the Future Together</h1>
        <p className={styles.desc}>Reach out to our experts to discuss your project, request a quote, or explore partnership opportunities.</p>
      </div>

      <div className={styles.content}>
        <div className={styles.infoColumn}>
          <div className={`${styles.infoCard} slide-up`} style={{ animationDelay: '0.1s' }}>
            <div className={styles.infoIcon}><Mail size={24} /></div>
            <div>
              <h3 className={styles.infoTitle}>Email Us</h3>
              <p className={styles.infoDetails}>
                Sales: sales@elvancore.com<br />
                Support: support@elvancore.com<br />
                Careers: careers@elvancore.com
              </p>
            </div>
          </div>

          <div className={`${styles.infoCard} slide-up`} style={{ animationDelay: '0.2s' }}>
            <div className={styles.infoIcon}><MapPin size={24} /></div>
            <div>
              <h3 className={styles.infoTitle}>Global Offices</h3>
              <p className={styles.infoDetails}>
                <strong>USA:</strong> 123 Tech Lane, San Francisco, CA<br />
                <strong>UK:</strong> 45 Innovation Way, London<br />
                <strong>India:</strong> 78 IT Park, Bangalore
              </p>
            </div>
          </div>

          <div className={`${styles.infoCard} slide-up`} style={{ animationDelay: '0.3s' }}>
            <div className={styles.infoIcon}><Phone size={24} /></div>
            <div>
              <h3 className={styles.infoTitle}>Call Us</h3>
              <p className={styles.infoDetails}>
                US: +1 (555) 123-4567<br />
                UK: +44 20 7123 4567<br />
                IN: +91 98765 43210
              </p>
            </div>
          </div>
        </div>

        <div className={`${styles.formColumn} slide-up`} style={{ animationDelay: '0.4s' }}>
          <h2 className={styles.formTitle}>Send a Message</h2>
          <form onSubmit={(e) => { e.preventDefault(); alert("Message sent! (Simulated)"); }}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>Full Name</label>
              <input type="text" id="name" className={styles.input} placeholder="John Doe" required />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Business Email</label>
              <input type="email" id="email" className={styles.input} placeholder="john@company.com" required />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="service" className={styles.label}>Service of Interest</label>
              <select id="service" className={styles.input} required>
                <option value="">Select a service...</option>
                <option value="custom-software">Custom Software Development</option>
                <option value="ai-development">AI Development</option>
                <option value="cloud">Cloud Solutions</option>
                <option value="mobile">Mobile App Development</option>
                <option value="other">Other Inquiry</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>Project Details</label>
              <textarea id="message" className={styles.textarea} placeholder="Tell us about your requirements..." required></textarea>
            </div>

            <button type="submit" className={styles.submitBtn}>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}
