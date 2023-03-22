import { Container } from 'components/container';
import Navigation from 'components/nav';

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
        <Container className="flex flex-col gap-4 sm:gap-6">
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
            whether it&apos;s implementing the latest React hooks or discovering
            new TypeScript types.
          </p>
          <p>
            Speaking of TypeScript, I&apos;m a huge fan. I love how it makes my
            code more robust and helps catch errors before they happen.
            It&apos;s like having a safety net for my code, and I can&apos;t
            imagine working without it.
          </p>
          <p>
            When I&apos;m not coding, you&apos;ll find me experimenting with new
            libraries and tools, trying to stay ahead of the curve. And if
            there&apos;s a new feature or update to React, you can bet I&apos;ll
            be the first in line to check it out.
          </p>
          <p>
            In short, if you need someone who is passionate about creating
            beautiful, responsive UIs and writing code that is both scalable and
            maintainable, then I&apos;m your guy. Let&apos;s create some amazing
            user experiences together!
          </p>
        </Container>
      </section>
    </>
  );
}
