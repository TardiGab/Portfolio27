import type { Metadata } from "next";
import "./globals.css";
import { Lexend } from "next/font/google";
import ClashDisplay from "next/font/local";

import Navigation from "./components/ui/Navigation/navigation";

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

export const metadata: Metadata = {
  title: {
    default: "Gabriel Manciu • Développeur Frontend Junior",
    template: "%s | Gabriel Manciu • Développeur Frontend Junior",
  },
  description:
    "Explorez mon portfolio et découvrez mes projets en tant que développeur frontend junior. Je transforme des maquettes créatives en expériences web soignées.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`h-full antialiased ${clashDisplay.variable} ${lexend.variable}`}
    >
      <body>
        <header>
          <Navigation className="navigation" />
        </header>
        <main className="relative z-10">
          <div className="background fixed top-0 left-0 z-0 h-screen w-full"></div>
          <div className="relative z-10">{children}</div>
        </main>
        <footer></footer>
      </body>
    </html>
  );
}
