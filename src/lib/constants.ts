import {
  NavLink,
  ServicePillar,
  MetricItem,
  ProcessStepItem,
  TestimonialItem,
  DifferentiatorItem,
} from '@/types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#differentiators' },
  { label: 'Impact', href: '#metrics' },
  { label: 'Process', href: '#process' },
  { label: 'Endorsements', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    name: 'Core Development',
    services: [
      {
        icon: 'Monitor',
        title: 'Web App Development',
        subtitle: 'Production-grade React/Next.js apps built for scale, not demos.',
        description:
          'Engineered with modern component architecture, rigorous state management, and edge SSR capabilities that outpace commercial benchmarks.',
      },
      {
        icon: 'Layers',
        title: 'Full-Stack Platforms',
        subtitle: 'End-to-end systems: auth, payments, dashboards, APIs.',
        description:
          'Bespoke full-stack architectures integrating bulletproof identity, complex billing lifecycles, and resilient database topology.',
      },
      {
        icon: 'Globe',
        title: 'Wordpress Website Development',
        subtitle: 'High-performance, bespoke WordPress & WooCommerce architectures.',
        description:
          'Custom theme engineering, headless setups, enterprise security hardening, and lightning-fast page load speeds tailored to your brand.',
      },
      {
        icon: 'Plug',
        title: 'API & Integrations',
        subtitle: "Clean, documented APIs. Third-party stitching that doesn't rot.",
        description:
          'High-throughput REST/GraphQL gateways, resilient webhook ingestion, and seamless third-party synchronization.',
      },
    ],
  },
  {
    name: 'UI/UX Engineering',
    services: [
      {
        icon: 'Compass',
        title: 'Product Strategy',
        subtitle: "We ask 'should we build this?' before 'how do we build this?'",
        description:
          'Validating user mental models, competitive positioning, and technical feasibility before a single wireframe is drawn.',
      },
      {
        icon: 'MousePointerClick',
        title: 'Interactive Prototyping',
        subtitle: 'Click-through prototypes that feel like the real product.',
        description:
          'High-fidelity micro-interactions and tactile feedback loops simulating production environments for rapid stakeholder sign-off.',
      },
      {
        icon: 'Palette',
        title: 'Design Systems',
        subtitle: 'Tokens, components, documentation. Scales across teams.',
        description:
          'Comprehensive tokenized design architectures built in code and Figma, ensuring brand consistency across web and mobile.',
      },
      {
        icon: 'Eye',
        title: 'Accessibility Audit',
        subtitle: 'WCAG 2.2 AA compliance. Inclusive design, not afterthought.',
        description:
          'Comprehensive screen reader compatibility, keyboard navigation traps, contrast validation, and semantic structural audits.',
      },
    ],
  },
  {
    name: 'Growth & Reach',
    services: [
      {
        icon: 'TrendingUp',
        title: 'Digital Marketing',
        subtitle: 'Strategy-first campaigns. No spray-and-pray.',
        description:
          'Targeted audience acquisition strategies rooted in behavioral analytics, market segmentation, and compounding organic funnels.',
      },
      {
        icon: 'Target',
        title: 'Performance Marketing',
        subtitle: 'Paid search, social ads, retargeting — optimized to CAC.',
        description:
          'Data-driven creative iterations, rigorous multivariate testing, and channel scaling calibrated directly to Customer Acquisition Cost.',
      },
      {
        icon: 'Share2',
        title: 'Social Media Management',
        subtitle: 'Platform-native content with real engagement strategy.',
        description:
          'High-impact editorial voice, engineering-centric narrative design, and community growth for modern tech and enterprise brands.',
      },
      {
        icon: 'PenTool',
        title: 'Content & SEO',
        subtitle: 'Authority content that ranks and converts, not just publishes.',
        description:
          'Technical SEO architecture, Generative Engine Optimization (GEO), and programmatic content systems targeting high-intent queries.',
      },
      {
        icon: 'BarChart3',
        title: 'Analytics & CRO',
        subtitle: 'Data pipelines, dashboards, and conversion experiments.',
        description:
          'Attribution modeling, custom telemetry dashboards, and continuous A/B experimentation eliminating drop-off at every funnel step.',
      },
    ],
  },
];

export const METRICS: MetricItem[] = [
  { value: 150, suffix: '+', label: 'Projects Shipped' },
  { value: 98, suffix: '%', label: 'Client Retention Rate' },
  { value: 3.2, suffix: 's', label: 'Avg. Load Improvement' },
  { value: 40, suffix: '%', label: 'Avg. Conversion Lift' },
];

export const PROCESS_STEPS: ProcessStepItem[] = [
  {
    number: 1,
    title: 'Discovery & Architecture',
    description:
      'We audit your core requirements, technical stack, user pain points, and architectural constraints with zero fluff.',
  },
  {
    number: 2,
    title: 'Interactive Design System',
    description:
      'High-fidelity prototypes, Apple-grade editorial typography, and live tokenized design components built directly for code translation.',
  },
  {
    number: 3,
    title: 'Bespoke Engineering',
    description:
      'Clean, modular Next.js / TypeScript code with hardware-accelerated Framer Motion interactions, CI/CD, and performance auditing.',
  },
  {
    number: 4,
    title: 'Deployment & Growth Engine',
    description:
      'Production deployment with sub-second page loads, telemetry instrumentation, and compounding full-funnel growth loops.',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    quote:
      "BayleafX didn't just redesign our platform — they re-engineered how our users think about us. The polish is extraordinary.",
    author: 'Sarah Chen',
    title: 'VP of Product',
    company: 'Luminary AI',
  },
  {
    quote:
      "Three legacy agencies failed before them. BayleafX shipped in 4 weeks what others couldn't pull together in 4 months.",
    author: 'Marcus Rivera',
    title: 'Chief Executive Officer',
    company: 'Stackbridge Platforms',
  },
  {
    quote:
      "The precision and craft in every single micro-interaction made our investors sit up and take notice. Truly rare talent.",
    author: 'Priya Kapoor',
    title: 'Head of Digital Experience',
    company: 'Meridian Global',
  },
];

export const DIFFERENTIATORS: DifferentiatorItem[] = [
  {
    dimension: 'Design Approach',
    others: 'Template-first, reskin & ship with generic libraries',
    ours: 'Custom-crafted from zero, every single time',
  },
  {
    dimension: 'Technical Depth',
    others: 'Outsourced dev teams, zero architectural foresight',
    ours: 'In-house full-stack mastery, from infrastructure to UI',
  },
  {
    dimension: 'Communication',
    others: 'Weekly vague PDF reports and endless email chains',
    ours: 'Real-time sprint boards, shared repos, async standups',
  },
  {
    dimension: 'Animation & Motion',
    others: 'Static layouts or heavy unoptimized Lottie drops',
    ours: 'Hand-tuned, GPU-accelerated Framer Motion interactions',
  },
  {
    dimension: 'Delivery Velocity',
    others: '8–12 week bloated corporate turnaround cycles',
    ours: '3–6 week agile sprints with continuous staging reviews',
  },
  {
    dimension: 'Post-Launch Partnership',
    others: '"Our contract ended, good luck with maintenance"',
    ours: 'Proactive monitoring, telemetry, and compounding growth',
  },
];
