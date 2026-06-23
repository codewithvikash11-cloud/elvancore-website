import { FadeUp } from '@/components/animations/FadeUp';
import { ScaleIn } from '@/components/animations/ScaleIn';
import { Code2, Server, Smartphone, Monitor, Database, Shield } from 'lucide-react';
import styles from './page.module.css';

export const metadata = {
  title: 'Custom Software Development Services | Elvancore',
  description: 'Enterprise-grade custom software development. We build scalable ERPs, CRMs, and complex web applications.',
};

export default function CustomSoftwarePage() {
  return (
    <>
      <section className={styles.hero}>
        <FadeUp>
          <h1 className={styles.title}>Custom Software Engineering</h1>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className={styles.subtitle}>
            Bespoke enterprise applications engineered for scale, security, and performance. We transform complex business requirements into elegant, high-performing digital realities.
          </p>
        </FadeUp>
      </section>

      <section className={`${styles.section} ${styles.sectionBg}`}>
        <FadeUp>
          <h2 className={styles.sectionTitle}>Key Capabilities</h2>
          <p className={styles.sectionDesc}>Our multidisciplinary engineering teams cover the entire software lifecycle, from system architecture to deployment.</p>
        </FadeUp>
        <div className={styles.grid}>
          <FadeUp delay={0.1}>
            <div className={styles.card}>
              <Server className={styles.cardIcon} size={40} />
              <h3 className={styles.cardTitle}>Enterprise ERP & CRM</h3>
              <p className={styles.cardDesc}>Custom-built resource planning and customer relationship systems tailored to your unique operational workflows, bypassing the limitations of off-the-shelf software.</p>
            </div>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className={styles.card}>
              <Monitor className={styles.cardIcon} size={40} />
              <h3 className={styles.cardTitle}>SaaS Platform Development</h3>
              <p className={styles.cardDesc}>Multi-tenant SaaS architectures designed for high availability, secure data segregation, and massive concurrent user scaling.</p>
            </div>
          </FadeUp>
          <FadeUp delay={0.3}>
            <div className={styles.card}>
              <Database className={styles.cardIcon} size={40} />
              <h3 className={styles.cardTitle}>Legacy System Modernization</h3>
              <p className={styles.cardDesc}>Risk-mitigated refactoring of legacy monoliths into scalable microservices architectures using Next.js, Node, and Kubernetes.</p>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className={styles.section}>
        <FadeUp>
          <h2 className={styles.sectionTitle}>Our Engineering Process</h2>
          <p className={styles.sectionDesc}>A rigorous, agile-based approach ensuring transparency, quality, and rapid time-to-market.</p>
        </FadeUp>
        <div className={styles.processGrid}>
          <ScaleIn delay={0.1}>
            <div className={styles.processCard}>
              <h3 className={styles.cardTitle}>Discovery & Architecture</h3>
              <p className={styles.cardDesc}>We map business constraints, define system architecture, and select the optimal technology stack.</p>
            </div>
          </ScaleIn>
          <ScaleIn delay={0.2}>
            <div className={styles.processCard}>
              <h3 className={styles.cardTitle}>Agile Sprints</h3>
              <p className={styles.cardDesc}>Iterative development with bi-weekly deliverables, ensuring constant alignment with business goals.</p>
            </div>
          </ScaleIn>
          <ScaleIn delay={0.3}>
            <div className={styles.processCard}>
              <h3 className={styles.cardTitle}>QA & Security Audit</h3>
              <p className={styles.cardDesc}>Automated testing pipelines and manual penetration testing before any production deployment.</p>
            </div>
          </ScaleIn>
          <ScaleIn delay={0.4}>
            <div className={styles.processCard}>
              <h3 className={styles.cardTitle}>CI/CD Deployment</h3>
              <p className={styles.cardDesc}>Zero-downtime deployment strategies using advanced DevOps pipelines.</p>
            </div>
          </ScaleIn>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionBg}`}>
        <FadeUp>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
        </FadeUp>
        <div className={styles.faqContainer}>
          <FadeUp delay={0.1}>
            <div className={styles.faqItem}>
              <div className={styles.faqQ}>What technology stacks do you specialize in?</div>
              <div className={styles.faqA}>We specialize in modern, high-performance stacks including React/Next.js for front-end, Node.js/Python for back-end, and AWS/Azure for cloud infrastructure.</div>
            </div>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className={styles.faqItem}>
              <div className={styles.faqQ}>How do you ensure data security?</div>
              <div className={styles.faqA}>Security is embedded into our SDLC. We employ encryption at rest and in transit, conduct routine penetration testing, and comply with SOC2/GDPR standards.</div>
            </div>
          </FadeUp>
          <FadeUp delay={0.3}>
            <div className={styles.faqItem}>
              <div className={styles.faqQ}>Do you provide post-launch support?</div>
              <div className={styles.faqA}>Yes, we offer comprehensive SLA-based support and maintenance contracts to ensure system stability and continuous feature iteration.</div>
            </div>
          </FadeUp>
        </div>
      </section>

      <ScaleIn delay={0.2}>
        <div className={styles.ctaBox}>
          <h2>Ready to Architect Your Solution?</h2>
          <p style={{ marginTop: '1rem', opacity: 0.9 }}>Connect with our technical directors to scope your next major engineering project.</p>
          <a href="/contact">
            <button className={styles.ctaBtn}>Book Technical Discovery</button>
          </a>
        </div>
      </ScaleIn>
    </>
  );
}
