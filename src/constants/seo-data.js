import LINKS from './links';

export const DEFAULT_IMAGE_PATH = '/images/social-previews/index.jpg';

export default {
  index: {
    title: 'Singularity — Autonomous Security Platform | AutoSecOps, vCISO, Compliance',
    description:
      'Singularity delivers AI-powered autonomous security operations. AutoSecOps for 10M+ endpoints, virtual CISO, SOC 2 compliance in 14 days, and enterprise threat intelligence. Built by elite security researchers.',
    keywords: 'autonomous security, AutoSecOps, vCISO, SOC 2 compliance, endpoint security, threat intelligence, AI security, enterprise security platform, device management, cybersecurity automation',
    pathname: '',
  },
  aboutUs: {
    title: 'About Singularity — Elite Security Researchers & Hackers',
    description:
      'Singularity is founded by elite security researchers with expertise in ICS/OT, satellite hacking, and AI security. 4+ years of research, bootstrapped, outperforming Cisco and Trend Micro.',
    keywords: 'security researchers, hackers, ICS security, OT security, satellite hacking, AI security research, cybersecurity startup, bootstrapped',
    pathname: LINKS.aboutUs,
  },
  blog: {
    title: 'Singularity Blog — Security Insights, Threat Research & Industry News',
    description:
      'Expert insights on autonomous security, device management, SOC 2 compliance, and enterprise cybersecurity. Stay ahead of threats with Singularity research.',
    keywords: 'security blog, threat research, cybersecurity insights, SOC 2 guide, endpoint security, AutoSecOps',
    imagePath: '/images/social-previews/blog.jpg',
    pathname: LINKS.blog,
  },
  contactSales: {
    title: 'Contact Sales — Singularity Enterprise Security',
    description:
      'Ready to transform your security operations? Contact Singularity for enterprise AutoSecOps, vCISO services, and compliance automation.',
    keywords: 'enterprise security sales, AutoSecOps demo, vCISO consultation, SOC 2 automation',
    pathname: LINKS.contactSales,
  },
  pricing: {
    title: 'Pricing — Singularity Security Platform',
    description:
      'Transparent pricing for autonomous security. AutoSecOps, vCISO, compliance automation, and threat intelligence. Scale from startup to enterprise.',
    keywords: 'security pricing, AutoSecOps cost, vCISO pricing, SOC 2 compliance cost, enterprise security pricing',
    imagePath: '/images/social-previews/pricing.jpg',
    pathname: LINKS.pricing,
  },
  security: {
    title: 'Security & Trust — Singularity',
    description:
      'Discover Singularity security standards including SOC 2 Type II, ISO 27001, GDPR, and HIPAA compliance. Zero-trust architecture, encryption at rest and in transit.',
    keywords: 'SOC 2 Type II, ISO 27001, GDPR compliance, HIPAA security, zero trust, encryption, security certifications',
    imagePath: '/images/social-previews/security.jpg',
    pathname: LINKS.security,
  },
  partners: {
    title: 'Partner Program — Singularity',
    description:
      'Join the Singularity partner ecosystem. Integrate autonomous security into your platform. MSP, MSSP, and technology partner programs available.',
    keywords: 'security partner program, MSP security, MSSP partnership, technology integration, security reseller',
    imagePath: '/images/social-previews/partners.jpg',
    pathname: LINKS.partners,
  },
  // Product Pages
  autosecops: {
    title: 'AutoSecOps — Autonomous Device Management & Security | Singularity',
    description:
      'Manage 10M+ endpoints with AI-powered autonomous security. Predictive maintenance, zero-touch deployment, and self-healing infrastructure. $4M+ annual savings.',
    keywords: 'AutoSecOps, autonomous security, device management, endpoint security, predictive maintenance, zero-touch deployment, self-healing, IoT security',
    pathname: '/autosecops',
  },
  vciso: {
    title: 'vCISO — Virtual Chief Information Security Officer | Singularity',
    description:
      'AI-powered virtual CISO for continuous penetration testing, dark web monitoring, and board-ready compliance reporting. 24/7 autonomous red team operations.',
    keywords: 'vCISO, virtual CISO, penetration testing, red team, dark web monitoring, security leadership, compliance reporting, threat intelligence',
    pathname: '/vciso',
  },
  compliance: {
    title: 'Compliance Automation — SOC 2 in 14 Days | Singularity',
    description:
      'Achieve SOC 2, ISO 27001, HIPAA, and GDPR compliance faster. Automated evidence collection, continuous monitoring, and audit-ready documentation.',
    keywords: 'SOC 2 automation, ISO 27001 compliance, HIPAA automation, GDPR compliance, audit automation, compliance management, security compliance',
    pathname: '/compliance',
  },
  waf: {
    title: 'Neural WAF — AI-Powered Web Application Firewall | Singularity',
    description:
      'ML models trained on 1B+ attacks. Sub-5ms threat decisions. Zero-day protection before CVEs drop. API security, bot management, and DDoS mitigation.',
    keywords: 'WAF, web application firewall, AI WAF, bot protection, DDoS mitigation, API security, zero-day protection, ML security',
    pathname: '/waf',
  },
  iam: {
    title: 'IAM — Zero-Trust Identity & Access Management | Singularity',
    description:
      'Enterprise identity and access management with zero-trust architecture. Granular RBAC, immutable audit trails, SSO integration, and just-in-time access.',
    keywords: 'IAM, identity management, access control, zero trust, RBAC, SSO, MFA, just-in-time access, audit trail',
    pathname: '/iam',
  },
  threatIntelligence: {
    title: 'Threat Intelligence — Global CTI Feeds & Dark Web Monitoring | Singularity',
    description:
      '50+ global CTI feeds. Dark web monitoring for credentials and brand protection. Zero-day detection before CVEs are published. Weekly threat reports.',
    keywords: 'threat intelligence, CTI, dark web monitoring, zero-day detection, IOC management, threat hunting, cyber threat intelligence',
    pathname: '/threat-intelligence',
  },
  reps: {
    title: 'REPS — Security Training & Skill Verification | Singularity',
    description:
      '50,000+ challenges in algorithms, security, and ML. LeetCode meets HackTheBox. Skill verification for SOC 2 compliance. Build elite engineering teams.',
    keywords: 'security training, skill verification, penetration testing training, coding challenges, SOC 2 training, security certification',
    pathname: '/reps',
  },
  ai: {
    title: 'AI Security — AI Applications & Agent Security | Singularity',
    description:
      'Secure AI applications and agents with Singularity. AI database management, vector store security, and intelligent agent protection.',
    keywords: 'AI security, AI agents, vector database, pgvector, AI applications, machine learning security, LLM security',
    pathname: '/ai',
  },
  enterprise: {
    title: 'Enterprise — Singularity Security Platform',
    description: 'Enterprise-grade autonomous security. Scale to millions of endpoints with dedicated support and SLAs.',
    keywords: 'enterprise security, enterprise compliance, dedicated support, SLA, large-scale security',
    pathname: '/enterprise',
  },
  // Error Pages
  error: {
    title: 'System Error — Singularity',
    description: 'An unexpected error occurred. Our autonomous systems are investigating.',
  },
  404: {
    title: 'Page Not Found — Singularity',
    description: 'The requested resource does not exist in this dimension.',
  },
};

export const getBlogCategoryDescription = (category) => {
  switch (category) {
    case 'security':
      return 'Deep-dive into autonomous security research, threat analysis, and protection strategies from Singularity security researchers.';
    case 'compliance':
      return 'Expert guides on SOC 2, ISO 27001, HIPAA, and GDPR compliance automation. Achieve audit-readiness faster.';
    case 'research':
      return 'Cutting-edge security research including ICS/OT, automotive, satellite, and AI system vulnerabilities from our elite research team.';
    default:
      return 'Expert insights on autonomous security, compliance automation, and enterprise threat protection from Singularity.';
  }
};
