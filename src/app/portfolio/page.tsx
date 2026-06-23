import { FadeUp } from '@/components/animations/FadeUp';
import styles from './page.module.css';

export const metadata = {
  title: 'Enterprise Case Studies & Portfolio | Elvancore',
  description: 'Discover how Elvancore transforms global enterprises with custom software, AI integrations, and scalable cloud architectures.',
};

export default function PortfolioPage() {
  const caseStudies = [
    {
      client: 'GlobalFin Logistics',
      title: 'AI-Powered Supply Chain Routing Optimization',
      metrics: [
        { value: '40%', label: 'Efficiency Increase' },
        { value: '$12M', label: 'Annual Savings' }
      ],
      problem: 'GlobalFin relied on legacy manual routing systems resulting in high fuel costs, delayed shipments, and an inability to dynamically adjust to weather or traffic events across 15 countries.',
      solution: 'We architected a custom AI-driven routing engine using predictive machine learning models that ingest real-time geographic, weather, and traffic data to autonomously reroute shipments.',
      tech: ['Python', 'TensorFlow', 'AWS SageMaker', 'Next.js', 'PostgreSQL'],
    },
    {
      client: 'HealthSync Networks',
      title: 'HIPAA-Compliant Patient Data Fabric',
      metrics: [
        { value: '99.99%', label: 'Uptime SLA' },
        { value: '2.5M+', label: 'Patients Migrated' }
      ],
      problem: 'A fragmented network of 40+ regional hospitals could not securely share patient records, leading to redundant testing and severe compliance risks.',
      solution: 'We built a unified, highly-secure data fabric on Azure. The system utilizes end-to-end encryption and a microservices architecture to provide instantaneous, secure record retrieval for authorized personnel.',
      tech: ['Node.js', 'Kubernetes', 'Microsoft Azure', 'React', 'MongoDB'],
    },
    {
      client: 'RetailEdge',
      title: 'Enterprise Headless E-commerce Migration',
      metrics: [
        { value: '300%', label: 'Speed Increase' },
        { value: '45%', label: 'Cart Abandonment Drop' }
      ],
      problem: 'Their monolithic e-commerce platform was collapsing under Black Friday loads, and the monolithic architecture made deploying new UI features a months-long ordeal.',
      solution: 'We decoupled their frontend from the backend (Headless Commerce), implementing a globally distributed edge network with Next.js and migrating the backend to scalable serverless functions.',
      tech: ['Next.js', 'Vercel', 'Stripe', 'GraphQL', 'AWS Lambda'],
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <FadeUp>
          <h1 className={styles.title}>Client Success Stories</h1>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className={styles.desc}>We don't just write code; we engineer business transformations. Explore how we have generated measurable ROI for global enterprises.</p>
        </FadeUp>
      </div>

      <div className={styles.caseGrid}>
        {caseStudies.map((cs, idx) => (
          <FadeUp key={idx} delay={0.1}>
            <div className={styles.caseCard}>
              <div className={styles.caseImage}>
                <div className={styles.caseImageInner}>
                  {cs.client} Application Interface Placeholder
                </div>
              </div>
              <div className={styles.caseContent}>
                <div className={styles.clientName}>{cs.client}</div>
                <h2 className={styles.caseTitle}>{cs.title}</h2>
                
                <div className={styles.metricsGrid}>
                  {cs.metrics.map((m, i) => (
                    <div key={i} className={styles.metric}>
                      <div className={styles.metricValue}>{m.value}</div>
                      <div className={styles.metricLabel}>{m.label}</div>
                    </div>
                  ))}
                </div>

                <div className={styles.caseSection}>
                  <h4>The Challenge</h4>
                  <p>{cs.problem}</p>
                </div>

                <div className={styles.caseSection}>
                  <h4>The Solution</h4>
                  <p>{cs.solution}</p>
                </div>

                <div className={styles.techStack}>
                  {cs.tech.map((t, i) => (
                    <span key={i} className={styles.techTag}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  );
}
