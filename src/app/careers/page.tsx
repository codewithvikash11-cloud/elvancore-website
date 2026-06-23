import { FadeUp } from '@/components/animations/FadeUp';
import { ScaleIn } from '@/components/animations/ScaleIn';
import { Briefcase, MapPin, Clock, DollarSign, Laptop, Coffee, HeartPulse, GraduationCap, UploadCloud } from 'lucide-react';
import styles from './page.module.css';

export const metadata = {
  title: 'Careers & Hiring | Elvancore Software Solutions',
  description: 'Join Elvancore to engineer the future. View open roles, employee benefits, remote work culture, and our application process.',
};

export default function CareersPage() {
  const benefits = [
    { title: 'Work From Anywhere', icon: <Laptop size={40} />, desc: 'Fully remote and hybrid options. We believe talent is global, not restricted by zip codes.' },
    { title: 'Top Percentile Compensation', icon: <DollarSign size={40} />, desc: 'Highly competitive salaries, performance bonuses, and equity options for leadership roles.' },
    { title: 'Comprehensive Health', icon: <HeartPulse size={40} />, desc: 'Premium medical, dental, and vision insurance coverage for you and your dependents.' },
    { title: 'Continuous Learning', icon: <GraduationCap size={40} />, desc: '$3,000 annual learning stipend for courses, conferences, and certifications.' },
    { title: 'Flexible Schedules', icon: <Clock size={40} />, desc: 'Asynchronous workflows and flexible hours. We measure output, not hours tracked.' },
    { title: 'Global Retreats', icon: <Coffee size={40} />, desc: 'Annual all-expenses-paid company retreats to amazing locations worldwide to build team culture.' },
  ];

  const jobs = [
    { title: 'Senior AI Engineer', department: 'AI Engineering', location: 'Remote / US', type: 'Full-time' },
    { title: 'Full Stack React Developer', department: 'Software Engineering', location: 'London, UK', type: 'Hybrid' },
    { title: 'Cloud Solutions Architect', department: 'Cloud & DevOps', location: 'Bangalore, India', type: 'Full-time' },
    { title: 'UI/UX Product Designer', department: 'Design', location: 'Remote', type: 'Contract' },
    { title: 'Cybersecurity Analyst', department: 'Security', location: 'San Francisco, CA', type: 'Hybrid' },
  ];

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <FadeUp>
          <h1 className={styles.title}>Engineer Your Future With Us</h1>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className={styles.desc}>Join a world-class team of visionaries, developers, and architects. We are solving the most complex enterprise challenges using AI, cloud infrastructure, and modern engineering.</p>
        </FadeUp>
      </section>

      <section className={styles.section}>
        <FadeUp>
          <h2 className={styles.sectionTitle}>Why Elvancore?</h2>
          <p className={styles.sectionDesc}>We offer a culture of high performance, deep autonomy, and continuous innovation. Here is how we take care of our team.</p>
        </FadeUp>
        <div className={styles.benefits}>
          {benefits.map((benefit, index) => (
            <FadeUp key={index} delay={index * 0.1}>
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionBg}`}>
        <FadeUp>
          <h2 className={styles.sectionTitle}>Our Hiring Process</h2>
          <p className={styles.sectionDesc}>We respect your time. Our streamlined process is designed to be rigorous but incredibly fast, typically completing in under 14 days.</p>
        </FadeUp>
        <div className={styles.timelineGrid}>
          <ScaleIn delay={0.1}>
            <div className={styles.timelineCard}>
              <div className={styles.stepNum}>01</div>
              <h3>Application</h3>
              <p>Submit your resume and portfolio through our portal.</p>
            </div>
          </ScaleIn>
          <ScaleIn delay={0.2}>
            <div className={styles.timelineCard}>
              <div className={styles.stepNum}>02</div>
              <h3>Culture Fit Call</h3>
              <p>A 30-minute chat with HR to ensure alignment on core values.</p>
            </div>
          </ScaleIn>
          <ScaleIn delay={0.3}>
            <div className={styles.timelineCard}>
              <div className={styles.stepNum}>03</div>
              <h3>Technical Interview</h3>
              <p>A deep-dive technical discussion with your future team lead.</p>
            </div>
          </ScaleIn>
          <ScaleIn delay={0.4}>
            <div className={styles.timelineCard}>
              <div className={styles.stepNum}>04</div>
              <h3>Final Offer</h3>
              <p>Executive review followed by a rapid offer generation.</p>
            </div>
          </ScaleIn>
        </div>
      </section>

      <section className={styles.section}>
        <FadeUp>
          <h2 className={styles.sectionTitle}>Open Roles</h2>
          <p className={styles.sectionDesc}>Explore our current openings across the globe.</p>
        </FadeUp>
        <div className={styles.jobGrid}>
          {jobs.map((job, index) => (
            <FadeUp key={index} delay={index * 0.1}>
              <div className={styles.jobCard}>
                <div className={styles.jobInfo}>
                  <h3>{job.title}</h3>
                  <div className={styles.jobMeta}>
                    <span><Briefcase size={18} /> {job.department}</span>
                    <span><MapPin size={18} /> {job.location}</span>
                    <span><Clock size={18} /> {job.type}</span>
                  </div>
                </div>
                <a href="#apply" style={{ textDecoration: 'none' }}>
                  <button className={styles.applyBtn}>Apply Now</button>
                </a>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <section id="apply" className={`${styles.section} ${styles.sectionBg}`}>
        <FadeUp>
          <h2 className={styles.sectionTitle}>General Application Portal</h2>
          <p className={styles.sectionDesc}>Don't see a role that fits perfectly? Submit your details to our talent pool. We are always looking for exceptional talent.</p>
        </FadeUp>
        
        <ScaleIn delay={0.2}>
          <div className={styles.formContainer}>
            <form>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                <div className={styles.formGroup}>
                  <label>First Name</label>
                  <input type="text" className={styles.formInput} required />
                </div>
                <div className={styles.formGroup}>
                  <label>Last Name</label>
                  <input type="text" className={styles.formInput} required />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label>Email Address</label>
                <input type="email" className={styles.formInput} required />
              </div>
              <div className={styles.formGroup}>
                <label>LinkedIn URL</label>
                <input type="url" className={styles.formInput} placeholder="https://linkedin.com/in/..." />
              </div>
              <div className={styles.formGroup}>
                <label>Resume / CV</label>
                <div className={styles.fileUpload}>
                  <UploadCloud size={48} style={{ color: 'var(--primary)', marginBottom: '1rem' }} />
                  <p>Drag and drop your PDF here, or click to browse files.</p>
                </div>
              </div>
              <div className={styles.formGroup}>
                <label>Cover Letter (Optional)</label>
                <textarea className={styles.formTextarea} placeholder="Tell us why you'd be a great fit..."></textarea>
              </div>
              <button type="submit" className={styles.submitBtn}>Submit Application</button>
            </form>
          </div>
        </ScaleIn>
      </section>
    </div>
  );
}
