import styles from './page.module.css';
import { FadeUp } from '@/components/animations/FadeUp';

export const metadata = { title: 'Privacy Policy | Elvancore', description: 'Privacy Policy and Data Protection guidelines for Elvancore.' };

export default function PrivacyPolicy() {
  return (
    <div className={styles.container}>
      <FadeUp>
        <div className={styles.header}>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.lastUpdated}>Last Updated: October 2026</p>
        </div>
        <div className={styles.content}>
          <p>At Elvancore Software Solutions, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our enterprise services.</p>
          
          <h2>1. Information We Collect</h2>
          <p>We may collect information about you in a variety of ways. The information we may collect includes:</p>
          <ul>
            <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, corporate email address, and telephone number.</li>
            <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the site, such as your IP address, your browser type, and your operating system.</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you to:</p>
          <ul>
            <li>Provide enterprise IT services and support.</li>
            <li>Respond to product and customer service requests.</li>
            <li>Perform internal analytics to improve our website and services.</li>
          </ul>

          <h2>3. Data Security & GDPR Compliance</h2>
          <p>We use administrative, technical, and physical security measures to help protect your personal information. Elvancore is fully compliant with GDPR, HIPAA (where applicable), and SOC2 standards for data handling.</p>
        </div>
      </FadeUp>
    </div>
  );
}
