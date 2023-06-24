import Image from 'next/image';
import Link from 'next/link';
import { skillsList } from 'components/data';
import Navigation from 'components/nav';
import profileImg from 'public/images/aman.png';
import ProjectSection from './project-section';
import clsx from 'clsx';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { Container } from 'components/container';
import ContactForm from './contact-form';

const Home = () => {
  return (
    <>
      <section className="bg-slate-100 m-2 pt-4 px-4 pb-24">
        <Container>
          <Navigation className="my-4" />
          <div className="mt-20 flex flex-col sm:flex-row gap-4 sm:items-start">
            <Image
              src={profileImg}
              alt="Aman Thakur"
              className="rounded-full"
              width={150}
              height={150}
            />
            <div>
              <h1 className="mt-6 mb-4 text-3xl lg:text-4xl font-bold">
                Hi, I am Aman
              </h1>
              <div className="flex gap-4 flex-col text-lg">
                <p>
                  A web developer living in India 🇮🇳, a dog lover 🐶, and a
                  hockey enthusiast 🏑. 
                </p>
                <p>
                  📽️ Currently, I am working as a frontend developer. I am also working on my cool side projects, including
                  Bummaries, an app to write your book notes.
                </p>
              </div>
              <div className="flex gap-5 items-center mt-8">
                <a href="/#projects" className="btn primary">
                  See Projects
                </a>
                <a href="/#contact" className="btn secondary bg-slate-200">
                  View Contact
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <Container className="py-24 px-6">
        <h2 className="mb-12 text-2xl lg:text-3xl font-bold">
          Technical Skills
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 justify-center gap-x-20 gap-y-16">
          {skillsList.map((skill) => (
            <div key={skill.name} className="flex flex-col gap-2 items-center">
              <div className="text-xl rounded-full bg-slate-100 p-4 inline-block text-gray-700">
                {skill.icon}
              </div>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </Container>
      <ProjectSection />
      <Container className="py-24 px-4">
        <h2 className="mb-4 text-2xl lg:text-3xl font-bold" id="contact">
          Contact Information
        </h2>
        <Link href="/resume.pdf" className="btn secondary" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{
              width: '19px',
              height: '19px',
            }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          Download resume
        </Link>
        <ContactForm />
      </Container>
    </>
  );
};

export default Home;
