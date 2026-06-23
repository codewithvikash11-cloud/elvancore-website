import { FadeUp } from '@/components/animations/FadeUp';
import styles from '../privacy-policy/page.module.css';

export const metadata = { title: 'Frequently Asked Questions | Elvancore', description: 'Common questions about Elvancore enterprise IT services.' };

export default function FAQPage() {
  return (
    <div className={styles.container}>
      <FadeUp>
        <div className={styles.header}>
          <h1 className={styles.title}>Frequently Asked Questions</h1>
        </div>
        <div className={styles.content}>
          <h2>What is Elvancore's typical engagement model?</h2>
          <p>We operate primarily on dedicated team (staff augmentation) and fixed-price project models. For enterprise transformations, we prefer a dedicated team model integrated directly with your stakeholders for maximum agility.</p>

          <h2>Where are your engineering teams located?</h2>
          <p>We are a remote-first, globally distributed company. Our primary engineering hubs are located in North America, the UK, and India, allowing us to provide "follow-the-sun" 24/7 development and support cycles.</p>

          <h2>Do you sign Non-Disclosure Agreements (NDAs)?</h2>
          <p>Absolutely. We protect our clients' intellectual property rigorously. NDAs are signed before any technical discovery or code-sharing takes place.</p>
        </div>
      </FadeUp>
    </div>
  );
}
