// Ripsware corporate website data models & placeholder content
// UI-only — no backend, no API, no auth logic

export interface ServiceCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  services: ServiceItem[];
}

export interface ServiceItem {
  title: string;
  description: string;
  icon?: string;
}

export interface SupportPackage {
  id: string;
  title: string;
  subtitle: string;
  features: string[];
  sla: string;
  responseTime: string;
  popular?: boolean;
}

export interface TechItem {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'mobile' | 'erp' | 'ai' | 'cloud';
}

export interface ClientLogo {
  name: string;
  src: string;
  industry?: string;
}

export interface CaseStudy {
  title: string;
  client: string;
  industry: string;
  problem: string;
  solution: string;
  technologies: string[];
  outcomes: string[];
  image?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  skills: string[];
  experience: string;
}

export interface IndustryItem {
  title: string;
  icon: string;
  description: string;
}

// ─── Service Categories ────────────────────────────────────────

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'it-support',
    title: 'IT Support Services',
    icon: 'headset',
    description: 'Reliable, ticket-based IT support tailored for enterprises and SMBs.',
    services: [
      { title: 'Corporate IT Support (Ticket-Based)', description: 'Dedicated helpdesk for your organization with SLA-backed response times.' },
      { title: 'Part-Time IT Support', description: 'Scheduled on-site or remote technicians for growing businesses.' },
      { title: 'On-Demand IT Support', description: 'Pay-as-you-go technical assistance when you need it most.' },
      { title: 'Annual Maintenance Contracts (AMC)', description: 'Comprehensive yearly support agreements covering hardware and software.' },
    ],
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure & Hardware',
    icon: 'server',
    description: 'End-to-end infrastructure setup, networking, and security solutions.',
    services: [
      { title: 'Server Setup & Management', description: 'On-premise and cloud server deployment, monitoring, and maintenance.' },
      { title: 'Network & Firewall Setup', description: 'Enterprise-grade network architecture with advanced firewall protection.' },
      { title: 'CCTV / Security Camera Installation', description: 'IP and analog CCTV systems with remote monitoring capabilities.' },
      { title: 'Backup & Disaster Recovery', description: 'Automated backup solutions and disaster recovery planning.' },
    ],
  },
  {
    id: 'software-development',
    title: 'Software Development',
    icon: 'code',
    description: 'Custom web applications, portals, and enterprise integrations.',
    services: [
      { title: 'Custom Website Development', description: 'Modern, responsive websites built with ASP.NET, Angular, or React.' },
      { title: 'Custom Web Applications', description: 'Bespoke business applications tailored to your workflow.' },
      { title: 'Internal Corporate Portals', description: 'Employee portals, intranets, and internal tool dashboards.' },
      { title: 'ERP Integrations', description: 'Seamless integration with SAP, Odoo, and custom ERP systems.' },
    ],
  },
  {
    id: 'mobile-development',
    title: 'Mobile Application Development',
    icon: 'device-mobile',
    description: 'Native and cross-platform mobile apps for iOS and Android.',
    services: [
      { title: 'Android Development', description: 'Native Android applications with Kotlin and Java.' },
      { title: 'iOS Development', description: 'Native iOS applications with Swift.' },
      { title: 'Cross-Platform Development', description: 'Single codebase apps using Flutter and React Native.' },
    ],
  },
  {
    id: 'design-branding',
    title: 'Design & Branding',
    icon: 'palette',
    description: 'Complete visual identity, UI/UX design, and marketing materials.',
    services: [
      { title: 'Logo Design', description: 'Distinctive, memorable logos that represent your brand.' },
      { title: 'Corporate Identity', description: 'Brand guidelines, stationery, and visual systems.' },
      { title: 'UI/UX Design', description: 'User-centered interface design for web and mobile.' },
      { title: 'Graphic Design', description: 'Marketing materials, banners, brochures, and digital assets.' },
    ],
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    icon: 'speakerphone',
    description: 'Data-driven marketing strategies to grow your digital presence.',
    services: [
      { title: 'SEO Services', description: 'Search engine optimization to improve organic visibility.' },
      { title: 'Social Media Marketing', description: 'Strategy, content creation, and community management.' },
      { title: 'Paid Advertising', description: 'Google Ads, social media ads, and PPC campaign management.' },
      { title: 'Content Strategy', description: 'Content planning, creation, and distribution for lead generation.' },
    ],
  },
  {
    id: 'ai-technology',
    title: 'AI & Advanced Technologies',
    icon: 'brain',
    description: 'AI-powered solutions, automation, and data analytics.',
    services: [
      { title: 'AI-Powered Business Solutions', description: 'Intelligent systems that streamline operations and decision-making.' },
      { title: 'Chatbots & Automation', description: 'Conversational AI and workflow automation for customer engagement.' },
      { title: 'Data Analytics & Dashboards', description: 'Real-time analytics and interactive business intelligence dashboards.' },
      { title: 'Custom AI Integrations', description: 'Tailored AI solutions integrated into your existing systems.' },
    ],
  },
];

// ─── IT Support Packages ───────────────────────────────────────

export const supportPackages: SupportPackage[] = [
  {
    id: 'single-outlet',
    title: '1 Outlet Package',
    subtitle: 'Ideal for small offices and startups',
    sla: '99.5% Uptime',
    responseTime: '< 4 hours',
    features: [
      'Up to 15 endpoints covered',
      'Ticket-based support portal',
      'Remote & on-site assistance',
      'Monthly health reports',
      'Basic network monitoring',
      'Email & phone support',
    ],
  },
  {
    id: 'two-outlet',
    title: '2 Outlets Package',
    subtitle: 'For businesses with multiple locations',
    sla: '99.7% Uptime',
    responseTime: '< 2 hours',
    popular: true,
    features: [
      'Up to 40 endpoints covered',
      'Priority ticket queue',
      'Remote & on-site assistance',
      'Weekly health reports',
      'Advanced network monitoring',
      'Dedicated account manager',
      'Firewall management included',
      'Quarterly business review',
    ],
  },
  {
    id: 'enterprise',
    title: 'Multi-Outlet / Enterprise',
    subtitle: 'Scalable support for large organizations',
    sla: '99.9% Uptime',
    responseTime: '< 1 hour',
    features: [
      'Unlimited endpoints',
      'Dedicated support team',
      '24/7 remote monitoring',
      'Real-time health dashboards',
      'Full infrastructure management',
      'Disaster recovery planning',
      'Compliance & audit support',
      'Custom SLA terms',
      'On-site engineer (scheduled)',
      'Executive quarterly review',
    ],
  },
];

// ─── Technology Stack ──────────────────────────────────────────

export const techStack: TechItem[] = [
  { name: 'Angular', icon: 'brand-angular', category: 'frontend' },
  { name: 'React', icon: 'brand-react', category: 'frontend' },
  { name: 'TypeScript', icon: 'brand-typescript', category: 'frontend' },
  { name: 'Tailwind CSS', icon: 'brand-tailwind', category: 'frontend' },
  { name: 'ASP.NET', icon: 'brand-windows', category: 'backend' },
  { name: 'Node.js', icon: 'brand-nodejs', category: 'backend' },
  { name: 'Python', icon: 'brand-python', category: 'backend' },
  { name: 'PostgreSQL', icon: 'database', category: 'backend' },
  { name: 'Flutter', icon: 'brand-flutter', category: 'mobile' },
  { name: 'React Native', icon: 'brand-react-native', category: 'mobile' },
  { name: 'iOS (Swift)', icon: 'brand-apple', category: 'mobile' },
  { name: 'Android (Kotlin)', icon: 'brand-android', category: 'mobile' },
  { name: 'SAP', icon: 'building-factory', category: 'erp' },
  { name: 'Odoo', icon: 'apps', category: 'erp' },
  { name: 'Custom ERP', icon: 'settings-automation', category: 'erp' },
  { name: 'Machine Learning', icon: 'brain', category: 'ai' },
  { name: 'AI APIs', icon: 'robot', category: 'ai' },
  { name: 'Data Analytics', icon: 'chart-bar', category: 'ai' },
  { name: 'Azure', icon: 'cloud', category: 'cloud' },
  { name: 'AWS', icon: 'cloud', category: 'cloud' },
];

// ─── Client Logos ──────────────────────────────────────────────

export const clientLogos: ClientLogo[] = [
  { name: 'Dhiraagu', src: 'assets/images/front-end/brand-1.svg', industry: 'Telecom' },
  { name: 'Ooredoo', src: 'assets/images/front-end/brand-2.svg', industry: 'Telecom' },
  { name: 'Bank of Maldives', src: 'assets/images/front-end/brand-3.svg', industry: 'Finance' },
  { name: 'MWSC', src: 'assets/images/front-end/brand-4.svg', industry: 'Utilities' },
  { name: 'STO', src: 'assets/images/front-end/brand-5.svg', industry: 'Commerce' },
  { name: 'IGMH', src: 'assets/images/front-end/brand-6.svg', industry: 'Healthcare' },
];

// ─── Case Studies ──────────────────────────────────────────────

export const caseStudies: CaseStudy[] = [
  {
    title: 'Enterprise Resource Planning Portal',
    client: 'National Utility Provider',
    industry: 'Utilities',
    problem: 'Fragmented legacy systems causing delays in billing and customer service.',
    solution: 'Custom ERP portal integrating billing, CRM, and field operations into a unified dashboard.',
    technologies: ['Angular', 'ASP.NET', 'PostgreSQL', 'Azure'],
    outcomes: ['40% reduction in billing errors', '60% faster customer response time', 'Unified data across 5 departments'],
  },
  {
    title: 'Mobile Banking Application',
    client: 'Regional Financial Institution',
    industry: 'Finance',
    problem: 'No digital banking presence; customers relied on branch visits for all transactions.',
    solution: 'Cross-platform mobile app with secure transactions, bill payments, and account management.',
    technologies: ['Flutter', 'Node.js', 'PostgreSQL', 'Firebase'],
    outcomes: ['50,000+ downloads in 3 months', '35% reduction in branch footfall', '4.7 App Store rating'],
  },
  {
    title: 'Corporate IT Infrastructure Overhaul',
    client: 'Multi-branch Retail Group',
    industry: 'Retail',
    problem: 'Outdated network infrastructure leading to frequent downtime across 12 outlets.',
    solution: 'Complete network redesign with centralized monitoring, firewall, and automated backup.',
    technologies: ['Cisco Networking', 'FortiGate', 'Veeam Backup', 'PRTG Monitoring'],
    outcomes: ['99.9% uptime achieved', '80% fewer support tickets', 'Centralized IT management'],
  },
];

// ─── Industries ────────────────────────────────────────────────

export const industries: IndustryItem[] = [
  { title: 'Healthcare', icon: 'stethoscope', description: 'HIPAA-aware solutions for hospitals, clinics, and diagnostic centers.' },
  { title: 'Finance & Banking', icon: 'building-bank', description: 'Secure, compliant solutions for financial institutions and fintech.' },
  { title: 'Government & Public Sector', icon: 'building-community', description: 'Digital transformation for government agencies and public services.' },
  { title: 'Telecom', icon: 'antenna-bars-5', description: 'Network management, billing systems, and customer portals.' },
  { title: 'Retail & E-Commerce', icon: 'shopping-cart', description: 'Omnichannel commerce platforms and inventory management.' },
  { title: 'Education', icon: 'school', description: 'Learning management systems, portals, and digital classrooms.' },
  { title: 'Hospitality & Tourism', icon: 'plane', description: 'Booking systems, PMS integration, and guest experience platforms.' },
  { title: 'Real Estate', icon: 'building', description: 'Property management systems and tenant portals.' },
];

// ─── Team Members ──────────────────────────────────────────────

export const teamMembers: TeamMember[] = [
  {
    name: 'Ali Rifaz',
    role: 'CEO & Founder',
    image: 'assets/images/profile/user-1.jpg',
    skills: ['Strategy', 'Business Development', 'Technology Leadership'],
    experience: '10+ years',
  },
  {
    name: 'Ibrahim Ahmed',
    role: 'Chief Technology Officer',
    image: 'assets/images/profile/user-2.jpg',
    skills: ['System Architecture', 'Cloud Infrastructure', 'DevOps'],
    experience: '8+ years',
  },
  {
    name: 'Mariam Hassan',
    role: 'Project Manager',
    image: 'assets/images/profile/user-3.jpg',
    skills: ['Agile', 'Stakeholder Management', 'Delivery'],
    experience: '6+ years',
  },
  {
    name: 'Ahmed Naseer',
    role: 'Lead Developer',
    image: 'assets/images/profile/user-4.jpg',
    skills: ['Angular', 'ASP.NET', 'Flutter', 'PostgreSQL'],
    experience: '7+ years',
  },
];
