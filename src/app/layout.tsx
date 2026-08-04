import type { Metadata } from "next";
import "./globals.css";
import { Lexend } from "next/font/google";
import ClashDisplay from "next/font/local";

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
  title: "Gabriel Manciu • Développeur Frontend Junior",
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
      lang="en"
      className={`h-full antialiased ${clashDisplay.variable} ${lexend.variable}`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
