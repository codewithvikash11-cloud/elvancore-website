import styles from './page.module.css';

export const metadata = {
  title: 'Technologies We Use | Elvancore Software Solutions',
  description: 'Our tech stack includes Next.js, React, Node.js, Python, AWS, and advanced AI technologies to build modern enterprise solutions.',
};

export default function TechnologiesPage() {
  const categories = [
    {
      title: 'Frontend',
      technologies: ['React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript', 'Tailwind CSS']
    },
    {
      title: 'Backend',
      technologies: ['Node.js', 'Express.js', 'NestJS', 'Python', 'Django', 'FastAPI', 'Java', 'Spring Boot', 'PHP', 'Laravel']
    },
    {
      title: 'Mobile App Development',
      technologies: ['React Native', 'Flutter', 'Android (Kotlin)', 'iOS (Swift)']
    },
    {
      title: 'Databases',
      technologies: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Elasticsearch']
    },
    {
      title: 'Cloud & DevOps',
      technologies: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'GitHub Actions', 'Jenkins']
    },
    {
      title: 'AI & Machine Learning',
      technologies: ['OpenAI', 'Gemini', 'Claude', 'Llama', 'LangChain', 'TensorFlow', 'PyTorch']
    }
  ];

  return (
    <div className={styles.container}>
      <div className={`${styles.header} fade-in`}>
        <h1 className={styles.title}>Our Technology Stack</h1>
        <p className={styles.desc}>We leverage the latest and most robust technologies to build scalable, secure, and future-proof enterprise solutions.</p>
      </div>

      <div>
        {categories.map((category, index) => (
          <div key={index} className={`${styles.category} slide-up`} style={{ animationDelay: `${index * 0.1}s` }}>
            <h2 className={styles.categoryTitle}>{category.title}</h2>
            <div className={styles.techGrid}>
              {category.technologies.map((tech, tIndex) => (
                <div key={tIndex} className={styles.techItem}>
                  {tech}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
