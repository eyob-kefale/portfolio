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

function DownloadIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
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

function LockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function ZoomInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" />
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

function DropboxIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.038 0L0 4.887l6.038 4.888 6.037-4.888L6.038 0zm11.924 0l-6.037 4.887 6.037 4.888L24 4.887 17.962 0zM0 14.664l6.038 4.887 6.037-4.887-6.037-4.889L0 14.664zm17.962-4.889l-6.037 4.889 6.037 4.887L24 14.664l-6.038-4.889zM6.038 21.013l6.037 3.987 6.037-3.987-6.037-4.103-6.037 4.103z" />
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

/* ─── Interactive Crack & Merge Image Component ─────────── */

const SHARD_CONFIGS = [
  { top: "0%", left: "0%", width: "33.4%", height: "33.4%", bgPos: "0% 0%", clip: "polygon(0 0, 100% 0, 85% 100%, 0 82%)", transform: "translate3d(-26px, -24px, 45px) rotate(-16deg) scale(0.92)" },
  { top: "0%", left: "33.3%", width: "33.4%", height: "33.4%", bgPos: "50% 0%", clip: "polygon(0 0, 100% 0, 95% 85%, 15% 100%)", transform: "translate3d(6px, -30px, 60px) rotate(12deg) scale(0.88)" },
  { top: "0%", left: "66.6%", width: "33.4%", height: "33.4%", bgPos: "100% 0%", clip: "polygon(0 0, 100% 0, 100% 90%, 5% 85%)", transform: "translate3d(30px, -20px, 35px) rotate(20deg) scale(0.9)" },
  { top: "33.3%", left: "0%", width: "33.4%", height: "33.4%", bgPos: "0% 50%", clip: "polygon(0 18%, 85% 0, 100% 100%, 0 92%)", transform: "translate3d(-32px, 6px, 50px) rotate(-14deg) scale(0.9)" },
  { top: "33.3%", left: "33.3%", width: "33.4%", height: "33.4%", bgPos: "50% 50%", clip: "polygon(15% 0, 95% 15%, 85% 100%, 0 85%)", transform: "translate3d(0px, 0px, 80px) rotate(6deg) scale(1.06)" },
  { top: "33.3%", left: "66.6%", width: "33.4%", height: "33.4%", bgPos: "100% 50%", clip: "polygon(5% 15%, 100% 10%, 100% 100%, 15% 95%)", transform: "translate3d(32px, 8px, 45px) rotate(18deg) scale(0.91)" },
  { top: "66.6%", left: "0%", width: "33.4%", height: "33.4%", bgPos: "0% 100%", clip: "polygon(0 8%, 100% 0, 85% 100%, 0 100%)", transform: "translate3d(-24px, 26px, 30px) rotate(-22deg) scale(0.88)" },
  { top: "66.6%", left: "33.3%", width: "33.4%", height: "33.4%", bgPos: "50% 100%", clip: "polygon(0 15%, 85% 0, 100% 100%, 15% 100%)", transform: "translate3d(8px, 30px, 55px) rotate(10deg) scale(0.92)" },
  { top: "66.6%", left: "66.6%", width: "33.4%", height: "33.4%", bgPos: "100% 100%", clip: "polygon(15% 5%, 100% 0, 100% 100%, 0 100%)", transform: "translate3d(26px, 24px, 40px) rotate(-14deg) scale(0.89)" },
];

function CrackMergeImage({
  src,
  alt,
  className = "",
  showBadge = true,
}: {
  src: string;
  alt: string;
  className?: string;
  showBadge?: boolean;
}) {
  const [isCracked, setIsCracked] = useState(false);
  const [isMerging, setIsMerging] = useState(false);

  const toggleCrack = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (isCracked) {
      setIsMerging(true);
      setIsCracked(false);
      setTimeout(() => setIsMerging(false), 750);
    } else {
      setIsCracked(true);
    }
  };

  return (
    <div
      className={`crack-merge-container ${isCracked ? "is-cracked" : ""} ${className}`}
      onClick={() => toggleCrack()}
      title="Click to Shatter into pieces / Merge back"
    >
      {/* Pristine Intact Image */}
      <div className="crack-original-layer">
        <img
          src={src}
          alt={alt}
          className="crack-original-img"
        />
      </div>

      {/* Shattered Shards Layer */}
      <div className="crack-shards-layer">
        {SHARD_CONFIGS.map((shard, index) => (
          <div
            key={index}
            className="crack-shard"
            style={{
              top: shard.top,
              left: shard.left,
              width: shard.width,
              height: shard.height,
              backgroundImage: `url(${src})`,
              backgroundPosition: shard.bgPos,
              backgroundSize: "300% 300%",
              clipPath: shard.clip,
              transform: isCracked ? shard.transform : "translate3d(0,0,0) rotate(0deg) scale(1)",
            }}
          />
        ))}
      </div>

      {/* Merge Flash Burst */}
      <div className={`crack-flash-overlay ${isMerging ? "merging" : ""}`} />

      {/* Interactive Toggle Badge */}
      {showBadge && (
        <button
          type="button"
          className={`crack-badge-toggle ${isCracked ? "is-cracked" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            toggleCrack();
          }}
          aria-label={isCracked ? "Merge image pieces" : "Shatter image in pieces"}
        >
          {isCracked ? "✨ Merge Portrait" : "⚡ Shatter in Pieces"}
        </button>
      )}
    </div>
  );
}

/* ─── Lightbox Modal Component ───────────────────────────── */

function LightboxModal({
  isOpen,
  imageSrc,
  title,
  subtitle,
  onClose,
}: {
  isOpen: boolean;
  imageSrc: string;
  title: string;
  subtitle?: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="lightbox-modal" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close-btn" onClick={onClose} aria-label="Close modal">
          ✕
        </button>
        <div className="lightbox-image-wrap">
          <Image
            src={imageSrc}
            alt={title}
            fill
            sizes="90vw"
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="lightbox-caption">
          <h3>{title}</h3>
          {subtitle && <p style={{ fontSize: "0.9rem", color: "var(--accent)", marginTop: "0.25rem" }}>{subtitle}</p>}
        </div>
      </div>
    </div>
  );
}

/* ─── Services Data ──────────────────────────────────────── */

const services = [
  {
    icon: <LayoutIcon />,
    title: "Fullstack Web Applications",
    description: "Architecting modern, high-performance web applications using Next.js, React, Node.js, and SSR/SSG patterns with intuitive, accessible UI/UX.",
    number: "01",
  },
  {
    icon: <SmartphoneIcon />,
    title: "Mobile App Development",
    description: "Developing cross-platform mobile solutions with React Native and FlutterFlow, integrating offline support, native APIs, and real-time state.",
    number: "02",
  },
  {
    icon: <GlobeIcon />,
    title: "Telebirr & Fintech Mini Apps",
    description: "Specialized in Telebirr API, payment webhooks, SuperApp Mini App ecosystems, and reverse e-commerce demand-matching workflows.",
    number: "03",
  },
  {
    icon: <ServerIcon />,
    title: "Backend & RESTful APIs",
    description: "Designing scalable backend architectures with Node.js, Express.js, PHP, and secure authentication, caching, and rate limiting.",
    number: "04",
  },
  {
    icon: <DatabaseIcon />,
    title: "Database Architecture",
    description: "Structuring high-throughput data layers with MongoDB, normalized MySQL schemas, PostgreSQL, and Firebase Firestore.",
    number: "05",
  },
  {
    icon: <CodeIcon />,
    title: "Enterprise Systems & DevOps",
    description: "Centralized management suites, stock control with transactional audits, Docker containerization, cPanel, and CI/CD pipelines.",
    number: "06",
  },
];

/* ─── Projects Data ──────────────────────────────────────── */

type ProjectCategory = "all" | "production" | "web" | "mobile" | "opensource";

interface ProjectItem {
  id: string;
  title: string;
  category: ProjectCategory[];
  description: string;
  image: string;
  tags: string[];
  statusBadge: {
    label: string;
    type: "confidential" | "live" | "opensource" | "production";
  };
  githubUrl?: string;
  liveUrl?: string;
  isConfidential?: boolean;
}

const projectsList: ProjectItem[] = [
  {
    id: "addisgebeya",
    title: "AddisGebeya — Demand-Driven Marketplace Platform",
    category: ["all", "production", "web"],
    description: "Engineered a reverse e-commerce marketplace connecting consumer demand directly to vendors, optimizing buyer-seller matching workflows, integrating Telebirr API & webhooks for real-time payment processing, and deploying as a Mini App inside Telebirr SuperApp.",
    image: "/project-ecommerce.jpg",
    tags: ["Next.js", "Telebirr API", "Webhooks", "Node.js", "SuperApp"],
    statusBadge: { label: "Production Mini App", type: "production" },
  },
  {
    id: "ethdiabetes",
    title: "Ethiopian Diabetes Association Official Platform",
    category: ["all", "production", "web"],
    description: "Developed and launched the official responsive web platform (ethdiabetes.org) featuring content management workflows, accessible UI patterns, and optimized SEO structures to streamline communication between health professionals and patients.",
    image: "/project-dashboard.jpg",
    tags: ["React", "CMS", "Accessible UI", "SEO", "Healthcare"],
    statusBadge: { label: "Live Platform", type: "live" },
    liveUrl: "https://ethdiabetes.org",
  },
  {
    id: "wkucms",
    title: "Automated Clearance Management System (WKU CMS)",
    category: ["all", "production"],
    description: "Collaborated in Wolkite University Incubation Center to build a comprehensive Clearance Management System for university administration and students using Next.js, Material UI, Tailwind CSS, and MongoDB, adhering strictly to SDLC methodologies.",
    image: "/wkucms.png",
    tags: ["Next.js", "Material UI", "Tailwind CSS", "MongoDB", "SDLC"],
    statusBadge: { label: "It's confidential.", type: "confidential" },
    isConfidential: true,
  },
  {
    id: "jobboard",
    title: "Job Board Mobile App",
    category: ["all", "mobile", "opensource"],
    description: "Cross-platform mobile application built with React Native and Firebase. Features job search, employer filtering, direct application submission, authentication, and responsive mobile-first UI.",
    image: "/jobboard.png",
    tags: ["React Native", "Firebase", "REST API", "Mobile App"],
    statusBadge: { label: "Open Source", type: "opensource" },
    githubUrl: "https://github.com/eyob-kefale/job_board_app",
  },
  {
    id: "crwn",
    title: "Crwn Clothing E-Commerce",
    category: ["all", "web", "opensource"],
    description: "Full-scale modern e-commerce storefront with category browsing, cart state management using Redux, user authentication and persistent storage via Firebase, and Stripe checkout integration.",
    image: "/crwn.png",
    tags: ["React", "Redux", "Firebase", "Stripe", "E-Commerce"],
    statusBadge: { label: "Open Source", type: "opensource" },
    githubUrl: "https://github.com/eyob-kefale/crwn-cloting/tree/main/crown-clothing",
  },
  {
    id: "blogpost",
    title: "Blog Post ALX Platform",
    category: ["all", "web", "opensource"],
    description: "Full-stack publishing web application built during the ALX Software Engineering program. Implements dynamic article authoring, user profile management, responsive styling, and modular architecture.",
    image: "/blogpost.png",
    tags: ["Fullstack", "JavaScript", "HTML5", "CSS3", "ALX"],
    statusBadge: { label: "Open Source", type: "opensource" },
    githubUrl: "https://github.com/eyob-kefale/Blog-Post-alx",
  },
  {
    id: "stockmgmt",
    title: "Enterprise Stock Management System",
    category: ["all", "production"],
    description: "Architected and deployed a real-time inventory and stock control application featuring automatic low-stock notifications, transactional audits, normalized MySQL database schemas, and PHP backend logic to guarantee data consistency.",
    image: "/project-dashboard.jpg",
    tags: ["PHP", "MySQL", "Inventory Control", "Transactional Audits"],
    statusBadge: { label: "Enterprise System", type: "production" },
  },
  {
    id: "mern",
    title: "MERN Stack Projects Collection",
    category: ["all", "web", "opensource"],
    description: "A comprehensive repository of production-ready web apps and microservices built using MongoDB, Express.js, React.js, and Node.js with JWT authentication and RESTful endpoints.",
    image: "/mern.jpg",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs"],
    statusBadge: { label: "Open Source", type: "opensource" },
    githubUrl: "https://github.com/eyob-kefale/MERN-projects",
  },
];

/* ─── Certificates Data ──────────────────────────────────── */

interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  credentialId?: string;
  description: string;
  skills: string[];
  imageSrc: string;
  verifyUrl?: string;
  downloadUrl?: string;
}

const certificatesList: CertificateItem[] = [
  {
    id: "alx-swe",
    title: "ALX Software Engineering Program Graduate",
    issuer: "ALX Africa / Holberton School",
    credentialId: "LErN8XRJYm",
    description: "Intensive 12-month program covering full-stack software development, low-level algorithms, system engineering, distributed databases, DevOps, and collaborative agile engineering.",
    skills: ["Fullstack Engineering", "C/Python", "DSA", "DevOps", "Unix/Linux"],
    imageSrc: "/cert-alx.jpg",
    verifyUrl: "https://intranet.alxswe.com/certificates/LErN8XRJYm",
  },
  {
    id: "huawei-datacom",
    title: "Huawei Datacom Certification (HCIA — Datacom)",
    issuer: "Huawei ICT Academy",
    description: "Certified proficiency in enterprise routing, switching protocols, IPv4/IPv6 architectures, network security, WLAN principles, and SDN cloud interconnectivity.",
    skills: ["Routing & Switching", "Network Security", "TCP/IP", "WLAN", "Huawei VRP"],
    imageSrc: "/cert-huawei.jpg",
  },
  {
    id: "linux-essentials",
    title: "NDG Linux Essentials Certification",
    issuer: "Cisco Networking Academy & NDG",
    description: "Hands-on certification validating proficiency in Linux command line tools, process management, file permissions, shell scripting, and open-source system security.",
    skills: ["Linux Shell", "Bash Scripting", "User Permissions", "System Admin"],
    imageSrc: "/cert-linux.jpg",
  },
  {
    id: "redhat-appdev",
    title: "Red Hat Application Development Certification",
    issuer: "Red Hat Academy",
    description: "Enterprise software architecture certification focusing on containerized applications, microservices deployment, and robust backend cloud solutions.",
    skills: ["Application Architecture", "Containers", "Enterprise Backend", "Cloud Native"],
    imageSrc: "/cert-redhat.jpg",
  },
];

/* ─── Experience Timeline Data ───────────────────────────── */

const experienceList = [
  {
    role: "Fullstack Engineer",
    company: "Right tech solution plc",
    location: "Addis Ababa, Ethiopia",
    period: "Nov 2024 — Present",
    tasks: [
      "AddisGebeya: Engineered a demand-driven marketplace connecting consumer demand to vendors with Telebirr API & webhooks payment processing, deployed as a Mini App inside Telebirr SuperApp.",
      "Ethiopian Diabetes Association (ethdiabetes.org): Built and launched the responsive official healthcare platform with CMS workflows, accessible UI, and optimized SEO.",
      "Enterprise Stock Management System: Architected a real-time inventory application with low-stock alerts, transactional audits, normalized MySQL schemas, and PHP logic.",
      "Drivers Training Operations System: Built centralized tracking suite for driver training centers with candidate registration, progress logging, and interactive supervisor dashboards.",
    ],
  },
  {
    role: "Clearance Management System Lead",
    company: "WKU Incubation Center (Wolkite University)",
    location: "Wolkite, Ethiopia",
    period: "2022 — 2024",
    tasks: [
      "Collaborated with project advisor and team to build Wolkite University's official Clearance Management System.",
      "Engineered full-stack features using Next.js, Material UI (MUI), Tailwind CSS, and MongoDB while strictly adhering to SDLC methodologies.",
    ],
  },
  {
    role: "Fullstack Engineer Intern",
    company: "Hindeke Technology PLC",
    location: "Bahirdar, Amhara, Ethiopia",
    period: "Feb 2023 — Jun 2023",
    tasks: [
      "Delivered full-stack web solutions with React and Firebase.",
      "Engineered real-time database syncing, user authentication, and responsive client interfaces.",
    ],
  },
  {
    role: "Competitive Programmer & Algorithmic Design",
    company: "ETCPC (Ethiopian Collegiate Programming Contest)",
    location: "ASTU, Ethiopia",
    period: "Sep 2021",
    tasks: [
      "Competed in university-wide algorithm design and competitive programming using C++, Python, and Java to solve complex computational problems.",
    ],
  },
];

/* ─── Skills Categorized ─────────────────────────────────── */

const skillCategories = [
  {
    name: "Frontend & Mobile",
    items: ["Next.js", "React.js", "React Native", "Tailwind CSS", "Material UI (MUI)", "FlutterFlow", "Redux", "Framer Motion"],
  },
  {
    name: "Backend & APIs",
    items: ["Node.js", "Express.js", "Nest.js", "PHP", "RESTful APIs", "Server-Side Rendering (SSR)", "Webhooks", "Telebirr API"],
  },
  {
    name: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "Python", "Java", "C++", "PHP", "SQL"],
  },
  {
    name: "Databases & Storage",
    items: ["MongoDB", "MySQL", "PostgreSQL", "Firebase Firestore", "Normalized Schema Design"],
  },
  {
    name: "DevOps, Security & Tools",
    items: ["Docker", "Git", "GitHub Actions", "CentOS Web Panel", "cPanel", "XAMPP", "Burp Suite", "SSL Security", "Cursor IDE", "VS Code"],
  },
];

/* ═══════════════════════════════════════════════════════════ */
/*  MAIN PAGE COMPONENT                                       */
/* ═══════════════════════════════════════════════════════════ */

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lightbox state
  const [lightboxData, setLightboxData] = useState<{
    isOpen: boolean;
    imageSrc: string;
    title: string;
    subtitle?: string;
  }>({
    isOpen: false,
    imageSrc: "",
    title: "",
    subtitle: "",
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  const openLightbox = (imageSrc: string, title: string, subtitle?: string) => {
    setLightboxData({
      isOpen: true,
      imageSrc,
      title,
      subtitle,
    });
  };

  const closeLightbox = () => {
    setLightboxData((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <>
      {/* ───────── NAVIGATION ───────── */}
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`} id="navbar">
        <div className="navbar-inner">
          <a href="#hero" className="logo" id="logo">
            <span className="logo-dot" />
            Eyob<span style={{ color: "var(--accent)" }}>.</span>
          </a>

          <ul className="nav-links" id="nav-links">
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Portfolio</a></li>
            <li><a href="#certificates">Certificates</a></li>
            <li><a href="#contact" className="nav-cta">Contact Me</a></li>
          </ul>

          {/* Interactive Mobile Menu Hamburger Button */}
          <button
            type="button"
            className={`mobile-menu-btn ${mobileMenuOpen ? "active" : ""}`}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            id="mobile-menu-btn"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* ───────── FULLSCREEN MOBILE NAVIGATION OVERLAY ───────── */}
      <div
        className={`mobile-nav-overlay ${mobileMenuOpen ? "open" : ""}`}
        id="mobile-nav-drawer"
        aria-hidden={!mobileMenuOpen}
      >
        <button
          type="button"
          className="mobile-drawer-close"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          ✕
        </button>
        <a href="#hero" onClick={handleNavClick}>Home</a>
        <a href="#about" onClick={handleNavClick}>About &amp; Resume</a>
        <a href="#services" onClick={handleNavClick}>Services</a>
        <a href="#projects" onClick={handleNavClick}>Portfolio</a>
        <a href="#certificates" onClick={handleNavClick}>Certificates</a>
        <a href="#contact" onClick={handleNavClick} className="mobile-cta">Contact Me</a>
      </div>

      {/* ───────── HERO SECTION ───────── */}
      <section className="hero" id="hero">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              Fullstack Engineer @ Right tech solution plc
            </div>
            <h1 className="hero-title" id="hero-title">
              Hi, I&apos;m <span className="accent">Eyob Kefale</span> — Full Stack Engineer
            </h1>
            <p className="hero-description" id="hero-description">
              Versatile Full-Stack &amp; Mobile Developer, ALX Software Engineering graduate,
              and Wolkite University Software Engineering alumnus (CGPA: 3.67). Experienced
              in building reverse e-commerce platforms, Telebirr SuperApp Mini Apps, healthcare platforms,
              and enterprise stock systems.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn-primary" id="btn-view-work">
                View My Portfolio
                <ArrowRightIcon />
              </a>
              {/* Native PDF opener directly to /resume.pdf */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                id="btn-resume-hero"
                title="Opens PDF directly in browser"
              >
                <DownloadIcon />
                Resume PDF
              </a>
              <a href="#certificates" className="btn-secondary" id="btn-certs-hero">
                Certificates
              </a>
            </div>

            {/* Strict stats based on user request: removing happy clients/projects completed, adding 47 GitHub repos, CGPA, current status */}
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">47</div>
                <div className="stat-label">GitHub Repos (Public &amp; Private)</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">3.67</div>
                <div className="stat-label">BSc CGPA (Software Eng.)</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">Nov 2024</div>
                <div className="stat-label">Right Tech Solution (Current)</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">12 Mo</div>
                <div className="stat-label">ALX SWE Graduate</div>
              </div>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <div className="hero-image-glow" />
            <div className="hero-image-container">
              {/* Profile Image with Crack in Piece & Merge Animation! */}
              <CrackMergeImage
                src="/profile-suit.png"
                alt="Eyob Kefale - Fullstack Engineer"
                showBadge={true}
              />
            </div>
            <div className="hero-floating-card card-1">
              <div className="floating-icon green">
                <CodeIcon />
              </div>
              <div className="floating-text">
                <strong>Fullstack Engineer</strong>
                <span>Right Tech Solution</span>
              </div>
            </div>
            <div className="hero-floating-card card-2">
              <div className="floating-icon blue">
                <GithubIcon />
              </div>
              <div className="floating-text">
                <strong>47 Repositories</strong>
                <span>Public &amp; Private</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── ABOUT SECTION (WITH RESUME & EXPERIENCE) ───────── */}
      <AboutSection openLightbox={openLightbox} />

      {/* ───────── SERVICES SECTION ───────── */}
      <ServicesSection />

      {/* ───────── PORTFOLIO / PROJECTS SECTION ───────── */}
      <ProjectsSection />

      {/* ───────── CERTIFICATES SECTION ───────── */}
      <CertificatesSection openLightbox={openLightbox} />

      {/* ───────── CONTACT SECTION ───────── */}
      <ContactSection />

      {/* ───────── LIGHTBOX MODAL ───────── */}
      <LightboxModal
        isOpen={lightboxData.isOpen}
        imageSrc={lightboxData.imageSrc}
        title={lightboxData.title}
        subtitle={lightboxData.subtitle}
        onClose={closeLightbox}
      />

      {/* ───────── FOOTER ───────── */}
      <footer className="footer">
        <div className="footer-inner">
          <p className="footer-text">
            © {new Date().getFullYear()} <span className="accent-text">Eyob Kefale</span>. All rights reserved. Full Stack Engineer.
          </p>
          <div className="footer-links">
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#projects">Portfolio</a>
            <a href="#certificates">Certificates</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </>
  );
}

/* ─── About Section Component ────────────────────────────── */

function AboutSection({
  openLightbox,
}: {
  openLightbox: (src: string, title: string, subtitle?: string) => void;
}) {
  const { ref, isInView } = useInView();

  return (
    <section className="section" id="about">
      <div className="section-inner" ref={ref}>
        <div className="section-header">
          <div className="section-label">Biography &amp; Background</div>
          <h2 className="section-title">About Me</h2>
          <p className="section-description">
            Versatile Full-Stack and Mobile Developer proficient in MERN stack, Next.js, and React Native.
            Adept at rapid technology adoption, complex troubleshooting, and delivering high-performance,
            user-centric solutions.
          </p>
        </div>

        <div className={`about-grid animate-in ${isInView ? "visible" : ""}`}>
          <div className="about-terminal-card">
            <div className="terminal-header">
              <span className="terminal-dot red" />
              <span className="terminal-dot yellow" />
              <span className="terminal-dot green" />
              <span className="terminal-title">eyob@swe-workstation:~</span>
            </div>
            <div className="terminal-body">
              <div className="terminal-row"><span className="term-prompt">$</span> <span className="term-cmd">whoami</span></div>
              <div className="term-text accent">Eyob Kefale — Full Stack Software Engineer</div>

              <div className="terminal-row"><span className="term-prompt">$</span> <span className="term-cmd">cat profile.json</span></div>
              <pre className="term-code">{`{
  "role": "Fullstack Engineer",
  "company": "Right tech solution plc",
  "education": "BSc Software Eng (WKU, CGPA: 3.67)",
  "fellowship": "ALX Software Engineering (12-Mo)",
  "location": "Addis Ababa, Ethiopia",
  "github_repos": 47,
  "stack": ["Next.js", "React Native", "Node.js", "Telebirr API"]
}`}</pre>

              <div className="terminal-row"><span className="term-prompt">$</span> <span className="term-cmd">git status</span></div>
              <div className="term-badge-line">
                <span className="term-status-live" /> On branch main &bull; Ready to build production software
              </div>
            </div>
          </div>

          <div className="about-text">
            <h3>Professional Summary</h3>
            <p>
              I&apos;m <strong>Eyob Kefale</strong>, a Software Engineer from Addis Ababa, Ethiopia.
              I hold a <strong>BSc in Software Engineering from Wolkite University (WKU)</strong> with a
              graduating <strong>CGPA of 3.67</strong>, alongside completion of the rigorous <strong>12-month
              ALX Software Engineering programme</strong>.
            </p>
            <p>
              Currently serving as a <strong>Fullstack Engineer at Right tech solution plc</strong> in Addis Ababa
              (Nov 2024 — Present), I engineer demanding production systems including <em>AddisGebeya</em> (a reverse
              e-commerce platform integrated as a Telebirr SuperApp Mini App with real-time webhooks), the official
              web platform for the <em>Ethiopian Diabetes Association</em> (ethdiabetes.org), enterprise stock
              auditing suites, and driver training management software.
            </p>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "1.5rem" }}>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ padding: "0.65rem 1.25rem", fontSize: "0.85rem" }}
              >
                <DownloadIcon /> Open Resume PDF
              </a>
              <a
                href="https://github.com/eyob-kefale"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ padding: "0.65rem 1.25rem", fontSize: "0.85rem" }}
              >
                <GithubIcon /> View GitHub (47 Repos)
              </a>
            </div>
          </div>
        </div>

        {/* Categorized Skills */}
        <div style={{ marginTop: "3rem" }}>
          <h3 className="timeline-heading">Technical Proficiencies</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
            {skillCategories.map((cat, idx) => (
              <div key={idx} style={{ background: "var(--bg-card)", border: "1px solid var(--border-color)", borderRadius: "16px", padding: "1.25rem" }}>
                <h4 style={{ color: "var(--accent)", fontSize: "0.92rem", fontWeight: 600, marginBottom: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  {cat.name}
                </h4>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
                  {cat.items.map((item, i) => (
                    <span
                      key={i}
                      style={{
                        padding: "0.3rem 0.65rem",
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid var(--border-light)",
                        borderRadius: "100px",
                        fontSize: "0.76rem",
                        color: "var(--text-primary)",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="timeline-section">
          <h3 className="timeline-heading">
            <ServerIcon /> Professional Experience &amp; Engineering Roles
          </h3>
          <div className="timeline-grid">
            {experienceList.map((exp, index) => (
              <div className="timeline-card" key={index}>
                <div className="timeline-dot" />
                <div className="timeline-card-inner">
                  <div className="timeline-top">
                    <div>
                      <div className="timeline-role">{exp.role}</div>
                      <div className="timeline-company">{exp.company}</div>
                    </div>
                    <div className="timeline-date">{exp.period}</div>
                  </div>
                  <div className="timeline-location">{exp.location}</div>
                  <ul className="timeline-points">
                    {exp.tasks.map((task, tIndex) => (
                      <li key={tIndex}>{task}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Services Section Component ─────────────────────────── */

function ServicesSection() {
  const { ref, isInView } = useInView();

  return (
    <section className="section services" id="services">
      <div className="section-inner" ref={ref}>
        <div className="section-header">
          <div className="section-label">What I Build</div>
          <h2 className="section-title">Specialized Services</h2>
          <p className="section-description">
            End-to-end engineering from system architecture to mobile deployment,
            payment integration, and enterprise administration.
          </p>
        </div>
        <div className="services-grid stagger-children">
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

/* ─── Projects Section Component ─────────────────────────── */

function ProjectsSection() {
  const { ref, isInView } = useInView();
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");

  const filteredProjects = activeFilter === "all"
    ? projectsList
    : projectsList.filter((p) => p.category.includes(activeFilter));

  return (
    <section className="section projects" id="projects">
      <div className="section-inner" ref={ref}>
        <div className="section-header">
          <div className="section-label">Featured Works</div>
          <h2 className="section-title">Portfolio Projects</h2>
          <p className="section-description">
            A comprehensive showcase of production applications, Telebirr Mini Apps,
            enterprise suites, university incubation projects, and open-source software.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="project-filters">
          <button
            className={`filter-btn ${activeFilter === "all" ? "active" : ""}`}
            onClick={() => setActiveFilter("all")}
          >
            All Works ({projectsList.length})
          </button>
          <button
            className={`filter-btn ${activeFilter === "production" ? "active" : ""}`}
            onClick={() => setActiveFilter("production")}
          >
            Production &amp; Enterprise
          </button>
          <button
            className={`filter-btn ${activeFilter === "web" ? "active" : ""}`}
            onClick={() => setActiveFilter("web")}
          >
            Web Applications
          </button>
          <button
            className={`filter-btn ${activeFilter === "mobile" ? "active" : ""}`}
            onClick={() => setActiveFilter("mobile")}
          >
            Mobile Apps
          </button>
          <button
            className={`filter-btn ${activeFilter === "opensource" ? "active" : ""}`}
            onClick={() => setActiveFilter("opensource")}
          >
            Open Source
          </button>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid stagger-children">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id || index}
              className={`project-card animate-in ${isInView ? "visible" : ""}`}
              id={`project-${project.id}`}
            >
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-card-img"
                  loading="lazy"
                />

                <div className="project-card-top">
                  <span
                    className={`project-status-badge ${
                      project.statusBadge.type === "confidential"
                        ? "badge-confidential"
                        : project.statusBadge.type === "live"
                        ? "badge-live"
                        : project.statusBadge.type === "production"
                        ? "badge-production"
                        : "badge-opensource"
                    }`}
                  >
                    {project.statusBadge.type === "confidential" && <LockIcon />}
                    {project.statusBadge.type === "live" && <CheckCircleIcon />}
                    {project.statusBadge.label}
                  </span>
                </div>

                <div className="project-overlay">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label={`View live site for ${project.title}`}
                    >
                      <ExternalLinkIcon />
                    </a>
                  )}
                  {project.githubUrl && !project.liveUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label={`View GitHub repository for ${project.title}`}
                    >
                      <GithubIcon />
                    </a>
                  )}
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

                {/* Actions bottom row */}
                <div className="project-actions">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-project-action btn-project-github"
                    >
                      <GithubIcon />
                      GitHub Link
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-project-action btn-project-live"
                    >
                      <ExternalLinkIcon />
                      Live Website
                    </a>
                  )}
                  {project.isConfidential && (
                    <span className="btn-project-action btn-project-confidential">
                      <LockIcon />
                      It&apos;s confidential.
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Certificates Section Component ─────────────────────── */

function CertificatesSection({
  openLightbox,
}: {
  openLightbox: (src: string, title: string, subtitle?: string) => void;
}) {
  const { ref, isInView } = useInView();

  return (
    <section className="section" id="certificates">
      <div className="section-inner" ref={ref}>
        <div className="section-header">
          <div className="section-label">Verified Qualifications</div>
          <h2 className="section-title">Certifications &amp; Credentials</h2>
          <p className="section-description">
            Recognized industry credentials in software engineering, cloud computing,
            networking, and Linux system administration. Click any certificate to inspect full resolution.
          </p>
        </div>

        <div className="certificates-grid stagger-children">
          {certificatesList.map((cert) => (
            <div
              key={cert.id}
              className={`certificate-card animate-in ${isInView ? "visible" : ""}`}
              id={`cert-${cert.id}`}
            >
              <div>
                <div className="cert-badge-row">
                  <span className="cert-issuer">{cert.issuer}</span>
                  <span className="cert-verified">
                    <CheckCircleIcon /> Verified
                  </span>
                </div>

                {/* Certificate Image Display directly on page */}
                <div
                  className="cert-image-preview"
                  onClick={() => openLightbox(cert.imageSrc, cert.title, cert.issuer)}
                  title="Click to view full certificate"
                >
                  <img
                    src={cert.imageSrc}
                    alt={cert.title}
                    className="cert-card-img"
                    loading="lazy"
                  />
                  <div className="cert-image-zoom-hint">
                    <ZoomInIcon /> Tap for Full Certificate
                  </div>
                </div>

                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-desc">{cert.description}</p>

                {cert.credentialId && (
                  <div className="cert-id">Credential ID: {cert.credentialId}</div>
                )}

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.25rem" }}>
                  {cert.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      style={{
                        fontSize: "0.72rem",
                        padding: "0.25rem 0.6rem",
                        background: "rgba(201, 243, 29, 0.08)",
                        color: "var(--accent)",
                        borderRadius: "6px",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="cert-actions">
                {/* For ALX: Keep intranet verification as requested */}
                {cert.verifyUrl && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-cert-primary"
                  >
                    <ExternalLinkIcon /> Verify on Intranet
                  </a>
                )}
                {/* For all: Open high-res preview on page */}
                <button
                  type="button"
                  onClick={() => openLightbox(cert.imageSrc, cert.title, cert.issuer)}
                  className="btn-cert-secondary"
                  style={{ cursor: "pointer" }}
                >
                  <ZoomInIcon /> Inspect Full Certificate
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Dropbox Integration Banner */}
        <div className="dropbox-banner animate-in">
          <div className="dropbox-banner-left">
            <div className="dropbox-icon-box">
              <DropboxIcon />
            </div>
            <div className="dropbox-banner-text">
              <h4>Dropbox Credentials Vault Ready</h4>
              <p>
                Academic transcripts, degrees, and full-resolution certificates are hosted on Dropbox.
                You can paste your custom certificate links or inspect documents upon request.
              </p>
            </div>
          </div>
          <a
            href="mailto:eyobkefale1@gmail.com?subject=Certificate%20and%20Credential%20Request"
            className="btn-dropbox-action"
          >
            <MailIcon /> Request Dropbox Access
          </a>
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
          <h2 className="section-title">Let&apos;s Build Together</h2>
          <p className="section-description">
            Available for full-time software engineering roles, contract engineering,
            and high-impact development projects. Reach out directly.
          </p>
        </div>

        <div className={`contact-grid animate-in ${isInView ? "visible" : ""}`}>
          <div className="contact-info">
            <h3>Direct Contact</h3>
            <p>
              I usually respond within a few hours. Feel free to connect for software engineering
              collaborations, Telebirr Mini App development, or full-stack architectural inquiries.
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
                  <PhoneIcon />
                </div>
                <div className="contact-detail-text">
                  <strong>Phone / Mobile</strong>
                  <span>+251 934 627 307 / 0716 663 621</span>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <MapPinIcon />
                </div>
                <div className="contact-detail-text">
                  <strong>Location</strong>
                  <span>Addis Ababa, Ethiopia</span>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <GithubIcon />
                </div>
                <div className="contact-detail-text">
                  <strong>GitHub Profile</strong>
                  <a href="https://github.com/eyob-kefale" target="_blank" rel="noopener noreferrer">
                    github.com/eyob-kefale (47 Repositories)
                  </a>
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
                <input type="text" id="firstName" name="firstName" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" placeholder="Your Surname" required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" placeholder="name@company.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" placeholder="Project Inquiry / Hiring" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Details about your inquiry..." required />
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
