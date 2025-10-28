import type { ReactNode } from "react";
import { StaticImageData } from "next/image";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiFirebase,
  SiNodedotjs,
  SiVuedotjs,
  SiWordpress,
  SiChakraui,
  SiPrisma,
  SiPostgresql,
  SiJest,
  SiCypress,
  SiSass,
  SiWebpack,
  SiReactrouter,
  SiRedis,
} from "react-icons/si";
import ActivityLoggerIcon from "./activity-logger.ico";
import BummariesIcon from "./bummaries.ico";
import NoteTakingIcon from "./note-taking-app.png";
import LoudMouthIcon from "./loudmouth.svg";

export const skillsList = [
  { name: "Javascript", icon: <SiJavascript /> },
  { name: "Typescript", icon: <SiTypescript /> },
  { name: "React", icon: <SiReact /> },
  { name: "Next JS", icon: <SiNextdotjs /> },
  { name: "Tailwindcss", icon: <SiTailwindcss /> },
  { name: "HTML5", icon: <SiHtml5 /> },
  { name: "VueJS", icon: <SiVuedotjs /> },
  { name: "CSS3", icon: <SiCss3 /> },
  { name: "Redux", icon: <SiRedux /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "Node JS", icon: <SiNodedotjs /> },
  { name: "WordPress", icon: <SiWordpress /> },
];

export type Project = {
  name: string;
  description: string;
  highlighted: boolean;
  screenshot?: string;
  icon?: StaticImageData;
  skills?: {
    name: string;
    icon: ReactNode;
  }[];
  links: {
    name: string;
    url: string;
    externalLink: boolean;
  }[];
};

export const projectsList: Project[] = [
  {
    name: "Custom Virtualization Library",
    description:
      "A high-performance virtualization library for rendering large lists and tables efficiently. Only renders visible items, dramatically reducing DOM nodes and improving performance. Tested with 500,000+ rows and renders at 60 FPS even on older devices and with CPU throttling.",
    highlighted: true,
    skills: [
      {
        name: "TypeScript",
        icon: <SiTypescript />,
      },
      {
        name: "React",
        icon: <SiReact />,
      },
      {
        name: "Performance",
        icon: <SiJavascript />,
      },
    ],
    links: [
      {
        name: "View on Github",
        url: "https://github.com/madebyaman/virtualizer",
        externalLink: true,
      },
      {
        name: "Watch demo video",
        url: "https://www.dropbox.com/scl/fi/6jc7b4aiux3a29vnlnb1q/original.mp4?rlkey=7365faa7tujzhee5zc4og2ov4&st=x4n8sm9n&dl=0",
        externalLink: true,
      },
    ],
  },
  {
    name: "AI Cellmate",
    description:
      "Full-stack CSV enrichment platform using AI agents. Agents run in background workers, stream progress via Redis pub/sub + SSE, and use multi-cycle loops to fill missing data. Showcases multi-agent AI orchestration, real-time streaming, background job processing, and multi-tenant SaaS architecture.",
    highlighted: true,
    skills: [
      {
        name: "React",
        icon: <SiReact />,
      },
      {
        name: "React Router",
        icon: <SiReactrouter />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript />,
      },
      {
        name: "Node.js",
        icon: <SiNodedotjs />,
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql />,
      },
      {
        name: "Prisma",
        icon: <SiPrisma />,
      },
      {
        name: "Redis",
        icon: <SiRedis />,
      },
    ],
    links: [
      {
        name: "View on Github",
        url: "https://github.com/madebyaman/ai-cellmate",
        externalLink: true,
      },
    ],
  },
  {
    name: "chord-key",
    description:
      "A keyboard shortcuts library for React with built-in conflict detection and discoverable shortcuts. Makes keyboard shortcuts easy to manage with centralized management, cross-platform support (Mac, Windows, Linux), TypeScript support, and uses Radix Tries for fast lookups.",
    highlighted: true,
    skills: [
      {
        name: "React",
        icon: <SiReact />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript />,
      },
      {
        name: "JavaScript",
        icon: <SiJavascript />,
      },
    ],
    links: [
      {
        name: "View on Github",
        url: "https://github.com/madebyaman/chord",
        externalLink: true,
      },
    ],
  },
  {
    name: "Bummaries App",
    description:
      "An app to take, publish, and share book notes easily with other people.",
    highlighted: false,
    // screenshot: "/Bummaries.png",
    icon: BummariesIcon,
    links: [
      {
        name: "View live",
        url: "https://www.bummaries.app",
        externalLink: true,
      },
      {
        name: "View on Github",
        url: "https://github.com/madebyaman/book-notes",
        externalLink: true,
      },
      {
        name: "Demo video on loom",
        url: "https://www.loom.com/share/8773464442644aabb53ea64300be5d27",
        externalLink: true,
      },
    ],
    // skills: [
    //   {
    //     name: "Typescript",
    //     icon: <SiTypescript />,
    //   },
    //   {
    //     name: "NextJS",
    //     icon: <SiNextdotjs />,
    //   },
    //   {
    //     name: "Firebase",
    //     icon: <SiFirebase />,
    //   },
    //   {
    //     name: "Chakra UI",
    //     icon: <SiChakraui />,
    //   },
    //   {
    //     name: "Redux",
    //     icon: <SiRedux />,
    //   },
    // ],
  },
  {
    name: "Activity Logger App ",
    description:
      "Track your daily activities super easy. Built with NextJS, Typescript, Prisma.",
    highlighted: false,
    // screenshot: "/activity-logger.png",
    icon: ActivityLoggerIcon,
    links: [
      {
        name: "View live",
        url: "https://activity-logger.vercel.app/",
        externalLink: true,
      },
      {
        name: "View on Github",
        url: "https://github.com/madebyaman/activity-logger",
        externalLink: true,
      },
      {
        name: "Demo video on loom",
        url: "https://www.loom.com/share/a95eec8cb13e4dcab1936973b9a09cd2",
        externalLink: true,
      },
    ],
    // skills: [
    //   {
    //     name: "NextJS",
    //     icon: <SiNextdotjs />,
    //   },
    //   {
    //     name: "Typescript",
    //     icon: <SiTypescript />,
    //   },
    //   {
    //     name: "Prisma",
    //     icon: <SiPrisma />,
    //   },
    //   {
    //     name: "PostgreSQL",
    //     icon: <SiPostgresql />,
    //   },
    //   {
    //     name: "Jest",
    //     icon: <SiJest />,
    //   },
    //   {
    //     name: "Cypress",
    //     icon: <SiCypress />,
    //   },
    //   {
    //     name: "Tailwind",
    //     icon: <SiTailwindcss />,
    //   },
    // ],
  },
  {
    name: "Note taking app",
    description:
      "Fully function note taking app built with vanilla JS and Typescript with no framework.",
    highlighted: false,
    // screenshot: "/easy-notes.png",
    icon: NoteTakingIcon,
    links: [
      {
        name: "View live",
        url: "https://note-taking-app-jet.vercel.app/",
        externalLink: true,
      },
      {
        name: "View on Github",
        url: "https://github.com/madebyaman/note-taking-app",
        externalLink: true,
      },
      {
        name: "Demo video on loom",
        url: "https://www.loom.com/share/2cf92c4ca30f47bc83ae52c4096ea31f",
        externalLink: true,
      },
    ],
    // skills: [
    //   {
    //     name: "Typescript",
    //     icon: <SiTypescript />,
    //   },
    //   {
    //     name: "SCSS",
    //     icon: <SiSass />,
    //   },
    //   {
    //     name: "Parcel",
    //     icon: <SiWebpack />,
    //   },
    // ],
  },
  {
    name: "Loud Mouth App",
    description:
      "Powerful rating collection tool that allows businesses to send positive reviews on third-party testimonial sites like Capterra, Product Hunt, etc",
    highlighted: false,
    icon: LoudMouthIcon,
    links: [
      {
        name: "View live",
        url: "https://beloudmouth.com",
        externalLink: true,
      },
      {
        name: "View on Github",
        url: "https://github.com/madebyaman/loud-mouth",
        externalLink: true,
      },
    ],
  },
  {
    name: "Shopify Clone",
    description: "A super simple clone of shopify with authentication.",
    highlighted: false,
    links: [
      {
        name: "View live",
        url: "http://shopify-clone-nu.vercel.app/",
        externalLink: true,
      },
      {
        name: "View on Github",
        url: "https://github.com/madebyaman/shopify-clone",
        externalLink: true,
      },
    ],
  },
  {
    name: "Copywriter Blocks",
    description:
      "A beautiful collection of Gutenberg blocks to help you build WordPress websites with ease.",
    highlighted: false,
    links: [
      {
        name: "View on Github",
        url: "https://github.com/madebyaman/copywriter-blocks",
        externalLink: true,
      },
    ],
  },
  {
    name: "Writing",
    description:
      "Beside programming, I also love writing. Check out my programming articles.",
    highlighted: false,
    links: [
      {
        name: "See my programming articles",
        url: "https://amanthakur.me/blog",
        externalLink: true,
      },
    ],
  },
];
