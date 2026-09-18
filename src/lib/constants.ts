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
  { label: 'Results', href: '#metrics' },
  { label: 'How It Works', href: '#process' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    name: 'Web & App Development',
    services: [
      {
        icon: 'Monitor',
        title: 'Web App Development',
        subtitle: 'Fast, modern web applications built with React & Next.js.',
        description:
          'Custom web apps designed to load instantly, work smoothly on every phone and computer, and scale effortlessly as your business grows.',
      },
      {
        icon: 'Layers',
        title: 'Full-Stack Software',
        subtitle: 'Complete platforms with user accounts, payments & dashboards.',
        description:
          'We build complete software solutions from scratch: secure login systems, Stripe payments, customer portals, and easy admin panels.',
      },
      {
        icon: 'Globe',
        title: 'WordPress Websites',
        subtitle: 'Custom, secure WordPress sites that are easy for you to edit.',
        description:
          'Custom themes, online stores with WooCommerce, and top-tier security with fast loading speeds that keep your visitors engaged.',
      },
      {
        icon: 'Plug',
        title: 'Tool & API Integrations',
        subtitle: 'Connect your website with your favorite business apps.',
        description:
          'We connect your site to payment gateways, email tools, CRMs, and databases so your operations run smoothly on autopilot.',
      },
    ],
  },
  {
    name: 'Design & User Experience',
    services: [
      {
        icon: 'Compass',
        title: 'Project Planning',
        subtitle: 'We map out what to build before writing a single line of code.',
        description:
          'We study your business goals, understand what your customers need, and create a clear visual roadmap to ensure project success.',
      },
      {
        icon: 'MousePointerClick',
        title: 'Clickable Prototypes',
        subtitle: 'Test and explore your site before development begins.',
        description:
          'Interactive prototypes that let you click through every screen, so you see and approve the exact look and feel before we build.',
      },
      {
        icon: 'Palette',
        title: 'Brand & Design Systems',
        subtitle: 'Consistent colors, fonts, and styles across all your pages.',
        description:
          'Clean, modern typography and visual guidelines that give your brand a trustworthy, established, and million-dollar look.',
      },
      {
        icon: 'Eye',
        title: 'Mobile & Fast Performance',
        subtitle: 'Built for speed, easy reading, and every screen size.',
        description:
          'Websites that look great on any device — iPhones, Androids, tablets, or laptops — with easy-to-read text and quick loading times.',
      },
    ],
  },
  {
    name: 'Marketing & Business Growth',
    services: [
      {
        icon: 'TrendingUp',
        title: 'Digital Marketing',
        subtitle: 'Clear marketing strategies to attract real customers.',
        description:
          'No guessing games. We find where your target audience spends time and guide them directly to your website to buy or contact you.',
      },
      {
        icon: 'Target',
        title: 'Paid Ads (Google & Meta)',
        subtitle: 'Targeted ads designed to bring sales, not just clicks.',
        description:
          'We create, run, and optimize ad campaigns on Google, Facebook, and Instagram to get you the highest return on your ad spend.',
      },
      {
        icon: 'Share2',
        title: 'Social Media Growth',
        subtitle: 'Consistent, eye-catching posts that build trust.',
        description:
          'Professional visuals, engaging captions, and smart scheduling that keep your brand active, respected, and memorable.',
      },
      {
        icon: 'PenTool',
        title: 'Google SEO & Content',
        subtitle: 'Rank higher on Google search so customers find you first.',
        description:
          'We optimize your website for search engines and write clear, helpful articles that bring you free organic traffic year after year.',
      },
      {
        icon: 'BarChart3',
        title: 'Analytics & Sales Optimization',
        subtitle: 'Clear reports on your visitors and how to get more sales.',
        description:
          'We set up simple dashboards to show you where your visitors come from and test improvements to convert more visitors into paying customers.',
      },
    ],
  },
];

export const METRICS: MetricItem[] = [
  { value: 150, suffix: '+', label: 'Projects Completed' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 3.2, suffix: 's', label: 'Faster Load Speed' },
  { value: 40, suffix: '%', label: 'Average Sales Growth' },
];

export const PROCESS_STEPS: ProcessStepItem[] = [
  {
    number: 1,
    title: 'Discovery & Plan',
    description:
      'We discuss your business goals, your target audience, and create a clear step-by-step plan with fixed pricing and timelines.',
  },
  {
    number: 2,
    title: 'Design & Clickable Preview',
    description:
      'We design modern, beautiful screens and share a clickable prototype with you so you can review and approve every detail.',
  },
  {
    number: 3,
    title: 'Development & Testing',
    description:
      'Our team writes clean, fast code, tests every feature across all mobile and desktop devices, and ensures high security.',
  },
  {
    number: 4,
    title: 'Launch & Ongoing Support',
    description:
      'We connect your domain, take your site live to the world, and provide continuous updates and support as your business grows.',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    quote:
      "BayleafX didn't just rebuild our website — they helped us double our customer leads in the very first month. Fast, professional, and super easy to work with.",
    author: 'Sarah Chen',
    title: 'Head of Product',
    company: 'Luminary Tech',
  },
  {
    quote:
      "We had bad experiences with other agencies before finding BayleafX. They delivered our entire custom web application in 4 weeks, exactly as promised.",
    author: 'Marcus Rivera',
    title: 'Founder & CEO',
    company: 'Stackbridge Co.',
  },
  {
    quote:
      "The speed and attention to detail blew us away. Our site loads instantly, looks world-class, and our clients constantly compliment the new design.",
    author: 'Priya Kapoor',
    title: 'Marketing Director',
    company: 'Meridian Global',
  },
];

export const DIFFERENTIATORS: DifferentiatorItem[] = [
  {
    dimension: 'Design Quality',
    others: 'Cheap templates and cookie-cutter designs that look generic',
    ours: '100% custom-designed from scratch specifically for your brand',
  },
  {
    dimension: 'Development Team',
    others: 'Work outsourced to inexperienced freelancers, leading to bugs',
    ours: 'Experienced in-house developers building clean, reliable software',
  },
  {
    dimension: 'Communication',
    others: 'Slow email replies, weeks of silence, and confusing technical jargon',
    ours: 'Direct chats with the team, regular updates, and clear answers',
  },
  {
    dimension: 'Speed of Delivery',
    others: 'Endless delays and projects dragging on for 3 to 6 months',
    ours: 'Fast 3 to 5 week delivery with clear deadlines and weekly milestones',
  },
  {
    dimension: 'Website Speed',
    others: 'Heavy, slow-loading websites that drive customers away',
    ours: 'Lightning-fast load times optimized for phones and Google ranking',
  },
  {
    dimension: 'Support After Launch',
    others: 'They disappear the moment the final bill is paid',
    ours: 'Ongoing maintenance, security checks, and support as you scale',
  },
];

export const WHATSAPP_PHONE = '917070072227';
export const WHATSAPP_MESSAGE = 'Hey! I want to know more about BayleafX and discuss starting a project.';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

