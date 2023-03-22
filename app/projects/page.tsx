import Image from 'next/image';
import { Container } from 'components/container';
import Navigation from 'components/nav';
import { projectsList } from 'components/data';

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
          <div className="prose">
            <p>
              Welcome to my project page! This is where I show off all the cool
              stuff I&apos;ve made while on my journey as a frontend developer.
              I&apos;ve been known to get lost in code from time to time, but I
              always manage to find my way back to reality (eventually). So,
              take a look around and get ready to be impressed (or at least
              mildly entertained)
            </p>
          </div>
          {projectsList
            .filter((project) => project.screenshot)
            .map((project) => (
              <div key={project.name} className="flex flex-col gap-4">
                {project.screenshot && (
                  <Image
                    src={project.screenshot}
                    alt={project.name}
                    width={600}
                    height={400}
                  />
                )}
              </div>
            ))}
        </Container>
      </section>
    </>
  );
}
