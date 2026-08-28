import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Lexend } from "next/font/google";
import ClashDisplay from "next/font/local";
import { ViewTransition } from "react";

const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lexend",
});

const clashDisplay = ClashDisplay({
  src: "./fonts/ClashDisplay-Variable.woff2",
  display: "swap",
  variable: "--font-clash-display",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://gabriel-manciu.be";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Gabriel Manciu • Développeur Frontend",
    template: "%s | Gabriel Manciu • Développeur Frontend",
  },
  description:
    "Explorez mon portfolio et découvrez mes projets en tant que développeur frontend. Je transforme des maquettes créatives en expériences web soignées.",
  applicationName: "Gabriel Manciu Portfolio",
  authors: [{ name: "Gabriel Manciu", url: siteUrl }],
  creator: "Gabriel Manciu",
  publisher: "Gabriel Manciu",
  keywords: [
    "Gabriel Manciu",
    "Développeur Frontend",
    "Portfolio",
    "Frontend Developer",
    "Web Developer",
    "React",
    "TypeScript",
    "JavaScript",
    "UI/UX",
    "Vue.js",
    "Nuxt.js",
    "Web Design",
    "Web Development",
    "Responsive Design",
    "Web Applications",
    "User Interface",
    "User Experience",
    "Développeur Web",
    "Développement Web",
    "Design d'Interface",
    "Expérience Utilisateur",
    "Développeur frontend",
    "Développeur frontend Vue.js",
    "Design web",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    title: "Gabriel Manciu • Développeur Frontend",
    description:
      "Explorez mon portfolio et découvrez mes projets en tant que développeur frontend. Je transforme des maquettes créatives en expériences web soignées.",
    siteName: "Gabriel Manciu • Portfolio",
    images: [
      {
        url: "/images/gabriel-manciu-portfolio.png",
        width: 3554,
        height: 1796,
        alt: "Aperçu du portfolio de Gabriel Manciu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel Manciu • Développeur Frontend",
    description:
      "Explorez mon portfolio et découvrez mes projets en tant que développeur frontend. Je transforme des maquettes créatives en expériences web soignées.",
    images: ["/images/gabriel-manciu-portfolio.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0e3258",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransition enter="fade-in" exit="fade-out">
      <html
        lang="fr"
        className={`h-full antialiased ${clashDisplay.variable} ${lexend.variable}`}
        data-scroll-behavior="smooth"
      >
        <body>
          <div className="background fixed top-0 left-0 z-0 h-screen w-full"></div>
          {children}
        </body>
      </html>
    </ViewTransition>
  );
}
