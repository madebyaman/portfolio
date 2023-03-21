import Image from 'next/image';
import Link from 'next/link';
import { skillsList } from 'components/data';
import Navigation from 'components/nav';
import profileImg from 'public/images/aman.png';
import ProjectSection from './project-section';
import clsx from 'clsx';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { Container } from 'components/container';

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
                  cricket enthusiast 🏏. I am currently looking for job as a
                  frontend developer 💻.
                </p>
                <p>
                  📽️ Currently, I am working on cool projects, including
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
        <Link
          href="/resume.pdf"
          className="px-6 py-3 inline-flex flex-row gap-1 items-center text-slate-800 bg-slate-100 hover:bg-white border border-transparent hover:border-slate-100 font-semibold"
          target="_blank"
        >
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
        <form
          className="mt-8"
          name="contact"
          action="/success"
          method="POST"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact" />
          <InputWithLabel id="name" label="Name" required />
          <InputWithLabel
            className="mt-4"
            id="email"
            label="Email"
            type="email"
            required
          />
          <div className="flex flex-col gap-1 mt-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-slate-700"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              rows={4}
              className={clsx(
                'px-4 py-3 focus:ring-slate-500 focus:border-slate-500 block sm:text-sm border border-gray-300 shadow-sm rounded w-full'
              )}
            />
          </div>
          <button type="submit" className="mt-4 btn primary">
            <PaperAirplaneIcon className="w-5 h-5 inline-block" />
            Send Message
          </button>
        </form>
      </Container>
    </>
  );
};

interface InputWithLabelProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
}

function InputWithLabel({
  id,
  label,
  className,
  ...props
}: InputWithLabelProps) {
  return (
    <div className={clsx('flex flex-col gap-1', className)}>
      <label htmlFor={id} className="block text-sm font-medium text-slate-700">
        {label}
      </label>
      <input
        name={id}
        id={id}
        className={clsx(
          'px-4 py-3 focus:ring-slate-500 focus:border-slate-500 block sm:text-sm border border-gray-300 shadow-sm rounded w-full'
        )}
        {...props}
      />
    </div>
  );
}

export default Home;
