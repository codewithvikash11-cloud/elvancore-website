import { FadeUp } from '@/components/animations/FadeUp';
import { Code2, BrainCircuit, Cloud, Smartphone, Globe, Shield } from 'lucide-react';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Enterprise IT Services | Elvancore Software Solutions',
  description: 'Explore Elvancore\'s comprehensive suite of enterprise IT services including Custom Software, AI Development, Cloud Infrastructure, and Cybersecurity.',
};

export default function ServicesPage() {
  const services = [
    {
      id: 'custom-software',
      title: 'Custom Software Engineering',
      icon: <Code2 size={48} />,
      desc: 'Bespoke enterprise applications, scalable ERPs, and high-performance CRMs built with robust modern architectures.',
      link: '/services/custom-software'
    },
    {
      id: 'ai',
      title: 'Applied Artificial Intelligence',
      icon: <BrainCircuit size={48} />,
      desc: 'Custom LLM integration, predictive analytics, and autonomous AI agents designed to automate operations.',
      link: '/services/ai'
    },
    {
      id: 'cloud',
      title: 'Cloud & DevOps Infrastructure',
      icon: <Cloud size={48} />,
      desc: 'Zero-downtime migrations, Kubernetes orchestration, and automated CI/CD pipelines deployed across AWS/Azure.',
      link: '/services/cloud'
    },
    {
      id: 'mobile',
      title: 'Mobile Platform Development',
      icon: <Smartphone size={48} />,
      desc: 'Native iOS/Android and cross-platform mobile solutions that provide native-level performance and security.',
      link: '/services/mobile'
    },
    {
      id: 'design',
      title: 'UI/UX Design',
      icon: <Globe size={48} />,
      desc: 'Award-winning user experience architecture for complex enterprise portals and consumer-facing applications.',
      link: '/services/design'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity & Compliance',
      icon: <Shield size={48} />,
      desc: 'Military-grade penetration testing, continuous security monitoring, and compliance auditing for SOC2/GDPR.',
      link: '/services/cybersecurity'
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <FadeUp>
          <h1 className={styles.title}>Enterprise Services Hub</h1>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className={styles.desc}>End-to-end technical excellence across the entire digital ecosystem. Explore our specialized practice areas below.</p>
        </FadeUp>
      </div>

      <div className={styles.grid}>
        {services.map((service, index) => (
          <FadeUp key={service.id} delay={index * 0.1}>
            <Link href={service.link} className={styles.serviceCard}>
              <div className={styles.iconWrapper}>{service.icon}</div>
              <h2 className={styles.serviceTitle}>{service.title}</h2>
              <p className={styles.serviceDesc}>{service.desc}</p>
              <div className={styles.learnMore}>Explore Capability &rarr;</div>
            </Link>
          </FadeUp>
        ))}
      </div>
    </div>
  );
}
