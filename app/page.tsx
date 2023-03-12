import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import {
  Project,
  projectsList,
  skillsList,
  socialLinks,
} from '../components/data';

const Home = () => {
  return (
    <>
      <section className="">
        <div>
          <h1 className="mt-0 mb-6">Hi, I am Aman</h1>
          <div>
            <p>
              A web developer living in India 🇮🇳, a dog lover 🐶, and a cricket
              enthusiast 🏏. I am currently looking for job as a frontend
              developer 💻.
            </p>
            <p>
              📽️ Currently, I am working on cool projects, including Bummaries,
              an app to write your book notes.
            </p>
            <div className="flex gap-5 items-center mt-8">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  target={'_blank'}
                  href={link.url}
                  className="border-0 text-lg"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="my-24">
        <h2>Technical Skill Set</h2>
        <div className="grid mt-8 grid-cols-4 justify-center gap-x-10 gap-y-3">
          {skillsList.map((skill) => (
            <div key={skill.name} className="">
              <div className="text-xl">{skill.icon}</div>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="my-20">
        <div className="">
          <h2>Projects</h2>
        </div>
        <div className="grid gap-5 grid-cols-1">
          {projectsList.map((project) => {
            const { highlighted, backgroundColor } = project;
            return (
              <div
                key={project.name}
                className={clsx(
                  highlighted && ' col-span-2 border-0 text-white',
                  'pt-8 pl-0 pb-6 pr-6 rounded'
                )}
                style={{
                  backgroundColor: highlighted ? backgroundColor : 'white',
                }}
              >
                <div className="py-16 px-4">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="flex gap-2 rounded flex-col items-start">
                    {project.links.map((link) => (
                      <Link
                        key={link.name}
                        href={link.url}
                        target={link.externalLink ? '_blank' : '_self'}
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
                        'flex flex-row gap-3 flex-wrap mt-10 text-center gap-x-6'
                      }
                    >
                      {project.skills.map((skill) => (
                        <div key={skill.name} className="">
                          <div className="">{skill.icon}</div>
                          <p>{skill.name}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className={'transition-all'}>
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
        {/* {!showAllProjects && (
          <a
            onClick={() => setShowAllProjects((prev) => !prev)}
            className={styles.allProjectsLink}
          >
            Show more projects
          </a>
        )} */}
      </section>
      <section className={'my-20 flex items-center gap-8'}>
        <h2>Resume</h2>
        <Link href="/resume.pdf" target="_blank">
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
      </section>
      <section className={'my-12'}>
        <h2>Contact</h2>
        <form
          name="contact"
          action="/success"
          method="POST"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact" />
          <label htmlFor="name">Name</label>
          <input type="text" id="name" required name="Name" />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required name="Email" />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="Message" />
          <input type="submit" />
        </form>
      </section>
    </>
  );
};

export default Home;
