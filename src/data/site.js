export const site = {
  name: 'Elegance Infotech',
  legalName: 'Elegance IT & Geo Infotech',
  tagline: 'Architecting Intelligent Software & Cloud-Native Futures',
  description:
    'Elegance Infotech delivers high-velocity digital transformation, bespoke enterprise platforms, multi-cloud resilience, applied AI ecosystems, and precision GIS / LiDAR engineering.',
  email: 'elegancegeoinfotech06@gmail.com',
  phone: '+91 63691 26125',
  phoneHref: 'tel:+916369126125',
  whatsapp: 'https://wa.me/916369126125',
  whatsappMessage:
    'https://wa.me/916369126125?text=Hi%20Elegance%20Infotech%2C%20I%27d%20like%20to%20discuss%20a%20project.',
  instagram: 'https://www.instagram.com/elegancegeoinfotech/',
  address: 'Thippampatti, Dharmapuri, Tamil Nadu, India',
}

export const routes = [
  { name: 'Home', to: '/' },
  { name: 'Services', to: '/services' },
  { name: 'Process', to: '/process' },
  { name: 'Stack', to: '/stack' },
  { name: 'Work', to: '/work' },
  { name: 'About', to: '/about' },
  { name: 'FAQ', to: '/faq' },
]

export const pageMeta = {
  home: {
    eyebrow: 'Welcome · Overall Overview',
    icon: 'home',
    title: 'One team for your entire',
    gradientWord: 'technology stack',
    description:
      'Elegance Infotech is a full-stack technology partner — enterprise software, cloud-native infrastructure, applied AI, and precision spatial engineering under one roof.',
  },
  services: {
    eyebrow: 'What we do',
    icon: 'apps',
    title: 'Services &',
    gradientWord: 'Solutions',
    description:
      'Six specialised practices engineered for scale — from enterprise software and cloud-native DevOps to centimetre-accurate GIS, LiDAR and BIM engineering.',
  },
  process: {
    eyebrow: 'How we work',
    icon: 'timeline',
    title: 'The Elegance',
    gradientWord: 'Lifecycle',
    description:
      'A transparent, five-stage delivery pipeline that guarantees sprint velocity, zero-defect releases, and seamless handoffs.',
  },
  stack: {
    eyebrow: 'Technology ecosystem',
    icon: 'memory',
    title: 'Modern Toolchains,',
    gradientWord: 'Zero Lock-In',
    description:
      'Battle-tested open-source primitives and premier enterprise cloud fabrics — selected for your problem, never for our convenience.',
  },
  work: {
    eyebrow: 'Our work',
    icon: 'work',
    title: 'Proof in',
    gradientWord: 'Production',
    description:
      'From enterprise platforms to spatial infrastructure — measurable outcomes, documented win-win cases, and ROI that holds up.',
  },
  about: {
    eyebrow: 'About Elegance',
    icon: 'badge',
    title: 'The team behind',
    gradientWord: 'the work',
    description:
      'Engineers, designers, spatial specialists, and cloud architects based in Tamil Nadu, serving clients across India and the world.',
  },
  faq: {
    eyebrow: 'FAQ',
    icon: 'help',
    title: 'Answers before',
    gradientWord: 'you ask',
    description:
      'Pricing, timelines, support, and technologies — everything you need to know before we start.',
  },
  contact: {
    eyebrow: 'Contact',
    icon: 'mail',
    title: 'Let us engineer',
    gradientWord: 'your next step',
    description:
      'Book a confidential 45-minute consultation. No pitch decks — just technical clarity and a fixed estimate.',
  },
}

export const heroBadge = {
  status: 'Enterprise Digital Acceleration',
  divider: '/',
  kicker: 'Global Delivery · On-Time, Every Time',
}

export const trustBadges = [
  { icon: 'verified_user', label: 'ISO 27001 Adopted', color: 'text-tertiary' },
  { icon: 'cloud_done', label: 'Multi-Cloud Ready', color: 'text-secondary' },
  { icon: 'security', label: 'Secure Delivery', color: 'text-primary' },
]

export const metrics = [
  { value: '99.8%', label: 'Client CSAT Score', color: 'text-primary' },
  { value: '250+', label: 'Projects Delivered', color: 'text-secondary' },
  { value: '8+', label: 'Years of Expertise', color: 'text-tertiary' },
  { value: '45%', label: 'Faster Time-to-Market', color: 'text-primary-fixed' },
]

export const services = [
  {
    icon: 'terminal',
    title: 'Enterprise Software & Web Platforms',
    description:
      'Custom software, reactive web platforms, e-commerce systems, and API-first architectures engineered for scale, modularity, and long-term growth.',
    tags: 'React / Node.js / Next.js',
    accent: 'primary',
  },
  {
    icon: 'cloud_sync',
    title: 'Cloud Infrastructure & DevOps',
    description:
      'Multi-cloud architectures on AWS, Azure, and GCP with automated IaC, Kubernetes orchestration, and zero-downtime CI/CD delivery pipelines.',
    tags: 'AWS / Azure / Terraform / K8s',
    accent: 'secondary',
  },
  {
    icon: 'map',
    title: 'GIS, LiDAR & BIM Engineering',
    description:
      'Precision mapping, LiDAR point-cloud processing, and Scan-to-BIM workflows delivering centimeter-level accuracy for infrastructure and planning.',
    tags: 'QGIS / ArcGIS / LiDAR / Revit',
    accent: 'tertiary',
  },
  {
    icon: 'psychology',
    title: 'AI & Data Analytics',
    description:
      'Custom LLM pipelines, RAG vector systems, predictive machine learning models, and intelligent agent workflows that transform raw enterprise data.',
    tags: 'Python / PyTorch / LangChain',
    accent: 'primary',
  },
  {
    icon: 'palette',
    title: 'UI/UX & Digital Product Design',
    description:
      'High-fidelity design systems, frictionless user journeys, and component-token pipelines that accelerate prototype-to-production cycles.',
    tags: 'Figma / Design Tokens / Storybook',
    accent: 'secondary',
  },
  {
    icon: 'verified_user',
    title: 'Cyber Security & Compliance',
    description:
      'Zero-trust architectures, automated compliance audits, SAST/DAST vulnerability analysis, and hardened data pipelines built for regulatory confidence.',
    tags: 'Zero-Trust / SOC2 / SIEM',
    accent: 'tertiary',
  },
]

export const processSteps = [
  {
    number: '01',
    icon: 'explore',
    title: 'Discover & Strategize',
    description:
      'Deep diagnostics, stakeholder workshops, cloud cost analysis, and blueprinted architecture roadmaps.',
    output: 'Architecture PRD',
    accent: 'primary',
  },
  {
    number: '02',
    icon: 'schema',
    title: 'Architecture & Prototyping',
    description:
      'Domain-driven modeling, database schemas, interactive clickable prototypes, and sandbox validation.',
    output: 'Clickable POC & Specs',
    accent: 'secondary',
  },
  {
    number: '03',
    icon: 'code_blocks',
    title: 'Agile Engineering & CI/CD',
    description:
      'Bi-weekly sprints, test-driven development, automated merge gates, and peer-reviewed pull requests.',
    output: 'Continuous Releases',
    accent: 'tertiary',
  },
  {
    number: '04',
    icon: 'bug_report',
    title: 'QA & Zero-Defect Testing',
    description:
      'Automated end-to-end regression, load simulations, penetration testing, and security scanning.',
    output: 'Production Gate Audit',
    accent: 'primary',
  },
  {
    number: '05',
    icon: 'rocket_launch',
    title: 'Deployment & Scaled Care',
    description:
      'Canary cutovers, telemetry observability, SLA guarantees, and 24/7 follow-the-sun engineering care.',
    output: '99.99% Live Operations',
    accent: 'secondary',
  },
]

export const techCategories = ['All Stacks', 'Cloud & DevOps', 'Frontend & Mobile', 'Backend & Data', 'AI & ML', 'GIS & Engineering']

export const techStack = [
  // Cloud
  { name: 'Kubernetes', icon: 'deployed_code', sub: 'Container Orchestration', category: 'Cloud & DevOps', color: 'text-primary' },
  { name: 'AWS & Azure', icon: 'cloud', sub: 'Cloud Infra', category: 'Cloud & DevOps', color: 'text-primary' },
  { name: 'Terraform', icon: 'layers', sub: 'IaC Automation', category: 'Cloud & DevOps', color: 'text-primary' },
  { name: 'Docker', icon: 'inventory_2', sub: 'Containerization', category: 'Cloud & DevOps', color: 'text-primary' },
  { name: 'CI/CD Pipelines', icon: 'sync_alt', sub: 'Automated Delivery', category: 'Cloud & DevOps', color: 'text-primary' },
  // Frontend & Mobile
  { name: 'React & Next.js', icon: 'code', sub: 'Component UI / SSR', category: 'Frontend & Mobile', color: 'text-secondary' },
  { name: 'React Native', icon: 'phone_iphone', sub: 'Cross-Platform Apps', category: 'Frontend & Mobile', color: 'text-secondary' },
  { name: 'Flutter', icon: 'bolt', sub: 'Cross-Platform UI', category: 'Frontend & Mobile', color: 'text-secondary' },
  { name: 'Swift & Kotlin', icon: 'stay_current_portrait', sub: 'Native Mobile', category: 'Frontend & Mobile', color: 'text-secondary' },
  // Backend & Data
  { name: 'Node.js & Express', icon: 'storage', sub: 'API Services', category: 'Backend & Data', color: 'text-tertiary' },
  { name: 'PostgreSQL', icon: 'database', sub: 'Relational Engine', category: 'Backend & Data', color: 'text-tertiary' },
  { name: 'Redis', icon: 'memory', sub: 'In-Memory Cache', category: 'Backend & Data', color: 'text-tertiary' },
  { name: 'Kafka & MQ', icon: 'hub', sub: 'Event Streaming', category: 'Backend & Data', color: 'text-tertiary' },
  { name: 'REST & GraphQL', icon: 'api', sub: 'Data Contracts', category: 'Backend & Data', color: 'text-tertiary' },
  // AI & ML
  { name: 'Python', icon: 'smart_toy', sub: 'ML Toolchain', category: 'AI & ML', color: 'text-primary-fixed' },
  { name: 'PyTorch', icon: 'model_training', sub: 'Neural Modeling', category: 'AI & ML', color: 'text-primary-fixed' },
  { name: 'LangChain & RAG', icon: 'account_tree', sub: 'LLM Orchestration', category: 'AI & ML', color: 'text-primary-fixed' },
  { name: 'Pinecone & Milvus', icon: 'query_stats', sub: 'Vector Search', category: 'AI & ML', color: 'text-primary-fixed' },
  // GIS & Engineering
  { name: 'QGIS / ArcGIS', icon: 'map', sub: 'Spatial Analysis', category: 'GIS & Engineering', color: 'text-tertiary-fixed' },
  { name: 'LiDAR Processing', icon: 'view_in_ar', sub: 'Point Cloud Pipelines', category: 'GIS & Engineering', color: 'text-tertiary-fixed' },
  { name: 'BIM (Revit)', icon: 'home_work', sub: 'Scan-to-BIM', category: 'GIS & Engineering', color: 'text-tertiary-fixed' },
  { name: 'MapLibre / Leaflet', icon: 'explore', sub: 'Web Mapping', category: 'GIS & Engineering', color: 'text-tertiary-fixed' },
]

export const caseStudies = [
  {
    col: 'lg:col-span-7',
    badge: 'Retail & Fintech Platform',
    date: 'Digital Transformation',
    badgeColor: 'bg-primary-container/20 text-primary',
    title: 'Scaling a Legacy Transaction Core to 3x Throughput',
    description:
      'Re-architected a monolithic legacy application into a decoupled, event-driven streaming ecosystem with zero-downtime migration and fully compliant audit trails.',
    stats: [
      { value: '3.4x', label: 'Throughput Gain', color: 'text-primary' },
      { value: '-62%', label: 'P99 Latency', color: 'text-secondary' },
      { value: '$2.8M', label: 'Cloud OpEx Saved', color: 'text-tertiary' },
    ],
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=500&fit=crop',
    imageAlt: 'Futuristic financial transaction telemetry displayed on dark mode dashboards with cyan and magenta accents',
  },
  {
    col: 'lg:col-span-5',
    badge: 'GIS & LiDAR Engineering',
    date: 'Scan-to-BIM & Mapping',
    badgeColor: 'bg-secondary-container/20 text-secondary',
    title: 'Enterprise Spatial Data & Infrastructure Mesh',
    description:
      'Constructed precision LiDAR point-cloud pipelines and Scan-to-BIM models integrating regional survey data with unified asset registration.',
    stats: [
      { value: '60%', label: 'Faster survey cycles', color: 'text-secondary' },
      { value: '99.9%', label: 'Data accuracy', color: 'text-tertiary' },
    ],
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=500&fit=crop',
    imageAlt: 'Abstract 3D infrastructure mesh and survey data nodes illuminated with electric cyan and magenta on an obsidian backdrop',
  },
]

export const testimonials = [
  {
    quote:
      'Elegance Infotech took our brittle legacy infrastructure and transformed it into a cloud-native juggernaut. Delivery frequency jumped from monthly to daily releases.',
    name: 'Rachel K. Vance',
    role: 'Chief Technology Officer, PayStream Global',
    initials: 'RV',
    avatarClass: 'bg-primary-container text-on-primary-container',
    starClass: 'text-secondary',
  },
  {
    quote:
      'Their AI and data practice designed our multi-agent customer pipeline in under 12 weeks. Flawless execution, obsessive communication, and top-tier technical depth.',
    name: 'Marcus Lindqvist',
    role: 'VP of Engineering, Nordic Health AI',
    initials: 'ML',
    avatarClass: 'bg-secondary-container text-on-secondary',
    starClass: 'text-tertiary',
  },
  {
    quote:
      'The LiDAR and BIM models they delivered helped us win a government infrastructure contract. Centimeter-level accuracy, delivered three weeks early.',
    name: 'Devon Sterling',
    role: 'Director of Projects, Apex Infrastructure',
    initials: 'DS',
    avatarClass: 'bg-tertiary-container text-on-tertiary',
    starClass: 'text-primary',
  },
]

export const faqs = [
  {
    question: 'What services does Elegance Infotech offer?',
    answer:
      'We deliver enterprise software and web platforms, cloud infrastructure and DevOps, AI and data analytics, UI/UX design, cybersecurity, and precision GIS / LiDAR / BIM engineering services.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'A focused MVP can ship in 2–4 weeks, while complex enterprise platforms typically take 2–6 months. We lock delivery dates during our initial architecture consultation.',
  },
  {
    question: 'Do you provide post-launch support?',
    answer:
      'Yes. Every engagement includes hyper-care after launch, plus optional SLA-based maintenance covering bug fixes, updates, security patches, and 24/7 monitoring.',
  },
  {
    question: 'Which technologies do you work with?',
    answer:
      'React, Next.js, Node.js, React Native, Flutter, Python, PyTorch, AWS, Azure, Kubernetes, Terraform, plus GIS platforms including QGIS, ArcGIS, LiDAR, and Revit BIM workflows.',
  },
  {
    question: 'Can you take over an existing project?',
    answer:
      'Absolutely. We perform code audits, optimize performance, add features, and migrate legacy systems to modern cloud-native architectures with minimal disruption.',
  },
  {
    question: 'What does a project cost?',
    answer:
      'Pricing depends on scope and complexity. Contact us for a free consultation and a fixed, transparent estimate — no surprises, no hidden fees.',
  },
]

export const clients = [
  { name: 'PayStream Global', icon: 'account_balance' },
  { name: 'Nordic Health AI', icon: 'health_and_safety' },
  { name: 'Apex Infrastructure', icon: 'construction' },
  { name: 'RetailMart', icon: 'storefront' },
  { name: 'GeoVision Labs', icon: 'map' },
  { name: 'BuildCorp India', icon: 'domain' },
  { name: 'CloudBase', icon: 'cloud' },
  { name: 'DataPro', icon: 'query_stats' },
]