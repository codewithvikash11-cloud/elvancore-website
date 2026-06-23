import { FadeUp } from '@/components/animations/FadeUp';
import { HeartPulse, Landmark, Building2, ShoppingCart, Truck, Factory, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Industries We Empower | Elvancore Solutions',
  description: 'Specialized enterprise IT solutions for Healthcare, Finance, Real Estate, Retail, Manufacturing, and Logistics.',
};

export default function IndustriesPage() {
  const industries = [
    {
      id: 'healthcare',
      title: 'Healthcare & Life Sciences',
      icon: <HeartPulse size={48} />,
      desc: 'We build HIPAA-compliant telehealth platforms, EHR integrations, and AI-driven diagnostic tools that improve patient outcomes while ensuring absolute data security.',
      solutions: ['EHR/EMR Interoperability', 'Telemedicine Architectures', 'Predictive Patient Analytics'],
    },
    {
      id: 'finance',
      title: 'Finance & Banking',
      icon: <Landmark size={48} />,
      desc: 'Secure, high-frequency trading platforms, decentralized finance (DeFi) ledgers, and intelligent fraud detection systems for global financial institutions.',
      solutions: ['Algorithmic Trading Engines', 'Blockchain & Smart Contracts', 'AI Fraud Detection'],
    },
    {
      id: 'logistics',
      title: 'Logistics & Supply Chain',
      icon: <Truck size={48} />,
      desc: 'End-to-end supply chain visibility tools, autonomous AI routing engines, and predictive fleet maintenance systems to drastically reduce operational overhead.',
      solutions: ['AI Routing Optimization', 'IoT Fleet Tracking', 'Predictive Maintenance'],
    },
    {
      id: 'retail',
      title: 'Retail & E-commerce',
      icon: <ShoppingCart size={48} />,
      desc: 'Headless commerce architectures, personalized AI recommendation engines, and unified omnichannel inventory management systems.',
      solutions: ['Headless E-commerce', 'AI Recommendation Engines', 'Omnichannel Inventory'],
    },
    {
      id: 'manufacturing',
      title: 'Manufacturing (Industry 4.0)',
      icon: <Factory size={48} />,
      desc: 'Digital twin technologies, IoT sensor networks, and automated quality control systems powered by computer vision and machine learning.',
      solutions: ['IoT Sensor Integration', 'Digital Twin Modeling', 'Computer Vision QA'],
    },
    {
      id: 'real-estate',
      title: 'Real Estate & PropTech',
      icon: <Building2 size={48} />,
      desc: 'Virtual reality property tours, automated property management ERPs, and blockchain-based smart contract execution for real estate transactions.',
      solutions: ['VR Property Tours', 'PropTech ERP Systems', 'Smart Contract Leases'],
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <FadeUp>
          <h1 className={styles.title}>Industries We Empower</h1>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className={styles.desc}>We combine deep domain expertise with cutting-edge engineering to solve the unique, complex challenges of your specific industry.</p>
        </FadeUp>
      </div>

      <div className={styles.industryGrid}>
        {industries.map((ind, idx) => (
          <FadeUp key={ind.id} delay={idx * 0.1}>
            <div className={styles.industryCard}>
              <div className={styles.iconWrapper}>{ind.icon}</div>
              <h2 className={styles.industryTitle}>{ind.title}</h2>
              <p className={styles.industryDesc}>{ind.desc}</p>
              
              <ul className={styles.solutionList}>
                {ind.solutions.map((sol, i) => (
                  <li key={i}>
                    <ShieldCheck size={20} className={styles.checkIcon} />
                    {sol}
                  </li>
                ))}
              </ul>

              <Link href={`/contact?industry=${ind.id}`} className={styles.ctaLink}>
                Discuss {ind.title} Solutions &rarr;
              </Link>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  );
}
