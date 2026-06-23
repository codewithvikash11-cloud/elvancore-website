export interface ServiceDetail {
  slug: string;
  title: string;
  overview: string;
  features: string[];
  benefits: string[];
  techStack: string[];
  useCases: string[];
  faq: { q: string; a: string }[];
}

export interface ServiceCategory {
  categoryId: string;
  categoryTitle: string;
  count: number;
  services: ServiceDetail[];
}

export const servicesData: ServiceCategory[] = [
  {
    categoryId: 'web-development',
    categoryTitle: 'Web Development',
    count: 75,
    services: [
      {
        slug: 'enterprise-react-development',
        title: 'Enterprise React Development',
        overview: 'We build highly scalable, interactive, and resilient React applications tailored for mission-critical enterprise environments. Our architectures ensure absolute performance under heavy concurrent loads.',
        features: ['Micro-frontend architecture', 'Server-Side Rendering (SSR) via Next.js', 'Global State Management', 'Real-time WebSockets integration', 'Automated End-to-End Testing'],
        benefits: ['Lightning fast performance', 'Highly scalable architectures', 'SEO optimized rendering', 'Reduced server load', 'Seamless User Experience'],
        techStack: ['React 18', 'Next.js 14', 'Redux Toolkit', 'Zustand', 'React Query', 'TypeScript'],
        useCases: ['Financial Trading Dashboards', 'Global E-commerce Platforms', 'Healthcare Patient Portals', 'Data Analytics Dashboards'],
        faq: [
          { q: 'Why React for enterprise?', a: 'React provides a component-based architecture that is essential for scaling large codebases across multiple distributed engineering teams.' },
          { q: 'Do you offer React migration?', a: 'Yes, we specialize in migrating legacy Angular/jQuery monolithic apps to modern, performant React architectures with zero downtime.' }
        ]
      },
      {
        slug: 'headless-cms-integration',
        title: 'Headless CMS Architecture',
        overview: 'Decoupled content management systems enabling omnichannel content delivery across web, mobile, and IoT devices at blazing speeds.',
        features: ['API-First Content Delivery', 'Omnichannel Distribution', 'Decoupled Frontend', 'Edge Caching', 'Custom Content Modeling'],
        benefits: ['Maximum security (no direct database access)', 'Unmatched page load speeds globally', 'Future-proof flexibility', 'Developer autonomy'],
        techStack: ['Sanity.io', 'Contentful', 'Strapi', 'GraphQL', 'Next.js', 'Vercel'],
        useCases: ['Global Publishing Platforms', 'Multi-region E-commerce', 'Corporate Communication Portals'],
        faq: [
          { q: 'What is a Headless CMS?', a: 'A headless CMS separates the backend content repository from the frontend presentation layer, delivering content universally via APIs.' },
          { q: 'How does it improve security?', a: 'Because the CMS backend is isolated from the frontend presentation, attack vectors like SQL injection are virtually eliminated.' }
        ]
      }
    ]
  },
  {
    categoryId: 'ai-development',
    categoryTitle: 'AI Development',
    count: 70,
    services: [
      {
        slug: 'custom-llm-training',
        title: 'Custom LLM Training & Fine-Tuning',
        overview: 'We train and fine-tune Large Language Models (LLMs) on your proprietary enterprise data to create highly specialized, secure AI agents. Say goodbye to generic AI responses.',
        features: ['Proprietary Data Ingestion Pipelines', 'Retrieval-Augmented Generation (RAG)', 'On-Premise Deployment', 'Bias Mitigation', 'Continuous Learning Loops'],
        benefits: ['Absolute Data Privacy', 'Domain-Specific Accuracy', 'Reduced API Costs', 'Competitive Intellectual Property'],
        techStack: ['PyTorch', 'Hugging Face', 'LangChain', 'Llama 3', 'Pinecone', 'Weaviate'],
        useCases: ['Automated Legal Document Analysis', 'Medical Diagnostics Assistance', 'Algorithmic Trading Sentiment Analysis'],
        faq: [
          { q: 'Is our corporate data secure?', a: 'Yes. For strict compliance, we can deploy open-source models (like Llama 3) entirely on your private infrastructure, ensuring your data never leaves your VPC.' }
        ]
      },
      {
        slug: 'computer-vision-systems',
        title: 'Computer Vision & Image Processing',
        overview: 'Deploying advanced neural networks to extract high-dimensional data from images and video streams in real-time.',
        features: ['Object Detection & Tracking', 'Facial Recognition', 'Optical Character Recognition (OCR)', 'Anomaly Detection'],
        benefits: ['Automated Quality Assurance', 'Enhanced Security Verification', 'Instant Data Digitization'],
        techStack: ['OpenCV', 'TensorFlow', 'YOLOv8', 'CUDA', 'Python'],
        useCases: ['Manufacturing Defect Detection', 'Autonomous Vehicle Navigation', 'Security Surveillance'],
        faq: [
          { q: 'What is the processing latency?', a: 'With edge computing and optimized TensorRT models, we achieve sub-10ms inference times.' }
        ]
      }
    ]
  },
  {
    categoryId: 'cloud-devops',
    categoryTitle: 'Cloud & DevOps Solutions',
    count: 50,
    services: [
      {
        slug: 'kubernetes-orchestration',
        title: 'Kubernetes Orchestration & Management',
        overview: 'Design, deployment, and management of highly available Kubernetes clusters for containerized microservices architectures.',
        features: ['Auto-scaling Node Pools', 'Zero-Downtime Deployments', 'Service Mesh Integration (Istio)', 'Automated Disaster Recovery'],
        benefits: ['Infinite horizontal scaling', 'Cloud-agnostic deployments (No Vendor Lock-in)', 'Optimized resource utilization'],
        techStack: ['Kubernetes', 'Docker', 'Helm', 'Terraform', 'AWS EKS', 'Azure AKS', 'GCP GKE'],
        useCases: ['High-Traffic SaaS Platforms', 'Global Streaming Services', 'Microservices Architectures'],
        faq: [
          { q: 'Why do we need Kubernetes?', a: 'It automates container deployment, scaling, and management, drastically reducing operational overhead and preventing downtime during traffic spikes.' }
        ]
      }
    ]
  },
  {
    categoryId: 'cybersecurity',
    categoryTitle: 'Cybersecurity Services',
    count: 50,
    services: [
      {
        slug: 'penetration-testing',
        title: 'Advanced Penetration Testing',
        overview: 'Military-grade vulnerability assessments simulating real-world cyber attacks to identify and patch security flaws before malicious actors can exploit them.',
        features: ['Network Infrastructure Testing', 'Web Application Exploitation', 'Social Engineering Simulations', 'API Vulnerability Scans'],
        benefits: ['Compliance with SOC2/GDPR', 'Prevention of Financial Loss', 'Protection of Brand Reputation', 'Actionable Remediation Reports'],
        techStack: ['Kali Linux', 'Metasploit', 'Burp Suite Pro', 'Nmap', 'Custom Exploit Scripts'],
        useCases: ['Financial Trading Networks', 'Healthcare Data Platforms', 'Government Infrastructure'],
        faq: [
          { q: 'How often should we run pentests?', a: 'For enterprise systems, we recommend comprehensive tests bi-annually, and automated scans with every major CI/CD deployment.' }
        ]
      }
    ]
  },
  { categoryId: 'wordpress', categoryTitle: 'WordPress Development', count: 60, services: [] },
  { categoryId: 'mobile-app', categoryTitle: 'Mobile App Development', count: 65, services: [] },
  { categoryId: 'blockchain', categoryTitle: 'Blockchain Development', count: 50, services: [] },
  { categoryId: 'digital-marketing', categoryTitle: 'Digital Marketing', count: 50, services: [] },
  { categoryId: 'enterprise-software', categoryTitle: 'Enterprise Software', count: 50, services: [] }
];
