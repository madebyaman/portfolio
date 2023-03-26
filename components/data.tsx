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
} from 'react-icons/si';

export const skillsList = [
  { name: 'Javascript', icon: <SiJavascript /> },
  { name: 'Typescript', icon: <SiTypescript /> },
  { name: 'React', icon: <SiReact /> },
  { name: 'Next JS', icon: <SiNextdotjs /> },
  { name: 'Tailwindcss', icon: <SiTailwindcss /> },
  { name: 'HTML5', icon: <SiHtml5 /> },
  { name: 'VueJS', icon: <SiVuedotjs /> },
  { name: 'CSS3', icon: <SiCss3 /> },
  { name: 'Redux', icon: <SiRedux /> },
  { name: 'Firebase', icon: <SiFirebase /> },
  { name: 'Node JS', icon: <SiNodedotjs /> },
  { name: 'WordPress', icon: <SiWordpress /> },
];

export type Project = {
  name: string;
  description: string;
  highlighted: boolean;
  backgroundColor: string;
  screenshot?: string;
  icon?: string;
  skills?: {
    name: string;
    icon: JSX.Element;
  }[];
  links: {
    name: string;
    url: string;
    externalLink: boolean;
  }[];
};

export const projectsList: Project[] = [
  {
    name: 'Bummaries App',
    description:
      'An app to take, publish, and share book notes easily with other people.',
    highlighted: true,
    backgroundColor: '#1a202c',
    screenshot: '/Bummaries.png',
    links: [
      {
        name: 'View live',
        url: 'https://www.bummaries.app',
        externalLink: true,
      },
      {
        name: 'View on Github',
        url: 'https://github.com/madebyaman/book-notes',
        externalLink: true,
      },
      {
        name: 'Demo video on loom',
        url: 'https://www.loom.com/share/8773464442644aabb53ea64300be5d27',
        externalLink: true,
      },
    ],
    skills: [
      {
        name: 'Typescript',
        icon: <SiTypescript />,
      },
      {
        name: 'NextJS',
        icon: <SiNextdotjs />,
      },
      {
        name: 'Firebase',
        icon: <SiFirebase />,
      },
      {
        name: 'Chakra UI',
        icon: <SiChakraui />,
      },
      {
        name: 'Redux',
        icon: <SiRedux />,
      },
    ],
  },
  {
    name: 'Activity Logger App ',
    description:
      'Track your daily activities super easy. Built with NextJS, Typescript, Prisma.',
    highlighted: true,
    backgroundColor: '#2C7A7B',
    screenshot: '/activity-logger.png',
    links: [
      {
        name: 'View live',
        url: 'https://activity-logger.vercel.app/',
        externalLink: true,
      },
      {
        name: 'View on Github',
        url: 'https://github.com/madebyaman/activity-logger',
        externalLink: true,
      },
      {
        name: 'Demo video on loom',
        url: 'https://www.loom.com/share/a95eec8cb13e4dcab1936973b9a09cd2',
        externalLink: true,
      },
    ],
    skills: [
      {
        name: 'NextJS',
        icon: <SiNextdotjs />,
      },
      {
        name: 'Typescript',
        icon: <SiTypescript />,
      },
      {
        name: 'Prisma',
        icon: <SiPrisma />,
      },
      {
        name: 'PostgreSQL',
        icon: <SiPostgresql />,
      },
      {
        name: 'Jest',
        icon: <SiJest />,
      },
      {
        name: 'Cypress',
        icon: <SiCypress />,
      },
      {
        name: 'Tailwind',
        icon: <SiTailwindcss />,
      },
    ],
  },
  {
    name: 'Note taking app',
    description:
      'Fully function note taking app built with vanilla JS and Typescript with no framework.',
    highlighted: true,
    backgroundColor: 'HSL(11, 48%, 33%)',
    screenshot: '/easy-notes.png',
    icon: '👻',
    links: [
      {
        name: 'View live',
        url: 'https://note-taking-app-jet.vercel.app/',
        externalLink: true,
      },
      {
        name: 'View on Github',
        url: 'https://github.com/madebyaman/note-taking-app',
        externalLink: true,
      },
      {
        name: 'Demo video on loom',
        url: 'https://www.loom.com/share/2cf92c4ca30f47bc83ae52c4096ea31f',
        externalLink: true,
      },
    ],
    skills: [
      {
        name: 'Typescript',
        icon: <SiTypescript />,
      },
      {
        name: 'SCSS',
        icon: <SiSass />,
      },
      {
        name: 'Parcel',
        icon: <SiWebpack />,
      },
    ],
  },
  {
    name: 'Shopify Clone',
    description: 'A super simple clone of shopify with authentication.',
    highlighted: false,
    backgroundColor: '#EBF8FF',
    links: [
      {
        name: 'View live',
        url: 'http://shopify-clone-nu.vercel.app/',
        externalLink: true,
      },
      {
        name: 'View on Github',
        url: 'https://github.com/madebyaman/shopify-clone',
        externalLink: true,
      },
    ],
  },
  {
    name: 'Copywriter Blocks',
    description:
      'A beautiful collection of Gutenberg blocks to help you build WordPress websites with ease.',
    highlighted: false,
    backgroundColor: '#E6FFFA',
    links: [
      {
        name: 'Read more',
        url: 'project/copywriter-blocks',
        externalLink: false,
      },
      {
        name: 'View on Github',
        url: 'https://github.com/madebyaman/copywriter-blocks',
        externalLink: true,
      },
    ],
  },
  {
    name: 'Writing',
    description:
      'Beside programming, I also love writing. Check out my programming articles.',
    highlighted: false,
    backgroundColor: '#F0FFF4',
    links: [
      {
        name: 'See my programming articles',
        url: 'https://hackerjourney.com',
        externalLink: true,
      },
    ],
  },
];
