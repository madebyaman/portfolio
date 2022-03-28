import {
  SiTwitter,
  SiGithub,
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
} from 'react-icons/si';

export const socialLinks = [
  {
    name: 'Twitter',
    url: 'https://twitter.com/imamanthakur',
    icon: <SiTwitter />,
  },
  {
    name: 'Github',
    url: 'https://github.com/madebyaman',
    icon: <SiGithub />,
  },
];

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
        name: 'Read more',
        url: 'https://hackerjourney.com/posts/bummaries/',
        externalLink: true,
      },
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
    ],
  },
  {
    name: 'Activity Logger App ',
    description:
      'I often found myself wasting time. So I built this app to track my day easily.',
    highlighted: true,
    backgroundColor: '#2C7A7B',
    screenshot: '/activity-logger.png',
    links: [
      {
        name: 'Read more',
        url: 'https://hackerjourney.com/posts/activity-logger/',
        externalLink: true,
      },
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
        url: 'https://hackerjourney.com/posts/copywriter-blocks/',
        externalLink: true,
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
