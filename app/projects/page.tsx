import Image from 'next/image';
import { Container } from 'components/container';
import Navigation from 'components/nav';
import { projectsList } from 'components/data';
import Link from 'next/link';
import { LinkIcon } from '@heroicons/react/24/outline';

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-slate-100 m-2 pt-4 px-4 pb-24">
        <Container>
          <Navigation className="my-4" />
          <div className="text-center">
            <h1 className="mt-20">
              <strong>My Projects</strong>: A Journey through My Frontend
              Development Adventures
            </h1>
          </div>
        </Container>
      </section>
      <section className="px-4 py-24">
        <Container className="flex flex-col gap-6">
          <div className="prose lg:prose-lg mx-auto mb-6">
            <p>
              Welcome to my project page! This is where I show off all the cool
              stuff I&apos;ve made while on my journey as a frontend developer.
              I&apos;ve been known to get lost in code from time to time, but I
              always manage to find my way back to reality (eventually). So,
              take a look around and get ready to be impressed (or at least
              mildly entertained)
            </p>
          </div>
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
            {projectsList
              .filter((project) => project.icon)
              .map((project) => (
                <div
                  key={project.name}
                  className="flex flex-col gap-4 border border-slate-100 rounded p-4"
                >
                  <div className="rounded-full p-2 inline">
                    {project.icon && (
                      <Image
                        src={project.icon}
                        className="inline"
                        alt={`${project.name} icon`}
                        height={30}
                        width={30}
                      />
                    )}
                  </div>
                  <p className="prose">{project.description}</p>
                  {project.links.map((link) => (
                    <Link
                      key={link.name}
                      href={link.url}
                      className="text-slate-500 hover:text-cyan-600 inline-flex gap-2 items-center font-medium text-sm"
                    >
                      <LinkIcon className="h-5 w-5" />
                      {link.name}
                    </Link>
                  ))}
                </div>
              ))}
          </div>
        </Container>
      </section>
    </>
  );
}
