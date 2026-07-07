import roomifyImg from './assets/roomify.png'
import kensiImg from './assets/Kensi.png'
import agentsImg from './assets/mult-agent.png'

// portfolioData.js - Centralized configuration of developer details, metadata, stats, and milestones.

export const portfolioData = {
  developer: {
    firstName: import.meta.env.VITE_FIRST_NAME || "Vigneshwar",
    lastName: import.meta.env.VITE_LAST_NAME || "M",
    fullName: import.meta.env.VITE_FULL_NAME || "Vigneshwar M",
    role: "Full Stack MERN Developer",
    secondaryRoles: [
      "Full Stack MERN Developer",
      "Node.js Architect",
      "MongoDB Optimizer",
      "React & Next.js Specialist",
      "Interactive UI Craft"
    ],
    avatarUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJjLKLRHPeNLSEPHSHrZbJRXgVNgkZ6OKn0g5oBDzZWN5JKW_6JJ8qS6Qae67TouGKXEoB37rieW5dxo85XAALspp2DQYwJRv0_0qcvPqvOF-6ra5eiwspf4zM_o6xE9npZPIbiNOo7R30ivGFm54BMwjUds2wG1UfgEP1qZnU_Z_qLyeZYMoUo81ea7cxyyFpjRwnE1B2wpvprzLxbEmi2RPxBwR0qX6WkZAFfOpelKtWci8gP7VUR9iL_q4MrCpIiEog7c4_fXg",
    email: import.meta.env.VITE_EMAIL || "vignesh10804@gmail.com",
    vcsEmail: "vigneshwar108004m@gmail.com",
    contactLocation: "TamilNadu, India",
    education: {
      degree: "B.E. Computer Science",
      school: "Anna University",
      period: "2022 - 2026",
      gpa: "8.26/10",
      courses: ["MERN Stack", "Gen AI", "OLLAMA", "Claude code", "MongoDB"]
    },
    socials: {
      github: import.meta.env.VITE_GITHUB_URL || "https://github.com",
      linkedin: import.meta.env.VITE_LINKEDIN_URL || "https://linkedin.com",
      twitter: "https://twitter.com"
    },
    cvFilename: "VIGNESHWAR_CV.pdf"
  },
  meta: {
    siteTitle: "Vigneshwar M",
    siteDescription: "Full Stack MERN Developer building clean, performant web applications with React, Node.js, and MongoDB.",
    headline: "Engineering Digital Masterpieces",
    aboutText: "Passionate about building highly reliable, secure, and complex web ecosystems that mitigate real-world friction. With over 5 years of rigorous engineering focus in the MERN stack, I build clean systems, prioritize lightning-fast database optimizations, and refine client-centric UX interfaces."
  },
  stats: [
    {
      id: 'projects',
      num: '4+',
      label: 'Projects Completed',
      colorClass: 'text-indigo-600',
      details: 'Over commercial SaaS integrations, open-source frameworks, and various full-stack mock Web3 & IoT client networks.'
    },
    {
      id: 'experience',
      num: '2+',
      label: 'Months Experience',
      colorClass: 'text-purple-600',
      details: 'Specializing in Express, TypeScript, NestJS and high-concurrency Node.js microservices. Over 3 years in leadership roles.'
    },
    {
      id: 'contributions',
      num: '1k+',
      label: 'Contributions',
      colorClass: 'text-emerald-500',
      details: 'Active contributor to open-source systems, libraries, developer tooling presets and various framework enhancements.'
    }
  ],
  skills: {
    categories: [
      {
        id: 'frontend',
        title: 'Frontend Systems',
        skills: [
          { name: 'React', percentage: 95, level: 'Expert', desc: 'Crafting performant interfaces with intricate layout structures, reusable state patterns, and polished responsiveness across device sizes.' },
          { name: 'Next.js', percentage: 90, level: 'Expert', desc: 'Optimizing server actions, page transitions, and rendering strategies to deliver fast, SEO-ready experiences with resilient client fallbacks.' },
          { name: 'TailwindCSS', percentage: 100, level: 'Master', desc: 'Using utility-first systems to shape consistent design tokens, responsive spacing, and refined micro-interactions without overwriting base styles.' },
          { name: 'TypeScript', percentage: 95, level: 'Expert', desc: 'Implementing strict typing across components, API contracts, and shared modules to reduce runtime errors and clarify intent in larger codebases.' }
        ]
      },
      {
        id: 'backend',
        title: 'Backend Systems',
        skills: [
          { name: 'Node.js', percentage: 92, level: 'Expert', desc: 'Building secure microservices, streamlining async flows, and maintaining clear service boundaries for reliable backend orchestration.' },
          { name: 'Express', percentage: 95, level: 'Expert', desc: 'Authoring lightweight routes and middleware with clear request validation, robust error handling, and predictable API behavior.' },
          { name: 'MongoDB', percentage: 88, level: 'Advanced', desc: 'Optimizing indexes, aggregation pipelines, and schema design to sustain fast query performance under growing data volumes.' },
          { name: 'REST / APIs', percentage: 92, level: 'Expert', desc: 'Designing optimized RESTful query pipelines, controller nodes, and stable API contracts that support maintainable client-server integration.' }
        ]
      },
      {
        id: 'deployment',
        title: 'Deployment & Hosting',
        skills: [
          { name: 'Netlify', percentage: 90, level: 'Expert', desc: 'Deploying fast, resilient frontend apps with smooth continuous delivery, custom domains, and reliable build pipelines.' },
          { name: 'Vercel', percentage: 88, level: 'Advanced', desc: 'Shipping modern React and Next.js experiences with instant previews, edge-ready setups, and clean production workflows.' },
          { name: 'Render', percentage: 84, level: 'Advanced', desc: 'Publishing backend services and full-stack apps with dependable runtime environments and simple release management.' }
        ]
      }
    ]
  },
  projects: [
    {
      id: 'mern',
      title: 'MERN E-Commerce',
      description: 'A full-scale marketplace with live inventory syncing, flexible user states, and secure Stripe payment flows. Includes layered cart management, order tracking, and responsive merchandising dashboards engineered for high throughput and rapid UI feedback.',
      image: '',
      tags: ['Next.js', 'Redux', 'Netlify'],
      codeSnippet: `// Stripe Route Payment Proxy
import express from 'express';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const paymentRouter = express.Router();

paymentRouter.post('/charge', async (req, res) => {
  const { amount, currency } = req.body;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      metadata: { integration: 'devarch_saas' }
    });
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});`
    },
    {
      id: 'agents',
      title: 'Multi-agent Coding Assistant',
      description: 'Collaborative AI agent clusters that communicate over stateful WebSockets, analyze developer intent, and draft/test Express/Node logic in real time. Designed with resilient channel recovery, custom scoring, and modular integration points for iterative workflow automation.',
      image: agentsImg,
      tags: ['Google API', 'Node.js', 'Ollama'],
      codeSnippet: `// WebSocket Agent Stream Channel
import { Server } from 'socket.io';

export function setupAgentSyncChannels(httpServer) {
  const io = new Server(httpServer, { cors: { origin: '*' } });
  
  io.on('connection', (socket) => {
    socket.on('agent:propose_diff', (proposal) => {
      // Run agent scoring algorithms before broadcast
      socket.broadcast.emit('agent:review_diff', {
        id: proposal.id,
        diff: proposal.diff,
        status: 'pending_eval'
      });
    });
  });
}`
    },
    {
      id: 'roomify',
      title: 'Roomify',
      description: 'A premium room dimension utility that visualizes 2D floor plans and 3D maps with precision. Built for intuitive navigation, spatial filtering, and seamless layout previews across desktop and mobile.',
      image: roomifyImg,
      tags: ['React.js', 'Express', 'Puter.js'],
      codeSnippet: `// 2D filter proxy coordinates calculation
import express from 'express';
const router = express.Router();

router.get('/explore', async (req, res) => {
  const { nw_lat, nw_lng, se_lat, se_lng, type } = req.query;
  const matchFilter = {
    location: {
      $geoWithin: {
        $box: [
          [parseFloat(nw_lng), parseFloat(nw_lat)],
          [parseFloat(se_lng), parseFloat(se_lat)]
        ]
      }
    }
  };
  // Retrieve clean rentals listings
  res.json({ filter: 'geolocation_matched', count: 42 });
});`
    },
    {
      id: 'kensi',
      title: 'Kensi Powertech',
      description: 'An industrial monitoring interface for a company website, blending real-time telemetry visualization, secure authentication, and responsive equipment dashboards. Designed to keep operational data visible while preserving usability under busy control workflows.',
      image: kensiImg,
      tags: ['Reactjs', 'Node.js', 'Google OAuth'],
      codeSnippet: `// Realtime Webpage Filter
import { Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

const telemetryStream$ = new Subject();

export const anomalyReports$ = telemetryStream$.pipe(
  filter(data => data.type === 'turbine_speed'),
  map(metric => ({
    sensorId: metric.id,
    deviation: Math.abs(metric.value - 1800),
    epoch: Date.now()
  })),
  filter(anomaly => anomaly.deviation > 350)
);`
    }
  ],
  experiences: [
    {
      role: 'Full Stack Developer',
      company: 'Learning from Youtube',
      period: '2026 - Present',
      description: 'Building cloud-optimized modular MERN frameworks.',
      color: 'primary',
      techUsed: ['React', 'Next.js', 'Express', 'Tailwind', 'PostgreSQL', 'REST APIs', 'Docker']
    },
    {
      role: 'Frontend Intern',
      company: 'inetz technology',
      period: '2025 - 2026',
      description: 'Assisted in refining stateful telemetry streams, optimized JWT authorization middleware, and built testing hooks.',
      color: 'secondary',
      techUsed: ['Node.js', 'Express', 'JWT', 'MongoDB', 'Docker', 'Git']
    },
    {
      role: 'B.E. Computer Science',
      company: 'Anna University',
      period: '2022 - 2026',
      description: 'Graduated of distinction. Deeply investigated database algorithms, compilers, and paradigms.',
      color: 'tertiary',
      techUsed: ['Data Structures', 'Distributed Systems', 'Computer Networks', 'Algorithms', 'Relational DBs']
    }
  ],
  accomplishments: [
    'Refactored Express router middleware to reduce JWT verification cycles by 20%.',
    'Configured optimized query caching to reduce system database congestion.',
    'Pushed structural Next.js server component overrides to stable.',
    'Drafted unit-tests for WebSocket channel adapters, coverage exceeding 95%.',
    'Optimized compound indexing for e-commerce products grid queries.',
    'Wrote automated lightweight multi-stage Docker build files.',
    'Synced secure credentials configuration rules into deployment pipelines.',
    'Resolved state synchronization bugs in React Context stores.',
    'Created custom hooks for efficient ResizeObservers in line charts.',
    'Reorganized CSS rules into fluid utility layout definitions.'
  ],
  services: [
    {
      id: 'api',
      title: 'API or SDK Development',
      icon: 'server',
      description: 'Solid backend pipelines optimized for high volume. Configured with Express/Nest, scalable database layers, and robust security middleware.',
      pricing: 'Starts working',
      features: [
        'Secure JWT / OAuth guards',
        'Database indexing & pooling',
        'CORS & CSRF robust headers',
        'Database pooling & aggregation queries'
      ]
    },
    {
      id: 'frontend',
      title: 'Immersive Interfaces',
      icon: 'layout',
      description: 'Stunning client platforms prioritizing frame rates, typography pairings, core Tailwind utilities, and custom motion charts.',
      pricing: 'Starts working',
      features: [
        'Atomic React structural units',
        'Fluid responsive structures',
        'Interactive charts (chart.js)',
        'Accessible, rapid load rates'
      ]
    },
    {
      id: 'fullstack',
      title: 'Full Stack Systems',
      icon: 'stack',
      description: 'End-to-end engineered products. Includes modular React frontend hubs, secure Node.js APIs, Docker container configurations, and automated deployment pipelines.',
      pricing: 'Starts working',
      features: [
        'End-to-end MERN architecture',
        'CI / CD secure deploy triggers',
        'Multistage Docker builds',
        'PostgreSQL / Mongo integrations'
      ]
    }
  ]
};
