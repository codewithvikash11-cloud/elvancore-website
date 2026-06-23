import { FadeUp } from '@/components/animations/FadeUp';
import { ScaleIn } from '@/components/animations/ScaleIn';
import { 
  ShieldCheck, Code, Server, Zap, Database, Smartphone, Cloud, Globe, 
  Briefcase, Award, Brain, Target, Star, Monitor, Cpu, TrendingUp, Users, CheckCircle2, Mic
} from 'lucide-react';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Vikash Khadoliya - Founder & CEO | Elvancore Software Solutions',
  description: 'The executive leadership profile of Vikash Khadoliya, Founder & CEO. Discover the vision behind Elvancore\'s enterprise software and AI solutions.',
};

export default function FounderPage() {
  const trustCards = [
    { label: 'Experience', value: '3+ Years', icon: <TrendingUp size={24} /> },
    { label: 'Role', value: 'Founder & CEO', icon: <Star size={24} /> },
    { label: 'Academic', value: 'BCA Graduate', icon: <Award size={24} /> },
    { label: 'Current', value: 'MCA Pursuing', icon: <Award size={24} /> },
    { label: 'Specialty', value: 'Full Stack Engineer', icon: <Code size={24} /> },
    { label: 'Focus', value: 'AI & SaaS Specialist', icon: <Brain size={24} /> },
    { label: 'Identity', value: 'Tech Entrepreneur', icon: <Briefcase size={24} /> },
    { label: 'Action', value: 'Problem Solver', icon: <Target size={24} /> },
    { label: 'Strategy', value: 'Digital Transformation', icon: <Globe size={24} /> },
    { label: 'Results', value: 'Business Growth', icon: <ShieldCheck size={24} /> }
  ];

  const counters = [
    { value: '3+', label: 'Years Experience' },
    { value: '15+', label: 'Projects Delivered' },
    { value: '5+', label: 'Products Built' },
    { value: '8+', label: 'Industries Served' },
    { value: '10+', label: 'Core Technologies' },
    { value: '100%', label: 'Client Satisfaction' }
  ];

  const expertise = [
    { 
      title: 'Full Stack Engineering', icon: <Code size={32} />, 
      desc: 'End-to-end architecture and deployment of high-performance web applications and systems.',
      impact: 'Reduces time-to-market by 40%' 
    },
    { 
      title: 'Enterprise Software', icon: <Server size={32} />, 
      desc: 'Scalable, secure internal tools, ERPs, and management systems for large-scale operations.',
      impact: 'Increases operational efficiency' 
    },
    { 
      title: 'SaaS Architecture', icon: <Database size={32} />, 
      desc: 'Multi-tenant cloud platforms designed for rapid global scaling and high availability.',
      impact: 'Enables massive revenue scaling' 
    },
    { 
      title: 'Artificial Intelligence', icon: <Brain size={32} />, 
      desc: 'Integration of LLMs, predictive models, and automation algorithms into business logic.',
      impact: 'Automates complex cognitive tasks' 
    },
    { 
      title: 'Business Automation', icon: <Zap size={32} />, 
      desc: 'Streamlining complex corporate workflows to eliminate manual overhead and errors.',
      impact: 'Reduces operational costs by 30%' 
    },
    { 
      title: 'Cloud Infrastructure', icon: <Cloud size={32} />, 
      desc: 'AWS and Google Cloud deployment, containerization, and infrastructure optimization.',
      impact: 'Ensures 99.99% system uptime' 
    }
  ];

  const timeline = [
    { year: 'Phase 01', title: 'Education & Foundation', desc: 'Completed Bachelor of Computer Applications (BCA), mastering computer science, software engineering principles, and core programming logic.' },
    { year: 'Phase 02', title: 'Engineering Execution', desc: 'Began building complex web applications, transitioning from basic front-end development into comprehensive Full Stack Engineering.' },
    { year: 'Phase 03', title: 'AI & SaaS Development', desc: 'Pivoted strategic focus toward high-margin SaaS platforms and integrating artificial intelligence to automate enterprise workflows.' },
    { year: 'Phase 04', title: 'Elvancore Launch', desc: 'Founded Elvancore Software Solutions to deliver enterprise-grade software and digital transformation services directly to global businesses.' },
    { year: 'Phase 05', title: 'Advanced Architecture', desc: 'Currently pursuing Master of Computer Applications (MCA) to deepen expertise in distributed enterprise architectures and advanced algorithms.' },
    { year: 'Phase 06', title: 'Global Expansion', desc: 'Strategically scaling Elvancore internationally to partner with major organizations and become a recognized leader in global technology.' }
  ];

  const topics = [
    'Artificial Intelligence', 'Enterprise Software', 'SaaS Innovation', 
    'Cloud Computing', 'Digital Transformation', 'Business Automation',
    'Tech Entrepreneurship', 'Full Stack Architecture'
  ];

  return (
    <div className={styles.pageWrapper}>
      {/* Executive Hero */}
      <section className={`${styles.section} ${styles.hero}`}>
        <div className={styles.heroContent}>
          <FadeUp>
            <div className={styles.executiveLabel}>FOUNDER & CHIEF EXECUTIVE OFFICER</div>
            <h1 className={styles.h1}>Vikash Khadoliya</h1>
            <p className={styles.heroSummary}>
              A technology entrepreneur and Full Stack Engineer focused on architecting AI-powered applications, scalable SaaS platforms, and enterprise software that drives massive digital transformation for global businesses.
            </p>
          </FadeUp>
          
          <FadeUp delay={0.2}>
            <div className={styles.heroButtons}>
              <Link href="/contact" className={styles.btnPrimary}>
                Schedule Consultation <ShieldCheck size={18} />
              </Link>
              <a href="#vision" className={styles.btnSecondary}>
                View Leadership Vision
              </a>
            </div>
          </FadeUp>
        </div>
        
        <div className={styles.heroImageContainer}>
          <ScaleIn delay={0.3}>
            <div className={styles.portraitWrapper}>
              <div className={styles.portraitGlow}></div>
              
              <div className={`${styles.floatingBadge} ${styles.badgeTopLeft}`}>
                <Star className={styles.badgeIcon} size={20} />
                <div>
                  <div style={{ fontSize: '10px', color: 'var(--muted-foreground)', fontWeight: 700, textTransform: 'uppercase' }}>Founder & CEO</div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#fff' }}>Leadership</div>
                </div>
              </div>
              
              <div className={`${styles.floatingBadge} ${styles.badgeTopRight}`}>
                <Brain className={styles.badgeIcon} size={20} />
                <div>
                  <div style={{ fontSize: '10px', color: 'var(--muted-foreground)', fontWeight: 700, textTransform: 'uppercase' }}>AI Specialist</div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#fff' }}>Innovation</div>
                </div>
              </div>

              <div className={`${styles.floatingBadge} ${styles.badgeCenterRight}`}>
                <Target className={styles.badgeIcon} size={20} />
                <div>
                  <div style={{ fontSize: '10px', color: 'var(--muted-foreground)', fontWeight: 700, textTransform: 'uppercase' }}>Tech Leader</div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#fff' }}>Strategy</div>
                </div>
              </div>

              <div className={`${styles.floatingBadge} ${styles.badgeBottomLeft}`}>
                <TrendingUp className={styles.badgeIcon} size={20} />
                <div>
                  <div style={{ fontSize: '10px', color: 'var(--muted-foreground)', fontWeight: 700, textTransform: 'uppercase' }}>3+ Years</div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#fff' }}>Experience</div>
                </div>
              </div>

              <div className={`${styles.floatingBadge} ${styles.badgeBottomRight}`}>
                <Code className={styles.badgeIcon} size={20} />
                <div>
                  <div style={{ fontSize: '10px', color: 'var(--muted-foreground)', fontWeight: 700, textTransform: 'uppercase' }}>Full Stack</div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#fff' }}>Engineering</div>
                </div>
              </div>

              <div className={styles.portraitFrame}>
                <div className={styles.portraitFrameInner}>
                  <img src="/Vikash%20Khadoliya.jpeg" alt="Vikash Khadoliya - Founder & CEO" />
                </div>
              </div>
            </div>
          </ScaleIn>
        </div>
      </section>

      {/* Why Trust Matrix */}
      <section className={styles.sectionDark} style={{ padding: '6rem 5%' }}>
        <FadeUp>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <h2 className={styles.h2}>Why Trust Vikash?</h2>
            <p className={styles.body} style={{ maxWidth: '600px' }}>
              Built on a foundation of rigorous academic computer science and proven real-world engineering capability.
            </p>
            <div className={styles.trustGrid}>
              {trustCards.map((card, i) => (
                <div key={i} className={styles.trustCard}>
                  <div className={styles.trustIcon}>{card.icon}</div>
                  <div>
                    <div style={{ fontSize: '11px', color: 'var(--muted-foreground)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '2px' }}>{card.label}</div>
                    <div className={styles.trustText}>{card.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </section>

      {/* Animated Executive Statistics */}
      <section className={styles.counterSection}>
        <FadeUp>
          <div className={styles.counterGrid}>
            {counters.map((c, i) => (
              <div key={i} className={styles.counterItem}>
                <div className={styles.counterValue}>{c.value}</div>
                <div className={styles.counterLabel}>{c.label}</div>
              </div>
            ))}
          </div>
        </FadeUp>
      </section>

      {/* Core Expertise V2 */}
      <section className={styles.section} id="expertise">
        <FadeUp>
          <h2 className={styles.h2}>Executive Engineering Capabilities</h2>
          <p className={styles.body} style={{ maxWidth: '700px' }}>
            Delivering high-end technical architecture and hands-on execution to build complex enterprise systems that scale globally.
          </p>
        </FadeUp>
        <div className={styles.expertiseGrid}>
          {expertise.map((item, i) => (
            <ScaleIn key={i} delay={i * 0.1}>
              <div className={styles.expertiseCard}>
                <div className={styles.expertiseIcon}>{item.icon}</div>
                <h3 className={styles.h3}>{item.title}</h3>
                <p className={styles.small}>{item.desc}</p>
                <div className={styles.impactBadge}>
                  <CheckCircle2 size={14} style={{ display: 'inline', marginRight: '4px', verticalAlign: '-2px' }} />
                  {item.impact}
                </div>
              </div>
            </ScaleIn>
          ))}
        </div>
      </section>

      {/* Visual Roadmap Timeline */}
      <section className={styles.sectionDark} style={{ padding: '8rem 5%' }} id="vision">
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '6rem' }} className="responsive-grid">
          <div>
            <FadeUp>
              <h2 className={styles.h2}>The Executive Roadmap</h2>
              <p className={styles.body}>
                The strategic evolution from software engineering foundations to global enterprise leadership and digital innovation.
              </p>
              
              <div style={{ background: 'var(--card)', padding: '2.5rem', borderRadius: '12px', border: '1px solid var(--border)', marginTop: '3rem' }}>
                <Monitor size={32} style={{ color: 'var(--primary)', marginBottom: '1.5rem' }} />
                <h3 className={styles.h3}>Vision</h3>
                <p className={styles.small} style={{ marginBottom: '2rem' }}>
                  To build Elvancore Software Solutions into a globally trusted technology conglomerate delivering enterprise-grade software and AI solutions across international markets.
                </p>
                <h3 className={styles.h3}>Mission</h3>
                <p className={styles.small}>
                  To empower enterprises through high-performance technology solutions that radically enhance efficiency, accelerate growth, and secure market dominance.
                </p>
              </div>
            </FadeUp>
          </div>
          
          <div>
            <div className={styles.timeline}>
              {timeline.map((item, idx) => (
                <FadeUp key={idx} delay={idx * 0.15}>
                  <div className={styles.timelineItem}>
                    <div className={styles.timelineDot}></div>
                    <div className={styles.timelineContent}>
                      <span className={styles.timelineYear}>{item.year}</span>
                      <h3 className={styles.h3} style={{ fontSize: '20px' }}>{item.title}</h3>
                      <p className={styles.small} style={{ margin: 0 }}>{item.desc}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Thought Leadership & Media */}
      <section className={styles.section}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem' }}>
          <div>
            <FadeUp>
              <h2 className={styles.h2}>Technology Leadership & Vision</h2>
              <p className={styles.body}>
                Actively exploring, developing, and architecting solutions across these critical technology vectors:
              </p>
              <div className={styles.topicGrid}>
                {topics.map((topic, i) => (
                  <div key={i} className={styles.topicBadge}>
                    <Cpu size={16} style={{ color: 'var(--primary)' }} />
                    {topic}
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
          
          <div>
            <FadeUp delay={0.2}>
              <h2 className={styles.h2}>Media & Recognition</h2>
              <p className={styles.body}>
                Professional focus areas and ongoing industry commitments:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem' }}>
                {[
                  { title: 'Innovation Focus', desc: 'Continuous R&D in AI and cloud architecture.' },
                  { title: 'Technology Leadership', desc: 'Guiding enterprise teams through digital transformation.' },
                  { title: 'Industry Research', desc: 'Analyzing SaaS scaling models and B2B software trends.' }
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                    <div style={{ background: 'rgba(37,99,235,0.1)', padding: '1rem', borderRadius: '8px', color: 'var(--primary)' }}>
                      <Mic size={24} />
                    </div>
                    <div>
                      <h3 className={styles.h3} style={{ fontSize: '18px', marginBottom: '0.25rem' }}>{item.title}</h3>
                      <p className={styles.small} style={{ margin: 0 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
      
      {/* Global CSS overrides for the responsive grid in this specific file */}
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 1024px) {
          .responsive-grid {
            grid-template-columns: 1fr !important;
            gap: 4rem !important;
          }
        }
      `}} />
    </div>
  );
}
