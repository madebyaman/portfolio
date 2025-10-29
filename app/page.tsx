import { projectsList } from "components/data";
import { ReactNode } from "react";
import { SiGithub, SiX } from "react-icons/si";
import { FaPlay } from "react-icons/fa";

const Home = () => {
  const featuredProjects = projectsList.filter((p) => p.highlighted);

  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="px-4 pt-20 max-w-2xl mx-auto">
        <h1 className="text-3xl font-semibold mb-4">Aman Thakur</h1>

        <div className="space-y-4 text-gray-700 mb-8">
          <p>
            I'm a developer who loves building things that feel solid, fast, and
            well made. I enjoy starting from scratch and putting all the parts
            together — backend, frontend, and design.
          </p>
          <p>
            Right now, I'm at Duarte Inc building AI-driven presentation tools
            and integrating multi-model LLM systems. In the past, I've worked on
            education and e-commerce platforms — improving app performance,
            building live tools, and shaping better developer workflows.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 items-center">
          <PrimaryButton href="mailto:amanthakur95@gmail.com">
            Get in touch
          </PrimaryButton>
          <LinkIconButton
            href="https://x.com/imamanthakur"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiX />
          </LinkIconButton>
          <LinkIconButton
            href="https://github.com/madebyaman"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGithub />
          </LinkIconButton>
          <div className="grow rounded-md bg-neutral-100 h-0.5 shrink" />
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-4 py-20 max-w-2xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8">My Favorite Projects</h2>

        <div className="space-y-12">
          {featuredProjects.map((project) => (
            <div key={project.name}>
              <h3 className="text-xl font-semibold mb-3">{project.name}</h3>
              <p className="text-gray-700 mb-4 leading-relaxed whitespace-pre-line">
                {project.description}
              </p>
              <div className="flex gap-3">
                {project.links.map((link) => {
                  const isVideoLink =
                    link.name.toLowerCase().includes("video") ||
                    link.name.toLowerCase().includes("loom");

                  if (isVideoLink) {
                    return (
                      <SecondaryButton
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        className="text-sm inline-flex items-center gap-1"
                        title="Watch demo video"
                      >
                        <FaPlay className="text-sm" />
                        <span>Video</span>
                        {link.duration && (
                          <span className="text-gray-400 ml-1">
                            {link.duration}
                          </span>
                        )}
                      </SecondaryButton>
                    );
                  }

                  return (
                    <LinkIconButton
                      key={link.name}
                      href={link.url}
                      target={link.externalLink ? "_blank" : undefined}
                      rel={
                        link.externalLink ? "noopener noreferrer" : undefined
                      }
                      className="text-sm"
                    >
                      <SiGithub />
                    </LinkIconButton>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

interface LinkIconButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}

const baseButtonClasses = "h-10 px-4 py-2 rounded font-medium";
const secondaryClasses = "bg-neutral-100 hover:bg-neutral-200 text-gray-700";

function LinkIconButton({
  children,
  className = "",
  ...props
}: LinkIconButtonProps) {
  return (
    <a
      className={`${baseButtonClasses} ${secondaryClasses} rounded-full h-10 w-10 grid place-content-center ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}

function PrimaryButton({
  children,
  className = "",
  href,
  ...props
}: LinkIconButtonProps) {
  return (
    <a
      href={href}
      className={`${baseButtonClasses} bg-blue-500 rounded-4xl cursor-pointer text-white hover:bg-blue-600 button grid place-content-center ${className}`}
      {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
    >
      {children}
    </a>
  );
}

function SecondaryButton({
  children,
  className = "",
  ...props
}: LinkIconButtonProps) {
  return (
    <a
      className={`${baseButtonClasses} ${secondaryClasses} ${className} rounded-4xl cursor-pointer grid place-content-center`}
      {...props}
    >
      {children}
    </a>
  );
}

export default Home;
