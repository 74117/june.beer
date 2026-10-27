import { useEffect, useState } from "react";
import { site } from "./data/site.js";

function Clock() {
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    const timer = window.setInterval(() => setTime(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  return <span className="bar-label" id="tui-clock">[ {time.toLocaleTimeString([], { hour12: false })} ]</span>;
}

function ProjectCard({ project }) {
  const className = ["project-card", project.wip && "wip-card"].filter(Boolean).join(" ");
  const content = (
    <>
      <div className="project-header">
        <div className="project-title-wrapper">
          {project.icon && <img src={project.icon} alt="" className="project-icon-img" loading="lazy" />}
          <div>
            <div className="project-index mono">{project.number}</div>
            <h3 className="project-title">{project.name}</h3>
          </div>
        </div>
        {project.featured && <span className="project-icon" aria-hidden="true">↯</span>}
      </div>
      <p className="project-description">{project.description}</p>
      <div className="project-tags mono">
        {project.status && <span className={`tag ${project.status.toLowerCase()}`}>{project.status}</span>}
        {project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
      </div>
    </>
  );
  const label = `${project.name}: ${project.description}`;

  if (!project.href || project.href === "#") {
    return <article className={className} aria-label={label}>{content}</article>;
  }

  return (
    <a
      href={project.href}
      className={className}
      target={project.href?.startsWith("http") ? "_blank" : undefined}
      rel={project.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      aria-label={label}
    >
      {content}
    </a>
  );
}

export default function App() {
  return (
    <>
      <div className="scanlines" aria-hidden="true" />

      <nav className="tui-bar top-bar" aria-label="Site bar">
        <span className="bar-label">[ {site.name} ]</span>
        <a href={site.github} className="blog-link" target="_blank" rel="noopener noreferrer">github</a>
        <span className="bar-spacer" />
        <Clock />
      </nav>

      <div className="tui-panel panel-profile">
          <div className="panel-label">profile</div>
          <header>
            <div className="header-top">
              <div className="header-top-row">
                <div className="avatar-wrap">
                  <div className="avatar-border-outer">
                    <div className="avatar-border-inner">
                      <img src={site.avatar} alt={site.displayName} className="avatar" width="110" height="110" />
                    </div>
                  </div>
                </div>
                <div className="header-text">
                  <div className="tui-breadcrumb">~/{site.name}</div>
                  <h1>{site.displayName}</h1>
                  <p className="username mono">{site.username}</p>
                </div>
              </div>
              {site.subtitle && <p className="subtitle">{site.subtitle}</p>}
            </div>
            <div className="header-bottom">
              <div className="social-links">
                {site.socials.map((social) => (
                  <a href={social.href} aria-label={social.label} target="_blank" rel="noopener noreferrer" key={social.label}>
                    <i className={social.icon} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </header>
        </div>

        <section className="tui-panel panel-about" aria-labelledby="about-label">
          <div className="panel-label" id="about-label">about</div>
          <section><p className="about-text">{site.about}</p></section>
        </section>

        <section className="tui-panel panel-skills" aria-labelledby="skills-label">
          <div className="panel-label" id="skills-label">skills</div>
          <section>
            <div className="skills mono">
              {site.skills.map((skill) => (
                <span className="skill-tag" key={skill}><span className="tag-bullet">▸</span> {skill}</span>
              ))}
            </div>
          </section>
        </section>

        <section className="tui-panel panel-projects" aria-labelledby="projects-label">
          <div className="panel-label" id="projects-label">projects</div>
          <section><div className="projects">{site.projects.map((project) => <ProjectCard project={project} key={project.name} />)}</div></section>
        </section>
    </>
  );
}
