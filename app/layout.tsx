import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://eyobkefale.com";

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Eyob Kefale | Full Stack Software Engineer & Mobile Developer",
    template: "%s | Eyob Kefale",
  },
  description:
    "Official portfolio of Eyob Kefale — Full Stack Software Engineer & Mobile Developer based in Addis Ababa, Ethiopia. ALX Software Engineering graduate, specializing in Next.js, React, React Native, Node.js, and high-impact web & mobile engineering at Right Tech Solution.",
  applicationName: "Eyob Kefale Portfolio",
  authors: [
    {
      name: "Eyob Kefale",
      url: "https://github.com/eyob-kefale",
    },
  ],
  creator: "Eyob Kefale",
  publisher: "Eyob Kefale",
  keywords: [
    "Eyob Kefale",
    "eyob kefale",
    "eyob-kefale",
    "Eyob Kefale portfolio",
    "Eyob Kefale software engineer",
    "Eyob Kefale developer",
    "Eyob Kefale full stack",
    "Eyob Kefale web developer",
    "Eyob Kefale Ethiopia",
    "Eyob Kefale Addis Ababa",
    "Eyob Kefale Right Tech Solution",
    "Eyob Kefale ALX",
    "Eyob Kefale GitHub",
    "Eyob Kefale LinkedIn",
    "Job Kefale",
    "Full Stack Engineer Ethiopia",
    "Software Engineer Addis Ababa",
    "Next.js Developer Ethiopia",
    "React Native Developer Ethiopia",
    "MERN Stack Developer Addis Ababa",
    "ALX Software Engineering Graduate",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Eyob Kefale | Full Stack Software Engineer Portfolio",
    description:
      "Explore the projects, technical skills, verified certificates, and career experience of Eyob Kefale — Full Stack Software Engineer & ALX SWE Graduate.",
    url: "/",
    siteName: "Eyob Kefale Portfolio",
    locale: "en_US",
    type: "profile",
    firstName: "Eyob",
    lastName: "Kefale",
    username: "eyob-kefale",
    gender: "male",
    images: [
      {
        url: "/profile-suit.png",
        width: 1200,
        height: 630,
        alt: "Eyob Kefale - Full Stack Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eyob Kefale | Full Stack Software Engineer",
    description:
      "Official portfolio of Eyob Kefale — Full Stack Software Engineer, ALX Graduate, and Mobile Developer based in Addis Ababa, Ethiopia.",
    images: ["/profile-suit.png"],
    creator: "@eyob_kefale",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
  classification: "Software Engineering Portfolio",
  other: {
    "geo.region": "ET",
    "geo.placename": "Addis Ababa",
    "format-detection": "telephone=yes, email=yes, address=yes",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Eyob Kefale",
      givenName: "Eyob",
      familyName: "Kefale",
      additionalName: "Job",
      alternateName: ["Eyob Kefale", "Job Kefale", "eyob-kefale", "Eyob Kefale Mengistu"],
      url: SITE_URL,
      image: `${SITE_URL}/profile-suit.png`,
      jobTitle: "Full Stack Software Engineer",
      description:
        "Full Stack Software Engineer and ALX Software Engineering graduate specializing in Next.js, React, Node.js, React Native, and scalable web solutions.",
      email: "mailto:eyobkefale1@gmail.com",
      telephone: "+251934627307",
      nationality: {
        "@type": "Country",
        name: "Ethiopia",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Addis Ababa",
        addressCountry: "Ethiopia",
      },
      worksFor: {
        "@type": "Organization",
        name: "Right Tech Solution PLC",
      },
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "ALX Software Engineering (Holberton School)",
        },
        {
          "@type": "EducationalOrganization",
          name: "Wolkite University",
        },
      ],
      sameAs: [
        "https://github.com/eyob-kefale",
        "https://www.linkedin.com/in/eyob-kefale-b017a6230/",
        "https://t.me/jobkefale",
      ],
      knowsAbout: [
        "Full Stack Development",
        "Next.js",
        "React",
        "React Native",
        "Node.js",
        "TypeScript",
        "JavaScript",
        "Python",
        "MERN Stack",
        "PostgreSQL",
        "MongoDB",
        "Telebirr SuperApp Mini Apps",
        "REST APIs",
        "Docker",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Eyob Kefale - Official Portfolio",
      alternateName: ["Eyob Kefale Portfolio", "Eyob Kefale Software Engineer Website"],
      description: "Official portfolio website of Eyob Kefale, Full Stack Software Engineer",
      publisher: {
        "@id": `${SITE_URL}/#person`,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profilepage`,
      url: SITE_URL,
      name: "Eyob Kefale | Full Stack Software Engineer",
      isPartOf: {
        "@id": `${SITE_URL}/#website`,
      },
      mainEntity: {
        "@id": `${SITE_URL}/#person`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
