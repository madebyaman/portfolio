import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {
  Project,
  projectsList,
  skillsList,
  socialLinks,
} from '../components/data';
import Layout from '../components/layout';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const filterProjects = (project: Project) => {
    if (showAllProjects) {
      return project;
    } else {
      return project.highlighted && project;
    }
  };

  return (
    <Layout home>
      <Head>
        <title>Aman Thakur Portfolio</title>
      </Head>

      <section className={styles.hero}>
        <div>
          <h1>Hi, I am Aman</h1>
          <div>
            <p>
              A web developer living in India 🇮🇳, a dog lover 🐶, and a cricket
              enthusiast 🏏. I am currently looking for job as a frontend
              developer 💻.
            </p>
            <p>
              At the same time, I am working on cool projects, including
              Bummaries, an app to write your book notes.
            </p>
            <p>
              📖 Currently reading{' '}
              <Link
                href="https://www.amazon.com/Stress-Free-Productivity-Personalized-Efficient-Creative/dp/0593191331"
                passHref
              >
                <a target="_blank">Stress Free Productivity by Alice Boyes</a>
              </Link>
            </p>
            <div className={styles.social}>
              {socialLinks.map((link) => (
                <Link key={link.name} href={link.url} passHref>
                  <a target="_blank">{link.icon}</a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className={styles.skills}>
        <h2>Technical Skill Set</h2>
        <div className={styles.skillsList}>
          {skillsList.map((skill) => (
            <div key={skill.name} className={styles.skill}>
              <div className={styles.skillIcon}>{skill.icon}</div>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </section>
      <section className={styles.projects}>
        <div className={styles.heading}>
          <h2>Projects</h2>
        </div>
        <div className={styles.projectList}>
          {projectsList.filter(filterProjects).map((project) => {
            const { highlighted, backgroundColor } = project;
            return (
              <div
                key={project.name}
                className={
                  highlighted
                    ? styles.project + ` ${styles.highlightedProject}`
                    : styles.project
                }
                style={{
                  backgroundColor: highlighted ? backgroundColor : 'white',
                }}
              >
                <div className={styles.projectText}>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className={styles.projectLinks}>
                    {project.links.map((link) => (
                      <Link key={link.name} href={link.url} passHref>
                        <a target={link.externalLink ? '_blank' : '_self'}>
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
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className={styles.projectImage}>
                  {project.screenshot && (
                    <Image
                      src={project.screenshot}
                      width={700}
                      height={736}
                      alt={project.name}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
        {!showAllProjects && (
          <a
            onClick={() => setShowAllProjects((prev) => !prev)}
            className={styles.allProjectsLink}
          >
            Show more projects
          </a>
        )}
      </section>
      <section className={styles.resume}>
        <h2>Resume</h2>
        <Link href="/resume.pdf" passHref>
          <a target="_blank">
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
          </a>
        </Link>
      </section>
      <section className={styles.contactForm}>
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
          <input type="email" id="email" required name="Name" />
          <label htmlFor="message">Message:</label>
          <textarea id="message" />
          <input type="submit" />
        </form>
      </section>
    </Layout>
  );
};

export default Home;
