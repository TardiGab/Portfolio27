import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
