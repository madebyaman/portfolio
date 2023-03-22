import { EnvelopeIcon } from '@heroicons/react/24/solid';
import { Container } from 'components/container';
import Navigation from 'components/nav';
import Image from 'next/image';
import Link from 'next/link';
import { SiGithub, SiLinkedin, SiTwitter } from 'react-icons/si';
import photo from './photo.jpg';

const socialLinks = [
  {
    href: 'https://github.com/madebyaman',
    name: 'Follow on GitHub',
    icon: SiGithub,
  },
  {
    href: 'https://twitter.com/imamanthakur',
    name: 'Follow on Twitter',
    icon: SiTwitter,
  },
  {
    href: 'https://linkedin.com/imamanthakur',
    name: 'Follow on LinkedIn',
    icon: SiLinkedin,
  },
  {
    href: 'mailto:amanthakur95@gmail.com',
    name: 'amanthakur95@gmail.com',
    icon: EnvelopeIcon,
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-slate-100 m-2 pt-4 px-4 pb-24">
        <Container>
          <Navigation className="my-4" />
          <div className="text-center">
            <h1 className="mt-20">
              I&apos;m Aman Thakur. I live in India 🇮🇳, where I build super cool
              projects.
            </h1>
          </div>
        </Container>
      </section>
      <section className="px-4 py-24">
        <Container className="flex flex-col sm:flex-row gap-6 sm:gap-20">
          <div className="prose">
            <p>
              I&apos;m a frontend developer who loves all things React,
              TypeScript, and JavaScript. If you&apos;re looking for someone who
              can create dynamic user interfaces and write clean, maintainable
              code, then look no further.
            </p>
            <p>
              I spend most of my days lost in the world of React, tweaking
              components and working on optimizations. I&apos;m constantly
              learning new tricks to make my code more efficient and effective,
              whether it&apos;s implementing the latest React hooks or
              discovering new TypeScript types.
            </p>
            <p>
              Speaking of TypeScript, I&apos;m a huge fan. I love how it makes
              my code more robust and helps catch errors before they happen.
              It&apos;s like having a safety net for my code, and I can&apos;t
              imagine working without it.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll find me experimenting with
              new libraries and tools, trying to stay ahead of the curve. And if
              there&apos;s a new feature or update to React, you can bet
              I&apos;ll be the first in line to check it out.
            </p>
            <p>
              In short, if you need someone who is passionate about creating
              beautiful, responsive UIs and writing code that is both scalable
              and maintainable, then I&apos;m your guy. Let&apos;s create some
              amazing user experiences together!
            </p>
          </div>
          <div>
            <Image
              src={photo}
              className="rounded-lg shadow-sm -rotate-3"
              width={3435 / 10}
              height={4579 / 10}
              alt="Aman Thakur"
            />
            <div className="mt-6 ml-3 flex flex-col gap-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  className="inline-flex gap-4 text-sm items-center text-slate-700 font-medium hover:text-cyan-700"
                  href={link.href}
                >
                  <link.icon className="h-5 w-5 opacity-60" />
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
