import { servicesData } from '@/data/services';
import { notFound } from 'next/navigation';
import styles from './page.module.css';
import { FadeUp } from '@/components/animations/FadeUp';
import { ScaleIn } from '@/components/animations/ScaleIn';
import { ShieldCheck, Cpu, Code2, Zap, Layers } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

type Props = {
  params: { category: string; slug: string };
};

export function generateStaticParams() {
  const params: { category: string; slug: string }[] = [];
  servicesData.forEach((category) => {
    category.services.forEach((service) => {
      params.push({ category: category.categoryId, slug: service.slug });
    });
  });
  return params;
}

export function generateMetadata({ params }: Props): Metadata {
  const category = servicesData.find(c => c.categoryId === params.category);
  const service = category?.services.find(s => s.slug === params.slug);

  if (!service) return { title: 'Service Not Found | Elvancore' };

  return {
    title: `${service.title} | Elvancore Enterprise Services`,
    description: service.overview,
  };
}

export default function DynamicServicePage({ params }: Props) {
  const category = servicesData.find(c => c.categoryId === params.category);
  const service = category?.services.find(s => s.slug === params.slug);

  if (!service || !category) {
    notFound();
  }

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.glowBubble}></div>
        <div className={styles.heroContent}>
          <FadeUp>
            <div className={styles.categoryBadge}>{category.categoryTitle}</div>
            <h1 className={styles.title}>{service.title}</h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className={styles.overview}>{service.overview}</p>
          </FadeUp>
        </div>
      </section>

      <section className={styles.section}>
        <FadeUp>
          <h2 className={styles.sectionTitle}>Capabilities & Benefits</h2>
        </FadeUp>
        <div className={styles.grid2}>
          <div>
            <h3 style={{ marginBottom: '2rem', fontSize: '2rem', color: 'var(--primary)' }}>Key Features</h3>
            <ul className={styles.featureList}>
              {service.features.map((feat, i) => (
                <FadeUp key={i} delay={i * 0.1}>
                  <li className={styles.featureItem}>
                    <Code2 className={styles.featureIcon} size={24} />
                    <span className={styles.featureText}>{feat}</span>
                  </li>
                </FadeUp>
              ))}
            </ul>
          </div>
          <div>
            <h3 style={{ marginBottom: '2rem', fontSize: '2rem', color: 'var(--secondary)' }}>Business Benefits</h3>
            <ul className={styles.featureList}>
              {service.benefits.map((ben, i) => (
                <FadeUp key={i} delay={i * 0.1}>
                  <li className={styles.featureItem} style={{ borderColor: 'rgba(0, 229, 168, 0.2)' }}>
                    <Zap className={styles.featureIcon} size={24} style={{ color: 'var(--secondary)' }} />
                    <span className={styles.featureText}>{ben}</span>
                  </li>
                </FadeUp>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section} style={{ background: 'var(--surface)' }}>
        <FadeUp>
          <h2 className={styles.sectionTitle}>Technology Stack</h2>
        </FadeUp>
        <div className={styles.techGrid}>
          {service.techStack.map((tech, i) => (
            <ScaleIn key={i} delay={i * 0.05}>
              <div className={styles.techTag}>{tech}</div>
            </ScaleIn>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <FadeUp>
          <h2 className={styles.sectionTitle}>Use Cases</h2>
        </FadeUp>
        <div className={styles.grid2}>
          {service.useCases.map((uc, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div className={styles.faqItem}>
                <Layers className={styles.featureIcon} size={32} style={{ marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{uc}</h3>
                <p style={{ color: 'var(--muted-foreground)' }}>Empowering {uc.toLowerCase()} with state-of-the-art architectures designed for maximum scalability and zero-downtime.</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <FadeUp>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
        </FadeUp>
        <div>
          {service.faq.map((item, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div className={styles.faqItem}>
                <div className={styles.faqQ}>{item.q}</div>
                <div className={styles.faqA}>{item.a}</div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <FadeUp>
          <h2 className={styles.ctaTitle}>Accelerate Your Digital Transformation</h2>
        </FadeUp>
        <FadeUp delay={0.2}>
          <Link href="/contact">
            <button className={styles.ctaBtn}>Talk to a Solutions Architect</button>
          </Link>
        </FadeUp>
      </section>
    </>
  );
}
