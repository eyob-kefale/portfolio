import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Eyob Kefale | Full Stack Developer Portfolio",
  description:
    "Welcome to the portfolio of Eyob Kefale — a Full Stack Developer and Software Engineering graduate specializing in modern web applications, React, Next.js, and scalable backend systems.",
  keywords: [
    "Eyob Kefale",
    "Full Stack Developer",
    "Software Engineer",
    "React",
    "Next.js",
    "Portfolio",
    "Web Developer",
  ],
  openGraph: {
    title: "Eyob Kefale | Full Stack Developer",
    description:
      "Full Stack Developer crafting modern, performant web experiences.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
