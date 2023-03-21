'use client';

import clsx from 'clsx';
import { projectsList } from 'components/data';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Container } from 'components/container';

export default function ProjectSection() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="bg-slate-100 m-2 px-4 py-24">
      <Container>
        <h2 className="mb-8 text-2xl lg:text-3xl font-bold" id="projects">
          Projects
        </h2>
        <div className="grid gap-5 grid-cols-2">
          {projectsList
            .filter((project) => (showMore ? project : project.highlighted))
            .map((project) => {
              const { highlighted, backgroundColor } = project;
              return (
                <div
                  key={project.name}
                  className={clsx(
                    highlighted && ' col-span-2 border-0 text-white',
                    'pt-8 pl-6 pb-6 pr-0 rounded flex flex-col sm:flex-row gap-4'
                  )}
                  style={{
                    backgroundColor: highlighted ? backgroundColor : 'white',
                  }}
                >
                  <div className="py-16 px-4">
                    <h3 className="mb-2 text-xl lg:text-2xl font-bold">
                      {project.name}
                    </h3>
                    <p>{project.description}</p>
                    <div className="mt-4 flex gap-2 rounded flex-col items-start">
                      {project.links.map((link) => (
                        <Link
                          key={link.name}
                          href={link.url}
                          target={link.externalLink ? '_blank' : '_self'}
                          className={clsx(
                            highlighted
                              ? 'bg-opacity-10 text-white hover:bg-opacity-100 hover:text-slate-800'
                              : 'bg-opacity-100 text-slate-800 border border-transparent hover:bg-white hover:border-slate-100',
                            'bg-slate-100 px-3 py-2 font-medium flex flex-row items-center gap-1'
                          )}
                        >
                          {link.externalLink && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              style={{
                                width: '18px',
                                height: '18px',
                              }}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          )}
                          {link.name}
                        </Link>
                      ))}
                    </div>
                    {project.skills && (
                      <div
                        className={
                          'flex flex-row gap-3 flex-wrap mt-10 text-center gap-x-6 gap-y-3'
                        }
                      >
                        {project.skills.map((skill) => (
                          <div
                            key={skill.name}
                            className="flex flex-col items-center gap-1"
                          >
                            <div className="inline-block text-lg">
                              {skill.icon}
                            </div>
                            <p className="text-sm">{skill.name}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="">
                    {project.screenshot && (
                      <Image
                        src={'/images' + project.screenshot}
                        width={700}
                        height="450"
                        alt={project.name}
                      />
                    )}
                  </div>
                </div>
              );
            })}
        </div>
        <div className="text-center">
          {!showMore && (
            <button
              onClick={() => setShowMore((prev) => !prev)}
              className="mt-4 btn link"
            >
              Show more projects
            </button>
          )}
        </div>
      </Container>
    </section>
  );
}
