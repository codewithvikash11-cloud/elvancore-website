import Link from 'next/link';
import { ArrowRight, ShieldCheck, Activity, Database, Server, Lock, Code2, Cpu, Smartphone, Blocks, Cloud, Megaphone, CheckCircle } from 'lucide-react';
import styles from './page.module.css';
import { FadeUp } from '@/components/animations/FadeUp';
import { ScaleIn } from '@/components/animations/ScaleIn';
import { InfiniteMarquee } from '@/components/animations/InfiniteMarquee';

export default function Home() {
  const services = [
    { title: 'Web Development', count: 75, icon: <Code2 size={32} /> },
    { title: 'AI Development', count: 70, icon: <Cpu size={32} /> },
    { title: 'Mobile Apps', count: 65, icon: <Smartphone size={32} /> },
    { title: 'WordPress', count: 60, icon: <Blocks size={32} /> },
    { title: 'Blockchain', count: 50, icon: <Database size={32} /> },
    { title: 'Cloud & DevOps', count: 50, icon: <Cloud size={32} /> },
    { title: 'Cybersecurity', count: 50, icon: <Lock size={32} /> },
    { title: 'Digital Marketing', count: 50, icon: <Megaphone size={32} /> },
    { title: 'Enterprise Software', count: 50, icon: <Server size={32} /> },
  ];

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          <div className={styles.heroContent}>
            <FadeUp>
              <h1 className={styles.heroTitle}>
                Architecting <span className={styles.highlight}>$100M+</span> Digital Ecosystems
              </h1>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className={styles.heroSubtitle}>
                Elvancore is the premier technology partner for Fortune 500s and global enterprises. We engineer secure, scalable, and intelligent software architectures that dominate markets.
              </p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <div className={styles.ctaGroup}>
                <Link href="/contact" style={{ textDecoration: 'none' }}>
                  <button className={styles.primaryBtn}>
                    Book Consultation <ArrowRight size={20} />
                  </button>
                </Link>
              </div>
            </FadeUp>
            <FadeUp delay={0.4}>
              <div className={styles.trustBadges}>
                <div className={styles.trustBadge}><CheckCircle size={16} /> SOC 2 Certified</div>
                <div className={styles.trustBadge}><CheckCircle size={16} /> ISO 27001</div>
                <div className={styles.trustBadge}><CheckCircle size={16} /> GDPR Compliant</div>
              </div>
            </FadeUp>
          </div>
          
          <ScaleIn delay={0.3}>
            {/* 3D Code/Dashboard Visual */}
            <div className={styles.dashboardMockup}>
              <div className={styles.dashHeader}>
                <div className={styles.dashDot} style={{ background: '#ef4444' }} />
                <div className={styles.dashDot} style={{ background: '#eab308' }} />
                <div className={styles.dashDot} style={{ background: '#22c55e' }} />
                <div style={{ marginLeft: '1rem', color: 'var(--muted-foreground)', fontSize: '0.85rem', fontFamily: 'var(--font-space-grotesk)' }}>sys.monitoring.cluster-01</div>
              </div>
              <div className={styles.dashBody}>
                <div className={styles.dashGraph}>
                  <div className={styles.dashGraphLine}></div>
                  <div style={{ padding: '1.5rem' }}>
                    <div style={{ color: 'var(--muted-foreground)', fontSize: '0.9rem' }}>REAL-TIME THROUGHPUT</div>
                    <div style={{ fontSize: '2.5rem', fontWeight: 700, fontFamily: 'var(--font-space-grotesk)' }}>4.2M <span style={{ fontSize: '1rem', color: 'var(--success)' }}>req/s</span></div>
                  </div>
                </div>
                <div className={styles.dashSidebar}>
                  <div className={styles.dashMetric}>
                    <Activity size={24} style={{ color: 'var(--primary)', marginBottom: '0.5rem' }} />
                    <div style={{ fontSize: '1.2rem', fontWeight: 700 }}>99.999%</div>
                    <div style={{ color: 'var(--muted-foreground)', fontSize: '0.8rem' }}>SLA UPTIME</div>
                  </div>
                  <div className={styles.dashMetric}>
                    <ShieldCheck size={24} style={{ color: 'var(--secondary)', marginBottom: '0.5rem' }} />
                    <div style={{ fontSize: '1.2rem', fontWeight: 700 }}>Zero</div>
                    <div style={{ color: 'var(--muted-foreground)', fontSize: '0.8rem' }}>BREACHES</div>
                  </div>
                </div>
              </div>
            </div>
          </ScaleIn>
        </div>
      </section>

      {/* Trust Bar / Logos */}
      <section style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'var(--card)' }}>
        <InfiniteMarquee>
          <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--muted-foreground)', display: 'flex', gap: '5rem', alignItems: 'center' }}>
            <span>MICROSOFT PARTNER</span>
            <span>AWS ADVANCED TIER</span>
            <span>GOOGLE CLOUD</span>
            <span>OPENAI ENTERPRISE</span>
            <span>STRIPE VERIFIED</span>
            <span>PALANTIR FOUNDRY</span>
            <span>SNOWFLAKE</span>
            <span>DATADOG</span>
          </div>
        </InfiniteMarquee>
      </section>

      {/* Massive Services Grid */}
      <section className={styles.section}>
        <FadeUp>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Global Engineering Divisions</h2>
            <p className={styles.sectionDesc}>Our 9 specialized divisions deliver end-to-end technical excellence across 500+ specific technological disciplines.</p>
          </div>
        </FadeUp>
        
        <div className={styles.servicesGrid}>
          {services.map((service, idx) => (
            <FadeUp key={idx} delay={idx * 0.1}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceCount}>{service.count} SERVICES</div>
                <div style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>{service.icon}</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{service.title}</h3>
                <p style={{ color: 'var(--muted-foreground)', marginBottom: '1.5rem' }}>Enterprise-grade architecture, deployment, and management.</p>
                <Link href="/services" style={{ color: 'var(--primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  Explore Division <ArrowRight size={16} />
                </Link>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Founder Preview Section */}
      <section className={styles.founderPreview}>
        <div className={styles.founderPreviewGrid}>
          <ScaleIn>
            <div className={styles.fpImageWrapper}>
              <div className={styles.fpImageInner}>
                <img src="/Vikash%20Khadoliya.jpeg" alt="Vikash Khadoliya - Founder & CEO" />
              </div>
            </div>
          </ScaleIn>
          
          <div>
            <FadeUp>
              <div style={{ display: 'inline-block', fontSize: '12px', fontWeight: 700, color: 'var(--primary)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem', background: 'rgba(37,99,235,0.1)', padding: '0.5rem 1rem', borderRadius: '4px', border: '1px solid rgba(37,99,235,0.2)' }}>
                Founder & CEO
              </div>
              <h2 className={styles.sectionTitle} style={{ marginBottom: '1.5rem', fontSize: '3rem' }}>Vikash Khadoliya</h2>
              <p className={styles.sectionDesc} style={{ marginBottom: '2rem' }}>
                Building AI-powered applications, SaaS platforms, enterprise software, and digital transformation solutions for modern businesses worldwide.
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className={styles.fpMetrics}>
                <div className={styles.fpMetric}>
                  <span className={styles.fpMetricValue}>3+ Years</span>
                  <span className={styles.fpMetricLabel}>Experience</span>
                </div>
                <div className={styles.fpMetric}>
                  <span className={styles.fpMetricValue}>Full Stack</span>
                  <span className={styles.fpMetricLabel}>Engineer</span>
                </div>
                <div className={styles.fpMetric}>
                  <span className={styles.fpMetricValue}>AI & SaaS</span>
                  <span className={styles.fpMetricLabel}>Specialist</span>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                <Link href="/founder" className={styles.primaryBtn}>
                  Meet The Founder <ArrowRight size={18} />
                </Link>
                <Link href="/founder" className={styles.fpSecondaryBtn}>
                  Read Full Story
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Global Presence Map Placeholder */}
      <section className={`${styles.section} ${styles.sectionDark}`}>
        <FadeUp>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Global Infrastructure</h2>
            <p className={styles.sectionDesc}>Deploying mission-critical systems across 15+ countries and 4 continents.</p>
          </div>
        </FadeUp>
        <ScaleIn delay={0.2}>
          <div className={styles.worldMap}>
            <div style={{ position: 'absolute', zIndex: 2, color: 'rgba(255,255,255,0.1)', fontSize: '10rem', fontWeight: 900, fontFamily: 'var(--font-space-grotesk)' }}>GLOBAL REACH</div>
            <div className={styles.mapDot} style={{ top: '30%', left: '20%' }}></div>
            <div className={styles.mapDot} style={{ top: '40%', left: '25%' }}></div>
            <div className={styles.mapDot} style={{ top: '25%', left: '50%' }}></div>
            <div className={styles.mapDot} style={{ top: '35%', left: '55%' }}></div>
            <div className={styles.mapDot} style={{ top: '50%', left: '70%' }}></div>
            <div className={styles.mapDot} style={{ top: '60%', left: '75%' }}></div>
          </div>
        </ScaleIn>
      </section>

      {/* Interactive CTA Block */}
      <section className={styles.section}>
        <FadeUp>
          <div className={styles.ctaBlock}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Ready to Scale?</h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--muted-foreground)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
              Bypass the technical debt. Partner with Elvancore to architect solutions that define the future of your industry.
            </p>
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <button className={styles.primaryBtn} style={{ margin: '0 auto' }}>
                Request Architecture Proposal
              </button>
            </Link>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
