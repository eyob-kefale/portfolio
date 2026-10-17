"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

/* ─── SVG Icon Components ────────────────────────────────── */

function ArrowRightIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function LayoutIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" />
    </svg>
  );
}

function ServerIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="8" rx="2" /><rect x="2" y="14" width="20" height="8" rx="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  );
}

function SmartphoneIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  );
}

function DatabaseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

/* Social Icons */
function GithubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

/* ─── Intersection Observer Hook ─────────────────────────── */

function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.unobserve(element);
      }
    }, { threshold: 0.1, ...options });

    observer.observe(element);
    return () => observer.disconnect();
  }, [options]);

  return { ref, isInView };
}

/* ─── Services Data ──────────────────────────────────────── */

const services = [
  {
    icon: <LayoutIcon />,
    title: "Frontend Development",
    description: "Building responsive, performant user interfaces with React, Next.js, and modern CSS frameworks for exceptional user experiences.",
    number: "01",
  },
  {
    icon: <ServerIcon />,
    title: "Backend Development",
    description: "Designing robust APIs and server-side architectures using Node.js, Express, and scalable cloud infrastructure.",
    number: "02",
  },
  {
    icon: <SmartphoneIcon />,
    title: "Mobile App Development",
    description: "Creating cross-platform mobile applications using React Native with smooth animations and native-like performance.",
    number: "03",
  },
  {
    icon: <DatabaseIcon />,
    title: "Database Design",
    description: "Architecting efficient database schemas and optimizing queries with PostgreSQL, MongoDB, and Firebase.",
    number: "04",
  },
  {
    icon: <GlobeIcon />,
    title: "API Integration",
    description: "Seamlessly connecting third-party services, payment gateways, and RESTful/GraphQL APIs into applications.",
    number: "05",
  },
  {
    icon: <CodeIcon />,
    title: "DevOps & Deployment",
    description: "Setting up CI/CD pipelines, Docker containers, and cloud deployments for reliable, automated releases.",
    number: "06",
  },
];

/* ─── Projects Data ──────────────────────────────────────── */

const projects = [
  {
    image: "/project-dashboard.jpg",
    title: "Aura Analytics Dashboard",
    description: "A comprehensive analytics platform with real-time data visualization, user management, and interactive reporting tools.",
    tags: ["React", "Node.js", "Chart.js", "PostgreSQL"],
    link: "#",
  },
  {
    image: "/project-ecommerce.jpg",
    title: "Aetheria E-Commerce Platform",
    description: "Full-featured online marketplace with product catalog, cart management, payment processing, and order tracking.",
    tags: ["Next.js", "Stripe", "MongoDB", "Tailwind"],
    link: "#",
  },
  {
    image: "/project-mobile-app.jpg",
    title: "Connect Social App",
    description: "A modern social networking mobile application with real-time messaging, stories, and content sharing capabilities.",
    tags: ["React Native", "Firebase", "Socket.io"],
    link: "#",
  },
  {
    image: "/project-dashboard.jpg",
    title: "Job Board Platform",
    description: "A recruitment platform connecting employers with candidates, featuring advanced search, filtering, and application management.",
    tags: ["Next.js", "Express", "Firebase", "REST API"],
    link: "#",
  },
];

/* ─── Skills Data ────────────────────────────────────────── */

const skills = [
  "React / Next.js",
  "TypeScript",
  "Node.js / Express",
  "Python / Django",
  "MongoDB / PostgreSQL",
  "Firebase / AWS",
  "Git / GitHub",
  "Docker / CI/CD",
  "React Native",
  "Tailwind CSS",
];

/* ═══════════════════════════════════════════════════════════ */
/*  MAIN PAGE COMPONENT                                       */
/* ═══════════════════════════════════════════════════════════ */

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on link click
  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* ───────── NAVIGATION ───────── */}
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`} id="navbar">
        <div className="navbar-inner">
          <a href="#" className="logo" id="logo">
            <span className="logo-dot" />
            Eyob<span style={{ color: "var(--accent)" }}>.</span>
          </a>

          <ul className={`nav-links ${mobileMenuOpen ? "mobile-open" : ""}`} id="nav-links">
            <li><a href="#hero" onClick={handleNavClick}>Home</a></li>
            <li><a href="#services" onClick={handleNavClick}>Services</a></li>
            <li><a href="#about" onClick={handleNavClick}>About</a></li>
            <li><a href="#projects" onClick={handleNavClick}>Projects</a></li>
            <li><a href="#contact" onClick={handleNavClick} className="nav-cta">Contact Me</a></li>
          </ul>

          <button
            className={`mobile-menu-btn ${mobileMenuOpen ? "active" : ""}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            id="mobile-menu-btn"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* ───────── HERO SECTION ───────── */}
      <section className="hero" id="hero">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              Available for work
            </div>
            <h1 className="hero-title" id="hero-title">
              Hi, I&apos;m <span className="accent">Eyob Kefale</span> — Full Stack Developer
            </h1>
            <p className="hero-description" id="hero-description">
              A Software Engineering graduate passionate about building modern,
              performant web and mobile applications. I turn ideas into elegant
              digital experiences.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn-primary" id="btn-view-work">
                View My Work
                <ArrowRightIcon />
              </a>
              <a href="#contact" className="btn-secondary" id="btn-contact-hero">
                Get In Touch
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">3+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">20+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <div className="hero-image-glow" />
            <div className="hero-image-container">
              <Image
                src="/hero-portrait.jpg"
                alt="Eyob Kefale - Full Stack Developer"
                fill
                sizes="(max-width: 768px) 260px, (max-width: 1024px) 320px, 420px"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            <div className="hero-floating-card card-1">
              <div className="floating-icon green">
                <CodeIcon />
              </div>
              <div className="floating-text">
                <strong>Full Stack Dev</strong>
                <span>React & Node.js</span>
              </div>
            </div>
            <div className="hero-floating-card card-2">
              <div className="floating-icon blue">
                <GlobeIcon />
              </div>
              <div className="floating-text">
                <strong>20+ Projects</strong>
                <span>Worldwide Clients</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── SERVICES SECTION ───────── */}
      <ServicesSection />

      {/* ───────── ABOUT SECTION ───────── */}
      <AboutSection />

      {/* ───────── PROJECTS SECTION ───────── */}
      <ProjectsSection />

      {/* ───────── CONTACT SECTION ───────── */}
      <ContactSection />

      {/* ───────── FOOTER ───────── */}
      <footer className="footer">
        <div className="footer-inner">
          <p className="footer-text">
            © {new Date().getFullYear()} <span className="accent-text">Eyob Kefale</span>. All rights reserved.
          </p>
          <div className="footer-links">
            <a href="#hero">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </>
  );
}

/* ─── Services Section Component ─────────────────────────── */

function ServicesSection() {
  const { ref, isInView } = useInView();

  return (
    <section className="section services" id="services">
      <div className="section-inner" ref={ref}>
        <div className="section-header">
          <div className="section-label">What I Do</div>
          <h2 className="section-title">Services I Offer</h2>
          <p className="section-description">
            I provide end-to-end development solutions, from concept to
            deployment, ensuring every project meets the highest standards.
          </p>
        </div>
        <div className={`services-grid stagger-children`}>
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card animate-in ${isInView ? "visible" : ""}`}
              id={`service-card-${index}`}
            >
              <div className="service-number">{service.number}</div>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── About Section Component ────────────────────────────── */

function AboutSection() {
  const { ref, isInView } = useInView();

  return (
    <section className="section" id="about">
      <div className="section-inner" ref={ref}>
        <div className="section-header">
          <div className="section-label">Get To Know Me</div>
          <h2 className="section-title">About Me</h2>
        </div>
        <div className={`about-grid animate-in ${isInView ? "visible" : ""}`}>
          <div className="about-image-wrapper">
            <div className="about-image-container">
              <Image
                src="/hero-portrait.jpg"
                alt="Eyob Kefale"
                fill
                sizes="(max-width: 1024px) 400px, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="about-accent-box" />
          </div>
          <div className="about-text">
            <p>
              I&apos;m Eyob Kefale, a passionate Full Stack Developer and Software
              Engineering graduate. I specialize in building modern, scalable web
              applications that deliver exceptional user experiences.
            </p>
            <p>
              With expertise spanning from frontend frameworks like React and
              Next.js to backend technologies including Node.js and Python, I
              bring a holistic approach to software development. I love
              transforming complex problems into simple, beautiful, and intuitive
              solutions.
            </p>
            <h3>My Tech Stack</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-tag" id={`skill-${index}`}>
                  <span className="skill-tag-dot" />
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Projects Section Component ─────────────────────────── */

function ProjectsSection() {
  const { ref, isInView } = useInView();

  return (
    <section className="section projects" id="projects">
      <div className="section-inner" ref={ref}>
        <div className="section-header">
          <div className="section-label">My Work</div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-description">
            A selection of projects that showcase my skills in full stack
            development, from responsive web apps to mobile solutions.
          </p>
        </div>
        <div className={`projects-grid stagger-children`}>
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card animate-in ${isInView ? "visible" : ""}`}
              id={`project-card-${index}`}
            >
              <div className="project-image">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
                <div className="project-overlay">
                  <a
                    href={project.link}
                    className="project-link"
                    aria-label={`View ${project.title}`}
                  >
                    <ExternalLinkIcon />
                  </a>
                </div>
              </div>
              <div className="project-info">
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Contact Section Component ──────────────────────────── */

function ContactSection() {
  const { ref, isInView } = useInView();

  return (
    <section className="section" id="contact">
      <div className="section-inner" ref={ref}>
        <div className="section-header">
          <div className="section-label">Get In Touch</div>
          <h2 className="section-title">Let&apos;s Work Together</h2>
          <p className="section-description">
            Have a project in mind or just want to say hello? I&apos;d love to hear
            from you. Let&apos;s create something amazing together.
          </p>
        </div>
        <div className={`contact-grid animate-in ${isInView ? "visible" : ""}`}>
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>
              Feel free to reach out through any of the channels below. I
              typically respond within 24 hours.
            </p>
            <div className="contact-details">
              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <MailIcon />
                </div>
                <div className="contact-detail-text">
                  <strong>Email</strong>
                  <a href="mailto:eyobkefale1@gmail.com">eyobkefale1@gmail.com</a>
                </div>
              </div>
              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <MapPinIcon />
                </div>
                <div className="contact-detail-text">
                  <strong>Location</strong>
                  <span>Ethiopia</span>
                </div>
              </div>
              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <PhoneIcon />
                </div>
                <div className="contact-detail-text">
                  <strong>Availability</strong>
                  <span>Open to freelance & full-time</span>
                </div>
              </div>
            </div>
            <div className="social-links">
              <a
                href="https://github.com/eyob-kefale"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                id="social-github"
              >
                <GithubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/eyob-kefale-b017a6230/"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                id="social-linkedin"
              >
                <LinkedinIcon />
              </a>
              <a
                href="https://www.instagram.com/eyob_kefale/"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                id="social-instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.facebook.com/eyob.kefia"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                id="social-facebook"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>

          <form className="contact-form" id="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" placeholder="John" required />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" placeholder="Doe" required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" placeholder="john@example.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" placeholder="Project Inquiry" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Tell me about your project..." required />
            </div>
            <button type="submit" className="btn-submit" id="btn-submit">
              Send Message
              <SendIcon />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
