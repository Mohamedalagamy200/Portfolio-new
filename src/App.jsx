import { useState } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  Code2,
  Cpu,
  Database,
  Download,
  ExternalLink,
  GraduationCap,
  Layers3,
  Mail,
  Menu,
  Network,
  Server,
  ShieldCheck,
  Sparkles,
  Terminal,
  UserRound,
  X,
} from "lucide-react";

import { profile, skills, learning, projects, education } from "./data";
import { SiGithub } from "react-icons/si";

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Education", "#education"],
    ["Contact", "#contact"],
  ];

  return (
    <header className="site-header">
      <nav className="container nav-shell" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={() => setOpen(false)}>
          <span className="brand-mark">&lt;/&gt;</span>
          <span>
            Mohamed<span className="brand-dot">.</span>
          </span>
        </a>

        <button
          className="mobile-menu-button"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <div className={`nav-links ${open ? "is-open" : ""}`}>
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>
            Let&apos;s Talk <ArrowUpRight size={16} />
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-grid container">
        <div className="hero-copy">
          <div className="status-pill">
            <span className="status-dot" />
            <span>Computer Science Student · Cairo, Egypt</span>
          </div>

          <p className="hero-kicker">Hello, I&apos;m</p>
          <h1>
            Mohamed
            <span>Alagamy.</span>
          </h1>

          <h2 className="hero-role">Frontend / Full-Stack Web Developer</h2>

          <p className="hero-text">
            I build modern, responsive web interfaces with React and JavaScript,
            backed by a growing foundation in Node.js, APIs, databases, and
            Computer Science.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              View Projects <ArrowUpRight size={18} />
            </a>
            <a
              className="button button-secondary"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              <SiGithub size={18} /> GitHub
            </a>
          </div>

          <div className="hero-stack">
            <span>React.js</span>
            <span>JavaScript</span>
            <span>Node.js</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />
          <div className="profile-frame">
            <img
              className="profile-image"
              src={profile.image}
              alt={profile.name}
            />
          </div>

          <div className="code-card code-card-top">
            <span className="code-dot" />
            <code>&lt;Developer /&gt;</code>
          </div>

          <div className="code-card code-card-bottom">
            <Terminal size={16} />
            <span>building for the web</span>
          </div>
        </div>
      </div>

      <a className="scroll-hint" href="#about" aria-label="Scroll to About">
        <span>Scroll to explore</span>
        <ChevronDown size={18} />
      </a>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section section-dark">
      <div className="container">
        <SectionHeading
          eyebrow="01 / About"
          title="A developer profile built on strong foundations."
          description="My main direction is Web Development, while my Computer Science background gives me a broader engineering perspective."
        />

        <div className="about-grid">
          <div className="about-main">
            <p>
              I&apos;m a Computer Science student at Future Academy focused on
              building modern web applications with React and JavaScript.
            </p>
            <p>
              My technical foundation also includes backend development with
              Node.js and Express, REST APIs, SQL/SQLite, C++, data structures,
              algorithms, system analysis, and embedded systems.
            </p>
            <p>
              I&apos;m currently growing toward a stronger full-stack profile
              while exploring AI Agents, n8n automation, and cybersecurity.
            </p>
          </div>

          <div className="about-facts">
            <div className="fact-card">
              <Code2 size={20} />
              <span>Primary Focus</span>
              <strong>React & JavaScript</strong>
            </div>
            <div className="fact-card">
              <Server size={20} />
              <span>Backend</span>
              <strong>Node.js & Express</strong>
            </div>
            <div className="fact-card">
              <Database size={20} />
              <span>Data</span>
              <strong>SQL & SQLite</strong>
            </div>
            <div className="fact-card">
              <Cpu size={20} />
              <span>Engineering</span>
              <strong>C++ & Embedded</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const skillIcons = {
  "Frontend Development": Code2,
  "Backend Development": Server,
  "Computer Science": Layers3,
  "AI & Analytical Skills": Sparkles,
  "Embedded Systems & IoT": Cpu,
  Tools: Terminal,
};

function Skills() {
  return (
    <section id="skills" className="section section-black">
      <div className="container">
        <SectionHeading
          eyebrow="02 / Technical Skills"
          title="A growing technical stack."
          description="No percentage bars. Skills are grouped by discipline so the profile stays honest, readable, and easy to expand."
        />

        <div className="skills-grid">
          {skills.map((group) => {
            const Icon = skillIcons[group.title] || Code2;
            return (
              <article className="skill-card" key={group.title}>
                <div className="skill-card-header">
                  <div className="skill-icon">
                    <Icon size={21} />
                  </div>
                  <h3>{group.title}</h3>
                </div>

                <div className="skill-tags">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <div className="learning-panel">
          <div>
            <p className="eyebrow">Currently Learning</p>
            <h3>Expanding the toolkit.</h3>
          </div>
          <div className="learning-tags">
            {learning.map((item) => (
              <span key={item}>
                <span className="learning-dot" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-image">
        {project.image ? (
          <img
            className="project-image-content"
            src={project.image}
            alt={`${project.title} preview`}
          />
        ) : (
          <div className="project-image-placeholder">
            <Database size={36} />
            <span>Project screenshot pending</span>
          </div>
        )}
        <span className="project-category">{project.category}</span>
      </div>

      <div className="project-content">
        <div className="project-topline">
          <span>{project.status}</span>
          <span>{project.year}</span>
        </div>

        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="project-tech">
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className="project-actions">
          {project.github ? (
            <a href={project.github} target="_blank" rel="noreferrer">
              <SiGithub size={17} /> GitHub
            </a>
          ) : (
            <span className="disabled-link">
              <SiGithub size={17} /> Repository pending
            </span>
          )}

          {project.live ? (
            <a href={project.live} target="_blank" rel="noreferrer">
              <ExternalLink size={17} /> Live Demo
            </a>
          ) : (
            <span className="disabled-link">
              <ExternalLink size={17} /> Demo pending
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section id="projects" className="section section-dark">
      <div className="container">
        <SectionHeading
          eyebrow="03 / Selected Work"
          title="Projects that show how I think and build."
          description="The project system is data-driven, so future React and full-stack projects can be added without rebuilding the section."
        />

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}

          <article className="future-project-card">
            <div className="future-icon">
              <Sparkles size={22} />
            </div>
            <p className="eyebrow">Next Projects</p>
            <h3>More work will appear here as I build it.</h3>
            <p>
              This space is intentionally ready for future React, API-driven,
              dashboard, SaaS, or other web projects.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="section section-black">
      <div className="container">
        <SectionHeading
          eyebrow="04 / Education"
          title="Computer Science foundation."
          description="Academic study supports the web-development direction with programming, data, systems, and analytical fundamentals."
        />

        <div className="education-card">
          <div className="education-icon">
            <GraduationCap size={28} />
          </div>
          <div className="education-content">
            <div className="education-meta">
              <span>09/2024 — Present</span>
              <span>Cairo, Egypt</span>
            </div>
            <h3>{education.degree}</h3>
            <h4>{education.institution}</h4>
            <p>{education.status}</p>

            <div className="coursework">
              {education.coursework.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-card">
          <div className="contact-copy">
            <p className="eyebrow">05 / Contact</p>
            <h2>Let&apos;s build something useful.</h2>
            <p>
              I&apos;m open to connecting around web development, learning,
              projects, and future opportunities.
            </p>
          </div>

          <div className="contact-links">
            <a href={`mailto:${profile.email}`} className="contact-link">
              <Mail size={19} />
              <span>{profile.email}</span>
              <ArrowUpRight size={17} />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <span className="linkedin-icon" aria-hidden="true">
                in
              </span>
              <span>LinkedIn</span>
              <ArrowUpRight size={17} />
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <SiGithub size={19} />
              <span>GitHub</span>
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} Mohamed Alagamy</span>
        <span>Frontend / Full-Stack Web Developer</span>
        <a href="#home" aria-label="Back to top">
          Back to top <ArrowUpRight size={15} />
        </a>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
