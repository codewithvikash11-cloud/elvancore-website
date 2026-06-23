import { FadeUp } from '@/components/animations/FadeUp';
import { ScaleIn } from '@/components/animations/ScaleIn';
import { Target, Lightbulb, ShieldCheck, Globe, Users } from 'lucide-react';
import styles from './page.module.css';

export const metadata = {
  title: 'About Us | Elvancore Software Solutions',
  description: 'Learn about Elvancore\'s mission to empower global enterprises through cutting-edge AI, robust cloud infrastructure, and transformative digital solutions.',
};

export default function AboutPage() {
  const leaders = [
    { name: 'Dr. Sarah Jenkins', role: 'Founder & CEO', bio: 'Former VP of Engineering at a Fortune 50 tech giant. Dr. Jenkins founded Elvancore to bridge the gap between enterprise legacy systems and modern AI infrastructure.' },
    { name: 'Michael Chen', role: 'Chief Technology Officer', bio: 'Pioneer in distributed systems and cloud architecture. Michael leads our core technology strategy and enterprise infrastructure divisions.' },
    { name: 'Elena Rodriguez', role: 'Head of Engineering', bio: 'With 15 years in software architecture, Elena manages our global engineering teams, ensuring delivery of scalable, zero-downtime applications.' },
    { name: 'Dr. Amit Patel', role: 'Director of Artificial Intelligence', bio: 'Renowned ML researcher. Amit heads our applied AI lab, developing custom LLMs and predictive models for our enterprise clients.' },
    { name: 'James O\'Connor', role: 'Product Director', bio: 'Specialist in enterprise SaaS product lifecycles. James ensures our technical solutions directly solve complex business challenges.' },
    { name: 'Sophia Kim', role: 'Design Director (UI/UX)', bio: 'Award-winning UX architect. Sophia ensures all enterprise applications are intuitive, accessible, and elegantly designed.' },
    { name: 'Marcus Sterling', role: 'Global Sales Director', bio: 'Driving international expansion across North America, Europe, and Asia Pacific markets.' },
    { name: 'Rachel Greene', role: 'HR Director', bio: 'Building our global remote-first culture and acquiring the top 1% of engineering talent worldwide.' },
    { name: 'David Hassan', role: 'Operations Director', bio: 'Ensuring seamless project delivery, resource allocation, and operational excellence across all global offices.' }
  ];

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <FadeUp>
          <h1 className={styles.title}>Engineering the Future, Today.</h1>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className={styles.subtitle}>
            Elvancore is a premier global software development and IT consulting firm. We partner with the world's most ambitious organizations to design, build, and scale mission-critical digital products.
          </p>
        </FadeUp>
      </section>

      <section className={styles.storySection}>
        <FadeUp>
          <div className={styles.storyContent}>
            <h2>Our Story</h2>
            <p>Founded on the belief that software should not just support a business, but actively drive it forward, Elvancore was established to solve the most complex engineering challenges faced by modern enterprises.</p>
            <p>What began as a specialized AI research lab has evolved into a global technology partner serving Fortune 500 companies across healthcare, finance, logistics, and retail. Our multi-disciplinary teams operate at the bleeding edge of technology, integrating artificial intelligence, cloud-native architectures, and robust cybersecurity into everything we build.</p>
            <p>We don't just write code; we engineer scalable, secure, and intuitive digital ecosystems that generate measurable ROI.</p>
          </div>
        </FadeUp>
        <ScaleIn delay={0.3}>
          <div className={styles.storyImage}>
            <Users size={64} opacity={0.2} />
            <div style={{ position: 'absolute', opacity: 0.5 }}>Corporate Headquarters [Placeholder]</div>
          </div>
        </ScaleIn>
      </section>

      <section className={styles.valuesSection}>
        <div className={styles.valuesHeader}>
          <FadeUp>
            <h2>Our Core Values</h2>
            <p style={{ color: 'var(--muted-foreground)' }}>The principles that guide our engineering and our culture.</p>
          </FadeUp>
        </div>
        <div className={styles.valuesGrid}>
          <FadeUp delay={0.1}>
            <div className={styles.valueCard}>
              <Target className={styles.valueIcon} size={40} />
              <h3>Uncompromising Excellence</h3>
              <p>We deliver enterprise-grade, flawlessly architected solutions. Good enough is never good enough when building mission-critical infrastructure.</p>
            </div>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className={styles.valueCard}>
              <Lightbulb className={styles.valueIcon} size={40} />
              <h3>Visionary Innovation</h3>
              <p>We lead with AI and next-generation technologies. We constantly research and integrate the latest advancements to keep our clients ahead of the curve.</p>
            </div>
          </FadeUp>
          <FadeUp delay={0.3}>
            <div className={styles.valueCard}>
              <ShieldCheck className={styles.valueIcon} size={40} />
              <h3>Absolute Integrity</h3>
              <p>Transparency, security, and trust form our foundation. We handle sensitive enterprise data with military-grade security protocols.</p>
            </div>
          </FadeUp>
          <FadeUp delay={0.4}>
            <div className={styles.valueCard}>
              <Globe className={styles.valueIcon} size={40} />
              <h3>Global Perspective</h3>
              <p>We build for diverse, international markets. Our distributed teams bring a worldwide perspective to solving complex local and global problems.</p>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className={styles.teamSection}>
        <div className={styles.valuesHeader}>
          <FadeUp>
            <h2>Executive Leadership</h2>
            <p style={{ color: 'var(--muted-foreground)', maxWidth: '600px', margin: '0 auto' }}>Meet the visionaries, engineers, and strategists steering Elvancore toward the future of digital innovation.</p>
          </FadeUp>
        </div>
        <div className={styles.teamGrid}>
          {leaders.map((leader, idx) => (
            <FadeUp key={idx} delay={idx * 0.1}>
              <div className={styles.teamCard}>
                <div className={styles.teamPhoto}>
                  Professional Headshot
                </div>
                <div className={styles.teamInfo}>
                  <div className={styles.teamHeader}>
                    <div>
                      <h3 className={styles.teamName}>{leader.name}</h3>
                      <div className={styles.teamRole}>{leader.role}</div>
                    </div>
                    <a href="#" className={styles.linkedinBtn} aria-label="LinkedIn Profile">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                  </div>
                  <p className={styles.teamBio}>{leader.bio}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>
    </div>
  );
}
